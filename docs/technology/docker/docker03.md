---
title: '微服务部署-k8s'
date: '2023-11-21' 
tags:
- '微服务部署-k8s'
- 'abp'
- 'dotnet'
- 'docker'
categories:
- '技术'
---

## 目录
[[toc]]

## 微服务部署-k8s

### k8s介绍 
### 什么是docker 
1、先举出定义，然后画图  
2、最后通过形象例子解释  
我们开发一个项目，部署到linux系统，需要配置环境，相当复杂。如果我们想部署到不同的linux服务器，又需要准备linux环境，如果是更多呢？我们维护量会非常大，这个时候，我们解决这个环境变量复杂的问题，所以我们出现了docker,用一个docker来解决，所以定义docker:容器引擎技术。  
就好比，我们美了很多农虾，我们需要把这些农虾去买到餐馆一样，我们需要讨价还价。一个餐馆还好，如果我们需要和很多餐馆讨价还价呢？非常麻烦，不仅虾子，导致虾子全部死了。所以我们出现了收虾人，收虾人就是docker.

### 什么是docker内部概念  
举小区构造房子的例子   
房子是容器  
设计院是仓库  
设计院设计的房屋模板镜像  
物业就是docker  
小区就是pod  
开发商就是k8s  
总结   
1、容器：规范运行项目  
2、镜像：容器移植  
3、仓库：存储镜像  
### 三个问题？  
如果一次性要运行上千项目呢？  
如何实现一个项目运行在不同docker上，也就是docker集群？  
如果项目宕机了，如何检测到呢？ 
形象例子：  
如果docker是一艘大船，那么k8s就是船长，指引方向的人，可以让这艘船随便的开向哪里。 
其实k8s还有一个同父异母兄弟swarm,两兄弟都可以解决这些问题？ 

### 什么是k8s  
就是管理这些房子的大管家  
Kubernetes(k8s)是google开源的容器集群管理系统（谷歌内部：Borg）,它主要用于容器编排启动容器、自动化部署、扩展和管理容器应用和回收容器。k8s的目标是让部署容器化的应用简单并且高效，k8s提供了应用部署、规划、更新、维护的一种机制！   
要理解k8s必须首先要知道k8s和docker关系。  
 k8s是一个舵手，专门用来进行给docker掌管方向的。  
 可能你们没有接触过这样的一个场景，不是很好理解，咱们再来说一个，公司场景。在座的各位应该都是上班的吧，有没有没上班的，上了那么久的班，公司里面应该有老板和员工。这个都不否认吧老板是干嘛的呢？员工是干嘛的？   
 老板定方向和协调员工做事的，员工是做事的，这些都是他们的职责。那么docker 和 k8s的关系，k8s是老板，docker呢就是员工。作用是一样的，k8s就是让docker来干事的。

咱们在看一个非常形象的例子：我想大家都是非常喜欢坐顺风车的，滴滴，顺风车司机。k8s就是滴滴，docker就是司机  
总结：k8s是一个专门的容器编制引擎。k8s就是让应用在docker上运行。  

### 为什么要使用k8s
有学习过docker的同学，可能会第一时间问，我们不是有了swarm,为什么还要学习k8s呢？能有这样思考的同学，我觉得非常棒，只有思考，才能让我们体会技术的魅力。成为技术的主人。而不是客人。
咱们只要看一下swarm 和 k8s的优缺点，这个问题才会明白了。
因为当docker容器异常的时候，docker无法将容器进行重启，如果容器数量比较大  
swarm 优点  
1、架构简单，部署运维成本低  
  docker swarm 集群模式由于原生态集成到docker-engine中，所以首先学习成本低，对于使用docker-engine 1.12版本及以上可以平滑过渡，service服务可以满足动态增减容器个数，同时具备自身的负载均衡，swarm 管理者多台设定保证了机器在出错后有一个良好的容灾机制  
