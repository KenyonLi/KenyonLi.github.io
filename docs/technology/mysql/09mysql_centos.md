---
title: 'Mysql8.0 centos stream 9 '
date: 2023-07-10
tags:
- 'mysql'
- '数据库'
categories:
- '技术'
---

## 目录
[[toc]]

## CentOS stream 9 安装MySQL8
   [参考](https://blog.csdn.net/moli_Y/article/details/127895970)
::: tip 环境安装
>*  mysql: centos stream 9  安装 mysql 8.0
>* 1、 yum 安装：
```
yum install mysql-server
```
>* 2、 下载包 安装
[下载地址：mysql-8.0.31-1.el9.x86_64.rpm-bundle.tar](https://cdn.mysql.com//Downloads/MySQL-8.0/mysql-8.0.31-1.el9.x86_64.rpm-bundle.tar)   
解压文件  
```bash
 tar -xvf mysql-8.0.31-1.el9.x86_64.rpm-bundle.tar
```

`安装`
>* 需要注意按照对应顺序安装
```bash
rpm -ivh mysql-community-common-8.0.31-1.el9.x86_64.rpm
rpm -ivh mysql-community-libs-8.0.31-1.el9.x86_64.rpm --nodeps --force
rpm -ivh mysql-community-client-8.0.31-1.el9.x86_64.rpm --nodeps --force
rpm -ivh mysql-community-server-8.0.31-1.el9.x86_64.rpm --nodeps --force 
```
:::
