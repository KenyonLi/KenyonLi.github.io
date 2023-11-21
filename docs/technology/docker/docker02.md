---
title: 'Docker-集群'
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
接下来，考一下大家，大家认为docker集群是个什么集群

总结

1、docker集群是非对称集群
![Alt text](/public/images/docker/02/docker02_0001.png)
​ 见图进行解析

为什么要使用docker集群
​ 从docker集群图来进行分析，docker里面运行着容器，如果docker宕机？

docker容器对外提供 访问，如果访问量越大，一台docker的并发量毕竟有限

总结：

​ 1、单点故障问题

​ 2、性能问题

所以为了解决这两个问题，就出现了docker集群

## 实现docker集群方式
​ 1、swarm

​ 2、k8s

​ 但是我们今天只会讲解swarm,今天我们选择swarm

选择原因

1、swarm是docker官方提供的集群工具

2、k8s是谷歌开发的

3、k8s理解使用起来比较难

## swarm如何管理docker集群
### swarm是什么，怎么理解？
swarm 就好比是地铁购票机安装员。同理swarm就是地铁购票机安装员

Docker Swarm 是 Docker 的集群管理工具。它将 Docker 主机池转变为单个虚拟 Docker 主机。 Docker Swarm 提供了标准的 Docker API，所有任何已经与 Docker 守护程序通信的工具都可以使用 Swarm 轻松地扩展到多个主机。

### swarm内部概念
1、node节点概念

2、task概念 — 后面再引入

3、service概念 — 后面再引入

4、stack概念 — 后面再引入

就是将集群的docker通过node分配角色的方式进行维护

node 就是docker的别名，就好比，我们去公司上班，每一个人都有一个工号，工号就是我们的别名，那么node就是docker的别名，但是node有两个类型，manager 和work，就是讲docker分成了两类，就好比，公司里面有老板和员工，manager就是老板，work就是员工，老板是管理的，员工是干事的。有时候人工不够的时候，老板也过来干事。

1、node ：docker主机

2、管理节点（manager）

​ 管理docker集群

​ 1、集群配置

​ 2、容器服务管理。

​ 3、负载均衡

​ 4、集群管理？

3、工作节点 (worker)

​ 1、提供容器服务

### swarm是如何操作集群节点容器的？===目前先不讲
在使用之前我们必须要准备一些概念，这些概念是swarm的核心，掌握了这些概念，就已经理解了swarm 50%

后面都是基于这些概念的操作

service是什么？

​ 是指不同节点容器集合，用来维护容器

task是什么？

​ 在集群环境中，用来运行容器

stack是什么？

​ 是指stack的集合，用来维护service

### swarm如何创建docker集群
条件

1、两台以上docker主机

2、docker swarm

步骤

1、安装两台docker主机，使用linux或者centos7.0以上

​ 安装1.12 版本以上的docker，会在主机上默认提供支持

2、如何使用docker swarm？

​ 1、输出docker命令，会看到有一个swarm管理命令

​ docker swarm

​ 2、然后输入docker swarm 命令

​ 可以看到很多的帮助命令

​ 3、创建集群管理节点
```bash
​ docker swarm init –advertise-addr 192.168.44.4
``` 

​ 4、创建工作节点
``` bash
​ docker swarm join –token SWMTKN-1-2bomg3tb4cs8f5g7oqrw34k1mql9i0tr2msn8leqyphgac5hct-db4iwy32sdr6m0bmqyhi47jyn 123.57.164.54:2377
```
​ 5、查看集群消息，查看工作节点和管理节点
``` bash
​ docker info
```
### docker swarm运行商品微服务镜像
​ 条件

​ 1、productservice_micro镜像

​ 2、docker service

​ 步骤

​ 1、查看productservice_micro镜像

​ 输入命令：`docker images`


2、如何使用docker service?

​ 2.1、输出docker命令，会看到有一个service管理命令
``` bash
​ docker service
```
​ 2.2、然后输入docker service命令

​ 如图所示：

