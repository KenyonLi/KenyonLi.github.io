---
title: 'Docker-swarm 集群'
date: '2023-11-21' 
tags:
- 'Docker-集群'
- 'abp'
- 'dotnet'
- 'docker'
categories:
- '技术'
---

## 目录
[[toc]]

## Docker-集群

## 什么是docker集群
### 什么是集群
1、先生活中集群

2、再软件中集群

3、最后总结

总结：不同服务实例，来共同提供服务的一组集合就是集群

### 集群类型
1、先看两个集群例子：nginx集群，redis集群

2、然后总结

1、对称集群

​ 不同服务实例，功能地位相等(每一个实例提供的功能机会相同)

​ 定位：数据计算

2、非对称集群

​ 不同服务实例，功能地位不相等(每一个实例提供功能的机会不相同)

​ 定位：数据存储

### 什么是docker集群

总结

1、docker集群是非对称集群
![Alt text](/images/docker/02/docker02_0001.png)
​ 见图进行解析

为什么要使用docker集群
​ 从`docker`集群图来进行分析，`docker`里面运行着容器，如果`docker`宕机？

`docker`容器对外提供 访问，如果访问量越大，一台`docker`的并发量毕竟有限

总结：

​ 1、单点故障问题

​ 2、性能问题

所以为了解决这两个问题，就出现了`docker`集群

## 实现docker集群方式
​ 1、`swarm`

​ 2、`k8s`

​ 但是我们今天只会讲解`swarm`,今天我们选择`swarm`

选择原因

1、`swarm`是`docker`官方提供的集群工具

2、`k8s`是谷歌开发的

3、`k8s`理解使用起来比较难

## swarm如何管理docker集群
### swarm是什么，怎么理解？
`swarm` 就好比是地铁购票机安装员。同理`swarm`就是地铁购票机安装员

`Docker Swarm `是 `Docker` 的集群管理工具。它将 `Docker` 主机池转变为单个虚拟 `Docker` 主机。 `Docker Swarm` 提供了标准的 `Docker API`，所有任何已经与 `Docker` 守护程序通信的工具都可以使用 `Swarm` 轻松地扩展到多个主机。

### swarm内部概念
1、`node`节点概念

2、`task`概念 — 运行的容器

3、`service`概念 — 服务

4、`stack`概念  批量运行 服务 

就是将集群的`docker`通过`node`分配角色的方式进行维护

`node` 就是`docker`的别名，就好比，我们去公司上班，每一个人都有一个工号，工号就是我们的别名，那么`node`就是`docker`的别名，但是`node`有两个类型，`manager` 和`work`，就是讲`docker`分成了两类，就好比，公司里面有老板和员工，`manager`就是老板，`work`就是员工，老板是管理的，员工是干事的。有时候人工不够的时候，老板也过来干事。

1、`node` ：`docker`主机

2、管理节点（`manager`）

​ 管理`docker`集群

​ 1、集群配置

​ 2、容器服务管理。

​ 3、负载均衡

​ 4、集群管理？

3、工作节点 (`worker`)

​ 1、提供容器服务

### swarm是如何操作集群节点容器的？
在使用之前我们必须要准备一些概念，这些概念是`swarm`的核心，掌握了这些概念，就已经理解了`swarm` 50%

后面都是基于这些概念的操作

`service`是什么？

​ 是指不同节点容器集合，用来维护容器

`task`是什么？

​ 在集群环境中，用来运行容器

`stack`是什么？

​ 是指`stack`的集合，用来维护`service`

### swarm如何创建docker集群
条件

1、两台以上`docker`主机

2、`docker swarm`

步骤

1、安装两台`docker`主机，使用`linux`或者`centos9.0`以上

​ 安装 24.0.7 版本以上的`docker`，会在主机上默认提供支持

2、如何使用`docker swarm`？

​ 1、输出`docker`命令，会看到有一个`swarm`管理命令
``` bash
​ docker swarm
```
​ 2、然后输入`docker swarm` 命令

