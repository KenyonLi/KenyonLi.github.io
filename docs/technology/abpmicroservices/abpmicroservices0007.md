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

### 什么是链路  
链路：请求执行的路径的集合  
如图所示：

![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0001image.png)   

客户端发起一个请求，这个请求需要执行微服务1，然后执行微服务2，然后执行微服务3    
微服务1，微服务2，微服务3组成3条路径，这3个路径集合就是一个链路。
#### 什么是链路监控  
链路监控：就是监控一个请求的所有执行路径。  
主要是监控执行路径的时间。用来得到每一个执行路径的性能。方便做性能优化。   

## 电商微服务中为什么要使用链路监控
## 电商微服务
目前：电商微服务状态如图所示


![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0002image.png)   


目前完成查询订单，执行路径如下：

客户端——>API外部网关——>consul——>订单详情聚合服务——>API内部网关——>consul——>订单微服务——>数据库   

完成订单查询，整体上需要7个流程。   

完成订单查询后，会有一个执行时间。   
如果执行为3s,我们可能会思考，为什么查询一个订单，需要花费3s时间。是什么原因导致查询订单需要花费3s?这个时候，我们就陷入了性能瓶颈中，为了弄
清楚原因，我们必须知道7个流程中的每一个流程执行时间，我们才能找到原因。    
如何知道每一个流程的执行时间呢？   
所以：我们就需要使用链路监控   

### 电商微服务-链路监控   
电商微服务中，集成链路监控如图所示：

![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0003image.png)   


在电商微服务系统中，集成链路监控，主要就是为了在查询订单时候，执行7个流程中，每一个流程执行的时间。   

### 电商微服务系统中落地链路监控   
#### 链路监控技术选项   

目前一些主流的链路监控工具，如表所示：   


|维度       |           Cat         |	      Zipkin         |	       PinPoint        |   Skywalking   |
|--- |--- |---        |---        |---          |
|实现方式   |代码埋点（拦截器，注解，过滤器等）|	拦截请求，发送（HTTP，MQ）数据至Zipkin服务|	Java探针，字节码增强|	Java探针，字节码增强|
|接入方式	|代码侵入	|基于Linkerd或者Sleuth方式，引入配置即可|	JavaAgent字节码，高并发情况下，代理对吞吐量的影响比skywalking和zipkin都大|JavaAgent字节码，支持20+的中间件、框架、类库|
|agent到collector的协议|http/tcp|	http,MQ|	thrift|	gRPC|
|可扩展性|	水平扩展服务端|	多个zipkin-Server实例进行异步消费mq中的监控信息	|collector+web+agent+存储，使得能够水平扩展以便支持大规模服务器集群。|	OAP（skywalking6.x才有OAP这个概念，skywalking5.x叫collector）+Web+agent+存储+zk，使得能够水平扩展以便支持大规模服务器集群。|
|数据存储|	Mysql,Hdfs|	ES，mysql,Cassandra|	Hbase(RowKey精确查找，SCAN范围查找，全表扫描),Mysql	|ES，H2，Mysql，TiDB，Sharding-Sphere|
|分析粒度|	代码级，全局调用统计，报警，JVM监控|	接口级，支持traceid查询|	方法级，全局调用统计、报警|	方法级，全局调用统计、traceid查询，报警，JVM监控|
|调用链可视化|	有|	有	|有	|有|
|报表	|丰富	|少	|中|	中|
|调用链应用拓扑|简单，仅限于服务与服务之间	|简单，仅限于服务与服务之间|	好	|好|
|埋点方式|	侵入|	侵入|	无侵入|	无侵入|
|Heartbeat支持|	有|	无|	有|	有|
|Metric支持|	有	|无	|无|	有|
|是否支持webflux|	否	|是	|是	|是|
|客户端支持	|Java、C/C++、Node.js、Python	|java	|Java,php|	Java, C#, PHP, Node.js, Go|
|中文支持|	好	|无	|无	|好|
|社区支持|	好|	好|	一般|	好|
|国内案例|	美团、携程、陆金所等等|	京东，阿里定制后不开源|	暂无|	阿里，小米，滴滴，华为、当当等等|
|社区活跃度（截止2020-2）|	12.7k	|12.5k|	9.9k	|12.3k|
|社区活跃度（截止2019-12	|12.3K	|12.2K	|	11.8K|
|社区活跃度（截止2018-5）|	4.9k|	8.4k|	5.9k	|3.3k|



