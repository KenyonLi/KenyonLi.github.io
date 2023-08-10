---
title: '分布式中间件-RabbitMQ（二）'
date: 2023-08-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '分布式中间件-RabbitMQ（二）'
categories:
- 'C#'
---
## 目录
[[toc]]


# 分布式中间件-RabbitMQ

## 什么是RabbitMQ

RabbitMQ是消息队列。简称：MQ。MQ全称为Message Queue, 消息队列（MQ）是一种应用程序对应用程序的通信方法。应用程序通过读写出入队列的消息（针对应用程序的数据）来通信，而无需专用连接来链接它们。消息传递指的是程序之间通过在消息中发送数据进行通信，而不是通过直接调用彼此来通信，直接调用通常是用于诸如远程过程调用的技术。排队指的是应用程序通过 队列来通信。队列的使用除去了接收和发送应用程序同时执行的要求。其中较为成熟的MQ产品有IBM WEBSPHERE MQ等等...

## 什么是消息

消息就是数据，增删改查的数据。例如：商品增删改查的数据

## 什么是队列

队列指：**一端进数据，一端出数据**

## 什么是消息队列

消息队列指：**一端进消息，一端进消息**

## 什么地方使用RabbitMQ

RabbitMQ主要用在分布式系统中，主要是应用在微服务系统中。

## 微服务系统中为什么要使用RabbitMQ

在微服务系统中，微服务之间通信，主要是通过Http或者gRPC通信。由于http/gRPC通信方式是同步通信，如果遇到了高并发，同步通信就会导致微服务系统性能瓶颈，所以，为了解决微服务性能瓶颈问题。需要将同步通信换成异步通信方式。因此。就选用使用消息队列。

消息队列的代表技术，就是rabbitmq。

在什么样的微服务系统使用RabbitMQ呢？用的比较多的就是电商微服务系统。那么，在电商微服务系统中如何落地RabbitMQ？

业务场景：创建商品业务场景

## 微服务系统中如何落地RabbitMQ

条件

1、电商微服务系统

2、RabbitMQ

步骤

1、电商微服务系统准备

​      通过nuget创建电商微服务系统

​     ![image-20220219153024216](/images/dotnet/rabbitmq/image-20220219153024216.png)

2、RabbitMQ准备

​     2.1 RabbitMQ前提准备
                            
​			RabbitMQ下载地址：https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.12.2  

​			RabbitMQ 运行环境erlang下载地址：https://github.com/erlang/otp/releases/tag/OTP-25.3.2.5  

​     2.2 RabbitMQ运行

​	    1、先安装RabbitMQ管理插件

```c#
rabbitmq-plugins enable rabbitmq_management
```

​		![image-20220219171947027](/images/dotnet/rabbitmq/image-20220219171947027.png)

​       2、然后启动RabbitMQ

```c#
	rabbitmq-server 
```

​		![image-20220219172014622](/images/dotnet/rabbitmq/image-20220219172014622.png)

​       3、然后看RabbitMQ是否运行成功

```c#
    rabbitmqctl status
```

​	  4、默认用户名：guest 密码：guest	

​      5、然后在浏览器访问

​			http://localhost:15672

​		![image-20220219172234488](/images/dotnet/rabbitmq/image-20220219172234488.png)

### 创建商品业务场景落地

条件

1、电商网站微服务

2、商品微服务

3、RabbitMQ.Client

步骤

1、添加商品消息到RabbitMQ中

​	 1.1 先在电商网站微服务通过nuget引入

​		    RabbitMQ.Client

​     1.2 然后在电商网站微服务中创建ProductController类

​		 ![image-20220219173323417](/images/dotnet/rabbitmq/image-20220219173323417.png)

​	 1.3、然后在ProductController类添加代码

```c#
  /// <summary>
    /// 创建商品
    /// </summary>
    /// <param name="productCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
    {
        #region 1、生产者
        {
            // 1、创建连接工厂
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            using (var connection = factory.CreateConnection())
            {
                var channel = connection.CreateModel();
                // 2、定义队列
                channel.QueueDeclare(queue: "product-create",
                                     durable: false,// 消息持久化(防止rabbitmq宕机导致队列丢失风险)
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                string productJson = JsonConvert.SerializeObject(productCreateDto);
                // string message = "Hello World!";
                var body = Encoding.UTF8.GetBytes(productJson);

                // 3、发送消息
                var properties = channel.CreateBasicProperties();
                properties.Persistent = true; // 设置消息持久化（个性化控制）
                channel.BasicPublish(exchange: "",
                                     routingKey: "product-create",
                                     basicProperties: properties,
                                     body: body);
            }
            _logger.LogInformation("成功创建商品");
        }
        #endregion
      }  
```

   1.4、然后启动电商网站添加商品消息到RabbitMQ

