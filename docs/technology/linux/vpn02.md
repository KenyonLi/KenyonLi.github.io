---
title: 'Linux实现socks终端代理、全局代理'
date: "2023-12-12"
tags:
- 'centos9'
- 'linux'
- 'AppImage'
categories:
- '技术'
---

## 目录
[[toc]]

## Linux实现socks终端代理、全局代理
[原文参考](https://cloud.tencent.com/developer/article/1852590?ivk_sa=1024320u)


## socks支持的代理协议
socks运行在会话层，能代理TCP、UDP本身及基于它们之上的协议，如http/https over tcp，http3 over udp(quic)，无法代理icmp，因此你通过socks无法ping通谷歌，不要觉得是代理软件或节点的问题，是你的问题

## 客户端安装
socks协议代理很多软件能够实现，本文讲述众所周知的ss/ssr代理，将shadowsocksR项目克隆到本地即可：
``` bash
 cd /usr/share
 git clone https://github.com/RokasUrbelis/shadowsocksr 
 cd ./shadowsocksr
```

初始化环境：`bash initcfg.sh`

客户端路径在`./shadowsocks/local.py`

客户端配置文件：`user-config.json`

## ssr-config.json/user-config.json配置格式

ssr:
``` bash
{
    "server": "blog.linux-code.com",
    "local_address": "127.0.0.1",
    "local_port": 1080,
    "timeout": 300,
    "workers": 1,
    "server_port": 3071,
    "password": "test",
    "method": "rc4-md5",
    "obfs": "http_simple",
    "obfs_param": "download.linux-code.com",
    "protocol": "origin",
    "protocol_param": ""
}
```
ss:
``` bash
{
        "server": "blog.linux-code.com",
        "local_address": "127.0.0.1",
        "local_port": 1080,
        "timeout": 300,
        "workers": 1,
        "server_port": 3071,
        "password": "test",
        "method": "rc4-md5",
        "plugin": ""
}
```

## 写sytemd服务
仅用于支持systemd服务的linux发行版，其他发行版请查阅相关发行版的服务管理软件

``` bash
$ mkdir -p ~/.config/systemd/user   #创建用于存放systemd服务目录
$ vim ~/.config/systemd/user/ssr-client.service
## 写内容
[Unit]
Description=Shadowsocks R Client Service
After=default.target
[Service]
ExecStart=/usr/bin/python /usr/share/shadowsocksr/shadowsocks/local.py -c /usr/share/shadowsocksr/shadowsocks/user-config.json  #以你实际路径为准
Restart=on-abort
[Install]
WantedBy=default.target

```
通过systemd管理服务

``` bash
$ systemctl --user daemon-reload      #reload守护进程，写完systemd后执行一次即可，后续不需要执行
$ systemctl --user status ssr-client  #查看运行状态
$ systemctl --user start ssr-client   #重启ssr客户端
$ systemctl --user restart ssr-client #重启ssr客户端
```
如果没有systemd服务也不想写成服务，你也可以使用懒人一行式：
``` bash
 { nohup /usr/share/shadowsocksr/shadowsocks/local.py -c /usr/share/shadowsocksr/shadowsocks/user-config.json &> /dev/null; } &
alias ssrstart='{ nohup /usr/share/shadowsocksr/shadowsocks/local.py -c /usr/share/shadowsocksr/shadowsocks/user-config.json &> /dev/null; } &' 

```


## 代理测试

服务正常运行后，使用如下命令临时测试下连通性：
``` bash
$ export http_proxy=http://127.0.0.1:1080
$ export http_proxy=https://127.0.0.1:1080   #export只针对你当前终端(pts/tty)有效，莫慌
```

想设置为全局代理，将上面两个命令加入到~/.bashrc即可，其他解释器放到各自的配置文件内，zsh则为~/.zshrc。

接下来访问谷歌看看:
``` bash
$ telnet google.com 80
Trying 93.46.8.90...
Connected to google.com.
Escape character is '^]'.
```

能通，说明已经正常运行，且节点状态正常：

取消当前终端代理，使用`unset http_proxy https_proxy`即可
