---
title: '微服务部署Docker'
date: '2023-11-20' 
tags:
- '微服务部署Docker'
- 'abp'
- 'dotnet'
- 'docker'
categories:
- '技术'
---

## 目录
[[toc]]

## 微服务部署Docker

## Docker核心概念  
### 为什么要学习docker  
最近你几年容器技术异常火热，作为容器技术代表的docker自然也炙手可热，简直就是软件界的网红，这么火的docker早就已经应用在生产环境中，国内容圈内最具有代表性的大厂就是阿里京东。  
京东从14年开始在生产环境进行容器化部署，15年618，京东跑了15万个docker实例，到目前为止已经实现了100%应用容器化部署，根据CNCF(Cloud Native Computing Foundation) 数据统计，世界上最大的docker集群部署在京东！   
> 京东首席架构师刘海锋：京东是Kubernetes最早期采用者之一。公司目前管理世界上最大的Kubernetes集群，多集群超过20,000多个裸机服务分布在多个地区的数据中心。
### 什么是Docker
![Alt text](/images/docker/01/docker01_0001.png)  
咱们先来看一张图,这就是docker,这个图片上面给我展示几个信息。那么该如何理解呢？ 接平来我们先看一下这个图出现的场景，我们就会明白了，大家或多或少的听说过码头场景，那么没有接触过码头的场景同学，那么我们有必要介绍一下，在码头场景里面会存在着几个角色：    

1、货物     
2、码头，码头工人，大船      
 
码头工人将货物从码头上放到大船上，最后由大船运送另一个码头     
如果这个时候货物水果，化学药品，木材。那么需要使用三条船进行运输，传导致新的问题，增加了成本       
如果放在一条船上，水果、化学物品、木材、三种货物之间会相互受影响导致货物损坏。    
正是这个两个原因导致了新事物的诞生，大家知道是什么吗？  
就是集装箱，集装箱之间没有任何影响。就算放到一条船上没有任何问题，所以既节约成本，又解决了货物损坏的问题。  
docker就是大船和集装箱组成的整体   
接下来，我们看一下docker在软件中的情况，为什么会出现docker呢？我们要搞清楚这个问题，必须要了解docker背景，要了解docker背景，必须从单机开始，好的，那么接下来，咋们来看一下单机     


Docker 就是容器的集合    
Docker:主机集合    
1、主机：mac windows linux    
Linux集合   

## 为什么使用docker  

docer使用的时机是开发微服务时候。如果是单机系统开发，没有必要，想要跨平台，直接使用linux就可以了，
那对于高并发，高可用的系统呢，微服务就是为高并发，高可用做准备的。

## docker使用时机  
微服务或者SOA的时候就使用docker   
单机时代缺点    
如果我们开发一个电商微服务，里面有三个服务，商品服务、订单服务，支付服务，我们部署的情况是这样的。  
商品、订单、支付三个服务同时部署在单机环境。那么，这个时候，如果三个服务分别由不同的语言开发，例如：c#,java,python 会出现什么问题。  
1、环境冲突  
2、端口冲突  
3、不允许宕机   
为了解决这个问题，所以我们出现了虚拟机，那么虚拟机是如何解决的呢？   
虚拟机时代缺点    
增加了两个角色，虚拟机管理器和虚拟机，虚拟机管理器创建不同的虚拟机，虚拟机之间是隔离的。不管用什么语言开发服务，只要部署在不同的虚拟机，就能解决环境冲突和端口冲突的问题。但是，
会导致什么新的问题呢？   
总结：   
1、耗硬件资源   
  占用空闲内存  
2、启动非常耗时    
3、虚拟机版本问题     

容器时代    
  为了解决这个问题，所以出现了容器时代，那么容器是如何解决的呢？首先虚拟机管理器和虚拟机全部剔除，然后就新增2个角色，容器和docker.那么是如何解决的，容器之间是隔离的，容器启动速度和关闭速度非常快，而且资源占用率非常低，不管用什么语言开发的服务，那么依然都不会互相影响。   
## docker 总结  
1、docker 是一个开源的应用容器引擎  
2、docker 可以打包应用到容器中，并且可以进行移植。  
3、容器之间完全隔离   
4、容器性能开销极低。  

## docker 如何使用？ 
docker概念介绍  
在docker里有几个非常重要的概念，需要理解，如何理解了，就理解了docker 80%内容，那到底是什么呢？   
1、容器：标准化的应用（集装箱）  
2、镜像：创建容器的模板（集装箱模板）  
3、仓库：存储镜像（码头）  
4、docker主机：管理容器和镜像（集装箱和大船）  
5、docker-客户端：操作容器和镜像（码头工人）

这此地方我们可以进行类比一下就可以知道：容器 === 集装箱,货物 === 容器内部服务，码头 === 仓库，码头工人=== docker主机，但是大家发现，还是无法从程序的世界进行理解，我们再看一下web应用场景   
客户端 === doocker 客户端  
服务端 === docker -主机
数据库 === 仓库
数据表 === 镜像  
数据   === 容器 
所以我们docker基本运行架构图就是这样的。  

## Docker概念之间关系 

### Docker下载安装  

1、Docker版本 20.03版本之后
	1、CE（Community Edition: 社区版） ---- 免费
	2、EE（Enterprise Edition: 企业版）---- 收费

2、windows 安装
条件
	1、windows 10
    
	2、开启Hyper-V

	3、安装Toolbox

	最新版 Toolbox 下载地址： https://www.docker.com/get-docker
    点击 Download Desktop and Take a Tutorial，并下载 Windows 的版本

3、linux安装

	1、centos9.0 以上的版本

	2、安装docker 版本仓库 docker版本

		2.1 设置仓库
``` bash
      sudo yum install -y yum-utils device-mapper-persistent-data lvm2	
```
		2.2  稳定仓库
``` bash
      sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 
```
	3、安装docker(默认安装最新版本)

```bash
      sudo yum install docker-ce docker-ce-cli containerd.io
```
### 如果要安装其他版本

 要安装特定版本的 Docker Engine-Community，请在存储库中列出可用版本，然后选择并安装：

  1、列出并排序您存储库中可用的版本。此示例按版本号（从高到低）对结果进行排序。
