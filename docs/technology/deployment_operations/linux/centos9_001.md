---
title: 'linux(centos9) root密码忘记了，怎么重置或修改密码'
date: 2023-8-22
tags:
- 'centos9'
- 'linux'
- 'ios'
categories:
- '技术'
---

## 目录
[[toc]]

## linux(centos9) root密码忘记了，怎么重置或修改密码
[参考](https://blog.csdn.net/m0_62913192/article/details/124587700)
>找回步骤：  

### 1、开机按键盘【`esc`】,然后上下键盘选择，按【`e`】进入编辑模式

![Alt text](/images/linux/centos9/centos9_0001image.png)  

### 2、找到linux 信息，使用上下键盘选择这一行，再按【End】键盘，光标会跳到尾记得空格一下，输入【`init=/bin/sh`】（该命令表示我们当前进入的是一个单用户模式）  

![Alt text](/images/linux/centos9/centos9_0002image.png)  

### 3、输入完成，按住快捷键【`Ctrl+X`】直接进入单用户模式（等待重启）  

![Alt text](/images/linux/centos9/centos9_0003image.png)  

### 4、进入单用户，在命令行输入：【`mount -o remount,rw/` 】,按回车【`Enter`】(这里必须要用空格分开)。

![Alt text](/images/linux/centos9/centos9_0004image.png)  

### 5、下一步设置密码：在新的一行输入【`passwd`】,回车【`Enter`】,回车之后系统会让你输入两次密码，密码长度大于8位，但不是必须的。

![Alt text](/images/linux/centos9/centos9_0005image.png)  

### 6、输入密码之后，输入指使【`touch / .autorelabel` 】,按回车【`Enter`】

![Alt text](/images/linux/centos9/centos9_0006image.png)  

### 7、在新的命令行输入【`exec /sbin/init` 】,按回车【`Enter`】，之后就安静等待系统重启了，等待重启的过程有点漫长，它需要重置之前的配置文件数据，所以不要乱动，增加失败风险。
 
![Alt text](/images/linux/centos9/centos9_0007image.png)  

### 8、重置成功
![Alt text](/images/linux/centos9/centos9_0008image.png)  

## 用户修改密码
``` bash
//切换用户 root  
su root  
[root@localhost ~]# passwd
更改用户 root 的密码 。
新的密码： 
重新输入新的密码： 
passwd：所有的身份验证令牌已经成功更新。
```
