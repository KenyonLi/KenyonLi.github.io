---
title: '微服务部署Docker'
date: '2023-10-27' 
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

``` yml
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

	1、centos7.0 以上的版本

	2、安装docker 版本仓库 docker版本

		2.1 设置仓库

            sudo yum install -y yum-utils device-mapper-persistent-data lvm2	

		2.2  稳定仓库

          sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 

	3、安装docker(默认安装最新版本)

      sudo yum install docker-ce docker-ce-cli containerd.io

      如果要安装其他版本

           要安装特定版本的 Docker Engine-Community，请在存储库中列出可用版本，然后选择并安装：

           1、列出并排序您存储库中可用的版本。此示例按版本号（从高到低）对结果进行排序。

              yum list docker-ce --showduplicates | sort -r

                    docker-ce.x86_64  3:18.09.1-3.el7                     docker-ce-stable
                    docker-ce.x86_64  3:18.09.0-3.el7                     docker-ce-stable
                    docker-ce.x86_64  18.06.1.ce-3.el7                    docker-ce-stable
                    docker-ce.x86_64  18.06.0.ce-3.el7                    docker-ce-stable

                2、通过其完整的软件包名称安装特定版本，该软件包名称是软件包名称（docker-ce）加上版本字符串（第二列），                     从第一个冒号（:）一直到第一个连字符，并用连字符（-）分隔。例如：docker-ce-18.09.1。

      sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io

	4、docker启动

     sudo systemctl start docker

	5、docker 运行(判断是否安装成功)

      sudo docker run hello-world
	  

4、docker 管理命令介绍
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
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /publish
EXPOSE 80
EXPOSE 443
COPY publish/ /publish
ENTRYPOINT ["dotnet", "lkn.microservice.productservice.dll"]
```
5、生成商品微服务镜像  
输入命令：
``` bash
docker build -t productservice_micro . 

```
## Docker镜像使用
首先我们必须知道镜像如何使用  
``` bash
1、镜像管理命令介绍
		docker image

2、镜像获取
	2.1 先搜索镜像

		docker search <镜像>

	2.2 然后下载镜像

        docker image pull 

3、镜像列表

	docker image ls

4、镜像列表基本状态解析

	各个选项说明:

- **REPOSITORY：**表示镜像的仓库源
- **TAG：**镜像的标签
- **IMAGE ID：**镜像ID
- **CREATED：**镜像创建时间
- **SIZE：**镜像大小

5、镜像详细

	docker image inspect <镜像id>

6、镜像删除

	docker image rm <镜像id>

7、镜像删除构建失败的镜像

	docker image prune

	7.1 清理未使用的镜像

		docker image prune -a

7、镜像设置标签,也叫镜像设置版本

	docker image tag lknproductservice lknproductservice:1.0.0

8、镜像历史（了解镜像的操作记录）

	docker image history [OPTIONS] <IMAGEid>

 9、导出镜像导入导出

      8.1 镜像导入

	docker image import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]

       8.2 镜像导入

	docker image load [OPTIONS]

       Options:
               -i, --input string   Read from tar archive file, instead of STDIN
              -q, --quiet          Suppress the load output	

	8.3 镜像导出，备份

		docker image save [OPTIONS] IMAGE [IMAGE...]

```   
刚才我大概介绍了一些主要命令操作和基本信息   
对于一些其他的命令，百度
## docker容器使用  
``` bash
1、容器命令介绍

		docker container

		容器的修改和增删

	2、运行容器rmcore

		docker run rmcore

	3、查看容器列表

		docker ps -a

	3、后台运行rmcore

		docker  run -d rmcore

		-d 后台执行

	4、暴露rmcore端口

		docker run -d -P rmcore

		4.1 自定义端口暴露

		docker run -d -p 2020:80 2021:443 rmcore

	 5、进入容器

		docker exec -it rmcore /bin/bash

		-i :交互式操作

		 t : 终端

		/bin/bash 放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash，就好比xshell一样

	 6、退出容器

		exit

	7、停止容器

		docker stop rmcore

	 8、启动容器

		docker start rmcore

 解压命令

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
``` yml
1 安装 nginx需要工具
	 yum -y install gcc make pcre-devel zlib-devel tar zlib
2 下载nginx
	 wget  http://nginx.org/download/nginx-1.15.2.tar.gz
3 nginx解压/nginx目录
	tar -zxvf  nginx-1.15.2.tar.gz
4 切换到/nginx/nginx-1.15.2
	执行./configure
		make
		make install 进行安装
5 切换到/usr/local/nginx/sbin
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
``` yml
1、参考地址  
     https://docs.docker.com/compose/compose-file/
2 核心配置
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
​ sudo curl -L “https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)” -o /usr/local/bin/docker-compose
```
​ 另一个下载地址
``` bash
​ sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s-uname -m` -o /usr/local/bin/docker-compose
```
​ 2、增加Compose权限
``` bash
​ sudo chmod +x /usr/local/bin/docker-compose
```
​ 3、创建compose快捷方式
``` bash
​ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
``` 
​ 4、测试安装是否成功
``` bash
​ docker-compose –version
```
2、创建rmcore镜像和nginx镜像

​ 课程已经准备好

3、docker-compose.yml文件配置

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
4、运行docker-compose.yml文件

​ 1、切换docker-compose.yml目录

​ 2、运行yml文件
``` bash
​ docker-compose up -d
```
5、运行是否搭建成功
``` bash
​ curl 访问链接即可
```
使用docker-compose构建镜像   
``` yml
version: '3'
services:
  rmcore1:
    build: /root/lkn/nginx
    ports:
     - 8088:80
     - 8089:443
  nginx2:
    build: /root/lkn/productservice
    ports:
     - 8090:80	
