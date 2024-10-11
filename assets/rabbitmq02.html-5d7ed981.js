import{_ as a,r as d,o as r,c as u,a as e,b as s,w as l,d as n,e as v}from"./app-c1c3c937.js";const t="/images/rabbitmq/image-20220219153024216.png",c="/images/rabbitmq/image-20220219171947027.png",o="/images/rabbitmq/image-20220219172014622.png",m="/images/rabbitmq/image-20220219172234488.png",b="/images/rabbitmq/image-20220219173323417.png",p="/images/rabbitmq/image-20220219173653854.png",g="/images/rabbitmq/image-20220219175136999.png",q="/images/rabbitmq/image-20220219174051946.png",h="/images/rabbitmq/image-20220219174345405.png",C="/images/rabbitmq/image-20220219174913901.png",y="/images/rabbitmq/image-20220219182724684.png",P="/images/rabbitmq/image-20220219182823591.png",f={},Q=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),M={class:"table-of-contents"},x=v('<h1 id="分布式中间件-rabbitmq" tabindex="-1"><a class="header-anchor" href="#分布式中间件-rabbitmq" aria-hidden="true">#</a> 分布式中间件-RabbitMQ</h1><h2 id="什么是rabbitmq" tabindex="-1"><a class="header-anchor" href="#什么是rabbitmq" aria-hidden="true">#</a> 什么是RabbitMQ</h2><p>RabbitMQ是消息队列。简称：MQ。MQ全称为Message Queue, 消息队列（MQ）是一种应用程序对应用程序的通信方法。应用程序通过读写出入队列的消息（针对应用程序的数据）来通信，而无需专用连接来链接它们。消息传递指的是程序之间通过在消息中发送数据进行通信，而不是通过直接调用彼此来通信，直接调用通常是用于诸如远程过程调用的技术。排队指的是应用程序通过 队列来通信。队列的使用除去了接收和发送应用程序同时执行的要求。其中较为成熟的MQ产品有IBM WEBSPHERE MQ等等...</p><h2 id="什么是消息" tabindex="-1"><a class="header-anchor" href="#什么是消息" aria-hidden="true">#</a> 什么是消息</h2><p>消息就是数据，增删改查的数据。例如：商品增删改查的数据</p><h2 id="什么是队列" tabindex="-1"><a class="header-anchor" href="#什么是队列" aria-hidden="true">#</a> 什么是队列</h2><p>队列指：<strong>一端进数据，一端出数据</strong></p><h2 id="什么是消息队列" tabindex="-1"><a class="header-anchor" href="#什么是消息队列" aria-hidden="true">#</a> 什么是消息队列</h2><p>消息队列指：<strong>一端进消息，一端进消息</strong></p><h2 id="什么地方使用rabbitmq" tabindex="-1"><a class="header-anchor" href="#什么地方使用rabbitmq" aria-hidden="true">#</a> 什么地方使用RabbitMQ</h2><p>RabbitMQ主要用在分布式系统中，主要是应用在微服务系统中。</p><h2 id="微服务系统中为什么要使用rabbitmq" tabindex="-1"><a class="header-anchor" href="#微服务系统中为什么要使用rabbitmq" aria-hidden="true">#</a> 微服务系统中为什么要使用RabbitMQ</h2><p>在微服务系统中，微服务之间通信，主要是通过Http或者gRPC通信。由于http/gRPC通信方式是同步通信，如果遇到了高并发，同步通信就会导致微服务系统性能瓶颈，所以，为了解决微服务性能瓶颈问题。需要将同步通信换成异步通信方式。因此。就选用使用消息队列。</p><p>消息队列的代表技术，就是rabbitmq。</p><p>在什么样的微服务系统使用RabbitMQ呢？用的比较多的就是电商微服务系统。那么，在电商微服务系统中如何落地RabbitMQ？</p><p>业务场景：创建商品业务场景</p><h2 id="微服务系统中如何落地rabbitmq" tabindex="-1"><a class="header-anchor" href="#微服务系统中如何落地rabbitmq" aria-hidden="true">#</a> 微服务系统中如何落地RabbitMQ</h2><p>条件</p><p>1、电商微服务系统</p><p>2、RabbitMQ</p><p>步骤</p><p>1、电商微服务系统准备</p><p>​ 通过nuget创建电商微服务系统</p><p>​ <img src="'+t+`" alt="image-20220219153024216"></p><p>2、RabbitMQ准备</p><p>​ 2.1 RabbitMQ前提准备</p><p>​ RabbitMQ下载地址：https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.12.2</p><p>​ RabbitMQ 运行环境erlang下载地址：https://github.com/erlang/otp/releases/tag/OTP-25.3.2.5</p><p>​ 2.2 RabbitMQ运行</p><p>​ 1、先安装RabbitMQ管理插件</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>rabbitmq-plugins enable rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ <img src="`+c+`" alt="image-20220219171947027"></p><p>​ 2、然后启动RabbitMQ</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	rabbitmq-server 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ <img src="`+o+`" alt="image-20220219172014622"></p><p>​ 3、然后看RabbitMQ是否运行成功</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    rabbitmqctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 4、默认用户名：guest 密码：guest</p><p>​ 5、然后在浏览器访问</p><p>​ http://localhost:15672</p><p>​ <img src="`+m+'" alt="image-20220219172234488"></p><h3 id="创建商品业务场景落地" tabindex="-1"><a class="header-anchor" href="#创建商品业务场景落地" aria-hidden="true">#</a> 创建商品业务场景落地</h3><p>条件</p><p>1、电商网站微服务</p><p>2、商品微服务</p><p>3、RabbitMQ.Client</p><p>步骤</p><p>1、添加商品消息到RabbitMQ中</p><p>​ 1.1 先在电商网站微服务通过nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 1.2 然后在电商网站微服务中创建ProductController类</p><p>​ <img src="'+b+`" alt="image-20220219173323417"></p><p>​ 1.3、然后在ProductController类添加代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>  /// &lt;summary&gt;
    /// 创建商品
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
    {
        #region 1、生产者
        {
            // 1、创建连接工厂
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            using (var connection = factory.CreateConnection())
            {
                var channel = connection.CreateModel();
                // 2、定义队列
                channel.QueueDeclare(queue: &quot;product-create&quot;,
                                     durable: false,// 消息持久化(防止rabbitmq宕机导致队列丢失风险)
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                string productJson = JsonConvert.SerializeObject(productCreateDto);
                // string message = &quot;Hello World!&quot;;
                var body = Encoding.UTF8.GetBytes(productJson);

                // 3、发送消息
                var properties = channel.CreateBasicProperties();
                properties.Persistent = true; // 设置消息持久化（个性化控制）
                channel.BasicPublish(exchange: &quot;&quot;,
                                     routingKey: &quot;product-create&quot;,
                                     basicProperties: properties,
                                     body: body);
            }
            _logger.LogInformation(&quot;成功创建商品&quot;);
        }
        #endregion
      }  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4、然后启动电商网站添加商品消息到RabbitMQ</p><p><img src="`+p+'" alt="image-20220219173653854"></p><p>​ 1.5、添加商品</p><p><img src="'+g+'" alt="image-20220219175136999"></p><p>2、从RabbitMQ中消费商品消息</p><p>​ 1.1 先在商品微服务通过nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 1.2 然后在电商网站微服务中创建ProductController类</p><p><img src="'+q+`" alt="image-20220219174051946"></p><p>​ 1.3、然后在ProductController类添加代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> [HttpPost]
        public IEnumerable&lt;Product&gt; CreateProdcuts()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            var connection = factory.CreateConnection();
            #region 1、工作队列(单消费者)
            {
                var channel = connection.CreateModel();

                // 2、定义队列
                channel.QueueDeclare(queue: &quot;product-create&quot;,
                                     durable: true,
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =&gt;
                {

                    Console.WriteLine($&quot;model:{model}&quot;);
                    var body = ea.Body;
                    // 1、逻辑代码，添加商品到数据库
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(&quot; [x] 创建商品 {0}&quot;, message);
                };

                channel.BasicConsume(queue: &quot;product-create&quot;,
                                     autoAck: false, 
                                     consumer: consumer);
            }
            #endregion
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4、然后启动商品微服务执行监听RabbitMQ</p><p><img src="`+h+'" alt="image-20220219174345405"></p><p>​ 1.5、消费商品数据</p><p><img src="'+C+`" alt="image-20220219174913901"></p><h3 id="创建商品业务场景落地-情况1" tabindex="-1"><a class="header-anchor" href="#创建商品业务场景落地-情况1" aria-hidden="true">#</a> 创建商品业务场景落地-情况1</h3><p>情况1：RabbitMQ给商品微服务发消息期间，商品微服务宕机。导致消息丢失</p><p>方案：消息确认机制</p><h4 id="如何落地消息确认机制" tabindex="-1"><a class="header-anchor" href="#如何落地消息确认机制" aria-hidden="true">#</a> 如何落地消息确认机制</h4><p>条件</p><p>1、autoAck</p><p>步骤</p><p>1、将商品微服务ProductController autoAck修改为true</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>      [HttpPost]
        public IEnumerable&lt;Product&gt; CreateProdcuts()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            var connection = factory.CreateConnection();
            #region 1、工作队列(单消费者)
            {
                var channel = connection.CreateModel();
           // 2、定义队列
            channel.QueueDeclare(queue: &quot;product-create&quot;,
                                 durable: true,
                                 exclusive: false,
                                 autoDelete: false,
                                 arguments: null);

            var consumer = new EventingBasicConsumer(channel);
            consumer.Received += (model, ea) =&gt;
            {

                Console.WriteLine($&quot;model:{model}&quot;);
                var body = ea.Body;
                // 1、逻辑代码，添加商品到数据库
                var message = Encoding.UTF8.GetString(body.ToArray());
                Console.WriteLine(&quot; [x] 创建商品 {0}&quot;, message);
            };

            channel.BasicConsume(queue: &quot;product-create&quot;,
                                 autoAck: true, // 消息自动确认机制
                                 consumer: consumer);
        }
        #endregion
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建商品业务场景落地-情况2" tabindex="-1"><a class="header-anchor" href="#创建商品业务场景落地-情况2" aria-hidden="true">#</a> 创建商品业务场景落地-情况2</h3><p>情况2：rabbitmq给商品微服务发了消息，商品微服务收到消息。 商品微服务发送确认消息给rabbitmq期间。执行业务逻辑失败了。 导致：消息重复消费</p><p>方案：手动确认</p><h4 id="如何落地手动确认消息机制" tabindex="-1"><a class="header-anchor" href="#如何落地手动确认消息机制" aria-hidden="true">#</a> 如何落地手动确认消息机制</h4><p>条件</p><p>1、BasicAck</p><p>步骤</p><p>1、将商品微服务ProductController 增加channel.BasicAck(ea.DeliveryTag, true);</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>  [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProdcuts()
    {
        // 1、创建连接
        var factory = new ConnectionFactory()
        {
            HostName = &quot;localhost&quot;,
            Port = 5672,
            Password = &quot;guest&quot;,
            UserName = &quot;guest&quot;,
            VirtualHost = &quot;/&quot;
        };
        var connection = factory.CreateConnection();
        #region 1、工作队列(单消费者)
        {
            var channel = _connection.CreateModel();

                // 2、定义队列
                channel.QueueDeclare(queue: &quot;product-create&quot;,
                                     durable: false,
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =&gt;
                {

                    Console.WriteLine($&quot;model:{model}&quot;);
                    var body = ea.Body;
                    // 1、逻辑代码
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(&quot; [x] 创建商品 {0}&quot;, message);

                    // 自动确认机制缺陷：
                    // 1、消息是否正常添加到数据库当中,所以需要使用手工确认
                    channel.BasicAck(ea.DeliveryTag, true);
                };
                channel.BasicConsume(queue: &quot;product-create&quot;,
                                     autoAck: false, // 消息确认(防止消息重新消费)
                                     consumer: consumer);
    }
    #endregion
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建商品业务场景落地-情况3" tabindex="-1"><a class="header-anchor" href="#创建商品业务场景落地-情况3" aria-hidden="true">#</a> 创建商品业务场景落地-情况3</h3><p>情况3：电商网站发送高并发消息，导致商品微服务来不及处理，导致消息堆积！如何解决消息堆积问题？</p><p>方案：使用商品微服务集群</p><h4 id="如何使用商品微服务集群" tabindex="-1"><a class="header-anchor" href="#如何使用商品微服务集群" aria-hidden="true">#</a> 如何使用商品微服务集群</h4><p>条件</p><p>1、商品微服务</p><p>步骤</p><p>1、启动商品微服务实例1 5007</p><p><img src="`+y+'" alt="image-20220219182724684"></p><p>2、启动商品微服务实例2 5006</p><p><img src="'+P+`" alt="image-20220219182823591"></p><h3 id="创建商品业务场景落地-情况4" tabindex="-1"><a class="header-anchor" href="#创建商品业务场景落地-情况4" aria-hidden="true">#</a> 创建商品业务场景落地-情况4</h3><p>情况4：商品微服务集群缺陷：无法控制集群实例的强弱。如果5007比较强，5006弱，就会导致消息大部分堆积在5006。5007不会堆积。如何解决5006实例弱问题？</p><p>方案：使用qos</p><h4 id="如何落地qos" tabindex="-1"><a class="header-anchor" href="#如何落地qos" aria-hidden="true">#</a> 如何落地qos</h4><p>条件</p><p>1、BasicQos</p><p>步骤</p><p>1、在商品微服务ProductController类中 增加channel.BasicQos(0, 1, false);</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[HttpPost]
    public IEnumerable&lt;Product&gt; CreateProdcuts()
    {
        // 1、创建连接
        var factory = new ConnectionFactory()
        {
            HostName = &quot;localhost&quot;,
            Port = 5672,
            Password = &quot;guest&quot;,
            UserName = &quot;guest&quot;,
            VirtualHost = &quot;/&quot;
        };
        var connection = factory.CreateConnection();
        #region 1、工作队列(单消费者)
        {
            var channel = connection.CreateModel();

                // 2、定义队列
                channel.QueueDeclare(queue: &quot;product-create&quot;,
                                     durable: false,
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =&gt;
                {
                    Console.WriteLine($&quot;model:{model}&quot;);
                    var body = ea.Body;
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(&quot; [x] 创建商品 {0}&quot;, message);

                    // 自动确认机制缺陷：
                    // 1、消息是否正常添加到数据库当中,所以需要使用手工确认
                    channel.BasicAck(ea.DeliveryTag, true);
                };
                // 3、消费消息
                channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                                               // 每一次一个消费者只成功消费一个)
                channel.BasicConsume(queue: &quot;product-create&quot;,
                                     autoAck: false, // 消息确认(防止消息消费失败)
                                     consumer: consumer);
}
#endregion
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建商品业务场景落地-情况5" tabindex="-1"><a class="header-anchor" href="#创建商品业务场景落地-情况5" aria-hidden="true">#</a> 创建商品业务场景落地-情况5</h3><p>情况4：电商网站给RabbitMQ发送消息成功后，如果RabbitMQ宕机了，会导致RabbitMQ中消息丢失！如何解决消息丢失问题</p><p>方案：使用队列，消息持久化机制</p><h4 id="如何落地持久化" tabindex="-1"><a class="header-anchor" href="#如何落地持久化" aria-hidden="true">#</a> 如何落地持久化</h4><p>条件</p><p>1、durable</p><p>2、Persistent</p><p>步骤</p><p>1、在电商网站ProductController类中 增加持久化代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>       [HttpPost]
        public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
        {
            #region 1、生产者
            {
                // 1、创建连接工厂
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义队列
                    channel.QueueDeclare(queue: &quot;product-create&quot;,
                                         durable: true,// 队列持久化
                                         exclusive: false,
                                         autoDelete: false,
                                         arguments: null);
               string productJson = JsonConvert.SerializeObject(productCreateDto);
                // string message = &quot;Hello World!&quot;;
                var body = Encoding.UTF8.GetBytes(productJson);

                // 3、发送消息
                var properties = channel.CreateBasicProperties();
                properties.Persistent = true;  // 设置消息持久化（个性化控制）
                channel.BasicPublish(exchange: &quot;&quot;,
                                     routingKey: &quot;product-create&quot;,
                                     basicProperties: properties,
                                     body: body);
            }
            _logger.LogInformation(&quot;成功创建商品&quot;);
        }
        #endregion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、先通过电商网站发送创建商品消息，然后再关闭RabbitMQ，重新启动RabbitMQ，消息不会丢失。</p><h3 id="创建商品-同时发送短信业务场景落地" tabindex="-1"><a class="header-anchor" href="#创建商品-同时发送短信业务场景落地" aria-hidden="true">#</a> 创建商品，同时发送短信业务场景落地</h3><p>条件</p><p>1、电商网站微服务</p><p>2、商品微服务</p><p>3、短信微服务</p><p>4、RabbitMQ</p><p>5、RabbitMQ.Client</p><p>步骤</p><p>1、电商网站微服务准备</p><p>​ 1.1 先在电商网站微服务nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 1.2 然后在电商网站微服务中ProductController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建商品
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 2、扇形交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义交换机
                    channel.ExchangeDeclare(exchange: &quot;product_fanout&quot;, type: &quot;fanout&quot;);

                    string productJson = JsonConvert.SerializeObject(productCreateDto);
                    // string message = &quot;Hello World!&quot;;
                    var body = Encoding.UTF8.GetBytes(productJson);

                    // 3、发送消息
                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: &quot;product_fanout&quot;,
                                         routingKey: &quot;&quot;,
                                         basicProperties: properties,
                                         body: body);
                }
                _logger.LogInformation(&quot;成功创建商品&quot;);
            }
            #endregion
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 最后启动电商网站微服务</p><p>2、商品微服务准备</p><p>​ 2.1 先在商品微服务中通过nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 2.2 然后在商品微服务中ProductController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建商品
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
    {
    	 // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            var connection = factory.CreateConnection();
           
            #region 6、订阅发布(广播消费)1、创建商品----2、发送短信-扇形交换机
            {
                var channel = connection.CreateModel();

                // 1、定义交换机
                channel.ExchangeDeclare(exchange: &quot;product_fanout&quot;, type: &quot;fanout&quot;);

                // 2、定义随机队
                var queueName = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来
                channel.QueueBind(queueName,
                                     &quot;product_fanout&quot;,
                                     routingKey: &quot;&quot;);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =&gt;
                {
                    Console.WriteLine($&quot;model:{model}&quot;);
                    var body = ea.Body;
                    // 1、业务逻辑
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(&quot; [x] 创建商品 {0}&quot;, message);

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 最后启动电商网站微服务</p><p>3、短信微服务准备</p><p>​ 3.1 先在短信微服务中通过nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 2.2 然后在短信微服务中SmsController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	/// &lt;summary&gt;
        /// 发送短信
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public IEnumerable&lt;WeatherForecast&gt; Get()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();

            // 1、定义交换机
            channel.ExchangeDeclare(exchange: &quot;product_fanout&quot;, type: ExchangeType.Fanout);

            // 2、定义随机队列
            var queueName = channel.QueueDeclare().QueueName;

            // 3、队列要和交换机绑定起来
            channel.QueueBind(queueName,
                                  &quot;product_fanout&quot;,
                                  routingKey: &quot;&quot;);

            var consumer = new EventingBasicConsumer(channel);
            consumer.Received += (model, ea) =&gt;
            {
                Console.WriteLine($&quot;model:{model}&quot;);
                var body = ea.Body;
                // 1、业务逻辑
                var message = Encoding.UTF8.GetString(body.ToArray());
                Console.WriteLine(&quot; [x] 发送短信 {0}&quot;, message);

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 最后启动电商网站微服务</p><p>4、RabbitMQ准备</p><p>​ 4.1 启动RabbitMQ</p><p>5、最后进行业务操作</p><h4 id="原理过程分析" tabindex="-1"><a class="header-anchor" href="#原理过程分析" aria-hidden="true">#</a> 原理过程分析</h4><p>条件</p><p>1、扇形交换机fanout</p><p>过程</p><p>扇形交换机，就是订阅发布，生产者把消息发给给RabbitMQ----&gt;RabbitMQ再把消息发送给交换机-----&gt;然后再发送给所有队列-----&gt;发送给消费者</p><h3 id="创建商品-指定发送短信或指定发送邮件业务场景落地" tabindex="-1"><a class="header-anchor" href="#创建商品-指定发送短信或指定发送邮件业务场景落地" aria-hidden="true">#</a> 创建商品，指定发送短信或指定发送邮件业务场景落地</h3><p>条件</p><p>1、电商网站微服务</p><p>2、商品微服务</p><p>3、短信微服务</p><p>4、RabbitMQ</p><p>5、RabbitMQ.Client</p><p>步骤</p><p>1、电商网站微服务准备</p><p>​ 1.1 先在电商网站微服务nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 1.2 然后在电商网站微服务中ProductController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建商品
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 2、扇形交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                #region 3、直连交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义交换机
                    channel.ExchangeDeclare(exchange: &quot;product_direct&quot;, type: &quot;direct&quot;);

                    string productJson = JsonConvert.SerializeObject(productCreateDto);
                    // string message = &quot;Hello World!&quot;;
                    var body = Encoding.UTF8.GetBytes(productJson);

                    // 3、发送消息
                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: &quot;product_direct&quot;,
                                         routingKey: &quot;product-eamil&quot;,
                                         basicProperties: properties,
                                         body: body);
                }
                _logger.LogInformation(&quot;成功创建商品&quot;);
            }
            #endregion
            }
            #endregion
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 最后启动电商网站微服务</p><p>2、商品微服务准备</p><p>​ 2.1 先在商品微服务中通过nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 2.2 然后在商品微服务中ProductController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建商品
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
    {
    	 // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            var connection = factory.CreateConnection();
           
            #region 7、创建商品----2、发送短信或者发送邮件--直连交换机
            {
                // 工具：直连交换机 type:direct
                var channel = connection.CreateModel();
                // 1、定义交换机
                channel.ExchangeDeclare(exchange: &quot;product_direct&quot;,
                                    type: &quot;direct&quot;);
               *//* // 2、定义随机队列(用完之后立马删除)
                var queueName = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来
                channel.QueueBind(queueName,
                                     &quot;product_direct&quot;,
                                     routingKey: &quot;product-sms&quot;);*//*

                // 2、定义随机队列(用完之后立马删除)
                var queueName1 = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来
                channel.QueueBind(queueName1,
                                     &quot;product_direct&quot;,
                                     routingKey: &quot;product-eamil&quot;);


                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =&gt;
                {
                    Console.WriteLine($&quot;model:{model}&quot;);
                    var body = ea.Body;
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    // Thread.Sleep(1000);
                    Console.WriteLine(&quot; [x] 创建商品 {0}&quot;, message);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 最后启动电商网站微服务</p><p>3、短信微服务准备</p><p>​ 3.1 先在短信微服务中通过nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 2.2 然后在短信微服务中SmsController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	/// &lt;summary&gt;
        /// 发送短信
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public IEnumerable&lt;WeatherForecast&gt; Get()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();

            #region 1、直连交换机
            {
               // 1、创建连接
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                var connection = factory.CreateConnection();
                var channel = connection.CreateModel();

                // 1、定义交换机
                channel.ExchangeDeclare(exchange: &quot;product_direct&quot;, type: ExchangeType.Direct);

                // 2、定义随机队列
                var queueName = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来
                channel.QueueBind(queueName,
                                      &quot;product_direct&quot;,
                                      routingKey: &quot;product-sms&quot;);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =&gt;
                {
                    Console.WriteLine($&quot;model:{model}&quot;);
                    var body = ea.Body;
                    // 1、业务逻辑
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(&quot; [x] 发送短信 {0}&quot;, message);

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 最后启动电商网站微服务</p><p>4、RabbitMQ准备</p><p>​ 4.1 启动RabbitMQ</p><p>5、最后进行业务操作</p><h4 id="原理过程分析-1" tabindex="-1"><a class="header-anchor" href="#原理过程分析-1" aria-hidden="true">#</a> 原理过程分析</h4><p>条件</p><p>1、直连交换机direct</p><p>过程</p><p>直连交换机，就是指定订阅发布，生产者把消息发送给RabbitMQ----&gt;RabbitMQ再把消息发送给交换机-----&gt;然后再发送给指定队列-----&gt;发送给消费者</p><h3 id="创建订单-创建商品同时发送短信业务场景落地" tabindex="-1"><a class="header-anchor" href="#创建订单-创建商品同时发送短信业务场景落地" aria-hidden="true">#</a> 创建订单，创建商品同时发送短信业务场景落地</h3><p>条件</p><p>1、电商网站微服务</p><p>2、短信微服务</p><p>3、RabbitMQ</p><p>4、RabbitMQ.Client</p><p>步骤</p><p>1、电商网站微服务准备</p><p>​ 1.1 先在电商网站微服务nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 1.2 然后在电商网站微服务中ProductController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建商品
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 2、扇形交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                #region 4、主题交换机
            {
               var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义交换机
                    channel.ExchangeDeclare(exchange: &quot;sms_topic&quot;, type: &quot;topic&quot;);

                    string productJson = JsonConvert.SerializeObject(productCreateDto);
                    // string message = &quot;Hello World!&quot;;
                    var body = Encoding.UTF8.GetBytes(productJson);

                    // 3、发送消息
                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: &quot;sms_topic&quot;,
                                         routingKey: &quot;sms.product.update&quot;,
                                         basicProperties: properties,
                                         body: body);
                }
                _logger.LogInformation(&quot;成功创建商品&quot;);
            }
            #endregion
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 然后在电商网站微服务中OrderController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建商品
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 4、主题交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                using (var connection = factory.CreateConnection())
                {
                    var channel = connection.CreateModel();
                    // 2、定义交换机
                    channel.ExchangeDeclare(exchange: &quot;sms_topic&quot;, type: &quot;topic&quot;);

                    string orderJson = JsonConvert.SerializeObject(orderCreateDto);
                    // string message = &quot;Hello World!&quot;;
                    var body = Encoding.UTF8.GetBytes(orderJson);

                    // 3、发送消息
                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: &quot;sms_topic&quot;,
                                         routingKey: &quot;sms.order&quot;,
                                         basicProperties: properties,
                                         body: body);
                }
                _logger.LogInformation(&quot;成功创建订单&quot;);
            }
            #endregion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 最后启动电商网站微服务</p><p>2、短信微服务准备</p><p>​ 2.1 先在短信微服务中通过nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 2.2 然后在短信微服务中SmsController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	/// &lt;summary&gt;
        /// 发送短信
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public IEnumerable&lt;WeatherForecast&gt; Get()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();

             #region 2、主题交换机
            {
                // 1、创建连接
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                var connection = factory.CreateConnection();
                var channel = connection.CreateModel();

                // 1、定义交换机
                channel.ExchangeDeclare(exchange: &quot;sms_topic&quot;, type: ExchangeType.Topic);

                // 2、定义随机队列
                var queueName = channel.QueueDeclare().QueueName;

                // 3、队列要和交换机绑定起来。多对1
                // * 号的缺陷：只能匹配一级
                // # 能够匹配一级及多级以上
                // 真实项目当中，使用主题交换机。因为：可以满足所有场景
                channel.QueueBind(queueName,
                                      &quot;sms_topic&quot;,
                                      routingKey: &quot;sms.#&quot;);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =&gt;
                {
                    Console.WriteLine($&quot;model:{model}&quot;);
                    var body = ea.Body;
                    // 1、业务逻辑
                    var message = Encoding.UTF8.GetString(body.ToArray());
                    Console.WriteLine(&quot; [x] 发送短信 {0}&quot;, message);

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 最后启动短信微服务</p><p>4、RabbitMQ准备</p><p>​ 4.1 启动RabbitMQ</p><p>5、最后进行业务操作</p><h4 id="原理过程分析-2" tabindex="-1"><a class="header-anchor" href="#原理过程分析-2" aria-hidden="true">#</a> 原理过程分析</h4><p>条件</p><p>1、主题交换机</p><p>过程</p><p>主题交换机，就是不同生产产匹配到相同消费者，生产者把消息发送给RabbitMQ----&gt;RabbitMQ再把消息发送给交换机-----&gt;然后再发送给指定队列-----&gt;发送给消费者</p><h3 id="创建商品成功回调业务场景落地" tabindex="-1"><a class="header-anchor" href="#创建商品成功回调业务场景落地" aria-hidden="true">#</a> 创建商品成功回调业务场景落地</h3><p>条件</p><p>1、电商网站微服务</p><p>2、商品微服务</p><p>3、RabbitMQ</p><p>4、RabbitMQ.Client</p><p>步骤</p><p>1、电商网站微服务准备</p><p>​ 1.1 先在电商网站微服务nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 1.2 然后在电商网站微服务中ProductController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	// &lt;summary&gt;
    /// 创建商品
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost]
    public IEnumerable&lt;Product&gt; CreateProduct(ProductCreateDto productCreateDto)
    {
    	 #region 2、扇形交换机
            {
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
                };
                #region 3、RPC回调来实现
            {
                var factory = new ConnectionFactory()
                {
                    HostName = &quot;localhost&quot;,
                    Port = 5672,
                    Password = &quot;guest&quot;,
                    UserName = &quot;guest&quot;,
                    VirtualHost = &quot;/&quot;
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
                    // string message = &quot;Hello World!&quot;;
                    var body = Encoding.UTF8.GetBytes(productJson);
                    properties.Persistent = true; // 设置消息持久化
                    channel.BasicPublish(exchange: &quot;&quot;,
                                         routingKey: &quot;product_create2&quot;,
                                         basicProperties: properties,
                                         body: body);

                    // 4、消息回调
                    var consumer = new EventingBasicConsumer(channel);
                    consumer.Received += (model, ea) =&gt;
                    {
                        Console.WriteLine($&quot;model:{model}&quot;);
                        var body = ea.Body;
                        // 1、业务逻辑处理
                        var message = Encoding.UTF8.GetString(body.ToArray());
                        if (ea.BasicProperties.CorrelationId == correlationId)
                        {
                            Console.WriteLine(&quot; [x] 回调成功 {0}&quot;, message);
                        }

                    };
                    // 3、消费消息
                    // channel.BasicQos(0, 1, false); // Qos(防止多个消费者，能力不一致，导致的系统质量问题。
                    // 每一次一个消费者只成功消费一个)
                    channel.BasicConsume(queue: replyQueueName,
                                         autoAck: true, // 消息确认(防止消息消费失败)
                                         consumer: consumer);

                _logger.LogInformation(&quot;成功创建商品&quot;);
            }
            #endregion
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 最后启动电商网站微服务</p><p>2、商品微服务准备</p><p>​ 2.1 先在商品微服务中通过nuget引入</p><p>​ RabbitMQ.Client</p><p>​ 2.2 然后在商品微服务中SmsController类中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	/// &lt;summary&gt;
        /// 创建商品
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public IEnumerable&lt;Product&gt; CreateProdcuts()
        {
            // 1、创建连接
            var factory = new ConnectionFactory()
            {
                HostName = &quot;localhost&quot;,
                Port = 5672,
                Password = &quot;guest&quot;,
                UserName = &quot;guest&quot;,
                VirtualHost = &quot;/&quot;
            };
            var connection = factory.CreateConnection();
            var channel = connection.CreateModel();

            #region 9、创建商品-----回调-RPC
            {
                // 工具：直连交换机 type:direct
                var channel = connection.CreateModel();

                // 1、定义随机队列(用完之后立马删除)
                var queueName = channel.QueueDeclare(queue: &quot;product_create2&quot;,
                                                     durable: false,
                                                     exclusive: false,
                                                     autoDelete: false,
                                                     arguments: null);

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =&gt;
                {
                    Console.WriteLine($&quot;model:{model}&quot;);
                    var body = ea.Body;

                    var props = ea.BasicProperties;
                    var replyProps = channel.CreateBasicProperties();
                    replyProps.CorrelationId = props.CorrelationId;

                    try
                    {
                        // 1、执行业务
                        var message = Encoding.UTF8.GetString(body.ToArray());
                        Console.WriteLine(&quot; [x] 创建商品 {0}&quot;, message);
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(&quot; [.] &quot; + e.Message);
                    }
                    finally
                    {
                        Console.WriteLine(&quot;发送回调消息&quot;);
                        var responseBytes = Encoding.UTF8.GetBytes(&quot;商品回调成功&quot;);
                        channel.BasicPublish(exchange: &quot;&quot;,
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
                channel.BasicConsume(queue: &quot;product_create2&quot;,
                                     autoAck: true, // 消息确认(防止消息消费失败)
                                     consumer: consumer);
            }
            #endregion
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3 最后启动短信微服务</p><p>4、RabbitMQ准备</p><p>​ 4.1 启动RabbitMQ</p><p>5、最后进行业务操作</p><h4 id="原理过程分析-3" tabindex="-1"><a class="header-anchor" href="#原理过程分析-3" aria-hidden="true">#</a> 原理过程分析</h4><p>条件</p><p>1、CorrelationId</p><p>2、ReplyTo</p><p>过程</p><p>RabbitMQ中实现RPC的机制是：</p><p>客户端发送请求（消息）时，在消息的属性（MessageProperties，在AMQP协议中定义了14中properties，这些属性会随着消息一起发送）中设置两个值replyTo（一个Queue名称，用于告诉服务器处理完成后将通知我的消息发送到这个Queue中）和correlationId（此次请求的标识号，服务器处理完成后需要将此属性返还，客户端将根据这个id了解哪条请求被成功执行了或执行失败）；</p><p>服务器端收到消息并处理；</p><p>服务器端处理完消息后0，0将生成一条应答消息到replyTo指定的Queue，同时带上correlationId属性；</p><p>客户端之前已订阅replyTo指 定的Queue，从中收到服务器的应答消息后，根据其中的correlationId属性分析哪条请求被执行了，根据执行结果进行后续业务处理。</p><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> <strong>扩展</strong></h2><p>1、延时队列。kafka</p><p>2、集群。微服务里面</p><p>3、微服务</p><p>4、ssdb canal微服务</p><p>5、结合ABP</p><h2 id="分布式中间件专题" tabindex="-1"><a class="header-anchor" href="#分布式中间件专题" aria-hidden="true">#</a> 分布式中间件专题</h2><p>分布式系统中的技术</p><h3 id="消息中间件rabbitmq" tabindex="-1"><a class="header-anchor" href="#消息中间件rabbitmq" aria-hidden="true">#</a> 消息中间件RabbitMQ</h3><p>1、RabbitMQ核心概念</p><p>2、RabbitMQ应用场景</p><p>3、RabbitMQ微服务落地</p><p>4、RabbitMQ-核心功能落地</p><p>5、RabbitMQ-交换机落地</p><p>6、RabbitMQ-RPC回调落地</p><p>7、RabbitMQ-应用扩展</p><p>需求：创建商品的时候，同时发送短信。</p><p>需求：创建商品的时候，同时发送邮件。</p><p>直连交换机缺陷</p><p>1、无法实现多生产 对接一个消费者</p><p>需求：创建订单----&gt;创建订单消息，同时发送短信</p><p>使用：主题交换机。</p><p>需求：查询订单，查询商品。前提：必须要知道订单和商品添加成功吧</p><p>需求：创建商品，商品微服务通知消费成功的消息给生产者</p><p>扩展</p><p>1、延时队列。kafka</p><p>2、集群。微服务里面</p><p>3、微服务</p><p>4、ssdb canal微服务</p><p>5、结合ABP</p>`,277);function R(_,B){const i=d("router-link");return r(),u("div",null,[Q,e("nav",M,[e("ul",null,[e("li",null,[s(i,{to:"#目录"},{default:l(()=>[n("目录")]),_:1})]),e("li",null,[s(i,{to:"#什么是rabbitmq"},{default:l(()=>[n("什么是RabbitMQ")]),_:1})]),e("li",null,[s(i,{to:"#什么是消息"},{default:l(()=>[n("什么是消息")]),_:1})]),e("li",null,[s(i,{to:"#什么是队列"},{default:l(()=>[n("什么是队列")]),_:1})]),e("li",null,[s(i,{to:"#什么是消息队列"},{default:l(()=>[n("什么是消息队列")]),_:1})]),e("li",null,[s(i,{to:"#什么地方使用rabbitmq"},{default:l(()=>[n("什么地方使用RabbitMQ")]),_:1})]),e("li",null,[s(i,{to:"#微服务系统中为什么要使用rabbitmq"},{default:l(()=>[n("微服务系统中为什么要使用RabbitMQ")]),_:1})]),e("li",null,[s(i,{to:"#微服务系统中如何落地rabbitmq"},{default:l(()=>[n("微服务系统中如何落地RabbitMQ")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#创建商品业务场景落地"},{default:l(()=>[n("创建商品业务场景落地")]),_:1})]),e("li",null,[s(i,{to:"#创建商品业务场景落地-情况1"},{default:l(()=>[n("创建商品业务场景落地-情况1")]),_:1})]),e("li",null,[s(i,{to:"#创建商品业务场景落地-情况2"},{default:l(()=>[n("创建商品业务场景落地-情况2")]),_:1})]),e("li",null,[s(i,{to:"#创建商品业务场景落地-情况3"},{default:l(()=>[n("创建商品业务场景落地-情况3")]),_:1})]),e("li",null,[s(i,{to:"#创建商品业务场景落地-情况4"},{default:l(()=>[n("创建商品业务场景落地-情况4")]),_:1})]),e("li",null,[s(i,{to:"#创建商品业务场景落地-情况5"},{default:l(()=>[n("创建商品业务场景落地-情况5")]),_:1})]),e("li",null,[s(i,{to:"#创建商品-同时发送短信业务场景落地"},{default:l(()=>[n("创建商品，同时发送短信业务场景落地")]),_:1})]),e("li",null,[s(i,{to:"#创建商品-指定发送短信或指定发送邮件业务场景落地"},{default:l(()=>[n("创建商品，指定发送短信或指定发送邮件业务场景落地")]),_:1})]),e("li",null,[s(i,{to:"#创建订单-创建商品同时发送短信业务场景落地"},{default:l(()=>[n("创建订单，创建商品同时发送短信业务场景落地")]),_:1})]),e("li",null,[s(i,{to:"#创建商品成功回调业务场景落地"},{default:l(()=>[n("创建商品成功回调业务场景落地")]),_:1})])])]),e("li",null,[s(i,{to:"#扩展"},{default:l(()=>[n("扩展")]),_:1})]),e("li",null,[s(i,{to:"#分布式中间件专题"},{default:l(()=>[n("分布式中间件专题")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#消息中间件rabbitmq"},{default:l(()=>[n("消息中间件RabbitMQ")]),_:1})])])])])]),x])}const D=a(f,[["render",R],["__file","rabbitmq02.html.vue"]]);export{D as default};