## 电商微服务系统中落地SkyWalking

基础前提  

1、电商微服务系统  
2、jdk 1.8  
3、elasticesearch-7.10.1  
4、apache-skywalking-apm-bin-es7


### 电商微服务系统准备

电商微服务系统如图所示：

![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0004image.png)   

电商微服务目前由聚合层，框架基础设施层，网关层，微服务层组成

#### jdk 准备
1、jdk1.8下载地址：https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html

​ 2、jdk1.8安装：直接搜索安装

#### elasticsearch准备
​ 1、下载地址：https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-10-0

​ 2、文档地址：https://www.elastic.co/guide/en/elasticsearch/reference/7.10/index.html
 
 3、Elasticsearch安装
  [参考分布式中间件-ElasticSearch 安装](../elasticsearch/elasticsearch001.md)    

  4、Elasticsearch启动，如图所示：
### apache-skywalking-apm-bin-es7准备
 1、下载地址：https://archive.apache.org/dist/skywalking/8.7.0/apache-skywalking-apm-es7-8.7.0.tar.gz
​ 如图所示：

![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0005image.png)   


## 电商微服务系统SkyWalking集成架构

![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0006image.png)   


### 链路监控基本角色：

1、 Agent

​ SkyWalking客户端，具体就是每一个微服务或网关项目

2、Collecter

​ SkyWalking收集器，用来收集微服务发送的时间数据

3、Storage

​ SkyWalking存储器(就是ElasticSearch)，存储Storage发送的时间数据

4、APM(UI)

SkyWalking显示器，显示ElasticSearch中的时间数据

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

### 订单查询业务场景落地
条件

1、订单微服务链路监控基本角色：

1、 Agent

​ SkyWalking客户端，具体就是每一个微服务或网关项目

2、Collecter

​ SkyWalking收集器，用来收集微服务发送的时间数据

3、Storage

​ SkyWalking存储器(就是ElasticSearch)，存储Storage发送的时间数据

4、APM(UI)

SkyWalking显示器，显示ElasticSearch中的时间数据

### 订单查询业务场景落地
条件

1、订单微服务LKN.Order.HttpApi.Host

2、SkyAPM.Agent.AspNetCore

步骤

1、elasticsearch-7.10.1准备   

​ 1.1、先进入elasticsearch-7.10.1 中bin目录中    
 
 1.2、然后使用cmd通过elasticsearch.bat启动     

 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0007image.png)   


2、apache-skywalking-apm-bin-es7准备    

​ 2.1、先进入apache-skywalking-apm-bin-es7 中config目录中    