```bash
              yum list docker-ce --showduplicates | sort -r

                    docker-ce.x86_64  3:18.09.1-3.el7                     docker-ce-stable
                    docker-ce.x86_64  3:18.09.0-3.el7                     docker-ce-stable
                    docker-ce.x86_64  18.06.1.ce-3.el7                    docker-ce-stable
                    docker-ce.x86_64  18.06.0.ce-3.el7                    docker-ce-stable
```
    2、通过其完整的软件包名称安装特定版本，该软件包名称是软件包名称（docker-ce）加上版本字符串（第二列），        
从第一个冒号（:）一直到第一个连字符，并用连字符（-）分隔。例如：docker-ce-18.09.1。
``` bash
      sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
```
	4、docker启动
```bash
     sudo systemctl start docker
     # 设置为开机启动
     sudo systemctl enable docker
```
	5、docker 运行(判断是否安装成功)
```bash
sudo docker run hello-world
```
4、docker 管理命令介绍
``` bash
  builder     Manage builds 管理构建
  config      Manage Docker configs 管理配置
  container   Manage containers 管理容器
  context     Manage contexts 管理上下文
  engine      Manage the docker engine 管理引擎
  image       Manage images 管理镜像
  network     Manage networks 管理网络
  node        Manage Swarm nodes 管理节点(集群)
  plugin      Manage plugins 管理插件
  secret      Manage Docker secrets 管理密钥
  service     Manage services 管理服务
  stack       Manage Docker stacks 管理
  swarm       Manage Swarm 管理集群
  system      Manage Docker管理系统
  trust       Manage trust on Docker images 管理信任
  volume      Manage volumes 管理数据挂载(数据持久化 === 永久保存)
```

