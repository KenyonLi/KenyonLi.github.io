import{_ as r,r as t,o as l,c,a as e,b as n,w as i,d as a,e as o}from"./app-c1c3c937.js";const p="/images/abpmicroservices/micro009/abpmicroservices0009_0001image.png",d="/images/abpmicroservices/micro009/abpmicroservices0009_0002image.png",u="/images/abpmicroservices/micro009/abpmicroservices0009_0003image.png",v="/images/abpmicroservices/micro009/abpmicroservices0009_0004image.png",m="/images/abpmicroservices/micro009/abpmicroservices0009_0005image.png",b="/images/abpmicroservices/micro009/abpmicroservices0009_0006image.png",g="/images/abpmicroservices/micro009/abpmicroservices0009_0007image.png",h="/images/abpmicroservices/micro009/abpmicroservices0009_0008image.png",k="/images/abpmicroservices/micro009/abpmicroservices0009_0009image.png",q="/images/abpmicroservices/micro009/abpmicroservices0009_0010image.png",S={},D=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),a(" 目录")],-1),f={class:"table-of-contents"},_=o('<h2 id="微服务分布式事务" tabindex="-1"><a class="header-anchor" href="#微服务分布式事务" aria-hidden="true">#</a> 微服务分布式事务</h2><h2 id="为什么要学习分布式事务" tabindex="-1"><a class="header-anchor" href="#为什么要学习分布式事务" aria-hidden="true">#</a> 为什么要学习分布式事务</h2><p>目的：提升分布式架构设计水平，保证数据稳定性。 有一天，你们设计的系统，小明在操作你设计的系统，这个时候，小明上传了一张林志玲，获取的时候居然是王宝强？<br> 为什么会出现这种现象，我上传什么应该就获取什么呀？怎么会出现这样的问题呢？这是数据被掉包了。<br> 但是这是数据不一致导致的，那么我们如何解决呢？<br> 我我们学会分布式事务，我们就能解决。<br> 如果你去公司面试，遇到了类似了场景，你就把握了面试的机会因此，学好分布事务是非常重要的。</p><h2 id="什么是事务" tabindex="-1"><a class="header-anchor" href="#什么是事务" aria-hidden="true">#</a> 什么是事务</h2><p>事务由一组操作的一个工作单元。怎么去理解这个问题呢？<br> 我们从现实生活中去理解<br> 那么事务有哪些特性呢？ 事务特性：<br> 1、原子性：事务内部的一组操作要么同时成功，要么同时失败<br> 2、隔离性： 不同事务之间是互相不影响的<br> 3、持久性：事务内部一组操作，各个操作产生的数据要能够持久的效应<br> 4、一致性：事务内部一组操作，各自操作产生的结果数据，要能够保证是预期的状态</p><h2 id="什么是本地事务" tabindex="-1"><a class="header-anchor" href="#什么是本地事务" aria-hidden="true">#</a> 什么是本地事务</h2><p>本地事务就是由一组sql语句操作的集合;<br> 本地事务主要就是指sql语句的操作</p><h2 id="什么是分布式事务" tabindex="-1"><a class="header-anchor" href="#什么是分布式事务" aria-hidden="true">#</a> 什么是分布式事务</h2><p>分布式事务就是一组服务操作的集合<br> 例如：在分布式系统或者微服务系统内，完成一个任何，需要涉及到多个服务来共同完成，这一组服务操作组成的集合，就是分布式事务。</p><h2 id="分布式事务类型" tabindex="-1"><a class="header-anchor" href="#分布式事务类型" aria-hidden="true">#</a> 分布式事务类型</h2><p>不同服务不同数据库<br> 都可以参进各个图<br> 不同服务相同数据库<br> 都可以参进各个图 相同服务不同数据库 都可以参进各个图</p><h2 id="为什么要使用分布式事务" tabindex="-1"><a class="header-anchor" href="#为什么要使用分布式事务" aria-hidden="true">#</a> 为什么要使用分布式事务</h2><p>我们从真实的项目场景中出发，例如我们现在学习的微服务架构，那么我们现在来研究一下为什么要使用分布式事务<br> 目前我们的项目已经集成了4个微服务架构技术，那么我们目前来看一下，他们之间的调用逻辑<br> 现在有这样一个需求，我想通过在订单聚合微服务添加订单和商品 如果在添加订单和商品，如果添加订单信息成功了，商品失败了，那么这个时候，就会出现订单添加成功，而商品信息就没有添加成功，是吧，那么，这个问题该如何解决呢？<br> 很多同学，想到了解决方案，就是今天讲的分布式事务。<br> 那么分布式事务是如何解决的呢？<br> 目前方案有很多，目前事务分类为两类：一种是刚性事务，一种是柔性事务</p><p><strong>刚性事务</strong><br> 就是完全遵守事务4大特性的分布式事务——主要体现在一致性（强一致性）<br> cap理论 2阶段提交<br> 3阶段提交</p><p><strong>柔性事务</strong> 就是不完全遵守事务4特性的分布式事务——主要体现在一致性（不完全一直，最终一致性）<br> Base理论<br> 特性<br> 可查询操作：服务操作具有全局唯一标识，操作唯一确定的时间<br> 幂等操作：重复调用多次产生的业务结果与调用一次产生的结果相同，一是通过型业务操作实现幂等性，二是系统缓存所有请求与处理结果，最后是检测到重复请求之后，自动返回之前的处理结果。</p><p>同步事务（http,rpc）</p><p>Tcc分布式事务</p><p>Saga公布式事务</p><p>异步事务（消息队列MQ）</p><p>本地消息表</p><h2 id="分布式事务方案演化" tabindex="-1"><a class="header-anchor" href="#分布式事务方案演化" aria-hidden="true">#</a> 分布式事务方案演化</h2><p>2阶段提交<br> 1、准备阶段 prepare 2、提交阶段 commit 优点<br> 保证了数据的强一致性，适合对数据强一致性要求很高的关键领域<br> 缺点<br> 1、同步阻塞 性能问题<br> 2、数据一致性问题<br> 3、单点故障<br> 场景<br> 同服务不同数据库</p><p>3阶段提交<br> 1、确认阶段 canCommit 2、准备阶段 PreCommit<br> 3、提交阶段 do commit</p><p>优点<br> 避免了单点问题，避免了阻塞问题<br> 缺点<br> 1、状态不一致<br> 同服务不同数据库<br> 场景<br> 同服务不同数据库</p><h2 id="tcc分布式事务" tabindex="-1"><a class="header-anchor" href="#tcc分布式事务" aria-hidden="true">#</a> TCC分布式事务</h2><p>优点<br> 1、解决了跨服务的业务操作原子性能问题，例如组合支付，订单减库等场景非常实用<br> 2、TCC的本质原理是把数据库的二阶段提交上升到微服务来实现，从而避免了数据库2阶段中锁冲突的长事务低性能风险。<br> 3、TCC异步高性能，它采用了try先检查，然后异步实现confirm,真正提交的是在confirm方法中。<br> 缺点<br> 1、对微服务的入侵性强，微服务的每个事务都必须实现try,confirm,cance等3个方法，开发成本高，今后维护改造成本高。<br> 2、为了达到事务的一致性要求，try,confrim,cance接口必须实现等幂性操作。（定时器+ 重试）<br> 3、由于事务管理要记录日志，必定会损耗一定的性能，并使得整个TCC事务时间拉长，建议采用redis的方式来记录事务日志。<br> 场景：微服务</p><h2 id="saga分布式事务" tabindex="-1"><a class="header-anchor" href="#saga分布式事务" aria-hidden="true">#</a> Saga分布式事务</h2><p>优点<br> 1、避免服务之间服务循环依赖，因为saga协调器会调用saga参与者，但参与者不会调用协调器<br> 2、集中分布式事务编排<br> 3、降低参考者的复杂性<br> 4、回滚更容易管理</p><p>saga模式的一大优势是它支持长事务。因为每个微服务仅关注其自己的本地原子事务，所以如果微服务运行很长时间，则不会阻止其他微服务。这也允许事务断续等待用户输入。此处，由于所有本地事务者是并行发生的，因此任何对象都没有锁定。</p><p>缺点</p><p>协调器集中太多逻辑的风险<br> Saga模式很难调试，特别是涉及许多微服务时，此外，如果系统变得复杂，事件消息可能变得难以维护。Saga模式的另一个缺点是它没有读取隔离，例如，客户可以看到正在创建的订单，但在下一秒，订单将因补偿交易被删除。<br> 场景：微服务</p><h2 id="saga分布式事务框架" tabindex="-1"><a class="header-anchor" href="#saga分布式事务框架" aria-hidden="true">#</a> Saga分布式事务框架</h2><p>主要用在微服务<br> 1、Eventuate-Tram-Saga JDBC/JPA 的java微服务的Saga框架<br> 目前C# net 没有支持的客户端，不好使用</p><p>2、ServiceComb Pack<br> 是华为开源的一个微服务架构后进入Apache软件基金会孵化，Servicecomb是华为开源的一个微服务事务框架，后进入Apache软件基金会孵化，现已毕业，是apache顶级开源项目，而servicecomb-pack是servicecomb孵化三个子项目之一，是分布式事务最终一致性解决方案，0.3.0版本之前叫saga,现改名为servicecomb-pack,支持saga和tcc两种分布式事务协议，相关理论知识请稳步（传送门），本文请要介绍saga模式。</p><h2 id="微服务项目中如何使用servicecomb-pack" tabindex="-1"><a class="header-anchor" href="#微服务项目中如何使用servicecomb-pack" aria-hidden="true">#</a> 微服务项目中如何使用ServiceComb Pack</h2><p>特性<br> 高可用：支持高可用的集群模式部署<br> 高可靠：所有的关键事务事件都持久存储在数据库中。 高性能：事务事件是通过高性能gRPC来上报的，且事务的请求和响应消息都是通过Kyro进行序列化和反序列化。<br> 低侵入：仅需2-3个注解和编写对应的补偿方法即可引入分布式事务。 部署简单：支持通过容器（Docker）进行快速部署和交付。<br> 补偿机制灵活：支持前向恢复（重试）及后向恢复（补偿）功能。<br> 扩展简单：基于Pack架构很容易实现多种协调协议，目前支持Tcc,Saga协议，未来还可以添加其他协议支持。</p><p><strong>内部概念</strong><br> ServiceComb Pack架构是由alpha 和 omega 组成，其中：</p><ul><li>alpha充当协调者的角色，主要负责对事务进行管理和协调。</li><li>omega是微服务中内嵌的一个agent,负责对调用请求进行拦截并向alpha上报事务事件。</li></ul><p>微服务项目和ServiceCom</p><p><img src="'+p+`" alt="Alt text"></p><h2 id="微服务项目中如何使用servicecomb-pack-1" tabindex="-1"><a class="header-anchor" href="#微服务项目中如何使用servicecomb-pack-1" aria-hidden="true">#</a> 微服务项目中如何使用ServiceComb Pack</h2><p>条件</p><p>1、微服务项目</p><p>2、ServiceComb Pack saga事务框架alpha，协调器</p><p>3、servicecomb-pack-csharp-omega_v0.1，saga事务框架客户端omega，客户端</p><p>4、mysql或者PostgreSQL</p><p>步骤<br> 1、微服务项目操作</p><p>​ 1.1 启动微服务项目，正确响应出结果</p><p>2、alpha操作</p><p>​ 2.1 环境准备</p><p>​ jdk1.8 下载地址http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html</p><p>​ PostgreSQL下载地址：https://www.enterprisedb.com/downloads/postgres-postgresql-downloads。</p><p>​ Mysql下载地址：https://dev.mysql.com/downloads/mysql/</p><p>​ ServiceComb Pack 下载地址：http://servicecomb.apache.org/release/pack-downloads/</p><p>​ Mysql和PostgreSQL二者选一，默认是PostgreSQL</p><p>​ 2.2 ServiceComb Pack 启动 (连接mysql为例)</p><p>​ 2.2.1 PostgreSQL下启动ServiceComb Pack<br> ​ 切换到什么目录 D:\\alpha\\apache-servicecomb-pack-distribution-0.5.0-bin 先创建数据库 <code>saga</code> 在执行指令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=prd&quot;</span> -D<span class="token string">&quot;spring.datasource.url=jdbc:postgresql://localhost:5432/saga?useSSL=false&quot;</span> -D<span class="token string">&quot;spring.datasource.username=root&quot;</span> -D<span class="token string">&quot;spring.datasource.password=root&quot;</span> <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.2.2 mysql配置</p><p>​ 1、在apache-servicecomb-pack-distribution-0.5.0-bin目录下创建插件目录</p><p>​ plugins文件夹</p><p>​ 2、 在plugins文件夹内部添加mysql驱动</p><p>​ <a href="/file/mysql/mysql-connector-java-8.0.15.jar">mysql-connector-java-8.0.15.jar</a></p><p>​ 3、mysql下启动ServiceComb Pack</p><p>​ 切换到什么目录 D:\\alpha\\apache-servicecomb-pack-distribution-0.5.0-bin</p><p>先创建数据库 <code>saga</code> 在执行指令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>进入apache-servicecomb-pack-distribution-0.5.0-bin目录
打开application.yml文件
添加spring.datasource.url
添加spring.datasource.username
添加spring.datasource.password
使用cmd,输入命令
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar

或者不修改配置application.yml文件，直接启动
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;spring.datasource.url=jdbc:mysql://localhost:3306/saga?useSSL=false&amp;serverTimezone=Asia/Shanghai&quot;</span> -D<span class="token string">&quot;spring.datasource.username=root&quot;</span> -D<span class="token string">&quot;spring.datasource.password=root&quot;</span> <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、查询mysql saga数据库</p><p><img src="`+d+'" alt="Alt text"></p><p>​ txexvent- 事件表详情</p><p>​ txtimeout-超时表详情</p><p>​ compenste-补偿表详情</p><p>3、omega操作</p><p>​ 3.1 环境准备</p><p>​ servicecomb-pack-csharp-omega_v0.1 下载地址：https://github.com/OpenSagas-csharp/servicecomb-pack-csharp#servicecomb-pack-csharp</p><p>​ 3.2 omega配置</p><p>​ 1、在LKN.MicroService下面创建解决方案文件夹</p><p>​ omega文件夹</p><p>​ 2、在omega文件下面从导入项目</p><p><img src="'+u+'" alt="Alt text"></p><p>3、在LKN.OrderDetailsServices,LKN.OrderService,LKN.ProductService下分别引入</p><p><img src="'+v+'" alt="Alt text"></p><p>4、在LKN.OrderDetailsServices,LKN.OrderService,LKN.ProductService中从Servicecomb.Saga.Omega.Core中复制AssemblyInfo.cs 到根目录下</p><p>​ <code>AssemblyInfo.cs </code></p><p><img src="'+m+'" alt="Alt text"></p><p>​ 5、在LKN.OrderDetailsServices,LKN.OrderService,LKN.ProductService项目startup.cs引入</p><p>引入MethodDecorator.Fody程序集 编译时植入</p><p><img src="'+b+`" alt="Alt text"></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> public void ConfigureServices(IServiceCollection services)
        {
            // 7、注册saga分布式事务
            services.AddOmegaCore(option =&gt;
            {
                option.GrpcServerAddress = &quot;localhost:8080&quot;; // 1、协调中心地址
                option.InstanceId = &quot;AggregateService-1&quot;;// 2、服务实例Id
                option.ServiceName = &quot;AggregateService&quot;;// 3、服务名称
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 6、在LKN.OrderDetailsServices项目OrderDetailsController.cs文件中添加<code>SagaStart</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>
        /// &lt;summary&gt;
        /// 创建订单
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        // [HttpPost(&quot;CreateOrder&quot;), SagaStart]
        [HttpPost(&quot;CreateOrder&quot;), SagaStart(TimeOut=3)] // 开启分布式事务 
        public OrderDto CreateOrder(CreateOrderDto createOrderDto)
        {
            // 1、创建订单
            createOrderDto.Id = Guid.NewGuid();
            OrderDto orderDto = _OrderAppService.CreateAsync(createOrderDto).Result;

            // 2、扣减库存
            string guid = &quot;3a0dbecd-d8bc-b847-4c93-82f82bc0d608&quot;;
            UpdateProductDto updateProductDto = new UpdateProductDto();
            updateProductDto.ProductStock = 2;
            updateProductDto.Id = Guid.Parse(guid);
            var productDto = _ProductAppService.UpdateAsync(updateProductDto.Id, updateProductDto).Result;

            // 3、执行失败
            // throw new Exception(&quot;执行异常&quot;);
            return orderDto;
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 7、在OrdersService项目中LKN.Order.HttpApi.cs文件下添加</p><p>​ 引入MethodDecorator.Fody 编译时植入<br> ​添加 <code>AssemblyInfo.cs </code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> /// &lt;summary&gt;
    /// 1、删除订单方法
    /// 抛出了，会进行重复的执行，直到成功，使用的是幂等机制
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;input&quot;&gt;&lt;/param&gt;
    void DeleteOrder(CreateOrderDto input)
    {
        _logger.LogInformation(&quot;删除订单&quot;);
        //throw new Exception(&quot;21221&quot;);
        //使用数据库本地事务
        // UnitofWork
        // cap是异步请求，同步
        _OrderAppService.DeleteAsync(input.Id).Wait();
    }

    /// &lt;summary&gt;
    /// 异步创建订单
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;input&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [NonAction]
    public async Task&lt;OrderDto&gt; CreateOrder(CreateOrderDto input)
    {
        Console.WriteLine(&quot;异步创建订单&quot;);
        return await _OrderAppService.CreateAsync(input);
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 8、在ProductService项目中LKN.Product.HttpApi.cs文件下添加</p><p>​ 引入MethodDecorator.Fody 编译时植入 ​添加 <code>AssemblyInfo.cs </code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
        /// 更新方法接受
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;input&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPut, Compensable(nameof(RecoverStock))]
        public async Task&lt;ProductDto&gt; UpdateAsync(Guid id, UpdateProductDto input)
        {
            return await _ProductAppService.UpdateAsync(id, input);
        }
        /// &lt;summary&gt;
        /// 恢复库存
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;input&quot;&gt;&lt;/param&gt;
        void RecoverStock(UpdateProductDto input)
        {
            Console.WriteLine(&quot;恢复商品库存&quot;);
            input.ProductStock = 10;
            _ProductAppService.UpdateAsync(input.Id, input).Wait();
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正常情况</strong></p><p>全部执行成功的情况下面</p><p><img src="`+g+'" alt="Alt text"></p><p><strong>异常情况</strong></p><p><img src="'+h+'" alt="Alt text"></p><p>异常时Command表会记录请求信息，便于补偿重试。</p><p><img src="'+k+`" alt="Alt text"></p><h2 id="servicecomb-pack-saga-集群" tabindex="-1"><a class="header-anchor" href="#servicecomb-pack-saga-集群" aria-hidden="true">#</a> ServiceComb Pack(Saga)集群</h2><p>步骤</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、先启动一个master节点

<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span>  <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar

<span class="token number">2</span>、然后进入application.yaml

修改alpha.server.port

修改server.port

<span class="token number">3</span>、然后启动slaver节点

<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span> <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、ServiceComb Pack (Saga)实例1</p><p>切换到什么目录 D:\\apache-servicecomb-pack-distribution-0.5.0-bin 使用cmd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>然后进入application.yaml
修改alpha.server.port<span class="token operator">=</span><span class="token number">8080</span>
修改server.port<span class="token operator">=</span><span class="token number">8090</span>
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span>  <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar

或者不修改application.yaml配置文件直接启动
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;spring.datasource.url=jdbc:mysql://localhost:3306/saga?useSSL=false&amp;serverTimezone=Asia/Shanghai&quot;</span> -D<span class="token string">&quot;spring.datasource.username=root&quot;</span> -D<span class="token string">&quot;spring.datasource.password=root&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span>  -D<span class="token string">&quot;alpha.server.port=8081&quot;</span> -D<span class="token string">&quot;server.port=8091&quot;</span>  <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、ServiceComb Pack(Saga) 实例2</p><p>切换到什么目录 D:\\apache-servicecomb-pack-distribution-0.5.0-bin 使用cmd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>然后进入application.yaml
修改alpha.server.port<span class="token operator">=</span><span class="token number">8081</span>
修改server.port<span class="token operator">=</span><span class="token number">8091</span>
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span>  <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar

或者不修改application.yaml配置文件直接启动
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;spring.datasource.url=jdbc:mysql://localhost:3306/saga?useSSL=false&amp;serverTimezone=Asia/Shanghai&quot;</span> -D<span class="token string">&quot;spring.datasource.username=root&quot;</span> -D<span class="token string">&quot;spring.datasource.password=root&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span> -D<span class="token string">&quot;alpha.server.port=8081&quot;</span> -D<span class="token string">&quot;server.port=8091&quot;</span>  <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、ServiceComb Pack(Saga)实例3</p><p>切换到什么目录 D:\\apache-servicecomb-pack-distribution-0.5.0-bin 使用cmd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>然后进入application.yaml
修改alpha.server.port<span class="token operator">=</span><span class="token number">8082</span>
修改server.port<span class="token operator">=</span><span class="token number">8092</span>
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span>  <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar

或者不修改application.yaml配置文件直接启动
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;spring.datasource.url=jdbc:mysql://localhost:3306/saga?useSSL=false&amp;serverTimezone=Asia/Shanghai&quot;</span> -D<span class="token string">&quot;spring.datasource.username=root&quot;</span> -D<span class="token string">&quot;spring.datasource.password=root&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span> -D<span class="token string">&quot;alpha.server.port=8082&quot;</span> -D<span class="token string">&quot;server.port=8092&quot;</span>  <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、分别连接到不同的集群进行操作数据库</p><h2 id="servicecomb-pack-saga-协调器集群如何实现负载均衡" tabindex="-1"><a class="header-anchor" href="#servicecomb-pack-saga-协调器集群如何实现负载均衡" aria-hidden="true">#</a> ServiceComb Pack(Saga)协调器集群如何实现负载均衡</h2><p>条件</p><p>1、Nginx</p><p>步骤</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、先进入nginx/conf目录
配置
server <span class="token punctuation">{</span>
        listen       <span class="token number">8089</span> http2<span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
            grpc_pass grpc://grpcservers<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

upstream grpcservers <span class="token punctuation">{</span>
  server localhost:8080<span class="token punctuation">;</span> <span class="token comment">#后端 8080 地址</span>
  server localhost:8081<span class="token punctuation">;</span> <span class="token comment">#后端 8081 地址</span>
 <span class="token punctuation">}</span>
<span class="token comment"># 支持的不是很好，</span>
<span class="token comment"># https方式可以解决</span>
<span class="token comment"># openssl搞定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="servicecomb-pack-saga-注册到consul" tabindex="-1"><a class="header-anchor" href="#servicecomb-pack-saga-注册到consul" aria-hidden="true">#</a> ServiceComb Pack (saga)注册到consul</h2><p>条件</p><p>1、consul</p><p>步骤</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、先进入到bootstrap.yaml文件

修改spring.cloud.consul.enabled<span class="token operator">=</span>true

<span class="token number">2</span>、然后进入application.yaml

修改spring.cloud.consul.host<span class="token operator">=</span>localhost

修改spring.cloud.consul.port<span class="token operator">=</span><span class="token number">8500</span>

<span class="token number">3</span>、然后启动consul服务器

consul agent <span class="token parameter variable">-dev</span>

单个实例启动
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar

或者不修改bootstrap.yaml和application.yaml配置文件，直接启动
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;spring.datasource.url=jdbc:mysql://localhost:3306/saga?useSSL=false&amp;serverTimezone=Asia/Shanghai&quot;</span> -D<span class="token string">&quot;spring.datasource.username=root&quot;</span> -D<span class="token string">&quot;spring.datasource.password=root&quot;</span> -D<span class="token string">&quot;spring.cloud.consul.host=http://127.0.0.1&quot;</span> -D<span class="token string">&quot;spring.cloud.consul.port=8500&quot;</span> -D<span class="token string">&quot;spring.cloud.consul.enabled=true&quot;</span> <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar

集群启动
先启动Master节点
<span class="token function">java</span> -D<span class="token string">&quot;spring.profiles.active=mysql&quot;</span> -D<span class="token string">&quot;loader.path=./plugins&quot;</span> -D<span class="token string">&quot;alpha.cluster.master.enabled=true&quot;</span>  <span class="token parameter variable">-jar</span> alpha-server-0.5.0-exec.jar

然后启动Slaver节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意细节：注册consul时 实例名称过长，默认的数据库表字段长度36过短，修改100长度即可，否则会报错。</p><p><img src="`+q+`" alt="Alt text"></p><p>2、consul客户端查看</p><h2 id="saga协调器集群如何在微服务里面进行通用封装" tabindex="-1"><a class="header-anchor" href="#saga协调器集群如何在微服务里面进行通用封装" aria-hidden="true">#</a> Saga协调器集群如何在微服务里面进行通用封装</h2><p>条件</p><p>1、DistributedTransactionServiceCollectionExtensions</p><p>步骤</p><p>创建DistributedTransactionServiceCollectionExtensions类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public static class DistributedTransactionServiceCollectionExtensions
    {
        public static IServiceCollection AddOmegaCoreCluster(this IServiceCollection services, string omegaServiceName, string ServiceName)
        {
            // 1、注册Omega服务发现
            services.AddSingleton&lt;OmegaConsulServiceDiscovery&gt;();
            ServiceProvider serviceProvider = services.BuildServiceProvider();
            // 2、获取Omega服务发现
            OmegaConsulServiceDiscovery omega = serviceProvider.GetService&lt;OmegaConsulServiceDiscovery&gt;();
            IList&lt;ServiceUrl&gt; serviceUrls = omega.Discovery(omegaServiceName).Result;
            // 3、获取负载均衡
            ILoadBalance loadBalance = serviceProvider.GetService&lt;ILoadBalance&gt;();
            ServiceUrl serviceUrl = loadBalance.Select(serviceUrls);
            services.AddOmegaCore(option =&gt;
            {
                option.GrpcServerAddress = serviceUrl.Url; // 1、协调中心地址
                option.InstanceId = ServiceName + Guid.NewGuid().ToString();// 2、服务实例Id
                option.ServiceName = ServiceName;// 3、服务名称
            });
            return services;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,136);function y(x,C){const s=t("router-link");return l(),c("div",null,[D,e("nav",f,[e("ul",null,[e("li",null,[n(s,{to:"#目录"},{default:i(()=>[a("目录")]),_:1})]),e("li",null,[n(s,{to:"#微服务分布式事务"},{default:i(()=>[a("微服务分布式事务")]),_:1})]),e("li",null,[n(s,{to:"#为什么要学习分布式事务"},{default:i(()=>[a("为什么要学习分布式事务")]),_:1})]),e("li",null,[n(s,{to:"#什么是事务"},{default:i(()=>[a("什么是事务")]),_:1})]),e("li",null,[n(s,{to:"#什么是本地事务"},{default:i(()=>[a("什么是本地事务")]),_:1})]),e("li",null,[n(s,{to:"#什么是分布式事务"},{default:i(()=>[a("什么是分布式事务")]),_:1})]),e("li",null,[n(s,{to:"#分布式事务类型"},{default:i(()=>[a("分布式事务类型")]),_:1})]),e("li",null,[n(s,{to:"#为什么要使用分布式事务"},{default:i(()=>[a("为什么要使用分布式事务")]),_:1})]),e("li",null,[n(s,{to:"#分布式事务方案演化"},{default:i(()=>[a("分布式事务方案演化")]),_:1})]),e("li",null,[n(s,{to:"#tcc分布式事务"},{default:i(()=>[a("TCC分布式事务")]),_:1})]),e("li",null,[n(s,{to:"#saga分布式事务"},{default:i(()=>[a("Saga分布式事务")]),_:1})]),e("li",null,[n(s,{to:"#saga分布式事务框架"},{default:i(()=>[a("Saga分布式事务框架")]),_:1})]),e("li",null,[n(s,{to:"#微服务项目中如何使用servicecomb-pack"},{default:i(()=>[a("微服务项目中如何使用ServiceComb Pack")]),_:1})]),e("li",null,[n(s,{to:"#微服务项目中如何使用servicecomb-pack-1"},{default:i(()=>[a("微服务项目中如何使用ServiceComb Pack")]),_:1})]),e("li",null,[n(s,{to:"#servicecomb-pack-saga-集群"},{default:i(()=>[a("ServiceComb Pack(Saga)集群")]),_:1})]),e("li",null,[n(s,{to:"#servicecomb-pack-saga-协调器集群如何实现负载均衡"},{default:i(()=>[a("ServiceComb Pack(Saga)协调器集群如何实现负载均衡")]),_:1})]),e("li",null,[n(s,{to:"#servicecomb-pack-saga-注册到consul"},{default:i(()=>[a("ServiceComb Pack (saga)注册到consul")]),_:1})]),e("li",null,[n(s,{to:"#saga协调器集群如何在微服务里面进行通用封装"},{default:i(()=>[a("Saga协调器集群如何在微服务里面进行通用封装")]),_:1})])])]),_])}const j=r(S,[["render",y],["__file","abpmicroservices0009.html.vue"]]);export{j as default};
