import{_ as c,r,o as d,c as o,a as n,b as e,w as i,d as s,e as t}from"./app-c1c3c937.js";const p="/images/elasticsearch/elasticsearch_001image.png",u="/images/elasticsearch/elasticsearch_002image.png",v="/images/elasticsearch/elasticsearch_003image.png",m="/images/elasticsearch/elasticsearch_004image.png",b="/images/elasticsearch/elasticsearch_005image.png",g="/images/elasticsearch/elasticsearch_006image.png",h="/images/elasticsearch/elasticsearch_007image.png",k="/images/elasticsearch/elasticsearch_008image.png",q="/images/elasticsearch/elasticsearch_009image.png",_="/images/elasticsearch/elasticsearch_010image.png",y="/images/elasticsearch/elasticsearch_011image.png",x="/images/elasticsearch/elasticsearch_012image.png",f="/images/elasticsearch/elasticsearch_013image.png",P="/images/elasticsearch/elasticsearch_014image.png",S="/images/elasticsearch/elasticsearch_015image.png",C="/images/elasticsearch/elasticsearch_016image.png",w="/images/elasticsearch/elasticsearch_017image.png",A="/images/elasticsearch/elasticsearch_018image.png",E="/images/elasticsearch/elasticsearch_019image.png",I="/images/elasticsearch/elasticsearch_020image.png",D="/images/elasticsearch/elasticsearch_021image.png",T="/images/elasticsearch/elasticsearch_022image.png",j="/images/elasticsearch/elasticsearch_023image.png",N="/images/elasticsearch/elasticsearch_024image.png",G="/images/elasticsearch/elasticsearch_025image.png",B="/images/elasticsearch/elasticsearch_026image.png",M="/images/elasticsearch/elasticsearch_027image.png",z="/images/elasticsearch/elasticsearch_028image.png",U="/images/elasticsearch/elasticsearch_029image.png",F="/images/elasticsearch/elasticsearch_030image.png",R="/images/elasticsearch/elasticsearch_031image.png",H="/images/elasticsearch/elasticsearch_032image.png",K="/images/elasticsearch/elasticsearch_033image.png",L="/images/elasticsearch/elasticsearch_034image.png",Q="/images/elasticsearch/elasticsearch_035image.png",V="/images/elasticsearch/elasticsearch_036image.png",O="/images/elasticsearch/elasticsearch_037image.png",J="/images/elasticsearch/elasticsearch_038image.png",W="/images/elasticsearch/elasticsearch_039image.png",X="/images/elasticsearch/elasticsearch_040image.png",Y="/images/elasticsearch/elasticsearch_041image.png",Z="/images/elasticsearch/elasticsearch_042image.png",$="/images/elasticsearch/elasticsearch_043image.png",nn="/images/elasticsearch/elasticsearch_044image.png",sn="/images/elasticsearch/elasticsearch_045image.png",en="/images/elasticsearch/elasticsearch_046image.png",an="/images/elasticsearch/elasticsearch_047image.png",tn="/images/elasticsearch/elasticsearch_048image.png",ln="/images/elasticsearch/elasticsearch_049image.png",rn="/images/elasticsearch/elasticsearch_050image.png",cn="/images/elasticsearch/elasticsearch_051image.png",dn="/images/elasticsearch/elasticsearch_052image.png",on="/images/elasticsearch/elasticsearch_053image.png",pn="/images/elasticsearch/elasticsearch_054image.png",un="/images/elasticsearch/elasticsearch_055image.png",vn="/images/elasticsearch/elasticsearch_056image.png",mn="/images/elasticsearch/elasticsearch_057image.png",bn="/images/elasticsearch/elasticsearch_058image.png",gn="/images/elasticsearch/elasticsearch_059image.png",hn="/images/elasticsearch/elasticsearch_060image.png",kn="/images/elasticsearch/elasticsearch_061image.png",qn="/images/elasticsearch/elasticsearch_062image.png",_n="/images/elasticsearch/elasticsearch_063image.png",yn="/images/elasticsearch/elasticsearch_064image.png",xn="/images/elasticsearch/elasticsearch_065image.png",fn="/images/elasticsearch/elasticsearch_066image.png",Pn="/images/elasticsearch/elasticsearch_067image.png",Sn="/images/elasticsearch/elasticsearch_068image.png",Cn="/images/elasticsearch/elasticsearch_069image.png",wn="/images/elasticsearch/elasticsearch_070image.png",An="/images/elasticsearch/elasticsearch_071image.png",En="/images/elasticsearch/elasticsearch_072image.png",In="/images/elasticsearch/elasticsearch_073image.png",Dn="/images/elasticsearch/elasticsearch_074image.png",Tn="/images/elasticsearch/elasticsearch_075image.png",jn="/images/elasticsearch/elasticsearch_076image.png",Nn="/images/elasticsearch/elasticsearch_077image.png",Gn="/images/elasticsearch/elasticsearch_078image.png",Bn="/images/elasticsearch/elasticsearch_079image.png",Mn="/images/elasticsearch/elasticsearch_080image.png",zn={},Un=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),Fn={class:"table-of-contents"},Rn=t('<h2 id="分布式中间件-elasticsearch" tabindex="-1"><a class="header-anchor" href="#分布式中间件-elasticsearch" aria-hidden="true">#</a> 分布式中间件-ElasticSearch</h2><h3 id="什么是elasticssearch" tabindex="-1"><a class="header-anchor" href="#什么是elasticssearch" aria-hidden="true">#</a> 什么是ElasticsSearch</h3><p>Elasticsearch 是全文搜索引擎。</p><h3 id="什么全文搜索" tabindex="-1"><a class="header-anchor" href="#什么全文搜索" aria-hidden="true">#</a> 什么全文搜索</h3><p><img src="'+p+'" alt="Alt text"> 客户端输入“100周年”，能够把数据库中一段话查询出来，就是是全文搜索。</p><h3 id="什么引擎" tabindex="-1"><a class="header-anchor" href="#什么引擎" aria-hidden="true">#</a> 什么引擎</h3><p>能够完成全文搜索这件事情的工具，就叫做引擎。<br> ElasticSearch 主要用在微服务系统中。</p><h3 id="什么地方使用elastaicsearch" tabindex="-1"><a class="header-anchor" href="#什么地方使用elastaicsearch" aria-hidden="true">#</a> 什么地方使用ElastaicSearch</h3><p>ElasticSearch主要用在微服务系统中。</p><h3 id="微服务系统中为什么要使用elasticsearch" tabindex="-1"><a class="header-anchor" href="#微服务系统中为什么要使用elasticsearch" aria-hidden="true">#</a> 微服务系统中为什么要使用ElasticSearch</h3><p>微服务系统有很多，包含电商微服务系统，包含OA微服务系统，以及其他不同微服务系统。主要通过电商微服务系统来进行举例说明为什么要使用ElasticSearch?先得到一个电商微服务系统。如何得到？ 电商微服务系统是由单体电商系统而来</p><h3 id="单体电商系统" tabindex="-1"><a class="header-anchor" href="#单体电商系统" aria-hidden="true">#</a> 单体电商系统</h3><p><img src="'+u+'" alt="Alt text"></p><p>在单体电商系统中，我们主要看一个业务场景，搜索商品业务场景。<br> 搜索商品实现过程，客户端发起查询请求——&gt;电商系统——&gt;电商数据库。</p><p>如果客户端有这样一个要求，查询订单的时候，需要查询出商品。如何实现这个规则要求呢？<br> 查询订单实现过程，客户端发起查询请求——&gt;电商系统——&gt;电商数据库——&gt;订单表和商品表进行关联。</p><p>当时，电商系统并发量、业务量、数据量同时上升之后，单体系统查询，添加、修改、删除性能会急剧下降。进一步甚至会导致系统宕机（宕机也就是无法访问），如果系统出现了宕机问题，直接导致客户端 无法访问。<br> 在允许电商并发量、业务量、数据量同时上升情况下，如何提升系统性能，防止系统宕机呢？<br> 方案：需要进行业务模块拆分<br> 结果：形成电商微服务系统</p><h3 id="电商微服务系统" tabindex="-1"><a class="header-anchor" href="#电商微服务系统" aria-hidden="true">#</a> 电商微服务系统</h3><p><img src="'+v+'" alt="Alt text"></p><p>在电商微服务系统中，我们主要看业务场景，搜索商品业务场景。<br> 搜索商品实现过程，客户端发起查询请求——&gt;电商系统——&gt;电商微服务——&gt;电商数据库。</p><p>如果客户端有这样一个要求，查询订单的时候，需要搜索出商品。如何实现这个规则要求呢？<br> 查询订单实现过程，客户端发起查询请求——&gt;电商网站——&gt;订单微服务——&gt;电商数据库。</p><p>电商网站——&gt; 电商微服务——&gt; 电商数据库。</p><p>一个订单查询需要涉及到2个微服务（订单微服务、商品微服务）查询。<br> 如果并发量比较大，会导致两个微服务查询性能下降。因为是同步请求，同步请求并发处理有限<br> 如果2个微服务其中一个微服务宕机了，会导致无法进行查询。<br> 如何提升系统性能和防止系统宕机呢？<br> 方案：使用ElasticSearch</p><h3 id="电商微服务系统-网站拆分" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-网站拆分" aria-hidden="true">#</a> 电商微服务系统-网站拆分</h3><p><img src="'+m+'" alt="Alt text"></p><h3 id="电商微服务系统-搜索微服务" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-搜索微服务" aria-hidden="true">#</a> 电商微服务系统-搜索微服务</h3><p><img src="'+b+'" alt="Alt text"></p><h3 id="电商微服务系统-elasticsearch" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-elasticsearch" aria-hidden="true">#</a> 电商微服务系统-ElasticSearch</h3><p><img src="'+g+'" alt="Alt text"></p><p>在微服务电商系统中，我们主要看一个业务场景，搜索商品业务场景。<br> 搜索商品实现过程，客户端发起请求——&gt;电商系统——&gt;商品微服务——&gt;电商数据库。</p><p>如果客户端有这样一个要求，查询订单的时候，需要查询商品。如何实现个规则要求呢？<br> 查询订单实现过程，客户端发起请求——&gt;电商网站——&gt;ElasticSearch。</p><p>在ElasticSearch中可以一次性查询出订单商品数据。而且还可以提升性能<br> 总结：这就是我们在电商系统中使用ElasticSearch的原因<br> 1、先从单体电商系统分析<br> 2、然后再从电商微服务系统分析<br> 3、最后引入ElasticSearch<br> 4、由此得到微服务系统中为什么要使用ElasticSearch</p><h2 id="微服务系统中如何落地elasticsearch" tabindex="-1"><a class="header-anchor" href="#微服务系统中如何落地elasticsearch" aria-hidden="true">#</a> 微服务系统中如何落地ElasticSearch</h2><p>前提<br> 1、电商微服务系统<br> 2、ElasticSearch<br> 3、kibana<br> 步骤<br> 1、电商微服务系统准备<br> 通过vs创建.Net7电商系统微服务系统</p><p><img src="'+h+'" alt="Alt text"></p><p>2、ElasticSearch准备 2.1 ElasticSearch 前提</p><p>​ jdk1.8下载地址：https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html</p><p>​ jdk1.8安装：直接搜索安装</p><p>​ 2.2 Elasticsearch准备</p><p>​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-10-1</p><p>​ 文档地址：https://www.elastic.co/guide/en/elasticsearch/reference/7.10/index.html</p><p>​ Elasticsearch安装： <img src="'+k+'" alt="Alt text"></p>',41),Hn=n("br",null,null,-1),Kn=n("br",null,null,-1),Ln=n("br",null,null,-1),Qn={href:"https://artifacts.elastic.co/downloads/kibana/kibana-7.10.1-windows-x86_64.zip",target:"_blank",rel:"noopener noreferrer"},Vn=n("br",null,null,-1),On=n("br",null,null,-1),Jn=n("br",null,null,-1),Wn=n("img",{src:q,alt:"Alt text"},null,-1),Xn=t('<h3 id="添加商品场景落地" tabindex="-1"><a class="header-anchor" href="#添加商品场景落地" aria-hidden="true">#</a> 添加商品场景落地</h3><p>条件<br> 1、电商微服务系统LKN.EBusiness.Service<br> 2、NEST<br> 3、客户端访问<br> 4、kibana<br> 步骤<br> 1、先进入到电商微服务系统LKN.EBusiness.Service<br> 1.1 、 在项目中通过nuget引入NEST</p><p><img src="'+_+'" alt="Alt text"></p><p>1.2 先在电商网站中创建ProductController类</p><p><img src="'+y+`" alt="Alt text"></p><p>然后在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;Product&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
        /// &lt;summary&gt;
        /// 添加商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;product&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost]
        public ActionResult&lt;Product&gt; PostProduct(Product product)
        {
            _productService.Create(product);
            return CreatedAtAction(&quot;GetProduct&quot;, new { id = product.Id }, product);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3、然后在电商网站中创建ProductService类</p><p><img src="`+x+`" alt="Alt text"></p><p>然后在ProductService类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
/// 商品服务实现
/// &lt;/summary&gt;
public class ProductService : IProductService
{
    private readonly IMongoCollection&lt;Product&gt; _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri(&quot;http://localhost:9200&quot;);
                // var defaultIndex = &quot;products&quot;;

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

    public void Create(Product Product)
        {
            elasticClient.Index(Product,idx =&gt; idx.Index(&quot;products&quot;));
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4、然后在电商网站中创建product类</p><p><img src="`+f+`" alt="Alt text"></p><p>然后在product类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品
    /// &lt;/summary&gt;
    public class Product
    {
        public string Id { set; get; }
        public string ProductCode { set; get; }    //商品编码
        public string ProductUrl { set; get; }         // 商品主图 text
        public string ProductTitle { set; get; }       //商品标题
        public string ProductDescription { set; get; }     // 图文描述
        public decimal ProductVirtualprice { set; get; } // 商品虚拟价格
        public decimal ProductPrice { set; get; }       //价格
        public int ProductSort { set; get; }    //商品序号
        public int ProductSold { set; get; }        //已售件数
        public int ProductStock { set; get; }       //商品库存
        public string ProductStatus { set; get; } // 商品状态
        public int score { set; get; } //商品级别
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.5 、 然后启动电商网站实例一</p><p><img src="`+P+'" alt="Alt text"></p><p>2、 ElasticSearch 准备<br> 2.1 先进入到ElasticSearch中，进入到config目录中</p><p><img src="'+S+`" alt="Alt text"></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ======================== Elasticsearch Configuration =========================</span>
<span class="token comment">#</span>
<span class="token comment"># NOTE: Elasticsearch comes with reasonable defaults for most settings.</span>
<span class="token comment">#       Before you set out to tweak and tune the configuration, make sure you</span>
<span class="token comment">#       understand what are you trying to accomplish and the consequences.</span>
<span class="token comment">#</span>
<span class="token comment"># The primary way of configuring a node is via this file. This template lists</span>
<span class="token comment"># the most important settings you may want to configure for a production cluster.</span>
<span class="token comment">#</span>
<span class="token comment"># Please consult the documentation for further information on configuration options:</span>
<span class="token comment"># https://www.elastic.co/guide/en/elasticsearch/reference/index.html</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Cluster -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Use a descriptive name for your cluster:</span>
<span class="token comment">#</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>application<span class="token punctuation">-</span>cluster
<span class="token comment">#</span>
<span class="token comment"># ------------------------------------ Node ------------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Use a descriptive name for the node:</span>
<span class="token comment">#</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">1</span>
<span class="token comment">#</span>
<span class="token comment"># Add custom attributes to the node:</span>
<span class="token comment">#</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token comment">#</span>
<span class="token comment"># ----------------------------------- Paths ------------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Path to directory where to store the data (separate multiple locations by comma):</span>
<span class="token comment">#</span>
<span class="token comment">#path.data: /path/to/data</span>
<span class="token comment">#</span>
<span class="token comment"># Path to log files:</span>
<span class="token comment">#</span>
<span class="token comment">#path.logs: /path/to/logs</span>
<span class="token comment">#</span>
<span class="token comment"># ----------------------------------- Memory -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Lock the memory on startup:</span>
<span class="token comment">#</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#</span>
<span class="token comment"># Make sure that the heap size is set to about half the memory available</span>
<span class="token comment"># on the system and that the owner of the process is allowed to use this</span>
<span class="token comment"># limit.</span>
<span class="token comment">#</span>
<span class="token comment"># Elasticsearch performs poorly when the system is swapping the memory.</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Network -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Set the bind address to a specific IP (IPv4 or IPv6):</span>
<span class="token comment">#</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost
<span class="token comment">#</span>
<span class="token comment"># Set a custom port for HTTP:</span>
<span class="token comment">#</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token key atrule">cluster.routing.allocation.disk.threshold_enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
<span class="token comment">#</span>
<span class="token comment"># For more information, consult the network module documentation.</span>
<span class="token comment">#</span>
<span class="token comment"># --------------------------------- Discovery ----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Pass an initial list of hosts to perform discovery when this node is started:</span>
<span class="token comment"># The default list of hosts is [&quot;127.0.0.1&quot;, &quot;[::1]&quot;]</span>
<span class="token comment">#</span>
<span class="token comment">#discovery.seed_hosts: [&quot;host1&quot;, &quot;host2&quot;]</span>
<span class="token comment">#</span>
<span class="token comment"># Bootstrap the cluster using an initial set of master-eligible nodes:</span>
<span class="token comment">#</span>
<span class="token comment">#cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;]</span>
<span class="token comment">#</span>
<span class="token comment"># For more information, consult the discovery and cluster formation module documentation.</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Gateway -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Block initial recovery after a full cluster restart until N nodes are started:</span>
<span class="token comment">#</span>
<span class="token comment">#gateway.recover_after_nodes: 3</span>
<span class="token comment">#</span>
<span class="token comment"># For more information, consult the gateway module documentation.</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Various -----------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Require explicit names when deleting indices:</span>
<span class="token comment">#</span>
<span class="token comment">#action.destructive_requires_name: true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3 、然后启动ElasticSearch</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>elasticsearch.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+C+'" alt="Alt text"></p><p>2.4、ElasticSearch 启动是否成功</p><p><img src="'+w+'" alt="Alt text"></p><p>3、客户端访问</p><p>3.1 进入到浏览器，添加商品</p><p><img src="'+A+`" alt="Alt text"></p><p>4、kibana 准备<br> 4.1、启动 kibana</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>kibana-7.10.1-windows-x86_64<span class="token punctuation">\\</span>bin<span class="token operator">&gt;</span>kibana.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开开发工具</p><p><img src="`+E+`" alt="Alt text"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> products_cluster<span class="token operator">/</span>_search
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;productTitle&quot;</span><span class="token operator">:</span><span class="token string">&quot;手机&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+I+'" alt="Alt text"></p><h4 id="添加商品数据原理" tabindex="-1"><a class="header-anchor" href="#添加商品数据原理" aria-hidden="true">#</a> 添加商品数据原理</h4><h5 id="全局设计" tabindex="-1"><a class="header-anchor" href="#全局设计" aria-hidden="true">#</a> 全局设计</h5>',36),Yn={href:"http://www.codebaoku.com/tech/tech-yisu-461541.html",target:"_blank",rel:"noopener noreferrer"},Zn=t('<h6 id="商品数据写入过程" tabindex="-1"><a class="header-anchor" href="#商品数据写入过程" aria-hidden="true">#</a> 商品数据写入过程</h6><p>1、不断将Document写入到 <code>In-memory buffer</code> (内存缓存区)<br> 2、当满足一定条件后内存缓冲区中的Documents刷新到高速缓存（<code>cache</code>）。<br> 3、生成新的segment,这个segment 还在 <code>cache</code> 中。<br> 4、这时候还没有 commit ,但是已经可以被读取了。<br> 画图如下：</p><p><img src="'+D+'" alt="Alt text"></p><p>数据从 <code>buffer</code> 到 <code>cache</code> 的过程是定期每秒刷新一次。所以新写入的<code>Document</code>最慢1秒就可以在<code>cache</code>中被搜索到。<br> 而<code>Document</code> 从 <code>buffer</code> 到 <code>cache</code> 的过程叫做 <code>refresh</code>。 一般是1秒刷新一次，不需要进行额外修改。当然，如果有修改的需要，可以参考文末的相关资料。这也就是是为什么说<code>ElasticSearch</code>是 <code>准实时</code>的。</p><h6 id="商品数据写入防止丢失" tabindex="-1"><a class="header-anchor" href="#商品数据写入防止丢失" aria-hidden="true">#</a> 商品数据写入防止丢失</h6><p>1、<code>Document</code> 不断写入到 <code>In-memory buffer</code> ,此时也会追加 <code>translog</code>。<br> 2、当<code>buffer</code> 中的数据每秒 <code>refresh</code> 到 <code>cache</code> 中时，<code>translog</code> 并没有进入到刷新磁盘，是持续追加的。<br> 3、<code>translog</code> 每隔 5s 会 <code>fsync</code> 到磁盘。<br> 4、<code>translog</code> 会断续累加变得越来越大，当<code>translog</code> 大到一定程度或者每隔一段时间，会执行<code>flush</code>。</p><p><img src="'+T+'" alt="Alt text"></p><p><code>flush</code> 操作会分为以下几步执行</p><ol><li><code>buffer</code> 被清空</li><li>记录 <code>commit point</code></li><li><code>cache</code> 内的 <code>segment</code> 被 <code>fsync</code> 刷新到磁盘</li><li><code>translog</code> 被删除。</li></ol><p><img src="'+j+'" alt="Alt text"></p><p>值得注意的是：</p><ol><li><code>translog</code> 每 <code>5s</code> 刷新一次磁盘，所以故障重启，可能会丢失<code>5s</code>的数据。</li><li><code>translog</code> 执行<code>flush</code>操作，默认<code>30</code>分钟一次，或者<code>translog</code>太大（2G）</li></ol><p><img src="'+N+'" alt="Alt text"></p><p>总结：</p><ol><li>ES把商品数据存储到缓冲区</li><li>从缓冲区中同步到缓存中</li><li>从缓存中异步刷新到磁盘</li></ol><h4 id="数据结构设计" tabindex="-1"><a class="header-anchor" href="#数据结构设计" aria-hidden="true">#</a> 数据结构设计</h4><h5 id="数据设计结构" tabindex="-1"><a class="header-anchor" href="#数据设计结构" aria-hidden="true">#</a> 数据设计结构</h5><p>1、Dcoument<br> 2、Index(数据库)<br> 3、Index(查询)</p><h5 id="数据格式如下" tabindex="-1"><a class="header-anchor" href="#数据格式如下" aria-hidden="true">#</a> 数据格式如下</h5><p><img src="'+G+`" alt="Alt text"></p><h3 id="查询商品业务场景落地" tabindex="-1"><a class="header-anchor" href="#查询商品业务场景落地" aria-hidden="true">#</a> 查询商品业务场景落地</h3><p>步骤<br> 1、先在 <code>ProductController</code> 类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;Product&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
        /// &lt;summary&gt;
        /// 搜索商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;{id}&quot;)]
        public ActionResult&lt;Product&gt; GetProduct(string id)
        {
            var product = _productService.GetProductById(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后在ProductService类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>
 /// &lt;summary&gt;
/// 商品服务实现
/// &lt;/summary&gt;
public class ProductService : IProductService
{
    private readonly IMongoCollection&lt;Product&gt; _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri(&quot;http://localhost:9200&quot;);
                // var defaultIndex = &quot;products&quot;;

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

    public Product GetProductById(string id)
        {
            return elasticClient.Get&lt;Product&gt;(id, idx =&gt; idx.Index(&quot;products&quot;)).Source;
        }
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、客户端访问，进入到浏览器进行访问</p><p><img src="`+B+`" alt="Alt text"></p><h3 id="搜索商品业务场景落地" tabindex="-1"><a class="header-anchor" href="#搜索商品业务场景落地" aria-hidden="true">#</a> 搜索商品业务场景落地</h3><p>步骤<br> 1、先在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;Product&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
        
        /// &lt;summary&gt;
        /// 全文查询
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;productDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;KeywordSearch&quot;)]
        public ActionResult&lt;IEnumerable&lt;Product&gt;&gt; GetProductsKeywordSearch([FromQuery]ProductDto productDto)
        {
            var products = _productService.GetProductsKeywordSearch(productDto);

            if (products == null)
            {
                return NotFound();
            }

            return products.ToList();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后在ProductService类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
/// 商品服务实现
/// &lt;/summary&gt;
public class ProductService : IProductService
{
    private readonly IMongoCollection&lt;Product&gt; _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri(&quot;http://localhost:9200&quot;);
                // var defaultIndex = &quot;products&quot;;

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

   public IEnumerable&lt;Product&gt; GetProductsKeywordSearch(ProductDto productDto)
        {
           return elasticClient.Search&lt;Product&gt;(s =&gt; s
            .Index(&quot;products&quot;)
            .Query(q =&gt; q
              .Match( mq =&gt; mq.Field(f =&gt; f.ProductTitle).Query(productDto.ProductTitle))
            )
           ).Documents;
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、客户端访问，进入到浏览器进行访问</p><p><img src="`+M+'" alt="Alt text"></p><h5 id="正排索引" tabindex="-1"><a class="header-anchor" href="#正排索引" aria-hidden="true">#</a> 正排索引</h5><p><code>正排索引</code> ：是以文档对象的唯一ID作为索引，以文档内容作为记录的结构。</p><p><img src="'+z+'" alt="Alt text"></p><h5 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h5><p><code>倒排索引</code>： <code>Inverte index</code> ,指的是将文档内容中的单词作为索引，将包含该词的文档ID作为记录的结构。</p><p><img src="'+U+`" alt="Alt text"></p><h5 id="什么是分词" tabindex="-1"><a class="header-anchor" href="#什么是分词" aria-hidden="true">#</a> 什么是分词</h5><p>把一段话分开<br> 苹果20手机--&gt; 苹果20 手机 单词 word</p><p>倒排索引的生成过程<br> 下面通过一个例子来说明下倒排索引的生成过程。</p><p>假设目前有以下两个文档内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>productTitle:苏州街维亚大厦  
productTitle:桔子酒店苏州街店
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+F+'" alt="Alt text"><br><img src="'+R+'" alt="Alt text"></p><p>有了倒排索引，能快速、灵活地实现各类搜索需求。整个搜索过程中我们不需要做任何文本的模糊匹配。</p><p>例如，如果需要在上述两个文档中查询 苏州街桔子 ，可以通过分词后 苏州街 查到 1、2，通过 桔子 查到 2，然后再进行取交取并等操作得到最终结果。</p><p><img src="'+H+'" alt="Alt text"></p><p>倒排索引结构</p><p><img src="'+K+'" alt="Alt text"></p><p>Term Dictionary：存储单词和文档Id对应关系</p><p>Postings List：记录表，记录文档Id</p><p>文档 id（DocId, Document Id），包含单词的所有文档唯一 id，用于去正排索引中查询原始数据。<br> 词频（TF，Term Frequency），记录 Term 在每篇文档中出现的次数，用于后续相关性算分。<br> 位置（Position），记录 Term 在每篇文档中的分词位置（多个），用于做词语搜索（Phrase Query）。<br> 偏移（Offset），记录 Term 在每篇文档的开始和结束位置，用于高亮显示等。</p><p><img src="'+L+'" alt="Alt text"></p><h5 id="倒排索引存储结构" tabindex="-1"><a class="header-anchor" href="#倒排索引存储结构" aria-hidden="true">#</a> 倒排索引存储结构</h5><p>1、segment 段存储结构</p><p>倒排索引term索引</p><p><img src="'+Q+'" alt="Alt text"></p><p>完整搜索过程</p><p><img src="'+V+'" alt="Alt text"></p><h4 id="搜索商品数据分词" tabindex="-1"><a class="header-anchor" href="#搜索商品数据分词" aria-hidden="true">#</a> 搜索商品数据分词</h4><p>什么是分词<br> 分词：就是将一句话，拆分成一个个的词。例如：</p><p><img src="'+O+`" alt="Alt text"></p><p>什么是分词器<br> 如何将一句话拆分成一个一个的词。就是分词器</p><p>搜索商品分词落地<br> 步骤</p><p>1、先在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;Product&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
        
        /// &lt;summary&gt;
        /// 全文查询
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;productDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;KeywordSearch&quot;)]
        public ActionResult&lt;IEnumerable&lt;Product&gt;&gt; GetProductsKeywordSearch([FromQuery]ProductDto productDto)
        {
            var products = _productService.GetProductsKeywordSearch(productDto);

            if (products == null)
            {
                return NotFound();
            }

            return products.ToList();
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后在ProductService类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> /// &lt;summary&gt;
/// 商品服务实现
/// &lt;/summary&gt;
public class ProductService : IProductService
{
    private readonly IMongoCollection&lt;Product&gt; _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri(&quot;http://localhost:9200&quot;);
                // var defaultIndex = &quot;products&quot;;

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

   public IEnumerable&lt;Product&gt; GetProductsKeywordSearch(ProductDto productDto)
        {
           return elasticClient.Search&lt;Product&gt;(s =&gt; s
            .Index(&quot;products&quot;)
            .Query(q =&gt; q
              .Match( mq =&gt; mq.Field(f =&gt; f.ProductTitle).Query(productDto.ProductTitle))
            )
           ).Documents;
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、客户端访问，进入到浏览器进行访问</p><p><img src="`+J+'" alt="Alt text"></p><p>4、 kibana 中查询</p><p><img src="'+W+`" alt="Alt text"></p><p>为什么输入手机可以查询出手机13 核心原因：使用分词器导致</p><p>进入kibana 输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> products<span class="token operator">/</span>_analyze
<span class="token punctuation">{</span>
   <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;手机13&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+X+'" alt="Alt text"></p><p>手机13被分词成了 手 机 13</p><p>每一个分词叫做token</p><p>分词具体解析</p><p>1、token 分词标识</p><p>2、start_offset 分词开始偏移量</p><p>3、end_offset 分词结束偏移量</p><p>4、type 分词类型(类似于字段类型)</p><p>5、position 分词位置</p><p>当客户端进行商品搜索的时候，输入商品名称“手机”，”手机“也被分词，分成“手” 和 “机”。然后使用倒排索引进行查询，就查询出了商品名称对应的“手机13”数据。</p><h5 id="分词执行原理" tabindex="-1"><a class="header-anchor" href="#分词执行原理" aria-hidden="true">#</a> 分词执行原理</h5><h6 id="分词器" tabindex="-1"><a class="header-anchor" href="#分词器" aria-hidden="true">#</a> 分词器</h6><p>1、<strong>StandardAnalyzer</strong></p><p>默认使用的是标准分词器StandardAnalyzer</p><h6 id="分词器执行过程" tabindex="-1"><a class="header-anchor" href="#分词器执行过程" aria-hidden="true">#</a> 分词器执行过程</h6><p><img src="'+Y+`" alt="Alt text"></p><p>StandardAnalyzer主要做了3件事情</p><p>1、文本过滤 char_filter 作用：过滤出不必要的信息，例如：一些字符 &lt; &gt; , 。等等</p><p>2、分词 tokenizer 作用：将句子进行分词操作</p><p>3、词单元过滤器 filter：将分的词进行自定义操作，例如：将大写转换成小写，将小写转换成大写</p><h6 id="分词字段" tabindex="-1"><a class="header-anchor" href="#分词字段" aria-hidden="true">#</a> 分词字段</h6><p>只有文本(text)类型的字段才能被分词</p><h6 id="分词字段映射" tabindex="-1"><a class="header-anchor" href="#分词字段映射" aria-hidden="true">#</a> 分词字段映射</h6><p>Mapping 每一个字段通过映射设置相应类型</p><h6 id="分词字段查询" tabindex="-1"><a class="header-anchor" href="#分词字段查询" aria-hidden="true">#</a> 分词字段查询</h6><p>1、进入kibana，输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> products<span class="token operator">/</span>_mapping
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、kibana结果显示</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;products&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;id&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productCode&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productDescription&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productPrice&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productSold&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productSort&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productStatus&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productStock&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productTitle&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productUrl&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;productVirtualprice&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;score&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+Z+`" alt="Alt text"></p><p>maappings映射解析</p><p>1、type：text 只有文本的字段才能被分词，其他不会被分词。只有字符串类型才能被转换成text文本类型</p><p>2、keyword：字符串类型字段不分词。固定值查询</p><h5 id="商品搜素数据分词-情况1" tabindex="-1"><a class="header-anchor" href="#商品搜素数据分词-情况1" aria-hidden="true">#</a> 商品搜素数据分词-情况1</h5><p>分析：默认商品名称字段都是默认进行分词的，分词之后，都是大写字母转换成小写，现在想将小写字母转换成大写字母？如何实现</p><p>方案：自定义分词</p><h6 id="如何落地自定义分词" tabindex="-1"><a class="header-anchor" href="#如何落地自定义分词" aria-hidden="true">#</a> 如何落地自定义分词</h6><p>1、kibana</p><p>步骤</p><p>1、创建自定义分词</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">PUT</span> products_3
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;analysis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;product_custom&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;char_filter&quot;</span><span class="token operator">:</span>  <span class="token punctuation">[</span> <span class="token string">&quot;html_strip&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;tokenizer&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;filter&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span> <span class="token string">&quot;uppercase&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">&quot;productTitle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
					<span class="token string-property property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;product_custom&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+$+`" alt="Alt text"></p><p>3、查询商品名称字段映射情况</p><p>​ 3.1、在kibana中输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> products_3<span class="token operator">/</span>_mapping
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+nn+`" alt="Alt text"></p><p>4、查询商品名称字段分词情况</p><p>​ 3.1、在kibana中输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> products_3<span class="token operator">/</span>_analyze
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;productTitle&quot;</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;手机iphone&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+sn+'" alt="Alt text"></p><h4 id="商品搜素数据分词-情况2" tabindex="-1"><a class="header-anchor" href="#商品搜素数据分词-情况2" aria-hidden="true">#</a> 商品搜素数据分词-情况2</h4><p>分析：默认商品名称字段都是默认进行分词的，分词之后，中文都被拆分成了一个一个的词，完全不符合国人的语意情况，如何解决中文分词问题呢？</p><p>方案：自定义分词器</p><p>如何落地自定义分词器</p><p>1、elasticsearch-analysis-ik</p><p>步骤</p><p>1、elasticsearch-analysis-ik前提准备</p><p>​ 1.1、下载地址：https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.10.1/elasticsearch-analysis-ik-7.10.1.zip</p><p>​ 1.2、文档地址：https://github.com/medcl/elasticsearch-analysis-ik</p><p><img src="'+en+'" alt="Alt text"></p><p>​ 1.3、elasticsearch-analysis-ik安装：</p><p>​ 1.3.1、进入到elasticsearch-7.10.1 bin目录中</p><p><img src="'+an+`" alt="Alt text"></p><p>​ 1.3.2、使用cmd进行安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#使用 </span>
elasticsearch-plugin.bat <span class="token function">install</span> https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.10.1/elasticsearch-analysis-ik-7.10.1.zip   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.2.3、进入大plugins目录中，安装成功 <img src="`+tn+'" alt="Alt text"><br><img src="'+ln+`" alt="Alt text"></p><p>1.3.4、ES重新启动</p><p>4、elasticsearch-analysis-ik应用</p><p>​ 4.1、创建elasticsearch-analysis-ik分词器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">PUT</span> products_4
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">&quot;productTitle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
					<span class="token string-property property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.2 kibana 查看展示 <img src="`+rn+`" alt="Alt text"></p><p>4.3、查询商品名称字段映射情况</p><p>​ 4.3.1、在kibana中输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> products_4<span class="token operator">/</span>_mapping
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+cn+`" alt="Alt text"></p><p>4.4、查询商品名称字段分词情况</p><p>​ 4.4.1、在kibana中输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> products_4<span class="token operator">/</span>_analyze
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;productTitle&quot;</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;手机iphone&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+dn+`" alt="Alt text"></p><h3 id="聚合商品业务场景落地" tabindex="-1"><a class="header-anchor" href="#聚合商品业务场景落地" aria-hidden="true">#</a> 聚合商品业务场景落地</h3><h4 id="什么是聚合" tabindex="-1"><a class="header-anchor" href="#什么是聚合" aria-hidden="true">#</a> 什么是聚合</h4><p>聚合：就是统计。做报表的核心方式</p><h4 id="聚合商品价格平均数落地" tabindex="-1"><a class="header-anchor" href="#聚合商品价格平均数落地" aria-hidden="true">#</a> 聚合商品价格平均数落地</h4><p>步骤</p><p>1、先在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;Product&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
        
        /// &lt;summary&gt;
        /// 聚合查询
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;productDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;AggreateTextSearch&quot;)]
        public ActionResult&lt;ValueAggregate&gt; GetProductsAggreateTextSearch([FromQuery] ProductDto productDto)
        {
            var products = _productService.GetProductsAggreateTextSearch(productDto);

            if (products == null)
            {
                return NotFound();
            }

            return products;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后在ProductService类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>
/// &lt;summary&gt;
/// 商品服务实现
/// &lt;/summary&gt;
public class ProductService : IProductService
{
    private readonly IMongoCollection&lt;Product&gt; _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri(&quot;http://localhost:9200&quot;);
                // var defaultIndex = &quot;products&quot;;

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

   public ValueAggregate GetProductsAggreateTextSearch(ProductDto productDto)
        {
            #region 1、聚合查询(平均值)
            {
                var ducmentsss = elasticClient.Search&lt;Product&gt;(s =&gt; s
                         .Index(&quot;products&quot;)
                         .Query(q =&gt; q.Match(mq =&gt; mq.Field(f =&gt; f.ProductTitle).Query(productDto.ProductTitle)))
                         .Aggregations(a =&gt; a.Average(&quot;ProductPrice_Average&quot;, aa =&gt; aa.Field(f =&gt; f.ProductPrice)))
                       ).Aggregations.Average(&quot;ProductPrice_Average&quot;);

                return ducmentsss;
            }
            #endregion
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、客户端访问，进入到浏览器进行访问</p><p><img src="`+on+'" alt="Alt text"></p><h4 id="聚合商品数据原理" tabindex="-1"><a class="header-anchor" href="#聚合商品数据原理" aria-hidden="true">#</a> 聚合商品数据原理</h4><h5 id="函式、列式数据存储" tabindex="-1"><a class="header-anchor" href="#函式、列式数据存储" aria-hidden="true">#</a> 函式、列式数据存储</h5><p><img src="'+pn+'" alt="Alt text"></p><p>行式存储：是一行一行进行存储，</p><p>列式存储：是一列一列进存储。列式存储有利于做聚合操作。</p><p><code>doc_values</code>结构<br><code>doc_values</code>字段文件</p><p><img src="'+un+`" alt="Alt text"></p><h4 id="查询商品分页业务场景落地" tabindex="-1"><a class="header-anchor" href="#查询商品分页业务场景落地" aria-hidden="true">#</a> 查询商品分页业务场景落地</h4><p>分析：当客户端通过电商微服务往Elasticsearch中添加商品数据的时候，商品数据已经被成功添加到Elasticsearch中。如何从Elasticsearch中搜索商品数据？</p><p>方案：商品分页</p><p>如何落地商品分页</p><p>条件</p><p>1、<code>ip_hash</code></p><p>步骤</p><p>1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;Product&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
         /// &lt;summary&gt;
        /// 查询商品(分页查询)
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;{id}&quot;)]
        public ActionResult&lt;IEnumerable&lt;Product&gt;&gt; GetProductsByPage(int page, int pageSize)
        {
            var products = _productService.GetProductsByPage(page, pageSize).ToList();

            if (products == null)
            {
                return NotFound();
            }

            return products;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.2、然后在电商网站中创建ProductService类，在ProductService类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
/// 商品服务实现
/// &lt;/summary&gt;
public class ProductService : IProductService
{
    private readonly IMongoCollection&lt;Product&gt; _products;

    public ProductService()
    {
        // 1、建立Elasticsearch连接
        var client = new MongoClient(&quot;Elasticsearch://localhost:27017&quot;);
        // 2、获取商品库(自己创建商品数据)
        var database = client.GetDatabase(&quot;ProductDB&quot;);

        // 3、获取商品表(自己创建商品数)
        _products = database.GetCollection&lt;Product&gt;(&quot;Product&quot;);
     
    }

  public IEnumerable&lt;Product&gt; GetProductsByPage(int page, int pageSize)
        {
            #region 1、直接查询
            {
                var request = new SearchRequest(&quot;products&quot;);
                request.From = (page-1)* pageSize;
                request.Size = pageSize;

                return elasticClient.Search&lt;Product&gt;(request).Documents;
            }
            #endregion

            #region 2、委托查询
            {
                return elasticClient.Search&lt;Product&gt;(s =&gt; s
                .Index(&quot;products&quot;)
                .From((page - 1) * pageSize)
                .Size(pageSize)
                ).Documents;
            }
            #endregion
        }
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除商品业务场景落地" tabindex="-1"><a class="header-anchor" href="#删除商品业务场景落地" aria-hidden="true">#</a> 删除商品业务场景落地</h4><p>分析：当客户端通过电商微服务往Elasticsearch中添加商品的时候，数据量非常大，这个时候，客户端希望能够删除商品，如何删除商品？</p><p>方案：删除商品</p><p>如何删除商品？<br> 步骤</p><p>1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;Product&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
        
        /// &lt;summary&gt;
        /// 删除商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;product&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpDelete(&quot;{id}&quot;)]
        public IActionResult DeleteProduct(string id)
        {

            try
            {
                _productService.Delete(id);
            }
            catch (Exception)
            {
                throw;
            }

            return NoContent();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.2、然后在电商网站中创建ProductService类，在ProductService类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> /// &lt;summary&gt;
/// 商品服务实现
/// &lt;/summary&gt;
public class ProductService : IProductService
{
    private readonly IMongoCollection&lt;Product&gt; _products;

    public ProductService()
    {
        // 1、建立Elasticsearch连接
        var client = new MongoClient(&quot;Elasticsearch://localhost:27017&quot;);
        // 2、获取商品库(自己创建商品数据)
        var database = client.GetDatabase(&quot;ProductDB&quot;);

        // 3、获取商品表(自己创建商品数)
        _products = database.GetCollection&lt;Product&gt;(&quot;Product&quot;);
     
    }

    public void Delete(string Id)
        {
            elasticClient.Delete&lt;Product&gt;(Id, idx =&gt; idx.Index(&quot;products&quot;));
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改商品业务场景落地" tabindex="-1"><a class="header-anchor" href="#修改商品业务场景落地" aria-hidden="true">#</a> 修改商品业务场景落地</h4><p>分析：当客户端通过电商微服务往Elasticsearch中添加商品的时候，商品添加错误，希望能够修改商品，这个时候，客户端希望能够修改商品，如何修改商品？</p><p>方案：修改商品</p><p>如何落地修改商品？<br> 步骤</p><p>1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
    /// 商品控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;Product&quot;)]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
        
        /// &lt;summary&gt;
        /// 修改商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;product&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPut(&quot;{id}&quot;)]
        public IActionResult PutProduct(string id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            try
            {
                _productService.Update(product);
            }
            catch (Exception)
            {
                throw;
            }

            return NoContent();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.2、然后在电商网站中创建ProductService类，在ProductService类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> /// &lt;summary&gt;
/// 商品服务实现
/// &lt;/summary&gt;
public class ProductService : IProductService
{
    private readonly IMongoCollection&lt;Product&gt; _products;

    public ProductService()
    {
        // 1、建立Elasticsearch连接
        var client = new MongoClient(&quot;Elasticsearch://localhost:27017&quot;);
        // 2、获取商品库(自己创建商品数据)
        var database = client.GetDatabase(&quot;ProductDB&quot;);

        // 3、获取商品表(自己创建商品数)
        _products = database.GetCollection&lt;Product&gt;(&quot;Product&quot;);
     
    }

   		/// &lt;summary&gt;
        /// 更新
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;Product&quot;&gt;&lt;/param&gt;
        public void Update(Product Product)
        {
            elasticClient.Update&lt;Product&gt;(Product.Id, idx =&gt;
                idx.Upsert(Product).Index(&quot;products&quot;)
            );
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="elasticsearch集群" tabindex="-1"><a class="header-anchor" href="#elasticsearch集群" aria-hidden="true">#</a> Elasticsearch集群</h3><h4 id="elasticsearch集群架构" tabindex="-1"><a class="header-anchor" href="#elasticsearch集群架构" aria-hidden="true">#</a> Elasticsearch集群架构</h4><p><img src="`+vn+'" alt="Alt text"></p><p>架构说明</p><p>1、1个主节点（Master node）</p><p>管理索引（创建索引、删除索引）、分配分片<br> 维护元数据<br> 管理集群节点状态<br> 一个Elasticsearch集群中，只有一个Master节点。在生产环境中，内存可以相对<br> 小一点，但机器要稳定。</p><p>2、2个数据（Data node）</p><p>在Elasticsearch集群中，会有N个DataNode节点。DataNode节点主要负责：<br> 数据写入、数据检索，大部分Elasticsearch的压力都在DataNode节点上<br> 在生产环境中，内存最好配置大一些</p><p>1、高可用 集群</p><p>2、海量数据并发读 副本</p><p>3、海量数据并发写 分片</p><p>4、海量数据存储 分片</p><h4 id="微服务项目中如何落地elasticsearch集群" tabindex="-1"><a class="header-anchor" href="#微服务项目中如何落地elasticsearch集群" aria-hidden="true">#</a> 微服务项目中如何落地Elasticsearch集群</h4><p>Elasticsearch集群落地前提<br> 条件</p><p>1、Master 1个实例</p><p>2、DataNode 2个实例</p><p>3、elasticsearch-head-master</p><p>4、电商微服务项目</p><p>Elasticsearch Master 阶段准备 步骤</p><p>1、Master准备</p><p>​ 1.1、先创建Elasticsearch Master节点</p><p><img src="'+mn+'" alt="Alt text"></p><p>1.2、然后在Elasticsearch中config目录中，找到elasticsearch.yml文件</p><p><img src="'+bn+`" alt="Alt text"></p><p>1.3、然后elasticsearch.yml内添加内容</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">1</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.attr.rack</span><span class="token punctuation">:</span> r1
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9201</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9301</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9301&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.4、然后进入Elasticsearch bin目录中启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ elasticsearch.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+gn+'" alt="Alt text"></p><h4 id="elasticsearch-datanode节点1准备" tabindex="-1"><a class="header-anchor" href="#elasticsearch-datanode节点1准备" aria-hidden="true">#</a> Elasticsearch DataNode节点1准备</h4><p>​ 1.1、先创建Elasticsearch DataNode节点</p><p><img src="'+hn+'" alt="Alt text"></p><p>1.2、然后在Elasticsearch中config目录中，找到elasticsearch.yml文件</p><p><img src="'+kn+`" alt="Alt text"></p><p>1.3、然后在elasticsearch.yml内添加内容</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">2</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment">#node.master: true</span>
<span class="token key atrule">node.attr.rack</span><span class="token punctuation">:</span> r1
<span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9202</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9302</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9301&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.4、然后进入Elasticsearch bin目录中启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ elasticsearch.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+qn+'" alt="Alt text"></p><h4 id="elasticsearch-datanode节点2准备" tabindex="-1"><a class="header-anchor" href="#elasticsearch-datanode节点2准备" aria-hidden="true">#</a> Elasticsearch DataNode节点2准备</h4><p>​ 1.1、先创建Elasticsearch DataNode节点</p><p><img src="'+_n+'" alt="Alt text"></p><p>​ 1.2、然后在Elasticsearch中config目录中，找到elasticsearch.yml文件</p><p><img src="'+yn+`" alt="Alt text"></p><p>​ 1.3、然后在elasticsearch.yml内添加内容</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">3</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment">#node.master: true</span>
<span class="token key atrule">node.attr.rack</span><span class="token punctuation">:</span> r1
<span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9203</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9303</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9301&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4、然后进入Elasticsearch bin目录中启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ elasticsearch.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+xn+'" alt="Alt text"></p><h4 id="elasticsearch-head-master准备" tabindex="-1"><a class="header-anchor" href="#elasticsearch-head-master准备" aria-hidden="true">#</a> elasticsearch-head-master准备</h4><p>1、<code>elasticsearch-head-master</code> 前提</p><p>​ 1.1、<code>node.js</code> 运行环境：http://nodejs.cn/download/</p><p>​ 1.2、<code>elasticsearch-head-master</code>下载地址：https://github.com/mobz/elasticsearch-head/archive/refs/heads/master.zip</p><p><img src="'+fn+'" alt="Alt text"></p><p>2、elasticsearch-head-master安装<br> 2.1、进入到elasticsearch-head-master目录中</p><p><img src="'+Pn+'" alt="Alt text"></p><pre><code>2.2、然后使用cmd输入**npm install**，进行安装  \n``` bash\nnpm install\n```    \n</code></pre><p>3、 <code>elasticsearch-head-master</code>运行</p><p>​ 然后使用cmd输入<strong>npm run start</strong>，进行运行</p><p><img src="'+Sn+`" alt="Alt text"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+Cn+'" alt="Alt text"></p><p>4、<code>elasticsearch-head-master</code>访问</p><p>​ 进入到浏览器输入http://localhost:9100进行访问</p><p><img src="'+wn+'" alt="Alt text"></p><p>elasticsearch-head-master说明</p><p>1、green：绿色，代表搭建成功</p><p>2、red:红色，搭建失败</p><p>3、yellow:黄色，只有一个节点可用，也算搭建失败</p><h4 id="elasticsearch集群电商微服务项目集成" tabindex="-1"><a class="header-anchor" href="#elasticsearch集群电商微服务项目集成" aria-hidden="true">#</a> Elasticsearch集群电商微服务项目集成</h4><p>1、进入到LKN.EBusines.Service项目ProductService类中</p><p><img src="'+An+'" alt="Alt text"></p><p>2、然后在ProductService类中增加</p><p><img src="'+En+`" alt="Alt text"></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>   /// &lt;summary&gt;
    /// 商品服务实现
    /// &lt;/summary&gt;
    public class ProductService : IProductService
    {
        private readonly ElasticClient elasticClient;
   public ProductService(/*IConfiguration configuration*/IOptions&lt;ProductMongoDBOptions&gt; options)
    {
        /* ProductMongoDBOptions productMongoDBOptions = options.Value;
         // 1、建立MongoDB连接
         var client = new MongoClient(productMongoDBOptions.ConnectionString);

         // 2、获取商品库
         var database = client.GetDatabase(&quot;productdb&quot;);

         // 3、获取商品表(集合)
         _products = database.GetCollection&lt;Product&gt;(&quot;Product&quot;);*/
        #region 1、单实例连接
        {
           /* var node = new Uri(&quot;http://localhost:9200&quot;);
            // var defaultIndex = &quot;products&quot;;

            var settings = new ConnectionSettings(node);
            //.DefaultIndex(defaultIndex);

            elasticClient = new ElasticClient(settings);*/
        }
        #endregion

        #region 2、集群连接
        {
            var nodes = new Uri[]
            {
                new Uri(&quot;http://localhost:9201&quot;),
                new Uri(&quot;http://localhost:9202&quot;),
                new Uri(&quot;http://localhost:9203&quot;),
            };
            var pool = new StaticConnectionPool(nodes);
            var settings = new ConnectionSettings(pool);

            elasticClient = new ElasticClient(settings);
        }
        #endregion

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h4 id="电商微服务项目访问" tabindex="-1"><a class="header-anchor" href="#电商微服务项目访问" aria-hidden="true">#</a> 电商微服务项目访问</h4><p>1、进入到浏览器进行访问</p><p><img src="`+In+'" alt="Alt text"></p><p>2、然后进入elasticsearch-head-master中，查看数据</p><p><img src="'+Dn+'" alt="Alt text"></p><h4 id="elasticsearch集群数据存储原理" tabindex="-1"><a class="header-anchor" href="#elasticsearch集群数据存储原理" aria-hidden="true">#</a> Elasticsearch集群数据存储原理</h4><p>Elasticsearch集主要是通过分片来进行存储的</p><h5 id="集群分片" tabindex="-1"><a class="header-anchor" href="#集群分片" aria-hidden="true">#</a> 集群分片</h5><p>​ 主分片：存储数据，数据增删改查</p><p>​ 副本分片：数据备份，防止数据丢失</p><p><img src="'+Tn+'" alt="Alt text"></p><p>粗线0就是分片</p><p>细线0是分片副本</p><h5 id="集群分片kibana中查看" tabindex="-1"><a class="header-anchor" href="#集群分片kibana中查看" aria-hidden="true">#</a> 集群分片kibana中查看</h5><p><img src="'+jn+'" alt="Alt text"></p><h5 id="elasticsearch存储数据原理" tabindex="-1"><a class="header-anchor" href="#elasticsearch存储数据原理" aria-hidden="true">#</a> Elasticsearch存储数据原理</h5><p>原理图如下：</p><p><img src="'+Nn+`" alt="Alt text"></p><p>核心细节如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shard <span class="token operator">=</span> hash<span class="token punctuation">(</span>routing<span class="token punctuation">)</span> % number_of_primary_shards
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1、先Hash，先对文档_idHash，</p><p>2、然后取模，然后对分片数取模</p><p>流程如下：</p><p>以下是在主副分片和任何副本分片上面 成功新建，索引和删除文档所需要的步骤顺序：</p><ol><li>客户端向 Node 1 发送新建、索引或者删除请求。</li><li>节点使用文档的 _id 确定文档属于分片 0 。请求会被转发到 Node 3，因为分片 0 的主分片目前被分配在 Node 3 上。</li><li>Node 3 在主分片上面执行请求。如果成功了，它将请求并行转发到 Node 1 和 Node 2 的副本分片上。一旦所有的副本分片都报告成功, Node 3 将向协调节点报告成功，协调节点向客户端报告成功。</li></ol><h5 id="elasticsearch查询数据原理" tabindex="-1"><a class="header-anchor" href="#elasticsearch查询数据原理" aria-hidden="true">#</a> Elasticsearch查询数据原理</h5><p>原理图如下：</p><p><img src="`+Gn+`" alt="Alt text"></p><p>流程如下：</p><p>以下是从主分片或者副本分片检索文档的步骤顺序：</p><p>1、客户端向 Node 1 发送获取请求。</p><p>2、节点使用文档的 _id 来确定文档属于分片 0 。分片 0 的副本分片存在于所有的三个节点上。 在这种情况下，它将请求转发到 Node 2 。</p><p>3、Node 2 将文档返回给 Node 1 ，然后将文档返回给客户端。</p><p>在处理读取请求时，协调结点在每次请求的时候都会通过轮询所有的副本分片来达到负载均衡。</p><p>在文档被检索时，已经被索引的文档可能已经存在于主分片上但是还没有复制到副本分片。 在这种情况下，副本分片可能会报告文档不存在，但是主分片可能成功返回文档。 一旦索引请求成功返回给用户，文档在主分片和副本分片都是可用的。</p><h5 id="集群分片-情况1" tabindex="-1"><a class="header-anchor" href="#集群分片-情况1" aria-hidden="true">#</a> 集群分片-情况1</h5><p>情况1：集群分片默认只有一个主分片，一个副本分片，如果遇到海量商品存储，一个分片无法存储，如何存储海量数据？</p><p>方案：多分片机制</p><h5 id="如何落地多分片机制" tabindex="-1"><a class="header-anchor" href="#如何落地多分片机制" aria-hidden="true">#</a> 如何落地多分片机制</h5><p>1、进入到kibana中进行，创建新数据库，输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">PUT</span> products_cluster_0
<span class="token punctuation">{</span>
   <span class="token string-property property">&quot;settings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;number_of_shards&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;number_of_replicas&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+Bn+'" alt="Alt text"></p><p>说明：</p><p>​ 1.1、number_of_shards代表分片数量</p><p>1.​2、number_of_replicas代表分表副本</p><p>2、然后在elasticsearch-head查看结果</p><p><img src="'+Mn+'" alt="Alt text"></p><p>粗线0,1,2代表主分片</p><p>细线0,1,2代表副本分片</p>',326);function $n(ns,ss){const a=r("router-link"),l=r("ExternalLinkIcon");return d(),o("div",null,[Un,n("nav",Fn,[n("ul",null,[n("li",null,[e(a,{to:"#目录"},{default:i(()=>[s("目录")]),_:1})]),n("li",null,[e(a,{to:"#分布式中间件-elasticsearch"},{default:i(()=>[s("分布式中间件-ElasticSearch")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#什么是elasticssearch"},{default:i(()=>[s("什么是ElasticsSearch")]),_:1})]),n("li",null,[e(a,{to:"#什么全文搜索"},{default:i(()=>[s("什么全文搜索")]),_:1})]),n("li",null,[e(a,{to:"#什么引擎"},{default:i(()=>[s("什么引擎")]),_:1})]),n("li",null,[e(a,{to:"#什么地方使用elastaicsearch"},{default:i(()=>[s("什么地方使用ElastaicSearch")]),_:1})]),n("li",null,[e(a,{to:"#微服务系统中为什么要使用elasticsearch"},{default:i(()=>[s("微服务系统中为什么要使用ElasticSearch")]),_:1})]),n("li",null,[e(a,{to:"#单体电商系统"},{default:i(()=>[s("单体电商系统")]),_:1})]),n("li",null,[e(a,{to:"#电商微服务系统"},{default:i(()=>[s("电商微服务系统")]),_:1})]),n("li",null,[e(a,{to:"#电商微服务系统-网站拆分"},{default:i(()=>[s("电商微服务系统-网站拆分")]),_:1})]),n("li",null,[e(a,{to:"#电商微服务系统-搜索微服务"},{default:i(()=>[s("电商微服务系统-搜索微服务")]),_:1})]),n("li",null,[e(a,{to:"#电商微服务系统-elasticsearch"},{default:i(()=>[s("电商微服务系统-ElasticSearch")]),_:1})])])]),n("li",null,[e(a,{to:"#微服务系统中如何落地elasticsearch"},{default:i(()=>[s("微服务系统中如何落地ElasticSearch")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#添加商品场景落地"},{default:i(()=>[s("添加商品场景落地")]),_:1})]),n("li",null,[e(a,{to:"#查询商品业务场景落地"},{default:i(()=>[s("查询商品业务场景落地")]),_:1})]),n("li",null,[e(a,{to:"#搜索商品业务场景落地"},{default:i(()=>[s("搜索商品业务场景落地")]),_:1})]),n("li",null,[e(a,{to:"#聚合商品业务场景落地"},{default:i(()=>[s("聚合商品业务场景落地")]),_:1})]),n("li",null,[e(a,{to:"#elasticsearch集群"},{default:i(()=>[s("Elasticsearch集群")]),_:1})])])])])]),Rn,n("p",null,[s("3、kibana准备"),Hn,s(" 3.1、kibana 下载"),Kn,s(" kibana 下载 https://www.elastic.co/cn/downloads/past-releases/logstash-7-10-1"),Ln,n("a",Qn,[s("kibana-7.10.1-windows-x86_64.zip 下载"),e(l)]),Vn,s(" 文档地址：https://www.elastic.co/guide/en/logstash/7.10/index.html"),On,s(" 3.2、安装 kibana"),Jn,Wn]),Xn,n("p",null,[n("a",Yn,[s("ElaticSearch 参考"),e(l)])]),Zn])}const as=c(zn,[["render",$n],["__file","elasticsearch001.html.vue"]]);export{as as default};
