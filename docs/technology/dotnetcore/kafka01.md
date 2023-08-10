---
title: '分布式中间件-消息中间件Kafka介绍（一）'
date: 2023-08-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '分布式中间件-消息中间件Kafka介绍（一）'
categories:
- 'C#'
---

## 目录
[[toc]]


# 分布式中间件-Kafka

## 什么是Kafka

Kafka是消息队列。简称：MQ。MQ全称为Message Queue, 消息队列（MQ）是一种应用程序对应用程序的通信方法。应用程序通过读写出入队列的消息（针对应用程序的数据）来通信，而无需专用连接来链接它们。消息传递指的是程序之间通过在消息中发送数据进行通信，而不是通过直接调用彼此来通信，直接调用通常是用于诸如远程过程调用的技术。排队指的是应用程序通过 队列来通信。队列的使用除去了接收和发送应用程序同时执行的要求。其中较为成熟的MQ产品有IBM WEBSPHERE MQ等等...

## 什么是消息

消息就是数据，增删改查的数据。例如：订单增删改查的数据

## 什么是队列

队列指：**一端进数据，一端出数据**

## 什么是消息队列

消息队列指：**一端进消息，一端进消息**

## 什么地方使用Kafka

Kafka主要用在分布式系统中，主要是应用在微服务系统中。

## 微服务系统中为什么要使用Kafka

在微服务系统中，微服务之间通信，主要是通过Http或者gRPC通信。由于http/gRPC通信方式是同步通信，如果遇到了高并发，同步通信就会导致微服务系统性能瓶颈，所以，为了解决微服务性能瓶颈问题。需要将同步通信换成异步通信方式。因此。就选用使用消息队列。

消息队列的代表技术，就是Kafka。

在什么样的微服务系统使用Kafka呢？用的比较多的就是电商微服务系统。那么，在电商微服务系统中如何落地Kafka？

业务场景：创建订单业务场景

## 微服务系统中如何落地Kafka

条件

1、电商微服务系统

2、Kafka

3、JDK

步骤

1、电商微服务系统准备  

​      通过nuget创建电商微服务系统  

2、JDK准备  

​	JDK已经上传到百度云盘，百度一下即可安装JDK环境 

2、Kafka准备  

​     2.1 Kafka前提准备

​			Kafka下载地址：https://archive.apache.org/dist/kafka/2.8.1/kafka_2.13-2.8.1.tgz

​     2.2 Kafka运行 

​	    1、先运行zookeeper

```c#
zookeeper-server-start.bat ../../config/zookeeper.properties
```
![Alt text](/images/dotnet/kafka/kafka_001_image.png)
![Alt text](/images/dotnet/kafka/kafka_002_image.png)

​       2、然后启动Kafka

```c#
kafka-server-start.bat ../../config/server.properties
```
![Alt text](/images/dotnet/kafka/kafka_003_image.png)
![Alt text](/images/dotnet/kafka/kafka_004_image.png)
​       3、使用Kafkatool判断kafka是否运行成功

```c#
双击kafkatool.exe
```

![Alt text](/images/dotnet/kafka/kafka_005_image.png)

​        4、查看结果


### 创建订单业务场景落地

条件

1、电商网站微服务

2、订单微服务

3、Confluent.Kafka

步骤

1、添加订单消息到Kafka中

​	 1.1 先在电商网站微服务通过nuget引入

​		   Confluent.Kafka

​     1.2 然后在电商网站微服务中创建OrderController类


​	 1.3、然后在OrderController类添加代码

```c#
 /// <summary>
        /// 创建订单
        /// </summary>
        /// <param name="orderCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public IEnumerable<OrderCreateDto> CreateOrder(OrderCreateDto orderCreateDto)
        {
       		#region 1、生产者 Producer
            {
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = "127.0.0.1:9092",
                    MessageTimeoutMs = 50000,
                    EnableIdempotence = true
                };

                var builder = new ProducerBuilder<string, string>(producerConfig);
                builder.SetDefaultPartitioner(RoundRobinPartitioner);
                using (var producer = builder.Build())
                {
                    try
                    {
                        var dr = producer.ProduceAsync("create-order", new Message<string, string> { Key = "order-1", Value = OrderJson }).GetAwaiter().GetResult();
                        _logger.LogInformation("发送事件 {0} 到 {1} 成功", dr.Value, dr.TopicPartitionOffset);
                    }
                    catch (ProduceException<string, string> ex)
                    {
                        _logger.LogError(ex, "发送事件到 {0} 失败，原因 {1} ", "order", ex.Error.Reason);
                    }
                }
            }
            #endregion
      }  
```

   1.4、然后启动电商网站添加订单消息到Kafka

