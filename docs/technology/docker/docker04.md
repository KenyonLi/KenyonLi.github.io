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
  clusterIP: 10.1.9.87
 ports:
  - port: 80
    targetPort: 80
    nodePort: 30009
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
3.2 输入命令： kubectl get service

``` bash

```

## k8s运行商品微服务镜像

条件  

1、productservice.yml   

步骤   

1、先创建productservice.yml文件   

2、然后在productservice.yml文件中添加内容，

如下所示：
``` yml
apiVersion: v1
kind: Pod
metadata:
  name: productservice-pd
  labels:
    app: productservice
spec:
  containers:
  - image: lknproductservice
    name: productservice-container
    imagePullPolicy: IfNotPresent
    ports:
     - containerPort: 80
```

## 商品微服务、Nginx之间通信
条件
1、数据挂载
2、命令空间
Nginx Pod挂载nginx.conf  
条件  
1、nginx.conf
2、nginx.yml
步骤  
 1、先创建nginx.conf  
 2、然后在nginx.conf添加内容  
 如下所示：
 ``` yml
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

 3、然后修改nginx.yml文件  
 内容如下：
 ``` yml
 apiVersion: v1
kind: Pod
metadata:
  name: nginx-pd
  labels:
    app: nginx
  namespace: default
spec:
  containers:
  - image: ydtnginx
    name: nginx-container
    imagePullPolicy: IfNotPresent
    ports:
     - containerPort: 80
    volumeMounts:
     - mountPath: /usr/local/nginx/conf/
       name: nginx-conf
  volumes:
   - name: nginx-conf
     configMap:
       name: nginxfig
       items:
        - key: nginxconfig
          path: config/nginx.conf
 ```

  参数解析：


  关于type的值的一点说明：
DirectoryOrCreate 目录存在就使用，不存在就先创建后使用
Directory 目录必须存在
FileOrCreate 文件存在就使用，不存在就先创建后使用
File 文件必须存在
Socket unix套接字必须存在
CharDevice 字符设备必须存在
BlockDevice 块设备必须存在
``` yml
# 注意，该配置 node 上必须有这个文件，主节创建才会成功
name: nginx-conf
hostPath:
path: /root/k8s/config/nginx.conf
type: File
```

4、然后运行nginx.yml

​ 1、输入命令：kubectl apply -f nginx.yml
 
2、输入命令：kubectl get pod
 
### 修改service nginx.yml文件
``` yml
apiVersion: v1
kind: Service
metadata:
 name: ngnix-service
 namespace: default
spec:
 selector:
  app: nginx
 ports:
  - port: 80
    targetPort: 80
 type: NodePort
```
### 修改service productservice.yml文件

``` yml
apiVersion: v1
kind: Service
metadata:
 name: productservice-service
 namespace: default
spec:
 selector:
  app: productservice
 ports:
  - port: 80
    targetPort: 80
 type: NodePort
```


## 附件 

### pod所有配置
``` yml
# yaml格式的pod定义文件完整内容：
apiVersion: v1       #必选，版本号，例如v1
kind: Pod       #必选，Pod
metadata:       #必选，元数据
  name: string       #必选，Pod名称
  namespace: string    #必选，Pod所属的命名空间
  labels:      #自定义标签
    - name: string     #自定义标签名字
  annotations:       #自定义注释列表
    - name: string