​ 可以看到很多的帮助命令

​ 3、创建集群管理节点
```bash
​ docker swarm init –advertise-addr 192.168.3.62
``` 

​ 4、创建工作节点,另一台服务器
``` bash
docker swarm join --token SWMTKN-1-5fcwmt9yenjdfagt96o3l101p7nqg63z2uz3w4er9kwejb6kue-c61kc6cquf67lj9qspbf01wn0 192.168.3.62:2377
```
​ 5、查看集群消息，查看工作节点和管理节点
``` bash
​ docker info
```
### docker swarm运行商品微服务镜像
​ 条件

​ 1、`productservice_micro`镜像

​ 2、`docker service`

​ 步骤

​ 1、查看`productservice_micro`镜像

​ 输入命令：`docker images`


2、如何使用`docker service`?

​ 2.1、输出`docker`命令，会看到有一个service管理命令
``` bash
​ docker service
```
​ 2.2、然后输入`docker service`命令
``` bash
[root@localhost ~]# docker service 

Usage:  docker service COMMAND

Manage Swarm services

Commands:
  create      Create a new service
  inspect     Display detailed information on one or more services
  logs        Fetch the logs of a service or task
  ls          List services
  ps          List the tasks of one or more services
  rm          Remove one or more services
  rollback    Revert changes to a service's configuration
  scale       Scale one or multiple replicated services
  update      Update a service

Run 'docker service COMMAND --help' for more information on a command.

```

​ 2.3、创建服务
```bash
​ docker   service  create --replicas=1 --name productservice_service productservice_micro

​ --replicas 配置服务副本(容器在不同节点启动)

​ --name 服务名称

[root@localhost ~]# docker   service  create --replicas=1 --name productservice_service productservice_micro
image productservice_micro:latest could not be accessed on a registry to record
its digest. Each node will access productservice_micro:latest independently,
possibly leading to different nodes running different
versions of the image.

9au92dsos65u5vcagaz4wabf1
overall progress: 1 out of 1 tasks 
1/1: running   [==================================================>] 
verify: Service converged 
```

​ 3.1 暴露服务(修改服务)
``` bash
​ docker service update --publish-add 7077:80 productservice_service
```
​ 2.4、列表服务
``` bash
​ docker service ls
```
​ 2.5、查看服务运行在哪个节点
``` bash
​ docker service ps productservice_service
```
​ 2.6、查看服务部署详细信息
``` bash
​ docker service inspect --pretty productservice_service

[root@localhost microservice]# docker service  inspect --pretty  productservice_service

ID:		26xji25mh5iftdmt1k7rrsck8
Name:		productservice_service
Service Mode:	Replicated
 Replicas:	2
Placement:
UpdateConfig:
 Parallelism:	1
 On failure:	pause
 Monitoring Period: 5s
 Max failure ratio: 0
 Update order:      stop-first
RollbackConfig:
 Parallelism:	1
 On failure:	pause
 Monitoring Period: 5s
 Max failure ratio: 0
 Rollback order:    stop-first
ContainerSpec:
 Image:		productservice_micro:latest
 Init:		false
Resources:
Endpoint Mode:	vip

```
​ 2.7、服务动态伸缩（向其他节点添加服务副本）
``` bash
​ docker service scale productservice_service=2
```
​ 2.8、删除服务
``` bash
​ docker service rm productservice_service
```
​ 2.9、服务如何进行外部访问   
``` bash
​ docker service create --replicas 1  --publish 7077:80 --name lknproductservice_service  productservice_mirco 

​ --publish 发布端口例如 7077:80
 --name 
```
​ 2.10、进行网络访问   
```bash
​ 192.168.3.62:7077

​ 192.168.3.61:7077
```
### docker swarm运行Nginx镜像
​ 条件

​ 1、`lknnginx`镜像

​ 2、`docker service`

​ 步骤

​ 1、查看`lknnginx`镜像  

``` bash
​ 输入命令：`docker images`
```

2、如何使用 `docker service` ?

