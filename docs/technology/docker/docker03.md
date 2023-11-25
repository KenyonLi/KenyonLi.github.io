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
vim /etc/hosts
192.168.3.63       lkn01
192.168.3.64       lkn02
```
免密
``` bash
ssh-keygen
cat .ssh/id_rsa.pub >> .ssh/authorized_keys
chmod 600 .ssh/authorized_keys

# 可以在master生成，然后拷贝到node节点(免密登录，主机之间互相传文件)
scp -r .ssh root@192.168.44.4:/root
```

#### 5.将桥接的IPV4流量传递到iptables的链
``` bash
vi /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
# 重新加载
sysctl --system
```

#### 6.安装Docker及同步时间
``` bash
wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O/etc/yum.repos.d/docker-ce.repo

sudo yum install docker-ce-20.10.15 docker-ce-cli-20.10.15 containerd.io
# yum -y install docker-ce

systemctl start docker
systemctl enable docker

# centos 7 同步时间（这一步必须做，否则后面安装flannel可能会有证书错误）
yum install ntpdate -y
ntpdate cn.pool.ntp.org
```

6.1 centos9 同步时间工具安装[参考文档](https://wiki.crowncloud.net/?How_to_Sync_Time_in_CentOS_Stream_9_using_Chrony)
``` bash
#要安装Chrony，请使用以下命令：
yum install chrony -y
#使用以下命令启动chronyd服务并将chronyd设置为在重新引导时自动启动，
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
# 启动kubelet服务
systemctl enable kubelet && systemctl start kubelet
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
 // 1、在线安装
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
下载文件在本地安装
kubectl apply -f kube-flannel.yml
// 1、离线安装
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



