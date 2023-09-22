---
title: '微服务注册中心'
date: 2023-09-22  
tags:
- '微服务注册中心'
- 'abp'
- 'dotnet'
- 'consul'
categories:
- '技术'
---

## 目录
[[toc]]

## 微服务注册中心  
### 什么是注册中心
我们需要搞定这个问题，咱们得从一个实际场景中去学习，我们以购物场景为例说明，在购物和场景中，总共涉及到三个角色，消费者，商店，商场。   
在这个场景中，我们以画图平解决   

#### 为什么要使用注册中心    
图解析   
优点   
1、解耦   

服务消费者个服务提供解耦，各自变化，不互相影响    

2、扩展   

服务消费者和服务提供者增加和删除新的服务，对于双方没有任务影响   

3、中介者设计模式   
这是一种多对多关系的典范    

#### 注册中心类型   

`zookeeper`  

一个被广泛使用的分布式的高性能服务   

`consul`  

一个发现和配置服务的工具，提供API注册和发现服务，为了确保操作性，`consul`会执行健康检查    

`etcd`  

一个高可用，分布式的，一致性key-value结构，用于共享配置信息服务和服务发现k8s使用了etcd   

`eureka`

这个注册中心已经闭源了，建议不要使用了  


### 在微服务中如何使用consul
#### 什么是Consul  
Consul是一个用来实现分布式系统的服务发现与配置的开源工具。是由go语言开发。他主要由多个组成部分：  
   + 服务发现：客户端通过Consul提供服务，类似于API,Mysql，或者其他客户端可以使用Consul发现服务的提供者。使用类似DNS或者HTTP,应用程序和可以很轻松的发现他们依赖的服务。     
   + 检查健康： Consul客户端可以提供与给定服务相关的健康检查（Web服务器返回200 ok）或者本地节点（内存利用率低于90%）。这些信息可以监控集群的运行情况，并且使访问远离不健康主机的组件。   
   + 键值对存储： 应用程序可以使用Cousul的层级键值对。  
   + 多数据中心： Consul有开箱及用的多数据中心。   

### Consul 的角色  

`client`:客户端，无状态，将Htpp和DNS接口请求转发给局域网内的服务端集群。   
`server`:服务端，保存配置信息，高可用集群，在局域网内与本地客户端通讯，通过广域网与其他数据中心通讯，每个数据中心的`server`数量推荐为3 个或者5个。   

`agent`
 组成`Consul`集群的每个成员上都要运行一个 `agent`,可以通过 `consul agent` 命令来启动。 `agent` 可以运行在 `server` 状态。自然的，运行在 `server` 状态的节点被称为`server`节点; 运行在`client` 状态的节点被称为`client`节点。    

 `client` 节点  
 负责转发所有的`RPC`到`server`节点。  本身无状态，且轻量级，因此，可以部署大量的client节点。    

 `server` 节点   
 负责组成cluster的复杂工作（选举、状态维护、转发请求到`lead`）,以及consul提供服务（响应RCP请求）。考虑到容错和收敛，一般部署3~5个比较合适。

 ###### Consul内幕  
 术语：    
 +  代理（agent）:代理是`Consul`集群上每个成员的守护进程，它是由`consul agent` 开始运行。 代理能够以客户端或服务器模式运行。由于所有点节都必须运行代理，所以将节点引用这客户端或服务器更为简单，但还有其他实例的代理。所有代理都可以运行DNS或Http接口，并负责运行检查和保持服务同步。  
 + 客户端：客户端可以将所有RPC请求转发到服务器的代理。客户端是相对无状态的。客户端执行的唯一后台活动是`LAN goosip`池。它消耗最小的资源开销和少量的网络带宽。    
 + 服务器端： 服务器具有功能扩展的代理，它主要参与维护集群状态，响应`RPC`查询，与其他数据中心交换`WAN goosip`,以及向上级或远程服务中心转发查询。  
 + 数据中心：虽然数据中心定义似乎很明显，但仍然有一些细微的细节需要考虑。我们将一个数据中心定义为一个私有、低延迟和高带宽的网络环境。这不包括通过公共互联网的通信，但是为了我们的，单个EC2区域内的多个可用区域将被视为单个数据中心的一部分。  
