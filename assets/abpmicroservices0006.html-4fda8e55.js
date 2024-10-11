import{_ as c,r,o,c as u,a as e,b as n,w as a,d as i,e as l}from"./app-c1c3c937.js";const d="/images/abpmicroservices/micro006/abpmicroservices0006_0001image.png",v="/images/abpmicroservices/micro006/abpmicroservices0006_0002image.png",b={},p=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),m={class:"table-of-contents"},g=l('<h2 id="微服务事件总线-cap" tabindex="-1"><a class="header-anchor" href="#微服务事件总线-cap" aria-hidden="true">#</a> 微服务事件总线-CAP</h2><h3 id="事件总线" tabindex="-1"><a class="header-anchor" href="#事件总线" aria-hidden="true">#</a> 事件总线</h3><h4 id="什么是事物" tabindex="-1"><a class="header-anchor" href="#什么是事物" aria-hidden="true">#</a> 什么是事物</h4><p>例如：事物所有看到的一切都是事物，不能看到的也是事物 例如：团队微服务，成员微服务，聚合微服务，网关api,认证中心等等包括类，对象所有的事件都是事物变化的结果<br> 大家接触事件最早就是在js或者是C#高级特性。大家对于事件不默认，但是对于事件不是很好理解</p><h4 id="什么是事件" tabindex="-1"><a class="header-anchor" href="#什么是事件" aria-hidden="true">#</a> 什么是事件</h4><p>事件就是事物状态的变化，每一次事物变化的结果都称作为事件</p><h4 id="什么是事件总线" tabindex="-1"><a class="header-anchor" href="#什么是事件总线" aria-hidden="true">#</a> 什么是事件总线</h4><p>就是用来管理所有的事件的一种机制就称作为事件总线 包括事件发布，事件存储，事件订阅，事件处理的统称<br> 作用： 事件总线是一种机制，它允许不同的组件彼此通信而不彼此了解。组件可以将事件发送到Eventbus,而无需知道是谁来接听或有多少其他人来接听。组件也可以侦听Eventbus上的事件，而无需知道是谁发送了事件。这样，组件可以相互通信而无需相互依赖。同样，很容易替换一个组件。只要新组件了解正在发送和接收的事件，其他组件就永远不会知道。</p><h4 id="为什么要使用事件总线" tabindex="-1"><a class="header-anchor" href="#为什么要使用事件总线" aria-hidden="true">#</a> 为什么要使用事件总线</h4><p>将微服务系统各组件之间进行解耦<br> 使用业务的发展来说</p><h3 id="事件总线架构" tabindex="-1"><a class="header-anchor" href="#事件总线架构" aria-hidden="true">#</a> 事件总线架构</h3><p>CAP<br> masstransit</p><h4 id="cap内部概念" tabindex="-1"><a class="header-anchor" href="#cap内部概念" aria-hidden="true">#</a> CAP内部概念</h4><p>事件：就是一些状态信息<br> 发布者：发布事件的角色cap<br> 订阅:消费事件的角色cap<br> 消息传输器： 传输事件<br> 消息存储器：存储事件</p><h4 id="cap存储事件消息队列类型-transport" tabindex="-1"><a class="header-anchor" href="#cap存储事件消息队列类型-transport" aria-hidden="true">#</a> CAP存储事件消息队列类型 Transport</h4><p>Azure<br> rabbitmq<br> kafaka<br> in Memory Queue</p><h4 id="cap存储事件持久化类型" tabindex="-1"><a class="header-anchor" href="#cap存储事件持久化类型" aria-hidden="true">#</a> CAP存储事件持久化类型</h4><p>Sql Server Mysql<br> PostgreSQL<br> MongoDB<br> InMemoryStorage</p><h4 id="cap事件监控" tabindex="-1"><a class="header-anchor" href="#cap事件监控" aria-hidden="true">#</a> CAP事件监控</h4><p>Dashboard</p><h3 id="微服务系统中如何使用cap" tabindex="-1"><a class="header-anchor" href="#微服务系统中如何使用cap" aria-hidden="true">#</a> 微服务系统中如何使用CAP</h3><p>条件<br> 1、微服务系统<br> 2、RabbitMQ<br> 3、Mysql 4、CAP 步骤<br> 1、微服务系统准备</p>',22),h=e("br",null,null,-1),C=e("br",null,null,-1),q=e("br",null,null,-1),x=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.2.2、在安装目录下启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	rabbitmq-server 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.2.3、查看rabbitmq状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    rabbitmqctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.2.4、在浏览器输入http://127.0.0.1:15672<br> ​ 访问rabbitmq后台系统</p><p>3、Mysql准备<br> ​ Mysql启动，安装</p><p>4、CAP准备</p><p>​ 4.1 CAP环境</p><p>​ CAP官网地址：https://cap.dotnetcore.xyz/user-guide/zh/monitoring/dashboard/</p><p>​ 4.2 CPA配置</p><p>​ 1、在<code>LKN.MicroService.Core</code>项目中添加依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CAP Nuget DotNetCore.CAP
CAP传输器Nuget DotNetCore.CAP.RabbitMQ
CAP持久化DotNetCore.CAP.InMemoryStorage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2、在<code>LKN.MicroService.AggregateService</code>服务中<code>startup.cs</code>中添加</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> // 8、添加事件总线cap
            services.AddCap(x =&gt; {
                // 8.1 使用内存存储消息(消息发送失败处理)
                x.UseInMemoryStorage();

                // 8.2 使用RabbitMQ进行事件中心处理
                x.UseRabbitMQ(rb =&gt; {
                    rb.HostName = &quot;localhost&quot;;
                    rb.UserName = &quot;guest&quot;;
                    rb.Password = &quot;guest&quot;;
                    rb.Port = 5672;
                    rb.VirtualHost = &quot;/&quot;;
                });
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.1 在<code>AggregateController.cs</code>中注入<code>ICapPublisher</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>private readonly ICapPublisher capPublisher;
public TeamsController(ICapPublisher capPublisher)
    {
        this.capPublisher = capPublisher;
    }	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3、在<code>LKN.MicroService.VideoService</code>服务<code>startup.cs</code>中添加</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> // 8、添加事件总线cap
            services.AddCap(x =&gt; {
                // 8.1 使用RabbitMQ进行事件中心处理
                x.UseRabbitMQ(rb =&gt; {
                    rb.HostName = &quot;localhost&quot;;
                    rb.UserName = &quot;guest&quot;;
                    rb.Password = &quot;guest&quot;;
                    rb.Port = 5672;
                    rb.VirtualHost = &quot;/&quot;;
                });
            });	
\`\`\`\`​ 
3.1 在\`VideoController.cs\` 中方法上添加特性\`[CapSubscribe]\`
\`\`\`C# 
       /// &lt;summary&gt;
        /// 视频添加(异步添加)
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;Video&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [NonAction]
        [CapSubscribe(&quot;tontcap&quot;)]
        public ActionResult&lt;Video&gt; PostVideo(Video Video)
        {
            videoService.Create(Video);
       return CreatedAtAction(&quot;GetVideo&quot;, new { id = Video.Id }, Video);
    }	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、效果展示 ​ CAP发布原理<br> CAP消费原理<br> RabbitMQ宕机情况<br> 步骤</p><p>1、将<code>RabbitMQ</code>直接关闭</p><p>事件消息无法发送，存储到内存缓存中</p><p>2、当将<code>RabbitMQ</code>启动后，消息正常发送</p><p>​ 内部使用定时器轮询机制实现</p><p><code>AggregateService</code>宕机情况<br><code>AggregateService</code> 执行业务成功，发送消息前宕机<br> 使用本地消息表解决(思想：持久化操作)</p><p>条件</p><p>1、本地消息表</p><p>2、<code>DotNetCore.CAP.MySql</code> 依赖</p><p>步骤</p><p>1、在<code>LKN.MicroService.Core</code>项目中</p><p>​ 1.1 安装<code>mysql</code>程序集</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Nuget DotNetCore.CAP.MySql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1、在<code>LKN.MicroService.AggregateService</code>服务中</p><p>​ 1.1 创建<code>Context</code>文件，然后在<code>Context</code>文件夹内创建<code>AggregateContext</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    /// &lt;summary&gt;
    /// Aggregate服务上下文
    /// &lt;/summary&gt;
    public class AggregateContext : DbContext
    {
        public AggregateContext(DbContextOptions&lt;AggregateContext&gt; options) : base(options)
        {
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.2 在<code>appsettings.json</code>中添加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ConnectionStrings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;DefaultConnection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;server=localhost;port=3306;database=aggregateservice;uid=root;pwd=root;CharSet=utf8&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 在<code>startup.cs</code>中添加消息持久化</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>         // 9、注册上下文到IOC容器
            services.AddDbContext&lt;AggregateContext&gt;(options =&gt;
            {
                options.UseMySQL(Configuration.GetConnectionString(&quot;DefaultConnection&quot;));
            });
        // 8、添加事件总线cap
        services.AddCap(x =&gt; {
            // 8.1 使用EntityFramework进行存储操作
            x.UseEntityFramework&lt;AggregateContext&gt;();
            // 8.2 使用sqlserver进行事务处理
            x.UseMySQL(Configuration.GetConnectionString(&quot;DefaultConnection&quot;));
        // 8.2 使用RabbitMQ进行事件中心处理
        x.UseRabbitMQ(rb =&gt; {
            rb.HostName = &quot;localhost&quot;;
            rb.UserName = &quot;guest&quot;;
            rb.Password = &quot;guest&quot;;
            rb.Port = 5672;
            rb.VirtualHost = &quot;/&quot;;
        });
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.4测试演示效果</p><p>​ 数据库中多了两张表</p><p><img src="`+d+`" alt="Alt text"></p><p>​ 当业务执行成功，发送消息时，聚合微服务宕机，消息被持久化到数据库</p><p>​ 当重启聚合微服务时，消息发送成功，被成功消费</p><p>​ 1.5 原理</p><p>​ 1、定时器 消息重试</p><p>​ 2、幂等性 一个函数每次都是相同的结果，状态只有一个</p><p><code>VideoService</code>宕机情况<br><code>VideoService</code>接受消息失败<br> 当<code>VideoService</code>直接宕机的时候接受消息失败，<br> 然后重启<code>VideoService</code>消息消费成功</p><p><code>VideoService</code>接受消息成功执行失败<br> 条件</p><p>1、本地消息表</p><p>步骤</p><p>1、在LKN.MicroService.Core项目中</p><p>​ 1.1 安装mysql程序集</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Nuget DotNetCore.CAP.MySql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在<code>LKN.MicroService.VideoService</code>项目中</p><p>​ 2.1 在<code>startup.cs</code>中添加消息持久化</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    // 8、添加事件总线cap
    services.AddCap(x =&gt; {
        // 8.1 使用EntityFramework进行存储操作
        x.UseEntityFramework&lt;AggregateContext&gt;();
        // 8.2 使用sqlserver进行事务处理
        x.UseSqlServer(Configuration.GetConnectionString(&quot;DefaultConnection&quot;));
    // 8.2 使用RabbitMQ进行事件中心处理
    x.UseRabbitMQ(rb =&gt; {
        rb.HostName = &quot;localhost&quot;;
        rb.UserName = &quot;guest&quot;;
        rb.Password = &quot;guest&quot;;
        rb.Port = 5672;
        rb.VirtualHost = &quot;/&quot;;
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.2 效果展示</p><p>​ 数据库多了两张表</p><p><img src="`+d+`" alt="Alt text"></p><p>​ 2.3 原理</p><p>​ 1、定时器 消息重试</p><p>​ 2、幂等性 一个函数每次都是相同的结果，状态只有一个</p><p>3、消息重试完还是消费失败情况 ，使用人工干预实现</p><p>条件</p><p>1、<code>Dashboard</code> – 后台管理页面</p><p>步骤</p><p>1、在<code>LKN.MicroService.Core</code>项目中</p><p>​ 1.1 安装<code>Dashboard</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Nuget DotNetCore.CAP.Dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在<code>LKN.MicroService.VideoService</code>项目中</p><p>​ 2.1 在<code>startup.cs</code>中添加<code>Dashboard</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 8、添加事件总线cap
services.AddCap(x =&gt; {
    // 8.1 使用EntityFramework进行存储操作
    x.UseEntityFramework&lt;AggregateContext&gt;();
    // 8.2 使用sqlserver进行事务处理
    x.UseSqlServer(Configuration.GetConnectionString(&quot;DefaultConnection&quot;));
// 8.3 使用RabbitMQ进行事件中心处理
x.UseRabbitMQ(rb =&gt; {
    rb.HostName = &quot;localhost&quot;;
    rb.UserName = &quot;guest&quot;;
    rb.Password = &quot;guest&quot;;
    rb.Port = 5672;
    rb.VirtualHost = &quot;/&quot;;
});

// 8.4添加cap后台监控页面
    x.UseDashboard();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.2 运行打开<code>cap</code>后台监控页面</p><p>​ http://localhost:5007/cap<br><img src="`+v+`" alt="Alt text"></p><p>​ 对于发送失败的消息进行重复发送</p><p>​ 对于消费失败的消息进行重复消费</p><h3 id="订阅消息队列" tabindex="-1"><a class="header-anchor" href="#订阅消息队列" aria-hidden="true">#</a> 订阅消息队列</h3><p>实现类需要继承cap的<code>ICapSubscribe</code>接口,并在该实现类中的方法，添加特性<code>[CapSubscribe(&quot;OrderService.#&quot;)]</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> /// &lt;summary&gt;
    /// 订单服务实现
    /// &lt;/summary&gt;
    [RemoteService(IsEnabled = false)]
    public class OrderAppService : CrudAppService&lt;
                                            Orders,
                                            OrderDto,
                                            Guid,
                                            PagedAndSortedResultRequestDto,
                                            CreateOrderDto,
                                            UpdateOrderDto&gt;,IOrderAppService, ICapSubscribe
    {
        public IOrderRepository _OrderRepository;

        public OrderAppService(IOrderRepository repository)
            : base(repository)
        {
            this._OrderRepository = repository;
        }

        /// &lt;summary&gt;
        /// 接受创建订单的事件
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;createOrderDto&quot;&gt;&lt;/param&gt;
        // [CapSubscribe(&quot;OrderService.CreateOrder&quot;)]
        // OrderService.# === OrderService.CreateOrder / OrderService.123 / OrderService.4546
        [CapSubscribe(&quot;OrderService.#&quot;)]
        public void CreateOrderEvent(CreateOrderDto createOrderDto)
        {
            Console.WriteLine($&quot;创建订单：{createOrderDto}&quot;);
            // throw new Exception(&quot;创建订单失败&quot;);
            var orderDto = this.CreateAsync(createOrderDto).Result;
            Console.WriteLine($&quot;创建成功：{createOrderDto}&quot;);
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cap如何在微服务中实现高并发-高可用" tabindex="-1"><a class="header-anchor" href="#cap如何在微服务中实现高并发-高可用" aria-hidden="true">#</a> CAP如何在微服务中实现高并发/高可用</h3><p>条件</p><p>1、RabbitMQ集群</p><p>步骤</p><p>1、安装Rabbitmq集群</p><h3 id="cap集群如何在微服务中实现负载均衡" tabindex="-1"><a class="header-anchor" href="#cap集群如何在微服务中实现负载均衡" aria-hidden="true">#</a> CAP集群如何在微服务中实现负载均衡</h3><p>条件</p><p>1、Nginx</p><p>步骤</p><p>1、Nginx 层负载均衡配置</p><h4 id="cap集群如何在微服务中实现动态伸缩" tabindex="-1"><a class="header-anchor" href="#cap集群如何在微服务中实现动态伸缩" aria-hidden="true">#</a> CAP集群如何在微服务中实现动态伸缩</h4><p>条件</p><p>1、Docker 或者 k8S</p><p>步骤</p><p>1、在docker中搭建RabbitMQ集群</p>`,95);function A(S,P){const s=r("router-link"),t=r("RouterLink");return o(),u("div",null,[p,e("nav",m,[e("ul",null,[e("li",null,[n(s,{to:"#目录"},{default:a(()=>[i("目录")]),_:1})]),e("li",null,[n(s,{to:"#微服务事件总线-cap"},{default:a(()=>[i("微服务事件总线-CAP")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#事件总线"},{default:a(()=>[i("事件总线")]),_:1})]),e("li",null,[n(s,{to:"#事件总线架构"},{default:a(()=>[i("事件总线架构")]),_:1})]),e("li",null,[n(s,{to:"#微服务系统中如何使用cap"},{default:a(()=>[i("微服务系统中如何使用CAP")]),_:1})]),e("li",null,[n(s,{to:"#订阅消息队列"},{default:a(()=>[i("订阅消息队列")]),_:1})]),e("li",null,[n(s,{to:"#cap如何在微服务中实现高并发-高可用"},{default:a(()=>[i("CAP如何在微服务中实现高并发/高可用")]),_:1})]),e("li",null,[n(s,{to:"#cap集群如何在微服务中实现负载均衡"},{default:a(()=>[i("CAP集群如何在微服务中实现负载均衡")]),_:1})])])])])]),g,e("p",null,[i("2、RabbitMQ准备"),h,i(" 2.1 环境准备"),C,n(t,{to:"/technology/back_end/rabbitmq/rabbitmq02.html"},{default:a(()=>[i("分布式中间件-RabbitMQ（二）-参考该章节安装部署环境")]),_:1}),i(" 2.2 RabbitMQ启动"),q,i(" 2.2.1、在安装目录添加可视化插件")]),x])}const f=c(b,[["render",A],["__file","abpmicroservices0006.html.vue"]]);export{f as default};
