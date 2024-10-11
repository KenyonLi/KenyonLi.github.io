import{_ as l,r as d,o as t,c as r,a as e,b as s,w as a,d as i,e as u}from"./app-c1c3c937.js";const c="/images/abp/abp013/image-20220210164251590.png",v="/images/abp/abp013/image-20220210165233318.png",o="/images/abp/abp013/image-20220210165324965.png",p={},b=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),m={class:"table-of-contents"},g=u(`<h1 id="核心组件-用户组件-设置模块" tabindex="-1"><a class="header-anchor" href="#核心组件-用户组件-设置模块" aria-hidden="true">#</a> 核心组件-用户组件-设置模块</h1><h2 id="什么是设置" tabindex="-1"><a class="header-anchor" href="#什么是设置" aria-hidden="true">#</a> 什么是设置</h2><p>多个客户租用系统，例如：多个公司租用阿里云服务器</p><h2 id="什么是设置模块" tabindex="-1"><a class="header-anchor" href="#什么是设置模块" aria-hidden="true">#</a> 什么是设置模块</h2><p>对租户实现增删改查。就是设置管理模块</p><h2 id="为什么使用设置" tabindex="-1"><a class="header-anchor" href="#为什么使用设置" aria-hidden="true">#</a> 为什么使用设置</h2><p>目的：为了将系统设计为Saas系统</p><h2 id="电商项目中如何集成设置模块" tabindex="-1"><a class="header-anchor" href="#电商项目中如何集成设置模块" aria-hidden="true">#</a> 电商项目中如何集成设置模块</h2><h3 id="设置模块源码" tabindex="-1"><a class="header-anchor" href="#设置模块源码" aria-hidden="true">#</a> 设置模块源码</h3><p>下载地址：</p><p>https://github.com/abpframework/abp/tree/dev/modules/SettingManagement</p><p>源码介绍：</p><h3 id="lkn-ebusiness-domain-shared如何集成设置模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain-shared如何集成设置模块" aria-hidden="true">#</a> LKN.EBusiness.Domain.Shared如何集成设置模块</h3><p>条件</p><p>1、Volo.Abp.SettingManagement.Domain.Shared</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.SettingManagement.Domain.Shared

2、然后在EBusinessDomainSharedModule文件上增加

[DependsOn(
        typeof(AbpSettingManagementDomainSharedModule)
        )]
 public class EBusinessDomainSharedModule : AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-domain如何集成设置模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain如何集成设置模块" aria-hidden="true">#</a> LKN.EBusiness.Domain如何集成设置模块</h3><p>条件</p><p>1、Volo.Abp.SettingManagement.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.SettingManagement.Domain

2、然后在EBusinessDomainModule文件上增加

[DependsOn(
        typeof(AbpSettingManagementDomainModule)
        )]
    public class EBusinessDomainSharedModule : AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-entityframeworkcore如何集成设置模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-entityframeworkcore如何集成设置模块" aria-hidden="true">#</a> LKN.EBusiness.EntityFrameworkCore如何集成设置模块</h3><p>条件</p><p>1、Volo.Abp.SettingManagement.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.SettingManagement.EntityFrameworkCore

2、然后在EBusinessEntityFrameworkCoreModule文件上增加

[DependsOn(
        typeof(AbpSettingManagementEntityFrameworkCoreModule)
        )]
    public class EBusinessEntityFrameworkCoreModule: AbpModule

 {}
 3、然后在EBusinessDbContext类上实现ISettingManagementDbContext上下文
 public DbSet&lt;SettingGrant&gt; SettingGrants { get; }
 
 4、然后在EBusinessDbContext类上添加
 [ReplaceDbContext(typeof(ISettingManagementDbContext))]
    [ConnectionStringName(&quot;Default&quot;)]
    public class EBusinessDbContext : 
        AbpDbContext&lt;EBusinessDbContext&gt;,
        ISettingManagementDbContext
    {
        .....
    	public DbSet&lt;Setting&gt; Settings { get; set; }
        .....
    }
    
 5、然后在OnModelCreating方法中添加
 protected override void OnModelCreating(ModelBuilder builder)
 {
 	base.OnModelCreating(builder);

    /* Include modules to your migration db context */
    .....          
    builder.ConfigureSettingManagement();
    .....
 }
 
 7、最后启动LKN.EBusiness.DbMigrator迁移项目，生成设置表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="image-20220210164251590"></p><h3 id="lkn-ebusiness-application-contracts如何集成设置模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application-contracts如何集成设置模块" aria-hidden="true">#</a> LKN.EBusiness.Application.Contracts如何集成设置模块</h3><p>条件</p><p>1、Volo.Abp.SettingManagement.Application.Contracts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.SettingManagement.Application.Contracts

2、然后在EBusinessApplicationContractsModule文件上增加

[DependsOn(
        typeof(AbpSettingManagementApplicationContractsModule)
        )]
 public class EBusinessApplicationContractsModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-application如何集成设置模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application如何集成设置模块" aria-hidden="true">#</a> LKN.EBusiness.Application如何集成设置模块</h3><p>条件</p><p>1、Volo.Abp.SettingManagement.Application</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在项目中通过Nuget下载

Volo.Abp.SettingManagement.Application.Contracts

2、然后在EBusinessApplicationModule文件上增加

[DependsOn(
        typeof(AbpSettingManagementApplicationModule)
        )]
 public class EBusinessApplicationContractsModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-httpapi如何集成设置模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-httpapi如何集成设置模块" aria-hidden="true">#</a> LKN.EBusiness.HttpApi如何集成设置模块</h3><p>条件</p><p>1、Volo.Abp.SettingManagement.HttpApi</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>步骤
1、先在项目中通过Nuget下载

Volo.Abp.SettingManagement.Application.Contracts

2、然后在EBusinessHttpApiModule文件上增加

[DependsOn(
        typeof(AbpSettingManagementHttpApiModule)
 )]
 public class EBusinessHttpApiModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中使用设置" tabindex="-1"><a class="header-anchor" href="#电商项目中使用设置" aria-hidden="true">#</a> 电商项目中使用设置</h2><h3 id="支付业务场景" tabindex="-1"><a class="header-anchor" href="#支付业务场景" aria-hidden="true">#</a> 支付业务场景</h3><p>电商项目中根据商品创建订单后，需要进行支付，默认选择是奕鼎通微信支付，如果想切换到其他机构支付，必须手动修改代码。</p><p>如何做到切换到其他机构支付，不修改代码？</p><p>答案：使用设置</p><h3 id="如何使用设置" tabindex="-1"><a class="header-anchor" href="#如何使用设置" aria-hidden="true">#</a> 如何使用设置？</h3><h4 id="设置定义" tabindex="-1"><a class="header-anchor" href="#设置定义" aria-hidden="true">#</a> 设置定义</h4><p>条件</p><p>1、LKN.EBusiness.Domain</p><p>2、Volo.Abp.Settings</p><p>步骤</p><p>1、先在LKN.EBusiness.Domain模块中通过nuget引入</p><p>Volo.Abp.Settings</p><p>2、然后在LKN.EBusiness.Domain模块中Settings文件夹中创建EBusinessSettings类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>   public static class EBusinessSettings
    {
        private const string Prefix = &quot;EBusiness&quot;;
   /// &lt;summary&gt;
    /// 微信支付设置
    /// &lt;/summary&gt;
    public static class WxPay
    {
        public const string Default = Prefix + &quot;.WxPay&quot;;
        public const string NativeUrl = Default + &quot;.nativeUrl&quot;;
        public const string Mchid = Default + &quot;.mchid&quot;;
        public const string Certpath = Default + &quot;.certpath&quot;;
        public const string CertSerialNo = Default + &quot;.certSerialNo&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后在LKN.EBusiness.Domain模块中Settings文件夹中创建EBusinessSettingDefinitionProvider类</p><p>实现SettingDefinitionProvider抽象类</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class EBusinessSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            // 1、定义微信支付设置
            context.Add(
                new SettingDefinition(EBusinessSettings.WxPay.NativeUrl),
                new SettingDefinition(EBusinessSettings.WxPay.Mchid),
                new SettingDefinition(EBusinessSettings.WxPay.Certpath),
                new SettingDefinition(EBusinessSettings.WxPay.CertSerialNo));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置管理" tabindex="-1"><a class="header-anchor" href="#设置管理" aria-hidden="true">#</a> 设置管理</h4><p>条件</p><p>1、EBusinessSettings接口</p><p><img src="`+v+'" alt="image-20220210165233318"></p><p>步骤</p><p>1、先使用PUT接口添加设置到数据库</p><p><img src="'+o+`" alt="image-20220210165324965"></p><h4 id="设置取值" tabindex="-1"><a class="header-anchor" href="#设置取值" aria-hidden="true">#</a> 设置取值</h4><p>条件</p><p>1、LKN.EBusiness.Application</p><p>2、ISettingProvider</p><p>步骤</p><p>1、先在LKN.EBusiness.Application模块中WxPayAppService类中创建商品使用ISettingProvider获取设置信息</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class WxPayAppService : EBusinessAppService, IPayAppService
{ 
        ....
        
        public IVirtualFileProvider _virtualFileProvider { set; get; }
        ....
        public string CreatePay(string productName, string orderSn, string totalPrice)
        {
            .....
             NativePay nativePay = new NativePay();
                nativePay.description = productName;
                nativePay.out_trade_no = orderSn;
                nativePay.amount.total = int.Parse(float.Parse(totalPrice) * 100 + &quot;&quot;);

                // 2、支付对象转换成json
                string nativePayJson = JsonConvert.SerializeObject(nativePay);

                // 3、创建支付
                string a1 = SettingProvider.GetOrNullAsync(EBusinessSettings.WxPay.NativeUrl).Result;
                string a2 = SettingProvider.GetOrNullAsync(EBusinessSettings.WxPay.Certpath).Result;
                string a3 = SettingProvider.GetOrNullAsync(EBusinessSettings.WxPay.Mchid).Result;
                string a4 = SettingProvider.GetOrNullAsync(EBusinessSettings.WxPay.CertSerialNo).Result;
                string result = _wxPayHttpClient.
                    				WeChatPostAsync(SettingProvider.GetOrNullAsync(EBusinessSettings.WxPay.NativeUrl).Result,
                    nativePayJson,
                    SettingProvider.GetOrNullAsync(EBusinessSettings.WxPay.Certpath).Result,
                    SettingProvider.GetOrNullAsync(EBusinessSettings.WxPay.Mchid).Result,
                   SettingProvider.GetOrNullAsync(EBusinessSettings.WxPay.CertSerialNo).Result).Result;

                return result;
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中设置原理" tabindex="-1"><a class="header-anchor" href="#电商项目中设置原理" aria-hidden="true">#</a> 电商项目中设置原理</h2><h3 id="设置定义原理" tabindex="-1"><a class="header-anchor" href="#设置定义原理" aria-hidden="true">#</a> 设置定义原理</h3><p>条件</p><p>1、Volo.Abp.Settings模块</p><p>核心类：</p><p>1、SettingDefinition</p><p>2、SettingDefinitionProvider</p><p>3、SettingDefinitionManager</p><p>步骤</p><p>1、SettingDefinition执行定义</p><p>2、SettingDefinitionProvider提供设置。</p><p>3、SettingDefinitionManager 核心执行</p><h3 id="设置管理原理" tabindex="-1"><a class="header-anchor" href="#设置管理原理" aria-hidden="true">#</a> 设置管理原理</h3><p>条件</p><p>1、LKN.EBusiness.Application模块</p><p>2、Volo.Abp.SettingManagement.Domain模块</p><p>核心类：</p><p>1、EBusinessSettingsAppService</p><p>2、SettingManager</p><p>3、SettingManagementProvider （默认GlobalSettingManagementProvider）</p><p>4、SettingManagementStore</p><p>步骤</p><p>1、EBusinessSettingsAppService负责接口入口</p><p>2、SettingManager负责客户端调用</p><p>3、SettingManagementProvider负责设置扩展</p><p>4、SettingManagementStore负责设置取值</p><h3 id="设置取值原理" tabindex="-1"><a class="header-anchor" href="#设置取值原理" aria-hidden="true">#</a> 设置取值原理</h3><p>条件</p><p>1、Volo.Abp.Settings模块</p><p>核心类：</p><p>1、SettingProvider</p><p>2、SettingValueProviderManager</p><p>3、SettingValueProvider（默认：GlobalSettingValueProvider）</p><p>4、SettingDefinitionManager</p><p>步骤</p><p>1、SettingProvider负责客户端取值</p><p>2、SettingValueProviderManager负责提供设置扩展管理</p><p>3、SettingValueProvider负责获取设置值</p><p>4、SettingDefinitionManager负责设置定义管理</p><h2 id="电商项目中web使用设置" tabindex="-1"><a class="header-anchor" href="#电商项目中web使用设置" aria-hidden="true">#</a> 电商项目中Web使用设置</h2><p>条件</p><p>1、LKN.EBusiness.Web</p><p>2、Volo.Abp.SettingManagement.Web</p><p>步骤</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>1、先在LKN.EBusiness.Web模块中通过Nuget引入

Volo.Abp.SettingManagement.Web

2、然后在LKN.EBusiness.Web模块中EBusinessWebModule类上添加
[DependsOn(
    ....
        typeof(AbpSettingManagementWebModule),
     ....
        )]
    public class EBusinessWebModule : AbpModule
    {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web设置原理" tabindex="-1"><a class="header-anchor" href="#web设置原理" aria-hidden="true">#</a> Web设置原理</h3><p>条件</p><p>1、Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy模块</p><p>核心类</p><p>1、Index.cshtml</p><p>2、Index.js</p><p>步骤</p><p>1、Index.cshtml负责设置UI展示</p><p>2、Index.js负责或者设置数据</p><h2 id="电商项目中client使用设置" tabindex="-1"><a class="header-anchor" href="#电商项目中client使用设置" aria-hidden="true">#</a> 电商项目中Client使用设置</h2><p>条件</p><p>1、Volo.Abp.SettingManagement.HttpApi.Client</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>步骤
1、先在项目中通过Nuget下载
LKN.EBusiness.HttpApi.Client

2、然后在LKN.OA文件上增加
 [DependsOn(
	typeof(AbpSettingManagementHttpApiClientModule)
 )]
 public class OAModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展1-电商项目中多租户设置" tabindex="-1"><a class="header-anchor" href="#扩展1-电商项目中多租户设置" aria-hidden="true">#</a> 扩展1：电商项目中多租户设置</h2><h2 id="扩展2-电商项目中自定义设置" tabindex="-1"><a class="header-anchor" href="#扩展2-电商项目中自定义设置" aria-hidden="true">#</a> 扩展2：电商项目中自定义设置</h2>`,129);function h(S,f){const n=d("router-link");return t(),r("div",null,[b,e("nav",m,[e("ul",null,[e("li",null,[s(n,{to:"#目录"},{default:a(()=>[i("目录")]),_:1})]),e("li",null,[s(n,{to:"#什么是设置"},{default:a(()=>[i("什么是设置")]),_:1})]),e("li",null,[s(n,{to:"#什么是设置模块"},{default:a(()=>[i("什么是设置模块")]),_:1})]),e("li",null,[s(n,{to:"#为什么使用设置"},{default:a(()=>[i("为什么使用设置")]),_:1})]),e("li",null,[s(n,{to:"#电商项目中如何集成设置模块"},{default:a(()=>[i("电商项目中如何集成设置模块")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#设置模块源码"},{default:a(()=>[i("设置模块源码")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-domain-shared如何集成设置模块"},{default:a(()=>[i("LKN.EBusiness.Domain.Shared如何集成设置模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-domain如何集成设置模块"},{default:a(()=>[i("LKN.EBusiness.Domain如何集成设置模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-entityframeworkcore如何集成设置模块"},{default:a(()=>[i("LKN.EBusiness.EntityFrameworkCore如何集成设置模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-application-contracts如何集成设置模块"},{default:a(()=>[i("LKN.EBusiness.Application.Contracts如何集成设置模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-application如何集成设置模块"},{default:a(()=>[i("LKN.EBusiness.Application如何集成设置模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-httpapi如何集成设置模块"},{default:a(()=>[i("LKN.EBusiness.HttpApi如何集成设置模块")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中使用设置"},{default:a(()=>[i("电商项目中使用设置")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#支付业务场景"},{default:a(()=>[i("支付业务场景")]),_:1})]),e("li",null,[s(n,{to:"#如何使用设置"},{default:a(()=>[i("如何使用设置？")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中设置原理"},{default:a(()=>[i("电商项目中设置原理")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#设置定义原理"},{default:a(()=>[i("设置定义原理")]),_:1})]),e("li",null,[s(n,{to:"#设置管理原理"},{default:a(()=>[i("设置管理原理")]),_:1})]),e("li",null,[s(n,{to:"#设置取值原理"},{default:a(()=>[i("设置取值原理")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中web使用设置"},{default:a(()=>[i("电商项目中Web使用设置")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#web设置原理"},{default:a(()=>[i("Web设置原理")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中client使用设置"},{default:a(()=>[i("电商项目中Client使用设置")]),_:1})]),e("li",null,[s(n,{to:"#扩展1-电商项目中多租户设置"},{default:a(()=>[i("扩展1：电商项目中多租户设置")]),_:1})]),e("li",null,[s(n,{to:"#扩展2-电商项目中自定义设置"},{default:a(()=>[i("扩展2：电商项目中自定义设置")]),_:1})])])]),g])}const A=l(p,[["render",h],["__file","abp013.html.vue"]]);export{A as default};
