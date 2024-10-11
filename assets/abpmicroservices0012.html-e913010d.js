import{_ as o,r,o as l,c as a,a as e,b as d,w as s,d as n,e as t}from"./app-c1c3c937.js";const c="/images/abpmicroservices/micro012/abpmicroservices0012_0001image.png",u="/images/abpmicroservices/micro012/abpmicroservices0012_0002image.png",v="/images/abpmicroservices/micro012/abpmicroservices0012_0003image.png",b="/images/abpmicroservices/micro012/abpmicroservices0012_0004image.png",m={},p=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),g={class:"table-of-contents"},P=t(`<h2 id="微服务大数据库mongodb、任务调度hangfire" tabindex="-1"><a class="header-anchor" href="#微服务大数据库mongodb、任务调度hangfire" aria-hidden="true">#</a> 微服务大数据库MongoDB、任务调度Hangfire</h2><h2 id="大数据数据库mongodb" tabindex="-1"><a class="header-anchor" href="#大数据数据库mongodb" aria-hidden="true">#</a> 大数据数据库MongoDB</h2><p>MongoDB文档数据库 json类似，xml yaml文件</p><p>应用场景：以商品添加为例<br> 1、商品微服务 集成MongoDB<br> 1.1 在<code>LKN.Product.MongoDB</code> 中 <code>ProductMongoDbContext.cs</code> 类，添加代码</p><p><code>ProductMongoDbContext.cs</code> 代码实现，同时创建一个MongoDB远程连接对象 ConnectionMonogDBStringName</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace LKN.Product.MongoDB;

[ConnectionStringName(ProductDbProperties.ConnectionMonogDBStringName)]//需要创建远程连接字符串地址
public class ProductMongoDbContext : AbpMongoDbContext, IProductMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection&lt;Question&gt; Questions =&gt; Collection&lt;Question&gt;();
     */
    public IMongoCollection&lt;LKN.Product.Products.Product&gt; Products =&gt; Collection&lt;LKN.Product.Products.Product&gt;(); // 创建商品模型
    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureProduct();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ProductMongoDbContextExtensions</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>
public static class ProductMongoDbContextExtensions
{
    public static void ConfigureProduct(
        this IMongoModelBuilder builder,
        Action&lt;AbpMongoModelBuilderConfigurationOptions&gt; optionsAction = null)
    {
        Check.NotNull(builder, nameof(builder));
        var options = new ProductMongoModelBuilderConfigurationOptions(
                ProductDbProperties.DbTablePrefix
            );

        optionsAction?.Invoke(options);

        // 1、创建商品模型对应的表
        builder.Entity&lt;Products.Product&gt;(b =&gt;
        {
            b.CollectionName = &quot;Products&quot;;
        });
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ProductMongoModelBuilderConfigurationOptions</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Volo.Abp.MongoDB;

namespace LKN.Product.MongoDB;

public class ProductMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
{
    public ProductMongoModelBuilderConfigurationOptions(string collectionPrefix = &quot;&quot;) : base(collectionPrefix)
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 在<code>LKN.Product.Domain</code> 领域层定义接口 <code>IProductMongoDBRepository</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> /// &lt;summary&gt;
    /// 商品仓储
    /// 1、做定制化
    /// &lt;/summary&gt;
    public interface IProductMongoDBRepository : IRepository&lt;Product, Guid&gt;
    {
        Product GetProductByName(string ProductName);

        /// &lt;summary&gt;
        /// 查询和图片
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public IEnumerable&lt;Product&gt; GetProductAndImages();

        public Task DeleteProductByProductStock(int ProductStock);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3 在<code>LKN.Product.MongoDB</code> MongoDB层 添加 <code>ProductMongoDBRepository</code> 实现</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> 
namespace LKN.Product.Products
{
    /// &lt;summary&gt;
    /// 商品仓储实现
    /// &lt;/summary&gt;
    [Dependency(ServiceLifetime.Singleton)]
    public class ProductMongoDBRepository : MongoDbRepository&lt;ProductMongoDbContext, Product, Guid&gt;, IProductMongoDBRepository
    {
        public ProductMongoDBRepository(
            IMongoDbContextProvider&lt;ProductMongoDbContext&gt; dbContextProvider)
            : base(dbContextProvider)
        {
        }

        public async Task DeleteProductByProductStock(int ProductStock)
        {
            // 1、获取MongoDB对应集合
            IMongoCollection&lt;Product&gt; mongoCollections = await GetCollectionAsync();

            // 2、根据库存删除商品
            await mongoCollections.DeleteManyAsync(Builders&lt;Product&gt;.Filter.Eq(b =&gt; b.ProductStock, ProductStock));
        }

        /*public override async Task&lt;Products&gt; GetAsync(Guid id, bool includeDetails = true, CancellationToken cancellationToken = default)
        {
            DbSet&lt;Products&gt; products = await GetDbSetAsync();
            return products.Include(p =&gt; p.ProductImages).Where(p =&gt; p.Id == id).FirstOrDefault();
        }*/

        public IEnumerable&lt;Product&gt; GetProductAndImages()
        {
            /* DbSet&lt;Products&gt; products = GetDbSetAsync().Result;

             return products.Include(product =&gt; product.ProductImages).ToList();*/
            return null;
        }

        /// &lt;summary&gt;
        /// 根据商品名称，查询商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;ProductName&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public Product GetProductByName(string ProductName)
        {
            /*// 1、第一种实现
            //EBusinessDbContext eBusinessDbContext = GetDbContextAsync().Result;

            // 2、第二种实现，根据名称获取商品
            DbSet&lt;Products&gt;  products = GetDbSetAsync().Result;
            return products.Where(product =&gt; product.ProductTitle == ProductName).FirstOrDefault();*/
            return null;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在<code>LKN.Product.HttpApi.Host</code> 配置项目引用 <code>LKN.Product.MongoDB</code> 并且在添加 <code>typeof(ProductMongoDbModule),</code></p><p><img src="`+c+`" alt="Alt text"></p><p>ProductHttpApiHostModule 代码实现</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>
[DependsOn(
  ...
    typeof(ProductMongoDbModule),
  ...
 )]
public class ProductHttpApiHostModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
         ...
        // 6、使用不开启默认事务（支持单节点MonogDB）
        Configure&lt;AbpUnitOfWorkDefaultOptions&gt;(options =&gt;
        {
            options.TransactionBehavior = UnitOfWorkTransactionBehavior.Disabled;
        });
        ...
    }
    ....
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>appsettings.json</code> 添加 ProductMonogDB 连接字符串</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ConnectionStrings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Server=localhost;Port=3306;Database=Product;Uid=root;Pwd=myPassword;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//&quot;Product&quot;: &quot;Server=(LocalDb)\\\\MSSQLLocalDB;Database=Product_Module;Trusted_Connection=True;TrustServerCertificate=True&quot;</span>
    <span class="token property">&quot;Product&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Server=loclahost;Port=3306;Database=LKN.ProductService;Uid=root;Pwd=skceDsB010993.;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ProductMonogDB&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mongodb://localhost:27017&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用ef和mongodb时-只能二选择一个" tabindex="-1"><a class="header-anchor" href="#使用ef和mongodb时-只能二选择一个" aria-hidden="true">#</a> 使用EF和MongoDB时，只能二选择一个</h2><p>需要注意的是<code>LKN.Product.MongoDB </code> 的 <code>ProductMongoDbContext</code>类，上下文对象的远程连接地址</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[ConnectionStringName(ProductDbProperties.ConnectionMonogDBStringName)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在切换MongoDB存储，只需要在 <code>LKN.Product.Application</code> 模块中ProductAppService类，切换MongoDB上下文对象即可。</p><p><img src="`+u+'" alt="Alt text"></p><p>打开浏览器添加商品</p><p><img src="'+v+'" alt="Alt text"></p><p>结果添加成功</p><p><img src="'+b+`" alt="Alt text"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>1、MongoDB和EFCore可以共存一个项目中。</p><p>IProductAbpRepository<br> ProductMongoDBRepository</p><p>多微服务关联查询<br> 1、用户微服务查询订单微服务，查询支付微服务<br> 添加订单： 数据存储一条，MongoDB存储一份<br> 添加支付： 数据存储一条，MongoDB存储一份</p><p>用户微服务查询<br> 1、查询MongoDB 可以提升性能</p><p>但是：事务问题<br> 分布事务可以解决，但是增加复杂度</p><p>数据异构 Cannal 来实现</p><h2 id="任务调度hangfire" tabindex="-1"><a class="header-anchor" href="#任务调度hangfire" aria-hidden="true">#</a> 任务调度Hangfire</h2><p>1、添加订单业务场景，消耗库存<br> 订单：时间期限，一般默认为30分钟。<br> 回收库存，给其他订单使用。</p><p>如何自动回收库存，所以，Hangfire</p><h2 id="如何落地hnagfire" tabindex="-1"><a class="header-anchor" href="#如何落地hnagfire" aria-hidden="true">#</a> 如何落地Hnagfire</h2><p>步骤<br> 1、准备OrderService微服务<br> 2、使用abp 的<code>Volo.Abp.BackgroundWorkers.Hangfire</code></p><p>实现： 1、 在订单微服务应用层上引用<code>Volo.Abp.BackgroundWorkers.Hangfire</code><code>c# &lt;PackageReference Include=&quot;Volo.Abp.BackgroundWorkers.Hangfire&quot; Version=&quot;7.3.0&quot; /&gt; </code> 2、OrderApplicationModule 添加 依赖注入 <code>typeof(AbpBackgroundWorkersHangfireModule),</code></p><pre><code>\`\`\` c#
[DependsOn(
typeof(OrderDomainModule),
typeof(OrderApplicationContractsModule),
typeof(AbpDddApplicationModule),
typeof(AbpPermissionManagementApplicationModule),
   typeof(AbpBackgroundWorkersHangfireModule),
typeof(AbpAutoMapperModule)
)]
</code></pre><p>public class OrderApplicationModule : AbpModule { .... }</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
任务添加\`OrderStackWorker\` 并实现\`HangfireBackgroundWorkerBase\`

\`\`\` c# 

   /// &lt;summary&gt;
   /// 自动回收库存任务
   /// &lt;/summary&gt;
   public class OrderStackWorker : HangfireBackgroundWorkerBase
   {
       public ILogger&lt;OrderStackWorker&gt; _logger { get; set; } //efcore
       public OrderStackWorker()
       {
           RecurringJobId = nameof(OrderStackWorker);
           CronExpression = Cron.MinuteInterval(1);
       }
       public override Task DoWorkAsync(CancellationToken cancellationToken = default)
       {
           _logger.LogInformation(&quot;Executed OrderStackWorker。。。。&quot;);
           //1、遍历订单表
           //2、判断订单是否过期。根据时间字段
           //3、过期的订单，直接回复库存

           return Task.CompletedTask;
       }
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hanfire-与-schedulemaster-的区别是什么" tabindex="-1"><a class="header-anchor" href="#hanfire-与-schedulemaster-的区别是什么" aria-hidden="true">#</a> Hanfire 与 ScheduleMaster 的区别是什么</h2><p>Hanfire 是单体<br> ScheduleMaster 是分布式任务调度中心</p>`,47);function M(f,h){const i=r("router-link");return l(),a("div",null,[p,e("nav",g,[e("ul",null,[e("li",null,[d(i,{to:"#目录"},{default:s(()=>[n("目录")]),_:1})]),e("li",null,[d(i,{to:"#微服务大数据库mongodb、任务调度hangfire"},{default:s(()=>[n("微服务大数据库MongoDB、任务调度Hangfire")]),_:1})]),e("li",null,[d(i,{to:"#大数据数据库mongodb"},{default:s(()=>[n("大数据数据库MongoDB")]),_:1})]),e("li",null,[d(i,{to:"#使用ef和mongodb时-只能二选择一个"},{default:s(()=>[n("使用EF和MongoDB时，只能二选择一个")]),_:1})]),e("li",null,[d(i,{to:"#总结"},{default:s(()=>[n("总结")]),_:1})]),e("li",null,[d(i,{to:"#任务调度hangfire"},{default:s(()=>[n("任务调度Hangfire")]),_:1})]),e("li",null,[d(i,{to:"#如何落地hnagfire"},{default:s(()=>[n("如何落地Hnagfire")]),_:1})]),e("li",null,[d(i,{to:"#hanfire-与-schedulemaster-的区别是什么"},{default:s(()=>[n("Hanfire 与 ScheduleMaster 的区别是什么")]),_:1})])])]),P])}const B=o(m,[["render",M],["__file","abpmicroservices0012.html.vue"]]);export{B as default};