​	1.5、添加订单消息


2、从Kafka中消费订单消息

​		 1.1 先在订单微服务通过nuget引入

​		    Confluent.Kafka

​     1.2 然后在订单微服务中创建OrderController类


​	 1.3、然后在OrderController类添加代码

```c#
 // <summary>
        /// 创建订单
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<Order> OrderCreate()
        {
            #region 1、工作队列(单消费者) Consumer
            {
                new Task(() =>
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = "127.0.0.1:9092",
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = "order",
                        EnableAutoCommit = false
                    };
                    var builder = new ConsumerBuilder<string, string>(consumerConfig);

                    using (var consumer = builder.Build())
                    {
                        // 1、订阅
                        consumer.Subscribe("create-order");
                        while (true)
                        {
                            try
                            {
                                // 2、消费(自动确认)
                                var result = consumer.Consume();

                                // 3、业务逻辑:业务逻辑---->执行失败--->消息丢失
                                string key = result.Key;
                                string value = result.Value;

                                _logger.LogInformation($"创建订单：Key:{key}");
                                _logger.LogInformation($"创建订单：Order:{value}");
                            }
                            catch (Exception e)
                            {
                                _logger.LogInformation($"异常：Order:{e}");
                            }
                        }
                    }
                }).Start();
            }
            #endregion
        }
```

   1.4、然后启动订单微服务执行监听Kafka

​    1.5、消费订单消息


### 创建订单业务场景落地-情况1

情况1：Kafka给订单微服务发消息期间，订单微服务宕机。导致消息丢失

方案：消息确认机制

#### 如何落地消息确认机制

条件

1、EnableAutoCommit

步骤

1、将订单微服务OrderController EnableAutoCommit修改为true

```c#
// <summary>
        /// 创建订单
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<Order> OrderCreate()
        {
            #region 1、工作队列(单消费者) Consumer
            {
                new Task(() =>
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = "127.0.0.1:9092",
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = "order",
                        EnableAutoCommit = true
                    };
                    var builder = new ConsumerBuilder<string, string>(consumerConfig);

                    using (var consumer = builder.Build())
                    {
                        // 1、订阅
                        consumer.Subscribe("create-order");
                        while (true)
                        {
                            try
                            {
                                // 2、消费(自动确认)
                                var result = consumer.Consume();

                                // 3、业务逻辑:业务逻辑---->执行失败--->消息丢失
                                string key = result.Key;
                                string value = result.Value;

                                _logger.LogInformation($"创建订单：Key:{key}");
                                _logger.LogInformation($"创建订单：Order:{value}");
                            }
                            catch (Exception e)
                            {
                                _logger.LogInformation($"异常：Order:{e}");
                            }
                        }
                    }
                }).Start();
            }
            #endregion
        }
```

### 创建订单业务场景落地-情况2

情况2：Kafka给订单微服务发了消息，订单微服务收到消息。
                订单微服务发送确认消息给Kafka期间。执行业务逻辑失败了。
                导致：消息重复消费

方案：手动确认

#### 如何落地手动确认消息

条件

1、Commit

步骤

1、将订单微服务OrderController 增加consumer.Commit(result);

```c#
// <summary>
        /// 创建订单
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<Order> OrderCreate()
        {
            #region 1、工作队列(单消费者) Consumer
            {
                new Task(() =>
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = "127.0.0.1:9092",
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = "order",
                        EnableAutoCommit = false,
                    };
                    var builder = new ConsumerBuilder<string, string>(consumerConfig);
                    var consumer = builder.Build();
                    // 1、订阅
                    consumer.Subscribe("create-order");
                    while (true)
                    {
                        // 2、消费
                        var result = consumer.Consume();

                        // 3、业务逻辑
                        string key = result.Key;
                        string value = result.Value;

                        _logger.LogInformation($"创建商品：Key:{key}");
                        _logger.LogInformation($"创建商品：Order:{value}");

                        // 3、手动提交（向kafka确认消息）----偏移量---消息的序号
                        consumer.Commit(result);
                    }
                }).Start();
            }
            #endregion
        }
```

### 创建订单业务场景落地-情况3

情况3：Kafka给订单微服务发了消息，订单微服务收到消息。
                订单微服务发送确认消息给Kafka期间。kafka宕机
                导致：消息重复消费

