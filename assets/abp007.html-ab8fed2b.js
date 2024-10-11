import{_ as t,r as d,o as r,c,a as e,b as s,w as l,d as i,e as u}from"./app-c1c3c937.js";const a="/images/abp/abp7_0002image.png",o={},v=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),p={class:"table-of-contents"},b=u('<h2 id="abp核心项目-电商项目-五-动态c-api客户端模块" tabindex="-1"><a class="header-anchor" href="#abp核心项目-电商项目-五-动态c-api客户端模块" aria-hidden="true">#</a> ABP核心项目-电商项目(五)-动态c#API客户端模块</h2><div class="custom-container tip"><p class="custom-container-title">动态 C# API 客户端</p><p>指：系统提供客户端，例如：电商系统提供电商客户端，客户端类似于SDK</p></div><div class="custom-container tip"><p class="custom-container-title">项目中为什么要使用动态 C# API 客户端</p><p>1、为了复用<br> 2、解决开闭原则<br> 3、微服务</p></div><h3 id="oa系统如何使用动态c-api客户端" tabindex="-1"><a class="header-anchor" href="#oa系统如何使用动态c-api客户端" aria-hidden="true">#</a> OA系统如何使用动态C# API客户端</h3><div class="custom-container tip"><p class="custom-container-title">条件</p><p>1、OA系统<br> 2、电商系统<br> 3、LKN.EBusiness.HttpApi.Client</p></div><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h4><p>1、先创建OA系统<br> 2、然后创建电商系统<br> 3、然后在电商系统中的LKN.EBusiness.HttpApi.Client模块中的EBusinessHttpClientModule引入<br><img src="'+a+`" alt="Alt text"></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.TenantManagement;
using Volo.Abp.SettingManagement;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Http.Client;
using Polly;
using System;

namespace LKN.EBusiness;

[DependsOn(
    typeof(EBusinessApplicationContractsModule),
    typeof(AbpAccountHttpApiClientModule),
    typeof(AbpIdentityHttpApiClientModule),
    typeof(AbpPermissionManagementHttpApiClientModule),
    typeof(AbpTenantManagementHttpApiClientModule),
    typeof(AbpFeatureManagementHttpApiClientModule),
    typeof(AbpSettingManagementHttpApiClientModule)
)]
public class EBusinessHttpApiClientModule : AbpModule
{
    public const string RemoteServiceName = &quot;EBusiness&quot;;

    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        //重试
        PreConfigure&lt;AbpHttpClientBuilderOptions&gt;(options =&gt; {
            options.ProxyClientBuildActions.Add((remoteServiceName,clientBuilder) =&gt; {
                clientBuilder.AddTransientHttpErrorPolicy(policyBuilder =&gt; {
                   return policyBuilder.WaitAndRetryAsync(3, i =&gt; TimeSpan.FromSeconds(Math.Pow(2, 1)));
                });
            });
        });   
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(EBusinessApplicationContractsModule).Assembly,
            RemoteServiceName
        );

        Configure&lt;AbpVirtualFileSystemOptions&gt;(options =&gt;
        {
            options.FileSets.AddEmbedded&lt;EBusinessHttpApiClientModule&gt;();
        });
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、然后在OA系统中添加项目引用引入LKN.EBusiness.HttpApi.Client<br> 5、然后在OA系统中EBusinessHttpApiClientModule类上引入<br><img src="`+a+`" alt="Alt text"></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>[DependsOn(typeof(EBusinessHttpApiClientModule))]
public class EBusinessHttpApiClientModule : AbpModule
{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、然后使用OA系统中OAController中引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[ApiController]
    [Route(&quot;[controller]&quot;)]
    public class OAController : ControllerBase
    {
        public IProductAppService _productAppService { set; get; }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oa系统如何实现多项目动态-c-api-客户端访问" tabindex="-1"><a class="header-anchor" href="#oa系统如何实现多项目动态-c-api-客户端访问" aria-hidden="true">#</a> OA系统如何实现多项目动态 C# API 客户端访问</h3><p>条件</p><p>1、appsettings.json</p><p>步骤</p><p>1、先进入到OA系统中，在appsettings.json文件中添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;RemoteServices&quot;: {
    &quot;EBusiness&quot;: {
      &quot;BaseUrl&quot;: &quot;https://localhost:44388/&quot;
    },
    &quot;ERP&quot;: {
      &quot;BaseUrl&quot;: &quot;https://localhost:44388/&quot;
    },
    &quot;OA&quot;: {
      &quot;BaseUrl&quot;: &quot;https://localhost:44388/&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态c-api-客户端缺陷" tabindex="-1"><a class="header-anchor" href="#动态c-api-客户端缺陷" aria-hidden="true">#</a> 动态C# API 客户端缺陷</h3><p>缺陷：无法适应其他语言，例如c#调用</p><p>解决方案：需要使用gRPC来实现跨语言</p><h3 id="为什么要使用动态-c-api-客户端" tabindex="-1"><a class="header-anchor" href="#为什么要使用动态-c-api-客户端" aria-hidden="true">#</a> 为什么要使用动态 C# API 客户端</h3><p>原因：1、提升开发效率</p><p>验证过程：</p><p>请参考视频</p><h3 id="动态c-api-客户端实现原理" tabindex="-1"><a class="header-anchor" href="#动态c-api-客户端实现原理" aria-hidden="true">#</a> 动态C# API 客户端实现原理</h3><p>条件</p><p>1、Volo.Abp.Http.Client</p><p>2、Volo.Abp.Castle.Core</p><p>步骤</p><p>1、先创建service代理类，通过ServiceCollectionDynamicHttpClientProxyExtensions类中的</p><p>ProxyGenerator生成接口代理</p><p>2、然后将代理类注册到IOC容器，在ServiceCollectionDynamicHttpClientProxyExtensions中AddHttpClientProxy方法中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (asDefaultService)
            {
                services.AddTransient(
                    type,
                    serviceProvider =&gt; ProxyGeneratorInstance
                        .CreateInterfaceProxyWithoutTarget(
                            type,
                            (IInterceptor)serviceProvider.GetRequiredService(validationInterceptorAdapterType),
                            (IInterceptor)serviceProvider.GetRequiredService(interceptorAdapterType)
                        )
                );
            }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、最后拦截代理执行，在DynamicHttpProxyInterceptor类中，在InterceptAsync方法中进行执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public override async Task InterceptAsync(IAbpMethodInvocation invocation)
        {
            if (invocation.Method.ReturnType.GenericTypeArguments.IsNullOrEmpty())
            {
                await MakeRequestAsync(invocation);
            }
            else
            {
                var result = (Task)MakeRequestAndGetResultAsyncMethod
                    .MakeGenericMethod(invocation.Method.ReturnType.GenericTypeArguments[0])
                    .Invoke(this, new object[] { invocation });
           invocation.ReturnValue = await GetResultAsync(
                result,
                invocation.Method.ReturnType.GetGenericArguments()[0]
            );
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态c-api-客户端如何实现多次重试" tabindex="-1"><a class="header-anchor" href="#动态c-api-客户端如何实现多次重试" aria-hidden="true">#</a> 动态C# API 客户端如何实现多次重试</h3><p>条件</p><p>1、Microsoft.Extensions.Http.Polly</p><p>步骤</p><p>1、先进入到LKN.EBusiness.HttpApi.Client项目中，在EBusinessHttpApiClientModule类中加入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[DependsOn(
    typeof(EBusinessApplicationContractsModule),
    typeof(AbpAccountHttpApiClientModule),
    typeof(AbpIdentityHttpApiClientModule),
    typeof(AbpPermissionManagementHttpApiClientModule),
    typeof(AbpTenantManagementHttpApiClientModule),
    typeof(AbpFeatureManagementHttpApiClientModule),
    typeof(AbpSettingManagementHttpApiClientModule)
)]
    public class EBusinessHttpApiClientModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure&lt;AbpHttpClientBuilderOptions&gt;(options =&gt;
            {
                options.ProxyClientBuildActions.Add((remoteServiceName, clientBuilder) =&gt;
                {
                    clientBuilder.AddTransientHttpErrorPolicy(policyBuilder =&gt;
                        policyBuilder.WaitAndRetryAsync(
                            3,
                            i =&gt; TimeSpan.FromSeconds(Math.Pow(2, i))
                        )
                    );
                });
            });
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后直接调用</p><h3 id="扩展-动态c-api客户端最佳场景" tabindex="-1"><a class="header-anchor" href="#扩展-动态c-api客户端最佳场景" aria-hidden="true">#</a> 扩展：动态c#API客户端最佳场景</h3><p>场景：微服务调用这种场景非常方便开发</p><h2 id="电商项目web模块" tabindex="-1"><a class="header-anchor" href="#电商项目web模块" aria-hidden="true">#</a> 电商项目Web模块</h2><h3 id="如何展示在页面上展示商品数据" tabindex="-1"><a class="header-anchor" href="#如何展示在页面上展示商品数据" aria-hidden="true">#</a> 如何展示在页面上展示商品数据</h3><p>条件</p><p>1、LKN.EBusiness.Web</p><h3 id="如何使用lkn-ebusiness-web展示数据" tabindex="-1"><a class="header-anchor" href="#如何使用lkn-ebusiness-web展示数据" aria-hidden="true">#</a> 如何使用LKN.EBusiness.Web展示数据</h3><p>条件</p><p>1、Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic</p><p>步骤</p><h3 id="volo-abp-aspnetcore-mvc-ui-theme-basic展示ui原理" tabindex="-1"><a class="header-anchor" href="#volo-abp-aspnetcore-mvc-ui-theme-basic展示ui原理" aria-hidden="true">#</a> Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic展示UI原理</h3><p>条件</p><p>1、ABP UI</p><p>2、动态JavaScript代理</p><h3 id="volo-abp-aspnetcore-mvc-ui-theme-basic缺陷" tabindex="-1"><a class="header-anchor" href="#volo-abp-aspnetcore-mvc-ui-theme-basic缺陷" aria-hidden="true">#</a> Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic缺陷</h3><p>缺陷：只能使用.NET5 ABP vNext方式</p><p>所以：需要前后端分离框架</p><h2 id="领域模型实体扩展" tabindex="-1"><a class="header-anchor" href="#领域模型实体扩展" aria-hidden="true">#</a> 领域模型实体扩展</h2><h2 id="电商项目扩展" tabindex="-1"><a class="header-anchor" href="#电商项目扩展" aria-hidden="true">#</a> 电商项目扩展</h2><h3 id="电商项目如何扩展成模块" tabindex="-1"><a class="header-anchor" href="#电商项目如何扩展成模块" aria-hidden="true">#</a> 电商项目如何扩展成模块</h3>`,63);function m(h,A){const n=d("router-link");return r(),c("div",null,[v,e("nav",p,[e("ul",null,[e("li",null,[s(n,{to:"#目录"},{default:l(()=>[i("目录")]),_:1})]),e("li",null,[s(n,{to:"#abp核心项目-电商项目-五-动态c-api客户端模块"},{default:l(()=>[i("ABP核心项目-电商项目(五)-动态c#API客户端模块")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#oa系统如何使用动态c-api客户端"},{default:l(()=>[i("OA系统如何使用动态C# API客户端")]),_:1})]),e("li",null,[s(n,{to:"#oa系统如何实现多项目动态-c-api-客户端访问"},{default:l(()=>[i("OA系统如何实现多项目动态 C# API 客户端访问")]),_:1})]),e("li",null,[s(n,{to:"#动态c-api-客户端缺陷"},{default:l(()=>[i("动态C# API 客户端缺陷")]),_:1})]),e("li",null,[s(n,{to:"#为什么要使用动态-c-api-客户端"},{default:l(()=>[i("为什么要使用动态 C# API 客户端")]),_:1})]),e("li",null,[s(n,{to:"#动态c-api-客户端实现原理"},{default:l(()=>[i("动态C# API 客户端实现原理")]),_:1})]),e("li",null,[s(n,{to:"#动态c-api-客户端如何实现多次重试"},{default:l(()=>[i("动态C# API 客户端如何实现多次重试")]),_:1})]),e("li",null,[s(n,{to:"#扩展-动态c-api客户端最佳场景"},{default:l(()=>[i("扩展：动态c#API客户端最佳场景")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目web模块"},{default:l(()=>[i("电商项目Web模块")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#如何展示在页面上展示商品数据"},{default:l(()=>[i("如何展示在页面上展示商品数据")]),_:1})]),e("li",null,[s(n,{to:"#如何使用lkn-ebusiness-web展示数据"},{default:l(()=>[i("如何使用LKN.EBusiness.Web展示数据")]),_:1})]),e("li",null,[s(n,{to:"#volo-abp-aspnetcore-mvc-ui-theme-basic展示ui原理"},{default:l(()=>[i("Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic展示UI原理")]),_:1})]),e("li",null,[s(n,{to:"#volo-abp-aspnetcore-mvc-ui-theme-basic缺陷"},{default:l(()=>[i("Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic缺陷")]),_:1})])])]),e("li",null,[s(n,{to:"#领域模型实体扩展"},{default:l(()=>[i("领域模型实体扩展")]),_:1})]),e("li",null,[s(n,{to:"#电商项目扩展"},{default:l(()=>[i("电商项目扩展")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#电商项目如何扩展成模块"},{default:l(()=>[i("电商项目如何扩展成模块")]),_:1})])])])])]),b])}const C=t(o,[["render",m],["__file","abp007.html.vue"]]);export{C as default};
