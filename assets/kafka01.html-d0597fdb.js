import{_ as t,r as a,o as u,c as v,a as e,b as i,w as r,d as n,e as l}from"./app-c1c3c937.js";const c="/images/kafka/kafka_001_image.png",o="/images/kafka/kafka_002_image.png",m="/images/kafka/kafka_003_image.png",b="/images/kafka/kafka_004_image.png",p="/images/kafka/kafka_005_image.png",g={},f=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),q={class:"table-of-contents"},h=l('<h1 id="分布式中间件-kafka" tabindex="-1"><a class="header-anchor" href="#分布式中间件-kafka" aria-hidden="true">#</a> 分布式中间件-Kafka</h1><h2 id="什么是kafka" tabindex="-1"><a class="header-anchor" href="#什么是kafka" aria-hidden="true">#</a> 什么是Kafka</h2><p>Kafka是消息队列。简称：MQ。MQ全称为Message Queue, 消息队列（MQ）是一种应用程序对应用程序的通信方法。应用程序通过读写出入队列的消息（针对应用程序的数据）来通信，而无需专用连接来链接它们。消息传递指的是程序之间通过在消息中发送数据进行通信，而不是通过直接调用彼此来通信，直接调用通常是用于诸如远程过程调用的技术。排队指的是应用程序通过 队列来通信。队列的使用除去了接收和发送应用程序同时执行的要求。其中较为成熟的MQ产品有IBM WEBSPHERE MQ等等...</p><h2 id="什么是消息" tabindex="-1"><a class="header-anchor" href="#什么是消息" aria-hidden="true">#</a> 什么是消息</h2><p>消息就是数据，增删改查的数据。例如：订单增删改查的数据</p><h2 id="什么是队列" tabindex="-1"><a class="header-anchor" href="#什么是队列" aria-hidden="true">#</a> 什么是队列</h2><p>队列指：<strong>一端进数据，一端出数据</strong></p><h2 id="什么是消息队列" tabindex="-1"><a class="header-anchor" href="#什么是消息队列" aria-hidden="true">#</a> 什么是消息队列</h2><p>消息队列指：<strong>一端进消息，一端进消息</strong></p><h2 id="什么地方使用kafka" tabindex="-1"><a class="header-anchor" href="#什么地方使用kafka" aria-hidden="true">#</a> 什么地方使用Kafka</h2><p>Kafka主要用在分布式系统中，主要是应用在微服务系统中。</p><h2 id="微服务系统中为什么要使用kafka" tabindex="-1"><a class="header-anchor" href="#微服务系统中为什么要使用kafka" aria-hidden="true">#</a> 微服务系统中为什么要使用Kafka</h2><p>在微服务系统中，微服务之间通信，主要是通过Http或者gRPC通信。由于http/gRPC通信方式是同步通信，如果遇到了高并发，同步通信就会导致微服务系统性能瓶颈，所以，为了解决微服务性能瓶颈问题。需要将同步通信换成异步通信方式。因此。就选用使用消息队列。</p><p>消息队列的代表技术，就是Kafka。</p><p>在什么样的微服务系统使用Kafka呢？用的比较多的就是电商微服务系统。那么，在电商微服务系统中如何落地Kafka？</p><p>业务场景：创建订单业务场景</p><h2 id="微服务系统中如何落地kafka" tabindex="-1"><a class="header-anchor" href="#微服务系统中如何落地kafka" aria-hidden="true">#</a> 微服务系统中如何落地Kafka</h2><p>条件</p><p>1、电商微服务系统</p><p>2、Kafka</p><p>3、JDK</p><p>步骤</p><p>1、电商微服务系统准备</p><p>​ 通过nuget创建电商微服务系统</p><p>2、JDK准备</p><p>​ JDK已经上传到百度云盘，百度一下即可安装JDK环境</p><p>2、Kafka准备</p><p>​ 2.1 Kafka前提准备</p>',28),k={href:"https://kafka.apache.org/downloads",target:"_blank",rel:"noopener noreferrer"},C=l(`<p>​ 1、先运行zookeeper</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>zookeeper-server-start.bat ../../config/zookeeper.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+'" alt="Alt text"><img src="'+o+`" alt="Alt text"></p><p>​ 2、然后启动Kafka</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>kafka-server-start.bat ../../config/server.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+'" alt="Alt text"><img src="'+b+'" alt="Alt text"> ​ 3、使用Kafkatool判断kafka是否运行成功</p>',6),O={href:"https://www.kafkatool.com/download.html",target:"_blank",rel:"noopener noreferrer"},_=l(`<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>双击kafkatool.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+p+`" alt="Alt text"></p><p>​ 4、查看结果</p><h3 id="创建订单业务场景落地" tabindex="-1"><a class="header-anchor" href="#创建订单业务场景落地" aria-hidden="true">#</a> 创建订单业务场景落地</h3><p>条件</p><p>1、电商网站微服务</p><p>2、订单微服务</p><p>3、Confluent.Kafka</p><p>步骤</p><p>1、添加订单消息到Kafka中</p><p>​ 1.1 先在电商网站微服务通过nuget引入</p><p>​ Confluent.Kafka</p><p>​ 1.2 然后在电商网站微服务中创建OrderController类</p><p>​ 1.3、然后在OrderController类添加代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> /// &lt;summary&gt;
        /// 创建订单
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;orderCreateDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost]
        public IEnumerable&lt;OrderCreateDto&gt; CreateOrder(OrderCreateDto orderCreateDto)
        {
       		#region 1、生产者 Producer
            {
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = &quot;127.0.0.1:9092&quot;,
                    MessageTimeoutMs = 50000,
                    EnableIdempotence = true
                };

                var builder = new ProducerBuilder&lt;string, string&gt;(producerConfig);
                builder.SetDefaultPartitioner(RoundRobinPartitioner);
                using (var producer = builder.Build())
                {
                    try
                    {
                        var dr = producer.ProduceAsync(&quot;create-order&quot;, new Message&lt;string, string&gt; { Key = &quot;order-1&quot;, Value = OrderJson }).GetAwaiter().GetResult();
                        _logger.LogInformation(&quot;发送事件 {0} 到 {1} 成功&quot;, dr.Value, dr.TopicPartitionOffset);
                    }
                    catch (ProduceException&lt;string, string&gt; ex)
                    {
                        _logger.LogError(ex, &quot;发送事件到 {0} 失败，原因 {1} &quot;, &quot;order&quot;, ex.Error.Reason);
                    }
                }
            }
            #endregion
      }  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4、然后启动电商网站添加订单消息到Kafka</p><p>​ 1.5、添加订单消息</p><p>2、从Kafka中消费订单消息</p><p>​ 1.1 先在订单微服务通过nuget引入</p><p>​ Confluent.Kafka</p><p>​ 1.2 然后在订单微服务中创建OrderController类</p><p>​ 1.3、然后在OrderController类添加代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> // &lt;summary&gt;
        /// 创建订单
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public async Task&lt;Order&gt; OrderCreate()
        {
            #region 1、工作队列(单消费者) Consumer
            {
                new Task(() =&gt;
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = &quot;127.0.0.1:9092&quot;,
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = &quot;order&quot;,
                        EnableAutoCommit = false
                    };
                    var builder = new ConsumerBuilder&lt;string, string&gt;(consumerConfig);

                    using (var consumer = builder.Build())
                    {
                        // 1、订阅
                        consumer.Subscribe(&quot;create-order&quot;);
                        while (true)
                        {
                            try
                            {
                                // 2、消费(自动确认)
                                var result = consumer.Consume();

                                // 3、业务逻辑:业务逻辑----&gt;执行失败---&gt;消息丢失
                                string key = result.Key;
                                string value = result.Value;

                                _logger.LogInformation($&quot;创建订单：Key:{key}&quot;);
                                _logger.LogInformation($&quot;创建订单：Order:{value}&quot;);
                            }
                            catch (Exception e)
                            {
                                _logger.LogInformation($&quot;异常：Order:{e}&quot;);
                            }
                        }
                    }
                }).Start();
            }
            #endregion
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4、然后启动订单微服务执行监听Kafka</p><p>​ 1.5、消费订单消息</p><h3 id="创建订单业务场景落地-情况1" tabindex="-1"><a class="header-anchor" href="#创建订单业务场景落地-情况1" aria-hidden="true">#</a> 创建订单业务场景落地-情况1</h3><p>情况1：Kafka给订单微服务发消息期间，订单微服务宕机。导致消息丢失</p><p>方案：消息确认机制</p><h4 id="如何落地消息确认机制" tabindex="-1"><a class="header-anchor" href="#如何落地消息确认机制" aria-hidden="true">#</a> 如何落地消息确认机制</h4><p>条件</p><p>1、EnableAutoCommit</p><p>步骤</p><p>1、将订单微服务OrderController EnableAutoCommit修改为true</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// &lt;summary&gt;
        /// 创建订单
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public async Task&lt;Order&gt; OrderCreate()
        {
            #region 1、工作队列(单消费者) Consumer
            {
                new Task(() =&gt;
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = &quot;127.0.0.1:9092&quot;,
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = &quot;order&quot;,
                        EnableAutoCommit = true
                    };
                    var builder = new ConsumerBuilder&lt;string, string&gt;(consumerConfig);

                    using (var consumer = builder.Build())
                    {
                        // 1、订阅
                        consumer.Subscribe(&quot;create-order&quot;);
                        while (true)
                        {
                            try
                            {
                                // 2、消费(自动确认)
                                var result = consumer.Consume();

                                // 3、业务逻辑:业务逻辑----&gt;执行失败---&gt;消息丢失
                                string key = result.Key;
                                string value = result.Value;

                                _logger.LogInformation($&quot;创建订单：Key:{key}&quot;);
                                _logger.LogInformation($&quot;创建订单：Order:{value}&quot;);
                            }
                            catch (Exception e)
                            {
                                _logger.LogInformation($&quot;异常：Order:{e}&quot;);
                            }
                        }
                    }
                }).Start();
            }
            #endregion
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建订单业务场景落地-情况2" tabindex="-1"><a class="header-anchor" href="#创建订单业务场景落地-情况2" aria-hidden="true">#</a> 创建订单业务场景落地-情况2</h3><p>情况2：Kafka给订单微服务发了消息，订单微服务收到消息。 订单微服务发送确认消息给Kafka期间。执行业务逻辑失败了。 导致：消息重复消费</p><p>方案：手动确认</p><h4 id="如何落地手动确认消息" tabindex="-1"><a class="header-anchor" href="#如何落地手动确认消息" aria-hidden="true">#</a> 如何落地手动确认消息</h4><p>条件</p><p>1、Commit</p><p>步骤</p><p>1、将订单微服务OrderController 增加consumer.Commit(result);</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// &lt;summary&gt;
        /// 创建订单
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public async Task&lt;Order&gt; OrderCreate()
        {
            #region 1、工作队列(单消费者) Consumer
            {
                new Task(() =&gt;
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = &quot;127.0.0.1:9092&quot;,
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = &quot;order&quot;,
                        EnableAutoCommit = false,
                    };
                    var builder = new ConsumerBuilder&lt;string, string&gt;(consumerConfig);
                    var consumer = builder.Build();
                    // 1、订阅
                    consumer.Subscribe(&quot;create-order&quot;);
                    while (true)
                    {
                        // 2、消费
                        var result = consumer.Consume();

                        // 3、业务逻辑
                        string key = result.Key;
                        string value = result.Value;

                        _logger.LogInformation($&quot;创建商品：Key:{key}&quot;);
                        _logger.LogInformation($&quot;创建商品：Order:{value}&quot;);

                        // 3、手动提交（向kafka确认消息）----偏移量---消息的序号
                        consumer.Commit(result);
                    }
                }).Start();
            }
            #endregion
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建订单业务场景落地-情况3" tabindex="-1"><a class="header-anchor" href="#创建订单业务场景落地-情况3" aria-hidden="true">#</a> 创建订单业务场景落地-情况3</h3><p>情况3：Kafka给订单微服务发了消息，订单微服务收到消息。 订单微服务发送确认消息给Kafka期间。kafka宕机 导致：消息重复消费</p><p>方案：重置偏移量</p><h4 id="如何落地重置偏移量" tabindex="-1"><a class="header-anchor" href="#如何落地重置偏移量" aria-hidden="true">#</a> 如何落地重置偏移量</h4><p>条件</p><p>1、redis</p><p>2、Microsoft.Extensions.Caching.Redis</p><p>2、Offset</p><p>步骤</p><p>1、先启动redis</p><p>2、然后在订单微服务中nuget引入</p><p>​ Microsoft.Extensions.Caching.Redis</p><p>3、然后在订单微服务Startup中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public void ConfigureServices(IServiceCollection services)
{
        ....
        services.AddDistributedRedisCache(options =&gt;
        {
            options.Configuration = &quot;localhost:6379&quot;;
        });
        ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、将订单微服务OrderController 增加Offset存储</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>#region 4、工作队列(单消费者)-手动确认消息-偏移量(重复消费)-存储偏移量
{
    new Task(() =&gt;
             {
                 var consumerConfig = new ConsumerConfig
                 {
                     BootstrapServers = &quot;127.0.0.1:9092&quot;,
                     AutoOffsetReset = AutoOffsetReset.Earliest,
                     GroupId = &quot;order&quot;,
                     EnableAutoCommit = true,
                 };
                 var builder = new ConsumerBuilder&lt;string, string&gt;(consumerConfig);
                 using (var consumer = builder.Build())
                 {
                     // 1、订阅
                     consumer.Subscribe(&quot;create-order&quot;);

                     // 1.2、获取偏移量
                     string offset = distributedCache.GetString(&quot;create-order&quot;);
                     if (string.IsNullOrEmpty(offset))
                     {
                         offset = &quot;0&quot;;
                     }

                     // 1.3、重置偏移量
                     consumer.Assign(new TopicPartitionOffset(new TopicPartition(&quot;create-order&quot;, 0), int.Parse(offset) + 1));
                     while (true)
                     {
                         // 2、消费
                         var result = consumer.Consume();

                         // 2.1、获取偏移量
                         _logger.LogInformation($&quot;订单消息偏移量：Offset:{result.Offset}&quot;);
                         // 2.2、把kafka队列中偏移量存起来。redis mysql
                         // 2.3、重置kafka队列的偏移量
                         distributedCache.SetString(&quot;create-order&quot;, result.Offset.Value.ToString());

                         // 3、业务处理
                         string key = result.Key;
                         string value = result.Value;
                         _logger.LogInformation($&quot;创建订单：Key:{key}&quot;);
                         _logger.LogInformation($&quot;创建订单：Order:{value}&quot;);

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、然后进行业务操作</p><h3 id="创建订单-同时发送短信业务场景落地-订阅发布" tabindex="-1"><a class="header-anchor" href="#创建订单-同时发送短信业务场景落地-订阅发布" aria-hidden="true">#</a> 创建订单，同时发送短信业务场景落地(订阅发布)</h3><p>条件</p><p>1、电商网站微服务</p><p>2、订单微服务</p><p>3、短信微服务</p><p>4、Kafka</p><p>5、Confluent.Kafka</p><p>步骤</p><p>1、电商网站微服务准备</p><p>​ 1.1 先在电商网站微服务nuget引入</p><p>​ Confluent.Kafka</p><p>​ 1.2 然后在电商网站微服务中OrderController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	 /// &lt;summary&gt;
        /// 创建订单
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;orderCreateDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost]
        public IEnumerable&lt;OrderCreateDto&gt; CreateOrder(OrderCreateDto orderCreateDto)
        {
       		#region 1、生产者 Producer
            {
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = &quot;127.0.0.1:9092&quot;,
                    MessageTimeoutMs = 50000,
                    EnableIdempotence = true
                };

                var builder = new ProducerBuilder&lt;string, string&gt;(producerConfig);
                builder.SetDefaultPartitioner(RoundRobinPartitioner);
                using (var producer = builder.Build())
                {
                    try
                    {
                        var dr = producer.ProduceAsync(&quot;create-order&quot;, new Message&lt;string, string&gt; { Key = &quot;order-1&quot;, Value = OrderJson }).GetAwaiter().GetResult();
                        _logger.LogInformation(&quot;发送事件 {0} 到 {1} 成功&quot;, dr.Value, dr.TopicPartitionOffset);
                    }
                    catch (ProduceException&lt;string, string&gt; ex)
                    {
                        _logger.LogError(ex, &quot;发送事件到 {0} 失败，原因 {1} &quot;, &quot;order&quot;, ex.Error.Reason);
                    }
                }
            }
            #endregion
      }  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 最后启动电商网站微服务</p><p>2、订单微服务准备</p><p>​ 2.1 先在订单微服务中通过nuget引入</p><p>​ Confluent.Kafka</p><p>​ 2.2 然后在订单微服务中OrderController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建订单
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;OrderCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Order&gt; CreateOrder(OrderCreateDto OrderCreateDto)
    {
    	 #region 5、订阅发布(广播消费)1、创建订单----2、发送短信-GroupId
            {
                new Task(() =&gt;
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = &quot;127.0.0.1:9092&quot;,
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = &quot;order&quot;,
                        EnableAutoCommit = true,
                    };
                    var builder = new ConsumerBuilder&lt;string, string&gt;(consumerConfig);
                    var consumer = builder.Build();

                    // 1、订阅
                    consumer.Subscribe(&quot;create-order&quot;);
                    // 2、获取偏移量
                    string offset = distributedCache.GetString(&quot;create-order&quot;);
                    if (string.IsNullOrEmpty(offset))
                    {
                        offset = &quot;0&quot;;
                    }
                    // 3、重置偏移量
                    consumer.Assign(new TopicPartitionOffset(new TopicPartition(&quot;create-order&quot;, 0), int.Parse(offset)));
                    while (true)
                    {
                        // 2、消费
                        var result = consumer.Consume();
                        // 2.1、获取偏移量
                        _logger.LogInformation($&quot;订单消息偏移量：Offset:{result.Offset}&quot;);

                        // 3、业务处理
                        string key = result.Key;
                        string value = result.Value;
                        _logger.LogInformation($&quot;创建商品：Key:{key}&quot;);
                        _logger.LogInformation($&quot;创建商品：Order:{value}&quot;);

                        // 2.2、把kafka队列中偏移量存起来。redis mysql
                        // 2.3、重置kafka队列的偏移量
                        distributedCache.SetString(&quot;create-order&quot;, result.Offset.Value.ToString());

                        // 3、手动提交
                        //consumer.Commit(result);
                    }
                }).Start();
            }
            #endregion
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 最后启动电商网站微服务</p><p>3、短信微服务准备</p><p>​ 3.1 先在短信微服务中通过nuget引入</p><p>​ Confluent.Kafka</p><p>​ 2.2 然后在短信微服务中SmsController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	/// &lt;summary&gt;
        /// 发送短信
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public IEnumerable&lt;WeatherForecast&gt; Get()
        {
            new Task(() =&gt;
            {
                var consumerConfig = new ConsumerConfig
                {
                    BootstrapServers = &quot;127.0.0.1:9092&quot;,
                    AutoOffsetReset = AutoOffsetReset.Earliest,
                    GroupId = &quot;sms&quot;,
                    EnableAutoCommit = false,
                };
                var builder = new ConsumerBuilder&lt;string, string&gt;(consumerConfig);
                var consumer = builder.Build();

                // 1、订阅
                consumer.Subscribe(&quot;create-order&quot;);
                while (true)
                {
                    // 2、消费
                    var result = consumer.Consume();
                    // 2.1、获取偏移量
                    _logger.LogInformation($&quot;订单消息偏移量：Offset:{result.Offset}&quot;);

                    // 3、业务处理
                    string key = result.Key;
                    string value = result.Value;
                    _logger.LogInformation($&quot;创建商品：Key:{key}&quot;);
                    _logger.LogInformation($&quot;创建商品：Order:{value}&quot;);

                    // 3、手动提交
                    consumer.Commit(result);
                }
            }).Start();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 最后启动电商网站微服务</p><p>4、Kafka准备</p><p>​ 4.1 启动Kafka</p><p>5、最后进行业务操作</p><h4 id="原理过程分析" tabindex="-1"><a class="header-anchor" href="#原理过程分析" aria-hidden="true">#</a> 原理过程分析</h4><p>条件</p><p>1、消费者组GroupId</p><p>过程</p><p>消费者组，就是订阅发布，生产者把消息发给给Kafka----&gt;Kafka再把消息发送给主题-----&gt;主题把消息发送给组-----&gt;组再把消息发送消费者</p><h3 id="创建订单-订单消息堆积场景落地" tabindex="-1"><a class="header-anchor" href="#创建订单-订单消息堆积场景落地" aria-hidden="true">#</a> 创建订单，订单消息堆积场景落地</h3><p>条件</p><p>1、电商网站微服务</p><p>2、订单微服务</p><p>3、Kafka</p><p>4、Confluent.Kafka</p><p>步骤</p><p>1、电商网站微服务准备</p><p>​ 1.1 先在电商网站微服务nuget引入</p><p>​ Confluent.Kafka</p><p>​ 1.2 然后在电商网站微服务中OrderController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	/// &lt;summary&gt;
        /// 创建订单
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;orderCreateDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost]
        public IEnumerable&lt;OrderCreateDto&gt; CreateOrder(OrderCreateDto orderCreateDto)
        {
       		#region 1、生产者 Producer
            {
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = &quot;127.0.0.1:9092&quot;,
                    MessageTimeoutMs = 50000,
                    EnableIdempotence = true
                };

                var builder = new ProducerBuilder&lt;string, string&gt;(producerConfig);
                builder.SetDefaultPartitioner(RoundRobinPartitioner);
                using (var producer = builder.Build())
                {
                    try
                    {
                        var dr = producer.ProduceAsync(&quot;create-order&quot;, new Message&lt;string, string&gt; { Key = &quot;order-1&quot;, Value = OrderJson }).GetAwaiter().GetResult();
                        _logger.LogInformation(&quot;发送事件 {0} 到 {1} 成功&quot;, dr.Value, dr.TopicPartitionOffset);
                    }
                    catch (ProduceException&lt;string, string&gt; ex)
                    {
                        _logger.LogError(ex, &quot;发送事件到 {0} 失败，原因 {1} &quot;, &quot;order&quot;, ex.Error.Reason);
                    }
                }
            }
            #endregion
      }  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 最后启动电商网站微服务</p><p>2、订单微服务准备</p><p>​ 2.1 先在订单微服务中通过nuget引入</p><p>​ Confluent.Kafka</p><p>​ 2.2 然后在订单微服务中OrderController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建订单
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;OrderCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Order&gt; CreateOrder(OrderCreateDto OrderCreateDto)
    {
    	 new Task(() =&gt;
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = &quot;127.0.0.1:9092&quot;,
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = &quot;order&quot;,
                        EnableAutoCommit = false,
                    };
                    var builder = new ConsumerBuilder&lt;string, string&gt;(consumerConfig);
                    var consumer = builder.Build();

                    // 1、订阅
                    consumer.Subscribe(&quot;create-order-1&quot;);
                    // 2、获取偏移量
                    *//*string offset = distributedCache.GetString(&quot;create-order&quot;);
                    if (string.IsNullOrEmpty(offset))
                    {
                        offset = &quot;0&quot;;
                    }*//*
                    // 3、重置偏移量
                    //consumer.Assign(new TopicPartitionOffset(new TopicPartition(&quot;create-order&quot;, 1), int.Parse(offset)));
                    while (true)
                    {
                        // 2、消费
                        var result = consumer.Consume();
                        // 2.1、获取偏移量
                        _logger.LogInformation($&quot;订单消息偏移量：Offset:{result.Offset}&quot;);
                        // 3、业务处理
                        string key = result.Key;
                        string value = result.Value;
                        _logger.LogInformation($&quot;创建商品：Key:{key}&quot;);
                        _logger.LogInformation($&quot;创建商品：Order:{value}&quot;);

                        // 2.2、把kafka队列中偏移量存起来。redis mysql
                        // 2.3、重置kafka队列的偏移量
                        //distributedCache.SetString(&quot;create-order&quot;, result.Offset.Value.ToString());

                        // 3、手动提交
                        consumer.Commit(result);
                    }
                }).Start();
            }
            #endregion
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 然后在订单微服务中KafkaController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
        /// 创建分区(更新分区)
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;topic&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;Partitions&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;PartitionUpdate&quot;)]
        public async Task PartitionCreate(string topic,int PartitionCount)
        {
            AdminClientConfig adminClientConfig = new AdminClientConfig
            {
                BootstrapServers = &quot;127.0.0.1:9092&quot;,
            };

            var bu = new AdminClientBuilder(adminClientConfig).Build();
            bu.CreatePartitionsAsync(new PartitionsSpecification[] {
                    new PartitionsSpecification { Topic = topic, IncreaseTo=PartitionCount}
                }).Wait();

            await Task.CompletedTask;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.4 然后启动订单微服务</p><p>​ 2.5 然后创建新的分区</p><p>​ 2.6、然后在kafkatool查看分区结果</p><p>4、Kafka准备</p><p>​ 4.1 启动Kafka</p><p>5、最后进行业务操作</p><h4 id="原理过程分析-1" tabindex="-1"><a class="header-anchor" href="#原理过程分析-1" aria-hidden="true">#</a> 原理过程分析</h4><p>条件</p><p>1、分区Partition</p><p>过程</p><p>分区Partition，就是指数据分开存储，生产者把消息发送给Kafka----&gt;Kafka再把消息发发送给主题----&gt;主题再把消息发送给指定分区-----&gt;指定分区再发送给消费者</p><p>注意：分区和消费者是固定绑定的</p><h3 id="创建订单-订单消息延迟处理场景落地" tabindex="-1"><a class="header-anchor" href="#创建订单-订单消息延迟处理场景落地" aria-hidden="true">#</a> 创建订单----订单消息延迟处理场景落地</h3><p>条件</p><p>1、电商网站微服务</p><p>2、订单微服务</p><p>3、Kafka</p><p>4、Confluent.Kafka</p><p>步骤</p><p>1、电商网站微服务准备</p><p>​ 1.1 先在电商网站微服务nuget引入</p><p>​ Confluent.Kafka</p><p>​ 1.2 然后在电商网站微服务中OrderController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建订单
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;OrderCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Order&gt; CreateOrder(OrderCreateDto OrderCreateDto)
    {
    	 #region 1、生产者 Producer
            {
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = &quot;127.0.0.1:9092&quot;,
                    MessageTimeoutMs = 50000,
                    EnableIdempotence = true
                };

                var builder = new ProducerBuilder&lt;string, string&gt;(producerConfig);
                builder.SetDefaultPartitioner(RoundRobinPartitioner);
                using (var producer = builder.Build())
                {
                    try
                    {
                        var OrderJson = JsonConvert.SerializeObject(orderCreateDto);
                       // TopicPartition topicPartition = new TopicPartition(&quot;order-create&quot;, 2); // 指定分区发送消息
                        //var dr = producer.ProduceAsync(topicPartition, new Message&lt;string, string&gt; { Key = &quot;order-1&quot;, Value = OrderJson }).GetAwaiter().GetResult();
                        var dr = producer.ProduceAsync(&quot;create-order-1&quot;, new Message&lt;string, string&gt; { Key = &quot;order-1&quot;, Value = OrderJson }).GetAwaiter().GetResult();
                        _logger.LogInformation(&quot;发送事件 {0} 到 {1} 成功&quot;, dr.Value, dr.TopicPartitionOffset);
                    }
                    catch (ProduceException&lt;string, string&gt; ex)
                    {
                        _logger.LogError(ex, &quot;发送事件到 {0} 失败，原因 {1} &quot;, &quot;order&quot;, ex.Error.Reason);
                    }
                }
            }
            #endregion
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 然后在电商网站微服务中OrderController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建订单
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;OrderCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Order&gt; CreateOrder(OrderCreateDto OrderCreateDto)
    {
    	 #region 8、创建订单----1、订单消息延迟处理
            {
                new Task(() =&gt;
                {
                    var consumerConfig = new ConsumerConfig
                    {
                        BootstrapServers = &quot;127.0.0.1:9092&quot;,
                        AutoOffsetReset = AutoOffsetReset.Earliest,
                        GroupId = &quot;order&quot;,
                        EnableAutoCommit = false,
                        FetchMinBytes=170,
                        FetchMaxBytes=3060
                    };
                    var builder = new ConsumerBuilder&lt;string, string&gt;(consumerConfig);
                    using (var consumer = builder.Build())
                    {
                        // 1、订阅
                        consumer.Subscribe(&quot;create-order-1&quot;);
                        // 2、偏移量恢复
                        string offset = distributedCache.GetString(&quot;create-order-1&quot;);
                        if (string.IsNullOrEmpty(offset))
                        {
                            offset = &quot;0&quot;;
                        }
                        consumer.Assign(new TopicPartitionOffset(new TopicPartition(&quot;create-order-1&quot;, 0), int.Parse(offset)));
                        while (true)
                        {
                            // 1、恢复消息
                            new Timer((s) =&gt;
                            {
                                consumer.Resume(new List&lt;TopicPartition&gt; { new TopicPartition(&quot;create-order-1&quot;, 0) });
                            }, null, Timeout.Infinite, Timeout.Infinite).Change(5000, 5000);

                            // 1.1、消费暂停
                            consumer.Pause(new List&lt;TopicPartition&gt; { new TopicPartition(&quot;create-order-1&quot;, 0) });

                            // 2、消费消息
                            var result = consumer.Consume(); //批量获取消息，根据-----》字节数
                            try
                            {
                                // 2.1、获取偏移量
                                _logger.LogInformation($&quot;订单消息偏移量：Offset:{result.Offset}&quot;);

                                // 3、业务处理
                                string key = result.Key;
                                string value = result.Value;
                                _logger.LogInformation($&quot;创建商品：Key:{key}&quot;);
                                _logger.LogInformation($&quot;创建商品：Order:{value}&quot;);

                                // 2.2、把kafka队列中偏移量存起来。redis mysql
                                // 2.3、重置kafka队列的偏移量
                                distributedCache.SetString(&quot;create-order-1&quot;, result.Offset.Value.ToString());

                                // 3、手动提交
                                consumer.Commit(result);
                            }
                            catch (Exception)
                            {

                                throw;
                            } finally
                            {
                                consumer.Pause(new List&lt;TopicPartition&gt; { new TopicPartition(&quot;create-order-1&quot;, 0) });
                                Console.WriteLine($&quot;暂停消费&quot;);
                            }
                        }
                    }

                }).Start();
            }
            #endregion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 最后启动订单微服务</p><p>2.3 然后在订单微服务中KafkaController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
        /// 创建主题
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;topic&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;Partitions&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;TopicCreate&quot;)]
        public async Task TopicCreate(string topic)
        {
            AdminClientConfig adminClientConfig = new AdminClientConfig
            {
                BootstrapServers = &quot;127.0.0.1:9092&quot;,
            };

            var bu = new AdminClientBuilder(adminClientConfig).Build();
            bu.CreateTopicsAsync(new TopicSpecification[] {
                    new TopicSpecification { Name = topic}
                }).Wait();

            await Task.CompletedTask;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.4 然后启动订单微服务</p><p>​ 2.5 然后创建新的主题</p><p>​ 2.6、然后在kafkatool查看分区结果</p><p>4、Kafka准备</p><p>​ 4.1 启动Kafka</p><p>5、最后进行业务操作</p><h4 id="原理过程分析-2" tabindex="-1"><a class="header-anchor" href="#原理过程分析-2" aria-hidden="true">#</a> 原理过程分析</h4><p>条件</p><p>1、Pause</p><p>2、Resume</p><p>3、Timer</p><p>过程</p><p>1、生产者调用consumer.Pause（）。暂定消费var result = consumer.Consume();</p><p>2、然后使用定时器Timer每隔5秒钟调用consumer.Resume。重新消费</p><p>3、起到延时消费的作用</p><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> <strong>扩展</strong></h2><p>1、集群。微服务里面</p><p>2、微服务</p><p>3、ssdb canal微服务</p><p>4、结合ABP</p>`,163);function y(w,K){const s=a("router-link"),d=a("ExternalLinkIcon");return u(),v("div",null,[f,e("nav",q,[e("ul",null,[e("li",null,[i(s,{to:"#目录"},{default:r(()=>[n("目录")]),_:1})]),e("li",null,[i(s,{to:"#什么是kafka"},{default:r(()=>[n("什么是Kafka")]),_:1})]),e("li",null,[i(s,{to:"#什么是消息"},{default:r(()=>[n("什么是消息")]),_:1})]),e("li",null,[i(s,{to:"#什么是队列"},{default:r(()=>[n("什么是队列")]),_:1})]),e("li",null,[i(s,{to:"#什么是消息队列"},{default:r(()=>[n("什么是消息队列")]),_:1})]),e("li",null,[i(s,{to:"#什么地方使用kafka"},{default:r(()=>[n("什么地方使用Kafka")]),_:1})]),e("li",null,[i(s,{to:"#微服务系统中为什么要使用kafka"},{default:r(()=>[n("微服务系统中为什么要使用Kafka")]),_:1})]),e("li",null,[i(s,{to:"#微服务系统中如何落地kafka"},{default:r(()=>[n("微服务系统中如何落地Kafka")]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#创建订单业务场景落地"},{default:r(()=>[n("创建订单业务场景落地")]),_:1})]),e("li",null,[i(s,{to:"#创建订单业务场景落地-情况1"},{default:r(()=>[n("创建订单业务场景落地-情况1")]),_:1})]),e("li",null,[i(s,{to:"#创建订单业务场景落地-情况2"},{default:r(()=>[n("创建订单业务场景落地-情况2")]),_:1})]),e("li",null,[i(s,{to:"#创建订单业务场景落地-情况3"},{default:r(()=>[n("创建订单业务场景落地-情况3")]),_:1})]),e("li",null,[i(s,{to:"#创建订单-同时发送短信业务场景落地-订阅发布"},{default:r(()=>[n("创建订单，同时发送短信业务场景落地(订阅发布)")]),_:1})]),e("li",null,[i(s,{to:"#创建订单-订单消息堆积场景落地"},{default:r(()=>[n("创建订单，订单消息堆积场景落地")]),_:1})]),e("li",null,[i(s,{to:"#创建订单-订单消息延迟处理场景落地"},{default:r(()=>[n("创建订单----订单消息延迟处理场景落地")]),_:1})])])]),e("li",null,[i(s,{to:"#扩展"},{default:r(()=>[n("扩展")]),_:1})])])]),h,e("p",null,[n("​ Kafka下载地址：https://downloads.apache.org/kafka/3.5.1/kafka_2.13-3.5.1.tgz "),e("a",k,[n("kafk官网下载地址"),i(d)]),n(" ​ 2.2 Kafka运行")]),C,e("p",null,[e("a",O,[n("kafkatool下载地址"),i(d)])]),_])}const x=t(g,[["render",y],["__file","kafka01.html.vue"]]);export{x as default};