​ 2.1、输出`docker`命令，会看到有一个`service`管理命令
``` bash
​ docker service
```
​ 2.2、然后输入`docker service`命令
``` bash
[root@localhost ~]# docker service 

Usage:  docker service COMMAND

Manage Swarm services

Commands:
  create      Create a new service
  inspect     Display detailed information on one or more services
  logs        Fetch the logs of a service or task
  ls          List services
  ps          List the tasks of one or more services
  rm          Remove one or more services
  rollback    Revert changes to a service's configuration
  scale       Scale one or multiple replicated services
  update      Update a service

Run 'docker service COMMAND --help' for more information on a command.

```

​ 2.3、创建服务
``` bash
​ docker service create --replicas 1  --name lknnginx_service lknnginx

​ --replicas 配置服务副本(容器在不同节点启动)

​ --name 服务名称
```
​ 3.1 暴露服务(修改服务)
``` bash
​ docker service update --publish-add 6066:80 lknnginx_service
```
​ 2.4、列表服务
``` bash
​ docker service ls
```
​ 2.5、查看服务运行在哪个节点
``` bash
​ docker service ps lknnginx_service
```
​ 2.6、查看服务部署详细信息
``` bash
​ docker service inspect --pretty lknnginx_service
```
​ 2.7、服务动态伸缩（向其他节点添加服务副本）
``` bash
​ docker service scale lknnginx_service=2
```
​ 2.8、删除服务
``` bash
​ docker service rm lknnginx_service
```
​ 2.9、服务如何进行外部访问
``` bash
​ docker service create --replicas 1 --publish 6066:80  --name lknnginx_service lknnginx  

​ --publish 发布端口例如 6066:80
 --name 服务名称
```

​ 2.10、进行网络访问
``` bash
​ 192.168.3.61:6066

​ 192.168.3.62:6066
``` 
### docker swarm批量运行(商品微服务镜像/Nginx镜像)   

条件

​ 1、商品微服务镜像

​ 2、`Nginx`镜像

​ 3、`docker-compose.yml`

​ 4、`stack`

1、查看`productservice_micro`镜像和`lknnginx`镜像

​ 使用`productservice_micro`镜像来进行集群服务部署

2、如何使用`docker stack`?

​ 1、输出`docker`命令，会看到有一个`service`管理命令
``` bash
​ docker stack
```
​ 2、然后输入`docker stack`命令
``` bash
[root@localhost ~]# docker stack 

Usage:  docker stack COMMAND

Manage Swarm stacks

Commands:
  config      Outputs the final config file, after doing merges and interpolations
  deploy      Deploy a new stack or update an existing stack
  ls          List stacks
  ps          List the tasks in the stack
  rm          Remove one or more stacks
  services    List the services in the stack

Run 'docker stack COMMAND --help' for more information on a command.

```
​ 有很多的帮助命令

​ 3、创建堆栈(服务集合)

​ 1、创建一个`stack`目录(在当前目录/root下创建一个stack)
``` bash
​ mkdir stack
```
​ 2、配置yml文件
``` yml
​ 在原有docker.compose.yml增加配置

​ version: '3.7'

​ deploy: #集群模式配置
​ mode:

​ replicated #配置副本模式，gloab
​ replicas: 2 # 副本份数
```
​ 3、创建stack
``` bash
​ docker stack deploy -c docker-compose.yml rmstack

​ -c 是指定docker-compose.yml文件

​ rmcorestack 指定stack 标识(名称)
```
​ 4、查看stack列表
``` bash
​ docker stack ls
```
​ 5、查看stack 服务列表信息
``` bash
​ docker stack ps rmstack

​ 或者 docker service ls
```
6、删除stack
``` bash
​ docker stack rm rmstack
```
​ 通过两个节点查看，所有的信息是否删除
``` bash
version: '3.7'
services:
  lknnginx:
    image: lknnginx
    ports:
     - 8088:80
    deploy:
      mode:
       replicated
      replicas: 2
  productservice:
    image: productservice_micro
    ports:
     - 8090:80
    deploy:
      mode:
       replicated
      replicas: 2
```
​ 6、进行网络访问
``` bash
192.168.3.62 主节点

​ 192.168.3.61 子节点
```
### docker swarm service之间通信
条件