![image-20220219173653854](/images/dotnet/rabbitmq/image-20220219173653854.png)

​	1.5、添加商品

![image-20220219175136999](/images/dotnet/rabbitmq/image-20220219175136999.png)

2、从RabbitMQ中消费商品消息

​		 1.1 先在商品微服务通过nuget引入

​		    RabbitMQ.Client

​     1.2 然后在电商网站微服务中创建ProductController类

![image-20220219174051946](/images/dotnet/rabbitmq/image-20220219174051946.png)

​	 1.3、然后在ProductController类添加代码

```c#
 [HttpPost]
        public IEnumerable<Product> CreateProdcuts()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            var connection = factory.CreateConnection();
            #region 1、工作队列(单消费者)
            {
                var channel = connection.CreateModel();

                // 2、定义队列
                channel.QueueDeclare(queue: "product-create",
                                     durable: true,
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {

                    Console.WriteLine($"model:{model}");
                    var body = ea.Body;
                    // 1、逻辑代码，添加商品到数据库
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(" [x] 创建商品 {0}", message);
                };

                channel.BasicConsume(queue: "product-create",
                                     autoAck: false, 
                                     consumer: consumer);
            }
            #endregion
        }
```

   1.4、然后启动商品微服务执行监听RabbitMQ

![image-20220219174345405](/images/dotnet/rabbitmq/image-20220219174345405.png)

​    1.5、消费商品数据

![image-20220219174913901](/images/dotnet/rabbitmq/image-20220219174913901.png)

### 创建商品业务场景落地-情况1

情况1：RabbitMQ给商品微服务发消息期间，商品微服务宕机。导致消息丢失

方案：消息确认机制

#### 如何落地消息确认机制

条件

1、autoAck

步骤

1、将商品微服务ProductController autoAck修改为true

```c#
      [HttpPost]
        public IEnumerable<Product> CreateProdcuts()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            var connection = factory.CreateConnection();
            #region 1、工作队列(单消费者)
            {
                var channel = connection.CreateModel();
           // 2、定义队列
            channel.QueueDeclare(queue: "product-create",
                                 durable: true,
                                 exclusive: false,
                                 autoDelete: false,
                                 arguments: null);

            var consumer = new EventingBasicConsumer(channel);
            consumer.Received += (model, ea) =>
            {

                Console.WriteLine($"model:{model}");
                var body = ea.Body;
                // 1、逻辑代码，添加商品到数据库
                var message = Encoding.UTF8.GetString(body.ToArray());
                Console.WriteLine(" [x] 创建商品 {0}", message);
            };

            channel.BasicConsume(queue: "product-create",
                                 autoAck: true, // 消息自动确认机制
                                 consumer: consumer);
        }
        #endregion
    }
```

### 创建商品业务场景落地-情况2

情况2：rabbitmq给商品微服务发了消息，商品微服务收到消息。
                商品微服务发送确认消息给rabbitmq期间。执行业务逻辑失败了。
                导致：消息重复消费

方案：手动确认

#### 如何落地手动确认消息机制

条件

1、BasicAck

步骤

1、将商品微服务ProductController 增加channel.BasicAck(ea.DeliveryTag, true);

```c#
  [HttpPost]
    public IEnumerable<Product> CreateProdcuts()
    {
        // 1、创建连接
        var factory = new ConnectionFactory()
        {
            HostName = "localhost",
            Port = 5672,
            Password = "guest",
            UserName = "guest",
            VirtualHost = "/"
        };
        var connection = factory.CreateConnection();
        #region 1、工作队列(单消费者)
        {
            var channel = _connection.CreateModel();

                // 2、定义队列
                channel.QueueDeclare(queue: "product-create",
                                     durable: false,
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {

                    Console.WriteLine($"model:{model}");
                    var body = ea.Body;
                    // 1、逻辑代码
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(" [x] 创建商品 {0}", message);

                    // 自动确认机制缺陷：
                    // 1、消息是否正常添加到数据库当中,所以需要使用手工确认
                    channel.BasicAck(ea.DeliveryTag, true);
                };
                channel.BasicConsume(queue: "product-create",
                                     autoAck: false, // 消息确认(防止消息重新消费)
                                     consumer: consumer);
    }
    #endregion
}
```

