---
title: '分布式中间件-ElasticSearch'
date: 2023-08-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '分布式中间件-ElasticSearch'
categories:
- 'C#'
---
## 目录

[[toc]]

## 分布式中间件-ElasticSearch
### 什么是ElasticsSearch
Elasticsearch 是全文搜索引擎。
### 什么全文搜索  
![Alt text](/images/elasticsearch/elasticsearch_001image.png)
客户端输入“100周年”，能够把数据库中一段话查询出来，就是是全文搜索。  
### 什么引擎  
能够完成全文搜索这件事情的工具，就叫做引擎。  
ElasticSearch 主要用在微服务系统中。  

### 什么地方使用ElastaicSearch  
ElasticSearch主要用在微服务系统中。

### 微服务系统中为什么要使用ElasticSearch 
微服务系统有很多，包含电商微服务系统，包含OA微服务系统，以及其他不同微服务系统。主要通过电商微服务系统来进行举例说明为什么要使用ElasticSearch?先得到一个电商微服务系统。如何得到？
电商微服务系统是由单体电商系统而来   
### 单体电商系统   

![Alt text](/images/elasticsearch/elasticsearch_002image.png)

在单体电商系统中，我们主要看一个业务场景，搜索商品业务场景。  
搜索商品实现过程，客户端发起查询请求——>电商系统——>电商数据库。  

如果客户端有这样一个要求，查询订单的时候，需要查询出商品。如何实现这个规则要求呢？   
查询订单实现过程，客户端发起查询请求——>电商系统——>电商数据库——>订单表和商品表进行关联。   

当时，电商系统并发量、业务量、数据量同时上升之后，单体系统查询，添加、修改、删除性能会急剧下降。进一步甚至会导致系统宕机（宕机也就是无法访问），如果系统出现了宕机问题，直接导致客户端
无法访问。  
在允许电商并发量、业务量、数据量同时上升情况下，如何提升系统性能，防止系统宕机呢？   
方案：需要进行业务模块拆分   
结果：形成电商微服务系统   

### 电商微服务系统  

![Alt text](/images/elasticsearch/elasticsearch_003image.png)

在电商微服务系统中，我们主要看业务场景，搜索商品业务场景。    
搜索商品实现过程，客户端发起查询请求——>电商系统——>电商微服务——>电商数据库。   


如果客户端有这样一个要求，查询订单的时候，需要搜索出商品。如何实现这个规则要求呢？   
查询订单实现过程，客户端发起查询请求——>电商网站——>订单微服务——>电商数据库。    

电商网站——> 电商微服务——> 电商数据库。  

一个订单查询需要涉及到2个微服务（订单微服务、商品微服务）查询。     
如果并发量比较大，会导致两个微服务查询性能下降。因为是同步请求，同步请求并发处理有限   
如果2个微服务其中一个微服务宕机了，会导致无法进行查询。    
如何提升系统性能和防止系统宕机呢？   
方案：使用ElasticSearch   

### 电商微服务系统-网站拆分   

![Alt text](/images/elasticsearch/elasticsearch_004image.png)

### 电商微服务系统-搜索微服务  

![Alt text](/images/elasticsearch/elasticsearch_005image.png)

### 电商微服务系统-ElasticSearch  

![Alt text](/images/elasticsearch/elasticsearch_006image.png)

在微服务电商系统中，我们主要看一个业务场景，搜索商品业务场景。    
搜索商品实现过程，客户端发起请求——>电商系统——>商品微服务——>电商数据库。    

如果客户端有这样一个要求，查询订单的时候，需要查询商品。如何实现个规则要求呢？    
查询订单实现过程，客户端发起请求——>电商网站——>ElasticSearch。   

在ElasticSearch中可以一次性查询出订单商品数据。而且还可以提升性能    
总结：这就是我们在电商系统中使用ElasticSearch的原因   
1、先从单体电商系统分析   
2、然后再从电商微服务系统分析  
3、最后引入ElasticSearch   
4、由此得到微服务系统中为什么要使用ElasticSearch      

## 微服务系统中如何落地ElasticSearch   
前提   
1、电商微服务系统   
2、ElasticSearch   
3、kibana   
步骤    
1、电商微服务系统准备   
通过vs创建.Net7电商系统微服务系统    

![Alt text](/images/elasticsearch/elasticsearch_007image.png)

2、ElasticSearch准备 
2.1 ElasticSearch 前提  
 
​ jdk1.8下载地址：https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html

​ jdk1.8安装：直接搜索安装

​ 2.2 Elasticsearch准备

​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-10-1

​ 文档地址：https://www.elastic.co/guide/en/elasticsearch/reference/7.10/index.html

​ Elasticsearch安装：
![Alt text](/images/elasticsearch/elasticsearch_008image.png)

条件：
1、字符过滤器 char_filter(文本过滤)：过滤不必要的分词符号  



###  kibana 下载
[kibana-7.10.1-windows-x86_64.zip 下载](https://artifacts.elastic.co/downloads/kibana/kibana-7.10.1-windows-x86_64.zip)