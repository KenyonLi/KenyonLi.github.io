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
从并发量角度思考，如果客户端查询数据并发量比较大，超过了数据库的并发处理能力，就会导致数据库性能下降（因为数据库本身使用的系统资源还是有限的，例如内存资源、cpu资源，磁盘资料等等，都是有限，所以导致数据库并发处理能力有限）。如何提升表的性能？   
>方案：就是分库分表技术。  
>如何落实分库分表呢？  
> 方案有两种，进程内 和 进程外两种   

### 进程内方案
![Alt text](/images/sharding/sharding_shphere_proxy003image.png)

缺陷  
1、资源竞争问题  
2、异常影响问题   
所以：需要使用进程外方案   

### 进程外方案

![Alt text](/images/sharding/sharding_shphere_proxy004image.png)

缺陷   
1、维护量上升的问题  
2、稳定性问题   
但是，为了做架构设计，所以，建议大家使用进程外来落地   

### 数据库中间件技术类型  
技术类型有2类   
工具：  
1、Mycat   
2、ShardingSphere-Proxy  

如何选择数据库中间件技术类型   
  根据每个技术功能特点来进行  
  1、Mycat   是java 开发的，落地麻烦  
  2、ShardingSphere-Proxy 是java 开发的，落地快  
  所以：最终选择ShardingSphere-Proxy   


  ## 项目中如何落地ShardingSphere-Proxy  
  环境：  
  1、Windows10   
  2、linux  
  3、 JDK 1.8   [JDK下载地址](https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html)

  前提：  
  1、电商项目   
  2、MySQL 8.0   
  3、ShardingSphere-Proxy
  步骤：  