### 创建商品业务场景落地-情况3

情况3：电商网站发送高并发消息，导致商品微服务来不及处理，导致消息堆积！如何解决消息堆积问题？

方案：使用商品微服务集群

#### 如何使用商品微服务集群

条件

1、商品微服务

步骤

1、启动商品微服务实例1  5007

![image-20220219182724684](/images/dotnet/rabbitmq/image-20220219182724684.png)

2、启动商品微服务实例2 5006

![image-20220219182823591](/images/dotnet/rabbitmq/image-20220219182823591.png)

### 创建商品业务场景落地-情况4

情况4：商品微服务集群缺陷：无法控制集群实例的强弱。如果5007比较强，5006弱，就会导致消息大部分堆积在5006。5007不会堆积。如何解决5006实例弱问题？

方案：使用qos

#### 如何落地qos

条件

1、BasicQos

步骤

1、在商品微服务ProductController类中 增加channel.BasicQos(0, 1, false);

```c#
[HttpPost]
    public IEnumerable<Product> CreateProdcuts()
    {
        // 1、创建连接
        var factory = new ConnectionFactory()
        {
            HostName = "localhost",
            Port = 5672,
            Password = "guest",
            UserName = "guest",
            VirtualHost = "/"
        };
        var connection = factory.CreateConnection();
        #region 1、工作队列(单消费者)
        {
            var channel = connection.CreateModel();

                // 2、定义队列
                channel.QueueDeclare(queue: "product-create",
                                     durable: false,
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    Console.WriteLine($"model:{model}");
                    var body = ea.Body;
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(" [x] 创建商品 {0}", message);

                    // 自动确认机制缺陷：
                    // 1、消息是否正常添加到数据库当中,所以需要使用手工确认
                    channel.BasicAck(ea.DeliveryTag, true);
                };
                // 3、消费消息
                channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                                               // 每一次一个消费者只成功消费一个)
                channel.BasicConsume(queue: "product-create",
                                     autoAck: false, // 消息确认(防止消息消费失败)
                                     consumer: consumer);
}
#endregion
}
```

### 创建商品业务场景落地-情况5

情况4：电商网站给RabbitMQ发送消息成功后，如果RabbitMQ宕机了，会导致RabbitMQ中消息丢失！如何解决消息丢失问题

方案：使用队列，消息持久化机制

#### 如何落地持久化

条件

1、durable

2、Persistent

步骤

1、在电商网站ProductController类中 增加持久化代码

```c#
       [HttpPost]
        public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
        {
            #region 1、生产者
            {
                // 1、创建连接工厂
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义队列
                    channel.QueueDeclare(queue: "product-create",
                                         durable: true,// 队列持久化
                                         exclusive: false,
                                         autoDelete: false,
                                         arguments: null);
               string productJson = JsonConvert.SerializeObject(productCreateDto);
                // string message = "Hello World!";
                var body = Encoding.UTF8.GetBytes(productJson);

                // 3、发送消息
                var properties = channel.CreateBasicProperties();
                properties.Persistent = true;  // 设置消息持久化（个性化控制）
                channel.BasicPublish(exchange: "",
                                     routingKey: "product-create",
                                     basicProperties: properties,
                                     body: body);
            }
            _logger.LogInformation("成功创建商品");
        }
        #endregion
```

2、先通过电商网站发送创建商品消息，然后再关闭RabbitMQ，重新启动RabbitMQ，消息不会丢失。

### 创建商品，同时发送短信业务场景落地

条件

1、电商网站微服务

2、商品微服务

3、短信微服务

4、RabbitMQ

5、RabbitMQ.Client

步骤

1、电商网站微服务准备

​    1.1 先在电商网站微服务nuget引入

​			RabbitMQ.Client

​	1.2 然后在电商网站微服务中ProductController类中添加

```c#
	// <summary>
    /// 创建商品
    /// </summary>
    /// <param name="productCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 2、扇形交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义交换机
                    channel.ExchangeDeclare(exchange: "product_fanout", type: "fanout");

                    string productJson = JsonConvert.SerializeObject(productCreateDto);
                    // string message = "Hello World!";
                    var body = Encoding.UTF8.GetBytes(productJson);

                    // 3、发送消息
                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: "product_fanout",
                                         routingKey: "",
                                         basicProperties: properties,
                                         body: body);
                }
                _logger.LogInformation("成功创建商品");
            }
            #endregion
    }
```

