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

![Alt text](/images/sharding/sharding_sphere_proxy001image.png)

什么是分表
分表：一张分成多张表  

![Alt text](/images/sharding/sharding_sphere_proxy002image.png)

### 单体项目中为什么要使用ShardingSphere-Proxy
>单体系统，主要用来处理客户端的请求，客户端添加的数据，这些数据会存到数据库表中，一个表存储的容量是有限的，如果超过了一定的数量，表的处理性能就会下降，是因为表是通过InnoDB引擎来处理数据的，InnoDB通过B+树结构进行存储，如果超过了一定的阀值，就会使表的性能下降，如何提升性能？  
>方案：就是分表技术。
从并发量角度思考，如果客户端查询数据并发量比较大，超过了数据库的并发处理能力，就会导致数据库性能下降（因为数据库本身使用的系统资源还是有限的，例如内存资源、cpu资源，磁盘资料等等，都是有限，所以导致数据库并发处理能力有限）。如何提升表的性能？   
>方案：就是分库分表技术。  
>如何落实分库分表呢？  
> 方案有两种，进程内 和 进程外两种   

### 进程内方案
![Alt text](/images/sharding/sharding_sphere_proxy003image.png)

缺陷  
1、资源竞争问题  
2、异常影响问题   
所以：需要使用进程外方案   

### 进程外方案

![Alt text](/images/sharding/sharding_sphere_proxy004image.png)

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
![Alt text](/images/sharding/sharding_sphere_proxy005image.png)

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

![Alt text](/images/sharding/sharding_sphere_proxy006image.png)


   >> 3.5、将mysql-connector-java-8.0.30.jar拷贝到改目录下  

![Alt text](/images/sharding/sharding_sphere_proxy007image.png)
​
## 商品表分表场景落地  
条件：  
1、 ebusiness库   
2、 product表    
目标：将proudct 表分成product_0 和 product_1   
步骤   
>1、先在MySql中使用客户创建ebusiness数据库   

>2、然后进入apache-shardingsphere-5.4.0-shardingsphere-proxy-bin配置文件config-sharding.yaml中 

![Alt text](/images/sharding/sharding_sphere_proxy008image.png)

>> 2.1 然后在config-sharding.yaml中添加分表配置  
``` yaml
# 3、创建客户端连接库
databaseName: ebusiness
#
dataSources:
  productdatasources_0:
    url: jdbc:mysql://192.168.1.46:3307/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
# 2、分片规则
rules:
- !SHARDING
  tables:
    product:
      actualDataNodes: productdatasources_0.product_${0..1}
      tableStrategy:
        standard:
          shardingColumn: ProductId
          shardingAlgorithmName: product_MOD
      #开启 雪花算法生成id ,适用分步式部署
      keyGenerateStrategy:
        column: Id
        keyGeneratorName: snowflake
  shardingAlgorithms:
    product_MOD:
      type: INLINE
      props:
        algorithm-expression: product_${ProductId % 2}
        
  keyGenerators:
    snowflake:
      type: SNOWFLAKE
```

3、然后进入apache-shardingsphere-5.4.0-shardingsphere-proxy-bin配置文件server.yaml中

 ![Alt text](/images/sharding/sharding_sphere_proxy010image.png)

 然后添加用户名和密码   
 ```bash
authority:
  users:
    - user: root@%
      password: skceDB123
    - user: sharding
      password: skceDB123
  privilege:
    # 每个用户都拥有所有权限，无需专门授权；
    type: ALL_PERMITTED   
#
 ```
>> 3.1 server.yaml属性配置(默认可以不配置)

​ 配置项说明