1、configs

2、docker-compose.yml

步骤

1、修改配置
``` yml
version: '3.7'
services:
  lknnginx:
    image: lknnginx
    ports:
      - 6066:80
    deploy:
      mode:
        replicated
      replicas: 2
  lknproductservice:
    image: productservice_micro
    ports:
      - 7077:80
    deploy:
      mode:
        replicated
      replicas: 2
```
2、 批量运行`stack` 
``` bash
[root@localhost compose]# docker stack  deploy  -c docker-stack-compose.yml  lknmicroservice
Creating service lknmicroservice_lknproductservice
Creating service lknmicroservice_lknnginx
[root@localhost compose]# docker service ls
ID             NAME                                MODE         REPLICAS   IMAGE                         PORTS
j8lkfx3p4n08   lknmicroservice_lknnginx            replicated   2/2        lknnginx:latest               *:6066->80/tcp
qbjgonuvoynj   lknmicroservice_lknproductservice   replicated   2/2        productservice_micro:latest   *:7077->80/tcp
// 查看服务 个数
[root@localhost compose]# docker stack ls
NAME              SERVICES
lknmicroservice   2

//删除
[root@localhost compose]# docker stack rm lknmicroservice
Removing service lknmicroservice_lknnginx
Removing service lknmicroservice_lknproductservice
Removing network lknmicroservice_default

``` 
### docker swarm config实战
1、创建config
``` bash
[root@localhost compose]# docker config create lknnginx_config /root/microservice/compose/nginx.conf
0z65o78rekq9marcx4htq29o9

```
2、查看config
``` bash
[root@localhost compose]# docker config ls
ID                          NAME              CREATED          UPDATED
0z65o78rekq9marcx4htq29o9   lknnginx_config   12 seconds ago   12 seconds ago
```
3、使用config
``` bash
在conf配置中，将nginx的监听端口改成了88，替换掉nginx中的默认80端口的配置文件，创建service时，将容器内部端口88端口映射成主机上90端口
 [root@localhost compose]# docker service create --replicas 2 --name lknnginx_nginx --publish  6066:80 --config source=lknnginx_config,target=/usr/local/nginx/conf/nginx.conf lknnginx

 image lknnginx:latest could not be accessed on a registry to record
its digest. Each node will access lknnginx:latest independently,
possibly leading to different nodes running different
versions of the image.

jpye65gjt7b3vsskj9eifr1sw
overall progress: 1 out of 1 tasks 
1/1: running   [==================================================>] 
verify: Service converged
```
## docker stack deploy  配置

``` yml
version: '3.7'
services:
  lknnginx:
    image: lknnginx
    ports:
      - 6066:80
    deploy:
      mode:
        replicated
      replicas: 2
    configs:
      - source: lknnginx_config1
        target: /usr/local/nginx/conf/nginx.conf
  lknproductservice:
    image: productservice_micro
    ports:
      - 7077:80
    deploy:
      mode:
        replicated
      replicas: 2
configs:
  #lknnginx_config:
    #external: true
   lknnginx_config1:
     file: /root/microservice/compose/nginx.conf


```


``` yml
version: '3.7'
services:
  lknnginx:
    image: lknnginx
    ports:
      - 6066:80
    deploy:
      mode:
        replicated
      replicas: 2
    configs:
      - source: lknnginx_config
        target: /usr/local/nginx/conf/nginx.conf
  lknproductservice:
    image: productservice_micro
    ports:
      - 7077:80
    deploy:
      mode:
        replicated
      replicas: 2
configs:
  lknnginx_config:
    external: true
```