​      1.3 最后启动电商网站微服务

2、商品微服务准备

​    2.1 先在商品微服务中通过nuget引入

​			RabbitMQ.Client

​	2.2 然后在商品微服务中ProductController类中添加

```c#
	// <summary>
    /// 创建商品
    /// </summary>
    /// <param name="productCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
    {
    	 // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            var connection = factory.CreateConnection();
           
            #region 6、订阅发布(广播消费)1、创建商品----2、发送短信-扇形交换机
            {
                var channel = connection.CreateModel();

                // 1、定义交换机
                channel.ExchangeDeclare(exchange: "product_fanout", type: "fanout");

                // 2、定义随机队
                var queueName = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来
                channel.QueueBind(queueName,
                                     "product_fanout",
                                     routingKey: "");

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    Console.WriteLine($"model:{model}");
                    var body = ea.Body;
                    // 1、业务逻辑
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(" [x] 创建商品 {0}", message);

                    // 自动确认机制缺陷：
                    // 1、消息是否正常添加到数据库当中,所以需要使用手工确认
                    channel.BasicAck(ea.DeliveryTag, true);
                };
                // 3、消费消息
                channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                                               // 每一次一个消费者只成功消费一个)
                channel.BasicConsume(queue: queueName,
                                     autoAck: false, // 消息确认(防止消息消费失败)
                                     consumer: consumer);
            }
            #endregion
    }
```

​      2.3 最后启动电商网站微服务

3、短信微服务准备

​	 3.1 先在短信微服务中通过nuget引入

​			RabbitMQ.Client

​	2.2 然后在短信微服务中SmsController类中添加

```c#
	/// <summary>
        /// 发送短信
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();

            // 1、定义交换机
            channel.ExchangeDeclare(exchange: "product_fanout", type: ExchangeType.Fanout);

            // 2、定义随机队列
            var queueName = channel.QueueDeclare().QueueName;

            // 3、队列要和交换机绑定起来
            channel.QueueBind(queueName,
                                  "product_fanout",
                                  routingKey: "");

            var consumer = new EventingBasicConsumer(channel);
            consumer.Received += (model, ea) =>
            {
                Console.WriteLine($"model:{model}");
                var body = ea.Body;
                // 1、业务逻辑
                var message = Encoding.UTF8.GetString(body.ToArray());
                Console.WriteLine(" [x] 发送短信 {0}", message);

                // 自动确认机制缺陷：
                // 1、消息是否正常添加到数据库当中,所以需要使用手工确认
                channel.BasicAck(ea.DeliveryTag, true);
            };
            // 3、消费消息
            channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                                           // 每一次一个消费者只成功消费一个)
            channel.BasicConsume(queue: queueName,
                                 autoAck: false, // 消息确认(防止消息消费失败)
                                 consumer: consumer);
        }
```

​      2.3 最后启动电商网站微服务

4、RabbitMQ准备

​	4.1 启动RabbitMQ

5、最后进行业务操作

#### 原理过程分析

条件

1、扇形交换机fanout

过程

扇形交换机，就是订阅发布，生产者把消息发给给RabbitMQ---->RabbitMQ再把消息发送给交换机----->然后再发送给所有队列----->发送给消费者

### 创建商品，指定发送短信或指定发送邮件业务场景落地

条件

1、电商网站微服务

2、商品微服务

3、短信微服务

4、RabbitMQ

5、RabbitMQ.Client

步骤

1、电商网站微服务准备

​    1.1 先在电商网站微服务nuget引入

​			RabbitMQ.Client

​	1.2 然后在电商网站微服务中ProductController类中添加

```c#
	// <summary>
    /// 创建商品
    /// </summary>
    /// <param name="productCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 2、扇形交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                #region 3、直连交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义交换机
                    channel.ExchangeDeclare(exchange: "product_direct", type: "direct");

                    string productJson = JsonConvert.SerializeObject(productCreateDto);
                    // string message = "Hello World!";
                    var body = Encoding.UTF8.GetBytes(productJson);

                    // 3、发送消息
                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: "product_direct",
                                         routingKey: "product-eamil",
                                         basicProperties: properties,
                                         body: body);
                }
                _logger.LogInformation("成功创建商品");
            }
            #endregion
            }
            #endregion
    }
```

