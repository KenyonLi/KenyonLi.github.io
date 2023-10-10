---
title: '微服务链路监控-skywalking'
date: 2023-10-08  
tags:
- '微服务链路监控-skywalking'
- 'abp'
- 'dotnet'
- 'skywalking'
categories:
- '技术'
---

## 目录
[[toc]]

## 微服务链路监控-skywalking

### skywalking 角色作用  
1. ES7:存储链路（查询订单）时间  
2. collector:收集链路（查询订单）时间
3. webapp:显示链路（查询订单）时间  
4. skyAPM.Agent.AspNetCore:发送链路（查询订单）时间  
查询订单时间的流程：
1、订单微服务——>SkyAPM.Agent.AspNetCore 
2、SkyAPM.Agent.AspNentCore——>Collector 
3、collector——>ES7 
4、webapp显示查询订单的时间。  