​ 如图所示：
 
 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0008image.png)   

 2.2、然后进入application.yml文件中，修改配置，代码如下
 ``` yml
 core:
  selector: ${SW_CORE:default}
  default:
    # Mixed: Receive agent data, Level 1 aggregate, Level 2 aggregate
    # Receiver: Receive agent data, Level 1 aggregate
    # Aggregator: Level 2 aggregate
    role: ${SW_CORE_ROLE:Mixed} # Mixed/Receiver/Aggregator
    restHost: ${SW_CORE_REST_HOST:0.0.0.0}
    restPort: ${SW_CORE_REST_PORT:12800}
    restContextPath: ${SW_CORE_REST_CONTEXT_PATH:/}
    restMinThreads: ${SW_CORE_REST_JETTY_MIN_THREADS:1}
    restMaxThreads: ${SW_CORE_REST_JETTY_MAX_THREADS:200}
    restIdleTimeOut: ${SW_CORE_REST_JETTY_IDLE_TIMEOUT:30000}
    restAcceptorPriorityDelta: ${SW_CORE_REST_JETTY_DELTA:0}
    restAcceptQueueSize: ${SW_CORE_REST_JETTY_QUEUE_SIZE:0}
    httpMaxRequestHeaderSize: ${SW_CORE_HTTP_MAX_REQUEST_HEADER_SIZE:8192}
    gRPCHost: ${SW_CORE_GRPC_HOST:0.0.0.0}
    gRPCPort: ${SW_CORE_GRPC_PORT:11800}
    maxConcurrentCallsPerConnection: ${SW_CORE_GRPC_MAX_CONCURRENT_CALL:0}
    maxMessageSize: ${SW_CORE_GRPC_MAX_MESSAGE_SIZE:0}
    gRPCThreadPoolQueueSize: ${SW_CORE_GRPC_POOL_QUEUE_SIZE:-1}
    gRPCThreadPoolSize: ${SW_CORE_GRPC_THREAD_POOL_SIZE:-1}
    gRPCSslEnabled: ${SW_CORE_GRPC_SSL_ENABLED:false}
    gRPCSslKeyPath: ${SW_CORE_GRPC_SSL_KEY_PATH:""}
    gRPCSslCertChainPath: ${SW_CORE_GRPC_SSL_CERT_CHAIN_PATH:""}
    gRPCSslTrustedCAPath: ${SW_CORE_GRPC_SSL_TRUSTED_CA_PATH:""}
    downsampling:
      - Hour
      - Day
    # Set a timeout on metrics data. After the timeout has expired, the metrics data will automatically be deleted.
    enableDataKeeperExecutor: ${SW_CORE_ENABLE_DATA_KEEPER_EXECUTOR:true} # Turn it off then automatically metrics data delete will be close.
    dataKeeperExecutePeriod: ${SW_CORE_DATA_KEEPER_EXECUTE_PERIOD:5} # How often the data keeper executor runs periodically, unit is minute
    recordDataTTL: ${SW_CORE_RECORD_DATA_TTL:3} # Unit is day
    metricsDataTTL: ${SW_CORE_METRICS_DATA_TTL:7} # Unit is day
    # The period of L1 aggregation flush to L2 aggregation. Unit is ms.
    l1FlushPeriod: ${SW_CORE_L1_AGGREGATION_FLUSH_PERIOD:500}
    # The threshold of session time. Unit is ms. Default value is 70s.
    storageSessionTimeout: ${SW_CORE_STORAGE_SESSION_TIMEOUT:70000}
    # Cache metrics data for 1 minute to reduce database queries, and if the OAP cluster changes within that minute,
    # the metrics may not be accurate within that minute.
    enableDatabaseSession: ${SW_CORE_ENABLE_DATABASE_SESSION:true}
    topNReportPeriod: ${SW_CORE_TOPN_REPORT_PERIOD:10} # top_n record worker report cycle, unit is minute
    # Extra model column are the column defined by in the codes, These columns of model are not required logically in aggregation or further query,
    # and it will cause more load for memory, network of OAP and storage.
    # But, being activated, user could see the name in the storage entities, which make users easier to use 3rd party tool, such as Kibana->ES, to query the data by themselves.
    activeExtraModelColumns: ${SW_CORE_ACTIVE_EXTRA_MODEL_COLUMNS:false}
    # The max length of service + instance names should be less than 200
    serviceNameMaxLength: ${SW_SERVICE_NAME_MAX_LENGTH:70}
    instanceNameMaxLength: ${SW_INSTANCE_NAME_MAX_LENGTH:70}
    # The max length of service + endpoint names should be less than 240
    endpointNameMaxLength: ${SW_ENDPOINT_NAME_MAX_LENGTH:150}
    # Define the set of span tag keys, which should be searchable through the GraphQL.
    searchableTracesTags: ${SW_SEARCHABLE_TAG_KEYS:http.method,status_code,db.type,db.instance,mq.queue,mq.topic,mq.broker}
    # Define the set of log tag keys, which should be searchable through the GraphQL.
    searchableLogsTags: ${SW_SEARCHABLE_LOGS_TAG_KEYS:level}
    # Define the set of alarm tag keys, which should be searchable through the GraphQL.
    searchableAlarmTags: ${SW_SEARCHABLE_ALARM_TAG_KEYS:level}
    # The number of threads used to prepare metrics data to the storage.
    prepareThreads: ${SW_CORE_PREPARE_THREADS:2}
    # Turn it on then automatically grouping endpoint by the given OpenAPI definitions.
    enableEndpointNameGroupingByOpenapi: ${SW_CORE_ENABLE_ENDPOINT_NAME_GROUPING_BY_OPAENAPI:true}
storage:
  selector: ${SW_STORAGE:elasticsearch7}
  elasticsearch:
    nameSpace: ${SW_NAMESPACE:""}
    clusterNodes: ${SW_STORAGE_ES_CLUSTER_NODES:localhost:9200}
    protocol: ${SW_STORAGE_ES_HTTP_PROTOCOL:"http"}
    connectTimeout: ${SW_STORAGE_ES_CONNECT_TIMEOUT:500}
    socketTimeout: ${SW_STORAGE_ES_SOCKET_TIMEOUT:30000}
    user: ${SW_ES_USER:""}
    password: ${SW_ES_PASSWORD:""}
    trustStorePath: ${SW_STORAGE_ES_SSL_JKS_PATH:""}
    trustStorePass: ${SW_STORAGE_ES_SSL_JKS_PASS:""}
    secretsManagementFile: ${SW_ES_SECRETS_MANAGEMENT_FILE:""} # Secrets management file in the properties format includes the username, password, which are managed by 3rd party tool.
    dayStep: ${SW_STORAGE_DAY_STEP:1} # Represent the number of days in the one minute/hour/day index.
    indexShardsNumber: ${SW_STORAGE_ES_INDEX_SHARDS_NUMBER:1} # Shard number of new indexes
    indexReplicasNumber: ${SW_STORAGE_ES_INDEX_REPLICAS_NUMBER:1} # Replicas number of new indexes
    # Super data set has been defined in the codes, such as trace segments.The following 3 config would be improve es performance when storage super size data in es.
    superDatasetDayStep: ${SW_SUPERDATASET_STORAGE_DAY_STEP:-1} # Represent the number of days in the super size dataset record index, the default value is the same as dayStep when the value is less than 0
    superDatasetIndexShardsFactor: ${SW_STORAGE_ES_SUPER_DATASET_INDEX_SHARDS_FACTOR:5} #  This factor provides more shards for the super data set, shards number = indexShardsNumber * superDatasetIndexShardsFactor. Also, this factor effects Zipkin and Jaeger traces.
    superDatasetIndexReplicasNumber: ${SW_STORAGE_ES_SUPER_DATASET_INDEX_REPLICAS_NUMBER:0} # Represent the replicas number in the super size dataset record index, the default value is 0.
    indexTemplateOrder: ${SW_STORAGE_ES_INDEX_TEMPLATE_ORDER:0} # the order of index template
    bulkActions: ${SW_STORAGE_ES_BULK_ACTIONS:5000} # Execute the async bulk record data every ${SW_STORAGE_ES_BULK_ACTIONS} requests
    # flush the bulk every 10 seconds whatever the number of requests
    # INT(flushInterval * 2/3) would be used for index refresh period.
    flushInterval: ${SW_STORAGE_ES_FLUSH_INTERVAL:15}
    concurrentRequests: ${SW_STORAGE_ES_CONCURRENT_REQUESTS:2} # the number of concurrent requests
    resultWindowMaxSize: ${SW_STORAGE_ES_QUERY_MAX_WINDOW_SIZE:10000}
    metadataQueryMaxSize: ${SW_STORAGE_ES_QUERY_MAX_SIZE:5000}
    segmentQueryMaxSize: ${SW_STORAGE_ES_QUERY_SEGMENT_SIZE:200}
    profileTaskQueryMaxSize: ${SW_STORAGE_ES_QUERY_PROFILE_TASK_SIZE:200}
    oapAnalyzer: ${SW_STORAGE_ES_OAP_ANALYZER:"{\"analyzer\":{\"oap_analyzer\":{\"type\":\"stop\"}}}"} # the oap analyzer.
    oapLogAnalyzer: ${SW_STORAGE_ES_OAP_LOG_ANALYZER:"{\"analyzer\":{\"oap_log_analyzer\":{\"type\":\"standard\"}}}"} # the oap log analyzer. It could be customized by the ES analyzer configuration to support more language log formats, such as Chinese log, Japanese log and etc.
    advanced: ${SW_STORAGE_ES_ADVANCED:""}
  elasticsearch7:
    nameSpace: ${SW_NAMESPACE:""}
    clusterNodes: ${SW_STORAGE_ES_CLUSTER_NODES:localhost:9200}
    protocol: ${SW_STORAGE_ES_HTTP_PROTOCOL:"http"}
    connectTimeout: ${SW_STORAGE_ES_CONNECT_TIMEOUT:500}
    socketTimeout: ${SW_STORAGE_ES_SOCKET_TIMEOUT:30000}
    trustStorePath: ${SW_STORAGE_ES_SSL_JKS_PATH:""}
    trustStorePass: ${SW_STORAGE_ES_SSL_JKS_PASS:""}
    dayStep: ${SW_STORAGE_DAY_STEP:1} # Represent the number of days in the one minute/hour/day index.
    indexShardsNumber: ${SW_STORAGE_ES_INDEX_SHARDS_NUMBER:1} # Shard number of new indexes
    indexReplicasNumber: ${SW_STORAGE_ES_INDEX_REPLICAS_NUMBER:1} # Replicas number of new indexes
    # Super data set has been defined in the codes, such as trace segments.The following 3 config would be improve es performance when storage super size data in es.
    superDatasetDayStep: ${SW_SUPERDATASET_STORAGE_DAY_STEP:-1} # Represent the number of days in the super size dataset record index, the default value is the same as dayStep when the value is less than 0
    superDatasetIndexShardsFactor: ${SW_STORAGE_ES_SUPER_DATASET_INDEX_SHARDS_FACTOR:5} #  This factor provides more shards for the super data set, shards number = indexShardsNumber * superDatasetIndexShardsFactor. Also, this factor effects Zipkin and Jaeger traces.
    superDatasetIndexReplicasNumber: ${SW_STORAGE_ES_SUPER_DATASET_INDEX_REPLICAS_NUMBER:0} # Represent the replicas number in the super size dataset record index, the default value is 0.
    indexTemplateOrder: ${SW_STORAGE_ES_INDEX_TEMPLATE_ORDER:0} # the order of index template
    user: ${SW_ES_USER:""}
    password: ${SW_ES_PASSWORD:""}
    secretsManagementFile: ${SW_ES_SECRETS_MANAGEMENT_FILE:""} # Secrets management file in the properties format includes the username, password, which are managed by 3rd party tool.
    bulkActions: ${SW_STORAGE_ES_BULK_ACTIONS:5000} # Execute the async bulk record data every ${SW_STORAGE_ES_BULK_ACTIONS} requests
    # flush the bulk every 10 seconds whatever the number of requests
    # INT(flushInterval * 2/3) would be used for index refresh period.
    flushInterval: ${SW_STORAGE_ES_FLUSH_INTERVAL:15}
    concurrentRequests: ${SW_STORAGE_ES_CONCURRENT_REQUESTS:2} # the number of concurrent requests
    resultWindowMaxSize: ${SW_STORAGE_ES_QUERY_MAX_WINDOW_SIZE:10000}
    metadataQueryMaxSize: ${SW_STORAGE_ES_QUERY_MAX_SIZE:5000}
    segmentQueryMaxSize: ${SW_STORAGE_ES_QUERY_SEGMENT_SIZE:200}
    profileTaskQueryMaxSize: ${SW_STORAGE_ES_QUERY_PROFILE_TASK_SIZE:200}
    oapAnalyzer: ${SW_STORAGE_ES_OAP_ANALYZER:"{\"analyzer\":{\"oap_analyzer\":{\"type\":\"stop\"}}}"} # the oap analyzer.
    oapLogAnalyzer: ${SW_STORAGE_ES_OAP_LOG_ANALYZER:"{\"analyzer\":{\"oap_log_analyzer\":{\"type\":\"standard\"}}}"} # the oap log analyzer. It could be customized by the ES analyzer configuration to support more language log formats, such as Chinese log, Japanese log and etc.
    advanced: ${SW_STORAGE_ES_ADVANCED:""}

  h2:
    driver: ${SW_STORAGE_H2_DRIVER:org.h2.jdbcx.JdbcDataSource}
    url: ${SW_STORAGE_H2_URL:jdbc:h2:mem:skywalking-oap-db;DB_CLOSE_DELAY=-1}
    user: ${SW_STORAGE_H2_USER:sa}
    metadataQueryMaxSize: ${SW_STORAGE_H2_QUERY_MAX_SIZE:5000}
    maxSizeOfArrayColumn: ${SW_STORAGE_MAX_SIZE_OF_ARRAY_COLUMN:20}
    numOfSearchableValuesPerTag: ${SW_STORAGE_NUM_OF_SEARCHABLE_VALUES_PER_TAG:2}
  mysql:
    properties:
      jdbcUrl: ${SW_JDBC_URL:"jdbc:mysql://localhost:3306/swtest"}
      dataSource.user: ${SW_DATA_SOURCE_USER:root}
      dataSource.password: ${SW_DATA_SOURCE_PASSWORD:root@1234}
      dataSource.cachePrepStmts: ${SW_DATA_SOURCE_CACHE_PREP_STMTS:true}
      dataSource.prepStmtCacheSize: ${SW_DATA_SOURCE_PREP_STMT_CACHE_SQL_SIZE:250}
      dataSource.prepStmtCacheSqlLimit: ${SW_DATA_SOURCE_PREP_STMT_CACHE_SQL_LIMIT:2048}
      dataSource.useServerPrepStmts: ${SW_DATA_SOURCE_USE_SERVER_PREP_STMTS:true}
    metadataQueryMaxSize: ${SW_STORAGE_MYSQL_QUERY_MAX_SIZE:5000}
    maxSizeOfArrayColumn: ${SW_STORAGE_MAX_SIZE_OF_ARRAY_COLUMN:20}
    numOfSearchableValuesPerTag: ${SW_STORAGE_NUM_OF_SEARCHABLE_VALUES_PER_TAG:2}
  tidb:
    properties:
      jdbcUrl: ${SW_JDBC_URL:"jdbc:mysql://localhost:4000/tidbswtest"}
      dataSource.user: ${SW_DATA_SOURCE_USER:root}
      dataSource.password: ${SW_DATA_SOURCE_PASSWORD:""}
      dataSource.cachePrepStmts: ${SW_DATA_SOURCE_CACHE_PREP_STMTS:true}
      dataSource.prepStmtCacheSize: ${SW_DATA_SOURCE_PREP_STMT_CACHE_SQL_SIZE:250}
      dataSource.prepStmtCacheSqlLimit: ${SW_DATA_SOURCE_PREP_STMT_CACHE_SQL_LIMIT:2048}
      dataSource.useServerPrepStmts: ${SW_DATA_SOURCE_USE_SERVER_PREP_STMTS:true}
      dataSource.useAffectedRows: ${SW_DATA_SOURCE_USE_AFFECTED_ROWS:true}
    metadataQueryMaxSize: ${SW_STORAGE_MYSQL_QUERY_MAX_SIZE:5000}
    maxSizeOfArrayColumn: ${SW_STORAGE_MAX_SIZE_OF_ARRAY_COLUMN:20}
    numOfSearchableValuesPerTag: ${SW_STORAGE_NUM_OF_SEARCHABLE_VALUES_PER_TAG:2}
  influxdb:
    # InfluxDB configuration
    url: ${SW_STORAGE_INFLUXDB_URL:http://localhost:8086}
    user: ${SW_STORAGE_INFLUXDB_USER:root}
    password: ${SW_STORAGE_INFLUXDB_PASSWORD:}
    database: ${SW_STORAGE_INFLUXDB_DATABASE:skywalking}
    actions: ${SW_STORAGE_INFLUXDB_ACTIONS:1000} # the number of actions to collect
    duration: ${SW_STORAGE_INFLUXDB_DURATION:1000} # the time to wait at most (milliseconds)
    batchEnabled: ${SW_STORAGE_INFLUXDB_BATCH_ENABLED:true}
    fetchTaskLogMaxSize: ${SW_STORAGE_INFLUXDB_FETCH_TASK_LOG_MAX_SIZE:5000} # the max number of fetch task log in a request
    connectionResponseFormat: ${SW_STORAGE_INFLUXDB_CONNECTION_RESPONSE_FORMAT:MSGPACK} # the response format of connection to influxDB, cannot be anything but MSGPACK or JSON.
  postgresql:
    properties:
      jdbcUrl: ${SW_JDBC_URL:"jdbc:postgresql://localhost:5432/skywalking"}
      dataSource.user: ${SW_DATA_SOURCE_USER:postgres}
      dataSource.password: ${SW_DATA_SOURCE_PASSWORD:123456}
      dataSource.cachePrepStmts: ${SW_DATA_SOURCE_CACHE_PREP_STMTS:true}
      dataSource.prepStmtCacheSize: ${SW_DATA_SOURCE_PREP_STMT_CACHE_SQL_SIZE:250}
      dataSource.prepStmtCacheSqlLimit: ${SW_DATA_SOURCE_PREP_STMT_CACHE_SQL_LIMIT:2048}
      dataSource.useServerPrepStmts: ${SW_DATA_SOURCE_USE_SERVER_PREP_STMTS:true}
    metadataQueryMaxSize: ${SW_STORAGE_MYSQL_QUERY_MAX_SIZE:5000}
    maxSizeOfArrayColumn: ${SW_STORAGE_MAX_SIZE_OF_ARRAY_COLUMN:20}
    numOfSearchableValuesPerTag: ${SW_STORAGE_NUM_OF_SEARCHABLE_VALUES_PER_TAG:2}
  zipkin-elasticsearch7:
    nameSpace: ${SW_NAMESPACE:""}
    clusterNodes: ${SW_STORAGE_ES_CLUSTER_NODES:localhost:9200}
    protocol: ${SW_STORAGE_ES_HTTP_PROTOCOL:"http"}
    trustStorePath: ${SW_STORAGE_ES_SSL_JKS_PATH:""}
    trustStorePass: ${SW_STORAGE_ES_SSL_JKS_PASS:""}
    dayStep: ${SW_STORAGE_DAY_STEP:1} # Represent the number of days in the one minute/hour/day index.
    indexShardsNumber: ${SW_STORAGE_ES_INDEX_SHARDS_NUMBER:1} # Shard number of new indexes
    indexReplicasNumber: ${SW_STORAGE_ES_INDEX_REPLICAS_NUMBER:1} # Replicas number of new indexes
    # Super data set has been defined in the codes, such as trace segments.The following 3 config would be improve es performance when storage super size data in es.
    superDatasetDayStep: ${SW_SUPERDATASET_STORAGE_DAY_STEP:-1} # Represent the number of days in the super size dataset record index, the default value is the same as dayStep when the value is less than 0
    superDatasetIndexShardsFactor: ${SW_STORAGE_ES_SUPER_DATASET_INDEX_SHARDS_FACTOR:5} #  This factor provides more shards for the super data set, shards number = indexShardsNumber * superDatasetIndexShardsFactor. Also, this factor effects Zipkin and Jaeger traces.
    superDatasetIndexReplicasNumber: ${SW_STORAGE_ES_SUPER_DATASET_INDEX_REPLICAS_NUMBER:0} # Represent the replicas number in the super size dataset record index, the default value is 0.
    user: ${SW_ES_USER:""}
    password: ${SW_ES_PASSWORD:""}
    secretsManagementFile: ${SW_ES_SECRETS_MANAGEMENT_FILE:""} # Secrets management file in the properties format includes the username, password, which are managed by 3rd party tool.
    bulkActions: ${SW_STORAGE_ES_BULK_ACTIONS:5000} # Execute the async bulk record data every ${SW_STORAGE_ES_BULK_ACTIONS} requests
    # flush the bulk every 10 seconds whatever the number of requests
    # INT(flushInterval * 2/3) would be used for index refresh period.
    flushInterval: ${SW_STORAGE_ES_FLUSH_INTERVAL:15}
    concurrentRequests: ${SW_STORAGE_ES_CONCURRENT_REQUESTS:2} # the number of concurrent requests
    resultWindowMaxSize: ${SW_STORAGE_ES_QUERY_MAX_WINDOW_SIZE:10000}
    metadataQueryMaxSize: ${SW_STORAGE_ES_QUERY_MAX_SIZE:5000}
    segmentQueryMaxSize: ${SW_STORAGE_ES_QUERY_SEGMENT_SIZE:200}
    profileTaskQueryMaxSize: ${SW_STORAGE_ES_QUERY_PROFILE_TASK_SIZE:200}
    oapAnalyzer: ${SW_STORAGE_ES_OAP_ANALYZER:"{\"analyzer\":{\"oap_analyzer\":{\"type\":\"stop\"}}}"} # the oap analyzer.
    oapLogAnalyzer: ${SW_STORAGE_ES_OAP_LOG_ANALYZER:"{\"analyzer\":{\"oap_log_analyzer\":{\"type\":\"standard\"}}}"} # the oap log analyzer. It could be customized by the ES analyzer configuration to support more language log formats, such as Chinese log, Japanese log and etc.
    advanced: ${SW_STORAGE_ES_ADVANCED:""}
 ```


 ##### 核心配置：