spec:         #必选，Pod中容器的详细定义
  containers:      #必选，Pod中容器列表
  - name: string     #必选，容器名称
    image: string    #必选，容器的镜像名称
    imagePullPolicy: [Always | Never | IfNotPresent] #获取镜像的策略 Alawys表示下载镜像 IfnotPresent表示优先使用本地镜像，否则下载镜像，Nerver表示使用本地镜像
    command: [string]    #容器的启动命令列表，如不指定，使用打包时使用的启动命令
    args: [string]     #容器的启动命令参数列表
    workingDir: string     #容器的工作目录
    volumeMounts:    #挂载到容器内部的存储卷配置
    - name: string     #引用pod定义的共享存储卷的名称，需用volumes[]部分定义的的卷名
      mountPath: string    #存储卷在容器内mount的绝对路径，应少于512字符
      readOnly: boolean    #是否为只读模式
    ports:       #需要暴露的端口库号列表
    - name: string     #端口号名称
      containerPort: int   #容器需要监听的端口号
      hostPort: int    #容器所在主机需要监听的端口号，默认与Container相同
      protocol: string     #端口协议，支持TCP和UDP，默认TCP
    env:       #容器运行前需设置的环境变量列表
    - name: string     #环境变量名称
      value: string    #环境变量的值
    resources:       #资源限制和请求的设置
      limits:      #资源限制的设置
        cpu: string    #Cpu的限制，单位为core数，将用于docker run --cpu-shares参数
        memory: string     #内存限制，单位可以为Mib/Gib，将用于docker run --memory参数
      requests:      #资源请求的设置
        cpu: string    #Cpu请求，容器启动的初始可用数量
        memory: string     #内存清楚，容器启动的初始可用数量
    livenessProbe:     #对Pod内个容器健康检查的设置，当探测无响应几次后将自动重启该容器，检查方法有exec、httpGet和tcpSocket，对一个容器只需设置其中一种方法即可
      exec:      #对Pod容器内检查方式设置为exec方式
        command: [string]  #exec方式需要制定的命令或脚本
      httpGet:       #对Pod内个容器健康检查方法设置为HttpGet，需要制定Path、port
        path: string
        port: number
        host: string
        scheme: string
        HttpHeaders:
        - name: string
          value: string
      tcpSocket:     #对Pod内个容器健康检查方式设置为tcpSocket方式
         port: number
       initialDelaySeconds: 0  #容器启动完成后首次探测的时间，单位为秒
       timeoutSeconds: 0   #对容器健康检查探测等待响应的超时时间，单位秒，默认1秒
       periodSeconds: 0    #对容器监控检查的定期探测时间设置，单位秒，默认10秒一次
       successThreshold: 0
       failureThreshold: 0
       securityContext:
         privileged:false
    restartPolicy: [Always | Never | OnFailure]#Pod的重启策略，Always表示一旦不管以何种方式终止运行，kubelet都将重启，OnFailure表示只有Pod以非0退出码退出才重启，Nerver表示不再重启该Pod
    nodeSelector: obeject  #设置NodeSelector表示将该Pod调度到包含这个label的node上，以key：value的格式指定
    imagePullSecrets:    #Pull镜像时使用的secret名称，以key：secretkey格式指定
    - name: string
    hostNetwork:false      #是否使用主机网络模式，默认为false，如果设置为true，表示使用宿主机网络
    volumes:       #在该pod上定义共享存储卷列表
    - name: string     #共享存储卷名称 （volumes类型有很多种）
      emptyDir: {}     #类型为emtyDir的存储卷，与Pod同生命周期的一个临时目录。为空值
      hostPath: string     #类型为hostPath的存储卷，表示挂载Pod所在宿主机的目录
        path: string     #Pod所在宿主机的目录，将被用于同期中mount的目录
      secret:      #类型为secret的存储卷，挂载集群与定义的secre对象到容器内部
        scretname: string  
        items:     
        - key: string
          path: string
      configMap:     #类型为configMap的存储卷，挂载预定义的configMap对象到容器内部
        name: string
        items:
        - key: string #文件名
          path: /root/k8s/config/nginx.conf #文件路径
```

## service所有配置
``` yml
apiVersion: v1
kind: Service
metadata:
#元数据
  name: string
  #Service名称
  namespace: string
  #命名空间，不指定时默认为default命名空间
  labels:
  #自定义标签属性列表     
    - name: string
  annotations:
  #自定义注解属性列表    
    - name: string
spec:
#详细描述    
  selector: []
  #Label Selector配置，选择具有指定label标签的pod作为管理范围
  type: string
  #service的类型，指定service的访问方式，默认ClusterIP
  #ClusterIP：虚拟的服务ip地址，用于k8s集群内部的pod访问，在Node上kube-porxy通过设置的iptables规则进行转发
  #NodePort：使用宿主机端口，能够访问各Node的外部客户端通过Node的IP和端口就能访问服务器
  #LoadBalancer：使用外部负载均衡器完成到服务器的负载分发，
  #需要在spec.status.loadBalancer字段指定外部负载均衡服务器的IP，并同时定义nodePort和clusterIP用于公有云环境。
  clusterIP: string
  #虚拟服务IP地址，当type=ClusterIP时，如不指定，则系统会自动进行分配，也可以手动指定。当type=loadBalancer，需要指定
  sessionAffinity: string
  #是否支持session，可选值为ClietIP，默认值为空
  #ClientIP表示将同一个客户端(根据客户端IP地址决定)的访问请求都转发到同一个后端Pod
  ports:
  #service需要暴露的端口列表    
  - name: string
    #端口名称
    protocol: string
    #端口协议，支持TCP或UDP，默认TCP
     port: int
    #服务监听的端口号
     targetPort: int
    #需要转发到后端的端口号
     nodePort: int
    #当type=NodePort时，指定映射到物理机的端口号
  status:
  #当type=LoadBalancer时，设置外部负载均衡的地址，用于公有云环境    
    loadBalancer:
    #外部负载均衡器    
      ingress:
      #外部负载均衡器 
      ip: string
      #外部负载均衡器的IP地址
      hostname: string
     #外部负载均衡器的机主机
```

### deployment所有配置
``` yml
apiVersion: apps/v1   #接口版本
kind: Deployment                 #接口类型
metadata:
  name: cango-demo               #Deployment名称
  namespace: cango-prd           #命名空间
  labels:
    app: cango-demo              #标签
