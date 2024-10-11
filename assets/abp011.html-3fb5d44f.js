import{_ as d,r as l,o as t,c as r,a as e,b as a,w as s,d as n,e as p}from"./app-c1c3c937.js";const u="/images/abp/abp011/image-20220210145756825.png",c="/images/abp/abp011/image-20220210143407852.png",o="/images/abp/abp011/image-20220210143740259.png",v="/images/abp/abp011/image-20220210143958034.png",b="/images/abp/abp011/image-20220210144115965.png",m="/images/abp/abp011/image-20220210144227045.png",h="/images/abp/abp011/image-20220210150753394.png",g="/images/abp/abp011/image-20220210161145681.png",f="/images/abp/abp011/image-20220210160713486.png",M="/images/abp/abp011/image-20220210160904567.png",x="/images/abp/abp011/image-20220210161444513.png",_="/images/abp/abp011/image-20220210161626012.png",A={},T=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),C={class:"table-of-contents"},D=p(`<h2 id="核心组件-用户组件-多租户模块" tabindex="-1"><a class="header-anchor" href="#核心组件-用户组件-多租户模块" aria-hidden="true">#</a> 核心组件-用户组件-多租户模块</h2><hr><p>1、多租户概念</p><p>2、多租户应用</p><p>3、多租户原理</p><p>4、多租户Web应用</p><p>5、多租户Client应用</p><p>6、多租户扩展</p><p>如何在项目当中使用租户</p><p>前提：用户必须是租户的前提下登录</p><p>1、先管理租户。增删改查</p><p>2、然后切换租户，默认存储到cookie</p><p>3、然后从cookie中取租户</p><p>4、最后取出租户Id存储到表</p><p>多租户,三步骤</p><p>1、租户管理</p><p>2、租户切换</p><p>3、租户解析</p><p>总结：不要被扩展了。</p><h2 id="什么是租户" tabindex="-1"><a class="header-anchor" href="#什么是租户" aria-hidden="true">#</a> 什么是租户</h2><p>客户租用系统，例如：公司租用阿里云服务器。</p><h2 id="什么是多租户" tabindex="-1"><a class="header-anchor" href="#什么是多租户" aria-hidden="true">#</a> 什么是多租户</h2><p>多个客户租用系统，例如：多个公司租用阿里云服务器</p><h2 id="什么是多租户模块" tabindex="-1"><a class="header-anchor" href="#什么是多租户模块" aria-hidden="true">#</a> 什么是多租户模块</h2><p>对租户实现增删改查。就是多租户管理模块</p><h2 id="为什么使用多租户" tabindex="-1"><a class="header-anchor" href="#为什么使用多租户" aria-hidden="true">#</a> 为什么使用多租户</h2><p>目的：为了将系统设计为Saas系统</p><h2 id="电商项目中如何集成多租户模块" tabindex="-1"><a class="header-anchor" href="#电商项目中如何集成多租户模块" aria-hidden="true">#</a> 电商项目中如何集成多租户模块</h2><h3 id="多租户模块源码" tabindex="-1"><a class="header-anchor" href="#多租户模块源码" aria-hidden="true">#</a> 多租户模块源码</h3><p>下载地址：</p><p>https://github.com/abpframework/abp/tree/dev/modules/TenantManagement</p><p>源码介绍：</p><h3 id="lkn-ebusiness-domain-shared如何集成多租户模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain-shared如何集成多租户模块" aria-hidden="true">#</a> LKN.EBusiness.Domain.Shared如何集成多租户模块</h3><p>条件</p><p>1、Volo.Abp.TenantManagement.Domain.Shared</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.TenantManagement.Domain.Shared

2、然后在EBusinessDomainSharedModule文件上增加

[DependsOn(
        typeof(AbpTenantManagementDomainSharedModule)
        )]
 public class EBusinessDomainSharedModule : AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-domain如何集成多租户模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain如何集成多租户模块" aria-hidden="true">#</a> LKN.EBusiness.Domain如何集成多租户模块</h3><p>条件</p><p>1、Volo.Abp.TenantManagement.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.TenantManagement.Domain

2、然后在EBusinessDomainModule文件上增加

[DependsOn(
        typeof(AbpTenantManagementDomainModule)
        )]
    public class EBusinessDomainSharedModule : AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-entityframeworkcore如何集成多租户模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-entityframeworkcore如何集成多租户模块" aria-hidden="true">#</a> LKN.EBusiness.EntityFrameworkCore如何集成多租户模块</h3><p>条件</p><p>1、Volo.Abp.TenantManagement.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.TenantManagement.EntityFrameworkCore

2、然后在EBusinessEntityFrameworkCoreModule文件上增加

[DependsOn(
        typeof(AbpTenantManagementEntityFrameworkCoreModule)
        )]
    public class EBusinessEntityFrameworkCoreModule: AbpModule

 {}
 3、然后在EBusinessDbContext类上实现ITenantManagementDbContext上下文
 public DbSet&lt;TenantGrant&gt; TenantGrants { get; }
 
 4、然后在EBusinessDbContext类上添加
 [ReplaceDbContext(typeof(ITenantManagementDbContext))]
    [ConnectionStringName(&quot;Default&quot;)]
    public class EBusinessDbContext : 
        AbpDbContext&lt;EBusinessDbContext&gt;,
        ITenantManagementDbContext
    {}
    
 5、然后在OnModelCreating方法中添加
 protected override void OnModelCreating(ModelBuilder builder)
 {
 	base.OnModelCreating(builder);

    /* Include modules to your migration db context */
    .....          
    builder.ConfigureTenantManagement();
    .....
 }
 
 7、最后启动LKN.EBusiness.DbMigrator迁移项目，生成租户表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="image-20220210145756825"></p><h3 id="lkn-ebusiness-application-contracts如何集成多租户模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application-contracts如何集成多租户模块" aria-hidden="true">#</a> LKN.EBusiness.Application.Contracts如何集成多租户模块</h3><p>条件</p><p>1、Volo.Abp.TenantManagement.Application.Contracts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.TenantManagement.Application.Contracts

2、然后在EBusinessApplicationContractsModule文件上增加

[DependsOn(
        typeof(AbpTenantManagementApplicationContractsModule)
        )]
 public class EBusinessApplicationContractsModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-application如何集成多租户模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application如何集成多租户模块" aria-hidden="true">#</a> LKN.EBusiness.Application如何集成多租户模块</h3><p>条件</p><p>1、Volo.Abp.TenantManagement.Application</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在项目中通过Nuget下载

Volo.Abp.TenantManagement.Application.Contracts

2、然后在EBusinessApplicationModule文件上增加

[DependsOn(
        typeof(AbpTenantManagementApplicationModule)
        )]
 public class EBusinessApplicationContractsModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-httpapi如何集成多租户模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-httpapi如何集成多租户模块" aria-hidden="true">#</a> LKN.EBusiness.HttpApi如何集成多租户模块</h3><p>条件</p><p>1、Volo.Abp.TenantManagement.HttpApi</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>步骤
1、先在项目中通过Nuget下载

Volo.Abp.TenantManagement.Application.Contracts

2、然后在EBusinessHttpApiModule文件上增加

[DependsOn(
        typeof(AbpTenantManagementHttpApiModule)
 )]
 public class EBusinessHttpApiModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中使用多租户" tabindex="-1"><a class="header-anchor" href="#电商项目中使用多租户" aria-hidden="true">#</a> 电商项目中使用多租户</h2><h3 id="商品业务场景" tabindex="-1"><a class="header-anchor" href="#商品业务场景" aria-hidden="true">#</a> 商品业务场景</h3><p>电商项目中的商品领域中的商品模型，对应的商品表是用来存储商品数据，</p><p>如果遇到多租户的情况，商品表中存储的商品无法区分是哪个租户的商品？</p><p>答案：适用多租户Id来区分</p><h3 id="如何使用租户id" tabindex="-1"><a class="header-anchor" href="#如何使用租户id" aria-hidden="true">#</a> 如何使用租户id？</h3><p>条件</p><p>1、LKN.EBusiness.Domain</p><p>2、Volo.Abp.MultiTenancy</p><p>3、LKN.EBusiness.DbMigrator</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在LKN.EBusiness.Domain模块中通过Nuget引入
     Volo.Abp.MultiTenancy
2、然后在LKN.EBusiness.Domain模块中Product类上添加IMultiTenant接口
    public class Product : FullAuditedAggregateRoot&lt;Guid&gt;, IMultiTenant
    {
        public Guid? TenantId { get; protected set; } // 租户Id
        public string ProductCode { set; get; }    //商品编码
        public string ProductUrl { set; get; }         // 商品主图
        public string ProductTitle { set; get; }       //商品标题
        public string ProductDescription { set; get; }     // 图文描述
        public decimal ProductVirtualprice { set; get; } //商品虚拟价格
        public decimal ProductPrice { set; get; }       //价格
        public int ProductSort { set; get; }    //商品序号
        public int ProductSold { set; get; }        //已售件数
        public int ProductStock { set; get; }       //商品库存
        public string ProductStatus { set; get; } // 商品状态
        ....
     }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后运行LKN.EBusiness.DbMigrator项目生成商品多租户表，如下图所示</p><p><img src="`+c+'" alt="image-20220210143407852"></p><p>4、然后运行项目</p><h3 id="如何使用租户" tabindex="-1"><a class="header-anchor" href="#如何使用租户" aria-hidden="true">#</a> 如何使用租户？</h3><h4 id="租户创建" tabindex="-1"><a class="header-anchor" href="#租户创建" aria-hidden="true">#</a> 租户创建</h4><p>条件</p><p>1、Tenant(租户)接口</p><p><img src="'+o+'" alt="image-20220210143740259"></p><p>步骤</p><p>1、先使用post接口添加租户信息</p><p><img src="'+v+'" alt="image-20220210143958034"></p><h4 id="租户转换-切换-存储" tabindex="-1"><a class="header-anchor" href="#租户转换-切换-存储" aria-hidden="true">#</a> 租户转换（切换）存储</h4><p>条件</p><p>1、TenantSwitch接口</p><p><img src="'+b+'" alt="image-20220210144115965"></p><p>步骤</p><p>1、先在post租户转换转换租户，存储到cookie</p><p><img src="'+m+`" alt="image-20220210144227045"></p><h4 id="租户取值" tabindex="-1"><a class="header-anchor" href="#租户取值" aria-hidden="true">#</a> 租户取值</h4><p>条件</p><p>1、LKN.EBusiness.Application</p><p>2、ICurrentTenant</p><p>步骤</p><p>1、先在LKN.EBusiness.Application模块中ProductService类中创建商品使用ICurrentTenant获取租户信息</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class ProductService : EBusinessAppService, IProductService
{
    public void Create(CreateProductDto createProductDto)
    {
        var tenantId = CurrentTenant.Id;
        ....
    }
}   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="商品应用租户" tabindex="-1"><a class="header-anchor" href="#商品应用租户" aria-hidden="true">#</a> 商品应用租户</h4><p>条件</p><p>1、ProductService</p><p>步骤</p><p>1、在ProductService类中创建商品Create方法中使用租户Id创建商品</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class ProductService : EBusinessAppService, IProductService
{
    public void Create(CreateProductDto createProductDto)
    {
        var tenantId = CurrentTenant.Id;
       // 1、AutoMapper自动映射实体
            var configuration = new MapperConfiguration(cfg =&gt;
            {
                cfg.CreateMap&lt;CreateProductDto, Product&gt;();
                cfg.CreateMap&lt;ProductImageCreateDto, ProductImage&gt;();
            });

            IMapper mapper = configuration.CreateMapper();
            Product product = new Product(GuidGenerator.Create(), tenantId);
            product = mapper.Map&lt;CreateProductDto, Product&gt;(createProductDto, product);

            // 1、先查询商品
            /*Product product1 = _productRepository.GetProductByName(createProductDto.ProductTitle);
            if (product1 != null)
            {
                throw new Exception(&quot;商品名称不能重复&quot;);
            }*/
            // 1、规则判断
            _ProductManager.HasProductTitle(createProductDto.ProductTitle);

            // 2、创建商品
            //_productRepository.Create(product);

            // 2.1 abp框架提供仓储实现
            //  _productRepository.InsertAsync(product);

            // 2.2 abp框架提供增删改查
            _ProductAbpRepository.InsertAsync(product).Wait();
    }
}   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中租户原理" tabindex="-1"><a class="header-anchor" href="#电商项目中租户原理" aria-hidden="true">#</a> 电商项目中租户原理</h2><h3 id="多租户管理原理" tabindex="-1"><a class="header-anchor" href="#多租户管理原理" aria-hidden="true">#</a> 多租户管理原理</h3><p>条件</p><p>1、Volo.Abp.MultiTenancy模块</p><p>核心类：</p><p>1、TenantDefinition</p><p>2、TenantDefinitionProvider</p><p>3、TenantDefinitionManager</p><p>步骤</p><p>1、TenantDefinition执行定义</p><p>2、TenantDefinitionProvider提供多租户。</p><p>3、TenantDefinitionManager 核心执行</p><h3 id="多租户转换存储原理" tabindex="-1"><a class="header-anchor" href="#多租户转换存储原理" aria-hidden="true">#</a> 多租户转换存储原理</h3><p>条件</p><p>1、LKN.EBusiness.Application模块</p><p>2、Volo.Abp.TenantManagement.Domain模块</p><p>核心类：</p><p>1、TenantSwitchAppService</p><p>2、TenantManager</p><p>3、TenantManagementProvider</p><p>4、ITenantGrantRepository</p><p>步骤</p><p>1、TenantSwitchAppService负责入口</p><p>2、TenantManager负责管理转换</p><p>3、TenantManagementProvider负责转换</p><p>4、ITenantGrantRepository负责租户取值</p><h3 id="多租户取值原理" tabindex="-1"><a class="header-anchor" href="#多租户取值原理" aria-hidden="true">#</a> 多租户取值原理</h3><p>条件</p><p>1、Volo.Abp.MultiTenancy模块</p><p>2、Volo.Abp.AspNetCore.MultiTenancy模块</p><p>核心类：</p><p>1、MultiTenancyMiddleware</p><p>2、TenantConfigurationProvider</p><p>3、TenantResolver</p><p>4、ITenantResolveContributor</p><p>步骤</p><p>1、MultiTenancyMiddleware负责从请求中获取</p><p>2、TenantConfigurationProvider负责提供多租户所有信息发</p><p>3、TenantResolver负责统一解析租户</p><p>4、ITenantResolveContributor负责具体解析租户</p><p>扩展需求：现在把租户Id存储到redis。</p><h3 id="多租户efcore原理" tabindex="-1"><a class="header-anchor" href="#多租户efcore原理" aria-hidden="true">#</a> 多租户EFCore原理</h3><p>条件</p><p>1、Volo.Abp.EntityFrameworkCore模块</p><p>核心类</p><p>1、AbpDbContext</p><p>步骤</p><p>1、AbpDbContext负责从实体中过滤租户IMultiTenant接口中TenantId租户Id</p><p><img src="`+h+`" alt="image-20220210150753394"></p><h2 id="电商项目中web使用多租户" tabindex="-1"><a class="header-anchor" href="#电商项目中web使用多租户" aria-hidden="true">#</a> 电商项目中Web使用多租户</h2><p>条件</p><p>1、LKN.EBusiness.Web</p><p>2、Volo.Abp.TenantManagement.Web</p><p>步骤</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>1、先在LKN.EBusiness.Web模块中通过Nuget引入

Volo.Abp.TenantManagement.Web

2、然后在LKN.EBusiness.Web模块中EBusinessWebModule类上添加
[DependsOn(
    ....
        typeof(AbpTenantManagementWebModule),
     ....
        )]
    public class EBusinessWebModule : AbpModule
    {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web多租户原理" tabindex="-1"><a class="header-anchor" href="#web多租户原理" aria-hidden="true">#</a> Web多租户原理</h3><p>条件</p><p>1、Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy模块</p><p>核心类</p><p>1、AbpTenantController</p><p>2、tenant-switch.js</p><p>3、TenantSwitchModal.cshtml</p><p>步骤</p><p>1、AbpTenantController负责接口查询</p><p>2、TenantSwitchModal.cshtml负责租户切换界面</p><p>3、tenant-switch.js负责租户切换操作</p><h2 id="电商项目中client使用多租户" tabindex="-1"><a class="header-anchor" href="#电商项目中client使用多租户" aria-hidden="true">#</a> 电商项目中Client使用多租户</h2><p>条件</p><p>1、Volo.Abp.TenantManagement.HttpApi.Client</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>步骤
1、先在项目中通过Nuget下载
LKN.EBusiness.HttpApi.Client

2、然后在LKN.OA文件上增加
 [DependsOn(
	typeof(AbpTenantManagementHttpApiClientModule)
 )]
 public class OAModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中使用租户数据库" tabindex="-1"><a class="header-anchor" href="#电商项目中使用租户数据库" aria-hidden="true">#</a> 电商项目中使用租户数据库</h2><h3 id="租户互相影响业务场景" tabindex="-1"><a class="header-anchor" href="#租户互相影响业务场景" aria-hidden="true">#</a> 租户互相影响业务场景</h3><p>所有租户数据在一张表中，如果数据量过大，互相之间会产生影响，导致出现性能问题。</p><p>如何解决性能问题？答案：租户数据库</p><h3 id="如何使用租户数据库" tabindex="-1"><a class="header-anchor" href="#如何使用租户数据库" aria-hidden="true">#</a> 如何使用租户数据库</h3><h4 id="创建租户数据库" tabindex="-1"><a class="header-anchor" href="#创建租户数据库" aria-hidden="true">#</a> 创建租户数据库</h4><p>条件</p><p>1、ydt_ebusiness_14.sql脚本</p><p>步骤</p><p>1、使用数据库脚本创建ydt_ebusiness_14数据库</p><p><img src="`+g+'" alt="image-20220210161145681"></p><h4 id="添加租户数据库字符串" tabindex="-1"><a class="header-anchor" href="#添加租户数据库字符串" aria-hidden="true">#</a> 添加租户数据库字符串</h4><p>条件</p><p>1、TenantSwitch接口</p><p><img src="'+f+'" alt="image-20220210160713486"></p><p>步骤</p><p>1、先使用Put接口添加租户数据库字符串</p><p>Server=localhost;Port=3306;Database=LKN_EBusiness_14;Uid=root;Pwd=root;</p><p><img src="'+M+'" alt="image-20220210160904567"></p><h4 id="租户切换" tabindex="-1"><a class="header-anchor" href="#租户切换" aria-hidden="true">#</a> 租户切换</h4><p>操作同上。</p><h4 id="添加商品" tabindex="-1"><a class="header-anchor" href="#添加商品" aria-hidden="true">#</a> 添加商品</h4><p>条件</p><p>1、Products接口</p><p><img src="'+x+'" alt="image-20220210161444513"></p><p>步骤</p><p>1、使用post接口添加商品到数据库ydt_ebusiness_14</p><p><img src="'+_+'" alt="image-20220210161626012"></p><h3 id="租户数据库切换原理" tabindex="-1"><a class="header-anchor" href="#租户数据库切换原理" aria-hidden="true">#</a> 租户数据库切换原理</h3><p>条件</p><p>1、Volo.Abp.EntityFrameworkCore模块</p><p>2、Volo.Abp.MultiTenancy模块</p><p>核心类</p><p>1、DbContextOptionsFactory</p><p>2、MultiTenantConnectionStringResolver</p><p>步骤</p><p>1、DbContextOptionsFactory负责动态获取数据库连接</p><p>2、MultiTenantConnectionStringResolver负责解析租户数据库字符串</p><h4 id="扩展1-不同模块不同数据库" tabindex="-1"><a class="header-anchor" href="#扩展1-不同模块不同数据库" aria-hidden="true">#</a> 扩展1：不同模块不同数据库</h4><h4 id="扩展2-租户不同模块不同数据库" tabindex="-1"><a class="header-anchor" href="#扩展2-租户不同模块不同数据库" aria-hidden="true">#</a> 扩展2：租户不同模块不同数据库</h4><h4 id="扩展3-自定义数据库解析" tabindex="-1"><a class="header-anchor" href="#扩展3-自定义数据库解析" aria-hidden="true">#</a> 扩展3：自定义数据库解析</h4>',211);function E(P,B){const i=l("router-link");return t(),r("div",null,[T,e("nav",C,[e("ul",null,[e("li",null,[a(i,{to:"#目录"},{default:s(()=>[n("目录")]),_:1})]),e("li",null,[a(i,{to:"#核心组件-用户组件-多租户模块"},{default:s(()=>[n("核心组件-用户组件-多租户模块")]),_:1})]),e("li",null,[a(i,{to:"#什么是租户"},{default:s(()=>[n("什么是租户")]),_:1})]),e("li",null,[a(i,{to:"#什么是多租户"},{default:s(()=>[n("什么是多租户")]),_:1})]),e("li",null,[a(i,{to:"#什么是多租户模块"},{default:s(()=>[n("什么是多租户模块")]),_:1})]),e("li",null,[a(i,{to:"#为什么使用多租户"},{default:s(()=>[n("为什么使用多租户")]),_:1})]),e("li",null,[a(i,{to:"#电商项目中如何集成多租户模块"},{default:s(()=>[n("电商项目中如何集成多租户模块")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#多租户模块源码"},{default:s(()=>[n("多租户模块源码")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-domain-shared如何集成多租户模块"},{default:s(()=>[n("LKN.EBusiness.Domain.Shared如何集成多租户模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-domain如何集成多租户模块"},{default:s(()=>[n("LKN.EBusiness.Domain如何集成多租户模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-entityframeworkcore如何集成多租户模块"},{default:s(()=>[n("LKN.EBusiness.EntityFrameworkCore如何集成多租户模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-application-contracts如何集成多租户模块"},{default:s(()=>[n("LKN.EBusiness.Application.Contracts如何集成多租户模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-application如何集成多租户模块"},{default:s(()=>[n("LKN.EBusiness.Application如何集成多租户模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-httpapi如何集成多租户模块"},{default:s(()=>[n("LKN.EBusiness.HttpApi如何集成多租户模块")]),_:1})])])]),e("li",null,[a(i,{to:"#电商项目中使用多租户"},{default:s(()=>[n("电商项目中使用多租户")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#商品业务场景"},{default:s(()=>[n("商品业务场景")]),_:1})]),e("li",null,[a(i,{to:"#如何使用租户id"},{default:s(()=>[n("如何使用租户id？")]),_:1})]),e("li",null,[a(i,{to:"#如何使用租户"},{default:s(()=>[n("如何使用租户？")]),_:1})])])]),e("li",null,[a(i,{to:"#电商项目中租户原理"},{default:s(()=>[n("电商项目中租户原理")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#多租户管理原理"},{default:s(()=>[n("多租户管理原理")]),_:1})]),e("li",null,[a(i,{to:"#多租户转换存储原理"},{default:s(()=>[n("多租户转换存储原理")]),_:1})]),e("li",null,[a(i,{to:"#多租户取值原理"},{default:s(()=>[n("多租户取值原理")]),_:1})]),e("li",null,[a(i,{to:"#多租户efcore原理"},{default:s(()=>[n("多租户EFCore原理")]),_:1})])])]),e("li",null,[a(i,{to:"#电商项目中web使用多租户"},{default:s(()=>[n("电商项目中Web使用多租户")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#web多租户原理"},{default:s(()=>[n("Web多租户原理")]),_:1})])])]),e("li",null,[a(i,{to:"#电商项目中client使用多租户"},{default:s(()=>[n("电商项目中Client使用多租户")]),_:1})]),e("li",null,[a(i,{to:"#电商项目中使用租户数据库"},{default:s(()=>[n("电商项目中使用租户数据库")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#租户互相影响业务场景"},{default:s(()=>[n("租户互相影响业务场景")]),_:1})]),e("li",null,[a(i,{to:"#如何使用租户数据库"},{default:s(()=>[n("如何使用租户数据库")]),_:1})]),e("li",null,[a(i,{to:"#租户数据库切换原理"},{default:s(()=>[n("租户数据库切换原理")]),_:1})])])])])]),D])}const N=d(A,[["render",E],["__file","abp011.html.vue"]]);export{N as default};