方案：重置偏移量

#### 如何落地重置偏移量

条件

1、redis

2、Microsoft.Extensions.Caching.Redis

2、Offset

步骤

1、先启动redis


2、然后在订单微服务中nuget引入

​	Microsoft.Extensions.Caching.Redis

3、然后在订单微服务Startup中添加

```c#
public void ConfigureServices(IServiceCollection services)
{
        ....
        services.AddDistributedRedisCache(options =>
        {
            options.Configuration = "localhost:6379";
        });
        ...
}
```

4、将订单微服务OrderController 增加Offset存储

```c#
#region 4、工作队列(单消费者)-手动确认消息-偏移量(重复消费)-存储偏移量
{
    new Task(() =>
             {
                 var consumerConfig = new ConsumerConfig
                 {
                     BootstrapServers = "127.0.0.1:9092",
                     AutoOffsetReset = AutoOffsetReset.Earliest,
                     GroupId = "order",
                     EnableAutoCommit = true,
                 };
                 var builder = new ConsumerBuilder<string, string>(consumerConfig);
                 using (var consumer = builder.Build())
                 {
                     // 1、订阅
                     consumer.Subscribe("create-order");

                     // 1.2、获取偏移量
                     string offset = distributedCache.GetString("create-order");
                     if (string.IsNullOrEmpty(offset))
                     {
                         offset = "0";
                     }

                     // 1.3、重置偏移量
                     consumer.Assign(new TopicPartitionOffset(new TopicPartition("create-order", 0), int.Parse(offset) + 1));
                     while (true)
                     {
                         // 2、消费
                         var result = consumer.Consume();

                         // 2.1、获取偏移量
                         _logger.LogInformation($"订单消息偏移量：Offset:{result.Offset}");
                         // 2.2、把kafka队列中偏移量存起来。redis mysql
                         // 2.3、重置kafka队列的偏移量
                         distributedCache.SetString("create-order", result.Offset.Value.ToString());

                         // 3、业务处理
                         string key = result.Key;
                         string value = result.Value;
                         _logger.LogInformation($"创建订单：Key:{key}");
                         _logger.LogInformation($"创建订单：Order:{value}");

                         // redis缺陷：无法保证偏移和业务同时成功。
                         // 方案：使用数据库来存储偏移量
                         //       核心：通过数据库事务来保证
                         // 3、手动提交
                         // consumer.Commit(result);
                     }
                 }
             }).Start();
}
#endregion
```

5、然后进行业务操作

### 创建订单，同时发送短信业务场景落地(订阅发布)

条件

1、电商网站微服务

2、订单微服务

3、短信微服务

4、Kafka

5、Confluent.Kafka

步骤

1、电商网站微服务准备

​    1.1 先在电商网站微服务nuget引入

​			Confluent.Kafka

​	1.2 然后在电商网站微服务中OrderController类中添加

```c#
	 /// <summary>
        /// 创建订单
        /// </summary>
        /// <param name="orderCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public IEnumerable<OrderCreateDto> CreateOrder(OrderCreateDto orderCreateDto)
        {
       		#region 1、生产者 Producer
            {
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = "127.0.0.1:9092",
                    MessageTimeoutMs = 50000,
                    EnableIdempotence = true
                };

                var builder = new ProducerBuilder<string, string>(producerConfig);
                builder.SetDefaultPartitioner(RoundRobinPartitioner);
                using (var producer = builder.Build())
                {
                    try
                    {
                        var dr = producer.ProduceAsync("create-order", new Message<string, string> { Key = "order-1", Value = OrderJson }).GetAwaiter().GetResult();
                        _logger.LogInformation("发送事件 {0} 到 {1} 成功", dr.Value, dr.TopicPartitionOffset);
                    }
                    catch (ProduceException<string, string> ex)
                    {
                        _logger.LogError(ex, "发送事件到 {0} 失败，原因 {1} ", "order", ex.Error.Reason);
                    }
                }
            }
            #endregion
      }  
```

​      1.3 最后启动电商网站微服务

2、订单微服务准备

​    2.1 先在订单微服务中通过nuget引入

​			Confluent.Kafka

​	2.2 然后在订单微服务中OrderController类中添加