​ 1、selector: ${SW_STORAGE:elasticsearch7} 选择elasticsearch7存储
        
​ 2、gRPCHost: ${SW_CORE_GRPC_HOST:0.0.0.0} 数据收集IP
​ gRPCPort: ${SW_CORE_GRPC_PORT:11800}数据收集端口

​ 3、restHost: ${SW_CORE_REST_HOST:0.0.0.0}数据显示IP
restPort: ${SW_CORE_REST_PORT:12800}数据显示端口

2.3、然后进入apache-skywalking-apm-bin-es7中bin目录中

​ 如图所示：
 
 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0009image.png)   

2.4、然后使用oapService.bat启动apache-skywalking-apm-bin-es7
```bash
    oapService.bat
```
​ 如图所示：

 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0010image.png)   


2.5、然后进入apache-skywalking-apm-bin-es7中logs目录中
 
 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0011image.png)   

2.6、然后再logs目录中查看日志文件  

 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0012image.png)   

2.7、然后进入apache-skywalking-apm-bin-es7中webapp目录中  

 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0013image.png)   

2.8、然后在webapp.yml文件中，修改配置内容

``` yml
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

server:
  port: 8080

spring:
  cloud:
    gateway:
      routes:
        - id: oap-route
          uri: lb://oap-service
          predicates:
            - Path=/graphql/**
    discovery:
      client:
        simple:
          instances:
            oap-service:
              - uri: http://127.0.0.1:12800
            # - uri: http://<oap-host-1>:<oap-port1>
            # - uri: http://<oap-host-2>:<oap-port2>

  mvc:
    throw-exception-if-no-handler-found: true

  web:
    resources:
      add-mappings: true

management:
  server:
    base-path: /manage
```


