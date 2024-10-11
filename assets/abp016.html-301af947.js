import{_ as a,r as d,o as t,c as r,a as e,b as s,w as l,d as i,e as u}from"./app-c1c3c937.js";const c="/images/abp/abp015/image-20220210105855501.png",o="/images/abp/abp015/image-20220210112449564.png",v="/images/abp/abp015/image-20220210113424227.png",b={},p=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),m={class:"table-of-contents"},h=u('<h1 id="核心组件-电商项目-虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#核心组件-电商项目-虚拟文件系统" aria-hidden="true">#</a> 核心组件-电商项目-虚拟文件系统</h1><h2 id="什么是实体文件" tabindex="-1"><a class="header-anchor" href="#什么是实体文件" aria-hidden="true">#</a> 什么是实体文件</h2><p>磁盘中固定的文件。例如：C盘：文件固定位置，D盘：文件固定位置。</p><h2 id="什么是虚拟文件" tabindex="-1"><a class="header-anchor" href="#什么是虚拟文件" aria-hidden="true">#</a> 什么是虚拟文件</h2><p>不在指定磁盘位置的文件。例如：项目中的文件。</p><h2 id="什么是虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#什么是虚拟文件系统" aria-hidden="true">#</a> 什么是虚拟文件系统</h2><p>操作虚拟文件，像操作磁盘文件一样。</p><p>对虚拟文件实现增删改查。就是虚拟文件系统管理模块</p><h2 id="为什么使用虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#为什么使用虚拟文件系统" aria-hidden="true">#</a> 为什么使用虚拟文件系统</h2><p>操作文件更加灵活，方便移植和扩展。</p><h2 id="电商项目中如何使用虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#电商项目中如何使用虚拟文件系统" aria-hidden="true">#</a> 电商项目中如何使用虚拟文件系统</h2><h3 id="支付业务场景" tabindex="-1"><a class="header-anchor" href="#支付业务场景" aria-hidden="true">#</a> 支付业务场景</h3><p>电商项目中进行微信支付，需要使用微信默认证书</p><p>apiclient_cert.p12</p><p>该证书需要从微信支付平台进行下载。</p><p>系统中如何获取证书文件？答案：需要使用虚拟文件系统</p><p><img src="'+c+`" alt="image-20220210105855501"></p><h3 id="如何使用虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#如何使用虚拟文件系统" aria-hidden="true">#</a> 如何使用虚拟文件系统？</h3><p>条件</p><p>1、LKN.EBusiness.Application</p><p>2、Volo.Abp.VirtualFileSystem</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在LKN.EBusiness.Application项目中通过Nuget下载
Volo.Abp.VirtualFileSystem

2、然后在EBusinessApplicationModule文件上增加(默认不需要加载，因为其他模块已经集成)
[DependsOn(typeof(AbpVirtualFileSystemModule))]
 public class EBusinessApplicationModule: AbpModule
 {}
 
3、然后在LKN.EBusiness.Application项目中EBusinessApplicationModule类中添加
// 虚拟文件系统
public class EBusinessApplicationModule : AbpModule
{
  public override void ConfigureServices(ServiceConfigurationContext context)
  {
    ....
    Configure&lt;AbpVirtualFileSystemOptions&gt;(options =&gt;
    {
        options.FileSets.AddEmbedded&lt;EBusinessApplicationModule&gt;( // 那个项目中的文件
        baseNamespace: &quot;LKN.EBusiness.Application&quot; // 默认命名空间
    );
    });
    ....
   }
}
4、最后使用LKN.EBusiness.Application项目中WxPayAppService类中使用IVirtualFileProvider接口获取指定文件
public class WxPayAppService : EBusinessAppService, IPayAppService
{ 
        ....
        
        public IVirtualFileProvider _virtualFileProvider { set; get; }
        ....
        public string CreatePay(string productName, string orderSn, string totalPrice)
        {
            .....
            var file = _virtualFileProvider.GetFileInfo(&quot;/Pays/certs/apiclient_cert.p12&quot;);
            
            NativePay nativePay = new NativePay();
                nativePay.description = productName;
                nativePay.out_trade_no = orderSn;
                nativePay.amount.total = int.Parse(float.Parse(totalPrice) * 100 + &quot;&quot;);

                // 2、支付对象转换成json
                string nativePayJson = JsonConvert.SerializeObject(nativePay);

                // 3、创建支付
                string result = _wxPayHttpClient.
                    WeChatPostAsync(nativeUrl,
                    nativePayJson,
                    file.PhysicalPath,
                    mchid,
                   certSerialNo).Result;
                return result;
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目web中使用虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#电商项目web中使用虚拟文件系统" aria-hidden="true">#</a> 电商项目Web中使用虚拟文件系统</h2><h3 id="cshtml文件处添加js-css文件业务场景" tabindex="-1"><a class="header-anchor" href="#cshtml文件处添加js-css文件业务场景" aria-hidden="true">#</a> .cshtml文件处添加js css文件业务场景</h3><p>电商web项目一般都是在wwwroot文件中添加js css文件。但是不利于形成独立的页面模块。</p><p>如何在指定.cshtml文件处添加js css文件？答案：虚拟文件系统</p><p><img src="`+o+`" alt="image-20220210112449564"></p><h3 id="如何使用虚拟文件系统-1" tabindex="-1"><a class="header-anchor" href="#如何使用虚拟文件系统-1" aria-hidden="true">#</a> 如何使用虚拟文件系统？</h3><p>条件</p><p>1、LKN.EBusiness.Web</p><p>2、Volo.Abp.VirtualFileSystem</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在LKN.EBusiness.Web项目中通过Nuget下载
Volo.Abp.VirtualFileSystem

2、然后在EBusinessWebnModule文件上增加(默认不需要加载，因为其他模块已经集成)
[DependsOn(typeof(AbpVirtualFileSystemModule))]
 public class EBusinessWebModule: AbpModule
 {}

3、然后在LKN.EBusiness.Web项目中EBusinessWebModule类中添加
// 虚拟文件系统
public class EBusinessWebModule : AbpModule
{
  public override void ConfigureServices(ServiceConfigurationContext context)
  {
    ....
    Configure&lt;AbpVirtualFileSystemOptions&gt;(options =&gt;
    {
        options.FileSets.AddEmbedded&lt;EBusinessWebModule&gt;( // 那个项目中的文件
        baseNamespace: &quot;LKN.EBusiness.Web&quot; // 默认命名空间
    );
    });
    ....
   }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中如何替换虚拟文件系统" tabindex="-1"><a class="header-anchor" href="#电商项目中如何替换虚拟文件系统" aria-hidden="true">#</a> 电商项目中如何替换虚拟文件系统</h2><h3 id="css-js文件修改业务场景" tabindex="-1"><a class="header-anchor" href="#css-js文件修改业务场景" aria-hidden="true">#</a> css js文件修改业务场景</h3><p>电商项目中，使用了虚拟文件系统，如果修改了css js文件，嵌入到程序集中的文件无法事实更新到浏览器，导致项目必须重启！</p><p>如何修改js css文件实时被浏览器发现？答案：使用虚拟文件替换功能</p><p><img src="`+v+`" alt="image-20220210113424227"></p><h3 id="如何使用虚拟文件替换功能" tabindex="-1"><a class="header-anchor" href="#如何使用虚拟文件替换功能" aria-hidden="true">#</a> 如何使用虚拟文件替换功能？</h3><p>条件</p><p>1、Volo.Abp.VirtualFileSystem</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤
1、然后在LKN.EBusiness.Web项目中EBusinessWebModule类中添加
// 虚拟文件系统
public class EBusinessWebModule : AbpModule
{
  public override void ConfigureServices(ServiceConfigurationContext context)
  {
    ....
    Configure&lt;AbpVirtualFileSystemOptions&gt;(options =&gt;
    {
        options.FileSets.ReplaceEmbeddedByPhysical&lt;EBusinessDomainSharedModule&gt;(Path.Combine(hostingEnvironment.ContentRootPath, $&quot;..{Path.DirectorySeparatorChar}LKN.EBusiness.Domain.Shared&quot;));
                    options.FileSets.ReplaceEmbeddedByPhysical&lt;EBusinessDomainModule&gt;(Path.Combine(hostingEnvironment.ContentRootPath, $&quot;..{Path.DirectorySeparatorChar}LKN.EBusiness.Domain&quot;));
                    options.FileSets.ReplaceEmbeddedByPhysical&lt;EBusinessApplicationContractsModule&gt;(Path.Combine(hostingEnvironment.ContentRootPath, $&quot;..{Path.DirectorySeparatorChar}LKN.EBusiness.Application.Contracts&quot;));
                    options.FileSets.ReplaceEmbeddedByPhysical&lt;EBusinessApplicationModule&gt;(Path.Combine(hostingEnvironment.ContentRootPath, $&quot;..{Path.DirectorySeparatorChar}LKN.EBusiness.Application&quot;));
                    options.FileSets.ReplaceEmbeddedByPhysical&lt;EBusinessWebModule&gt;(hostingEnvironment.ContentRootPath);
    );
    });
    ....
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展-虚拟文件实现原理" tabindex="-1"><a class="header-anchor" href="#扩展-虚拟文件实现原理" aria-hidden="true">#</a> 扩展：虚拟文件实现原理</h2><p>模块</p><p>1、Volo.Abp.VirtualFileSystem</p><p>原理：不是很重要，会用即可</p>`,47);function g(f,_){const n=d("router-link");return t(),r("div",null,[p,e("nav",m,[e("ul",null,[e("li",null,[s(n,{to:"#目录"},{default:l(()=>[i("目录")]),_:1})]),e("li",null,[s(n,{to:"#什么是实体文件"},{default:l(()=>[i("什么是实体文件")]),_:1})]),e("li",null,[s(n,{to:"#什么是虚拟文件"},{default:l(()=>[i("什么是虚拟文件")]),_:1})]),e("li",null,[s(n,{to:"#什么是虚拟文件系统"},{default:l(()=>[i("什么是虚拟文件系统")]),_:1})]),e("li",null,[s(n,{to:"#为什么使用虚拟文件系统"},{default:l(()=>[i("为什么使用虚拟文件系统")]),_:1})]),e("li",null,[s(n,{to:"#电商项目中如何使用虚拟文件系统"},{default:l(()=>[i("电商项目中如何使用虚拟文件系统")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#支付业务场景"},{default:l(()=>[i("支付业务场景")]),_:1})]),e("li",null,[s(n,{to:"#如何使用虚拟文件系统"},{default:l(()=>[i("如何使用虚拟文件系统？")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目web中使用虚拟文件系统"},{default:l(()=>[i("电商项目Web中使用虚拟文件系统")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#cshtml文件处添加js-css文件业务场景"},{default:l(()=>[i(".cshtml文件处添加js css文件业务场景")]),_:1})]),e("li",null,[s(n,{to:"#如何使用虚拟文件系统-1"},{default:l(()=>[i("如何使用虚拟文件系统？")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中如何替换虚拟文件系统"},{default:l(()=>[i("电商项目中如何替换虚拟文件系统")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#css-js文件修改业务场景"},{default:l(()=>[i("css js文件修改业务场景")]),_:1})]),e("li",null,[s(n,{to:"#如何使用虚拟文件替换功能"},{default:l(()=>[i("如何使用虚拟文件替换功能？")]),_:1})])])]),e("li",null,[s(n,{to:"#扩展-虚拟文件实现原理"},{default:l(()=>[i("扩展：虚拟文件实现原理")]),_:1})])])]),h])}const y=a(b,[["render",g],["__file","abp016.html.vue"]]);export{y as default};
