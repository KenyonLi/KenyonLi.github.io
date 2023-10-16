---
title: '微服务分布式事务-servicecome-pack'
date: 2023-10-08  
tags:
- '微服务分布式事务'
- 'abp'
- 'dotnet'
- 'skywalking'
categories:
- '技术'
---

## 目录
[[toc]]

## 微服务分布式事务

## 为什么要学习分布式事务   
目的：提升分布式架构设计水平，保证数据稳定性。 
有一天，你们设计的系统，小明在操作你设计的系统，这个时候，小明上传了一张林志玲，获取的时候居然是王宝强？  
为什么会出现这种现象，我上传什么应该就获取什么呀？怎么会出现这样的问题呢？这是数据被掉包了。  
但是这是数据不一致导致的，那么我们如何解决呢？    
我我们学会分布式事务，我们就能解决。    
如果你去公司面试，遇到了类似了场景，你就把握了面试的机会因此，学好分布事务是非常重要的。   
## 什么是事务
事务由一组操作的一个工作单元。怎么去理解这个问题呢？  
我们从现实生活中去理解  
那么事务有哪些特性呢？
事务特性：  
1、原子性：事务内部的一组操作要么同时成功，要么同时失败  
2、隔离性： 不同事务之间是互相不影响的    
3、持久性：事务内部一组操作，各个操作产生的数据要能够持久的效应    
4、一致性：事务内部一组操作，各自操作产生的结果数据，要能够保证是预期的状态    

## 什么是本地事务  
本地事务就是由一组sql语句操作的集合;   
本地事务主要就是指sql语句的操作   
## 什么是分布式事务   

分布式事务就是一组服务操作的集合   
例如：在分布式系统或者微服务系统内，完成一个任何，需要涉及到多个服务来共同完成，这一组服务操作组成的集合，就是分布式事务。   

## 分布式事务类型  
不同服务不同数据库  
都可以参进各个图  
不同服务相同数据库  
都可以参进各个图
相同服务不同数据库
都可以参进各个图

## 为什么要使用分布式事务   
我们从真实的项目场景中出发，例如我们现在学习的微服务架构，那么我们现在来研究一下为什么要使用分布式事务   
目前我们的项目已经集成了4个微服务架构技术，那么我们目前来看一下，他们之间的调用逻辑     
现在有这样一个需求，我想通过在订单聚合微服务添加订单和商品
如果在添加订单和商品，如果添加订单信息成功了，商品失败了，那么这个时候，就会出现订单添加成功，而商品信息就没有添加成功，是吧，那么，这个问题该如何解决呢？   
很多同学，想到了解决方案，就是今天讲的分布式事务。    
那么分布式事务是如何解决的呢？  
目前方案有很多，目前事务分类为两类：一种是刚性事务，一种是柔性事务    

**刚性事务**   
就是完全遵守事务4大特性的分布式事务——主要体现在一致性（强一致性）   
cap理论
2阶段提交  
3阶段提交

**柔性事务**
就是不完全遵守事务4特性的分布式事务——主要体现在一致性（不完全一直，最终一致性）    
Base理论   
特性    
可查询操作：服务操作具有全局唯一标识，操作唯一确定的时间    
幂等操作：重复调用多次产生的业务结果与调用一次产生的结果相同，一是通过型业务操作实现幂等性，二是系统缓存所有请求与处理结果，最后是检测到重复请求之后，自动返回之前的处理结果。   

同步事务（http,rpc）

Tcc分布式事务  

Saga公布式事务  

异步事务（消息队列MQ）

本地消息表  

## 分布式事务方案演化

2阶段提交  
 1、准备阶段 prepare
 2、提交阶段 commit 
 优点   
 保证了数据的强一致性，适合对数据强一致性要求很高的关键领域   
 缺点   
 1、同步阻塞 性能问题   
 2、数据一致性问题  
 3、单点故障     
场景   
同服务不同数据库  

3阶段提交  
1、确认阶段 canCommit
2、准备阶段 PreCommit  
3、提交阶段 do commit   

优点   
避免了单点问题，避免了阻塞问题  
缺点   
1、状态不一致  
同服务不同数据库  
场景  
同服务不同数据库  
## TCC分布式事务
优点   
1、解决了跨服务的业务操作原子性能问题，例如组合支付，订单减库等场景非常实用   
2、TCC的本质原理是把数据库的二阶段提交上升到微服务来实现，从而避免了数据库2阶段中锁冲突的长事务低性能风险。  
3、TCC异步高性能，它采用了try先检查，然后异步实现confirm,真正提交的是在confirm方法中。   
缺点   
1、对微服务的入侵性强，微服务的每个事务都必须实现try,confirm,cance等3个方法，开发成本高，今后维护改造成本高。  
2、为了达到事务的一致性要求，try,confrim,cance接口必须实现等幂性操作。（定时器+ 重试）    
3、由于事务管理要记录日志，必定会损耗一定的性能，并使得整个TCC事务时间拉长，建议采用redis的方式来记录事务日志。  
场景：微服务    

## Saga分布式事务
优点   
1、避免服务之间服务循环依赖，因为saga协调器会调用saga参与者，但参与者不会调用协调器   
2、集中分布式事务编排    
3、降低参考者的复杂性   
4、回滚更容易管理    

saga模式的一大优势是它支持长事务。因为每个微服务仅关注其自己的本地原子事务，所以如果微服务运行很长时间，则不会阻止其他微服务。这也允许事务断续等待用户输入。此处，由于所有本地事务者是并行发生的，因此任何对象都没有锁定。  

缺点  