```c#
	// <summary>
    /// 创建订单
    /// </summary>
    /// <param name="OrderCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Order> CreateOrder(OrderCreateDto OrderCreateDto)
    {
    	 #region 5、订阅发布(广播消费)1、创建订单----2、发送短信-GroupId
            {
                new Task(() =>
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = "127.0.0.1:9092",
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = "order",
                        EnableAutoCommit = true,
                    };
                    var builder = new ConsumerBuilder<string, string>(consumerConfig);
                    var consumer = builder.Build();

                    // 1、订阅
                    consumer.Subscribe("create-order");
                    // 2、获取偏移量
                    string offset = distributedCache.GetString("create-order");
                    if (string.IsNullOrEmpty(offset))
                    {
                        offset = "0";
                    }
                    // 3、重置偏移量
                    consumer.Assign(new TopicPartitionOffset(new TopicPartition("create-order", 0), int.Parse(offset)));
                    while (true)
                    {
                        // 2、消费
                        var result = consumer.Consume();
                        // 2.1、获取偏移量
                        _logger.LogInformation($"订单消息偏移量：Offset:{result.Offset}");

                        // 3、业务处理
                        string key = result.Key;
                        string value = result.Value;
                        _logger.LogInformation($"创建商品：Key:{key}");
                        _logger.LogInformation($"创建商品：Order:{value}");

                        // 2.2、把kafka队列中偏移量存起来。redis mysql
                        // 2.3、重置kafka队列的偏移量
                        distributedCache.SetString("create-order", result.Offset.Value.ToString());

                        // 3、手动提交
                        //consumer.Commit(result);
                    }
                }).Start();
            }
            #endregion
    }

```

​      2.3 最后启动电商网站微服务

3、短信微服务准备

​	 3.1 先在短信微服务中通过nuget引入

​			Confluent.Kafka

​	2.2 然后在短信微服务中SmsController类中添加

```c#
	/// <summary>
        /// 发送短信
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            new Task(() =>
            {
                var consumerConfig = new ConsumerConfig
                {
                    BootstrapServers = "127.0.0.1:9092",
                    AutoOffsetReset = AutoOffsetReset.Earliest,
                    GroupId = "sms",
                    EnableAutoCommit = false,
                };
                var builder = new ConsumerBuilder<string, string>(consumerConfig);
                var consumer = builder.Build();

                // 1、订阅
                consumer.Subscribe("create-order");
                while (true)
                {
                    // 2、消费
                    var result = consumer.Consume();
                    // 2.1、获取偏移量
                    _logger.LogInformation($"订单消息偏移量：Offset:{result.Offset}");

                    // 3、业务处理
                    string key = result.Key;
                    string value = result.Value;
                    _logger.LogInformation($"创建商品：Key:{key}");
                    _logger.LogInformation($"创建商品：Order:{value}");

                    // 3、手动提交
                    consumer.Commit(result);
                }
            }).Start();
        }
```

​      2.3 最后启动电商网站微服务

4、Kafka准备

​	4.1 启动Kafka

5、最后进行业务操作

#### 原理过程分析

条件

1、消费者组GroupId

过程

消费者组，就是订阅发布，生产者把消息发给给Kafka---->Kafka再把消息发送给主题----->主题把消息发送给组----->组再把消息发送消费者

### 创建订单，订单消息堆积场景落地

条件

1、电商网站微服务

2、订单微服务

3、Kafka

4、Confluent.Kafka

步骤

1、电商网站微服务准备

​    1.1 先在电商网站微服务nuget引入

​			Confluent.Kafka

​	1.2 然后在电商网站微服务中OrderController类中添加

```c#
	/// <summary>
        /// 创建订单
        /// </summary>
        /// <param name="orderCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public IEnumerable<OrderCreateDto> CreateOrder(OrderCreateDto orderCreateDto)
        {
       		#region 1、生产者 Producer
            {
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = "127.0.0.1:9092",
                    MessageTimeoutMs = 50000,
                    EnableIdempotence = true
                };

                var builder = new ProducerBuilder<string, string>(producerConfig);
                builder.SetDefaultPartitioner(RoundRobinPartitioner);
                using (var producer = builder.Build())
                {
                    try
                    {
                        var dr = producer.ProduceAsync("create-order", new Message<string, string> { Key = "order-1", Value = OrderJson }).GetAwaiter().GetResult();
                        _logger.LogInformation("发送事件 {0} 到 {1} 成功", dr.Value, dr.TopicPartitionOffset);
                    }
                    catch (ProduceException<string, string> ex)
                    {
                        _logger.LogError(ex, "发送事件到 {0} 失败，原因 {1} ", "order", ex.Error.Reason);
                    }
                }
            }
            #endregion
      }  
```