![Alt text](/images/sharding/sharding_shphere_proxy005image.png)

  2、MySQL 8.0.33 准备
  安装软件： mysql-installer-community-8.0.33.0 .msi   
  [下载地址](https://downloads.mysql.com/archives/installer/)
  >3、ShardingSphere-Proxy准备  
  >> 3.1 先下载jdk 11.0.19   
  [下载地址](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)   
  >> 3.2 mysql-connector-java-8.0.30.jar   
  [mysql-connector-java-8.0.30.jar下载地址](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/mysql-connector-java-8.0.30.jar)   
  >> 3.3 然后下载apache-shardingsphere-5.4.0-shardingsphere-proxy    
  [apache-shardingsphere-5.4.0-shardingsphere-proxy-bin.tar.gz下载](https://archive.apache.org/dist/shardingsphere/5.4.0/apache-shardingsphere-5.4.0-shardingsphere-proxy-bin.tar.gz)

  ​ 官网地址：https://shardingsphere.apache.org/

​ 下载地址：https://archive.apache.org/dist/shardingsphere/5.4.0/ 

​ 文档地址：https://shardingsphere.apache.org/document/current/cn/overview/  

​ 开发者文档地址：https://shardingsphere.apache.org/document/current/cn/dev-manual/  

  >> 3.4、使用`tar`命令解压
``` bash
​ tar zxvf   apache-shardingsphere-5.4.0-shardingsphere-proxy-bin.tar.gz
```

![Alt text](/images/sharding/sharding_shphere_proxy006image.png)


   >> 3.5、将mysql-connector-java-8.0.30.jar拷贝到改目录下  

![Alt text](/images/sharding/sharding_shphere_proxy007image.png)
​
## 商品表分表场景落地  
条件：  
1、 ebusiness库  
2、 product表   
目标：将proudct 表分成product_0 和 product_1 
步骤  
1、先在MySql中使用客户创建ebusiness数据库
2、然后在ebusiness数据库中使用脚本创建product表
```sql
CREATE TABLE `product` (
	`Id` INT(11) NOT NULL AUTO_INCREMENT,
	`SeckillType` INT(11) NOT NULL,
	`SeckillName` CHAR(255) NULL,
	`SeckillUrl` CHAR(255) NULL,
	`SeckillPrice` DECIMAL(18,2) NOT NULL,
	`SeckillStock` INT(11) NOT NULL,
	`SeckillPercent` CHAR(255) NULL,
	`TimeId` INT(11) NOT NULL,
	`ProductId` INT(11) NOT NULL,
	`SeckillLimit` INT(11) NOT NULL,
	`SeckillDescription` CHAR(255) NULL,
	`SeckillIstop` INT(11) NOT NULL,
	`SeckillStatus` INT(11) NOT NULL,
	PRIMARY KEY (`Id`),
	INDEX `ProductId` (`ProductId`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
; 
CREATE TABLE `order` (
	`Id` INT(11) NOT NULL AUTO_INCREMENT,
	`SeckillType` INT(11) NOT NULL,
	`SeckillName` CHAR(255) NULL,
	`SeckillUrl` CHAR(255) NULL,
	`SeckillPrice` DECIMAL(18,2) NOT NULL,
	`SeckillStock` INT(11) NOT NULL,
	`SeckillPercent` CHAR(255) NULL,
	`TimeId` INT(11) NOT NULL,
	`ProductId` INT(11) NOT NULL,
	`SeckillLimit` INT(11) NOT NULL,
	`SeckillDescription` CHAR(255) NULL,
	`SeckillIstop` INT(11) NOT NULL,
	`SeckillStatus` INT(11) NOT NULL,
	PRIMARY KEY (`Id`),
	INDEX `ProductId` (`ProductId`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
; 

```

>3、然后进入apache-shardingsphere-5.4.0-shardingsphere-proxy-bin配置文件config-sharding.yaml中

![Alt text](/images/sharding/sharding_shphere_proxy008image.png)

>> 3.1 然后在config-sharding.yaml中添加分表配置  
``` yaml

```

## ShardingSphere v5.1.0  YAML 配置说明
[YAML配置说明](https://www.bookstack.cn/read/shardingsphere-5.1.0-zh/ec2cfd46b10987e2.md)
[自动分片配置说明参考](https://juejin.cn/post/7007735588627415076)
数据分片 
配置项说明
```yaml
dataSources: # 省略数据源配置，请参考使用手册
rules:
- !SHARDING
  tables: # 数据分片规则配置
    <logic-table-name> (+): # 逻辑表名称
      actualDataNodes (?): # 由数据源名 + 表名组成（参考Inline语法规则）
      databaseStrategy (?): # 分库策略，缺省表示使用默认分库策略，以下的分片策略只能选其一
        standard: # 用于单分片键的标准分片场景
          shardingColumn: # 分片列名称
          shardingAlgorithmName: # 分片算法名称
        complex: # 用于多分片键的复合分片场景
          shardingColumns: #分片列名称，多个列以逗号分隔
          shardingAlgorithmName: # 分片算法名称
        hint: # Hint 分片策略
          shardingAlgorithmName: # 分片算法名称
        none: # 不分片
      tableStrategy: # 分表策略，同分库策略
      keyGenerateStrategy: # 分布式序列策略
        column: # 自增列名称，缺省表示不使用自增主键生成器
        keyGeneratorName: # 分布式序列算法名称
  autoTables: # 自动分片表规则配置
    t_order_auto: # 逻辑表名称
      actualDataSources (?): # 数据源名称
      shardingStrategy: # 切分策略
        standard: # 用于单分片键的标准分片场景
          shardingColumn: # 分片列名称
          shardingAlgorithmName: # 自动分片算法名称
  bindingTables (+): # 绑定表规则列表
    - <logic_table_name_1, logic_table_name_2, ...> 
    - <logic_table_name_1, logic_table_name_2, ...> 
  broadcastTables (+): # 广播表规则列表
    - <table-name>
    - <table-name>
  defaultDatabaseStrategy: # 默认数据库分片策略
  defaultTableStrategy: # 默认表分片策略
  defaultKeyGenerateStrategy: # 默认的分布式序列策略
  # 分片算法配置
  shardingAlgorithms:
    <sharding-algorithm-name> (+): # 分片算法名称
      type: # 分片算法类型
      props: # 分片算法属性配置
      # ...
  # 分布式序列算法配置
  keyGenerators:
    <key-generate-algorithm-name> (+): # 分布式序列算法名称
      type: # 分布式序列算法类型
      props: # 分布式序列算法属性配置
      # ...
props:
  # ...
```


## 读写分离
配置项说明
```yaml 
dataSources: # 省略数据源配置，请参考使用手册
rules:
- !REPLICA_QUERY
  dataSources:
    <data-source-name> (+): # 读写分离逻辑数据源名称
      primaryDataSourceName: # 主库数据源名称
      replicaDataSourceNames: 
        - <replica-data_source-name> (+) # 从库数据源名称
      loadBalancerName: # 负载均衡算法名称
  # 负载均衡算法配置
  loadBalancers:
    <load-balancer-name> (+): # 负载均衡算法名称
      type: # 负载均衡算法类型
      props: # 负载均衡算法属性配置
        # ...
props:
  # ...
```