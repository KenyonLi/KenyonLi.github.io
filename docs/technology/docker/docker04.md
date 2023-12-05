---
title: '微服务部署-k8s(二)-应用'
date: '2023-12-05' 
tags:
- '微服务部署-k8s(二)-应用'
- 'abp'
- 'dotnet'
- 'docker'
categories:
- '技术'
---

## 目录
[[toc]]
## 微服务部署-k8s(二)-应用

## k8s运行Nginx镜像  
条件   
1、nginx.yml
步骤  
1、先创建nginx.yml文件  
2、然后在nginx.yml文件中添加内容。
```yml
apiVersion: v1  ## 版本，能够有多少关键字，有多少参数
kind: Pod  # 资源类型。 Pod Service deployment  
metadata:  # 元数据 当前资源基本信息
  name: nginx-pd # 名称：表示唯一 
  labels: # 标签 版本 
    app: nginx
spec: # 特殊 k8s 具体要操作什么  
  containers:  #
  - image: lknnginx  #具体镜像
    name: nginx-container # 容器名称  
    imagePullPolicy: IfNotPresent # 先走本地，然后远程拉取镜像
    ports:
      - containerPort: 80 #端口号
```

3、然后运行nginx.yml
3.1、输入命令：kubectl apply -f nginx.yml 
``` bash
[root@lkn66 pod]# kubectl  create -f nginx.yml 
pod/nginx-pd created
```
3.2、输入命令：kubectl get pod  
``` bash
[root@lkn66 pod]# kubectl  get pod
NAME       READY   STATUS             RESTARTS   AGE
nginx-pd   0/1     ImagePullBackOff   0          92s
```
## k8s暴露 Nginx Pod  
条件  
1、service.yml   
步骤   
1、先创建nginx.yml文件 
2、然后在nginx.yml文件中添加内容  
如下所示：
``` yml
apiVersion: v1
kind: Service
metadata:
 name: ngnix-service
spec:
 selector: # 选择器，选择什么pod去运行  
  app: nginx   
 ports:
  - port: 80 # service 端口号
    targetPort: 80 # 容器端口号
 type: NodePort  # 暴露给外网访问
```

3、然后运行nginx.yml  
3.1 输入命令：kubectl apply -f nginx.yml   
``` bash
[root@lkn66 service]# kubectl  create -f nginx.yml 
Error from server (AlreadyExists): error when creating "nginx.yml": services "ngnix-service" already exists
[root@lkn66 service]# kubectl  get servic
error: the server doesn't have a resource type "servic"

```
3.2 输入命令： kubectl get service 
``` bash
[root@lkn66 service]# kubectl  get service
NAME            TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)        AGE
kubernetes      ClusterIP   10.1.0.1      <none>        443/TCP        11d
ngnix-service   NodePort    10.1.19.175   <none>        80:31572/TCP   53m
# 删除 
kubectl delete service ngnix-service 
 
```

## k8s运行商品微服务镜像 
条件

1、productservice.yml

步骤

1、先创建productservice.yml文件  
2、然后在productservice.yml文件中添加内容，如下所示
``` yml
apiVersion: v1
kind: Pod
metadata:
  name: productservice-pd
  labels:
    app: productservice
spec:
  containers:
  - image: ydtproductservice
    name: productservice-container
    imagePullPolicy: IfNotPresent
    ports:
     - containerPort: 80

```

## k8s暴露productservice Pod

条件

1、productservice.yml

步骤

1、先创建productservice.yml文件

2、然后在productservice.yml文件中添加内容，

如下所示：
```yml
apiVersion: v1
kind: Service
metadata:
 name: productservice-service
spec:
 selector:
  app: productservice
 ports:
  - port: 80
    targetPort: 80
 type: NodePort
```

3、然后运行nginx.yml

​ 1、输入命令：kubectl create -f productservice.yml

​``` bash
[root@lkn66 service]# vim productservice.yml
[root@lkn66 service]# kubectl  create -f productservice.yml 
service/productservice-service created
```


2、输入命令：kubectl get service
```bash
[root@lkn66 service]# kubectl  get service
NAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
kubernetes               ClusterIP   10.1.0.1       <none>        443/TCP        11d
ngnix-service            NodePort    10.1.160.251   <none>        80:30009/TCP   18m
productservice-service   NodePort    10.1.183.40    <none>        80:30731/TCP   13s
[root@lkn66 service]# 
```

## k8s运行Nginx 镜像复制集   
条件   

1、nginx.yml   

步骤   

1、先创建nginx.yml文件   

2、然后在nginx.yml文件中添加内容
如下所示
``` yml
apiVersion: apps/v1
kind: Deployment
metadata:
 name: nginx-deployment
spec:
 replicas: 3
 selector:
    matchLabels:
      app: nginx-yml
 template:
  metadata:
   labels:
    app: nginx-yml
  spec:
   containers:
    - name: nginx
      image: nginx
      ports:
       - containerPort: 80
```

3、然后运行nginx.yml
3.1 输入命令： kubectl apply -f nginx.yml
3.2 输入命令： kubectl get deployment 

## k8s暴露 Nginx deployment 
条件  
1、service.yml  
步骤  
1、先创建nginx.yml文件  
2、然后在nginx.yml文件中添加内容，如下所示：
``` yml
kind: Service
metadata:
  name: nginx-service
  namespace: default
spec:
  type: NodePort
  clusterIP: 10.1.47.97
  ports:
    - port: 80
      targetPort: 80
      protocol: TCP
      nodePort: 31323
      name: tcp
  selector:
    app: nginx-yml
```

3、然后运行nginx.yml 
3.1 输入命令：kubectl apply -f nginx.yml  
3.2 输入命令： kube