​      1.3 最后启动电商网站微服务

2、订单微服务准备

​    2.1 先在订单微服务中通过nuget引入

​			Confluent.Kafka

​	2.2 然后在订单微服务中OrderController类中添加

```c#
	// <summary>
    /// 创建订单
    /// </summary>
    /// <param name="OrderCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Order> CreateOrder(OrderCreateDto OrderCreateDto)
    {
    	 new Task(() =>
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = "127.0.0.1:9092",
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = "order",
                        EnableAutoCommit = false,
                    };
                    var builder = new ConsumerBuilder<string, string>(consumerConfig);
                    var consumer = builder.Build();

                    // 1、订阅
                    consumer.Subscribe("create-order-1");
                    // 2、获取偏移量
                    *//*string offset = distributedCache.GetString("create-order");
                    if (string.IsNullOrEmpty(offset))
                    {
                        offset = "0";
                    }*//*
                    // 3、重置偏移量
                    //consumer.Assign(new TopicPartitionOffset(new TopicPartition("create-order", 1), int.Parse(offset)));
                    while (true)
                    {
                        // 2、消费
                        var result = consumer.Consume();
                        // 2.1、获取偏移量
                        _logger.LogInformation($"订单消息偏移量：Offset:{result.Offset}");
                        // 3、业务处理
                        string key = result.Key;
                        string value = result.Value;
                        _logger.LogInformation($"创建商品：Key:{key}");
                        _logger.LogInformation($"创建商品：Order:{value}");

                        // 2.2、把kafka队列中偏移量存起来。redis mysql
                        // 2.3、重置kafka队列的偏移量
                        //distributedCache.SetString("create-order", result.Offset.Value.ToString());

                        // 3、手动提交
                        consumer.Commit(result);
                    }
                }).Start();
            }
            #endregion
    }
```

​      2.3 然后在订单微服务中KafkaController类中添加

```c#
/// <summary>
        /// 创建分区(更新分区)
        /// </summary>
        /// <param name="topic"></param>
        /// <param name="Partitions"></param>
        /// <returns></returns>
        [HttpGet("PartitionUpdate")]
        public async Task PartitionCreate(string topic,int PartitionCount)
        {
            AdminClientConfig adminClientConfig = new AdminClientConfig
            {
                BootstrapServers = "127.0.0.1:9092",
            };

            var bu = new AdminClientBuilder(adminClientConfig).Build();
            bu.CreatePartitionsAsync(new PartitionsSpecification[] {
                    new PartitionsSpecification { Topic = topic, IncreaseTo=PartitionCount}
                }).Wait();

            await Task.CompletedTask;
        }
```

​	      2.4 然后启动订单微服务


​          2.5 然后创建新的分区


​		2.6、然后在kafkatool查看分区结果


4、Kafka准备

​	4.1 启动Kafka

5、最后进行业务操作

#### 原理过程分析

条件

1、分区Partition

过程

分区Partition，就是指数据分开存储，生产者把消息发送给Kafka---->Kafka再把消息发发送给主题---->主题再把消息发送给指定分区----->指定分区再发送给消费者

注意：分区和消费者是固定绑定的

### 创建订单----订单消息延迟处理场景落地

条件

1、电商网站微服务

2、订单微服务

3、Kafka

4、Confluent.Kafka

步骤

1、电商网站微服务准备

​    1.1 先在电商网站微服务nuget引入

​			Confluent.Kafka

​	1.2 然后在电商网站微服务中OrderController类中添加

```c#
	// <summary>
    /// 创建订单
    /// </summary>
    /// <param name="OrderCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Order> CreateOrder(OrderCreateDto OrderCreateDto)
    {
    	 #region 1、生产者 Producer
            {
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = "127.0.0.1:9092",
                    MessageTimeoutMs = 50000,
                    EnableIdempotence = true
                };

                var builder = new ProducerBuilder<string, string>(producerConfig);
                builder.SetDefaultPartitioner(RoundRobinPartitioner);
                using (var producer = builder.Build())
                {
                    try
                    {
                        var OrderJson = JsonConvert.SerializeObject(orderCreateDto);
                       // TopicPartition topicPartition = new TopicPartition("order-create", 2); // 指定分区发送消息
                        //var dr = producer.ProduceAsync(topicPartition, new Message<string, string> { Key = "order-1", Value = OrderJson }).GetAwaiter().GetResult();
                        var dr = producer.ProduceAsync("create-order-1", new Message<string, string> { Key = "order-1", Value = OrderJson }).GetAwaiter().GetResult();
                        _logger.LogInformation("发送事件 {0} 到 {1} 成功", dr.Value, dr.TopicPartitionOffset);
                    }
                    catch (ProduceException<string, string> ex)
                    {
                        _logger.LogError(ex, "发送事件到 {0} 失败，原因 {1} ", "order", ex.Error.Reason);
                    }
                }
            }
            #endregion
    }
```