##### 核心配置：

​ 1、server: 
port: 8081 浏览器访问端口

​ 2、- uri: http://127.0.0.1:12800 连接collcetor收集器地址

2.9、然后进入apache-skywalking-apm-bin-es7中bin目录中

如图所示：

 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0014image.png)   

2.10、然后使用webappService.bat启动apache-skywalking-apm-bin-es7   

如图所示：
 
 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0015image.png)   

2.11、然后使用浏览器访问apache-skywalking-apm-bin-es7   

输入地址：http://localhost:8080/

结果如图所示:

 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0016image.png)   



3、LKN.Order.HttpApi.Host准备   

​ 3.1、 先在LKN.Order.HttpApi.Host中通过nuget引入SkyAPM.Agent.AspNetCore   
​ 如图所示：   

 ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0017image.png)   


  3.2、 然后在LKN.Order.HttpApi.Host中找到launchSettings.json文件  

   ![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0018image.png)  

  3.3、 然后在launchSettings.json文件中引入环境变量SkyAPM.Agent.AspNetCore
 主要是在环境变量中添加： “ASPNETCORE_HOSTINGSTARTUPASSEMBLIES”: “SkyAPM.Agent.AspNetCore”
```json
{
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "https://localhost:44392",
      "sslPort": 44392
    }
  },
  "profiles": {
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "LKN.Order.DemoApp": {
      "commandName": "Project",
      "launchBrowser": true,
      "applicationUrl": "https://localhost:44397",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development",
        "ASPNETCORE_HOSTINGSTARTUPASSEMBLIES":"SkyAPM.Agent.AspNetCore"
      }
    }
  }
}
```
    
