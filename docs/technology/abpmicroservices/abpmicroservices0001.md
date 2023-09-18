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
安装 abp cli   
```bash
dotnet tool install -g Volo.Abp.Cli
```
2、VS2022   

### 如何创建微服务电商项目
#### 微服务电商项目如图所示

![Alt text](/images/abpmicroservices/abpmicroservices0001_0000.png)   

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

1、先进在`LKN.Microservices`解决方案文件夹中创建`LKN.Product`模块  
1.1 输入命令：
``` bash 
abp new LKN.Product -t module –dbms mysql –no-ui -o moduls\LKN.Product -v 7.3.0
```
![Alt text](/images/abpmicroservices/abpmicroservices0001_0006.png)   

2.2、结果如图所示   

![Alt text](/images/abpmicroservices/abpmicroservices0001_0007.png)   


### 创建微服务支付模块  

1、先进在`LKN.Microservices`解决方案文件夹中创建`LKN.Payment`模块  
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

### 电商微服务层创建
1、先在`LKN.Microservice`解决方案文件夹创建`microservices`文件夹  
命令如图所示：

![Alt text](/images/abpmicroservices/abpmicroservices0001_0012.png)  

2、然后在microservices文件夹中引入订单、商品、支付、用户4个模块中Host项目中  

`LKD.Order.HttpApi.Host`

![Alt text](/images/abpmicroservices/abpmicroservices0001_0013.png)  


`LKD.Payment.HttpApi.Host`

![Alt text](/images/abpmicroservices/abpmicroservices0001_0014.png)  


`LKD.Product.HttpApi.Host`

![Alt text](/images/abpmicroservices/abpmicroservices0001_0015.png)  


`LKD.User.HttpApi.Host`

![Alt text](/images/abpmicroservices/abpmicroservices0001_0016.png)  

结果如图所示   

![Alt text](/images/abpmicroservices/abpmicroservices0001_0017.png)  

### 电商微服务聚合层创建  
1、先在`LKN.Microservice`解决方案文件夹创建`aggregateservices`文件夹    

命令如图所示：  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0018.png)  

### 如何引入微服务电商项目 
#### 模块层引入   
1、先使用`vs2022`引入`LKN.Microservices`项目   

![Alt text](/images/abpmicroservices/abpmicroservices0001_0019.png)  

2、然后创建`moduls`文件夹  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0020.png)  

2.1、在`moduls`中创建订单、商品、支付、用户解决方案文件夹  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0021.png)  

2.2、然后在`LKN.Order`,`LKN.Payment`,`LKN.Product`,`LKN.User`解决方案文件夹中引入项目   

![Alt text](/images/abpmicroservices/abpmicroservices0001_0022.png)  

### 微服务层  
1、先创建`microservices`解决方案文件夹  
如图所示  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0023.png)  

2、然后在`microservices`解决方案文件夹中引入项目  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0024.png)  

### 微服务聚合层引入
1、先创建`aggregateservices`解决方案文件夹

​ 如图所示：

![Alt text](/images/abpmicroservices/abpmicroservices0001_0025.png)  

### 如何运行微服务电商项目

1、先在`LKN.Order.HttpApi.Host`项目中重新项目依赖   

![Alt text](/images/abpmicroservices/abpmicroservices0001_0026.png)  

1.1、重新引入后结果如图所示  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0027.png)  


​ 2、然后在`LKN.Order.HttpApi.Host`项目中移除项目  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0028.png)  

2.1、在`OrderHttpApiHostModule`类中删除引用 

![Alt text](/images/abpmicroservices/abpmicroservices0001_0029.png)  

2.2、然后在`LKN.Order.HttpApi.Host`项目中引入`Volo.Abp.EntityFrameworkCore.MySQL`

![Alt text](/images/abpmicroservices/abpmicroservices0001_0030.png)  

​3、然后在`OrderHttpApiHostModule`类中修改为  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0031.png)  

3.1、修改后结果如图所示：  

![Alt text](/images/abpmicroservices/abpmicroservices0001_0032.png)  

​ 4、然后在`OrderHttpApiHostMigrationsDbContextFactory`类中修改为

![Alt text](/images/abpmicroservices/abpmicroservices0001_0033.png)  

4.1、修改后结果如图所示： 

![Alt text](/images/abpmicroservices/abpmicroservices0001_0034.png)  


​ 5、然后在`OrderHttpApiHostMigrationsDbContextFactory`类中修改为

![Alt text](/images/abpmicroservices/abpmicroservices0001_0035.png)  

5.1、修改后结果如图所示：

![Alt text](/images/abpmicroservices/abpmicroservices0001_0036.png)  