|名称         |	数据类型|	说明	|默认值|
|:--:         |   :--:  |:--:   |:--: |
|sql-show (?)	|boolean	|是否在日志中打印 SQL。 打印 SQL 可以帮助开发者快速定位系统问题。日志内容包含：逻辑 SQL，真实 SQL 和 SQL 解析结果。 如果开启配置，日志将使用 Topic ShardingSphere-SQL，日志级别是 INFO。|	false|
|sql-simple (?)	|boolean|	是否在日志中打印简单风格的 SQL。	|false|
|executor-size (?)|	int	|用于设置任务处理线程池的大小。每个 ShardingSphereDataSource 使用一个独立的线程池，同一个 JVM 的不同数据源不共享线程池。|	infinite|
|max-connections-size-per-query (?)	|int|	一次查询请求在每个数据库实例中所能使用的最大连接数。	|1|
|check-table-metadata-enabled (?)	|boolean|	是否在程序启动和更新时检查分片元数据的结构一致性。	|false|
|query-with-cipher-column (?)|	boolean	|是否使用加密列进行查询。在有原文列的情况下，可以使用原文列进行查询。|	true|
|proxy-frontend-flush-threshold (?)	|int|	在 ShardingSphere-Proxy 中设置传输数据条数的 IO 刷新阈值。	|128|
|proxy-transaction-type (?)	|String|	ShardingSphere-Proxy 中使用的默认事务类型。包括：LOCAL、XA 和 BASE。|	LOCAL|
|proxy-opentracing-enabled (?)	|boolean|	是否允许在 ShardingSphere-Proxy 中使用 OpenTracing。|	false|
|proxy-hint-enabled (?)	|boolean	|是否允许在 ShardingSphere-Proxy 中使用 Hint。使用 Hint 会将 Proxy 的线程处理模型由 IO 多路复用变更为每个请求一个独立的线程，会降低 Proxy 的吞吐量。|	false|
|xa-transaction-manager-type (?)	|String	|XA 事务管理器类型。列如：Atomikos，Narayana，Bitronix。|	Atomikos|


4、然后启动apache-shardingsphere-5.4.0-shardingsphere-proxy-bin  

![Alt text](/images/sharding/sharding_sphere_proxy011image.png)

5、然后在sharding-proxy-63-3307中使用脚本添加数据, ebusiness数据库中使用脚本创建product表   
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
 
