import{_ as d,r,o as c,c as o,a as n,b as e,w as i,d as s,e as t}from"./app-c1c3c937.js";const u="/images/redis/redis_0001image.png",p="/images/redis/redis_0002image.png",v="/images/redis/redis_0003image.png",m="/images/redis/redis_0004image.png",b="/images/redis/redis_0005image.png",k="/images/redis/redis_0006image.png",g="/images/redis/redis_0007image.png",h="/images/redis/redis_0008image.png",f="/images/redis/redis_0009image.png",_="/images/redis/redis_0010image.png",x="/images/redis/redis_0011image.png",y="/images/redis/redis_0012image.png",q="/images/redis/redis_0013image.png",C="/images/redis/redis_0014image.png",S="/images/redis/redis_0015image.png",P="/images/redis/redis_0016image.png",R="/images/redis/redis_0017image.png",A="/images/redis/redis_0018image.png",w="/images/redis/redis_0019image.png",M="/images/redis/redis_0020image.png",T="/images/redis/redis_0021image.png",L="/images/redis/redis_0022image.png",D="/images/redis/redis_0023image.png",I="/images/redis/redis_0024image.png",H="/images/redis/redis_0025image.png",O="/images/redis/redis_0026image.png",V="/images/redis/redis_0027image.png",G="/images/redis/redis_0028image.png",j="/images/redis/redis_0029image.png",z="/images/redis/redis_0030image.png",B="/images/redis/redis_0031image.png",E="/images/redis/redis_0032image.png",J="/images/redis/redis_0033image.png",F="/images/redis/redis_0034image.png",U="/images/redis/redis_0035image.png",N="/images/redis/redis_0036image.png",K="/images/redis/redis_0037image.png",$="/images/redis/redis_0038image.png",W="/images/redis/redis_0039image.png",X={},Z=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),Q={class:"table-of-contents"},Y=t('<h2 id="分布式中间件-redis" tabindex="-1"><a class="header-anchor" href="#分布式中间件-redis" aria-hidden="true">#</a> 分布式中间件-Redis</h2><h3 id="什么是redis" tabindex="-1"><a class="header-anchor" href="#什么是redis" aria-hidden="true">#</a> 什么是Redis</h3><p>Redis是分布式缓存，主要是为了提升系统查询性能</p><p><img src="'+u+'" alt="Alt text"></p><h3 id="什么地方使用redis" tabindex="-1"><a class="header-anchor" href="#什么地方使用redis" aria-hidden="true">#</a> 什么地方使用Redis</h3><p>Redis主要用在集群系统中。</p><h3 id="集群系统中为什么要使用redis" tabindex="-1"><a class="header-anchor" href="#集群系统中为什么要使用redis" aria-hidden="true">#</a> 集群系统中为什么要使用Redis</h3><p>单体电商</p><p><img src="'+p+'" alt="Alt text"></p><p>单体电商-本地缓存</p><p><img src="'+v+'" alt="Alt text"></p><p>电商集群</p><p><img src="'+m+'" alt="Alt text"></p><p>电商集群-Redis</p><p><img src="'+b+'" alt="Alt text"></p><p>分析：单个系统，主要用来处理客户端的请求，一个系统处理客户端的请求量是有限的，当客户端的并发量，超过了系统的并发处理的并发能力，就会导致系统处理速度变慢，也就是所谓的性能下降。所以，为了提升性能。因此我们需要通过多个实例来分离。所以，，我们会创建多个系统实例，形成的系统就叫做集群系统。可以，集群系统，如何均衡处理客户端的请求。<br> 分流代表技术，就是Redis.<br> 在什么样的集群系统中使用redis呢？<br> 用的比较多的就是电商集群系统。那么，在电商集群系统中如何落地Redis?<br> 业务场景：创建商品业务场景</p><h2 id="集群系统如何落地redis" tabindex="-1"><a class="header-anchor" href="#集群系统如何落地redis" aria-hidden="true">#</a> 集群系统如何落地Redis</h2><p>前提：<br> 1、电商系统<br> 2、Redis<br> 步骤</p>',18),nn=n("p",null,[s("1、电商集群系统准备 通过vs创建.net7电商系统"),n("br"),s(" 2、Redis准备")],-1),sn=n("br",null,null,-1),en=n("br",null,null,-1),an={href:"http://download.redis.io/releases/redis-7.2.0.tar.gz",target:"_blank",rel:"noopener noreferrer"},ln=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># wget http://download.redis.io/releases/redis-7.2.0.tar.gz </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -xzf redis-7.2.0.tar.gz</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd redis-7.2.0/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),tn=n("br",null,null,-1),rn={href:"https://www.cnblogs.com/operationhome/p/9752935.html",target:"_blank",rel:"noopener noreferrer"},dn=t(`<p><code>jemalloc/jemalloc.h: No such file or directory。</code> 这个错误，是因为系统没有安装gcc 如何导致的，当安装好gcc后，执行的命令<code>makk</code><br> 正确的解决</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># make distclean  &amp;&amp; make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">分析：导致出现这个错误的原因</p><p>错误的本质是我们在开始执行make 时遇到了错误（大部分是由于gcc未安装），然后我们安装好了gcc 后，我们再执行make ,这时就出现了jemalloc/jemalloc.h: No such file or directory。这是因为上次的</p><p>编译失败，有残留的文件，我们需要清理下，然后重新编译就可以了。</p><p>网上的解决办法是有什么错误吗？</p><p>网上的解决办法虽然最后也是可以成功安装好 redis ,但是是有一些隐患的，首先我们要知道redis 需要使用内存分配器的， make MALLOC=jemalloc 就是指定内存分配器为 jemalloc ，make MALLOC=libc 就是指定内存分配器为 libc ，这个是有安全隐患的，jemalloc 内存分配器在实践中处理内存碎片是要比libc 好的，而且在README.md 文档也说明到了，jemalloc内存分配器也是包含在源码包里面的，可以在deps 目录下看到 jemalloc 目录。</p></div><blockquote><blockquote><p>2.2 然后打开redis.conf配置，在里面添加 <code>bind 0.0.0 -::1</code> ,并且关闭 <code>protected-mode</code> 值为<code>no</code> 否则外网不可访问。</p></blockquote></blockquote><p><img src="`+k+'" alt="Alt text"></p><blockquote><blockquote><p>2.3 然后启动Redis</p></blockquote></blockquote><p><img src="'+g+'" alt="Alt text"></p><blockquote><p>3、客户端访问</p><blockquote><p>3.1 进入浏览器进行访问</p></blockquote></blockquote><p><img src="'+h+'" alt="Alt text"></p><h3 id="查询商品缓存redis原理" tabindex="-1"><a class="header-anchor" href="#查询商品缓存redis原理" aria-hidden="true">#</a> 查询商品缓存Redis原理</h3><h4 id="redis做了3件事情" tabindex="-1"><a class="header-anchor" href="#redis做了3件事情" aria-hidden="true">#</a> redis做了3件事情</h4><p>1、建立连接<br> 2、存储数据到本地缓存中（redis）<br> 3、持久化数据到文件（开启新线程）</p><h4 id="为什么使用单线程" tabindex="-1"><a class="header-anchor" href="#为什么使用单线程" aria-hidden="true">#</a> 为什么使用单线程</h4><p>原因： 数据完全基于内存操作，性能足够，而且多线程消耗性能</p><h4 id="redis-使用多线程" tabindex="-1"><a class="header-anchor" href="#redis-使用多线程" aria-hidden="true">#</a> redis 使用多线程</h4><p>1、开启多个线程做不同的事情<br> 2、而不是开启多个线程做同样的一件事情<br> Redis 通信原理（建立连接）<br> Redis 处理事件的简单模型：多路复用机制。微服务：订阅发布<br> 简单理解： 一个线程处理多个客户端连接<br> 操作系统：epoll<br> redis: reactor 机制</p><p><img src="'+f+'" alt="Alt text"></p><p>由上图可以看出，处理请求事件时，Redis的事件消费者只是被事件发布者进程短期调用而已，这种设计使得网络性能、用户感知的请求时延都得到了提升，每个用户的请求所产生的事件及响应，整个服务器网络吞吐量都会由事件的及时响应而增加。当然，这也带来了一定的要求，即每个事件消费者都不能有阻塞行为，否则将会长时间占用事件发布者进程而导致其他事件得不到及时响应，Redis的非阻塞特性就是由于它的模块都是满足这个要求的。</p><p>Redis数据存储原理：</p><p>Redis string 原理（存储数据到redis本地缓存中）<br> 可变字符串</p><p><img src="'+_+'" alt="Alt text"></p><p>数据持久化<br> 防止数据丢失</p><p>Redis List 原理</p><p><img src="'+x+'" alt="Alt text"></p><p>Redis Set原理<br> 数组 + Hash表</p><p><img src="'+y+'" alt="Alt text"></p><p>数组存储数据<br> Hash 表：作用<br> 防止数据重复，使用Hash 碰撞</p><p>Redis Hash 原理图<br> 数组+ Hash + 单向链表</p><p><img src="'+q+'" alt="Alt text"></p><p>完全基于内存操作：内存不足的缺陷。不适合存储海量数据TP级</p><p>Redis Zset原理图</p><p><img src="'+C+`" alt="Alt text"></p><h3 id="查询商品缓存场景落地-情况1" tabindex="-1"><a class="header-anchor" href="#查询商品缓存场景落地-情况1" aria-hidden="true">#</a> 查询商品缓存场景落地-情况1</h3><p>情况1：当客户端通过集群电商系统从<code>redis</code>中查询数据的时候，都是一个一个查询的，如何实现批量查询呢？<br> 方案： 批量查询<br> 条件</p><ol><li>Set<br> 步骤<br> 1.1、在ProductController类添加代码</li></ol><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly ConnectionMultiplexer _connectionMultiplexer;
        public ProductController(ConnectionMultiplexer connectionMultiplexer)
        {
            _connectionMultiplexer = connectionMultiplexer;
        }
        /// &lt;summary&gt;
        /// 查询商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost]
        public Product GetProduct()
        {
           #region 2、存储商品对象-集合商品数据
            {
                // 1、从redis中取对象
                RedisValue[] productvalues = _connectionMultiplexer.GetDatabase(0).SetMembers(&quot;products&quot;);
                List&lt;Product&gt; products = new List&lt;Product&gt;();
                if (productvalues.Length == 0)
                {
                    // 2、从数据库中查询
                    products = _productDbContext.Products.ToList();

                    // 3、存储到redis中
                    List&lt;RedisValue&gt; redisValues = new List&lt;RedisValue&gt;();
                    foreach (var product1 in products)
                    {
                        string productjson = JsonConvert.SerializeObject(product1);//序列化
                        redisValues.Add(productjson);
                    }

                    _connectionMultiplexer.GetDatabase(0).SetAdd(&quot;products&quot;, redisValues.ToArray());

                    return products;
                }

                // 4、序列化，反序列化
                foreach (var redisValue in productvalues)
                {
                    product = JsonConvert.DeserializeObject&lt;Product&gt;(redisValue);//反序列化
                    products.Add(product);
                }
                return product;
            }
            #endregion
        }
    }     
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品缓存场景落地-情况2" tabindex="-1"><a class="header-anchor" href="#查询商品缓存场景落地-情况2" aria-hidden="true">#</a> 查询商品缓存场景落地-情况2</h3><p>情况2：当客户端通过集群电商系统从redis批量查询数据的时候，全部一起查询，由于数据量过大，导致查询性能低下，如何提升查询性能？<br> 方案：分页查询<br> 条件<br> 1.SetScan<br> 步骤<br> 1.1、在ProductController类添加代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> /// <span class="token operator">&lt;</span>summary<span class="token operator">&gt;</span>
    /// 商品控制器
    /// <span class="token operator">&lt;</span>/summary<span class="token operator">&gt;</span>
    <span class="token punctuation">[</span>ApiController<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>Route<span class="token punctuation">(</span><span class="token string">&quot;[controller]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    public class ProductController <span class="token builtin class-name">:</span> ControllerBase
    <span class="token punctuation">{</span>
        private <span class="token builtin class-name">readonly</span> ConnectionMultiplexer _connectionMultiplexer<span class="token punctuation">;</span>
        public ProductController<span class="token punctuation">(</span>ConnectionMultiplexer connectionMultiplexer<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _connectionMultiplexer <span class="token operator">=</span> connectionMultiplexer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         /// <span class="token operator">&lt;</span>summary<span class="token operator">&gt;</span>
        /// 查询商品
        /// <span class="token operator">&lt;</span>/summary<span class="token operator">&gt;</span>
        /// <span class="token operator">&lt;</span>param <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;productCreateDto&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/param<span class="token operator">&gt;</span>
        /// <span class="token operator">&lt;</span>returns<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/returns<span class="token operator">&gt;</span>
        <span class="token punctuation">[</span>HttpPost<span class="token punctuation">]</span>
        public Product <span class="token function-name function">GetProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          <span class="token comment">#region 3、存储商品对象-集合-分页查询</span>
            <span class="token punctuation">{</span>
                // <span class="token number">1</span>、从redis中取对象
                RedisValue<span class="token punctuation">[</span><span class="token punctuation">]</span> productvalues <span class="token operator">=</span> _connectionMultiplexer.GetDatabase<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>.SetScan<span class="token punctuation">(</span><span class="token string">&quot;products&quot;</span>, <span class="token number">10</span>, <span class="token number">0</span>, <span class="token number">10</span><span class="token punctuation">)</span>.ToArray<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                List<span class="token operator">&lt;</span>Product<span class="token operator">&gt;</span> products <span class="token operator">=</span> new List<span class="token operator">&lt;</span>Product<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>productvalues.Length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    // <span class="token number">2</span>、从数据库中查询
                    products <span class="token operator">=</span> _productDbContext.Products.ToList<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    // <span class="token number">3</span>、存储到redis中
                    List<span class="token operator">&lt;</span>RedisValue<span class="token operator">&gt;</span> redisValues <span class="token operator">=</span> new List<span class="token operator">&lt;</span>RedisValue<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    foreach <span class="token punctuation">(</span>var product1 <span class="token keyword">in</span> products<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        string productjson <span class="token operator">=</span> JsonConvert.SerializeObject<span class="token punctuation">(</span>product1<span class="token punctuation">)</span><span class="token punctuation">;</span>//序列化
                        redisValues.Add<span class="token punctuation">(</span>productjson<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                    _connectionMultiplexer.GetDatabase<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>.SetAdd<span class="token punctuation">(</span><span class="token string">&quot;products&quot;</span>, redisValues.ToArray<span class="token punctuation">(</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                // <span class="token number">4</span>、序列化，反序列化
                foreach <span class="token punctuation">(</span>var redisValue <span class="token keyword">in</span> productvalues<span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    product <span class="token operator">=</span> JsonConvert.DeserializeObject<span class="token operator">&lt;</span>Product<span class="token operator">&gt;</span><span class="token punctuation">(</span>redisValue<span class="token punctuation">)</span><span class="token punctuation">;</span>//反序列化
                    products.Add<span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token builtin class-name">return</span> product<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">#endregion</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改商品销量场景落地" tabindex="-1"><a class="header-anchor" href="#修改商品销量场景落地" aria-hidden="true">#</a> 修改商品销量场景落地</h3><p>分析： 当客户端通过电商网站，每次购买一件商品，就会导致商品销量增加，由于商品存储到<code>redis</code>是以<code>json</code>的形式进行存储的，导致每次修改商品销量字段都需要进行商品数据序列化和反序列化，由于序列化和反序列化比较多，导致修改改商品销量性能下降，如何提升性能呢？<br> 方案： Hash字典<br> 条件<br> 1、<code>max_fails=2 fail_timeout=10s </code>;<br> 步骤<br> 1、在ProductController类添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> /// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly ConnectionMultiplexer _connectionMultiplexer;
        public ProductController(ConnectionMultiplexer connectionMultiplexer)
        {
            _connectionMultiplexer = connectionMultiplexer;
        }
         /// &lt;summary&gt;
        /// 查询商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost]
        public Product GetProduct()
        {
          #region 4、存储商品对象-字典形式
            {
                string ProductSold = _connectionMultiplexer.GetDatabase(0).HashGet(&quot;productHash&quot;, &quot;ProductSold&quot;);
                if (string.IsNullOrEmpty(ProductSold))
                {
                    product = _productDbContext.Products.FirstOrDefault(s =&gt; s.Id == 1);
                    _connectionMultiplexer.GetDatabase(0).HashSet(&quot;productHash&quot;, &quot;ProductSold&quot;, product.ProductStock);
                   //设置过期时间  10 秒
                    _connectionMultiplexer.GetDatabase(0).KeyExpire(&quot;productHash&quot;, TimeSpan.FromSeconds(10));
                }

                // 1、增加销量
                _connectionMultiplexer.GetDatabase(0).HashIncrement(&quot;productHash&quot;, &quot;ProductSold&quot;);
                return product;
            }
            #endregion
        }
    }     
       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="商品销量批量存储场景落地" tabindex="-1"><a class="header-anchor" href="#商品销量批量存储场景落地" aria-hidden="true">#</a> 商品销量批量存储场景落地</h3><p>分析：当数据库中商品销量数据存储到<code>redis</code>的时候，是一个个存储，多次和redis建立连接，导致添加效率下降，如何提升添加商品销量数据的性能？<br> 方案：批量添加</p><h4 id="如何落地批量添加" tabindex="-1"><a class="header-anchor" href="#如何落地批量添加" aria-hidden="true">#</a> 如何落地批量添加？</h4><p>条件<br> 1、IBatch<br> 步骤<br> 1、在ProductController类添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> /// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly ConnectionMultiplexer _connectionMultiplexer;
        public ProductController(ConnectionMultiplexer connectionMultiplexer)
        {
            _connectionMultiplexer = connectionMultiplexer;
        }
         /// &lt;summary&gt;
        /// 查询商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost]
        public Product GetProduct()
        {
          #region 6、存储商品对象-批量操作
            {
                var batch = _connectionMultiplexer.GetDatabase(0).CreateBatch();

                List&lt;Product&gt; products = new List&lt;Product&gt;();
                // 2、从数据库中查询
                products = _productDbContext.Products.ToList();

                // 3、存储到redis中
                for (int i = 0; i &lt; products.Count; i++)
                {
                    batch.HashSetAsync(&quot;productHash&quot; + i, &quot;ProductSold&quot;, products[i].ProductSold);
                }
                batch.Execute();

                return product;
            }
            #endregion
        }
    }     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扣减商品库存业务场景落地" tabindex="-1"><a class="header-anchor" href="#扣减商品库存业务场景落地" aria-hidden="true">#</a> 扣减商品库存业务场景落地</h3><p>条件<br> 1、电商系统<br> 2、Mysql8.0.23<br> 3、客户端<br> 步骤<br> 1、在电商系统中添加具体类</p><p><img src="`+S+`" alt="Alt text"></p><p>1.1、在电商系统中ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductController : ControllerBase
    {
         /// &lt;summary&gt;
        /// 扣减商品库存
        /// 做4件事情
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;SubStock&quot;)]
        public IActionResult SubStock()
        {
            #region 1、扣减库存流程
            {
                  // 1、获取商品库存
                  var stocks = getPorductStocks();

                    // 2、判断商品库存是否为空
                    if (stocks.Count == 0)
                    {
                        // 2.1 秒杀失败消息
                        Console.WriteLine($&quot;{Thread.CurrentThread.ManagedThreadId}：不好意思，秒杀已结束，商品编号:{stocks.Count}&quot;);
                    return new JsonResult(&quot;秒杀失败&quot;);
                    }

                    // 3、秒杀成功消息
                    Console.WriteLine($&quot;{Thread.CurrentThread.ManagedThreadId}：恭喜你，秒杀成功，商品编号:{stocks.Count}&quot;);

                    // 4、扣减商品库存
                    subtracProductStocks(stocks);
                return new JsonResult(&quot;秒杀成功&quot;);
            }
            #endregion

            return new JsonResult(&quot;秒杀成功&quot;);
        }
        
        
        /// &lt;summary&gt;
        /// 获取商品库存
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private Stocks getPorductStocks()
        {
            // 1、查询数据库获取库存，获取第一个商品的库存数(1)
            Stocks stocks = _productDbContext.Stocks.FirstOrDefault(s =&gt; s.Id == 1);

            // 2、返回库存
            return stocks;
        }

        /// &lt;summary&gt;
        /// 扣减商品库存
        /// &lt;/summary&gt;
        private void subtracProductStocks(Stocks stocks)
        {
            // 1、扣减商品库存
            Stocks updateStocks = _productDbContext.Stocks.FirstOrDefault(s =&gt; s.Id == stocks.Id);
            updateStocks.Count = stocks.Count - 1;

            // 2、更新数据库
            _productDbContext.SaveChanges();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2、启动电商网站</p><p><img src="`+P+'" alt="Alt text"></p><p>2、在Mysql中创建Stock表</p><p><img src="'+R+'" alt="Alt text"></p><p>3、客户端访问 <img src="'+A+'" alt="Alt text"></p><h3 id="扣减商品库存业务分析" tabindex="-1"><a class="header-anchor" href="#扣减商品库存业务分析" aria-hidden="true">#</a> 扣减商品库存业务分析</h3><p>分析： 当客户端从电商网站购买商品的时候，需要扣减商品库存，直接从数据库进行扣减，当电商系统是单实例的时候，如果客户端扣减库存并发量比较大，会出现超卖问题。如何解决超卖（10件商品卖出12件等）问题？ 这个使用lock锁的方式可以进行解决，当电商系统是集群实例的时候，如果客户端扣减库存并发量比较大，这个时候，lock锁就会出现缺陷，依然存在超卖问题。如何解决集群电商系统中的超卖问题？<br> 方案： 分布式锁</p><h4 id="如何落地分布式锁" tabindex="-1"><a class="header-anchor" href="#如何落地分布式锁" aria-hidden="true">#</a> 如何落地分布式锁</h4><p>条件<br> 1、RedisLock<br> 步骤<br> 1、封装分布式锁<br> 1.1 、 先在电商系统中创建RedisLock类</p><p><img src="'+w+`" alt="Alt text"></p><p>1.2、 然后在RedisLock类添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
/// redis分布式锁
/// 1、封装redis分布锁
///    1、加锁
///    2、解锁
/// 2、应用分布式锁
/// &lt;/summary&gt;
public class RedisLock
{
   // 1、redis连接管理类
   private ConnectionMultiplexer connectionMultiplexer = null;

   // 2、redis数据操作类
   private IDatabase database = null;
   public RedisLock()
   {
       connectionMultiplexer = ConnectionMultiplexer.Connect(&quot;192.168.44.4:6379&quot;);

       database = connectionMultiplexer.GetDatabase(0);
   }

   /// &lt;summary&gt;
   /// 加锁
   /// 1、key:锁名称
   /// 2、value:谁加的这把锁。线程1
   /// 3、exprie：过期时间：目的是为了防止死锁
   /// 
   /// &lt;/summary&gt;

   public void Lock()
   {
       while (true)
       {
           bool flag = database.LockTake(&quot;redis-lock&quot;, Thread.CurrentThread.ManagedThreadId, TimeSpan.FromSeconds(60));
           // 1、true 加锁成功 2、false 加锁失败
           if (flag)
           {
               break;
           }
           // 防止死循环。通过等待时间，释放资源
           Thread.Sleep(10);
       }
   }

   /// &lt;summary&gt;
   /// 解锁
   /// &lt;/summary&gt;

   public void UnLock()
   {
       bool flag = database.LockRelease(&quot;redis-lock&quot;, Thread.CurrentThread.ManagedThreadId);

       // true:释放成功  false 释放失败
       // 方案：释放资源
       connectionMultiplexer.Close();
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、应用分布式锁<br> 2.1、在电商系统中ProductController类中添加分布式锁代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductController : ControllerBase
    {
         /// &lt;summary&gt;
        /// 扣减商品库存
        /// 做4件事情
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;SubStock&quot;)]
        public IActionResult SubStock()
        {
            #region 1、扣减库存流程
            {
              
                RedisLock redisLock = new RedisLock();
                redisLock.Lock();
                  // 1、获取商品库存
                  var stocks = getPorductStocks();

                    // 2、判断商品库存是否为空
                    if (stocks.Count == 0)
                    {
                        // 2.1 秒杀失败消息
                        Console.WriteLine($&quot;{Thread.CurrentThread.ManagedThreadId}：不好意思，秒杀已结束，商品编号:{stocks.Count}&quot;);
                    redisLock.UnLock();
                    return new JsonResult(&quot;秒杀失败&quot;);
                    }

                    // 3、秒杀成功消息
                    Console.WriteLine($&quot;{Thread.CurrentThread.ManagedThreadId}：恭喜你，秒杀成功，商品编号:{stocks.Count}&quot;);

                    // 4、扣减商品库存
                    subtracProductStocks(stocks);
                redisLock.UnLock();
                return new JsonResult(&quot;秒杀成功&quot;);
            }
            #endregion

            return new JsonResult(&quot;秒杀成功&quot;);
        }
        
        
        /// &lt;summary&gt;
        /// 获取商品库存
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private Stocks getPorductStocks()
        {
            // 1、查询数据库获取库存，获取第一个商品的库存数(1)
            Stocks stocks = _productDbContext.Stocks.FirstOrDefault(s =&gt; s.Id == 1);

            // 2、返回库存
            return stocks;
        }

        /// &lt;summary&gt;
        /// 扣减商品库存
        /// &lt;/summary&gt;
        private void subtracProductStocks(Stocks stocks)
        {
            // 1、扣减商品库存
            Stocks updateStocks = _productDbContext.Stocks.FirstOrDefault(s =&gt; s.Id == stocks.Id);
            updateStocks.Count = stocks.Count - 1;

            // 2、更新数据库
            _productDbContext.SaveChanges();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-cluster-集群" tabindex="-1"><a class="header-anchor" href="#redis-cluster-集群" aria-hidden="true">#</a> Redis-cluster(集群)</h2><h3 id="什么是redis-cluster" tabindex="-1"><a class="header-anchor" href="#什么是redis-cluster" aria-hidden="true">#</a> 什么是redis-cluster</h3><p>redis-cluster 就是redis集群</p><h3 id="项目中为什么要使用redis-cluster" tabindex="-1"><a class="header-anchor" href="#项目中为什么要使用redis-cluster" aria-hidden="true">#</a> 项目中为什么要使用redis-cluster</h3><h4 id="电商集群系统使用redis" tabindex="-1"><a class="header-anchor" href="#电商集群系统使用redis" aria-hidden="true">#</a> 电商集群系统使用redis</h4><p><img src="`+M+'" alt="Alt text"></p><h4 id="单体redis" tabindex="-1"><a class="header-anchor" href="#单体redis" aria-hidden="true">#</a> 单体redis</h4><p><img src="'+T+'" alt="Alt text"></p><p>缺陷：单体redis可能由于各种原因导致宕机的问题。所以，需要使用redis主从集群<br> redis-主从集群</p><p><img src="'+L+'" alt="Alt text"></p><p>缺陷：redis-主从集群，如果主节点宕机。导致整个redis集群不可用，所以，需要使用哨兵集群</p><p><img src="'+D+'" alt="Alt text"></p><p>缺陷：<br> 1、无法解决高并发写<br> 2、无法解决海里数据存储<br> 所以：需要使用redis-cluster<br> redis-cluster(集群)</p><p><img src="'+I+'" alt="Alt text"></p><p>redis-缓存架构</p><p><img src="'+H+'" alt="Alt text"></p><p>redis-cluster架构说明<br> 1、6个redis实例。 reids-cluster 运行需要的角色实例<br> 2、redis-trib.rb.作用：分配redis 主从角色</p><h3 id="集群电商系统中如何落地redis-cluster" tabindex="-1"><a class="header-anchor" href="#集群电商系统中如何落地redis-cluster" aria-hidden="true">#</a> 集群电商系统中如何落地redis-cluster</h3><p>redis-cluster前提准备<br> 条件<br> 1、redis(6个实例)<br> 步骤<br> 1、在redisk 创建6个配置文件 <img src="'+O+`" alt="Alt text"></p><p>1.1、在redis.6380.conf文件中，添加内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>port <span class="token number">6380</span>
<span class="token comment">#bind 127.0.0.1 </span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0       
appendonly <span class="token function">yes</span>
appendfilename <span class="token string">&quot;appendonly.6380.aof&quot;</span>   
cluster-enabled <span class="token function">yes</span>                                    
cluster-config-file nodes.6380.conf
cluster-node-timeout <span class="token number">15000</span>
cluster-slave-validity-factor <span class="token number">10</span>
cluster-migration-barrier <span class="token number">1</span>
cluster-require-full-coverage <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​1.2、在redis.6381.conf文件中，添加内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>port <span class="token number">6381</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0        
appendonly <span class="token function">yes</span>
appendfilename <span class="token string">&quot;appendonly.6381.aof&quot;</span>   
cluster-enabled <span class="token function">yes</span>                                    
cluster-config-file nodes.6381.conf
cluster-node-timeout <span class="token number">15000</span>
cluster-slave-validity-factor <span class="token number">10</span>
cluster-migration-barrier <span class="token number">1</span>
cluster-require-full-coverage <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3、在redis.6382.conf文件中，添加内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>port <span class="token number">6382</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0        
appendonly <span class="token function">yes</span>
appendfilename <span class="token string">&quot;appendonly.6382.aof&quot;</span>   
cluster-enabled <span class="token function">yes</span>                                    
cluster-config-file nodes.6382.conf
cluster-node-timeout <span class="token number">15000</span>
cluster-slave-validity-factor <span class="token number">10</span>
cluster-migration-barrier <span class="token number">1</span>
cluster-require-full-coverage <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4、在redis.6383.conf文件中，添加内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>port <span class="token number">6383</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0         
appendonly <span class="token function">yes</span>
appendfilename <span class="token string">&quot;appendonly.6383.aof&quot;</span>   
cluster-enabled <span class="token function">yes</span>                                    
cluster-config-file nodes.6383.conf
cluster-node-timeout <span class="token number">15000</span>
cluster-slave-validity-factor <span class="token number">10</span>
cluster-migration-barrier <span class="token number">1</span>
cluster-require-full-coverage <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.5、在redis.6384.conf文件中，添加内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>port <span class="token number">6384</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0        
appendonly <span class="token function">yes</span>
appendfilename <span class="token string">&quot;appendonly.6384.aof&quot;</span>   
cluster-enabled <span class="token function">yes</span>                                    
cluster-config-file nodes.6380.conf
cluster-node-timeout <span class="token number">15000</span>
cluster-slave-validity-factor <span class="token number">10</span>
cluster-migration-barrier <span class="token number">1</span>
cluster-require-full-coverage <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.6、在redis.6385.conf文件中，添加内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>port <span class="token number">6385</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0        
appendonly <span class="token function">yes</span>
appendfilename <span class="token string">&quot;appendonly.6385.aof&quot;</span>   
cluster-enabled <span class="token function">yes</span>                                    
cluster-config-file nodes.6385.conf
cluster-node-timeout <span class="token number">15000</span>
cluster-slave-validity-factor <span class="token number">10</span>
cluster-migration-barrier <span class="token number">1</span>
cluster-require-full-coverage <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、启动6个redis实例</p><p>1.1 启动redis.6380.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis-7.2.0<span class="token punctuation">]</span><span class="token comment"># ./src/redis-server  ./redis-config/redis.6380.conf </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+V+`" alt="Alt text"></p><p>1.2 启动redis.6381.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis-7.2.0<span class="token punctuation">]</span><span class="token comment"># ./src/redis-server  ./redis-config/redis.6381.conf </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+G+`" alt="Alt text"></p><p>1.3 启动redis.6382.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis-7.2.0<span class="token punctuation">]</span><span class="token comment"># ./src/redis-server  ./redis-config/redis.6382.conf </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+j+`" alt="Alt text"></p><p>1.4 启动redis.6383.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis-7.2.0<span class="token punctuation">]</span><span class="token comment"># ./src/redis-server  ./redis-config/redis.6383.conf </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+z+`" alt="Alt text"></p><p>1.5 启动redis.6384.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis-7.2.0<span class="token punctuation">]</span><span class="token comment"># ./src/redis-server  ./redis-config/redis.6384.conf </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+B+`" alt="Alt text"></p><p>1.6 启动redis.6385.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis-7.2.0<span class="token punctuation">]</span><span class="token comment"># ./src/redis-server  ./redis-config/redis.6385.conf </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+E+'" alt="Alt text"></p><h3 id="redis-cluster-主从角色分配" tabindex="-1"><a class="header-anchor" href="#redis-cluster-主从角色分配" aria-hidden="true">#</a> redis-cluster 主从角色分配</h3>',117),cn=n("br",null,null,-1),on=n("br",null,null,-1),un={href:"https://cache.ruby-lang.org/pub/ruby/3.0/ruby-3.0.6.tar.gz",target:"_blank",rel:"noopener noreferrer"},pn=n("br",null,null,-1),vn=n("br",null,null,-1),mn=n("br",null,null,-1),bn=n("br",null,null,-1),kn=n("br",null,null,-1),gn={href:"https://rubyinstaller.org/downloads/",target:"_blank",rel:"noopener noreferrer"},hn=n("br",null,null,-1),fn=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> yum  <span class="token function">install</span>  ruby
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、 安装 redsi-3.2.2.gem 使用脚本命令 2.1 window 安装</p><div class="language-bahs line-numbers-mode" data-ext="bahs"><pre class="language-bahs"><code> gem install redis -v 3.2.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+J+`" alt="Alt text"></p><p>2.2 centos9 安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ruby<span class="token punctuation">]</span><span class="token comment"># gem install redis -v 3.2.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+F+'" alt="Alt text"><br> ​ 2.3、redis-3.2.2.gem下载地址：https://rubygems.org/gems/redis/versions/3.2.2</p>',7),_n=n("br",null,null,-1),xn=n("br",null,null,-1),yn={href:"https://github.com/redis/redis/blob/3.2/src/redis-trib.rb",target:"_blank",rel:"noopener noreferrer"},qn=t('<p><img src="'+U+`" alt="Alt text"></p><p>3.2、 redis-trib.rb使用<br> 通过cmd使用redis-trib.rb <code>bash ruby redis-trib.rb create --replicas 1 127.0.0.1:6380 127.0.0.1:6381 127.0.0.1:6382 127.0.0.1:6383 127.0.0.1:6384 127.0.0.1:6385 </code></p><p>3.3 redis-trib.rb redis-cluster集群状态检查</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ruby redis-tris-trib.rb  check <span class="token number">127.0</span>.0.1:6380 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+N+'" alt="Alt text"></p><h2 id="redis7-2-版本后-redist-trib-rb-集群配置都在-redis-cli-配置" tabindex="-1"><a class="header-anchor" href="#redis7-2-版本后-redist-trib-rb-集群配置都在-redis-cli-配置" aria-hidden="true">#</a> redis7.2 版本后， redist-trib.rb 集群配置都在 redis-cli 配置</h2>',6),Cn={href:"https://blog.csdn.net/weixin_42176639/article/details/132434053",target:"_blank",rel:"noopener noreferrer"},Sn=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 1.在 rd1 复制配置文件</span>
<span class="token function">cp</span> /home/redis-7.2.0/redis.conf /usr/local/redis/redis-cluster.conf
<span class="token comment">## 2.编辑</span>
<span class="token function">vim</span> /usr/local/redis/redis-cluster.conf
<span class="token comment">## 设置密码 requirepass 123456</span>
<span class="token comment">## 关闭保护模式 protected-mode no</span>
<span class="token comment">## 开启集群 cluster-enabled yes 约1586行</span>
<span class="token comment">## 设置配置文件 cluster-config-file redis-cluster.conf 约1594行</span>
<span class="token comment">## 设置超时 cluster-node-timeout 15000 约1600行</span>
<span class="token comment">## 设置主节点密码 masterauth 123456</span>
<span class="token comment">## 设置日志 logfile /var/log/redis/redis-cluster.log</span>
<span class="token comment">## 3.将 redis-cluster.conf 分发到 rd2 / rd3 / rd4 / rd5 / rd6</span>
<span class="token function">scp</span> /usr/local/redis/redis-cluster.conf root@rd2:/usr/local/redis/
<span class="token function">scp</span> /usr/local/redis/redis-cluster.conf root@rd3:/usr/local/redis/
<span class="token function">scp</span> /usr/local/redis/redis-cluster.conf root@rd4:/usr/local/redis/
<span class="token function">scp</span> /usr/local/redis/redis-cluster.conf root@rd5:/usr/local/redis/
<span class="token function">scp</span> /usr/local/redis/redis-cluster.conf root@rd6:/usr/local/redis/
<span class="token comment">## 4.依次启动 rd1 / rd2 /rd3 /rd4 /rd5 / rd6</span>
/usr/local/redis/bin/redis-server /usr/local/redis/redis-cluster.conf <span class="token operator">&amp;</span>
<span class="token comment">## 5.清空已有数据</span>
<span class="token comment">## 5.创建集群 在任一节点执行</span>
<span class="token comment">## -a 密码认证，若没写密码无效带这个参数</span>
<span class="token comment">## --cluster create 创建集群实例列表 IP:PORT IP:PORT IP:PORT IP:PORT IP:PORT IP:PORT</span>
<span class="token comment">## --cluster-replicas 复制因子1（即每个主节点需2个从节点）</span>
/usr/local/redis/bin/redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">--cluster</span> create --cluster-replicas <span class="token number">1</span> <span class="token number">127.0</span>.0.1:6380 <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1:6382 <span class="token number">127.0</span>.0.1:6383 <span class="token number">127.0</span>.0.1:6384 <span class="token number">127.0</span>.0.1:6385

<span class="token comment">## 1.解压缩</span>
<span class="token function">tar</span> zxvf redis-7.2.0.tar.gz
<span class="token comment">## 2.进入源码安装目录</span>
<span class="token builtin class-name">cd</span> /home/redis-7.2.0/src/
<span class="token comment">## 3.编译和安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/redis
<span class="token comment">## 4.进入Redis解压目录</span>
<span class="token builtin class-name">cd</span> /home/redis-7.2.0/
<span class="token comment">## 5.修改配置</span>
<span class="token function">vim</span> redis.conf
<span class="token comment">## 6.启动服务</span>
/usr/local/redis/bin/redis-server redis.conf <span class="token operator">&amp;</span>
<span class="token comment">## 7.停止服务</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> aux <span class="token operator">|</span><span class="token function">grep</span> redis<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、查看集群帮文档</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># ./redis-cli --cluster help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+K+`" alt="Alt text"><br> 2、分配角色</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># ./redis-cli --cluster create --cluster-replicas 1 0.0.0.0:6380 0.0.0.0:6381 0.0.0.0:6382 0.0.0.0:6383 0.0.0.0:6384 0.0.0.0:6385</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+$+'" alt="Alt text"></p><p>是否同意系统分配，接受 输入 <code>yes</code></p><p><img src="'+W+`" alt="Alt text"></p><p>3、查看节点状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#状态</span>
<span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># ./redis-cli --cluster check 0.0.0.0:6380</span>
<span class="token number">0.0</span>.0.0:6380 <span class="token punctuation">(</span>26b27f3b<span class="token punctuation">..</span>.<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> <span class="token number">0</span> keys <span class="token operator">|</span> <span class="token number">5461</span> slots <span class="token operator">|</span> <span class="token number">1</span> slaves.
<span class="token number">127.0</span>.0.1:6381 <span class="token punctuation">(</span>c4f1f3e7<span class="token punctuation">..</span>.<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> <span class="token number">0</span> keys <span class="token operator">|</span> <span class="token number">5462</span> slots <span class="token operator">|</span> <span class="token number">1</span> slaves.
<span class="token number">127.0</span>.0.1:6382 <span class="token punctuation">(</span>2a9f5d67<span class="token punctuation">..</span>.<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> <span class="token number">0</span> keys <span class="token operator">|</span> <span class="token number">5461</span> slots <span class="token operator">|</span> <span class="token number">1</span> slaves.
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> <span class="token number">0</span> keys <span class="token keyword">in</span> <span class="token number">3</span> masters.
<span class="token number">0.00</span> keys per slot on average.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Performing Cluster Check <span class="token punctuation">(</span>using <span class="token function">node</span> <span class="token number">0.0</span>.0.0:6380<span class="token punctuation">)</span>
M: 26b27f3b253331d3e3dab852115d98d7b94e8b86 <span class="token number">0.0</span>.0.0:6380
  slots:<span class="token punctuation">[</span><span class="token number">0</span>-5460<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
  <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: 64e0075c643b46b5c76695690f741ba68cd424c2 <span class="token number">127.0</span>.0.1:6383
  slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
  replicates 2a9f5d67f084d24e11989a7cd5f2a3bebca91286
M: c4f1f3e7e23993df60c847696cebbd2228f79c21 <span class="token number">127.0</span>.0.1:6381
  slots:<span class="token punctuation">[</span><span class="token number">5461</span>-10922<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5462</span> slots<span class="token punctuation">)</span> master
  <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: 2c195b27f07dd22b2c5a712b5c09f984141caca2 <span class="token number">127.0</span>.0.1:6384
  slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
  replicates 26b27f3b253331d3e3dab852115d98d7b94e8b86
M: 2a9f5d67f084d24e11989a7cd5f2a3bebca91286 <span class="token number">127.0</span>.0.1:6382
  slots:<span class="token punctuation">[</span><span class="token number">10923</span>-16383<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
  <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: e8a0bd1e391f8665df7e64a817c65a88924cceb2 <span class="token number">127.0</span>.0.1:6385
  slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
  replicates c4f1f3e7e23993df60c847696cebbd2228f79c21
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All nodes agree about slots configuration.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check <span class="token keyword">for</span> <span class="token function">open</span> slots<span class="token punctuation">..</span>.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check slots coverage<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All <span class="token number">16384</span> slots covered.

<span class="token comment">#信息</span>
<span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span><span class="token comment"># ./redis-cli --cluster info 0.0.0.0:6380</span>
<span class="token comment"># slots信息</span>
<span class="token punctuation">[</span>root@localhost redis-7.2.0<span class="token punctuation">]</span><span class="token comment"># ./src/redis-cli  -p 6380</span>
<span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> CLUSTER SLOTS

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-客户端工具" tabindex="-1"><a class="header-anchor" href="#redis-客户端工具" aria-hidden="true">#</a> Redis 客户端工具</h2>`,11),Pn={href:"https://gitee.com/qishibo/AnotherRedisDesktopManager/releases/tag/v1.6.1",target:"_blank",rel:"noopener noreferrer"},Rn=t(`<h2 id="apache-bench安装" tabindex="-1"><a class="header-anchor" href="#apache-bench安装" aria-hidden="true">#</a> Apache Bench安装</h2><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>: 使用apt在线安装
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apache2-utils
<span class="token number">2</span>:检查安装是否成功：ab <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="centos-9" tabindex="-1"><a class="header-anchor" href="#centos-9" aria-hidden="true">#</a> Centos 9</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> httpd-tools

ab <span class="token parameter variable">-v</span>
<span class="token comment"># 举例说明如何测试网站并发访问接受能力:</span>
ab <span class="token parameter variable">-c</span> <span class="token number">10</span> <span class="token parameter variable">-n</span> <span class="token number">1000</span> <span class="token parameter variable">-k</span> https://www.baidu.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h3>`,6),An={href:"https://www.apachehaus.com/cgi-bin/download.plx",target:"_blank",rel:"noopener noreferrer"},wn=n("h3",{id:"ab-使用说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ab-使用说明","aria-hidden":"true"},"#"),s(" ab 使用说明")],-1),Mn={href:"https://blog.csdn.net/qq_22206899/article/details/82348122/",target:"_blank",rel:"noopener noreferrer"},Tn=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span> concurrency 请求并发数，默认为1；

<span class="token parameter variable">-n</span> requests 请求总数；

<span class="token parameter variable">-A</span> auth-username:password 向服务器提供基本认证信息。用户名和密码之间有一个“：”隔开，并将以base64编码形式发送，无论服务器是否需要（即是否发送了401认证需求代码），此字符串都会被发送。

<span class="token parameter variable">-b</span> windowsize Size of TCP send/receive buffer, <span class="token keyword">in</span> bytes.

<span class="token parameter variable">-B</span> local-address Address to <span class="token builtin class-name">bind</span> to when making outgoing connections

<span class="token parameter variable">-C</span> cookie-name<span class="token operator">=</span>value 对请求附加一个“Cookie:”头行。其典型形式是：name<span class="token operator">=</span>value的一个参数对。此参数可以重复。

<span class="token parameter variable">-d</span> 不显示“percentage served within XX<span class="token punctuation">[</span>ms<span class="token punctuation">]</span> table”消息（为以前版本提供支持）

<span class="token parameter variable">-e</span> csv-file 产生一个逗号分隔（CSV）文件，其中包含了处理每个相应百分比请求（从1%到100%）所需要的相应百分比时间（以微妙为单位）。由于这种格式已经“二进制化”。所以比“gnuplot”格式更有用。

<span class="token parameter variable">-f</span> protocol 指定SSL/TLS procotol<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token parameter variable">-g</span> gnuplot-file 把所有测试结果写入一个“gnuplot”或者TSV（以TAB分隔）文件。此文件可以方便地导入Gnuplot,IDL,Mathematica,Excel中。其中的第一行为标题。

<span class="token parameter variable">-h</span> 显示使用方法的帮助信息

<span class="token parameter variable">-H</span> custom-header 对请求附加额外的头信息，此参数的典型形式是一个有效的头信息行，其中包含了以冒号分隔的字段和值（如：”Accept-Encoding:zip/zop<span class="token punctuation">;</span>8bit“）.

<span class="token parameter variable">-i</span> 执行HEAD请求，而不是GET请求

<span class="token parameter variable">-k</span> 启用Keepalive功能，即在一个HTTP会话中执行多个请求。默认不启用此功能

<span class="token parameter variable">-p</span> POST-file 包含了POST数据的文件

<span class="token parameter variable">-P</span> proxy-auth-username:password 对一个中转代理提供基本认证信息。用户名和密码用”：“隔开，并将以base64编码形式发送。无论服务器是否需要（即是否发送了407代理认证需求代码）此字符串都会被发送。

<span class="token parameter variable">-q</span> 如果代理的请求数大于150，ab每处理大约10%或者100个请求时，会在stderr输出一个进度计数、此-q标记可以屏蔽这些信息。

<span class="token parameter variable">-r</span> 在socket接收错误时不退出

<span class="token parameter variable">-s</span> 用于编译中使用了SSL的受保护的https，而不是http协议的时候。此功能是实验性的，最好不要用。

<span class="token parameter variable">-S</span> 不显示中值和标准偏差值，而且在均值和中值为标准偏差值得1-2倍时，也不显示警告和出错信息。默认时，会显示最小值/均值/最大值等数值

<span class="token parameter variable">-t</span> timelimit 测试所进行的最大秒数。内部隐含值是”-n <span class="token number">50000</span>“。它可以时对服务器的测试限制在一个固定的总时间以内。默认时：没有时间限制。

<span class="token parameter variable">-T</span> content-type POST数据时所使用的”Content-type“头信息

<span class="token parameter variable">-u</span> PUT-file File containing data to PUT. Remember to also <span class="token builtin class-name">set</span> <span class="token parameter variable">-T</span>

<span class="token parameter variable">-v</span> verbosity 设置显示信息的详细程度，4或更大值会显示头信息，3或更大值可以显示响应代码（404，200等），2或更大值可以显示警告和其他信息。

<span class="token parameter variable">-V</span> 显示版本号并退出

<span class="token parameter variable">-w</span> 以HTML表格信息输出结果，默认时，它是白色背景的两列宽度的一张表

<span class="token parameter variable">-x</span> <span class="token operator">&lt;</span>table<span class="token operator">&gt;</span>-attributes 设置<span class="token operator">&lt;</span>table<span class="token operator">&gt;</span>属性的字符串。此属性被填入<span class="token operator">&lt;</span>table 这里<span class="token operator">&gt;</span>

<span class="token parameter variable">-X</span> proxy<span class="token punctuation">[</span>:port<span class="token punctuation">]</span> 对请求使用代理服务器

<span class="token parameter variable">-y</span> <span class="token operator">&lt;</span>tr<span class="token operator">&gt;</span>-attributes 设置<span class="token operator">&lt;</span>tr<span class="token operator">&gt;</span>属性的字符串

<span class="token parameter variable">-z</span> <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span>-attributes 设置<span class="token operator">&lt;</span>td<span class="token operator">&gt;</span>属性的字符串

<span class="token parameter variable">-Z</span> ciphersuite 指定SSL/TLS密码套件（见openssl密码）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总线" tabindex="-1"><a class="header-anchor" href="#总线" aria-hidden="true">#</a> 总线</h2><blockquote><p>1、分布锁:</p><blockquote><p>使用场合：集群系统<br> 使用场景：在集群系统中修改字段值的时候，使用。执行update</p></blockquote></blockquote><blockquote><p>2、封装分布试锁<br> 3、使用redis:主要就是集群</p></blockquote>`,4);function Ln(Dn,In){const a=r("router-link"),l=r("ExternalLinkIcon");return c(),o("div",null,[Z,n("nav",Q,[n("ul",null,[n("li",null,[e(a,{to:"#目录"},{default:i(()=>[s("目录")]),_:1})]),n("li",null,[e(a,{to:"#分布式中间件-redis"},{default:i(()=>[s("分布式中间件-Redis")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#什么是redis"},{default:i(()=>[s("什么是Redis")]),_:1})]),n("li",null,[e(a,{to:"#什么地方使用redis"},{default:i(()=>[s("什么地方使用Redis")]),_:1})]),n("li",null,[e(a,{to:"#集群系统中为什么要使用redis"},{default:i(()=>[s("集群系统中为什么要使用Redis")]),_:1})])])]),n("li",null,[e(a,{to:"#集群系统如何落地redis"},{default:i(()=>[s("集群系统如何落地Redis")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#查询商品缓存redis原理"},{default:i(()=>[s("查询商品缓存Redis原理")]),_:1})]),n("li",null,[e(a,{to:"#查询商品缓存场景落地-情况1"},{default:i(()=>[s("查询商品缓存场景落地-情况1")]),_:1})]),n("li",null,[e(a,{to:"#查询商品缓存场景落地-情况2"},{default:i(()=>[s("查询商品缓存场景落地-情况2")]),_:1})]),n("li",null,[e(a,{to:"#修改商品销量场景落地"},{default:i(()=>[s("修改商品销量场景落地")]),_:1})]),n("li",null,[e(a,{to:"#商品销量批量存储场景落地"},{default:i(()=>[s("商品销量批量存储场景落地")]),_:1})]),n("li",null,[e(a,{to:"#扣减商品库存业务场景落地"},{default:i(()=>[s("扣减商品库存业务场景落地")]),_:1})]),n("li",null,[e(a,{to:"#扣减商品库存业务分析"},{default:i(()=>[s("扣减商品库存业务分析")]),_:1})])])]),n("li",null,[e(a,{to:"#redis-cluster-集群"},{default:i(()=>[s("Redis-cluster(集群)")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#什么是redis-cluster"},{default:i(()=>[s("什么是redis-cluster")]),_:1})]),n("li",null,[e(a,{to:"#项目中为什么要使用redis-cluster"},{default:i(()=>[s("项目中为什么要使用redis-cluster")]),_:1})]),n("li",null,[e(a,{to:"#集群电商系统中如何落地redis-cluster"},{default:i(()=>[s("集群电商系统中如何落地redis-cluster")]),_:1})]),n("li",null,[e(a,{to:"#redis-cluster-主从角色分配"},{default:i(()=>[s("redis-cluster 主从角色分配")]),_:1})])])]),n("li",null,[e(a,{to:"#redis7-2-版本后-redist-trib-rb-集群配置都在-redis-cli-配置"},{default:i(()=>[s("redis7.2 版本后， redist-trib.rb 集群配置都在 redis-cli 配置")]),_:1})]),n("li",null,[e(a,{to:"#redis-客户端工具"},{default:i(()=>[s("Redis 客户端工具")]),_:1})]),n("li",null,[e(a,{to:"#apache-bench安装"},{default:i(()=>[s("Apache Bench安装")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#ubuntu"},{default:i(()=>[s("Ubuntu")]),_:1})]),n("li",null,[e(a,{to:"#centos-9"},{default:i(()=>[s("Centos 9")]),_:1})]),n("li",null,[e(a,{to:"#windows"},{default:i(()=>[s("windows")]),_:1})]),n("li",null,[e(a,{to:"#ab-使用说明"},{default:i(()=>[s("ab 使用说明")]),_:1})])])]),n("li",null,[e(a,{to:"#总线"},{default:i(()=>[s("总线")]),_:1})])])]),Y,n("blockquote",null,[nn,n("blockquote",null,[n("p",null,[s("2.1 Redis 前提准备"),sn,s(" Redist 下载地址：http://download.redis.io/releases/redis-7.2.0.tar.gz"),en,n("a",an,[s("redis-7.2.0.tar.gz 下载"),e(l)])])])]),ln,n("p",null,[s("安装中遇到的错误："),tn,n("a",rn,[s("redis 安装 与错误解决办法 参考"),e(l)])]),dn,n("p",null,[s("条件"),cn,s(" 1、redis-trib.rb"),on,n("a",un,[s("ruby-3.0.6下载"),e(l)]),pn,s(" 步骤"),vn,s(" 1、ruby环境安装"),mn,s(" 1.1 windows"),bn,s(" ruby环境下载：https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-3.2.2-1/rubyinstaller-3.2.2-1-x64.exe"),kn,n("a",gn,[s("rubyinstaller 下载"),e(l)]),hn,s(" 1.2 centos9")]),fn,n("p",null,[s("3、redis-trib.rb搭建redis-cluster主从"),_n,s(" 3.1、 redis-trib.rb 下载地址：https://github.com/beebol/redis-trib.rb"),xn,n("a",yn,[s("redis-trib.rb 源码下载"),e(l)])]),qn,n("p",null,[n("a",Cn,[s("Anolis 8.6 下 Redis 7.2.0 集群搭建和配置 参考"),e(l)])]),Sn,n("p",null,[n("a",Pn,[s("Another-Redis-Desktop-Manager.1.6.1.exe 下载"),e(l)])]),Rn,n("p",null,[n("a",An,[s("Apache 2.4 Server Binaries 下载"),e(l)])]),wn,n("p",null,[n("a",Mn,[s("参考"),e(l)])]),Tn])}const On=d(X,[["render",Ln],["__file","redis001.html.vue"]]);export{On as default};
