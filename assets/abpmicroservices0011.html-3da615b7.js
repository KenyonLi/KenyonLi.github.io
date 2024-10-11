import{_ as l,r as a,o as r,c,a as e,b as d,w as s,d as i,e as t}from"./app-c1c3c937.js";const u="/images/abpmicroservices/micro011/abpmicroservices0011_0001image.png",v="/images/abpmicroservices/micro011/abpmicroservices0011_0002image.png",o="/images/abpmicroservices/micro011/abpmicroservices0011_0003image.png",m="/images/abpmicroservices/micro011/abpmicroservices0011_0004image.png",b="/images/abpmicroservices/micro011/abpmicroservices0011_0005image.png",p="/images/abpmicroservices/micro011/abpmicroservices0011_0006image.png",g="/images/abpmicroservices/micro011/abpmicroservices0011_0007image.png",h={},f=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),A={class:"table-of-contents"},_=t(`<h2 id="微服务分布式文件系统、分布式缓存、分布式锁" tabindex="-1"><a class="header-anchor" href="#微服务分布式文件系统、分布式缓存、分布式锁" aria-hidden="true">#</a> 微服务分布式文件系统、分布式缓存、分布式锁</h2><h2 id="分布式文件系统" tabindex="-1"><a class="header-anchor" href="#分布式文件系统" aria-hidden="true">#</a> 分布式文件系统</h2><p>应用场景分析：为什么要使用文件系统呢？如果我们之前实现的电商微服务系统，它是由订单微服务、商品微服务、用户微服务、支付微服务等构成。<br> 如：商品微服务添加商品图片时，如果每个微服务上传到自己的本地上的话，假如100台微服务话，文件图片就会分散到各个微服务中，不方便维护管理 因此我们需要统一收集并且管理图片，就需要部署一个文件系统。采用Minio技术来实现</p><h3 id="落地实现集成各个微服务中对文件的管理" tabindex="-1"><a class="header-anchor" href="#落地实现集成各个微服务中对文件的管理" aria-hidden="true">#</a> 落地实现集成各个微服务中对文件的管理</h3><p>步骤<br> 1、部署环境 启动Minio</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>ABP<span class="token punctuation">\\</span>devEvn<span class="token punctuation">\\</span>minio<span class="token operator">&gt;</span>minio.exe server .<span class="token punctuation">\\</span>data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、商品微服务集成接口</p><p>在moduls模块中，找到应用层、api接口层添加上传图片接口与实现。</p><p>2.1 应用接口层定义上传图片接口 <code>LKN.Product.Application.Contracts</code></p><p><code>IProductAppService</code> 定义图片上传接口</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    /// &lt;summary&gt;
    /// 商品服务
    /// &lt;/summary&gt;
    public interface IProductAppService:ICrudAppService&lt;ProductDto,Guid,PagedAndSortedResultRequestDto,CreateProductDto,UpdateProductDto&gt;
    {
        ...
        public  Task SaveOrderPictrueAsync(IFormFile formFile);
        ...
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2 应用层实现 <code>IProductAppService</code>上传图片的接口方法，</p><p>先引用<code>Minio</code> 包 ，采用 nuget <code>Volo.Abp.BlobStoring.Minio</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>   //项目引用
    &lt;PackageReference Include=&quot;Volo.Abp.BlobStoring.Minio&quot; Version=&quot;7.3.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ProductApplicationModule 添加依赖<code> typeof(AbpBlobStoringMinioModule)</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[DependsOn(
     ....
    typeof(AbpBlobStoringMinioModule)
    )]
public class ProductApplicationModule : AbpModule
{
    ....
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> /// &lt;summary&gt;
    /// 禁止 ABP 默认的生成的API接口，创建、添加、查询
    /// &lt;/summary&gt;
    [RemoteService(IsEnabled = false)]
    [Dependency(ServiceLifetime.Singleton)]
    public class ProductAppService : CrudAppService&lt;
        Product,
        ProductDto, 
        Guid,
        PagedAndSortedResultRequestDto,
        CreateProductDto, 
        UpdateProductDto&gt;, IProductAppService,
        ICapSubscribe
    {
        ....
      public async Task SaveOrderPictrueAsync(IFormFile formFile)
        {
            // 1、保存商品图片到Minio
            await _blobContainer.SaveAsync(formFile.FileName, formFile.OpenReadStream(), true); // true就是覆盖
            // 1、删除
            // 2、查询 stream  oss 系统
            //_blobContainer.SaveAsync
        }
        ....
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、<code>LKN.Product.HttpApi.Host</code> 微服务站点配置 <code>Minio</code>连接信息</p><p><code>ProductHttpApiHostModule</code> 中添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>  public override void ConfigureServices(ServiceConfigurationContext context)
    {
        ...
    // 4、使用Minio
        Configure&lt;AbpBlobStoringOptions&gt;(options =&gt;
        {
            options.Containers.ConfigureDefault(container =&gt;
            {
                container.UseMinio(minio =&gt;
                {
                    minio.EndPoint = &quot;127.0.0.1:9000&quot;;
                    minio.AccessKey = &quot;minioadmin&quot;;
                    minio.SecretKey = &quot;minioadmin&quot;;
                    minio.BucketName = &quot;productservice&quot;; // 存储文件数据库
                    minio.CreateBucketIfNotExists = true; // 桶不存在，就创建
                });
            });
        });
        .....
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、启动微服务打开浏览器调用接口</p><p><img src="`+u+'" alt="Alt text"></p><p>5、在Minio浏览器管理端查看结果</p><p><img src="'+v+`" alt="Alt text"></p><h2 id="分布缓存" tabindex="-1"><a class="header-anchor" href="#分布缓存" aria-hidden="true">#</a> 分布缓存</h2><p>我们采用abp 架构封装Redis，创建项目时，会默认添加<code>Volo.Abp.Caching.StackExchangeRedis</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>&lt;PackageReference Include=&quot;Volo.Abp.Caching.StackExchangeRedis&quot; Version=&quot;7.3.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="为什么要使用分布式缓存呢" tabindex="-1"><a class="header-anchor" href="#为什么要使用分布式缓存呢" aria-hidden="true">#</a> 为什么要使用分布式缓存呢？</h3><p>当然是提高性能，主要应用场景为一般查询并发请求数据时采用。 如：查询商品-&gt;商品微服务--&gt;商品数据库<br> 1、50个商品并发查询。商品数据库<br> 2、200个商品并发查询。商品微服务<br> 50个商品并发。 200个查询商品并发。</p><h4 id="_1、内存缓存。本地缓存" tabindex="-1"><a class="header-anchor" href="#_1、内存缓存。本地缓存" aria-hidden="true">#</a> 1、内存缓存。本地缓存</h4><p>查询商品--商品微服务服务（缓存）--商品数据库</p><p>如：400个查询商品并发</p><p><img src="`+o+'" alt="Alt text"></p><p>存在问题：缓存命中率下降</p><p>1、2个请求1次缓存 1/2 = 50%<br> 2、2次请求0次缓存 0/2 =50%</p><p>下降 意味着查询性能下降<br> 原因：走了数据库，性能会下降。</p><h4 id="_2、解决本地缓存存在的问题-我们方案分布式缓存" tabindex="-1"><a class="header-anchor" href="#_2、解决本地缓存存在的问题-我们方案分布式缓存" aria-hidden="true">#</a> 2、解决本地缓存存在的问题，我们方案分布式缓存</h4><p><img src="'+m+`" alt="Alt text"></p><p>两次请求。1/2 =50%</p><p>上升缓存命中率，就是提升性能。 所以我们在微服务中采用分布式缓存</p><h2 id="如何落地" tabindex="-1"><a class="header-anchor" href="#如何落地" aria-hidden="true">#</a> 如何落地</h2><p>以商品微服务为例，在查询商品信息时，把储存到缓存中。 步骤：<br> 1、部署环境 <code>redis</code><br> 2、<code> LKN.Product.HttpApi</code>模块集成 ,引用 <code>Volo.Abp.Caching.StackExchangeRedis</code><br> 2、<code>模块配置 </code> 实现:<br> 1、启动redis服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   redis-server.exe 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在<code> LKN.Product.HttpApi.Host</code> 商品微服务中,<code>ProductHttpApiModule</code>中添加依赖注册 <code>typeof(AbpCachingStackExchangeRedisModule),</code>特性</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>[DependsOn(
 ...
   typeof(AbpCachingStackExchangeRedisModule),
 ...
  )]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、在<code>LKN.Product.HttpApi.Host</code>网站中找到 <code>ProductHttpApiHostModule</code> 类配置 <code>redis</code>信息 ,并且在<code>appsettings.json</code>设置redis 连接参数</p><p>ProductHttpApiHostModule 添加 redis</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> public override void ConfigureServices(ServiceConfigurationContext context)
  {
      ...
// 5、使用Redis
      Configure&lt;AbpDistributedCacheOptions&gt;(options =&gt;
      {
          options.KeyPrefix = &quot;ProductService:&quot;;
      });
      ...
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appsettings.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
...
  <span class="token property">&quot;Redis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Configuration&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:6379&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
...
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、<code>LKN.Product.HttpApi</code>模块下找到<code>ProductController.cs</code>类，在 <code>GetAsync</code> 接口使用redis 缓存商品信息实例 ProductsController</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    [RemoteService]
    [Route(&quot;api/ProductService/Product&quot;)]
    public class ProductsController : ProductController, IProductAppService
    {
        private readonly IProductAppService _ProductAppService;
        public IDistributedCache&lt;ProductDto&gt; _distributedCache { set; get; } // 使用redis
        public ProductsController(IProductAppService ProductAppService)
        {
            _ProductAppService = ProductAppService;
        }
        /// &lt;summary&gt;
        /// 查询商品API
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;{id}&quot;)]
        public async Task&lt;ProductDto&gt; GetAsync(Guid id)
        {
            ProductDto productDto = await _distributedCache.GetAsync(id.ToString());
            if (productDto == null)
            {
                productDto = await _ProductAppService.GetAsync(id);
                await _distributedCache.SetAsync(id.ToString(), productDto, new DistributedCacheEntryOptions()
                {
                    AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(60) // 设置过期时间
                });
            }
            return productDto;
        }
        ....
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看效果：</p><p><img src="`+b+'" alt="Alt text"></p><p>缓存成功！！</p><h3 id="redis中数据是否需要设置过期时间" tabindex="-1"><a class="header-anchor" href="#redis中数据是否需要设置过期时间" aria-hidden="true">#</a> Redis中数据是否需要设置过期时间？</h3><p>1、必须有过期时间<br> 如果不设置过期时间，数据发生变化，数据就会出现了污染。</p><h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h2><h3 id="电商微服务项目中-为什么要使用分布式锁" tabindex="-1"><a class="header-anchor" href="#电商微服务项目中-为什么要使用分布式锁" aria-hidden="true">#</a> 电商微服务项目中，为什么要使用分布式锁？</h3><p>应用场景：扣减库存的业务 创建订单时，就会更新商品。</p><p>更新商品微服务库。</p><p><img src="'+p+'" alt="Alt text"></p><p>这种情况就会出现”超买问题“<br> 1、商品卖出超量 假如：库存10件，卖出了20件。</p><p>20个扣减库存并发<br> 1、服务实例同时查询数据库。</p><h3 id="如何防止超卖" tabindex="-1"><a class="header-anchor" href="#如何防止超卖" aria-hidden="true">#</a> 如何防止超卖？</h3><p>1、10件商品，必须10件。</p><p><img src="'+g+`" alt="Alt text"></p><p>使用分布式锁场景，就可以解决超卖问题。</p><h3 id="如何落地分布式锁" tabindex="-1"><a class="header-anchor" href="#如何落地分布式锁" aria-hidden="true">#</a> 如何落地分布式锁？</h3><p>1、<code>RedisLock</code> 类的实现</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
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
           connectionMultiplexer = ConnectionMultiplexer.Connect(&quot;localhost:6379&quot;);

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

           /*while (true)
           {
               bool flag = database.LockTake(&quot;redis-lock&quot;, Thread.CurrentThread.ManagedThreadId, TimeSpan.FromSeconds(10));
               // 1、true ：成功：false 失败
               // 如果加锁失败。
               if (flag)
               {
                   break;
               }

               // 1、怎么防止死循环
               Thread.Sleep(10);
           }*/
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、<code>LKN.Product.HttpApi</code> 模块中，在ProductsConstroller的更新商品接口，添加分布式锁</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
       /// 
       /// &lt;/summary&gt;
       /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
       /// &lt;param name=&quot;input&quot;&gt;&lt;/param&gt;
       /// &lt;returns&gt;&lt;/returns&gt;
       [HttpPut]
       public async Task&lt;ProductDto&gt; UpdateAsync(Guid id, UpdateProductDto input)
       {
           //throw new Exception(&quot;扣减库存失败&quot;);
           #region 1、传统
           {
               /* ProductDto productDto = await _ProductAppService.UpdateAsync(id, input);*/
           }
           #endregion

           #region 2、分布式锁(多实例)
           {
               RedisLock redisLock = new RedisLock();
               redisLock.Lock();
               ProductDto productDto = await _ProductAppService.UpdateAsync(id, input);
               redisLock.UnLock();
               return productDto;
           }
           #endregion

           #region 2、线程锁(单实例)
           {
               /*lock ()
               {
                   ProductDto productDto = await _ProductAppService.UpdateAsync(id, input);
               }
               
               return productDto;*/
           }
           #endregion
       }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis实现分布式锁原因" tabindex="-1"><a class="header-anchor" href="#redis实现分布式锁原因" aria-hidden="true">#</a> redis实现分布式锁原因？</h3><p>1、redis单线程特性 分布式事务和分布式锁区别？<br> 1、分布式事务：不同微服务数据一致。订单微服务商品微服务 2、分布式锁：同一个服务，多个实例（集群）。</p><h3 id="内存和缓存的区别是什么" tabindex="-1"><a class="header-anchor" href="#内存和缓存的区别是什么" aria-hidden="true">#</a> 内存和缓存的区别是什么？</h3><p>磁盘上有内存<br> 缓存（应用），用内存（技术）<br> 缓存<br> 1、时间限制：只能多久</p><p>redis:会消耗内存<br> 内存有限情况，存储海量数据采用<code>SSDB</code></p>`,78);function P(x,S){const n=a("router-link");return r(),c("div",null,[f,e("nav",A,[e("ul",null,[e("li",null,[d(n,{to:"#目录"},{default:s(()=>[i("目录")]),_:1})]),e("li",null,[d(n,{to:"#微服务分布式文件系统、分布式缓存、分布式锁"},{default:s(()=>[i("微服务分布式文件系统、分布式缓存、分布式锁")]),_:1})]),e("li",null,[d(n,{to:"#分布式文件系统"},{default:s(()=>[i("分布式文件系统")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#落地实现集成各个微服务中对文件的管理"},{default:s(()=>[i("落地实现集成各个微服务中对文件的管理")]),_:1})])])]),e("li",null,[d(n,{to:"#分布缓存"},{default:s(()=>[i("分布缓存")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#为什么要使用分布式缓存呢"},{default:s(()=>[i("为什么要使用分布式缓存呢？")]),_:1})])])]),e("li",null,[d(n,{to:"#如何落地"},{default:s(()=>[i("如何落地")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#redis中数据是否需要设置过期时间"},{default:s(()=>[i("Redis中数据是否需要设置过期时间？")]),_:1})])])]),e("li",null,[d(n,{to:"#分布式锁"},{default:s(()=>[i("分布式锁")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#电商微服务项目中-为什么要使用分布式锁"},{default:s(()=>[i("电商微服务项目中，为什么要使用分布式锁？")]),_:1})]),e("li",null,[d(n,{to:"#如何防止超卖"},{default:s(()=>[i("如何防止超卖？")]),_:1})]),e("li",null,[d(n,{to:"#如何落地分布式锁"},{default:s(()=>[i("如何落地分布式锁？")]),_:1})]),e("li",null,[d(n,{to:"#redis实现分布式锁原因"},{default:s(()=>[i("redis实现分布式锁原因？")]),_:1})]),e("li",null,[d(n,{to:"#内存和缓存的区别是什么"},{default:s(()=>[i("内存和缓存的区别是什么？")]),_:1})])])])])]),_])}const C=l(h,[["render",P],["__file","abpmicroservices0011.html.vue"]]);export{C as default};