+ `Gossip`: `consul`是建立在`serf`之上的，它提供了一个完整的`gossip`协议,用在很多地方。Serf提供了成员，故障检测和事件广播。`Gossip`的节点到节点之间的通信使用了UDP协议。  
+ `LAN Gossip`:指在同一个局域网或数据中心的节点上的LAN Gossip池。  
+ `WAN Gossip`:指包含服务器的WAN Gossip池，这些服务在不同的数据中心。通过网络进行通信。
+ 一致性协议采用Raft算法用来保证服务的高可用。  
+ 成员管理和消息广播采用Gossip协议，支持ACL访问控制。   



ACL技术在路由器中被广泛采用，它是一种基于包过滤的流控制技术。控制列表通过把源地址、目的地址及端口号作为数据包检查的基本元素，并可以规定符合条件的数据包是否允许通过。   

gossip就是p2p协议。他主要要做的事情是，去中心化。   

这个协议就是模拟人类中传播谣言的行为而来。首先要传播谣言就要有种子节点。种子节点每秒都会随机向其他节点发送自己所拥有的节点列表，以及需要传播的消息。任何新加入的节点，就在这种传播方式下很快地被全网所知道。    


Consul运行流程图
结合图进行讲解，请看图

#### Consul微服务中实践(如何注册，发现)
Consul如何注册，发现服务？
​ 步骤

​ 1、Consul下载地址

​ 官网地址: `https://www.consul.io/`

​ 下载地址: `https://releases.hashicorp.com/consul/1.16.2/consul_1.16.2_windows_amd64.zip`  或 `https://www.consul.io/downloads.html`
          
​ 2、服务端启动

​ 1.1 开发模式启动命令：
``` bash
consul.exe agent -dev
```
![Alt text](/images/abpmicroservices/micro004/abpmicroservices0004_0001image.png)   

Version ：consul版本  

​ Node ID : consul当前启动节点编号(guid)   

​ Node Name:节点名称(默认为电脑名称) 

​ Datacenter：数据中心   

​ Server:启动是服务端模式，否则就为客户端模式   

​ Client Addr:客户端连接地址，支持http,https,gRPC,DNS。默认我们使用HTTP方式   

​ Cluster Addr:集群地址，就是Server模式下 启动方式   

​ Encrypt:安全   

​ 1.2 生产模式启动命令：    
``` bash
consul agent -server -bootstrap-expect 1  -data-dir ./consul/data   
```

1.2.1 会出现错误：提示   

![Alt text](/images/abpmicroservices/micro004/abpmicroservices0004_0002image.png)     

主要原因：服务端模式启动的时候，默认绑定的地址是`0.0.0.0`希望绑定默认的ip地址    

``` bash
consul agent -server -bind=127.0.0.1  -bootstrap-expect  1  -data-dir ./consul/data 
```
![Alt text](/images/abpmicroservices/micro004/abpmicroservices0004_0003image.png)     


 1.3 客户端模式启动  

​ 直接使用`net`程序来进行启动  

​ 1.4 总结：  

`consul`启动重要参数`-bind`需要是私有`ip`地址，默认其实就是`0.0.0.0`。当遇到问题的时候一定要先从环境差异性或根源上原因，如果根源上找不到知道问题，可以采用试探法解决问题。   

`consul`有三种模式运行，`client`, `server`,`dev`。   

注意：`dev`模式运行是不会持久化数据，也就重启之后保存的配置信息会丢失。   

下面配上`consul`启动参数简单说明：   

