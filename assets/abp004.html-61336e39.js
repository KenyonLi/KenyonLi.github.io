import{_ as d,r as s,o as a,c as u,a as e,b as n,w as l,d as i,e as c}from"./app-c1c3c937.js";const o="/images/abp/abp4_0001image.png",m="/images/abp/abp4_0002image.png",v="/images/abp/abp4_0004image.png",b="/images/abp/abp4_0005image.png",g="/images/abp/abp4_0006image.png",p={},h=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),_={class:"table-of-contents"},y=e("h2",{id:"核心项目-电商项目落地实战-二-领域层优化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#核心项目-电商项目落地实战-二-领域层优化","aria-hidden":"true"},"#"),i(" 核心项目-电商项目落地实战（二）-领域层优化")],-1),P=e("h3",{id:"电商项目领域",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#电商项目领域","aria-hidden":"true"},"#"),i(" 电商项目领域")],-1),k={href:"https://github.com/abpframework/abp",target:"_blank",rel:"noopener noreferrer"},x=c('<blockquote><ul><li>1 LKN.EBusiness.Domain</li><li>2 LKN.EBusiness.EntityFrameworkCore</li></ul></blockquote><h3 id="针对产品领域的仓储进行优化" tabindex="-1"><a class="header-anchor" href="#针对产品领域的仓储进行优化" aria-hidden="true">#</a> 针对产品领域的仓储进行优化</h3><blockquote><p>使用ABP提供定义好的仓储接口，实现添加、删除、更新、查询 功能。接口 <strong>IRepository&lt;实体,主键类型&gt;</strong></p></blockquote><hr><blockquote><p>在abp 源码中： <img src="'+o+'" alt="Alt text"><img src="'+m+'" alt="Alt text"></p></blockquote><h3 id="entityframeworkcore-实现类" tabindex="-1"><a class="header-anchor" href="#entityframeworkcore-实现类" aria-hidden="true">#</a> EntityFrameworkCore 实现类</h3><blockquote><p>使用ABP提供实现好的 <strong>EfCoreRepository&lt;DbContex类，实体，主键类型&gt;</strong></p></blockquote><hr><blockquote><p>在abp 源码中： <img src="'+v+`" alt="Alt text"></p></blockquote><h3 id="案例部分代码" tabindex="-1"><a class="header-anchor" href="#案例部分代码" aria-hidden="true">#</a> 案例部分代码</h3><blockquote><p>LKN.EBusiness.Domain 实现代码</p></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> public interface IProductAbpRepository: IRepository&lt;Product,Guid&gt;
    {
        IEnumerable&lt;Product&gt; GetProductAndImages();
        IEnumerable&lt;Product&gt; GetProductByName(string productName);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>LKN.EBusiness.EntityFrameworkCore 实现代码</p></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>  /// &lt;summary&gt;
    /// 商品仓储实现
    /// &lt;/summary&gt;
    [Dependency(ServiceLifetime.Transient)]
    public class ProductAbpRepository : EfCoreRepository&lt;EBusinessDbContext, Product, Guid&gt;, IProductAbpRepository
    {
        public ProductAbpRepository(IDbContextProvider&lt;EBusinessDbContext&gt; dbContextProvider) : base(dbContextProvider)
        {
        }

       public IEnumerable&lt;Product&gt; GetProductAndImages()
        {
            DbSet&lt;Product&gt; products = GetDbSetAsync().Result;
            return products;
        }

        /// &lt;summary&gt;
        /// 根据商品名称 查询
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;productName&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        /// &lt;exception cref=&quot;NotImplementedException&quot;&gt;&lt;/exception&gt;
        public IEnumerable&lt;Product&gt; GetProductByName(string productName)
        {
            //1、第一种实现
            //  EBusinessDbContext db = GetDbContextAsync().Result;
            DbSet&lt;Product&gt; products = base.GetDbSetAsync().Result;
            return products.Where(p=&gt;p.ProductTitle ==productName);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>聚合根据 prouct实体 ，继承abp框架提供的实体接口 <strong>FullAuditedAggregateRoot&lt;主键类型&gt;</strong></p></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    /// &lt;summary&gt;
    /// 聚合根 来管理所有的聚合对象
    /// &lt;/summary&gt;
    public class Product:FullAuditedAggregateRoot&lt;Guid&gt;
    {
        //public Guid Id { get; set; }         
        /// &lt;summary&gt;
        /// 商品编码
        /// &lt;/summary&gt;
        public string? ProductCode { get; set; }
        /// &lt;summary&gt;
        /// 商品主图
        /// &lt;/summary&gt;
        public string? ProductUrl { get; set; }
        /// &lt;summary&gt;
        /// 商品标题
        /// &lt;/summary&gt;
        public string? ProductTitle { get; set; }
        /// &lt;summary&gt;
        /// 图文描述
        /// &lt;/summary&gt;
        public string? ProductDescription { get; set; }

        /// &lt;summary&gt;
        /// 商品虚拟价格
        /// &lt;/summary&gt;
        public decimal ProductVirtualprice { get; set; }
        /// &lt;summary&gt;
        /// 价格
        /// &lt;/summary&gt;
        public decimal ProductPrice { get; set; }
        /// &lt;summary&gt;
        /// 商品序号
        /// &lt;/summary&gt;
        public int ProductSort { get; set; }
        /// &lt;summary&gt;
        //已售件数
        /// &lt;/summary&gt;
        public int ProductSold { get; set; }

        /// &lt;summary&gt;
        /// 商品库存
        /// &lt;/summary&gt;
        public int ProductStock { get; set; }

        /// &lt;summary&gt;
        /// 商品状态
        /// &lt;/summary&gt;
        public string? ProductStatus { get; set; }


        public virtual ICollection&lt;ProductImage&gt; ProductImages { get; set; }


        public Product() { 
        
           ProductImages = new HashSet&lt;ProductImage&gt;();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>abp源码 <img src="`+b+'" alt="Alt text"></p></blockquote><blockquote><p>abp框架把常用的字段属性提供出来，如 <strong>IsDeleted</strong> 、<strong>DeletionTime</strong>等字段，当EF初始表时，被继承的实体表中就会生成这几个字段。 如：mysql 数据库 <img src="'+g+'" alt="Alt text"></p></blockquote>',18);function f(C,q){const t=s("router-link"),r=s("ExternalLinkIcon");return a(),u("div",null,[h,e("nav",_,[e("ul",null,[e("li",null,[n(t,{to:"#目录"},{default:l(()=>[i("目录")]),_:1})]),e("li",null,[n(t,{to:"#核心项目-电商项目落地实战-二-领域层优化"},{default:l(()=>[i("核心项目-电商项目落地实战（二）-领域层优化")]),_:1}),e("ul",null,[e("li",null,[n(t,{to:"#电商项目领域"},{default:l(()=>[i("电商项目领域")]),_:1})]),e("li",null,[n(t,{to:"#针对产品领域的仓储进行优化"},{default:l(()=>[i("针对产品领域的仓储进行优化")]),_:1})]),e("li",null,[n(t,{to:"#entityframeworkcore-实现类"},{default:l(()=>[i("EntityFrameworkCore 实现类")]),_:1})]),e("li",null,[n(t,{to:"#案例部分代码"},{default:l(()=>[i("案例部分代码")]),_:1})])])])])]),y,P,e("p",null,[e("a",k,[i("abp开源源码"),n(r)])]),x])}const I=d(p,[["render",f],["__file","abp004.html.vue"]]);export{I as default};
