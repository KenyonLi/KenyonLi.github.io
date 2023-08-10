---
title: 'linux 搭建 vpn'
date: 2023-06-25
tags:
- 'ubunto'
- 'linux'
- 'vpn'
categories:
- '技术'
---

## 目录
[[toc]]

## Ubuntu 20.4 搭建 vpn 服务器

### 1、下载Shadowsocks-all.sh 脚本工具
``` bash
 wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh 
```

### 2、赋予shadowsocks-all.sh 执行权限
```
 chmod +x shadowsocks-all.sh
```
### 3、执行脚本工具进行安装选择界面
```
./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.l
```
### 4、 Shell
::: tip 按照提示进行选择，和选中安装方式
选择安装 Shadowsocks-Python ShadowsocksR Shadowsocks-Go Shadowsocks-libev 通常选择Shadowsocks-Python 或者ShadowsocksR
设置密码
设置端口按照给定的范围进行设置端口号
设置加密方式aes-256-gcm
设置协议
设置混淆
然后就能安装完毕了。
除了端口号和密码外，其他的都是按照给定的值进行选择就可以了
安装完毕后如何启动？
:::

[参考配置](https://blog.lyz810.com/article/2017/04/install-shadowsocks-libev-on-centos/)

```
{"server":"0.0.0.0",
"local_port":9901,
"port_password": {
"10000": "yrbvpn001",
"10010": "yrbvpn002",
"10020": "yrbvpn003",
"10030": "yrbvpn004",
"10040": "yrbvpn005"
},
"timeout":60,
"method":"aes-256-gcm",
"reuse_port":true
}
```
## 卸载
sudo ./shadowsocks-all.sh uninstall 


### 如何启动SSR脚本
### 启动脚本后面的参数含义，从左至右依次为：启动，停止，重启，查看状态。
```
Shadowsocks-Python 版：
/etc/init.d/shadowsocks-python start | stop | restart | status
ShadowsocksR 版：
/etc/init.d/shadowsocks-r start | stop | restart | status
Shadowsocks-Go 版：
/etc/init.d/shadowsocks-go start | stop | restart | status
Shadowsocks-libev 版：
/etc/init.d/shadowsocks-libev start | stop | restart | status
```
### 各版本的默认配置文件
```
Shadowsocks-Python 版：
/etc/shadowsocks-python/config.json
ShadowsocksR 版：
/etc/shadowsocks-r/config.json
Shadowsocks-Go 版：
/etc/shadowsocks-go/config.json
Shadowsocks-libev 版：
/etc/shadowsocks-libev/config.json
```
[原文地址](https://niuchao.com/blog/c9c2784c70f3dcf2ec8233daa4c3ed77.html)
## ubuntu ufw 开放端口
1.安装
```
sudo apt-get install ufw
```
2.启动
```
sudo ufw enable
```
3.开放端口
```
sudo ufw allow 9901
```
4.查看状态
```
sudo ufw status
```
5.删除端口
```
sudo ufw delete allow 8080
```
6.重载
```
sudo ufw reload
```
7.禁用
```
sudo ufw disable
```