---
title: '消息中间件ShardingSphere-Proxy简介（一）'
date: 2023-08-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '消息中间件ShardingSphere-Proxy'
categories:
- 'C#'
---

## 目录
[[toc]]
## ShardingSphere-Proxy
## 什么是ShardingSphere-Proxy
> ShardingSphere-Proxy是跨语言的数据库代理服务端，主要目的：对数据库实现分库分表和读写分离   

## 什么地方使用ShardingSphere-Proxy
>主要应用在：

​ 单体电商项目

​ 微服务电商项目

首先，我们先简单理解分库和分表

## 什么是分库
>分库：表存储到不同数据库  

![Alt text](/images/sharding/sharding_shphere_proxy001image.png)

什么是分表
分表：一张分成多张表  

![Alt text](/images/sharding/sharding_shphere_proxy002image.png)

### 单体项目中为什么要使用ShardingSphere-Proxy
>单体系统，主要用来处理客户端的请求，客户端添加的数据，这些数据会存到数据库表中，一个表存储的容量是有限的，如果超过了一定的数量，表的处理性能就会下降，是因为表是通过InnoDB引擎来处理数据的，InnoDB通过B+树结构进行存储，如果超过了一定的阀值，就会使表的性能下降，如何提升性能？  
>方案：就是分表技术。
