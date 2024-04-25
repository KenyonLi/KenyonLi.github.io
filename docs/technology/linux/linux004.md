---
title: ' linux 运行 systemctl 配置服务自启动 '
date: "2024-4-12"
tags:
- 'centos8.2'
- 'linux'
- 'systemctl'
categories:
- '技术'
---

## 目录
[[toc]]

##  linux 运行 systemctl 配置服务自启动 
### CentOS 8.2 环境配置
####  手动部署LNMP环境（Alibaba Cloud Linux 3/2、CentOS 7/8）
 `https://help.aliyun.com/zh/ecs/use-cases/manually-build-an-lnmp-environment-on-a-centos-instance#c1da26332bjf3`
#### CentOS 8 EOL如何切换源
`https://help.aliyun.com/zh/ecs/user-guide/change-centos-8-repository-addresses?spm=a2c4g.11186623.0.i11#task-2182261`

### 常用指令
``` bash
chmod 777 xxx.service                     #添加可执行权限
sudo systemctl start xxx.service     #运行xxx.service守护进程
sudo systemctl stop xxx.service      #停止xxx.service守护进程
sudo systemctl restart xxx.service   #重启xxx.service守护进程
sudo systemctl enable xxx.service    #设置xxx.service开机自启动
sudo systemctl disable xxx.service   #取消开机自启
sudo systemctl status xxx.service    #查看xxx.service的运行状态
sudo systemctl is-active xxx.service         #仅显示是否Active
sudo systemctl list-units --type=service      #显示全部已经启动的服务
```
### .net8 程序应用

在的目录 `/usr/lib/systemd/system` 或者 `/etc/systemd/system` 创建文件 xxxx.service
 
 参考 [原文链接：]("https://blog.csdn.net/shangxiaqiusuo1/article/details/124437676")

### 配置说明
``` bash
[Unit]     				
Description=demo	                  #当前配置文件的描述信息
After=network.target nginx.service    #表示当前服务是在那个服务后面启动，一般定义为网络服务启动后启动
 
[Service]
WorkingDirectory=/home/test                #工作目录				
Type=forking			                   #定义启动类型 
ExecStart=/home/test/demo-start.sh 	       #定义启动进程时执行的命令。
ExecReload=/home/test/demo-restart.sh      #重启服务时执行的命令
ExecStop=/home/test/demo-stop.sh		   #定义关闭进程时执行的命令。
PrivateTmp=true							   #是否分配独立空间
Restart=always
RestartSec=5
StartLimitInterval=0
StartLimitBurst=5
 
[Install]
WantedBy=multi-user.target    #表示多用户命令行状态
```
``` bash
Type字段：定义启动类型。它可以设置的值如下：
         - simple（默认值）：ExecStart字段启动的进程为主进程
         - forking：后台执行，ExecStart字段将以fork()方式启动，此时父进程将会退出，子进程将成                           为主进程
         - oneshot：类似于simple，但只执行一次，Systemd 会等它执行完，才启动其他服务
         - dbus：类似于simple，但会等待 D-Bus 信号后启动
         - notify：类似于simple，启动结束后会发出通知信号，然后 Systemd 再启动其他服务
         - idle：类似于simple，但是要等到其他任务都执行完，才会启动该服务。一种使用场合是为                      让该服务的输出，不与其他服务的输出相混
```

#### .net8 程序应用
``` bash
[Unit]
#服务描述
Description=ApsNet Core 8  Pgy EntWebSite
[Service]
User=root
Group=root
WorkingDirectory=/root/web_site/publish
ExecStart=/root/.dotnet/dotnet  /root/web_site/publish/Ent.WebSite.dll --urls=http://localhost:5000
Restart=always
RestartSec=10
[Install]
#多用户
WantedBy=multi-user.target
```

#### 二进制编译 nginx 配置 开机重启配置服务

``` bash
[Unit]
Description=nginx service
After=network.target
[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
PrivateTmp=true
[Install]
WantedBy=multi-user.target
``` 