​      1.3 最后启动电商网站微服务

2、商品微服务准备

​    2.1 先在商品微服务中通过nuget引入

​			RabbitMQ.Client

​	2.2 然后在商品微服务中ProductController类中添加

```c#
	// <summary>
    /// 创建商品
    /// </summary>
    /// <param name="productCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
    {
    	 // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            var connection = factory.CreateConnection();
           
            #region 7、创建商品----2、发送短信或者发送邮件--直连交换机
            {
                // 工具：直连交换机 type:direct
                var channel = connection.CreateModel();
                // 1、定义交换机
                channel.ExchangeDeclare(exchange: "product_direct",
                                    type: "direct");
               *//* // 2、定义随机队列(用完之后立马删除)
                var queueName = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来
                channel.QueueBind(queueName,
                                     "product_direct",
                                     routingKey: "product-sms");*//*

                // 2、定义随机队列(用完之后立马删除)
                var queueName1 = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来
                channel.QueueBind(queueName1,
                                     "product_direct",
                                     routingKey: "product-eamil");


                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    Console.WriteLine($"model:{model}");
                    var body = ea.Body;
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    // Thread.Sleep(1000);
                    Console.WriteLine(" [x] 创建商品 {0}", message);
                };
                // 3、消费消息
                channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                                               // 每一次一个消费者只成功消费一个)
                channel.BasicConsume(queue: queueName1,
                                     autoAck: true, // 消息确认(防止消息消费失败)
                                     consumer: consumer);
            }
            #endregion
    }
```

​      2.3 最后启动电商网站微服务

3、短信微服务准备

​	 3.1 先在短信微服务中通过nuget引入

​			RabbitMQ.Client

​	2.2 然后在短信微服务中SmsController类中添加

```c#
	/// <summary>
        /// 发送短信
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();

            #region 1、直连交换机
            {
               // 1、创建连接
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                var connection = factory.CreateConnection();
                var channel = connection.CreateModel();

                // 1、定义交换机
                channel.ExchangeDeclare(exchange: "product_direct", type: ExchangeType.Direct);

                // 2、定义随机队列
                var queueName = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来
                channel.QueueBind(queueName,
                                      "product_direct",
                                      routingKey: "product-sms");

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    Console.WriteLine($"model:{model}");
                    var body = ea.Body;
                    // 1、业务逻辑
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(" [x] 发送短信 {0}", message);

                    // 自动确认机制缺陷：
                    // 1、消息是否正常添加到数据库当中,所以需要使用手工确认
                    channel.BasicAck(ea.DeliveryTag, true);
                };
                // 3、消费消息
                channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                                               // 每一次一个消费者只成功消费一个)
                channel.BasicConsume(queue: queueName,
                                     autoAck: false, // 消息确认(防止消息消费失败)
                                     consumer: consumer);
            }
            #endregion
        }
```

​      2.3 最后启动电商网站微服务

4、RabbitMQ准备

​	4.1 启动RabbitMQ

5、最后进行业务操作

#### 原理过程分析

条件

1、直连交换机direct

过程

直连交换机，就是指定订阅发布，生产者把消息发送给RabbitMQ---->RabbitMQ再把消息发送给交换机----->然后再发送给指定队列----->发送给消费者

### 创建订单，创建商品同时发送短信业务场景落地

条件

1、电商网站微服务

2、短信微服务

3、RabbitMQ

4、RabbitMQ.Client

步骤

1、电商网站微服务准备

​    1.1 先在电商网站微服务nuget引入

​			RabbitMQ.Client

​	1.2 然后在电商网站微服务中ProductController类中添加

```c#
	// <summary>
    /// 创建商品
    /// </summary>
    /// <param name="productCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 2、扇形交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                #region 4、主题交换机
            {
               var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义交换机
                    channel.ExchangeDeclare(exchange: "sms_topic", type: "topic");

                    string productJson = JsonConvert.SerializeObject(productCreateDto);
                    // string message = "Hello World!";
                    var body = Encoding.UTF8.GetBytes(productJson);

                    // 3、发送消息
                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: "sms_topic",
                                         routingKey: "sms.product.update",
                                         basicProperties: properties,
                                         body: body);
                }
                _logger.LogInformation("成功创建商品");
            }
            #endregion
    }
```

​     	1.3 然后在电商网站微服务中OrderController类中添加

