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