`agent` 　　 `Consul`的核心命令，主要作用有维护成员信息、运行状态检测、声明服务以及处理请求等  
`-server`　　 就是代表`server`模式   
`-ui `　　 代表开启web 控制台   
`-bootstrap-expect `代表想要创建的集群数目，官方建议3或者5  
`-data-dir` 数据存储目录
`-node` 代表当前`node`的名称
`-client` 应该是一个客户端服务注册的地址，可以和当前`server`的一致也可以是其他主机地址，系统默认是`127.0.0.1`
`-bind` 集群通讯地址

运行`cosnul agent`以`server`模式：
​ `-server` ： 定义agent运行在`server`模式   
​ `-bootstrap-expect` ：在一个`datacenter`中期望提供的`server`节点数目，当该值提供的时候，`consul`一直等到达到指定`sever`数目的时候才会引导整个集群，该标记不能和`bootstrap`共用   
​ `-bind`：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0      
​ `-node`：节点在集群中的名称，在一个集群中必须是唯一的，默认是该节点的主机名    
​ `-ui-dir`： 提供存放`web ui`资源的路径，该目录必须是可读的    
​ `-rejoin`：使`consul`忽略先前的离开，在再次启动后仍旧尝试加入集群中。   
`​ -config-dir`：配置文件目录，里面所有以.json结尾的文件都会被加载   
​ `-client：consul`服务侦听地址，这个地址提供`HTTP`、`DNS`、`RPC`等服务，默认是`127.0.0.1`所以不对外提供服务，如果你要对外提供服务改成`0.0.0.0`   

​ 2、先下载`consul`包

​ `aspnetcore nuget`中进行下载

​ 3、然后微服务提供者进行注册，代码如下

``` C# 
 // 1、创建consul客户端连接
            var consulClient = new ConsulClient(configuration =>
            {
                //1.1 建立客户端和服务端连接
                configuration.Address = new Uri("http://127.0.0.1:8500");
            });
        // 2、获取服务内部地址

        // 3、创建consul服务注册对象
        var registration = new AgentServiceRegistration()
        {
            ID =  Guid.NewGuid().ToString(),
            Name = "teamservice",
            Address = "http://localhos",
            Port = "5001",
            Tags = new string[],
            Check = new AgentServiceCheck
            {
                // 3.1、consul健康检查超时间
                Timeout = TimeSpan.FromSeconds(10),
                // 3.2、服务停止5秒后注销服务
                DeregisterCriticalServiceAfter = TimeSpan.FromSeconds(5),
                // 3.3、consul健康检查地址
                HTTP = serviceNode.HealthCheckAddress,
                // 3.4 consul健康检查间隔时间
                Interval = TimeSpan.FromSeconds(10),
            }
        };

        // 4、注册服务
        consulClient.Agent.ServiceRegister(registration).Wait();    
```

4、最后微服务发现者进行获取,服务发现代码如下   

``` bash
  // 1、创建consul客户端连接
       var consulClient = new ConsulClient(configuration =>
       {
           //1.1 建立客户端和服务端连接
           configuration.Address = new Uri("http://127.0.0.1:8500");
       });
       // 2、consul查询服务,根据具体的服务名称查询
        var queryResult = await consulClient.Catalog.Service("teamservice");

        // 3、将服务进行拼接
        var list = new List<ServiceUrl>();
        foreach (var service in queryResult.Response)
        {
            list.Add(new ServiceUrl { Url = service.ServiceAddress + ":" + service.ServicePort });
        } 
```

#### consul如何做心跳检测？

步骤

1、使用AgentServiceCheck来实现，代码配置如下   

``` C# 
new AgentServiceCheck
     {
                // 3.1、consul健康检查超时间
                Timeout = TimeSpan.FromSeconds(10),
                // 3.2、服务停止5秒后注销服务
                DeregisterCriticalServiceAfter = TimeSpan.FromSeconds(5),
                // 3.3、consul健康检查地址
                HTTP = serviceNode.HealthCheckAddress,
                // 3.4 consul健康检查间隔时间
                Interval = TimeSpan.FromSeconds(10),
     }	
 ```