docker-compose up -d
```
## Docker network  网络  
### 什么是network 
network 类型  
brigde类似虚拟机桥接模式NAT模式   
host类似虚拟机桥接模式  
none 无网络模式，只能和主机通信类似于虚拟机仅主机模式   
### 为什么要进行容器互联  
容器之间由于是隔离的，导致网络是不通的。  
如何解决呢？  
1、查看容器网络  
``` bash
docker inspect nginx  
```
2、进入nginx容器  
``` bash
docker exec -it nginx /bin/bash
```
3、修改nginx配置  
``` text
  1、 切换到nginx配置目录 cd /user/local/nginx/conf
  2、编辑 vi nginx.conf ,输入容器IP   
```
4、然后进行访问 
出现了网络异常问题，如何解决？  
使用网络network来解决，内部使用Bridge桥接网络来解决！  
条件   
1、nginx镜像  
2、商品微服务镜像   
3、容器网络network  
步骤  
1、使用network设置网络  
1.2 查看network使用
1.2.1 输入docker命令，查看network如何使用  
1.2.2 输入docker network,查看network使用   
1.3 创建网络  
```bash 
docker network create nginx-rmcore
```
指定创建
``` bash
docker network create -d bridge microservice 
```
1.4 选择驱动版本（默认为桥接版本）  
1.4.1 桥接网络模式（brigde） 覆盖网络模式（overlay）主机网络模式（host）MAC网络模式（macvlan）:禁用网络模式（none）:其它模式（网络插件）
1.4.2 如何在docker-compose.yml文件内使用network 
``` yml
version: '3'
services:
  lknnginx:
    build: /root/lkn/nginx
    ports:
     - 8088:80
    networks:
     - microservice
  productservice:
    build: /root/lkn/productservice
    ports:
     - 8090:80
    networks:
     - microservice
networks:
 microservice:
      external: true
```

2、更新compose.yml配置文件
``` bash
docker-compose up -d
```
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
        proxy_pass  http://productservice:80;
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
3、然后在docker-compose.yml 文件中配置  
``` bash
version: '3'
services:
  lknnginx:
    build: /root/lkn/nginx
    ports:
     - 8088:80
    networks:
     - microservice
    volumes:
     - /root/lkn/compose/nginx.conf:/usr/local/nginx/conf/nginx.conf
  productservice:
    build: /root/lkn/productservice
    ports:
     - 8090:80
    networks:
     - microservice
networks:
 microservice:
      external: true
```

备注：

1、volumes：数据卷指令

2、/root/lkn/compose/nginx.conf ：Linux主机nginx.conf文件地址

3、/usr/local/nginx/conf/nginx.conf ：nginx容器nginx.conf地址


## 笔记

总结

docker部署微服务思路

1、项目发布

2、项目发布上传

3、项目镜像生成

4、镜像运行

商品列表查询过程原理

浏览器—>Linux—->Docker—–>容器—->应用

​ 32772 80 80

​ 65535

性能是否会底下？

1、基本上可以忽然不计

镜像 ：没有启动Linux

常识

1、一个项目一个镜像，一 一对应关系。

2、镜像命令，增删改查

容器 ：启动的Linux

镜像和容器区别

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

容器操作

dockerfile

作用：生成镜像。

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /publish
EXPOSE 80
EXPOSE 443
COPY publish/ /publish
ENTRYPOINT [“dotnet”, “lkn.microservice.productservice.dll”]

1、把一个项目生成一个镜像
思路

1、父镜像(基础镜像)

2、基本操作

运行一个微服务基本步骤。

步骤

1、准备Linux主机

2、安装.Net6 环境

3、发布应用

​ publish

3、运行应用：

​ dotnet lkn.microservice.productservice.dll

Docker

1、Linux运行。

FROM mcr.microsoft.com/dotnet/aspnet:6.0

(Linux镜像+.NetSDK镜像)

WORKDIR /publish
EXPOSE 80
EXPOSE 443
COPY publish/ /publish
ENTRYPOINT [“dotnet”, “lkn.microservice.productservice.dll”]

思考问题：

1、根基础镜像是谁？

​ Linux

镜像之间是否可以复用？

1、可以复用

使用Dockerfile 自定义一个Nginx镜像

1、步骤

Nginx运行需要的步骤

基本步骤阶段

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
改造阶段
``` yml
FROM centos:7
RUN yum -y install gcc make pcre-devel zlib-devel tar zlib
WORKDIR /nginx
COPY nginx-1.15.2.tar.gz /nginx
RUN tar -zxvf nginx-1.15.2.tar.gz
RUN cd nginx-1.15.2 && ./configure && make && make install
EXPOSE 80
COPY nginx.sh /nginx.sh
RUN chmod 755 /nginx.sh
CMD [“/nginx.sh”]
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

镜像编排

Docker-compose。