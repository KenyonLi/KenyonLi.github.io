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

 ##### 如何封装Consul？   

步骤   


1、首先根据服务角色，将服务抽象为提供者和发现者   

![Alt text](/images/abpmicroservices/micro004/abpmicroservices0004_0004image.png)     

2、然后使用ioc容器进行条件准备，使用app构建器进行服务注册   

### Consul如何搭建集群   


参数解释   

命令行参数   

``` bash
-bind:为该节点绑定一个地址  
-enable-script-checks=tue:设置检查服务可用   
-join:加入到已有的集群中  
-server 表示当前使用sever模式  
-node: 指定当前节点在集群中的名称
-config-file - 要加载的配置文件   
-config-dir: 指定配置文件目录，定义服务的，默认所有的.json结尾的文件都会读
-datacenter:数据中心没名称，不设置的话，默认为dc 
-client:客户端模式  
-ui: 使用consul自带的界面
-data-dir consul 存储的目录
-bootstrap: 用来控制一个server是否在bootstrap模式，在一个datacenter中只能有一个server处于bootstrap模式，当一个server处于bootstrap模式时，可以自己选举为raft leader.
-boosstrap-expect:在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定server数目的时候才会引导整个集群，该标记不能和bootstrap公用。

这两个参数十分重要，二选一，如果两个参数不使用的话，会出现就算你使用join将agent加入集群仍然会报`agent: failed to sync remote state: No cluster leader`
```

##### 配置文件参数

``` bash
ui: 相当于-ui 命令行标志。
acl_token：agent会使用这个token和consul server进行请求
acl_ttl：控制TTL的cache，默认是30s
addresses：一个嵌套对象，可以设置以下key：dns、http、rpc
advertise_addr：等同于-advertise
bootstrap：等同于-bootstrap
bootstrap_expect：等同于-bootstrap-expect
bind_addr：等同于-bindca_file：提供CA文件路径，用来检查客户端或者服务端的链接
cert_file：必须和key_file一起
check_update_interval：
client_addr：等同于-client
datacenter：等同于-dc
data_dir：等同于-data-dir
disable_anonymous_signature：在进行更新检查时禁止匿名签名
enable_debug：开启debug模式
enable_syslog：等同于-syslog
encrypt：等同于-encrypt
key_file：提供私钥的路径
leave_on_terminate：默认是false，如果为true，当agent收到一个TERM信号的时候，它会发送leave信息到集群中的其他节点上。
log_level：等同于-log-level node_name:等同于-node 
ports：这是一个嵌套对象，可以设置以下key：dns(dns地址：8600)、http(http api地址：8500)、rpc(rpc:8400)、serf_lan(lan port:8301)、serf_wan(wan port:8302)、server(server rpc:8300) 
protocol：等同于-protocol
rejoin_after_leave：等同于-rejoin
retry_join：等同于-retry-join
retry_interval：等同于-retry-interval 
server：等同于-server
syslog_facility：当enable_syslog被提供后，该参数控制哪个级别的信息被发送，默认Local0
ui_dir：等同于-ui-dir
```

#### 集群搭建（单机）

> 因为没有资源,只能在一台机器上装伪集群,如果是三台服务器来做的话, 不需要写json配置文件,直接用命令行启动就可以

``` bash
# 创建节点数据目录$ mkdir -pv ./data/{node1,node2,node3} 

ubuntu@VM-20-13-ubuntu consul.d % mkdir -pv ./data/{node1,node2,node3}                                                                                [0]
mkdir: created directory './data'
mkdir: created directory './data/node1'
mkdir: created directory './data/node2'
mkdir: created directory './data/node3'
```

##### 节点1配置

