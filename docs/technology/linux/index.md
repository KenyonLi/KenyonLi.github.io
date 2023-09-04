---
title: 'linux语法基础'
date: 2023-06-25
tags:
- 'ubunto'
- 'linux'
- 'ios'
categories:
- '技术'
---

## 目录
[[toc]]
## linux 
::: tip linux  下使用 vim 卡死原因与解决方法

> 我们在[linux](https://so.csdn.net/so/search?q=linux&spm=1001.2101.3001.7020) 下使用vim 编辑文件时，习惯性的使用了 Ctrl + s ， 导致vim 僵死，无法编辑，此时只需要使用 Ctrl + q 解除即可。
>
>  
>
> 在vim 中，Ctrl + S 是锁屏快捷键，  Ctrl+ q 解锁 

:::

## 修改文件目录权限

```bash
#-R, --recursive  递归操作文件和目录
chown -R 777 文件目录
```

## Ubuntu 开启后台守护线程 
```bash
# 开启守护
sudo nohup 你的指令 &
#如果要关闭，先查看程序的id
netstat -tanlp
#关闭程序
sudo kill id -9 
```


## 在CentOS系统下包更新的命令

### 一、 更新和升级yum update 全部更新

yum update package1 更新指定程序包package1

yum check-update 检查可更新的程序

yum upgrade package1 升级指定程序包package1

yum groupupdate group1 升级程序组group1

更多命令

### 二、安装yum install 全部安装

`yum install package1` 安装指定的安装包package1

yum groupinsall group1 安装程序组group1

### 三、查找和显示yum info package1 显示安装包信息package1

yum list 显示所有已经安装和可以安装的程序包

yum list package1 显示指定程序包安装情况package1

yum groupinfo group1 显示程序组group1信息yum search string 根据关键字string查找安装包

### 四、删除程序yum remove | erase package1 删除程序包package1

yum groupremove group1 删除程序组group1

yum deplist package1 查看程序package1依赖情况

### 五、清除缓存yum clean packages 清除缓存目录下的软件包

yum clean headers 清除缓存目录下的 headers

yum clean oldheaders 清除缓存目录下旧的 headers

yum clean, yum clean all (= yum clean packages; yum clean oldheaders) 清除缓存目录下的软件包及旧的headers

### 六、源操作yum repolist/repolist all 列出所有源

yum -enablerepo=fedora-source install package1 从fedora-source源中安装包package1

### 七、Yum Shellyum shll 进去yum的shell环境
