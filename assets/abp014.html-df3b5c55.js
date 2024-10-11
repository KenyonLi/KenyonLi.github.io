import{_ as l,r as d,o as r,c as u,a as e,b as a,w as s,d as n,e as t}from"./app-c1c3c937.js";const c="/images/abp/abp014/image-20220210180751649.png",v="/images/abp/abp014/image-20220210181504745.png",p="/images/abp/abp014/image-20220210181526001.png",o={},b=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),m={class:"table-of-contents"},h=t(`<h2 id="什么是特征" tabindex="-1"><a class="header-anchor" href="#什么是特征" aria-hidden="true">#</a> 什么是特征</h2><p>多个客户租用系统，例如：多个公司租用阿里云服务器</p><h2 id="什么是特征模块" tabindex="-1"><a class="header-anchor" href="#什么是特征模块" aria-hidden="true">#</a> 什么是特征模块</h2><p>对租户实现增删改查。就是特征管理模块</p><h2 id="为什么使用特征" tabindex="-1"><a class="header-anchor" href="#为什么使用特征" aria-hidden="true">#</a> 为什么使用特征</h2><p>目的：为了将系统设计为Saas系统</p><h2 id="电商项目中如何集成特征模块" tabindex="-1"><a class="header-anchor" href="#电商项目中如何集成特征模块" aria-hidden="true">#</a> 电商项目中如何集成特征模块</h2><h3 id="特征模块源码" tabindex="-1"><a class="header-anchor" href="#特征模块源码" aria-hidden="true">#</a> 特征模块源码</h3><p>下载地址：</p><p>https://github.com/abpframework/abp/tree/dev/modules/FeatureManagement</p><p>源码介绍：</p><h3 id="lkn-ebusiness-domain-shared如何集成特征模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain-shared如何集成特征模块" aria-hidden="true">#</a> LKN.EBusiness.Domain.Shared如何集成特征模块</h3><p>条件</p><p>1、Volo.Abp.FeatureManagement.Domain.Shared</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.FeatureManagement.Domain.Shared

2、然后在EBusinessDomainSharedModule文件上增加

[DependsOn(
        typeof(AbpFeatureManagementDomainSharedModule)
        )]
 public class EBusinessDomainSharedModule : AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-domain如何集成特征模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain如何集成特征模块" aria-hidden="true">#</a> LKN.EBusiness.Domain如何集成特征模块</h3><p>条件</p><p>1、Volo.Abp.FeatureManagement.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.FeatureManagement.Domain

2、然后在EBusinessDomainModule文件上增加

[DependsOn(
        typeof(AbpFeatureManagementDomainModule)
        )]
    public class EBusinessDomainSharedModule : AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-entityframeworkcore如何集成特征模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-entityframeworkcore如何集成特征模块" aria-hidden="true">#</a> LKN.EBusiness.EntityFrameworkCore如何集成特征模块</h3><p>条件</p><p>1、Volo.Abp.FeatureManagement.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.FeatureManagement.EntityFrameworkCore

2、然后在EBusinessEntityFrameworkCoreModule文件上增加

[DependsOn(
        typeof(AbpFeatureManagementEntityFrameworkCoreModule)
        )]
    public class EBusinessEntityFrameworkCoreModule: AbpModule

 {}
 3、然后在EBusinessDbContext类上实现IFeatureManagementDbContext上下文
 public DbSet&lt;FeatureGrant&gt; FeatureGrants { get; }
 
 4、然后在EBusinessDbContext类上添加
 [ReplaceDbContext(typeof(IFeatureManagementDbContext))]
    [ConnectionStringName(&quot;Default&quot;)]
    public class EBusinessDbContext : 
        AbpDbContext&lt;EBusinessDbContext&gt;,
        IFeatureManagementDbContext
    {
        .....
    	public DbSet&lt;Feature&gt; Features { get; set; }
        .....
    }
    
 5、然后在OnModelCreating方法中添加
 protected override void OnModelCreating(ModelBuilder builder)
 {
 	base.OnModelCreating(builder);

    /* Include modules to your migration db context */
    .....          
    builder.ConfigureFeatureManagement();
    .....
 }
 
 7、最后启动LKN.EBusiness.DbMigrator迁移项目，生成特征表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="image-20220210180751649"></p><h3 id="lkn-ebusiness-application-contracts如何集成特征模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application-contracts如何集成特征模块" aria-hidden="true">#</a> LKN.EBusiness.Application.Contracts如何集成特征模块</h3><p>条件</p><p>1、Volo.Abp.FeatureManagement.Application.Contracts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.FeatureManagement.Application.Contracts

2、然后在EBusinessApplicationContractsModule文件上增加

[DependsOn(
        typeof(AbpFeatureManagementApplicationContractsModule)
        )]
 public class EBusinessApplicationContractsModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-application如何集成特征模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application如何集成特征模块" aria-hidden="true">#</a> LKN.EBusiness.Application如何集成特征模块</h3><p>条件</p><p>1、Volo.Abp.FeatureManagement.Application</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在项目中通过Nuget下载

Volo.Abp.FeatureManagement.Application.Contracts

2、然后在EBusinessApplicationModule文件上增加

[DependsOn(
        typeof(AbpFeatureManagementApplicationModule)
        )]
 public class EBusinessApplicationContractsModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-httpapi如何集成特征模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-httpapi如何集成特征模块" aria-hidden="true">#</a> LKN.EBusiness.HttpApi如何集成特征模块</h3><p>条件</p><p>1、Volo.Abp.FeatureManagement.HttpApi</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>步骤
1、先在项目中通过Nuget下载

Volo.Abp.FeatureManagement.Application.Contracts

2、然后在EBusinessHttpApiModule文件上增加

[DependsOn(
        typeof(AbpFeatureManagementHttpApiModule)
 )]
 public class EBusinessHttpApiModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中使用特征" tabindex="-1"><a class="header-anchor" href="#电商项目中使用特征" aria-hidden="true">#</a> 电商项目中使用特征</h2><h3 id="订单业务场景" tabindex="-1"><a class="header-anchor" href="#订单业务场景" aria-hidden="true">#</a> 订单业务场景</h3><p>电商项目中下单的时候，需要发送邮件，如果出现了多租户，有些租户不希望发送邮件。</p><p>如何实现不同租户发送邮件呢？</p><p>答案：使用特征</p><h3 id="如何使用特征" tabindex="-1"><a class="header-anchor" href="#如何使用特征" aria-hidden="true">#</a> 如何使用特征？</h3><h4 id="特征定义" tabindex="-1"><a class="header-anchor" href="#特征定义" aria-hidden="true">#</a> 特征定义</h4><p>条件</p><p>1、LKN.EBusiness.Domain</p><p>2、Volo.Abp.Features</p><p>步骤</p><p>1、先在LKN.EBusiness.Domain模块中通过nuget引入</p><p>Volo.Abp.Features</p><p>2、然后在LKN.EBusiness.Domain模块中Features文件夹中创建EBusinessFeatures类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>   public static class EBusinessFeatures
    {
       public const string GroupName = &quot;EBusiness&quot;;

        /// &lt;summary&gt;
        /// 邮件特征
        /// &lt;/summary&gt;
        public static class Orders
        {
            public const string Default = GroupName + &quot;.Orders&quot;;
            public const string IsEmail = Default + &quot;.IsEmail&quot;;
            public const string IsSms = Default + &quot;.IsSms&quot;; // 发送短信特征
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后在LKN.EBusiness.Domain模块中Features文件夹中创建EBusinessFeatureDefinitionProvider类</p><p>实现FeatureDefinitionProvider抽象类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class EBusinessFeatureDefinitionProvider : FeatureDefinitionProvider
    {
        public override void Define(IFeatureDefinitionContext context)
        {
            // 1、特征组
            FeatureGroupDefinition featureGroupDefinition = context.AddGroup(EBusinessFeatures.GroupName);

            // 2、定义邮件特征
            featureGroupDefinition.AddFeature(EBusinessFeatures.Orders.IsEmail,&quot;false&quot;);

            // 3、定义短信特征
            featureGroupDefinition.AddFeature(EBusinessFeatures.Orders.IsSms, &quot;false&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特征管理" tabindex="-1"><a class="header-anchor" href="#特征管理" aria-hidden="true">#</a> 特征管理</h4><p>条件</p><p>1、EBusinessFeatures接口</p><p><img src="`+v+'" alt="image-20220210181504745"></p><p>步骤</p><p>1、先使用PUT接口添加特征到数据库</p><p><img src="'+p+`" alt="image-20220210181526001"></p><h4 id="特征取值" tabindex="-1"><a class="header-anchor" href="#特征取值" aria-hidden="true">#</a> 特征取值</h4><p>条件</p><p>1、LKN.EBusiness.Application</p><p>2、IFeatureChecker</p><p>步骤</p><p>1、先在LKN.EBusiness.Application模块中WxPayAppService类中创建商品使用IFeatureChecker获取特征信息</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class OrderAppService : EBusinessAppService, IPayAppService
{ 
        ....
        ....
        public async Task&lt;OrderDto&gt; CreateAsync(CreateOrderDto input)
        {
            // 1、创建订单
            Order order = new Order(GuidGenerator.Create());
             order = ObjectMapper.Map&lt;CreateOrderDto,Order&gt;(input,order);
            // 1、获取用户信息
           // Claim[] claims = CurrentUser.GetAllClaims();
            order.UserId = CurrentUser.Id.Value;
            // 2、保存订单
            await _OrderRepository.InsertAsync(order);
            
            // 3.1 发送邮件
            string flag = FeatureChecker.GetOrNullAsync(EBusinessFeatures.Orders.IsEmail).Result;
            if (flag.Equals(&quot;true&quot;))
            {
                Console.WriteLine(&quot;发送邮件&quot;);
            }

            // 3.2 发送短信
            string IsSmsflag = FeatureChecker.GetOrNullAsync(EBusinessFeatures.Orders.IsSms).Result;
            if (IsSmsflag.Equals(&quot;true&quot;))
            {
                Console.WriteLine(&quot;发送短信&quot;);
            }

            // 4、返回订单
            return ObjectMapper.Map&lt;Order, OrderDto&gt;(order);
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中特征原理" tabindex="-1"><a class="header-anchor" href="#电商项目中特征原理" aria-hidden="true">#</a> 电商项目中特征原理</h2><h3 id="特征定义原理" tabindex="-1"><a class="header-anchor" href="#特征定义原理" aria-hidden="true">#</a> 特征定义原理</h3><p>条件</p><p>1、Volo.Abp.Features模块</p><p>核心类：</p><p>1、FeatureDefinition</p><p>2、FeatureDefinitionProvider</p><p>3、FeatureDefinitionManager</p><p>步骤</p><p>1、FeatureDefinition执行定义</p><p>2、FeatureDefinitionProvider提供特征。</p><p>3、FeatureDefinitionManager 核心执行</p><h3 id="特征管理原理" tabindex="-1"><a class="header-anchor" href="#特征管理原理" aria-hidden="true">#</a> 特征管理原理</h3><p>条件</p><p>1、LKN.EBusiness.Application模块</p><p>2、Volo.Abp.FeatureManagement.Domain模块</p><p>核心类：</p><p>1、EBusinessFeaturesAppService</p><p>2、FeatureManager</p><p>3、FeatureManagementProvider （默认GlobalFeatureManagementProvider）</p><p>4、FeatureManagementStore</p><p>步骤</p><p>1、EBusinessFeaturesAppService负责接口入口</p><p>2、FeatureManager负责客户端调用</p><p>3、FeatureManagementProvider负责特征扩展</p><p>4、FeatureManagementStore负责特征取值</p><h3 id="特征取值原理" tabindex="-1"><a class="header-anchor" href="#特征取值原理" aria-hidden="true">#</a> 特征取值原理</h3><p>条件</p><p>1、Volo.Abp.Features模块</p><p>核心类：</p><p>1、FeatureChecker</p><p>2、FeatureValueProviderManager</p><p>3、FeatureValueProvider（默认：TenantFeatureValueProvider）</p><p>4、FeatureDefinitionManager</p><p>步骤</p><p>1、FeatureChecker负责客户端取值</p><p>2、FeatureValueProviderManager负责提供特征扩展管理</p><p>3、FeatureValueProvider负责获取特征值</p><p>4、FeatureDefinitionManager负责特征定义管理</p><h2 id="电商项目中web使用特征" tabindex="-1"><a class="header-anchor" href="#电商项目中web使用特征" aria-hidden="true">#</a> 电商项目中Web使用特征</h2><p>条件</p><p>1、LKN.EBusiness.Web</p><p>2、Volo.Abp.FeatureManagement.Web</p><p>步骤</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>1、先在LKN.EBusiness.Web模块中通过Nuget引入

Volo.Abp.FeatureManagement.Web

2、然后在LKN.EBusiness.Web模块中EBusinessWebModule类上添加
[DependsOn(
    ....
        typeof(AbpFeatureManagementWebModule),
     ....
        )]
    public class EBusinessWebModule : AbpModule
    {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web特征原理" tabindex="-1"><a class="header-anchor" href="#web特征原理" aria-hidden="true">#</a> Web特征原理</h3><p>条件</p><p>1、Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy模块</p><p>核心类</p><p>1、Index.cshtml</p><p>2、Index.js</p><p>步骤</p><p>1、Index.cshtml负责特征UI展示</p><p>2、Index.js负责或者特征数据</p><h2 id="电商项目中client使用特征" tabindex="-1"><a class="header-anchor" href="#电商项目中client使用特征" aria-hidden="true">#</a> 电商项目中Client使用特征</h2><p>条件</p><p>1、Volo.Abp.FeatureManagement.HttpApi.Client</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>步骤
1、先在项目中通过Nuget下载
LKN.EBusiness.HttpApi.Client

2、然后在LKN.OA文件上增加
 [DependsOn(
	typeof(AbpFeatureManagementHttpApiClientModule)
 )]
 public class OAModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展1-电商项目中多租户特征" tabindex="-1"><a class="header-anchor" href="#扩展1-电商项目中多租户特征" aria-hidden="true">#</a> 扩展1：电商项目中多租户特征</h2><h2 id="扩展2-电商项目中自定义特征" tabindex="-1"><a class="header-anchor" href="#扩展2-电商项目中自定义特征" aria-hidden="true">#</a> 扩展2：电商项目中自定义特征</h2>`,128);function g(f,F){const i=d("router-link");return r(),u("div",null,[b,e("nav",m,[e("ul",null,[e("li",null,[a(i,{to:"#目录"},{default:s(()=>[n("目录")]),_:1})]),e("li",null,[a(i,{to:"#什么是特征"},{default:s(()=>[n("什么是特征")]),_:1})]),e("li",null,[a(i,{to:"#什么是特征模块"},{default:s(()=>[n("什么是特征模块")]),_:1})]),e("li",null,[a(i,{to:"#为什么使用特征"},{default:s(()=>[n("为什么使用特征")]),_:1})]),e("li",null,[a(i,{to:"#电商项目中如何集成特征模块"},{default:s(()=>[n("电商项目中如何集成特征模块")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#特征模块源码"},{default:s(()=>[n("特征模块源码")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-domain-shared如何集成特征模块"},{default:s(()=>[n("LKN.EBusiness.Domain.Shared如何集成特征模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-domain如何集成特征模块"},{default:s(()=>[n("LKN.EBusiness.Domain如何集成特征模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-entityframeworkcore如何集成特征模块"},{default:s(()=>[n("LKN.EBusiness.EntityFrameworkCore如何集成特征模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-application-contracts如何集成特征模块"},{default:s(()=>[n("LKN.EBusiness.Application.Contracts如何集成特征模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-application如何集成特征模块"},{default:s(()=>[n("LKN.EBusiness.Application如何集成特征模块")]),_:1})]),e("li",null,[a(i,{to:"#lkn-ebusiness-httpapi如何集成特征模块"},{default:s(()=>[n("LKN.EBusiness.HttpApi如何集成特征模块")]),_:1})])])]),e("li",null,[a(i,{to:"#电商项目中使用特征"},{default:s(()=>[n("电商项目中使用特征")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#订单业务场景"},{default:s(()=>[n("订单业务场景")]),_:1})]),e("li",null,[a(i,{to:"#如何使用特征"},{default:s(()=>[n("如何使用特征？")]),_:1})])])]),e("li",null,[a(i,{to:"#电商项目中特征原理"},{default:s(()=>[n("电商项目中特征原理")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#特征定义原理"},{default:s(()=>[n("特征定义原理")]),_:1})]),e("li",null,[a(i,{to:"#特征管理原理"},{default:s(()=>[n("特征管理原理")]),_:1})]),e("li",null,[a(i,{to:"#特征取值原理"},{default:s(()=>[n("特征取值原理")]),_:1})])])]),e("li",null,[a(i,{to:"#电商项目中web使用特征"},{default:s(()=>[n("电商项目中Web使用特征")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#web特征原理"},{default:s(()=>[n("Web特征原理")]),_:1})])])]),e("li",null,[a(i,{to:"#电商项目中client使用特征"},{default:s(()=>[n("电商项目中Client使用特征")]),_:1})]),e("li",null,[a(i,{to:"#扩展1-电商项目中多租户特征"},{default:s(()=>[n("扩展1：电商项目中多租户特征")]),_:1})]),e("li",null,[a(i,{to:"#扩展2-电商项目中自定义特征"},{default:s(()=>[n("扩展2：电商项目中自定义特征")]),_:1})])])]),h])}const A=l(o,[["render",g],["__file","abp014.html.vue"]]);export{A as default};