spec:
  replicas: 3
   strategy:
    rollingUpdate:  ##由于replicas为3,则整个升级,pod个数在2-4个之间
      maxSurge: 1      #滚动升级时会先启动1个pod
      maxUnavailable: 1 #滚动升级时允许的最大Unavailable的pod个数
  template:         
    metadata:
      labels:
        app: cango-demo  #模板名称必填
    sepc: #定义容器模板，该模板可以包含多个容器
      containers:                                                                   
        - name: cango-demo                                                           #镜像名称
          image: swr.cn-east-2.myhuaweicloud.com/cango-prd/cango-demo:0.0.1-SNAPSHOT #镜像地址
          command: [ "/bin/sh","-c","cat /etc/config/path/to/special-key" ]    #启动命令
          args:                                                                #启动参数
            - '-storage.local.retention=$(STORAGE_RETENTION)'
            - '-storage.local.memory-chunks=$(STORAGE_MEMORY_CHUNKS)'
            - '-config.file=/etc/prometheus/prometheus.yml'
            - '-alertmanager.url=http://alertmanager:9093/alertmanager'
            - '-web.external-url=$(EXTERNAL_URL)'
    #如果command和args均没有写，那么用Docker默认的配置。
    #如果command写了，但args没有写，那么Docker默认的配置会被忽略而且仅仅执行.yaml文件的command（不带任何参数的）。
    #如果command没写，但args写了，那么Docker默认配置的ENTRYPOINT的命令行会被执行，但是调用的参数是.yaml中的args。
    #如果如果command和args都写了，那么Docker默认的配置被忽略，使用.yaml的配置。
          imagePullPolicy: IfNotPresent  #如果不存在则拉取
          livenessProbe:       #表示container是否处于live状态。如果LivenessProbe失败，LivenessProbe将会通知kubelet对应的container不健康了。随后kubelet将kill掉container，并根据RestarPolicy进行进一步的操作。默认情况下LivenessProbe在第一次检测之前初始化值为Success，如果container没有提供LivenessProbe，则也认为是Success；
            httpGet:
              path: /health #如果没有心跳检测接口就为/
              port: 8080
              scheme: HTTP
            initialDelaySeconds: 60 ##启动后延时多久开始运行检测
            timeoutSeconds: 5
            successThreshold: 1
            failureThreshold: 5
            readinessProbe:
          readinessProbe:
            httpGet:
              path: /health #如果没有心跳检测接口就为/
              port: 8080
              scheme: HTTP
            initialDelaySeconds: 30 ##启动后延时多久开始运行检测
            timeoutSeconds: 5
            successThreshold: 1
            failureThreshold: 5
          resources:              ##CPU内存限制
            requests:
              cpu: 2
              memory: 2048Mi
            limits:
              cpu: 2
              memory: 2048Mi
          env:                    ##通过环境变量的方式，直接传递pod=自定义Linux OS环境变量
            - name: LOCAL_KEY     #本地Key
              value: value
            - name: CONFIG_MAP_KEY  #局策略可使用configMap的配置Key，
              valueFrom:
                configMapKeyRef:
                  name: special-config   #configmap中找到name为special-config
                  key: special.type      #找到name为special-config里data下的key
          ports:
            - name: http
              containerPort: 8080 #对service暴露端口
          volumeMounts:     #挂载volumes中定义的磁盘
          - name: log-cache
            mount: /tmp/log
          - name: sdb       #普通用法，该卷跟随容器销毁，挂载一个目录
            mountPath: /data/media    
          - name: nfs-client-root    #直接挂载硬盘方法，如挂载下面的nfs目录到/mnt/nfs
            mountPath: /mnt/nfs
          - name: example-volume-config  #高级用法第1种，将ConfigMap的log-script,backup-script分别挂载到/etc/config目录下的一个相对路径path/to/...下，如果存在同名文件，直接覆盖。
            mountPath: /etc/config       
          - name: rbd-pvc                #高级用法第2中，挂载PVC(PresistentVolumeClaim)

#使用volume将ConfigMap作为文件或目录直接挂载，其中每一个key-value键值对都会生成一个文件，key为文件名，value为内容，
  volumes:  # 定义磁盘给上面volumeMounts挂载
  - name: log-cache
    emptyDir: {}
  - name: sdb  #挂载宿主机上面的目录
    hostPath:
      path: /any/path/it/will/be/replaced
  - name: example-volume-config  # 供ConfigMap文件内容到指定路径使用
    configMap:
      name: example-volume-config  #ConfigMap中名称
      items:
      - key: log-script           #ConfigMap中的Key
        path: path/to/log-script  #指定目录下的一个相对路径path/to/log-script
      - key: backup-script        #ConfigMap中的Key
        path: path/to/backup-script  #指定目录下的一个相对路径path/to/backup-script
  - name: nfs-client-root         #供挂载NFS存储类型
    nfs:
      server: 10.42.0.55          #NFS服务器地址
      path: /opt/public           #showmount -e 看一下路径
  - name: rbd-pvc                 #挂载PVC磁盘
    persistentVolumeClaim:
      claimName: rbd-pvc1         #挂载已经申请的pvc磁盘
```