```c#
	// <summary>
    /// 创建商品
    /// </summary>
    /// <param name="productCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 4、主题交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义交换机
                    channel.ExchangeDeclare(exchange: "sms_topic", type: "topic");

                    string orderJson = JsonConvert.SerializeObject(orderCreateDto);
                    // string message = "Hello World!";
                    var body = Encoding.UTF8.GetBytes(orderJson);

                    // 3、发送消息
                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: "sms_topic",
                                         routingKey: "sms.order",
                                         basicProperties: properties,
                                         body: body);
                }
                _logger.LogInformation("成功创建订单");
            }
            #endregion
```

​     1.3 最后启动电商网站微服务

2、短信微服务准备

​	 2.1 先在短信微服务中通过nuget引入

​			RabbitMQ.Client

​	2.2 然后在短信微服务中SmsController类中添加

```c#
	/// <summary>
        /// 发送短信
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();

             #region 2、主题交换机
            {
                // 1、创建连接
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                var connection = factory.CreateConnection();
                var channel = connection.CreateModel();

                // 1、定义交换机
                channel.ExchangeDeclare(exchange: "sms_topic", type: ExchangeType.Topic);

                // 2、定义随机队列
                var queueName = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来。多对1
                // * 号的缺陷：只能匹配一级
                // # 能够匹配一级及多级以上
                // 真实项目当中，使用主题交换机。因为：可以满足所有场景
                channel.QueueBind(queueName,
                                      "sms_topic",
                                      routingKey: "sms.#");

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    Console.WriteLine($"model:{model}");
                    var body = ea.Body;
                    // 1、业务逻辑
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(" [x] 发送短信 {0}", message);

                    // 自动确认机制缺陷：
                    // 1、消息是否正常添加到数据库当中,所以需要使用手工确认
                    channel.BasicAck(ea.DeliveryTag, true);
                };
                // 3、消费消息
                channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                                               // 每一次一个消费者只成功消费一个)
                channel.BasicConsume(queue: queueName,
                                     autoAck: false, // 消息确认(防止消息消费失败)
                                     consumer: consumer);
            }
            #endregion
        }
```

​      2.3 最后启动短信微服务

4、RabbitMQ准备

​	4.1 启动RabbitMQ

5、最后进行业务操作

#### 原理过程分析

条件

1、主题交换机

过程

主题交换机，就是不同生产产匹配到相同消费者，生产者把消息发送给RabbitMQ---->RabbitMQ再把消息发送给交换机----->然后再发送给指定队列----->发送给消费者

### 创建商品成功回调业务场景落地

条件

1、电商网站微服务

2、商品微服务

3、RabbitMQ

4、RabbitMQ.Client

步骤

1、电商网站微服务准备

​    1.1 先在电商网站微服务nuget引入

​			RabbitMQ.Client

​	1.2 然后在电商网站微服务中ProductController类中添加

```c#
	// <summary>
    /// 创建商品
    /// </summary>
    /// <param name="productCreateDto"></param>
    /// <returns></returns>
    [HttpPost]
    public IEnumerable<Product> CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 2、扇形交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                #region 3、RPC回调来实现
            {
                var factory = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    Password = "guest",
                    UserName = "guest",
                    VirtualHost = "/"
                };
                var connection = factory.CreateConnection();
                
                    var channel = connection.CreateModel();
                    // 2、定义队列
                    string replyQueueName = channel.QueueDeclare().QueueName;

                    var properties = channel.CreateBasicProperties();
                    var correlationId = Guid.NewGuid().ToString();
                    properties.CorrelationId = correlationId;
                    properties.ReplyTo = replyQueueName;

                    // 3、发送消息
                    string productJson = JsonConvert.SerializeObject(productCreateDto);
                    // string message = "Hello World!";
                    var body = Encoding.UTF8.GetBytes(productJson);
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: "",
                                         routingKey: "product_create2",
                                         basicProperties: properties,
                                         body: body);

                    // 4、消息回调
                    var consumer = new EventingBasicConsumer(channel);
                    consumer.Received += (model, ea) =>
                    {
                        Console.WriteLine($"model:{model}");
                        var body = ea.Body;
                        // 1、业务逻辑处理
                        var message = Encoding.UTF8.GetString(body.ToArray());
                        if (ea.BasicProperties.CorrelationId == correlationId)
                        {
                            Console.WriteLine(" [x] 回调成功 {0}", message);
                        }

                    };
                    // 3、消费消息
                    // channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                    // 每一次一个消费者只成功消费一个)
                    channel.BasicConsume(queue: replyQueueName,
                                         autoAck: true, // 消息确认(防止消息消费失败)
                                         consumer: consumer);

                _logger.LogInformation("成功创建商品");
            }
            #endregion
    }
```

