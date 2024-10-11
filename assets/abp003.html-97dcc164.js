import{_ as t,r,o as l,c as a,a as e,b as d,w as s,d as i,e as u}from"./app-c1c3c937.js";const c={},o=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),v={class:"table-of-contents"},p=u(`<h1 id="核心项目-电商项目落地实战" tabindex="-1"><a class="header-anchor" href="#核心项目-电商项目落地实战" aria-hidden="true">#</a> 核心项目-电商项目落地实战</h1><h2 id="电商项目分析" tabindex="-1"><a class="header-anchor" href="#电商项目分析" aria-hidden="true">#</a> 电商项目分析</h2><p>什么是电商项目</p><h2 id="电商项目落地" tabindex="-1"><a class="header-anchor" href="#电商项目落地" aria-hidden="true">#</a> 电商项目落地</h2><p>条件</p><p>1、.NET7</p><p>2、DDD</p><p>3、ABP vNext 7.3</p><p>4、ABP CLI</p><p>5、Mysql 8.0</p><p>步骤</p><h3 id="如何创建项目" tabindex="-1"><a class="header-anchor" href="#如何创建项目" aria-hidden="true">#</a> 如何创建项目</h3><p>1、先通过ABP CLI创建电商webapi项目</p><p>abp new LKN.EBusiness --dbms mysql -u none -o D:\\work\\net-project\\ABP专题\\3、核心组件-DDD\\LKN.EBusiness</p><h3 id="如何引入项目" tabindex="-1"><a class="header-anchor" href="#如何引入项目" aria-hidden="true">#</a> 如何引入项目</h3><p>条件</p><p>1、vs2022</p><p>步骤</p><p>2、然后使用VS2022引入电商项目</p><h3 id="如何创建实体" tabindex="-1"><a class="header-anchor" href="#如何创建实体" aria-hidden="true">#</a> 如何创建实体</h3><p>条件</p><p>1、LKN.EBusiness.Domain</p><p>步骤</p><p>3、然后再领域层创建实体</p><p>商品实体，订单实体，用户实体，支付实体</p><h3 id="如何创建数据库和表" tabindex="-1"><a class="header-anchor" href="#如何创建数据库和表" aria-hidden="true">#</a> 如何创建数据库和表</h3><p>条件</p><p>1、LKN.EBusiness.EntityFrameworkCore</p><p>2、LKN.EBusiness.DbMigrator</p><p>步骤</p><p>4、然后在仓储层创建LKN.EBusiness.EntityFrameworkCore中EBusinessDbContext类中增加</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>   public class EBusinessDbContext : 
        AbpDbContext&lt;EBusinessDbContext&gt;,
        IIdentityDbContext,
        ITenantManagementDbContext
    {
        /* Add DbSet properties for your Aggregate Roots / Entities here. */
        // 1、商品实体
        public DbSet&lt;Product&gt; Products { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、然后在LKN.EBusiness.DbMigrator中appsettings.json中修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;ConnectionStrings&quot;: {
    &quot;Default&quot;: &quot;Server=localhost;Port=3306;Database=EBusiness;Uid=root;Pwd=root;&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、然后启动LKN.EBusiness.DbMigrator</p><p>vs2022直接启动</p><h3 id="如何添加商品种子数据" tabindex="-1"><a class="header-anchor" href="#如何添加商品种子数据" aria-hidden="true">#</a> 如何添加商品种子数据</h3><p>条件</p><p>1、IDataSeedContributor</p><p>2、LKN.EBusiness.DbMigrator</p><p>步骤</p><p>1、先创建种子数据类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   // &lt;summary&gt;
    /// 商品数据迁移
    /// &lt;/summary&gt;
    public class ProductDataSeederContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository&lt;Product, Guid&gt; _productRepository;
   public ProductDataSeederContributor(IRepository&lt;Product, Guid&gt; productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        if (await _productRepository.GetCountAsync() &lt;= 0)
        {
            await _productRepository.InsertAsync(
                new Product
                {
                    ProductTitle=&quot;iphone12&quot;,
                    ProductPrice=12,
                    ProductVirtualprice=12,
                    ProductSold=1,
                    ProductStatus=&quot;1&quot;,
                    ProductStock=1,
                    ProductDescription=&quot;手机非常好&quot;,
                    ProductSort=1,
                    ProductUrl=&quot;23232313&quot;
                },
                autoSave: true
            );

            await _productRepository.InsertAsync(
                 new Product
                 {
                     ProductTitle = &quot;iphone13&quot;,
                     ProductPrice = 24,
                     ProductVirtualprice = 24,
                     ProductSold = 1,
                     ProductStatus = &quot;1&quot;,
                     ProductStock = 1,
                     ProductDescription = &quot;手机非常好&quot;,
                     ProductSort = 1,
                     ProductUrl = &quot;23232313&quot;
                 },
                autoSave: true
            );
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后再次启动LKN.EBusiness.DbMigrator项目，数据添加到项目中</p><p>vs2022直接启动</p><h3 id="如何查询商品数据" tabindex="-1"><a class="header-anchor" href="#如何查询商品数据" aria-hidden="true">#</a> 如何查询商品数据</h3><p>条件</p><p>1、LKN.EBusiness.Domain</p><p>2、LKN.EBusiness.EntityFrameworkCore</p><p>步骤</p><p>1、在LKN.EBusiness.Domain创建IProductRepository接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;summary&gt;
    /// 商品仓储
    /// &lt;/summary&gt;
    public interface IProductRepository 
    {
        IEnumerable&lt;Product&gt; GetProducts();
        Product GetProductById(Guid id);
        void Create(Product Product);
        void Update(Product Product);
        void Delete(Product Product);
        bool ProductExists(Guid id);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后再LKN.EBusiness.EntityFrameworkCore实现IProductRepository接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   /// &lt;summary&gt;
    /// 商品仓储实现
    /// &lt;/summary&gt;
    [Dependency(ServiceLifetime.Transient)]
    public class ProductRepository : IProductRepository
    {
        public EBusinessDbContext _eBusinessDbContext;
        public ProductRepository(EBusinessDbContext eBusinessDbContext)
        {
            this._eBusinessDbContext = eBusinessDbContext;
        }
        public void Create(Product Product)
        {
            _eBusinessDbContext.Products.Add(Product);
            _eBusinessDbContext.SaveChanges();
        }
    public void Delete(Product Product)
    {
        _eBusinessDbContext.Products.Remove(Product);
        _eBusinessDbContext.SaveChanges();
    }

    public Product GetProductById(Guid id)
    {
        return _eBusinessDbContext.Products.Find(id);
    }

    public IEnumerable&lt;Product&gt; GetProducts()
    {
        return _eBusinessDbContext.Products.ToList();
    }

    public void Update(Product Product)
    {
        _eBusinessDbContext.Products.Update(Product);
        _eBusinessDbContext.SaveChanges();
    }
    public bool ProductExists(Guid id)
    {
        return _eBusinessDbContext.Products.Any(e =&gt; e.Id == id);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何从ui界面中存取数据" tabindex="-1"><a class="header-anchor" href="#如何从ui界面中存取数据" aria-hidden="true">#</a> 如何从UI界面中存取数据</h3><p>条件</p><p>1、LKN.EBusiness.Application.Contracts</p><p>2、LKN.EBusiness.Application</p><p>步骤</p><p>1、先在LKN.EBusiness.Application.Contracts创建商品IProductService</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;summary&gt;
    /// 商品服务
    /// &lt;/summary&gt;
    public interface IProductService
    {
        IEnumerable&lt;ProductDto&gt; GetProducts();
        ProductDto GetProductById(Guid id);
        void Create(CreateProductDto createProductDto);
        void Update(UpdateProductDto updateProductDto);
        void Delete(DeleteProductDto deleteProductDto);
        bool ProductExists(Guid id);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后在LKN.EBusiness.Application.Contracts中创建增删改查的Dto</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CreateProductDto:创建商品Dto

DeleteProductDto:删除商品Dto

UpdateProductDto:更新商品Dto

ProductDto:查询商品Dto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后在LKN.EBusiness.Application中创建IProductService实现类ProductService</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// 商品服务实现
    /// &lt;/summary&gt;
    [Dependency(ServiceLifetime.Transient)]
    public class ProductService : IProductService
    {
        public readonly IProductRepository _productRepository;
   public ProductService(IProductRepository ProductRepository)
    {
        this._productRepository = ProductRepository;
    }

    public void Create(CreateProductDto createProductDto)
    {
        // 1、对象映射

        // 2、实体和Dto之间赋值
        Product product = new Product();
        product.ProductTitle = createProductDto.ProductTitle;
        _productRepository.Create(product);
    }

    public void Delete(DeleteProductDto deleteProductDto)
    {
        // 2、实体和Dto之间赋值
        Product product = new Product();
        product.ProductTitle = deleteProductDto.ProductTitle;
        _productRepository.Delete(product);
    }

    public ProductDto GetProductById(Guid id)
    {
        Product product = _productRepository.GetProductById(id);
        // 2、AutoMapper自动映射实体
        var configuration = new MapperConfiguration(cfg =&gt;
        {
            cfg.CreateMap&lt;Product, ProductDto&gt;();
        });

        IMapper mapper = configuration.CreateMapper();

        ProductDto productDto = mapper.Map&lt;Product, ProductDto&gt;(product);
        return productDto;
    }

    public IEnumerable&lt;ProductDto&gt; GetProducts()
    {
        // 1、数据库查询数据
        IEnumerable&lt;Product&gt; products = _productRepository.GetProducts();
        // 2、AutoMapper自动映射实体
        var configuration = new MapperConfiguration(cfg =&gt;
        {
            cfg.CreateMap&lt;Product, ProductDto&gt;();
        });

        IMapper mapper = configuration.CreateMapper();

        List&lt;ProductDto&gt; productDtos = mapper.Map&lt;IEnumerable&lt;Product&gt;, List&lt;ProductDto&gt;&gt;(products);
        return productDtos;
    }

    public void Update(UpdateProductDto updateProductDto)
    {
        // 2、实体和Dto之间赋值
        Product product = new Product();
        product.ProductTitle = updateProductDto.ProductTitle;
        _productRepository.Update(product);
    }
  public bool ProductExists(Guid id)
    {
        return _productRepository.ProductExists(id);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何接受ui界面请求" tabindex="-1"><a class="header-anchor" href="#如何接受ui界面请求" aria-hidden="true">#</a> 如何接受UI界面请求</h3><p>条件</p><p>1、LKN.EBusiness.HttpApi</p><p>步骤</p><p>1、先在LKN.EBusiness.HttpApi中创建ProductsController控制器</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>   /// &lt;summary&gt;
    /// 商品服务控制器
    /// &lt;/summary&gt;
    [Route(&quot;Products&quot;)]
    [ApiController]
    public class ProductsController : AbpController
    {
        private readonly IProductService _productService;
        public ProductsController(IProductService productService)
       {
        this._productService = productService;
       }

    // GET: api/Products
    [HttpGet]
    public ActionResult&lt;IEnumerable&lt;ProductDto&gt;&gt; GetProducts()
    {
        return _productService.GetProducts().ToList();
    }

    // GET: api/Products/5
    [HttpGet(&quot;{id}&quot;)]
    public ActionResult&lt;ProductDto&gt; GetProduct(Guid id)
    {
        var product = _productService.GetProductById(id);

        if (product == null)
        {
            return NotFound();
        }

        return product;
    }

    // PUT: api/Products/5
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPut(&quot;{id}&quot;)]
    public IActionResult PutProduct(UpdateProductDto updateProduct)
    {
        _productService.Update(updateProduct);

        return NoContent();
    }
    // POST: api/Products
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPost]
    public ActionResult&lt;ProductDto&gt; PostProduct(CreateProductDto createProductDto)
    {
        _productService.Create(createProductDto);
        return CreatedAtAction(&quot;GetProduct&quot;, createProductDto);
    }

    // DELETE: api/Products/5
    [HttpDelete(&quot;{id}&quot;)]
    public ActionResult&lt;ProductDto&gt; DeleteProduct(Guid id)
    {
        /*var product = _productService.GetProductById(id);
        if (product == null)
        {
            return NotFound();
        }

        _productService.Delete(product);*/
        return null;
    }

    private bool ProductExists(Guid id)
    {
        return _productService.ProductExists(id);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后在LKN.EBusiness.HttpApi模块类EBusinessHttpApiModule中引入EBusinessApplicationContractsModule</p><h3 id="如何暴露电商应用" tabindex="-1"><a class="header-anchor" href="#如何暴露电商应用" aria-hidden="true">#</a> 如何暴露电商应用</h3><p>条件</p><p>1、LKN.EBusiness.HttpApi.Host</p><p>步骤</p><p>1、先在LKN.EBusiness.HttpApi.Host引入</p><p>EBusinessHttpApiModule模块</p><p>EBusinessApplicationModule模块</p><p>EBusinessEntityFrameworkCoreModule模块</p><p>2、然后启动LKN.EBusiness.HttpApi.Host</p><p>扩展：如何通过Pazor使用电商应用</p><p>条件</p><p>1、LKN.EBusiness.Web</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>1、目前电商项目落地</p><p>使用了DDD，ABP Module思想落地</p><p>优点：</p><p>1、能够快速落地电商项目</p><p>2、对于其他项目也是能够快速落地</p><p>类似项目：OA，ERP系统，任何系统都可以使用这种思想来落地</p><p>缺陷：</p><p>1、业务代码手写过多，如果领域对象比较多，就会导致开发量增大，</p><p>如何降低开发量？</p><p>如何开发项目</p><p>1、先要认识业务</p><p>2、业务解决的是什么问题</p><p>3、问题是谁的问题(客户)</p><p>4、问题具体化，客户具体化</p><p>最后，开始落地</p><p>对于仓储和应用层优化</p><p>1、使用的是复用思路(行为)的思想</p><p>1、接口和抽象类</p><p>2、泛型</p><p>3、规范的名称</p><p>总结：是对通用行为（方法）的抽象，</p><p>两种抽象方式</p><p>1、实体的抽象。实体描述。商品</p><p>2、方法的抽象。方法描述(取一个共同的名字)</p><h2 id="abp框架优化领域商品实体" tabindex="-1"><a class="header-anchor" href="#abp框架优化领域商品实体" aria-hidden="true">#</a> ABP框架优化领域商品实体</h2><p>条件</p><p>1、LKN.EBusiness.Domain</p><p>2、Volo.Abp.Ddd.Domain</p><h3 id="如何优化商品实体主键" tabindex="-1"><a class="header-anchor" href="#如何优化商品实体主键" aria-hidden="true">#</a> 如何优化商品实体主键</h3><p>条件</p><p>1、IAggregateRoot接口</p><div class="custom-container tip"><p class="custom-container-title">步骤</p><p>1、在LKN.EBusiness.Domain项目中Product实体上增加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IAggregateRoot&lt;Guid&gt;接口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、然后把主键作为接口泛型参数</p></div><h3 id="如何优化商品实体审计字段" tabindex="-1"><a class="header-anchor" href="#如何优化商品实体审计字段" aria-hidden="true">#</a> 如何优化商品实体审计字段</h3><p>条件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、IHasCreationTime 定义了以下属性:
CreationTime
2、IMayHaveCreator 定义了以下属性:
CreatorId
3、ICreationAuditedObject 继承 IHasCreationTime 和 IMayHaveCreator, 所以它定义了以下属性:
CreationTime
CreatorId
4、IHasModificationTime 定义了以下属性:
LastModificationTime
5、IModificationAuditedObject 扩展 IHasModificationTime 并添加了 LastModifierId 属性. 所以它定义了以下属性:
LastModificationTime
LastModifierId
6、IAuditedObject 扩展 ICreationAuditedObject 和 IModificationAuditedObject, 所以它定义了以下属性:
CreationTime
CreatorId
LastModificationTime
LastModifierId
7、ISoftDelete (参阅 数据过滤文档) 定义了以下属性:
IsDeleted
8、IHasDeletionTime 扩展 ISoftDelete 并添加了 DeletionTime 属性. 所以它定义了以下属性:
IsDeleted
DeletionTime
9、IDeletionAuditedObject 扩展 IHasDeletionTime 并添加了 DeleterId 属性. 所以它定义了以下属性:
IsDeleted
DeletionTime
DeleterId
10、IFullAuditedObject 继承 IAuditedObject 和 IDeletionAuditedObject, 所以它定义了以下属性:
CreationTime
CreatorId
LastModificationTime
LastModifierId
IsDeleted
DeletionTime
DeleterId
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何优化商品实体扩展字段" tabindex="-1"><a class="header-anchor" href="#如何优化商品实体扩展字段" aria-hidden="true">#</a> 如何优化商品实体扩展字段</h3><p>条件</p><p>1、IHasExtraProperties</p><p>2、LKN.EBusiness.DbMigrator</p><p>步骤</p><p>1、在LKN.EBusiness.Domain项目中Product实体上增加</p><p>IHasExtraProperties接口</p><p>2、然后执行LKN.EBusiness.DbMigrator项目</p><h3 id="如何优化同商品实体全部属性" tabindex="-1"><a class="header-anchor" href="#如何优化同商品实体全部属性" aria-hidden="true">#</a> 如何优化同商品实体全部属性</h3><p>条件</p><p>1、FullAuditedAggregateRoot</p><p>2、LKN.EBusiness.DbMigrator</p><p>步骤</p><p>1、先在LKN.EBusiness.Domain项目中Product实体上增加</p><p>FullAuditedAggregateRoot接口</p><p>2、然后启动LKN.EBusiness.DbMigrator项目</p><h3 id="扩展-如何优化其他实体呢" tabindex="-1"><a class="header-anchor" href="#扩展-如何优化其他实体呢" aria-hidden="true">#</a> 扩展：如何优化其他实体呢</h3><p>条件</p><p>1、FullAuditedEntity</p><p>步骤</p><p>1、同以上操作</p><h2 id="abp框架优化领域商品仓储" tabindex="-1"><a class="header-anchor" href="#abp框架优化领域商品仓储" aria-hidden="true">#</a> ABP框架优化领域商品仓储</h2><p>条件</p><p>1、LKN.EBusiness.Domain</p><p>2、LKN.EBusiness.EntityFrameworkCore</p><p>3、Volo.Abp.Ddd.Domain</p><h3 id="如何优化商品仓储接口" tabindex="-1"><a class="header-anchor" href="#如何优化商品仓储接口" aria-hidden="true">#</a> 如何优化商品仓储接口</h3><p>条件</p><p>1、IRepository&lt;Product, Guid&gt;</p><p>步骤</p><p>1、先在LKN.EBusiness.Domain中IProductRepository接口上引入</p><p>IRepository&lt;Product, Guid&gt;接口</p><h3 id="如何优化商品仓储实现" tabindex="-1"><a class="header-anchor" href="#如何优化商品仓储实现" aria-hidden="true">#</a> 如何优化商品仓储实现</h3><p>条件</p><p>1、EfCoreRepository实现类</p><p>步骤</p><p>1、先在LKN.EBusiness.EntityFrameworkCore中ProductRepository接口上引入</p><p>EfCoreRepository类</p><h2 id="abp框架优化领域商品服务" tabindex="-1"><a class="header-anchor" href="#abp框架优化领域商品服务" aria-hidden="true">#</a> ABP框架优化领域商品服务</h2><p>条件</p><p>1、LKN.EBusiness.Application.Contracts</p><p>2、LKN.EBusiness.Application</p><h3 id="如何优化商品服务接口" tabindex="-1"><a class="header-anchor" href="#如何优化商品服务接口" aria-hidden="true">#</a> 如何优化商品服务接口</h3><p>条件</p><p>1、ICrudAppService</p><p>步骤</p><p>1、先在LKN.EBusiness.Application.Contracts中IProductService接口上实现</p><p>ICrudAppService接口</p><h3 id="如何优化商品服务实现" tabindex="-1"><a class="header-anchor" href="#如何优化商品服务实现" aria-hidden="true">#</a> 如何优化商品服务实现</h3><p>条件</p><p>1、ProductService</p><p>步骤</p><p>1、先在LKN.EBusiness.Application接口上实现ProductService</p><p>EBusinessAppService</p><p>然后启动项目</p><h2 id="abp框架优化商品展示层" tabindex="-1"><a class="header-anchor" href="#abp框架优化商品展示层" aria-hidden="true">#</a> ABP框架优化商品展示层</h2><p>条件</p><p>1、LKN.EBusiness.Application</p><p>2、ApplicationService</p><p>步骤</p><p>1、现在LKN.EBusiness.Application的任何服务上增加ApplicationService实现</p><h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h2><p>1、电商项目落地</p><p>2、如何通过ABP框架优化电商项目</p><p>下次：项目中很多组件如何使用</p>`,185);function b(m,P){const n=r("router-link");return l(),a("div",null,[o,e("nav",v,[e("ul",null,[e("li",null,[d(n,{to:"#目录"},{default:s(()=>[i("目录")]),_:1})]),e("li",null,[d(n,{to:"#电商项目分析"},{default:s(()=>[i("电商项目分析")]),_:1})]),e("li",null,[d(n,{to:"#电商项目落地"},{default:s(()=>[i("电商项目落地")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#如何创建项目"},{default:s(()=>[i("如何创建项目")]),_:1})]),e("li",null,[d(n,{to:"#如何引入项目"},{default:s(()=>[i("如何引入项目")]),_:1})]),e("li",null,[d(n,{to:"#如何创建实体"},{default:s(()=>[i("如何创建实体")]),_:1})]),e("li",null,[d(n,{to:"#如何创建数据库和表"},{default:s(()=>[i("如何创建数据库和表")]),_:1})]),e("li",null,[d(n,{to:"#如何添加商品种子数据"},{default:s(()=>[i("如何添加商品种子数据")]),_:1})]),e("li",null,[d(n,{to:"#如何查询商品数据"},{default:s(()=>[i("如何查询商品数据")]),_:1})]),e("li",null,[d(n,{to:"#如何从ui界面中存取数据"},{default:s(()=>[i("如何从UI界面中存取数据")]),_:1})]),e("li",null,[d(n,{to:"#如何接受ui界面请求"},{default:s(()=>[i("如何接受UI界面请求")]),_:1})]),e("li",null,[d(n,{to:"#如何暴露电商应用"},{default:s(()=>[i("如何暴露电商应用")]),_:1})]),e("li",null,[d(n,{to:"#总结"},{default:s(()=>[i("总结")]),_:1})])])]),e("li",null,[d(n,{to:"#abp框架优化领域商品实体"},{default:s(()=>[i("ABP框架优化领域商品实体")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#如何优化商品实体主键"},{default:s(()=>[i("如何优化商品实体主键")]),_:1})]),e("li",null,[d(n,{to:"#如何优化商品实体审计字段"},{default:s(()=>[i("如何优化商品实体审计字段")]),_:1})]),e("li",null,[d(n,{to:"#如何优化商品实体扩展字段"},{default:s(()=>[i("如何优化商品实体扩展字段")]),_:1})]),e("li",null,[d(n,{to:"#如何优化同商品实体全部属性"},{default:s(()=>[i("如何优化同商品实体全部属性")]),_:1})]),e("li",null,[d(n,{to:"#扩展-如何优化其他实体呢"},{default:s(()=>[i("扩展：如何优化其他实体呢")]),_:1})])])]),e("li",null,[d(n,{to:"#abp框架优化领域商品仓储"},{default:s(()=>[i("ABP框架优化领域商品仓储")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#如何优化商品仓储接口"},{default:s(()=>[i("如何优化商品仓储接口")]),_:1})]),e("li",null,[d(n,{to:"#如何优化商品仓储实现"},{default:s(()=>[i("如何优化商品仓储实现")]),_:1})])])]),e("li",null,[d(n,{to:"#abp框架优化领域商品服务"},{default:s(()=>[i("ABP框架优化领域商品服务")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#如何优化商品服务接口"},{default:s(()=>[i("如何优化商品服务接口")]),_:1})]),e("li",null,[d(n,{to:"#如何优化商品服务实现"},{default:s(()=>[i("如何优化商品服务实现")]),_:1})])])]),e("li",null,[d(n,{to:"#abp框架优化商品展示层"},{default:s(()=>[i("ABP框架优化商品展示层")]),_:1})]),e("li",null,[d(n,{to:"#总结-1"},{default:s(()=>[i("总结")]),_:1})])])]),p])}const D=t(c,[["render",b],["__file","abp003.html.vue"]]);export{D as default};