3.4、 然后在LKN.Order.HttpApi.Host中创建skyapm.json文件  

![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0019image.png)  

3.5、 然后在skyapm.json文件中添加

``` json
{
  "SkyWalking": {
    "ServiceName": "OrderServices",
    "Namespace": "",
    "HeaderVersions": [
      "sw8"
    ],
    "Sampling": {
      "SamplePer3Secs": -1,
      "Percentage": -1.0
    },
    "Logging": {
      "Level": "Information",
      "FilePath": "logs\\skyapm-{Date}.log"
    },
    "Transport": {
      "Interval": 3000,
      "ProtocolVersion": "v8",
      "QueueSize": 30000,
      "BatchSize": 3000,
      "gRPC": {
        "Servers": "localhost:11800",
        "Timeout": 10000,
        "ConnectTimeout": 10000,
        "ReportTimeout": 600000,
        "Authentication": ""
      }
    }
  }
}
```
​ ##### 核心配置：

​ 1、“ServiceName”: “OrderServices”,配置服务名称，用来标识唯一性

​ 2、“Servers”: “localhost:11800”,配置collector收集地址

3.6、 然后启动LKN.Order.HttpApi.Host


3.7、 然后通过浏览器访问LKN.Order.HttpApi.Host

输入地址：https://localhost:44397/swagger/index.html

结果如图所示：
![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0020image.png)  

3.8、 然后查看skywalking UI界面查看仪表盘   

![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0021image.png)  

参数解析

​ 1、OrderServices：代表订单微服务名称   

​ 2、仪表盘：为统计订单微服务微服务数据   

3.9、 然后查看skywalking UI界面查看追踪
![Alt text](/images/abpmicroservices/micro007/abpmicroservices0007_0022image.png)  

参数解析

​ 1、追踪：订单微服务查询订单链路，链路上各路径执行时间    