``` bash
[root@localhost compose]# docker stack  deploy -c docker-stack-compose.yml lknmicroservice
Creating config lknmicroservice_lknnginx_config1
Creating service lknmicroservice_lknnginx
Creating service lknmicroservice_lknproductservice

```

## 笔记

## 一、主节点部署

## 查linux 安装的docker 信息 
``` bash
docker info
```
![Alt text](/images/docker/02/docker02_0002.png)  

看当前docker Swarm状态 inactive 不是集群状态  

``` bash
[root@localhost ~]# docker swarm  init --advertise-addr 192.168.3.62
Swarm initialized: current node (dho9rzjfgyubig5qvyb5e35bg) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-5fcwmt9yenjdfagt96o3l101p7nqg63z2uz3w4er9kwejb6kue-c61kc6cquf67lj9qspbf01wn0 192.168.3.62:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.

```

根据 docker node ls  查看是否启动成功

``` bash 
[root@localhost ~]# docker node  ls
ID                            HOSTNAME                STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
dho9rzjfgyubig5qvyb5e35bg *   localhost.localdomain   Ready     Active         Leader           24.0.7

```

通过 docker info,查看集群节点  

``` bash

Swarm: active
  NodeID: dho9rzjfgyubig5qvyb5e35bg
  Is Manager: true
  ClusterID: 7crzflf8x2ma218wfg9oou8ke
  Managers: 1
  Nodes: 1
  Default Address Pool: 10.0.0.0/8  
  SubnetSize: 24
  Data Path Port: 4789

```

## 二、子节点部署

1、在子节服务器，输入主节点docker join 连接地址，执行
``` bash
docker swarm join --token SWMTKN-1-5fcwmt9yenjdfagt96o3l101p7nqg63z2uz3w4er9kwejb6kue-c61kc6cquf67lj9qspbf01wn0 192.168.3.62:2377
```
2、查看  docker info ，只能在主节点操作。
``` bash
[root@localhost ~]# docker node ls
ID                            HOSTNAME                STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
dho9rzjfgyubig5qvyb5e35bg *   localhost.localdomain   Ready     Active         Leader           24.0.7
dpasxse42lnrudsd2dm0cdka9     localhost.localdomain   Ready     Active                          24.0.7
```

3、子节点是不能操作 node 的,只能在主节点上进行操作。

``` bash
[root@localhost compose]# docker node ls
Error response from daemon: This node is not a swarm manager. Use "docker swarm init" or "docker swarm join" to connect this node to swarm and try again.
```

## raft算法  

选举算法

1、三个端口：
主机端口：8088 
service端口：80 
容器端口：80


## 如何理解service和容器关系  
1、一对多关系  
2、service 相当于网关容器相当于具体实例  
3、service和容器之间：最小活跃数算法。
                     实现负载均衡。



docker service ps <容器>  查看日志

## service调度容器  

如何调度的？ 任务调度算法    
作用：自动选择容器运行到什么节点    
容器在主机环境   
1、cpu   
2、内存    
3、磁盘    
4、带宽   
5、容器数量   
主要参考的环境：cpu 、内存。

1、先检查当前节点容器数量  
2、然后容器分别分配在哪些节点，以及节点容器数量  
3.61    ------------  3.62  
100                     80
容器放到 3.62 节点去运行。合理利用资源。   
如果容器放到了3.62去运行  
1、cpu 内存满了。  swarm缺陷  
2、如果容器运行失败。
    调度算法：最小活跃数，轮询算法。
3、如果容器节点数量一样。
     调度算法：轮询算法  

总结：主要是对象：容器。根据：容器数量。

K8s调度容器，可以解决。
可以根据：
  1、容器数量  
  2、cpu 使用量  
  3、内存使用量

  Service 是靠什么来实现调度 。
  Task（线程）---->运行一个容器  

  service---task--容器   


总结：一个service调度多个容器

## 主机文件挂载到容器  
docker sawrm config 挂载

## service 编排
## service 之间通信 
1、stack    
2、docker-compose.yml   
3、docker-compose文件内置的名称通信   
4、config管理集群配置文件   