​ 2.3、创建服务
```bash
​ docker service create –replicas 1 – name productservice_service productservice_micro

​ –replicas 配置服务副本(容器在不同节点启动)

​ –name 服务名称
```
​ 3.1 暴露服务(修改服务)
``` bash
​ docker service update –publish-add 6066:80 productservice_service
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
​ docker service inspect –pretty productservice_service
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
​ docker service create –replicas 1 – name –publish 6066:80 productservice_service

​ –publish 发布端口例如 6066:80
```
​ 2.10、进行网络访问
```bash
​ 192.168.44.4:6066

​ 192.168.44.6:8088
```
### docker swarm运行Nginx镜像
​ 条件

​ 1、lknnginx镜像

​ 2、docker service

​ 步骤

​ 1、查看lknnginx镜像

​ 输入命令：docker images


2、如何使用docker service?

​ 2.1、输出docker命令，会看到有一个service管理命令
``` bash
​ docker service
```
​ 2.2、然后输入docker service命令

​ 如图所示：


​ 2.3、创建服务
``` bash
​ docker service create –replicas 1 – name lknnginx_service lknnginx

​ –replicas 配置服务副本(容器在不同节点启动)

​ –name 服务名称
```
​ 3.1 暴露服务(修改服务)
``` bash
​ docker service update –publish-add 8088:80 lknnginx_service
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
​ docker service inspect –pretty lknnginx_service
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

​ docker service create –replicas 1 – name –publish 6066:80 lknnginx_service

​ –publish 发布端口例如 8088:80
```
​ 2.10、进行网络访问
``` bash
​ 192.168.44.4:6066

​ 192.168.44.6:8088
``` 
### docker swarm批量运行(商品微服务镜像/Nginx镜像)
条件

​ 1、商品微服务镜像

​ 2、Nginx镜像

​ 3、docker-compose.yml

​ 4、stack

1、查看rmcore镜像和nginx镜像

​ 使用rmcore镜像来进行集群服务部署

2、如何使用docker stack?

​ 1、输出docker命令，会看到有一个service管理命令
``` bash
​ docker stack
```
​ 2、然后输入docker stack命令

​ 有很多的帮助命令

​ 3、创建堆栈(服务集合)

​ 1、创建一个stack目录(在当前目录/root下创建一个stack)
``` bash
​ mkdir stack
```
​ 2、配置yml文件
``` yml
​ 在原有docker.compose.yml增加配置

​ version: '3.4'

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
​ 192.168.44.4:6066

​ 192.168.44.6:6066
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
     - 8088:80
    deploy:
      mode:
       replicated
      replicas: 2
    configs:
      - source: lknnginx_config_3
        target: /usr/local/nginx/conf/nginx.conf
  productservice:
    image: productservice_micro
    ports:
     - 8090:80
    deploy:
      mode:
       replicated
      replicas: 2
configs:
  lknnginx_config_3:
    file: /root/lkn/compose/nginx.conf
```
2、运行stack
``` bash
docker stack deploy -c docker-compose.yml lknmicroservice
``` 
### docker swarm config实战
1、创建config
``` bash
[root@lvultr   lkn]# docker config create conf default.conf 
je21ykql9tzebr0j2v7ep0kat
12
```
2、查看config
``` bash
[root@lvultr  lkn]# docker config ls
ID                          NAME                CREATED             UPDATED
je21ykql9tzebr0j2v7ep0kat   conf                5 minutes ago       5 minutes ago
```
3、使用config
``` bash
在conf配置中，将nginx的监听端口改成了88，替换掉nginx中的默认80端口的配置文件，创建service时，将容器内部端口88端口映射成主机上90端口
 [root@lvultr  lkn] service create --replicas 1 --name lknnginx_nginx --publish 6066:80 --config source=lknnginx_config,target=/usr/local/nginx/conf/nginx.conf lknnginx
pocy3ph88gy7ng9g2lbq9jvnw
overall progress: 1 out of 1 tasks 
1/1: running   [==================================================>] 
verify: Service converged 
```