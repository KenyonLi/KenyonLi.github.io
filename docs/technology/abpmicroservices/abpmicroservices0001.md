---
title: '微服务电商项目落地'
date: 2023-06-23 12:44:15
tags:
- '微服务'
- 'abp'
- 'dotnet'
categories:
- '技术'
---
## 目录

[[toc]]

## 微服务电商项目落地  

1、windows 10

2、linux centos 9

### 落地技术前提
1、.Net7：.netcore新的版本，主要以.net5为主

2、DDD ：领域驱动设计思想

3、Abp vNext：基于.net7开发的微服务框架

4、Mysql8.0.23：

### 落地技术工具
1、ABP CLI

2、VS2022

### 如何创建微服务电商项目
#### 微服务电商项目如图所示



### 微服务电商项目创建  
对于以上电商微服务，应该如何创建，创建思路如下。 

### 创建微服务解决方案  
1、先创建 `abpmicroservice` 文件夹  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0001.png)   

2、然后在LKN.Products文件夹中创建解决方案LKN.Microservices   
2.1、 输入命令：
``` bash
abp new LKN.Microservices -t console -o LKN.Microservices -v 7.3.0
```
命令如图所示   

![Alt text](/images/abpmicroservices/abpmicroservices0001_0002.png)   

 2.2、结果如图所示

![Alt text](/images/abpmicroservices/abpmicroservices0001_0003.png)   


### 创建微服务订单模块  
1、先进在`LKN.Microservices` 解决方案文件夹中创建`LKN.Order`模块   
1.1 输入命令：
``` bash 
abp new LKN.Order -t module –dbms mysql –no-ui -o moduls\LKN.Order -v 7.3.0
```
 命令如图所示：    

![Alt text](/images/abpmicroservices/abpmicroservices0001_0004.png)   

2.2、结果如图所示

![Alt text](/images/abpmicroservices/abpmicroservices0001_0005.png)   

### 创建微服务商品模块  

1、先进在LKN.Microservices解决方案文件夹中创建`LKN.Product`模块  
1.1 输入命令：
``` bash 
abp new LKN.Product -t module –dbms mysql –no-ui -o moduls\LKN.Product -v 7.3.0
```
![Alt text](/images/abpmicroservices/abpmicroservices0001_0006.png)   

2.2、结果如图所示   

![Alt text](/images/abpmicroservices/abpmicroservices0001_0007.png)   


### 创建微服务支付模块  

1、先进在LKN.Microservices解决方案文件夹中创建`LKN.Payment`模块  
1.1 输入命令：
``` bash 
abp new LKN.Payment -t module –dbms mysql –no-ui -o moduls\LKN.Payment -v 7.3.0
```
![Alt text](/images/abpmicroservices/abpmicroservices0001_0008.png)   

2.2、结果如图所示    

![Alt text](/images/abpmicroservices/abpmicroservices0001_0009.png)   

### 创建微服务用户模块  

1、先进在LKN.Microservices解决方案文件夹中创建`LKN.User`模块   

1.1 输入命令：  
``` bash 
abp new LKN.User -t module –dbms mysql –no-ui -o moduls\LKN.User -v 7.3.0
```
![Alt text](/images/abpmicroservices/abpmicroservices0001_0010.png)   

2.2、结果如图所示   

![Alt text](/images/abpmicroservices/abpmicroservices0001_0011.png)   