​     	1.3 然后在电商网站微服务中OrderController类中添加

```c#
	// <summary>
    /// 创建订单
    /// </summary>
    /// <param name="OrderCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Order> CreateOrder(OrderCreateDto OrderCreateDto)
    {
    	 #region 8、创建订单----1、订单消息延迟处理
            {
                new Task(() =>
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = "127.0.0.1:9092",
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = "order",
                        EnableAutoCommit = false,
                        FetchMinBytes=170,
                        FetchMaxBytes=3060
                    };
                    var builder = new ConsumerBuilder<string, string>(consumerConfig);
                    using (var consumer = builder.Build())
                    {
                        // 1、订阅
                        consumer.Subscribe("create-order-1");
                        // 2、偏移量恢复
                        string offset = distributedCache.GetString("create-order-1");
                        if (string.IsNullOrEmpty(offset))
                        {
                            offset = "0";
                        }
                        consumer.Assign(new TopicPartitionOffset(new TopicPartition("create-order-1", 0), int.Parse(offset)));
                        while (true)
                        {
                            // 1、恢复消息
                            new Timer((s) =>
                            {
                                consumer.Resume(new List<TopicPartition> { new TopicPartition("create-order-1", 0) });
                            }, null, Timeout.Infinite, Timeout.Infinite).Change(5000, 5000);

                            // 1.1、消费暂停
                            consumer.Pause(new List<TopicPartition> { new TopicPartition("create-order-1", 0) });

                            // 2、消费消息
                            var result = consumer.Consume(); //批量获取消息，根据-----》字节数
                            try
                            {
                                // 2.1、获取偏移量
                                _logger.LogInformation($"订单消息偏移量：Offset:{result.Offset}");

                                // 3、业务处理
                                string key = result.Key;
                                string value = result.Value;
                                _logger.LogInformation($"创建商品：Key:{key}");
                                _logger.LogInformation($"创建商品：Order:{value}");

                                // 2.2、把kafka队列中偏移量存起来。redis mysql
                                // 2.3、重置kafka队列的偏移量
                                distributedCache.SetString("create-order-1", result.Offset.Value.ToString());

                                // 3、手动提交
                                consumer.Commit(result);
                            }
                            catch (Exception)
                            {

                                throw;
                            } finally
                            {
                                consumer.Pause(new List<TopicPartition> { new TopicPartition("create-order-1", 0) });
                                Console.WriteLine($"暂停消费");
                            }
                        }
                    }

                }).Start();
            }
            #endregion
```

​     1.3 最后启动订单微服务

  2.3 然后在订单微服务中KafkaController类中添加

```c#
/// <summary>
        /// 创建主题
        /// </summary>
        /// <param name="topic"></param>
        /// <param name="Partitions"></param>
        /// <returns></returns>
        [HttpGet("TopicCreate")]
        public async Task TopicCreate(string topic)
        {
            AdminClientConfig adminClientConfig = new AdminClientConfig
            {
                BootstrapServers = "127.0.0.1:9092",
            };

            var bu = new AdminClientBuilder(adminClientConfig).Build();
            bu.CreateTopicsAsync(new TopicSpecification[] {
                    new TopicSpecification { Name = topic}
                }).Wait();

            await Task.CompletedTask;
        }
```

​	      2.4 然后启动订单微服务


​          2.5 然后创建新的主题


​		2.6、然后在kafkatool查看分区结果


4、Kafka准备

​	4.1 启动Kafka

5、最后进行业务操作

#### 原理过程分析

条件

1、Pause

2、Resume

3、Timer

过程

1、生产者调用consumer.Pause（）。暂定消费var result = consumer.Consume();

2、然后使用定时器Timer每隔5秒钟调用consumer.Resume。重新消费

3、起到延时消费的作用

## **扩展**

  1、集群。微服务里面

  2、微服务

  3、ssdb canal微服务

  4、结合ABP