``` bash
$ vim ./data/node1/basic.json
{  
    "datacenter" : "dc1",
    "data_dir": "./data/node1",
    "log_level": "INFO",
    "server": true, 
    "node_name": "node1",
    "ui": true, 
    "bind_addr": "10.0.20.13", 
    "client_addr": "10.0.20.13",
    "advertise_addr": "10.0.20.13",
    "bootstrap_expect": 3, 
    "ports":{  
        "http": 8500,
        "dns": 8600,  
        "grpc_tls": 8503,
        "server": 8300,
        "serf_lan": 8301, 
        "serf_wan": 8302
    }
}

nohup ./consul agent -config-file=./data/node1/basic.json > ./data/node1/consul.log 2>&1 &

tail -100f ./data/node1/consul.log 
```
##### 节点2配置
``` bash
vim ./data/node2/basic.json

{ 
 "datacenter": "dc1",
 "data_dir": "./data/node2",
 "log_level": "INFO",
 "server": true,
 "node_name": "node2",
 "bind_addr": "10.0.20.13",
 "client_addr": "10.0.20.13", 
 "advertise_addr": "10.0.20.13",
 "ports":{ 
     "http": 8510,   
     "grpc_tls":8513,
     "dns": 8610,  
     "server": 8310,
     "serf_lan": 8311,
     "serf_wan": 8312
    }
}


nohup ./consul agent -config-file=./data/node2/basic.json  -retry-join=10.0.20.13:8301 > ./data/node2/consul.log 2>&1 &

tail -100f ./data/node2/consul.log 

```

##### 节点3配置

``` bash

vim ./data/node3/basic.json

{  
    "datacenter": "dc1",
    "data_dir": "./data/node3",
    "log_level": "INFO",
    "server": true, 
    "node_name": "node3",
    "bind_addr": "10.0.20.13", 
    "client_addr": "10.0.20.13",
    "advertise_addr": "10.0.20.13",
    "ports":{  
        "http": 8520,
        "dns": 8620,  
        "grpc_tls": 8523,
        "server": 8320,
        "serf_lan": 8321, 
        "serf_wan": 8322
    }
}

nohup ./consul agent -config-file=./data/node3/basic.json  -retry-join=10.0.20.13:8301 > ./data/node3/consul.log 2>&1 &

tail -100f ./data/node3/consul.log
```


查看集群信息
``` bash
ubuntu@VM-20-13-ubuntu consul.d % ./consul members -http-addr=10.0.20.13:8500                                                                         [0]
Node   Address          Status  Type    Build   Protocol  DC   Partition  Segment
node1  10.0.20.13:8301  alive   server  1.16.2  2         dc1  default    <all>
node2  10.0.20.13:8311  alive   server  1.16.2  2         dc1  default    <all>
node3  10.0.20.13:8321  alive   server  1.16.2  2         dc1  default    <all>
```
``` bash
ubuntu@VM-20-13-ubuntu consul.d % ./consul info -http-addr=10.0.20.13:8500                                                                            [0]
agent:
	check_monitors = 0
	check_ttls = 0
	checks = 0
	services = 0
build:
	prerelease = 
	revision = 68f81912
	version = 1.16.2
	version_metadata = 
consul:
	acl = disabled
	bootstrap = false
	known_datacenters = 1
	leader = true
	leader_addr = 10.0.20.13:8300
	server = true
raft:
	applied_index = 50
	commit_index = 50
	fsm_pending = 0
	last_contact = 0
	last_log_index = 50
	last_log_term = 2
	last_snapshot_index = 0
	last_snapshot_term = 0
	latest_configuration = [{Suffrage:Voter ID:a3b66e75-97bd-97c5-1aaa-864679701777 Address:10.0.20.13:8300} {Suffrage:Voter ID:bcd4f567-233b-2388-9862-50c7967c9c83 Address:10.0.20.13:8310} {Suffrage:Voter ID:9743eebc-9536-d39b-fffa-943155976ff3 Address:10.0.20.13:8320}]
	latest_configuration_index = 0
	num_peers = 2
	protocol_version = 3
	protocol_version_max = 3
	protocol_version_min = 0
	snapshot_version_max = 1
	snapshot_version_min = 0
	state = Leader
	term = 2
runtime:
	arch = amd64
	cpu_count = 2
	goroutines = 190
	max_procs = 2
	os = linux
	version = go1.20.8
serf_lan:
	coordinate_resets = 0
	encrypted = false
	event_queue = 0
	event_time = 2
	failed = 0
	health_score = 0
	intent_queue = 0
	left = 0
	member_time = 3
	members = 3
	query_queue = 0
	query_time = 1
serf_wan:
	coordinate_resets = 0
	encrypted = false
	event_queue = 0
	event_time = 1
	failed = 0
	health_score = 0
	intent_queue = 0
	left = 0
	member_time = 4
	members = 3
	query_queue = 0
	query_time = 1
```

访问UI
 
 1、服务搭建成功
![Alt text](/images/abpmicroservices/micro004/abpmicroservices0004_0005image.png)     

![Alt text](/images/abpmicroservices/micro004/abpmicroservices0004_0006image.png)     