2、启动速度快  
 swarm集群只会有两层交互，容器启动是毫秒级  
 swarm缺点  
 1、无法提供更精细的管理  
 swarm API兼容docker API,所以使得swarm无法提供集群的更加精细的管理  
 2、网络问题  
 在网络方面，默认docker容器是通过桥接与NAT和主机外网络通信，这样就出现2个问题，一个是因为是NAT,外部主机无法主动访问容器内（除了端口映射），另外默认桥接IP是一样的，这样会出现不同主机的容器
 有相同的ip的情况。这样两个容器更加不能通信。同时网络性能方面，有人测试经过桥接的网络性能只有主机网络性能的70%。当然以上问题通过其他工具解决，比如用Flannel或OVS网桥  

 3、容器可靠性
 在容器可靠性方面，相较于Kubernetes的Replication Controllers可以监控并维持容器的生命，swarm 在启动时刻可以控制容器启动，在启动后，如果容器或者主机崩溃，swarm没有机制来保证容器的运行。  
 kubernetes优点：  
 1、管理更趋于完善稳定  
 kubernetes集群管理更趋于完善稳定，同时pod功能上比swarm的service更加强大  
 2、健康机制完善  
 Replication Contoller可以监控并维持容器的生命  
 3、轻松应对复杂的网络环境  
 kubernetes默认使用Flannel作为overlay网络。
 Flannel是CorOS团队针对Kubernetes设计的一个覆盖网络（OverlayNetwork）工具，其目的在于帮助每个使用Kuberentes的CoreOS主机拥有一个完整的子网。
 kubernetes劣势：
 1、配置、搭建稍显复杂，学习成本高 
 由于配置复杂，学习成本相对较高，对应运维的成本相对高点  
 2、启动速度稍逊  
 kubernetes会有五层交互，启动是秒级，启动速度慢于swarm  
 ## [官网地址](https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/)
  https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/
 ## k8s集群概念  
###  什么是集群  
 多个实例组成的集合  
例如：多个nginx实例  
## k8s集群角色 
node:负责运行应用程序  
master:负责管理node  

![Alt text](/images/docker/03/docker03_001.png)

## k8s集群内部概念  
swarm 内部和k8s内部对比  
service pod项目经理  
stack deployment 项目总监  

## k8s 集群操作概念
kubeadm:k8s集群管理组件   
kubectl:操作k8s集群客户端    
kubelet:运行每个节点容器   

## k8s 集群搭建  
### 注意：
k8s有硬件要求，必须运行cpu为2核，内存为2G以上
### 前提条件：
`docker`:k8s运行用来运行容器    
`kubeadm`:k8s集群搭建   
`kubectl`:操作k8s集群客户端   
`kubelet`:运行每个节点容器  

### 步骤  
#### 1-8（除了4）在所有节点执行  
#### 1、关闭防火墙，配置免密码登录
``` bash

systemctl stop firewall #防止端口不开放，k8s集群无法启动
```
#### 2、关闭 selinux
```bash
setenforce 0
```
#### 3、关闭swap  
![Alt text](/images/docker/03/docker03_002.png)

``` bash
swapoff -a  #临时关闭
free        # 可以通过这个命令查看swap 是否关闭了
vim /etc/fstab # 永久关闭  注释swap那一行（访问内存分区，k8s无法启动）

sed -i 's/.*swap.*/#&/' /etc/fstab

[root@localhost ~]# systemctl stop firewalld
[root@localhost ~]# setenforce  0
[root@localhost ~]# swapoff  -a
[root@localhost ~]# free 
               total        used        free      shared  buff/cache   available
Mem:         1806068      703704      844676       11692      423952     1102364
Swap:              0           0           0

```
#### 4、添加主机名与ip对应的关系，免密（这一步可以只在master执行），这一步我为后面传输网络做准备   
``` bash
修改主机名称
hostnamectl set-hostname lk64 && bash

vim /etc/hosts
192.168.3.66       lkn01
192.168.3.64       lkn02
```
免密
``` bash
ssh-keygen
cat .ssh/id_rsa.pub >> .ssh/authorized_keys
chmod 600 .ssh/authorized_keys

# 可以在master生成，然后拷贝到node节点(免密登录，主机之间互相传文件)
scp -r .ssh root@192.168.44.4:/root

# 使用 xhe远程 拷贝密钥
 ssh-copy-id lkn65
[root@lkn66 ~]# ssh-copy-id lkn66
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/root/.ssh/id_rsa.pub"
The authenticity of host 'lkn66 (192.168.3.66)' can't be established.
ED25519 key fingerprint is SHA256:1enlDYahcD8aoSNDodKcoL8wxFmYDurvyZny5/kmyC4.
This host key is known by the following other names/addresses:
    ~/.ssh/known_hosts:1: 192.168.3.66
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes   
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@lkn66's password: 
Permission denied, please try again.
root@lkn66's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'lkn66'"


```

