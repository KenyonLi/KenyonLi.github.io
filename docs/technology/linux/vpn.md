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

## Ubuntu 20.04 LTS x64 / Debian 10 x64 (buster) 搭建 vpn 服务器
准备工作：  
1、需要购买服务器，国外服务器 选择 Vultr 供应商品，也可选择其他的   
2、需要 Shadowsocks 技术 / Outline Manager 工具     


## 开源工具 shadowsocks-windows 
[shadowsocks-windows 源码 ](https://github.com/shadowsocks/shadowsocks-windows)
[hadowsocks-4.4.1.0.zip 下载](https://github.com/shadowsocks/shadowsocks-windows/releases/download/4.4.1.0/Shadowsocks-4.4.1.0.zip)


## Vultr 国外服务器供应商,国内是可以访问的，不过输入的验证有恶心。
[官网地址](https://my.vultr.com/)

## vultr 验证输入，只需被恶心一次的，后续登录就不需要再次输入验证码
>该方法有点烧钱   
>自己购买一台内国服务器搭建了一个vpn , 采用 shadowsocks 技术，并且 shadowsocks-windows 工具  
>1、设置vpn 地址密码   

![Alt text](/images/linux/vpn_0001image.png)  

>2、启动 vpn ,第一次默认是没有启用的    

![Alt text](/images/linux/vpn_0002image.jpg)
>3、指定 vpn ip 地址

![Alt text](/images/linux/vpn_0003image.png)

> 4、现在可以去登录了
>> 4.1 有验证码  
![Alt text](/images/linux/vpn_0004image.png)  
>> 4.2 无验证码
![Alt text](/images/linux/vpn_0005image.png)  

## vultr 购买服务器,vpn 服务器配置一般就可以够用了  
> $5.0美元/每个月，是按小时计费的比较灵活，每小时是$0.007美元。  
> 需要自己注册账号，支持支付宝付款，很方便。

>1 服务器选择类型   

![Alt text](/images/linux/vpn_0006image.png)

>2 选择区域  
![Alt text](/images/linux/vpn_0007image.png)

>3  选择操作系统，这里选择ubuntu 20.4 STL  版本（过高vpn部署会有问题），该版本经验多次测试可用。  

![Alt text](/images/linux/vpn_0008image.png)

>4  选择服务器基础配置，只用于vpn 就选择这个 $5美元/每个月，就行了。    

![Alt text](/images/linux/vpn_0009image.png)

>5 取消备份，状态 红色`off`，表示操作成功  

![Alt text](/images/linux/vpn_0010image.png)


>6 如有配置防火墙选择，没有就不选择，服务器名称可写也可以不写，确定好`$5/month`,后再点击`Deploy Now` 部署。  

![Alt text](/images/linux/vpn_0011image.png)

>7、 购买服务器操作效果图
![Alt text](/images/linux/vpn_0012image.png)

>8、在产品列表中，选择实例，找到ip  

![Alt text](/images/linux/vpn_0013image.png)

>9、使用IP可用性能工具，检查是否可以国内可以用：
>>9.1 如果不可用,就要重新购买，这里需要注意的是，这之前已经购买的好的服务器，先不要`删除`,避免系统还会重新分配相同的IP给你，就会多花$0.01美元了。  

![Alt text](/images/linux/vpn_0014image.png)

>>9.2 如果可用，我们就可以通过shell 来部署vpn了  

![Alt text](/images/linux/vpn_0015image.png)

>>9.3 如果不想安装 shell 终端，就用浏览器上提供终端来部署就可以了。  

![Alt text](/images/linux/vpn_0016image.png)  

>>9.4 浏览器提供的终端执行 linux 命令时，使用剪贴板，要方便些，如 登录，输入 root ,记得回车一下，再点击 `Pase` 即可。其他命令也样操作。

![Alt text](/images/linux/vpn_0017image.png)    


## 检查服务器是否可用
[IP可用性检测工具](https://www.toolsdaquan.com/ipcheck/)

## Shell 终端远程ubuntu 20.0服务器
### 1、下载Shadowsocks-all.sh 脚本工具
 [下载 Shadowsocks-all.sh](/file/vpn/shadowsocks-all.sh) ，另存，然后自己上传到服务。   
 或者执行脚本下载  
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
>3.1 选择 `1` 按回车  

![Alt text](/images/linux/vpn_0018image.png)   

>3.2 输入密码按回车 

![Alt text](/images/linux/vpn_0019image.png)   

>3.3 输入端口号按回车

![Alt text](/images/linux/vpn_0020image.png)  

>3.4  输入 `1` 按回车  

![Alt text](/images/linux/vpn_0021image.png)    

>3.5 安装成功

![Alt text](/images/linux/vpn_0022image.png)  

## Shadowsocks-libev  配置多个账号使用 
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
找到配置文件配置
```bash
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

## 如何启动SSR脚本
## 启动脚本后面的参数含义，从左至右依次为：启动，停止，重启，查看状态。
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

## 安装 Outline VPN 工具，只需在服务执行脚本就可以了，很方便
> 1、下载管理端 [Manager](https://getoutline.org/zh-CN/get-started/#step-1)   

> 2、下载客户端  
::: tip 客户端下载
使用此服务器以安全地访问开放互联网：

1) 为您的设备下载并安装 Outline 应用：

- iOS：https://itunes.apple.com/app/outline-app/id1356177741
- MacOS：https://itunes.apple.com/app/outline-app/id1356178125
- Windows：https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe
- Linux：https://s3.amazonaws.com/outline-releases/client/linux/stable/Outline-Client.AppImage
- Android：https://play.google.com/store/apps/details?id=org.outline.android.client
- Android 替代链接：https://s3.amazonaws.com/outline-releases/client/android/stable/Outline-Client.apk

2) 您会收到一个以 ss:// 开头的访问密钥。收到该密钥后，请复制此访问密钥。

3) 打开 Outline 客户端应用。如果系统自动检测到您的访问密钥，请点按“连接”并继续。如果系统未自动检测您的访问密钥，请将其粘贴到该字段中，然后点按“连接”并继续。

您可以使用开放互联网了！为了确保您已成功连接到服务器，请尝试在 Google 搜索中搜索“what is my ip”。Google 中显示的 IP 地址应与 Outline 客户端中的 IP 地址一致。

如需详细了解 Outline，请访问 https://getoutline.org/
:::

>3、安装 Outline Manger 添加云服务

![Alt text](/images/linux/vpn_0023image.png)  

![Alt text](/images/linux/vpn_0024image.png)  

>4、执行脚本
``` bash
sudo bash -c "$(wget -qO- https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh)"
``` 
>4、安装成功，获取 apiUrl 管理地址

![Alt text](/images/linux/vpn_0025image.png)  

>5、在Outline Manager 管理端添加

![Alt text](/images/linux/vpn_0026image.png)  

>6、Outline Manager 添加失败   

![Alt text](/images/linux/vpn_0027image.png)  

7、vultr 服务器的防火墙没有配置

![Alt text](/images/linux/vpn_0028image.png)  

![Alt text](/images/linux/vpn_0029image.png)  

## 现此说一下，为什么我要采用 Outline 和 shadowsocks 搭建 vpn 呢
> 1、 outline 不说非常好用，不管从安装和部署都很简单，其实只需它就够用了，为什么要再弄一个 shadowsocks呢？
> 2、 shadowsocks 安装和部署相对outline工具来说比较麻烦，但是为什么我还要安装它呢？

>1.1 outline 工具， 管理后台可以分多个账号，并且还可以限量，非常方便，手机移动端也很好用，但是在pc端，有时我们打开vpn时，访问国内的站非常漫，这让我很不爽。    
>2.1 shadowsocks 工具，安装麻烦，如果要配置多个账号，修改配置不方便，不灵活，手机移动端也比不上outline工具，但是在pc端，它就非常NB了，可以支持多台服务，实现`高可用`、`负载匀衡`，这样一来，我在国内服务也部署一个vpn，再国外也部署一个vpn，采用`负载匀衡`，我就不用担心，开启时，访问国外vpn,访问国内网站漫的问题了。   
>3、为了互补，所以两个工具我都弄了。  