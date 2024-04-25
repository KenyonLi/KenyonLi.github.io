---
title: 'yum及yum-config-manager命令详解'
date: 2023-8-22
tags:
- 'centos9'
- 'linux'
- 'yum-config-manager'
categories:
- '技术'
---

## 目录
[[toc]]

## yum及yum-config-manager命令详解

[yum参考](https://blog.csdn.net/duansamve/article/details/128366593)
[yum 仓库管理命令参考](https://blog.csdn.net/weixin_43930641/article/details/119450824)

`yum`命令是在`Fedora`和`RedHat`以及`SUSE`中基于`rpm`的软件包管理器，它可以使系统管理人员交互和自动化地更细与管理`RPM`软件包，能够从指定的服务器自动下载`RPM`包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。

`yum`提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。

### 语法
```bash
yum(选项)(参数)
```
### 选项
```bash
-h：显示帮助信息；
-y：对所有的提问都回答“yes”；
-c：指定配置文件；
-q：安静模式；
-v：详细模式；
-d：设置调试等级（0-10）；
-e：设置错误等级（0-10）；
-R：设置yum处理一个命令的最大等待时间；
-C：完全从缓存中运行，而不去下载或者更新任何头文件。
```
### 参数
```bash
install：安装rpm软件包；
update：更新rpm软件包；
check-update：检查是否有可用的更新rpm软件包；
remove：删除指定的rpm软件包；
list：显示软件包的信息；
search：检查软件包的信息；
info：显示指定的rpm软件包的描述信息和概要信息；
clean：清理yum过期的缓存；
shell：进入yum的shell提示符；
resolvedep：显示rpm软件包的依赖关系；
localinstall：安装本地的rpm软件包；
localupdate：显示本地rpm软件包进行更新；
deplist：显示rpm软件包的所有依赖关系。
```
### 实例
### 安装
``` bash
yum install      #全部安装
yum install package1      #安装指定的安装包package1
yum groupinsall group1      #安装程序组group1
```
### 更新和升级
``` bash
yum update      #全部更新
yum update package1      #更新指定程序包package1
yum check-update      #检查可更新的程序
yum upgrade package1      #升级指定程序包package1
yum groupupdate group1      #升级程序组group1
```
### 查找和显示
``` bash
yum info package1      #显示安装包信息package1
yum list      #显示所有已经安装和可以安装的程序包
yum list package1      #显示指定程序包安装情况package1

yum list installed      #查看已经安装的软件包

yum list installed | grep java      #查看已经安装的软件包，并搜索 java 记录
yum groupinfo group1      #显示程序组group1信息yum search string 根据关键字string查找安装包
```
### 删除程序
``` bash
yum remove package1      #删除程序包package1
yum groupremove group1      #删除程序组group1
yum deplist package1      #查看程序package1依赖情况
```
### 缓存
``` bash
yum makecache
# 把服务器的包信息下载到本地电脑缓存起来，makecache建立一个缓存
# 以后用install时就在缓存中搜索，提高了速度。
# 配合yum -C search xxx使用，不用联网检索就能查找软件信息
```
### 清除缓存
``` bash
yum clean packages      #清除缓存目录下的软件包
yum clean headers      #清除缓存目录下的 headers
yum clean oldheaders      #清除缓存目录下旧的 headers

yum clean all

yum-config-manager命令 – 管理软件仓库
yum-config-manager命令的功能是用于管理软件仓库，可以调整yum的主要配置参数，启动或关闭指定软件源，删除已有软件仓库等工作。
```
### 语法格式：
``` bash
yum-config-manager [参数]
```
### 常用参数：
``` yml
-e<错误级别>	错误输出级别
-d<调试级别>	调试输出级别
-c<配置文件>	指定配置文件的位置
-t	错误宽容
--enable	启用软件仓库
--disable	禁用软件仓库
--add-repo=<软件仓库>	从指定文件或URL添加（和启用）软件仓库
```
### 显示指定软件仓库的配置信息：
``` bash
yum-config-manager ItemName
```
 ### 添加指定的软件仓库来源：
``` bash
yum-config-manager --add-repo <file|url>
```
### 显示当前已启用的软件仓库信息：
``` bash
yum-config-manager --enable ItemName
```