协调器集中太多逻辑的风险   
Saga模式很难调试，特别是涉及许多微服务时，此外，如果系统变得复杂，事件消息可能变得难以维护。Saga模式的另一个缺点是它没有读取隔离，例如，客户可以看到正在创建的订单，但在下一秒，订单将因补偿交易被删除。  
场景：微服务   

## Saga分布式事务框架   

主要用在微服务   
1、Eventuate-Tram-Saga JDBC/JPA 的java微服务的Saga框架   
目前C# net 没有支持的客户端，不好使用   

2、ServiceComb Pack   
是华为开源的一个微服务架构后进入Apache软件基金会孵化，Servicecomb是华为开源的一个微服务事务框架，后进入Apache软件基金会孵化，现已毕业，是apache顶级开源项目，而servicecomb-pack是servicecomb孵化三个子项目之一，是分布式事务最终一致性解决方案，0.3.0版本之前叫saga,现改名为servicecomb-pack,支持saga和tcc两种分布式事务协议，相关理论知识请稳步（传送门），本文请要介绍saga模式。

## 微服务项目中如何使用ServiceComb Pack     

特性    
高可用：支持高可用的集群模式部署   
高可靠：所有的关键事务事件都持久存储在数据库中。
高性能：事务事件是通过高性能gRPC来上报的，且事务的请求和响应消息都是通过Kyro进行序列化和反序列化。  
低侵入：仅需2-3个注解和编写对应的补偿方法即可引入分布式事务。
部署简单：支持通过容器（Docker）进行快速部署和交付。  
补偿机制灵活：支持前向恢复（重试）及后向恢复（补偿）功能。    
扩展简单：基于Pack架构很容易实现多种协调协议，目前支持Tcc,Saga协议，未来还可以添加其他协议支持。   

**内部概念**    
ServiceComb Pack架构是由alpha 和 omega 组成，其中：    
  * alpha充当协调者的角色，主要负责对事务进行管理和协调。    
  * omega是微服务中内嵌的一个agent,负责对调用请求进行拦截并向alpha上报事务事件。  


微服务项目和ServiceCom

![Alt text](/images/abpmicroservices/micro009/abpmicroservices0009_0001image.png)


## 微服务项目中如何使用ServiceComb Pack  
条件  

1、微服务项目  

2、ServiceComb Pack saga事务框架alpha，协调器  

3、servicecomb-pack-csharp-omega_v0.1，saga事务框架客户端omega，客户端   

4、mysql或者PostgreSQL   

步骤   
1、微服务项目操作  

​ 1.1 启动微服务项目，正确响应出结果  

2、alpha操作 

​ 2.1 环境准备  

​ jdk1.8 下载地址http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html  

​ PostgreSQL下载地址：https://www.enterprisedb.com/downloads/postgres-postgresql-downloads。  

​ Mysql下载地址：https://dev.mysql.com/downloads/mysql/  

​ ServiceComb Pack 下载地址：http://servicecomb.apache.org/release/pack-downloads/  

​ Mysql和PostgreSQL二者选一，默认是PostgreSQL  

​ 2.2 ServiceComb Pack 启动 (连接mysql为例)  

​ 2.2.1 PostgreSQL下启动ServiceComb Pack   
​ 切换到什么目录 D:\alpha\apache-servicecomb-pack-distribution-0.5.0-bin
 先创建数据库 `saga` 在执行指令
``` bash
java -D"spring.profiles.active=prd" -D"spring.datasource.url=jdbc:postgresql://localhost:5432/saga?useSSL=false" -D"spring.datasource.username=root" -D"spring.datasource.password=root" -jar alpha-server-0.5.0-exec.jar
```


2.2.2 mysql配置

​ 1、在apache-servicecomb-pack-distribution-0.5.0-bin目录下创建插件目录

​ plugins文件夹

​ 2、 在plugins文件夹内部添加mysql驱动

​ mysql-connector-java-8.0.15.jar

​ 3、mysql下启动ServiceComb Pack

​ 切换到什么目录 D:\alpha\apache-servicecomb-pack-distribution-0.5.0-bin

 先创建数据库 `saga` 在执行指令

``` bash
进入apache-servicecomb-pack-distribution-0.5.0-bin目录
打开application.yml文件
添加spring.datasource.url
添加spring.datasource.username
添加spring.datasource.password
使用cmd,输入命令
java -D"spring.profiles.active=mysql" -D"loader.path=./plugins" -jar alpha-server-0.5.0-exec.jar

或者不修改配置application.yml文件，直接启动
java -D"spring.profiles.active=mysql" -D"loader.path=./plugins" -D"spring.datasource.url=jdbc:mysql://localhost:3306/saga?useSSL=false&serverTimezone=Asia/Shanghai" -D"spring.datasource.username=root" -D"spring.datasource.password=root" -jar alpha-server-0.5.0-exec.jar
```
4、查询mysql saga数据库   

![Alt text](/images/abpmicroservices/micro009/abpmicroservices0009_0002image.png)     

​ txexvent- 事件表详情

​ txtimeout-超时表详情

​ compenste-补偿表详情

3、omega操作

​ 3.1 环境准备

​ servicecomb-pack-csharp-omega_v0.1 下载地址：https://github.com/OpenSagas-csharp/servicecomb-pack-csharp#servicecomb-pack-csharp

​ 3.2 omega配置

​ 1、在RuanMou.MicroService下面创建解决方案文件夹

​ omega文件夹

​ 2、在omega文件下面从导入项目

![Alt text](/images/abpmicroservices/micro009/abpmicroservices0009_0003image.png)     

 3、在AggregateService,OrderService,ProductService下分别引入

![Alt text](/images/abpmicroservices/micro009/abpmicroservices0009_0004image.png)     

![Alt text](/images/abpmicroservices/micro009/abpmicroservices0009_0004image.png)     


![Alt text](image.png)