​          1.3 最后启动电商网站微服务

2、商品微服务准备

​	 2.1 先在商品微服务中通过nuget引入

​			RabbitMQ.Client

​	2.2 然后在商品微服务中SmsController类中添加

```c#
	/// <summary>
        /// 创建商品
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Product> CreateProdcuts()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                Password = "guest",
                UserName = "guest",
                VirtualHost = "/"
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();

            #region 9、创建商品-----回调-RPC
            {
                // 工具：直连交换机 type:direct
                var channel = connection.CreateModel();

                // 1、定义随机队列(用完之后立马删除)
                var queueName = channel.QueueDeclare(queue: "product_create2",
                                                     durable: false,
                                                     exclusive: false,
                                                     autoDelete: false,
                                                     arguments: null);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    Console.WriteLine($"model:{model}");
                    var body = ea.Body;

                    var props = ea.BasicProperties;
                    var replyProps = channel.CreateBasicProperties();
                    replyProps.CorrelationId = props.CorrelationId;

                    try
                    {
                        // 1、执行业务
                        var message = Encoding.UTF8.GetString(body.ToArray());
                        Console.WriteLine(" [x] 创建商品 {0}", message);
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(" [.] " + e.Message);
                    }
                    finally
                    {
                        Console.WriteLine("发送回调消息");
                        var responseBytes = Encoding.UTF8.GetBytes("商品回调成功");
                        channel.BasicPublish(exchange: "",
                                            routingKey: props.ReplyTo,
                                            basicProperties: replyProps,
                                            body: responseBytes);
                        /*channel.BasicAck(deliveryTag: ea.DeliveryTag,
                          multiple: false);*/
                    }
                };
                // 3、消费消息
               // channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                                               // 每一次一个消费者只成功消费一个)
                channel.BasicConsume(queue: "product_create2",
                                     autoAck: true, // 消息确认(防止消息消费失败)
                                     consumer: consumer);
            }
            #endregion
        }
```

​      2.3 最后启动短信微服务

4、RabbitMQ准备

​	4.1 启动RabbitMQ

5、最后进行业务操作

#### 原理过程分析

条件

1、CorrelationId

2、ReplyTo

过程

RabbitMQ中实现RPC的机制是：

客户端发送请求（消息）时，在消息的属性（MessageProperties，在AMQP协议中定义了14中properties，这些属性会随着消息一起发送）中设置两个值replyTo（一个Queue名称，用于告诉服务器处理完成后将通知我的消息发送到这个Queue中）和correlationId（此次请求的标识号，服务器处理完成后需要将此属性返还，客户端将根据这个id了解哪条请求被成功执行了或执行失败）；

服务器端收到消息并处理；

服务器端处理完消息后0，0将生成一条应答消息到replyTo指定的Queue，同时带上correlationId属性；

客户端之前已订阅replyTo指  定的Queue，从中收到服务器的应答消息后，根据其中的correlationId属性分析哪条请求被执行了，根据执行结果进行后续业务处理。

## **扩展**

  1、延时队列。kafka

  2、集群。微服务里面

  3、微服务

  4、ssdb canal微服务

  5、结合ABP



  ## 分布式中间件专题

分布式系统中的技术

### 消息中间件RabbitMQ

1、RabbitMQ核心概念

2、RabbitMQ应用场景

3、RabbitMQ微服务落地

4、RabbitMQ-核心功能落地

5、RabbitMQ-交换机落地

6、RabbitMQ-RPC回调落地

7、RabbitMQ-应用扩展

需求：创建商品的时候，同时发送短信。

需求：创建商品的时候，同时发送邮件。

直连交换机缺陷

1、无法实现多生产 对接一个消费者

需求：创建订单---->创建订单消息，同时发送短信

使用：主题交换机。

需求：查询订单，查询商品。前提：必须要知道订单和商品添加成功吧

需求：创建商品，商品微服务通知消费成功的消息给生产者



扩展

  1、延时队列。kafka

  2、集群。微服务里面

  3、微服务

  4、ssdb canal微服务

  5、结合ABP