#### 5.将桥接的IPV4流量传递到iptables的链
``` bash
1、先加载模块
modprobe br_netfilter

vi /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward=1
# 重新加载
sysctl --system

sysctl -p /etc/sysctl.d/k8s.conf
```

#### 5.1 安装基础软件包
```bash
[root@lkn66 ~]#  yum install -y yum-utils device-mapper-persistent-data lvm2wget net-tools nfs-utils lrzsz gcc gcc-c++ make cmake libxml2-devel openssl-devel curlcurl-devel unzip sudo ntp libaio-devel wget vim ncurses-devel autoconf automake zlibdevel python-devel epel-release openssh-server socat ipvsadm conntrack ntpdate telnete

未找到 lvm2wget curlcurl-devel ntp zlibdevel ntpdate telnete

```
#### 6.安装Docker及同步时间
``` bash
wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O/etc/yum.repos.d/docker-ce.repo

sudo yum install docker-ce-20.10.15 docker-ce-cli-20.10.15 containerd.io
# yum -y install docker-ce

#设置开机启动

systemctl start docker && systemctl enable docker

#配置 docker 驱动
 tee /etc/docker/daemonjson <<EOF
{
  "registry-mirrors":["https://vh3bm52y.mirror.aliyuncs.com","https://registry.dockercn.com","https://docker.mirrors.ustc.edu.cn","https://dockerhub.azk8s.cn","http://hub.mirror.c.163.com"]
  "exec-opts":["native.cgroupdriver=systemd"]
}
EOF

#淘汰了 centos 7 同步时间（这一步必须做，否则后面安装flannel可能会有证书错误）
yum install ntpdate -y
ntpdate cn.pool.ntp.org



```
开启 docker 
``` bash
[root@lkn66 ~]# vim /etc/docker/daemonjson 
[root@lkn66 ~]# systemctl daemon-reload 
[root@lkn66 ~]# systemctl restart  docker
[root@lkn66 ~]# systemctl  enable  docker
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service → /usr/lib/systemd/system/docker.service.
[root@lkn66 ~]# systemctl  status  docker
● docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; preset: disabled)
     Active: active (running) since Thu 2023-12-07 19:42:23 CST; 35s ago

```