## docker 删除镜像 命令 
[参考](https://blog.51cto.com/u_16213322/7576793)


### Docker 删除镜像命令详解
Docker是一种流行的容器化平台，它允许开发者打包、分发和运行应用程序及其依赖项。在使用Docker进行开发和测试时，我们可能会创建许多镜像，有时我们需要删除不再使用的镜像以释放磁盘空间。本文将详细介绍如何使用Docker删除镜像的命令。

### Docker 删除镜像的命令
Docker提供了多个命令来删除镜像，以下是一些常用的命令：

`docker rmi`：用于删除一个或多个本地镜像。
`docker image prune`：删除未被任何容器使用的镜像。
`docker image prune -a`：删除所有未被使用的镜像，包括标签为none的镜像。
接下来我们将逐个介绍这些命令的使用方法。

1. docker rmi命令
使用docker rmi命令可以删除一个或多个本地镜像。其基本语法为：
```bash
docker rmi [OPTIONS] IMAGE [IMAGE...]

```
1.
其中，IMAGE为要删除的镜像的名称或ID，可以一次指定多个。

以下是一些常见的docker rmi命令的示例：

删除单个镜像：
```bash
docker rmi ubuntu:latest
```

1.
删除多个镜像：
```bash 
docker rmi ubuntu:latest nginx:1.19.0
```

1.
注意：如果删除的镜像正在被容器使用，则会出现错误。如果确实需要强制删除镜像，请添加-f选项。
```bash
docker rmi -f ubuntu:latest
```
1.
2. docker image prune命令
使用docker image prune命令可以删除未被任何容器使用的镜像。其基本语法为：
```bash
docker image prune [OPTIONS]
```
1.
以下是一些常见的docker image prune命令的示例：

删除未被任何容器使用的镜像：
```bash
docker image prune
```
1.
删除所有未被使用的镜像，包括标签为none的镜像：
```bash
docker image prune -a
```

1.
3. docker container prune命令
使用`docker container prune`命令可以删除未运行的容器。其基本语法为：
```bash
docker container prune [OPTIONS]
```

1.
以下是一些常见的docker container prune命令的示例：

删除所有未运行的容器：
```bash
docker container prune
```
1.
删除所有未运行的容器，并同时删除关联的网络：
```bash
docker container prune --volumes
```
 
 删除容器
 ``` bash
containerId=$(docker ps -a | grep lkn.devops | awk '{print $1}')
echo $containerId
if [ -n "$containerId" ]; then
    docker stop $containerId
    docker rm $containerId
fi
 ```
 
 镜像的常用命令，包括docker rmi、docker image prune和docker container prune。根据实际 来删除镜像以释放磁盘空间。在使用这些命令时，务必小心，以免误删重要的镜像或容器。


 ### Centos9 安装异常处理
 #### 1、Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg. Error: open /proc/sel
 [Centos8参考](https://blog.csdn.net/marc_chen/article/details/117869572)
 contos9 卸载 重新安装
 ``` bash
 yum remove docker 
 ```
 
 #### 2、ERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon runn
 [Centos7参考](http://www.manongjc.com/detail/64-yincbyewmhuovor.html)
``` bash
 systemctl daemon-reload && systemctl start docker
```

## docker基本使用  
查看 docker 是否安装成功  
docker version/docker -version/docker-v   
查看docker安装地址  
cd/var/lib/docker  
查询docker如何使用   
docker  
至于其他的一些命令，可以百度 


## Docker运行商品微服务 

条件：   
1、电商微服务系统    
2、Dockerfile文件   
步骤   
1、先创建电商微服务系统    
2、然后发布商品微服务到Linux     
3、然后创建Dockerfile文件  
4、然后配置Dockerfile
``` yml
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /publish
EXPOSE 80
EXPOSE 443
COPY publish/ /publish
ENTRYPOINT ["dotnet", "lkn.microservice.productservice.dl.dll"]
```
5、生成商品微服务镜像  
输入命令：
``` bash
docker build -t productservice_micro . 

```
6、启动镜像  
``` bash
 docker run   productservice_micro 
```
第一种：启动成功，但是外网是不无法访问
![Alt text](/images/docker/01/docker01_0002.png)

```bash
[root@localhost ~]# curl  http://192.168.3.61:80
curl: (7) Failed to connect to 192.168.3.61 port 80: 拒绝连接
```
第二种：启动方法，但报错。
``` bash
[root@localhost microservice]# docker run -P  productservice_micro 
docker: Error response from daemon: driver failed programming external connectivity on endpoint nifty_ganguly (d07bad7f448bfa562865ac781a0a21e20724489d30b8e94596233d556ab1a9e9):  (iptables failed: iptables --wait -t nat -A DOCKER -p tcp -d 0/0 --dport 32797 -j DNAT --to-destination 172.17.0.2:443 ! -i docker0: iptables: No chain/target/match by that name.
 (exit status 1)).
ERRO[0000] error waiting for container:  
```
#### 处理方法，只需重启docke
``` bash
[root@localhost microservice]# service docker restart
Redirecting to /bin/systemctl restart docker.service

## 查看 docker 状态
systemctl status docker.service 
```

再次运行,可以启动成功
``` bash
[root@localhost microservice]# docker run -P  productservice_micro 
warn: Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository[60]
      Storing keys in a directory '/root/.aspnet/DataProtection-Keys' that may not be persisted outside of the container. Protected data will be unavailable when container is destroyed.
warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]
      No XML encryptor configured. Key {99a9343f-aeab-4107-801c-a72adc920a7d} may be persisted to storage in unencrypted form.
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://[::]:80
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Production
info: Microsoft.Hosting.Lifetime[0]
```


## Docker镜像使用
首先我们必须知道镜像如何使用  

1、镜像管理命令介绍
``` bash
		docker image
   ```
2、镜像获取
	2.1 先搜索镜像
```bash
		docker search <镜像>
```
	2.2 然后下载镜像
``` bash
        docker image pull 
```
3、镜像列表
``` bash
	docker image ls
```
4、镜像列表基本状态解析
	各个选项说明:
- **REPOSITORY：**表示镜像的仓库源
- **TAG：**镜像的标签
- **IMAGE ID：**镜像ID
- **CREATED：**镜像创建时间
- **SIZE：**镜像大小
5、镜像详细
```bash
	docker image inspect <镜像id>
```
6、镜像删除
``` bash
	docker image rm <镜像id>
```
7、镜像删除构建失败的镜像
``` bash
	docker image prune
```
	7.1 清理未使用的镜像
``` bash
		docker image prune -a
```
    7.2 强制删除镜像
``` bash
	docker rmi -f <镜像id>
```
8、镜像设置标签,也叫镜像设置版本
``` bash
	docker image tag productservice_micro  productservice_micro:1.0.0
```
``` bash
[root@localhost microservice]# docker image tag productservice_micro  productservice_micro:1.0.0
## 查看镜像 修改版本
[root@localhost microservice]# docker image
image   images  
[root@localhost microservice]# docker images
REPOSITORY             TAG       IMAGE ID       CREATED        SIZE
productservice_micro   1.0.0     0dbf03c78b79   28 hours ago   220MB ## 已经修改的版本
productservice_micro   latest    0dbf03c78b79   28 hours ago   220MB
hello-world            latest    9c7a54a9a43c   6 months ago   13.3kB
```

9、镜像历史（了解镜像的操作记录）
``` bash
	docker image history [OPTIONS] <IMAGEid>
```
 10、导出镜像导入导出

      10.1 镜像导入
``` bash
	docker image import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
```
       10.2 镜像导入
``` bash
	docker image load [OPTIONS]

       Options:
               -i, --input string   Read from tar archive file, instead of STDIN
              -q, --quiet          Suppress the load output	
```
	 10.3 镜像导出，备份
``` bash
		docker image save [OPTIONS] IMAGE [IMAGE...]
``` 

## docker容器使用  

1、容器命令介绍
``` bash
		docker container   
```
   容器的修改和增删

	2、运行容器rmcore  
``` bash
		docker run rmcore  
```
	3、查看容器列表
``` bash
		docker ps -a
```
	3、后台运行rmcore
``` bash
		docker  run -d rmcore

		-d 后台执行
```
	4、暴露rmcore端口
``` bash
		docker run -d -P rmcore
```
		4.1 自定义端口暴露
``` bash
		docker run -d -p 2020:80 2021:443 rmcore
```
	 5、进入容器
``` bash
		docker exec -it rmcore /bin/bash

		-i :交互式操作

		 t : 终端

		/bin/bash 放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash，就好比xshell一样
```
	 6、退出容器
``` bash
		exit
```
	7、停止容器
``` bash
		docker stop rmcore
```
	 8、启动容器
``` bash
		docker start rmcore
```
 解压命令
``` bash
 unrar x asp.tar
```

## Docker容器结构
### docker 镜像容器总结   
总结：   
1、镜像和容器是一对多关系   
2、容器内部好像是一个linux系统  
3、从主机可以进入到容器内部，进行命令操作   
4、镜像不可写，容器可以读写   
大家现在有一个问题，如果我们想构建一个自己的镜像改怎么做呢？
那么现在我们开始学习Dockerfile,那么Dockerfile有什么作用呢？就是构建我们想要的任何镜像，现在，我们已经运行了一个aspnetcore项目，但是如果我想给aspnetcore做负载均衡，那么我该怎么做呢？是不是必须有一个nginx,可以nginx镜像不像aspnetcore有vs工具，如果我们想构建一个nginx,那么我们怎么办呢？有办法，那就是Dockerfile.现在，如果搭建想构建一个nginx镜像，那么，我们先了解一下Dockerfile. 

#### Docker Dockerfile 
Dockerfile是什么     
Dockerfile是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。  
#### Dockerfile文件指令 
``` yml
dockerfile的指令：

　　FROM：指定基础镜像（FROM是必备的指令，并且必须为第一条指令）。

　　RUN: 用来执行命令行命令。其基本格式：

　　　　　　shell格式： RUN  <命令>  ，输入在bash环境中的命令即可，一个dockerfile允许使用RUN不得超过127层，所以，使用一次RUN， 使用 ‘ \ ’ 换行，使用‘ && ’执行下一条命令。一般使用此种格式；

　　　　　　exec格式： RUN  <"可执行文件", "参数1", "参数2">，此种方式像是函数调用中的格式；

　　COPY:  复制文件。 其基本格式：

　　　　　　格式1：COPY <源路径>...<目标路径>

　　　　　　格式2：COPY [“<源路径1>”,....."<目标路径>"]

　　ADD: 更高级的复制文件，在COPY的基础上增加了一些功能，如果复制的是压缩包的话，会直接解压，而不需要在使用RUN解压；

　　CMD：容器启动命令。其基本格式：

　　　　　　shell格式： CMD <命令>

　　　　　　exec格式： CMD ["可执行文件", "参数1", "参数2"...]

　　　　　　参数列表格式： CMD [“参数1”, “参数2”...]，在指定了ENTRYPOINT指令后，用CMD指定具体的参数

　　ENTRYPOINT: 入口点。其基本格式分为exec和shell，

　　　　　　ENTRYPOINT的目的和CMD一样，都是在指定容器启动程序及参数。ENTRYPOINT在运行中可以替代，不过比CMD繁琐，需要通过docker run 的参数--entrypoint 来指定。当指定了ENTRYPOINT后，CMD的含义就发生了改变，不在是直接运行其命令，而是将CMD的内容作为参数传递给ENTRYPOINT指令。其执行时就变成了：  <ENTRYPOINT> "<CMD>"

　　ENV： 设置环境变量。（都可以使用这里使用的变量）其基本格式：

　　　　　　格式1：ENV <key> <value>

　　　　　　格式2：ENV <key1>=<value1> <key2>=<value>...

　　ARG: 构建参数。构建参数和ENV的效果一样，都是设置环境变量，所不同的是ARG所构建的环境变量在将来容器运行时是不存在的。其基本格式：

　　　　　　格式1： ARG <参数名> [=<默认值>]

　　　　　　格式2： 该默认值可以在构建命令 docker build  中用 --build-arg <参数名>=<值> 来覆盖

　　VOLUME: 定义匿名卷。 其基本格式：

　　　　　　格式1： VOLUME ["<路径1>", "<路径2>"...]

　　　　　　格式2： VOLUME <路径>

　　EXPOSE:  暴露端口。EXPOSE指令是声明运行时容器所提供的端口，在启动容器时不会在因为这个声明而开启端口。 其基本格式：

　　　　　　格式1： EXPOSE <端口1> [<端口2>...]

　　WORKDIR： 指定工作目录。其基本格式：

　　　　　　格式1： WORKDIR <工作目录路径>

　　USER： 指定当前用户。USER是帮助你切换到指定用户。 其基本格式：

　　　　　　格式1： USER <用户名>

　　HEALTCHECK： 健康检查，判断容器的状态是否正常。 其基本格式：

　　　　　　格式1： HEALTCHECK [选项] CMD <命令> ：设置检查容器健康状况的命令

　　　　　　格式2： HEALTCHECK NONE： 如果基础镜像有健康检查指令，使用此格式可以屏蔽掉其健康检查指令
```

#### Dockerfile 文件核心指令
``` yml
Dockerfile核心命令
	1、FROM 指定基础镜像构建
		写法：
		FROM 指定基础镜像

	2、COPY 复制命令。从上下文目录中复制文件或者目录到容器里指定路径。

		写法：

		COPY 源路径，目标路径

		COPY ["源路径"，"目标路径"]	

	3、RUN运行指令。构建的时候运行的指令

		主要在于镜像构建的时候运行，运行build命令的时候 

		后面接的命令就是shell输入的命令
	
		写法

		RUN  shell命令 参数1 参数2

		RUN ["shell命令 ","参数1"," 参数2"]

		例如：

		RUN ["echo",">"," /usr/share/index.html"]

	4、CMD运行指令。运行容器时候运行的指令

		主要在于镜像运行容器的时候生成，运行run的时候运行

		写法

		CMD <shell 命令> 
		CMD ["<可执行文件或命令>","<param1>","<param2>",...] 

		例如：

		CMD ["dotnet","rmcore.dll"]

		缺点：在run 命令后面可以进行覆盖

		docker run -d -P  rmcore dotnet rmcore.dll 进行覆盖掉

	5 ENTRYPOINT运行指令。运行容器时候运行的指令(不会被覆盖)

		写法

		ENTRYPOINT ["<executeable>","<param1>","<param2>",...]

		可以和CMD动态结合，设置动态的配置参数

		例如 

		ENTRYPOINT ["nginx", "-c"] 定参

		CMD ["/etc/nginx/nginx.conf"]变参

    6、EXPOSE暴露端口指令

		仅仅声明端口，就是指定镜像暴露的端口

		在run 的时候，通过docker run -p 会自动随机映射到EXPOSE端口

		写法

		EXPOSE 端口

		EXPOSE 端口

		例如 

		EXPOSE 5000

		EXPOSE 5001

	7、WORKDIR工作目录指令
		用于应用在容器内的工作目录，就好比:ruanmou目录
	
		写法

		WORKDIR <工作目录路径>

		例如

		WORKDIR /rmcore

		或者

		WORKDIR /nginx
```
## Docker 如何构建 nginx 镜像  
条件：  
1、nginx-1.15.2.tar.gz  
2、基础镜像 centos  
3、nginx安装命令  
4、Dockerfile 文件  
步骤    
1、从仓库中心下载centos默认是最新的镜像  
使用docker pull centos  
2、创建nginx目录  
mkdir nginx  
创建 Dockerfile 文件   
vim Dockerfile  
3、配置Dockerfile  
 3.1 nginx安装命令  
1 安装 nginx需要工具
``` bash
	 yum -y install gcc make pcre-devel zlib-devel tar zlib
```
2 下载nginx
``` bash
	 wget  http://nginx.org/download/nginx-1.15.2.tar.gz
```
3 nginx解压/nginx目录
``` bash
	tar -zxvf  nginx-1.15.2.tar.gz
```
4 切换到/nginx/nginx-1.15.2
``` bash
	执行./configure
		make
		make install 进行安装
```
5 切换到/usr/local/nginx/sbin
``` bash
	执行 ./nginx 启动nginx	
```
3.2 Nginx 脚本文件 nginx.sh   

``` bash
#!/bin/sh
/usr/local/nginx/sbin/nginx
/bin/bash -c 'while true; do sleep 200; done'
```
3.3 Dockerfile文件配置nginx   
``` yml
FROM centos
RUN yum -y install gcc make pcre-devel zlib-devel tar zlib
WORKDIR /nginx
COPY nginx-1.15.2.tar.gz /nginx
RUN tar -zxvf  nginx-1.15.2.tar.gz
RUN cd nginx-1.15.2 && ./configure && make && make install
EXPOSE 80
COPY nginx.sh /nginx.sh
RUN chmod 755 /nginx.sh
CMD ["/nginx.sh"]	
```
3.4 Dockerfile构建镜像  
```bash
docker build -t nginx .
```
3.5 运行nginx镜像  
``` bash
1 先启动容器(后台运行)
docker run -d -P nginx
2 进入容器
docker exec -it nginx /bin/bash
3 退出容器
exit命令
```
3.6 浏览器进行访问   
## 容器编排 Docker-Compose    
什么docker-compose   
批量创建多个镜像，和多个容器就是docker-compose  
目的：是方便镜像和容器的管理   
docker-compose.yml文件介绍  
yml文件类似于json文件，将所有的命令通过配置文件配置起来，可以用于配置多个 。
### yml文件介绍  
``` yml  
 yml文件配置
	  类似：json文件配置
      yml文件配置参考地址：https://www.runoob.com/w3cnote/yaml-intro.html
	   2.1.2 yml文件配置
		  1、对象  
				例如
				companies:{id: 1,name: company1,price: 200W}
				或
				companies:
					id: 1
					name: company1 
					price: 200W	
		  2、数组
			例如
			companies: [{id: 1,name: company1,price: 200W},{id: 2,name: company2,price: 500W}]
			或
			companies: 
				  -
					id: 1 
					name: company1
					price: 200W
				  -
					id: 2
					name: company2
					price: 500W
         3、基本变量类型 int float string boolean date datetime null
```

### docker-compose核心配置  

1、参考地址  
     https://docs.docker.com/compose/compose-file/
2 核心配置
``` yml
    version 指定compose版本 最好是3.0以上版本 目前最新是3.8版本
    services 配置容器[容器列表]
        nginx： #配置容器标识(唯一编号)
            image: #配置容器镜像
            ports: #配置容器映射端口号[数组]
            networks: #配置容器网络[数组]
    networks 网络指定配置
        nginx-rmcore: #配置网络名称
            external: true #网络自定义
    volumes 数据挂载配置
    extensions 扩展配置
```

## 使用docker-compose操作容器

条件

1、`docker-compose` 工具

2、`docker-compose.yml`配置文件

3、`nginx`镜像` Dockerfile`文件

4、商品微服务镜像 `Dockerfile`文件

步骤

1、下载`docker-compose`工具

​ 1、下载地址
``` bash 
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
​ 2、增加Compose权限
``` bash
 ​sudo chmod +x /usr/local/bin/docker-compose
```
​ 3、创建compose快捷方式
``` bash
​ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
``` 
​ 4、测试安装是否成功 ​ `docker-compose --version`
``` bash

[root@localhost bin]# docker-compose --version
docker-compose version 1.24.1, build 4667896b
```
2、创建`rmcore`镜像和`nginx`镜像

​ 课程已经准备好

3、`docker-compose.yml`文件配置

``` yml
version: '3'
services:
  lknnginx:
    image: lknnginx
    ports:
     - 8088:80
  productservice:
    image: productservice_micro
    ports:
     - 8090:80
```
4、运行`docker-compose.yml`文件

​ 1、切换`docker-compose.yml`目录

​ 2、运行yml文件
``` bash
​ docker-compose up -d
```
​ 3、批量删除容器
``` bash
​ docker-compose down
```

5、运行是否搭建成功
``` bash
​ curl 访问链接即可
```
使用`docker-compose`构建镜像   
//指定端口，它的缺陷是不能自由的动态伸缩。
``` yml
version: '3'
services:
  lknnginx:
    image: mynginx
    ports:
      - 8088:80
  lknproductservice:
    image: productservice_micro
    ports:
      - 8090:80
```

在compose目录当中，直接加载 `docker-compose.yml` ,运行容器 `docker-compose up -d`
``` bash
[root@localhost compose]# docker-compose up -d
Creating network "compose_default" with the default driver
Creating compose_lknproductservice_1 ... done
Creating compose_lknnginx_1          ... done

#批量 停止
[root@localhost compose]# docker-compose stop
Stopping compose_lknnginx_1          ... done
Stopping compose_lknproductservice_1 ... done

```

## docker-compose 动态伸缩 scale 
``` bash
[root@localhost compose]# docker-compose scale lknnginx=3  # lknnginx 这里是指docker-compose中的服务名称
WARNING: The scale command is deprecated. Use the up command with the --scale flag instead.
WARNING: The "lknnginx" service specifies a port on the host. If multiple containers for this service are created on a single host, the port will clash.
Starting compose_lknnginx_1 ... done
Creating compose_lknnginx_2 ... error
Creating compose_lknnginx_3 ... error

ERROR: for compose_lknnginx_3  Cannot start service lknnginx: driver failed programming external connectivity on endpoint compose_lknnginx_3 (ea584e2230e67dde0516ddc8779c3ca1fa575f86e3b3c357298c5416819b6f87): Bind for 0.0.0.0:8088 failed: port is already allocated

ERROR: for compose_lknnginx_2  Cannot start service lknnginx: driver failed programming external connectivity on endpoint compose_lknnginx_2 (76341f073a8fb8af0bf37779e68ecf88d4e904e460eb9acd483444d8fba71468): Bind for 0.0.0.0:8088 failed: port is already allocated
ERROR: Cannot start service lknnginx: driver failed programming external connectivity on endpoint compose_lknnginx_3 (ea584e2230e67dde0516ddc8779c3ca1fa575f86e3b3c357298c5416819b6f87): Bind for 0.0.0.0:8088 failed: port is already allocated
[root@localhost compose]# docker-compose scale lkn_nginx=3
WARNING: The scale command is deprecated. Use the up command with the --scale flag instead.
ERROR: No such service: lkn_nginx
//异常信息，说明端口被占用，需要修改docker-compose.yml配置文件
```
动态伸缩，创建容器
```yml
version: '3'
services:
  lknnginx:
    image: mynginx
  lknproductservice:
    image: productservice_micro
    ports:
      - 8090:80
```
之前已经创建了3个容器，现在删除2个。
``` bash
docker-compose scale lknnginx=1
[root@localhost compose]# docker-compose  scale lknnginx=1
WARNING: The scale command is deprecated. Use the up command with the --scale flag instead.
Stopping and removing compose_lknnginx_2 ... done
Stopping and removing compose_lknnginx_3 ... done

```
## 启动 docker-compose 的日志
``` bash
[root@localhost compose]# docker-compose  -f /root/microservice/compose/docker-compose.yml logs
Attaching to compose_lknproductservice_1, compose_lknnginx_1
lknproductservice_1  | warn: Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository[60]
lknproductservice_1  |       Storing keys in a directory '/root/.aspnet/DataProtection-Keys' that may not be persisted outside of the container. Protected data will be unavailable when container is destroyed.
lknproductservice_1  | warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]
lknproductservice_1  |       No XML encryptor configured. Key {25e80828-d97b-4e6f-8a58-a81766746b6c} may be persisted to storage in unencrypted form.
lknproductservice_1  | info: Microsoft.Hosting.Lifetime[14]
lknproductservice_1  |       Now listening on: http://[::]:80
lknproductservice_1  | info: Microsoft.Hosting.Lifetime[0]
lknproductservice_1  |       Application started. Press Ctrl+C to shut down.
lknproductservice_1  | info: Microsoft.Hosting.Lifetime[0]
lknproductservice_1  |       Hosting environment: Production
lknproductservice_1  | info: Microsoft.Hosting.Lifetime[0]
lknproductservice_1  |       Content root path: /publish

```
## Docker network  网络  
### 什么是network  
`network` 类型   
`brigde`类似虚拟机桥接模式NAT模式    
`host`类似虚拟机桥接模式   
`none` 无网络模式，只能和主机通信类似于虚拟机仅主机模式     

![Alt text](/images/docker/01/docker01_0003.png)

### 容器中网络分析  

1、通过 `ifconfig` 指令查看 当前linux的ip,不然发现`br-73c53ebd4c27`的网段，这个网段是docker-compos 自动帮我们创建的。

![Alt text](/images/docker/01/docker01_0004.png)

通过 `docker network  ls` 查看当前docke的网格情况，找到 compose_default的网段下的服务
``` bash
[root@localhost compose]# docker network  ls
NETWORK ID     NAME              DRIVER    SCOPE
135f6bd6a817   bridge            bridge    local
73c53ebd4c27   compose_default   bridge    local
5d46f2b37b92   host              host      local
1164d1413a7a   none              null      local
[root@localhost compose]# docker network  inspect 73c53ebd4c27
[
    {
        "Name": "compose_default",
        "Id": "73c53ebd4c277be017508844a4b2eda878e4f4519c85de7ede46078f54aeca25",
        "Created": "2023-11-20T16:32:47.212724167+08:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.18.0.0/16", // 子网地址范围
                    "Gateway": "172.18.0.1" // 网关
                }
            ]
        },
        "Internal": false,
        "Attachable": true,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "182860d867a8715ca564462c44ae4be73f4c671d1c88824cd7c15f6b74ecc767": {
                "Name": "compose_lknproductservice_1",//关联的微服务
                "EndpointID": "bd87629ec33f58719493ad7d311531a047d06d16493108c5f654982309122b05",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",// ip 
                "IPv6Address": ""
            },
            "97729d0d32c852fd9dc8da97593c8a94cc5d3f34a36f5bd80ecfca35c086bd58": {
                "Name": "compose_lknnginx_1", //关联的微服务
                "EndpointID": "ef57b780ef1adac1521ad8efee88db6cfc94aaa4332b7617498583d7222beaa5",
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",# ip
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {
            "com.docker.compose.network": "default",
            "com.docker.compose.project": "compose",
            "com.docker.compose.version": "1.24.1"
        }
    }
]
```
2、docker 虚拟机 默认指定桥接模式，通过主机ip进行通信的。
``` bash
docker network create -d  bridge lknmicroservice
```
然后 查看网络  
``` bash
[root@localhost compose]# ifconfig
br-73c53ebd4c27: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.18.0.1  netmask 255.255.0.0  broadcast 172.18.255.255
        inet6 fe80::42:2ff:fe0f:4d17  prefixlen 64  scopeid 0x20<link>
        ether 02:42:02:0f:4d:17  txqueuelen 0  (Ethernet)
        RX packets 34362  bytes 2788649 (2.6 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 79555  bytes 169649516 (161.7 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

br-fe0704eb7d4f: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.19.0.1  netmask 255.255.0.0  broadcast 172.19.255.255
        ether 02:42:cc:74:54:b8  txqueuelen 0  (Ethernet)
        RX packets 320  bytes 388680 (379.5 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 429  bytes 397728 (388.4 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        inet6 fe80::42:51ff:fe19:a0c0  prefixlen 64  scopeid 0x20<link>
        ether 02:42:51:19:a0:c0  txqueuelen 0  (Ethernet)
        RX packets 34362  bytes 2788649 (2.6 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 79555  bytes 169649516 (161.7 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

enp0s3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.2.15  netmask 255.255.255.0  broadcast 10.0.2.255
        inet6 fe80::a00:27ff:fe79:eb7  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:79:0e:b7  txqueuelen 1000  (Ethernet)
        RX packets 731365  bytes 914731582 (872.3 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 222033  bytes 71034595 (67.7 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

enp0s8: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.3.61  netmask 255.255.255.0  broadcast 192.168.3.255
        inet6 fe80::a00:27ff:fe39:fea  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:39:0f:ea  txqueuelen 1000  (Ethernet)
        RX packets 34325  bytes 2148898 (2.0 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 3353  bytes 1981686 (1.8 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 49  bytes 9743 (9.5 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 49  bytes 9743 (9.5 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

vetha76453b: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet6 fe80::a8c4:ebff:fec4:99b9  prefixlen 64  scopeid 0x20<link>
        ether aa:c4:eb:c4:99:b9  txqueuelen 0  (Ethernet)
        RX packets 232  bytes 393444 (384.2 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 289  bytes 30903 (30.1 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

vethcab32a5: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet6 fe80::186b:d1ff:fec4:a3e4  prefixlen 64  scopeid 0x20<link>
        ether 1a:6b:d1:c4:a3:e4  txqueuelen 0  (Ethernet)
        RX packets 320  bytes 388680 (379.5 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 429  bytes 397728 (388.4 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
 
```

也可能通过` docker network ls` ，docker network 网格创建成功了。


### 为什么要进行容器互联  
容器之间由于是隔离的，导致网络是不通的。  
如何解决呢？  
1、查看容器网络  
``` bash
docker inspect lknnginx
```
网络信息
``` bash
 "Networks": {
                "compose_default": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "8af9c6c40298",
                        "lknnginx"
                    ],
                    "NetworkID": "73c53ebd4c277be017508844a4b2eda878e4f4519c85de7ede46078f54aeca25",
                    "EndpointID": "d5514e303cfae8bae7723d5634b727ed21af51886b6255bb2e3a55199e318053",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:03",
                    "DriverOpts": null
                }
            }

```
2、进入nginx容器  
``` bash
docker exec -it lknnginx /bin/bash
```
3、修改nginx配置  
``` text
  1、 切换到nginx配置目录 cd /user/local/nginx/conf
  2、编辑 vi nginx.conf ,输入容器IP   
```
修改容器中的nginx.conf 文件 ，把微服务的代理地址配置即可。
``` yml
....
第一种通过Ip
location / {
	 proxy_pass  http://172.18.0.2:80; # 端口是容器端口 80，不需要指定 8090 端口（linux 映射接口）
}
第二种通过 容器名称
location / {
	 proxy_pass  http://lknproductservice:80; # 端口是容器端口 80，不需要指定 8090 端口（linux 映射接口）
}
....
```

4、然后进行访问 
出现了网络异常问题，如何解决？  
使用网络`network`来解决，内部使用`Bridge`桥接网络来解决！  
条件   
1、`nginx`镜像  
2、商品微服务镜像   
3、容器网络`network ` 
步骤  
1、使用`network`设置网络  
1.2 查看`network`使用
1.2.1 输入`docker`命令，查看`network`如何使用  
1.2.2 输入`docker network`,查看network使用   
1.3 创建网络  
```bash 
docker network create lknmicoservice
```
指定创建
``` bash
docker network create -d bridge lknmicoservice 
```
1.4 选择驱动版本（默认为桥接版本）  
1.4.1 桥接网络模式（`brigde`） 覆盖网络模式（`overlay`）主机网络模式（`host`）MAC网络模式（`macvlan`）:禁用网络模式（none）:其它模式（网络插件）
1.4.2 如何在`docker-compose.yml`文件内使用`network `
已经有镜像的配置
``` yml
[root@localhost compose]# cat docker-compose.yml 
version: '3'
services:
  lknnginx:
    image: mynginx  
    networks:
      - lknmicroservice
    ports:
      - 8088:80
  lknproductservice:
    image: productservice_micro
    networks:
      - lknmicroservice
    ports:
      - 8090:80    
networks:
  lknmicroservice: 
    external: true

``
没有镜像，批量生成镜像配置

``` yml
version: '3'
services:
  lknnginx:
    #image: mynginx
    build: /root/microservice/nginx # 生成镜像文件目录,指定Dockerfile文件目录即可
    networks:
      - lknmicroservice
    ports:
      - 8088:80
  lknproductservice:
    #image: productservice_micro
    build: /root/microservice/productservice
    networks:
      - lknmicroservice
    ports:
      - 8090:80    
networks:
  lknmicroservice: 
    external: true

```

2、更新compose.yml配置文件
``` bash
docker-compose up -d
```

3、查询 `docker network inspect lknmicroservice`
```bash
[root@localhost ~]# docker network inspect lknmicroservice
[
    {
        "Name": "lknmicroservice",
        "Id": "fe0704eb7d4f0fd4e5aabba834e73289b11e924b0a5d0c084f51ec76900294e3",
        "Created": "2023-11-21T10:39:04.66342572+08:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.19.0.0/16",
                    "Gateway": "172.19.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "5bd3e0e89c7729086ee5042e7a3126ac9d7dfadc46034d1d8273b09203255dc5": {
                "Name": "compose_lknnginx_1",
                "EndpointID": "6b8c65bc45402310c3e9ae7190635a904e2eaf8e56d7f7c07de6c36f6d6775e2",
                "MacAddress": "02:42:ac:13:00:02",
                "IPv4Address": "172.19.0.2/16",
                "IPv6Address": ""
            },
            "a1b2bdc5c1d7a18a168fb3fe41c2162ee0f06c4d711b4e265c0598cafa9c551d": {
                "Name": "compose_lknproductservice_1",
                "EndpointID": "e2c9c3085af75aa71c15237edfd499aa3c101359fa4aff82108fc1b2279e5596",
                "MacAddress": "02:42:ac:13:00:03",
                "IPv4Address": "172.19.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]

```
查看docker 网络得知，docker-compose自定义网络成功。




## Docker volume  数据卷  
### 什么是volume  
数据卷就是将容器的数据存储到主机上，方便进行持久化存储   

#### 如何使用volume  
条件  
1、nginx.conf  
步骤  
1、先创建nginx.conf文件  
2、然后输入nginx.conf内容  

``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
#log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
#                  '$status $body_bytes_sent "$http_referer" '
#                  '"$http_user_agent" "$http_x_forwarded_for"';

#access_log  logs/access.log  main;

sendfile        on;
#tcp_nopush     on;

#keepalive_timeout  0;
keepalive_timeout  65;

#gzip  on;

server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        proxy_pass  http://lknproductservice:80; //lknproductservice  是 docker-compose.yml 配置中的服务名称
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
   }
 }
```
3、然后在`docker-compose.yml`文件中配置  
``` bash
version: '3'
services:
  lknnginx:
    #image: mynginx
    build: /root/microservice/nginx
    ports:
      - 8088:80
    networks:
      - lknmicroservice
    volumes:
      - /root/microservice/compose/nginx.conf:/usr/local/nginx/conf/nginx.conf
  lknproductservice:  //容器名称 可以用于通信，相当DNS ,容器内部的域名
    #image: productservice_micro
    build: /root/microservice/productservice
    ports:
      - 8090:80
    networks:
      - lknmicroservice
networks:
  lknmicroservice:
    external: true

```

备注：

1、volumes：数据卷指令

2、/root/lkn/compose/nginx.conf ：Linux主机nginx.conf文件地址

3、/usr/local/nginx/conf/nginx.conf ：nginx容器nginx.conf地址


## 笔记

总结

### docker部署微服务思路

1、项目发布

2、项目发布上传

3、项目镜像生成

4、镜像运行

### 商品列表查询过程原理

浏览器—>Linux—->Docker—–>容器—->应用

​ 32772 80 80

​ 65535

性能是否会底下？

1、基本上可以忽然不计

镜像 ：没有启动Linux

### 常识

1、一个项目一个镜像，一 一对应关系。

2、镜像命令，增删改查

容器 ：启动的Linux

### 镜像和容器区别

1、镜像不可改变，容器可以修改。

2、镜像可以多次运行。容器只能运行一次。

​ 镜像可以生成多个容器。

​ 容器只能运行一次。

关系：

1、镜像和容器 ：1对多

就是：类和对象的关系。

作用：

好处：快速启动集群

​ 1、容器之间互相隔离的

### 容器操作

`dockerfile`

作用：生成镜像。
``` bash
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /publish  //工作目录 相当于站点根据目录
EXPOSE 80
EXPOSE 443
COPY publish/ /publish
ENTRYPOINT ["dotnet", "lkn.microservice.productservice.dl.dll"] //运行指令的位置，是要工作目录下运行
```
1、把一个项目生成一个镜像
思路

1、父镜像(基础镜像)

2、基本操作

运行一个微服务基本步骤。

步骤

1、准备Linux主机

2、安装.Net7 环境

3、发布应用

​ publish

3、运行应用：
``` bash
​ dotnet lkn.microservice.productservice.dl.dll
```

`Docker` 运行环境

1、Linux运行。
``` bash
FROM mcr.microsoft.com/dotnet/aspnet:6.0

(Linux镜像+.NetSDK镜像)

WORKDIR /publish
EXPOSE 80
EXPOSE 443
COPY publish/ /publish
ENTRYPOINT ["dotnet", "lkn.microservice.productservice.dl.dll"]
```
### 思考问题：

1、根基础镜像是谁？

​ Linux

镜像之间是否可以复用？

1、可以复用

### 使用Dockerfile 自定义一个Nginx镜像

1、步骤

### Nginx运行需要的步骤

#### 基本步骤阶段

1、Linux主机

2、下载

3、编译

4、运行

1 安装 nginx需要工具
``` bash
yum -y install gcc make pcre-devel zlib-devel tar zlib
```
2 下载nginx
``` bash
wget http://nginx.org/download/nginx-1.15.2.tar.gz
```
3 nginx解压/nginx目录
``` bash
tar -zxvf nginx-1.15.2.tar.gz
```
4 切换到/nginx/nginx-1.15.2
``` bash
执行./configure
make
make install 进行安装
```
5 切换到/usr/local/nginx/sbin
``` bash
执行 ./nginx 启动nginx
```
#### 改造阶段
``` yml
##基础镜像模板
FROM centos:7  ## 原始镜像
RUN yum -y install gcc make pcre-devel zlib-devel tar zlib
WORKDIR /nginx
COPY nginx-1.15.2.tar.gz /nginx
RUN tar -zxvf nginx-1.15.2.tar.gz
RUN cd nginx-1.15.2 && ./configure && make && make install
EXPOSE 80
COPY nginx.sh /nginx.sh
RUN chmod 755 /nginx.sh
CMD ["/nginx.sh"]
```
自定义镜像：效率很低

Consul skywalking。

1、全球中央镜像仓库

缺陷：下载速度慢。

搭建：私有仓库。

问题：

1、官方镜像是否可以做基础镜像？

可以。什么时候用。

公司业务需要定制化的时候用。

容器编排
   批量操作容器
镜像编排
  批量操作镜像
##  `Docker-compose` 工具



## Linux 系统重启后 Docker 服务器以及容器设置自启动   

## 重启【reboot】 linux 系统后，docker 服务及容器没有自动启动 
1、设置Docker 服务自动启动
``` bash
systemctl enable docker.service
```

2、设置Docker的容器自动启动
``` bash
systemctl restart docker
```

3、容器还没有创建，在运行容器的时候加入--restart=always参数  

``` bash
docker run -id --restart=always -p 9999:9999 -v xxxx:xxxx 镜像名称:tag
```

4、容器已经运行的情况，运行以下命令：
``` bash
docker update --restart=always 容器名字或者容器ID
```

5、如果想停止自动启动，运行以下命令：
``` bash
docker update --restart=no 容器名字或者容器ID
```
``` bash
--restart具体参数值详细信息：

no - 容器退出时，不重启容器；

on-failure - 只有在非0状态退出时才从新启动容器；

always - 无论退出状态是如何，都重启容器；

``` 

## 卸载 docke 
[参考](https://blog.csdn.net/qq_43479188/article/details/133125597)
```bash
#停用
[root@lkn65 ~]# sudo systemctl stop docker.socket
# 查docker 包文件
[root@lkn65 ~]# yum list installed |grep docker
containerd.io.x86_64                             1.6.25-3.1.el9                   @docker-ce-stable
docker-buildx-plugin.x86_64                      0.11.2-1.el9                     @docker-ce-stable
docker-ce.x86_64                                 3:24.0.7-1.el9                   @docker-ce-stable
docker-ce-cli.x86_64                             1:24.0.7-1.el9                   @docker-ce-stable
docker-ce-rootless-extras.x86_64                 24.0.7-1.el9                     @docker-ce-stable
docker-compose-plugin.x86_64                     2.21.0-1.el9                     @docker-ce-stable
# 删除
[root@lkn65 ~]# rpm -qa |grep docker
docker-compose-plugin-2.21.0-1.el9.x86_64
docker-buildx-plugin-0.11.2-1.el9.x86_64
docker-ce-cli-24.0.7-1.el9.x86_64
docker-ce-rootless-extras-24.0.7-1.el9.x86_64
docker-ce-24.0.7-1.el9.x86_64
[root@lkn65 ~]# rm -rf /var/lib/docker

```
``` bash
#删除所有安装的docker文件包
yum -y remove <此处粘贴上一步所有的rpm源文件名用空格间隔>
#检查是否卸载干净
rpm -qa |grep docker
#删除docker的镜像文件，默认在/var/lib/docker目录下 
rm -rf /var/lib/docker
#卸载结束
```
## 指定版本安装docker 

```bash
#安装所需要的软件包
sudo yum install -y yum-utils  device-mapper-persistent-data  lvm2
#设置稳定的仓库（选择的阿里云）。
sudo yum-config-manager  --add-repo  http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
#安装特定版本的 Docker Engine-Community，请在存储库中列出可用版本，然后选择并安装：
yum list docker-ce --showduplicates | sort -r
yum list docker-ce-cli --showduplicates | sort -r
```

``` bash
#此处为兼容K8s选择20.10.3
#安装docker服务
sudo yum install docker-ce-20.10.15 docker-ce-cli-20.10.15 containerd.io
#安装完成后启动服务
systemctl start docker
#测试docker是否安装成功
docker run hello-world
```