INSERT INTO `product` (`Id`, `SeckillType`, `SeckillName`, `SeckillUrl`, `SeckillPrice`, `SeckillStock`, `SeckillPercent`, `TimeId`, `ProductId`, `SeckillLimit`, `SeckillDescription`, `SeckillIstop`, `SeckillStatus`) VALUES
(2, 1, '22', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1d6232caff62f3b59d11ee09abdb9d5.jpg', 12.00, 22222, '1', 3, 2, 1, 'iphone6是最好的', 1, 1);

## id 为char 类型，方便于 sharding 雪花算法自动生成id,分步式部署，保证id唯一性。  
CREATE TABLE `product` (
  `Id` char(100) NOT NULL,
  `SeckillType` int(11) NOT NULL,
  `SeckillName` char(255) DEFAULT NULL,
  `SeckillUrl` char(255) DEFAULT NULL,
  `SeckillPrice` decimal(18,2) NOT NULL,
  `SeckillStock` int(11) NOT NULL,
  `SeckillPercent` char(255) DEFAULT NULL,
  `TimeId` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  `SeckillLimit` int(11) NOT NULL,
  `SeckillDescription` char(255) DEFAULT NULL,
  `SeckillIstop` int(11) NOT NULL,
  `SeckillStatus` int(11) NOT NULL,
  `CreateTime` datetime DEFAULT NULL,
  KEY `ProductId_product` (`ProductId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
## 添加
INSERT INTO `product` (`SeckillType`, `SeckillName`, `SeckillUrl`, `SeckillPrice`, `SeckillStock`, `SeckillPercent`, `TimeId`, `ProductId`, `SeckillLimit`, `SeckillDescription`, `SeckillIstop`, `SeckillStatus`) VALUES
(1, '22', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1d6232caff62f3b59d11ee09abdb9d5.jpg', 12.00, 22222, '1', 3, 3, 1, 'iphone6是最好的', 1, 1);
```
6、查看实际库中就生成了表

![Alt text](/images/sharding/sharding_sphere_proxy012image.png)

## 整体架构

![Alt text](/images/sharding/sharding_sphere_proxy009image.png)  

总共6个阶段：   

1、数据库选择：选择具体数据库以及对应的版本    

2、sql解析：把中间件连接解析成为真实数据库连接    

3、sql路由：选择去哪一个真实数据库对应的表去执行(路由) 核心    

4、sql重写：优化    

5、sql执行：真实数据库获取结果   

6、结果合并：从多个表或者多个库获取结果   

### 分表原理  
#### 库分板  
技术：使用ModShardingAlgorithm分片算法  
ShardingSQLRouter路由 
过程：取出Id % 2 然后进行取模得到 0 1   
分析：如果为0那么，数据就存储到第一张库，如果为1，数据就存储到第二张库   
#### 表分析  
技术：使用ModShardingAlgorithm分片算法  
ShardingSQLRouter路由  
过程：取出ProductId % 2  然后进行取模得到0 1   
分析：如果为0那么，数据就存储到第1张库第1张表，如果为1，数据就存储到第1张库第2张表 


## 商品取模分表-情况2 
商品表product，如果在3307添加商品数据，数据会添加到product_0和product_1中，这个时候，一个一个添加肯定是没有问题的，但是如果批量添加数据到product_0和product_1，如果product_0成功了，product_1失败了，会导致数据不一致。如何解决数据一致性问题  
方案：使用分布式事务  
条件：  
1、ebusiness库  
2、product 表  
目标： 将product表分成product_0和product_1    
步骤： 
1、进入apache-shardingsphere-5.4.0-shardingsphere-proxy-bin配置文件server.yaml中
```bash
authority:
  users:
    - user: root@%
      password: skceDB123
    - user: sharding
      password: skceDB123
  privilege:
    type: ALL_PERMITTED

transaction:
  defaultType: XA
  providerType: Atomikos

```
## 商品取模分表-情况3
商品表product，如果在3307添加商品数据，数据会添加到product_0和product_1中，这个时候，如果查询商品数据并发量比较大，超过了单个数据处理最高处理能力，就会出现数据库压力过大，导致数据库性能下降或者宕机的问题。如何解决数据库性能或者宕机问题？   

方案：使用读写分离   

如何使用读写分离   
条件：

1、数据库集群，一主两从   

目标：将product表分成product_0和product_1   

步骤   

1、先参考文档搭建mysql集群  [Mysql8.0 centos stream 9](/technology/mysql/09mysql_centos.md)    

2、进入apache-shardingsphere-5.4.0-shardingsphere-proxy-bin配置文件config-sharding.yaml中   

```bash 
# 3、创建客户端连接库
databaseName: ebusiness
#
dataSources:
  write_ds:
    url: jdbc:mysql://192.168.1.46:3307/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_0:
    url: jdbc:mysql://192.168.1.46:3308/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_1:
    url: jdbc:mysql://192.168.1.46:3309/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
# 2、分片规则
rules:
- !READWRITE_SPLITTING
  dataSources:
    readwrite_ds:
      writeDataSourceName: write_ds
      readDataSourceNames:
        - read_ds_0
        - read_ds_1
      loadBalancerName: random  # 负载均衡算法名称
      transactionalReadQueryStrategy: PRIMARY
  # 负载均衡算法配置
  loadBalancers:
    random:  # 负载均衡算法名称
      type: RANDOM
      props:
- !SHARDING
  tables:
    product:
      actualDataNodes: write_ds.product_${0..1}
      tableStrategy:
        standard:
          shardingColumn: ProductId
          shardingAlgorithmName: product_MOD
      #开启 雪花算法生成id ,适用分步式部署
      keyGenerateStrategy:
        column: Id
        keyGeneratorName: snowflake
  shardingAlgorithms:
    product_MOD:
      type: INLINE
      props:
        algorithm-expression: product_${ProductId % 2}
        
  keyGenerators:
    snowflake:
      type: SNOWFLAKE
      props:
        worker-id: 123

```

分库分表
```yaml
# 3、创建客户端连接库
databaseName: ebusiness
#
dataSources:
  write_ds:
    url: jdbc:mysql://192.168.1.46:3307/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_0:
    url: jdbc:mysql://192.168.1.46:3308/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_1:
    url: jdbc:mysql://192.168.1.46:3309/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  write_ds_0:
    url: jdbc:mysql://192.168.1.46:3307/ebusiness_0?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_0_0:
    url: jdbc:mysql://192.168.1.46:3308/ebusiness_0?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_0_1:
    url: jdbc:mysql://192.168.1.46:3309/ebusiness_0?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  write_ds_1:
    url: jdbc:mysql://192.168.1.46:3307/ebusiness_1?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_1_0:
    url: jdbc:mysql://192.168.1.46:3308/ebusiness_1?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_1_1:
    url: jdbc:mysql://192.168.1.46:3309/ebusiness_1?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
# 2、分片规则
rules:
- !READWRITE_SPLITTING
  dataSources:
    readwrite_ds:
      writeDataSourceName: write_ds
      readDataSourceNames:
        - read_ds_0
        - read_ds_1
      loadBalancerName: loadBalancer_round_robin  # 负载均衡算法名称

    readwrite_ds1:
      writeDataSourceName: write_ds_0
      readDataSourceNames:
        - read_ds_0_0
        - read_ds_0_1
      loadBalancerName: loadBalancer_round_robin  # 负载均衡算法名称
    readwrite_ds2:
      writeDataSourceName: write_ds_1
      readDataSourceNames:
        - read_ds_1_0
        - read_ds_1_1
      loadBalancerName: loadBalancer_round_robin  # 负载均衡算法名称
     # transactionalReadQueryStrategy: PRIMARY
  # 负载均衡算法配置
  loadBalancers:
    loadBalancer_round_robin:  # 负载均衡算法名称
      type: ROUND_ROBIN #RANDOM
      #props:
- !SHARDING
  tables:
    product:
      #actualDataNodes: write_ds.product_${0..1}  #  分表
      actualDataNodes: write_ds_${0..1}.product_${0..1} #分库
      tableStrategy:
        standard:
          shardingColumn: ProductId
          shardingAlgorithmName: product_MOD
      databaseStrategy:
        standard:
          shardingColumn: ProductId
          shardingAlgorithmName: write_ds__MOD  
      #开启 雪花算法生成id ,适用分步式部署
      keyGenerateStrategy:
        column: Id
        keyGeneratorName: snowflake
  shardingAlgorithms:
    product_MOD:
      type: INLINE
      props:
        algorithm-expression: product_${ProductId % 2}
    write_ds__MOD:
      type: INLINE
      props:
        algorithm-expression: write_ds_${ProductId % 2}    
  keyGenerators:
    snowflake:
      type: SNOWFLAKE
      props:
        worker-id: 123
```

### 商品图片表场景落地

商品表product使用Id作为自增主键，如果在3307添加商品数据，数据会添加到product_0和product_1中，这个时候，我们想对商品图片表进行分表，应该如何实现？   

条件：  

1、ebusinesss库  

2、productimage表  

目标：将productimage表分成productimage_0和productimage_1   

步骤  

1、先在MySQL中使用客户端创建ebusinesss数据库   

2、然后在ebusinesss数据库中使用脚本创建创建productimage表  

```sql
CREATE TABLE `productimage` (
	`Id` char(100) NOT NULL,
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
	INDEX `ProductId` (`ProductId`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
; 
```
### shardingSphere 数据分片规则
```yaml
# 3、创建客户端连接库
databaseName: ebusiness
#
dataSources:
  write_ds:
    url: jdbc:mysql://192.168.1.46:3307/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_0:
    url: jdbc:mysql://192.168.1.46:3308/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_1:
    url: jdbc:mysql://192.168.1.46:3309/ebusiness?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  write_ds_0:
    url: jdbc:mysql://192.168.1.46:3307/ebusiness_0?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_0_0:
    url: jdbc:mysql://192.168.1.46:3308/ebusiness_0?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_0_1:
    url: jdbc:mysql://192.168.1.46:3309/ebusiness_0?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  write_ds_1:
    url: jdbc:mysql://192.168.1.46:3307/ebusiness_1?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_1_0:
    url: jdbc:mysql://192.168.1.46:3308/ebusiness_1?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
  read_ds_1_1:
    url: jdbc:mysql://192.168.1.46:3309/ebusiness_1?serverTimezone=UTC&useSSL=false
    username: root
    password: skceDB123
    connectionTimeoutMilliseconds: 30000
    idleTimeoutMilliseconds: 60000
    maxLifetimeMilliseconds: 1800000
    maxPoolSize: 50
    minPoolSize: 1
# 2、分片规则
rules:
- !READWRITE_SPLITTING
  dataSources:
    readwrite_ds:
      writeDataSourceName: write_ds
      readDataSourceNames:
        - read_ds_0
        - read_ds_1
      loadBalancerName: loadBalancer_round_robin  # 负载均衡算法名称

    readwrite_ds1:
      writeDataSourceName: write_ds_0
      readDataSourceNames:
        - read_ds_0_0
        - read_ds_0_1
      loadBalancerName: loadBalancer_round_robin  # 负载均衡算法名称
    readwrite_ds2:
      writeDataSourceName: write_ds_1
      readDataSourceNames:
        - read_ds_1_0
        - read_ds_1_1
      loadBalancerName: loadBalancer_round_robin  # 负载均衡算法名称
     # transactionalReadQueryStrategy: PRIMARY
  # 负载均衡算法配置
  loadBalancers:
    loadBalancer_round_robin:  # 负载均衡算法名称
      type: ROUND_ROBIN #RANDOM
      #props:
- !SHARDING
  tables:
    product:
      #actualDataNodes: write_ds.product_${0..1}  #  分表
      actualDataNodes: write_ds_${0..1}.product_${0..1} #分库
      tableStrategy:
        standard:
          #shardingColumn: ProductId
          #shardingAlgorithmName: product_MOD
          #shardingColumn: SeckillName
          #shardingAlgorithmName: product_HASH_MOD
          #shardingColumn: ProductId
          #shardingAlgorithmName: product_BOUNDARY_RANGE
          #shardingColumn: ProductId
          #shardingAlgorithmName: product_VOLUME_RANGE
          shardingColumn: CreateTime
          shardingAlgorithmName: product_AUTO_INTERVAL
      databaseStrategy:
        standard:
          shardingColumn: TimeId
          shardingAlgorithmName: write_ds__MOD  
      #开启 雪花算法生成id ,适用分步式部署
      keyGenerateStrategy:
        column: Id
        keyGeneratorName: snowflake
    productimage:
      #actualDataNodes: write_ds.product_${0..1}  #  分表
      actualDataNodes: write_ds_${0..1}.productimage_${0..1} #分库
      tableStrategy:
        standard:
          shardingColumn: ProductId
          shardingAlgorithmName: productimage_MOD
      databaseStrategy:
        standard:
          shardingColumn: TimeId
          shardingAlgorithmName: write_ds__MOD  
      #开启 雪花算法生成id ,适用分步式部署
      keyGenerateStrategy:
        column: Id
        keyGeneratorName: snowflake

  shardingAlgorithms:
    product_MOD:
      type: INLINE
      props:
        algorithm-expression: product_${ProductId % 2}
    write_ds__MOD:
      type: INLINE
      props:
        algorithm-expression: write_ds_${TimeId % 2}  
    productimage_MOD:
      type: INLINE
      props:
        algorithm-expression: productimage_${ProductId % 2}
    product_VOLUME_RANGE:
      type: VOLUME_RANGE
      props:
        range-lower: '5'
        range-upper: '10'
        #分片的区间的数据的间隔
        sharding-volume: '5'
    product_AUTO_INTERVAL:
      type: AUTO_INTERVAL
      props:
        datetime-lower: '2023-03-01 23:59:59'
        datetime-upper: '2023-04-01 23:59:59'
        #以1年度为单位进行划分
        #sharding-seconds: '31536000'
        #以1个月为单位进行划分
        #sharding-seconds: '2678400'
        #以1天为单位进行划分
        sharding-seconds: '86400'
  #解决迪卡数据重复的问题      
  bindingTables:
     - product,productimage
  # 默认不分表
  defaultTableStrategy:
     none:
  keyGenerators:
    snowflake:
      type: SNOWFLAKE
      props:
        worker-id: 123
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