6.1 centos9 同步时间工具安装[参考文档](https://wiki.crowncloud.net/?How_to_Sync_Time_in_CentOS_Stream_9_using_Chrony)
``` bash
#要安装Chrony，请使用以下命令：
yum install chrony -y
#使用以下命令启动chronyd服务并将chronyd设置为在重新引导时自动启动，
systemctl enable  chronyd --now # 设置chronyd 开机开启并立即启动

# 编辑 chronyd 配置文件，使用中国的时间服务器同步时间，速度更快
vim /etc/chrony.conf

删除:
server 0.centos.pool.ntp.org iburst
server 1.centos.pool.ntp.org iburst
server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst
在原来的位置，插入国内 NTP 服务器地址
server ntp1.aliyun.com iburst
server ntp2.aliyun.com iburst
server ntp1.tencent.com iburst
server ntp2.tencent.com iburst

# 重启
systemctl  restart chronyd
# 查看当前时间同步源
chronyc sources

[root@lkn66 ~]# chronyc sources
MS Name/IP address         Stratum Poll Reach LastRx Last sample               
===============================================================================
^* 120.25.115.20                 2   6   121    48    +21us[+1179us] +/- 3607us
^- 203.107.6.88                  2   6    63    52  -2342us[-1184us] +/-   31ms
^- 106.55.184.199                2   6    17    57  -1183us[  -25us] +/-   17ms
^- 111.230.189.174               2   6    17    57   +791us[+1329us] +/-   36ms
[root@lkn66 ~]# 

从上面结果可以看到: 这里总共输出 8 列信息，分别对应含义如下，重点看: Poll 列M 表示授时时钟源，^表示服务器，= 表示二级时钟源，#表示本地连接的参考时钟S指示源的状态，*当前同步的源，+表示其他可接受的源，?表示连接丢失的源，x 表示一个认为是falseticker 的时钟(即它的时间与大多数其他来源不一致)，~表示其时间似乎具有太多可变性的来源Name/lPaddress表示源的名称或IP地址e
Stratum表示源的层级，层级1表示本地连接的参考时钟，第2层表示通过第1层级计算机的时钟实现同步，依此类推。“
Poll 表示源轮询的频率，以秒为单位，值是2指数幂，例如值 6，表示每 2^6=64 秒，进行一次时问同步，chronvd 会很据当时的情况自动改变轮询频Reach 表示源的可达性的锁存值 (八进制数值)，该锁存值有 8 位，并在当接收或丢失一次时进行一




systemctl start chronyd
systemctl enable chronyd
#检查你的系统的时间是同步使用chrony现在。
chronyc tracking

#列出chronyd使用的时间源。
chronyc sources
#列出chronyd使用的每个源的漂移速度和偏移估计
chronyc sourcestats -v
```

#### 7.添加阿里云YUM软件源
``` bash
安装yum 工具
yum install yum-utils -y

 yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repoe



vim /etc/yum.repos.d/kubernetes.repo

[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
```

#### 8、安装 kubeadm,kubelet和kubectl
[在centos stream 9上搭建k8s最新版本](https://www.cnblogs.com/zengqinglei/p/17131046.html)
[【云原生-K8s】kubeadm搭建k8s集群1.25版本完整教程【docker、网络插件calico、中间层cri-docker】](https://developer.aliyun.com/article/1071066)
``` bash
#centos7 刷新缓存
yum makecache fast
#centos 9 
yum makecache --timer

yum install -y kubectl-1.20.0 kubeadm-1.20.0 kubelet-1.20.0 --nogpgcheck

# 版本  
yum install -y kubelet-1.23.1 kubeadm-1.23.1 kubectl-1.23.1 

# 启动kubelet服务
systemctl enable kubelet && systemctl start kubelet
```
每个软件包的作用

```yml
kubelet : 运行在集群所有节点上，用于启动 Pod 和容器等对象的工具
kubeadm : 用于初始化集群，启动集群的命令工具
kubectl : 用于和集群通信的命令行，通过 kubectl 可以部署和管理应用，查看各种资源，创建、删除和更新各种组件(
```

#### 9、部署kubernetes Master  
初始化makecache 
``` bash
# 第一次初始化比较慢，需要拉取镜像
kubeadm init \
--apiserver-advertise-address=192.168.3.65 \   # 换成自己master的IP
--image-repository registry.aliyuncs.com/google_containers \
--kubernetes-version v1.20.0 \
--service-cidr=10.1.0.0/16 \
--pod-network-cidr=10.244.0.0/16  # 使用flannel网络必须设置成这个cidrKUB

kubeadm init \
--apiserver-advertise-address=192.168.3.66 \
--image-repository registry.aliyuncs.com/google_containers \
--kubernetes-version v1.20.0 \
--service-cidr=10.1.0.0/16 \
--pod-network-cidr=10.244.0.0/16

接下来，将初始化结果中的命令复制出来执行：
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

kubeadm join 192.168.3.66:6443 --token eml8id.1yoangisuwgtgyoy  --discovery-token-ca-cert-hash sha256:1c408baadb6783d343d5bd480453411d310c007147bdf19e84903692724ca29b 

```
验证状态，发现前两个是`pending`，`get pods` 发现是`not ready`

``` bash
kubectl get pods --all-namespaces
NAMESPACE     NAME                             READY   STATUS   RESTARTS   AGE
kube-system   coredns-9d85f5447-fhdmx         0/1     Pending   0         100d
kube-system   coredns-9d85f5447-x5wfq         0/1     Pending   0         100d
kube-system   etcd-local1                     1/1     Running   0         100d
kube-system   kube-apiserver-local1           1/1     Running   0         100d
kube-system   kube-controller-manager-local1   1/1     Running   0         100d
kube-system   kube-proxy-2trv9                 1/1     Running   0         100d
kube-system   kube-scheduler-local1           1/1     Running   0         100d
```

##### 需要安装`flannel`

```bash
# 安装flannel（在master执行）/
 // 1、在线安装（一定要在线安装）
 配置： vi /etc/hosts 
 199.232.28.133  raw.githubusercontent.com

kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
下载文件在本地安装
kubectl apply -f kube-flannel.yml
// 1、离线安装（导致节点之间无法通信）
如果kube-flannel.yml无法下载
手动配置网路地址
mkdir /run/flannel/
 
#  FLANNEL_NETWORK=10.244.0.0/16   需要根据 kubeamd init 的参数据pod-network-cidr=10.244.0.0/16 一样

cat <<EOF> /run/flannel/subnet.env
FLANNEL_NETWORK=10.244.0.0/16 
FLANNEL_SUBNET=10.244.1.0/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=true
EOF

# 安装完flannel，将配置拷到node节点，否则添加节点之后状态不对
scp -r /etc/cni root@192.168.3.65:/etc

# 这一步也要拷贝，否则节点看着正常，但是pod由于网络原因无法创建
scp -r /run/flannel/ root@192.168.3.65:/run
```

##### 再次初始化
``` bash
# 执行第9步的命令
kubeadm init ...

参数
--kubernetes-version 指定Kubernetes版本
--apiserver-advertise-address 指定apiserver的监听地址
--pod-network-cidr 10.244.0.0/16 指定使用flanneld网络
--apiserver-bind-port api-server 6443的端口
--ignore-preflight-errors all 跳过之前已安装部分（出问题时，问题解决后加上继续运行）
```

##### 卸载k8s [参考](https://www.orchome.com/16614)
``` bash
sudo yum remove -y kubeadm kubectl kubelet kubernetes-cni kube*   
```

##### 查看集群状态，master正常

``` bash
[root@lkn66 ~]# kubectl get cs
Warning: v1 ComponentStatus is deprecated in v1.19+
NAME                 STATUS      MESSAGE                                                                                       ERROR
scheduler            Unhealthy   Get "http://127.0.0.1:10251/healthz": dial tcp 127.0.0.1:10251: connect: connection refused   
controller-manager   Unhealthy   Get "http://127.0.0.1:10252/healthz": dial tcp 127.0.0.1:10252: connect: connection refused   
etcd-0               Healthy     {"health":"true"}   

[root@lkn66 ~]# kubectl get pods --all-namespaces
NAMESPACE      NAME                            READY   STATUS             RESTARTS   AGE
kube-flannel   kube-flannel-ds-7r99t           1/1     Running            0          10h
kube-flannel   kube-flannel-ds-vv9r2           1/1     Running            0          11h
kube-system    coredns-7f89b7bc75-dbb9d        1/1     Running            0          12h
kube-system    coredns-7f89b7bc75-tzdjq        1/1     Running            0          12h
kube-system    etcd-lkn66                      1/1     Running            0          12h
kube-system    kube-apiserver-lkn66            1/1     Running            0          12h
kube-system    kube-controller-manager-lkn66   0/1     CrashLoopBackOff   114        12h
kube-system    kube-proxy-9shnb                1/1     Running            0          12h
kube-system    kube-proxy-cq2fx                1/1     Running            0          10h
kube-system    kube-scheduler-lkn66            0/1     CrashLoopBackOff   111        12h

```

#### 10、node工作节点加载

node节点执行1-8，如果第五步不执行，会添加失败

在node节点执行上面初始化时生成的join命令
```bash
 kubeadm join 192.168.3.66:6443 --token 3d33ro.m3jy3f3yq1o05q0y  --discovery-token-ca-cert-hash sha256:7288dab1719003c8be4dbfd2f916e7bc6e1703e7ac650701683a71535a7eb43c 

# 输出
This node has joined the cluster:
* Certificate signing request was sent to apiserver and a response was received.
* The Kubelet was informed of the new secure connection details.

Run 'kubectl get nodes' on the control-plane to see this node join the cluster.
```

在master查看
```bash
[root@local1 ~]# kubectl get nodes
NAME     STATUS     ROLES    AGE     VERSION
local1   Ready      master   4m58s   v1.18.3
local2   Ready      <none>   3m36s   v1.18.3
```

在node节点查看 

``` bash
[root@local3 ~]# kubectl get nodes
Unable to connect to the server: x509: certificate signed by unknown authority (possibly because of "crypto/rsa: verification error" while trying to verify candidate authority certificate "kubernetes")

# 如果报错，需要将master的admin.conf拷贝过来
# master执行
scp /etc/kubernetes/admin.conf root@local3:/etc/kubernetes/

# 然后在node执行下面三步
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

再次在node查看
[root@local3 ~]# kubectl get nodes
NAME     STATUS   ROLES    AGE     VERSION
local1   Ready    master   6m36s   v1.18.0
local2   Ready    <none>   31s     v1.18.0
local3   Ready    <none>   5m43s   v1.18.0

```

#### 11、如果节点出错，可以移除节点
``` bash
#重置节点
kubeadm reset

[root@lkn66 ~]# kubectl get nodes
NAME    STATUS   ROLES                  AGE   VERSION
lkn65   Ready    <none>                 11h   v1.20.0
lkn66   Ready    control-plane,master   12h   v1.20.0

#删除节点，删除后 数据就从etcd中清除了(可运行kubectl的任一节点中执行)
kubectl delete node lkn65
```
#### 12、如果加入节点时，token过期，可以重新生成
``` bash
1、查看token
[root@lkn66 ~]# kubeadm token list
TOKEN                     TTL         EXPIRES                     USAGES                   DESCRIPTION                                                EXTRA GROUPS
3d33ro.m3jy3f3yq1o05q0y   11h         2023-11-25T01:26:15+08:00   authentication,signing   The default bootstrap token generated by 'kubeadm init'.   system:bootstrappers:kubeadm:default-node-token

2、默认生成的token有效期是一天，生成永不过期的token
[root@lkn66 ~]# kubeadm token create --ttl 0
05402u.jb7a47xpzewhcrrt

3、创建token
[root@lkn66 ~]# openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'
#token
7288dab1719003c8be4dbfd2f916e7bc6e1703e7ac650701683a71535a7eb43c
 
4、在worker节点执行join

kubeadm join 192.168.3.66:6443 --token 05402u.jb7a47xpzewhcrrt --discovery-token-ca-cert-hash sha256:7288dab1719003c8be4dbfd2f916e7bc6e1703e7ac650701683a71535a7eb43c
```


#### 13 查看 安装状态
```bash
kubectl get pods --all-namespaces
``` 

#### 14 卸载flannel网络步骤：
[参考](https://dandelioncloud.cn/article/details/1576406630231404545)
``` bash
#第一步，在master节点删除flannel
kubectl delete -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
#第二步，在node节点清理flannel网络留下的文件
ifconfig cni0 down
ip link delete cni0
ifconfig flannel.1 down
ip link delete flannel.1
rm -rf /var/lib/cni/
rm -f /etc/cni/net.d/*
注：执行完上面的操作，重启kubelet
```

#### 15 卸载 k8s 
[参考](https://blog.csdn.net/qq_14910065/article/details/133824738)
1、首先清理运行到k8s群集中的pod，使用
``` bash
kubectl delete node --all
```
2、使用脚本停止所有k8s服务
``` bash
for service in kube-apiserver kube-controller-manager kubectl kubelet etcd kube-proxy kube-scheduler; 
do
    systemctl stop $service
done

```
3、使用命令卸载k8s
``` bash
kubeadm reset -f  #卸载所有节点的K8S


#谨慎操作
docker rm $(docker ps -a | awk '{ print $1}' | tail -n +2)    #docker中 删除所有的容器命令
docker rmi $(docker images | awk '{print $3}' |tail -n +2) # docker中 删除所有的镜像

```
4、卸载k8s相关程序
``` bash
yum -y remove kube*
```
5、删除相关的配置文件
``` bash
modprobe -r ipip
lsmod

```
6、然后手动删除配置文件和flannel网络配置和flannel网口：
``` bash
rm -rf /etc/cni
rm -rf /root/.kube
```
7.删除cni网络
``` bash
ifconfig cni0 down
ip link delete cni0
ifconfig flannel.1 down
ip link delete flannel.1
```
8、删除残留的配置文件
``` bash
rm -rf ~/.kube/
rm -rf /etc/kubernetes/
rm -rf /etc/systemd/system/kubelet.service.d
rm -rf /etc/systemd/system/kubelet.service
rm -rf /etc/systemd/system/multi-user.target.wants/kubelet.service
rm -rf /var/lib/kubelet
rm -rf /usr/libexec/kubernetes/kubelet-plugins
rm -rf /usr/bin/kube*
rm -rf /opt/cni
rm -rf /var/lib/etcd
rm -rf /var/etcd

```
9、 更新镜像
``` bash
yum clean all
yum makecache
```

## k8s 运行
## 基础命令  
``` yml
获取节点

kubectl get node

获取相信节点

kubectl get node -o wide

运行nginx pod(这个时候只是容器在pod内部使用，还不能给外界进行访问)

kubectl run nginx --image=nginx --port=80

查看nginx pod信息(显示demo是否成功或者失败信息)

kubectl describe pod nginx-pod

暴露nginx pod(暴露给外界进行访问)

kubectl expose pod nginx-pod --port=80 --target-port=80 --type=NodePort

查看暴露nginx副本deployment service

 kubectl get service -o wide
```

## 副本命令(伸缩命令)
``` yml
创建副本集deployment

kubectl create 命令

创建nginx副本deployment

kubectl create deployment nginx-deployment --image=nginx

查看nginx副本deployment

kubectl create deployment -o wide

暴露nginx副本deployment

kubectl expose deployment nginx-deployment --port=80 --target-port=8000 --type=NodePort

查看暴露nginx副本deployment service

 kubectl get service -o wide

动态扩容nginx副本deployment



```
### yaml文件命令 
#### nginx副本集部署 deployment  
``` yml
apiVersion: apps/v1 #k8s版本号
kind: Deployment #部署类型（资源类型）
metadata: #元数据(用于定义资源信息)
  name: nginx-deployment-tony5 #资源名称
  labels: #资源标签(版本号)
    app: nginx 
spec: #资源相关信息规范
  replicas: 3 #副本数
  selector: #选择哪一个版本
    matchLabels:
      app: nginx
  template: #模板
    metadata: #资源的元数据/属性
      labels: #设置资源的标签
        app: nginx
    spec: #资源规范字段(规范容器配置)
      containers: #指定容器
      - name: nginx #容器名称
        image: nginx #容器使用的镜像
        ports: #端口号
        - containerPort: 80 #容器对应的端口号
```
#### nginx暴露 service 
``` yml
apiVersion: v1 # 指定api版本，此值必须在kubectl api-versions中
kind: Service # 指定创建资源的角色/类型
metadata: # 资源的元数据/属性
  name: service-tony # 资源的名字，在同一个namespace中必须唯一
  namespace: default # 部署在哪个namespace中
  labels: # 设定资源的标签
    app: demo
spec: # 资源规范字段
  type: NodePort # ClusterIP 类型
  ports:
    - port: 8080 # service 端口
      targetPort: 80 # 容器暴露的端口
      protocol: TCP # 协议
      name: http # 端口名称
  selector: # 选择器(选择什么资源进行发布给外界进行访问：pod deployment 等等资源)
    app: nginx
```
#### nginx运行Service configmap

``` yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-configmap
spec:
  containers:
  - name: nginx-configmap
    image: nginx
    volumeMounts:
    - name: config-volume4
      mountPath: "/tmp/config4"
  volumes:
  - name: config-volume4
    configMap:
      name: my-config
```


## docker 删除
``` bash
 yum remove docker \
                    docker-client \
                    docker-client-latest \
                    docker-common \
                    docker-latest \
                    docker-latest-logrotate \
                    docker-logrotate \
                    docker-selinux \
                    docker-engine-selinux \
                   docker-engine
                   
 rm -rf /etc/systemd/system/docker.service.d 
 rm -rf /var/lib/docker
 
 rm -rf /var/run/docker
```

## kubernetes 报scheduler Unhealthy的错误解决

[参考解决](https://blog.csdn.net/xgysimida/article/details/122129087)
``` bash
kubectl  get cs

``` 

## 安装 nginx 
``` bash

yum install epel-release -y

yum install nginx -y
```