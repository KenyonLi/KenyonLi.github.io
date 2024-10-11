import{_ as c,r as t,o,c as n,a as e,b as a,w as r,d as s,e as p}from"./app-c1c3c937.js";const d="/images/abpmicroservices/micro001/abpmicroservices0001_0000.png",l="/images/abpmicroservices/micro001/abpmicroservices0001_0001.png",m="/images/abpmicroservices/micro001/abpmicroservices0001_0002.png",v="/images/abpmicroservices/micro001/abpmicroservices0001_0003.png",b="/images/abpmicroservices/micro001/abpmicroservices0001_0004.png",u="/images/abpmicroservices/micro001/abpmicroservices0001_0005.png",g="/images/abpmicroservices/micro001/abpmicroservices0001_0006.png",h="/images/abpmicroservices/micro001/abpmicroservices0001_0007.png",_="/images/abpmicroservices/micro001/abpmicroservices0001_0008.png",x="/images/abpmicroservices/micro001/abpmicroservices0001_0009.png",A="/images/abpmicroservices/micro001/abpmicroservices0001_0010.png",f="/images/abpmicroservices/micro001/abpmicroservices0001_0011.png",L="/images/abpmicroservices/micro001/abpmicroservices0001_0012.png",N="/images/abpmicroservices/micro001/abpmicroservices0001_0013.png",K="/images/abpmicroservices/micro001/abpmicroservices0001_0014.png",k="/images/abpmicroservices/micro001/abpmicroservices0001_0015.png",H="/images/abpmicroservices/micro001/abpmicroservices0001_0016.png",C="/images/abpmicroservices/micro001/abpmicroservices0001_0017.png",M="/images/abpmicroservices/micro001/abpmicroservices0001_0018.png",O="/images/abpmicroservices/micro001/abpmicroservices0001_0019.png",y="/images/abpmicroservices/micro001/abpmicroservices0001_0020.png",P="/images/abpmicroservices/micro001/abpmicroservices0001_0021.png",w="/images/abpmicroservices/micro001/abpmicroservices0001_0022.png",D="/images/abpmicroservices/micro001/abpmicroservices0001_0023.png",S="/images/abpmicroservices/micro001/abpmicroservices0001_0024.png",q="/images/abpmicroservices/micro001/abpmicroservices0001_0025.png",V="/images/abpmicroservices/micro001/abpmicroservices0001_0026.png",U="/images/abpmicroservices/micro001/abpmicroservices0001_0027.png",B="/images/abpmicroservices/micro001/abpmicroservices0001_0028.png",E="/images/abpmicroservices/micro001/abpmicroservices0001_0029.png",F="/images/abpmicroservices/micro001/abpmicroservices0001_0030.png",G="/images/abpmicroservices/micro001/abpmicroservices0001_0031.png",I="/images/abpmicroservices/micro001/abpmicroservices0001_0032.png",Q="/images/abpmicroservices/micro001/abpmicroservices0001_0033.png",R="/images/abpmicroservices/micro001/abpmicroservices0001_0034.png",T="/images/abpmicroservices/micro001/abpmicroservices0001_0035.png",j="/images/abpmicroservices/micro001/abpmicroservices0001_0036.png",z="/images/abpmicroservices/micro001/abpmicroservices0001_0037.png",J="/images/abpmicroservices/micro001/abpmicroservices0001_0038.png",W="/images/abpmicroservices/micro001/abpmicroservices0001_0039.png",X="/images/abpmicroservices/micro001/abpmicroservices0001_0040.png",Y="/images/abpmicroservices/micro001/abpmicroservices0001_0041.png",Z="/images/abpmicroservices/micro001/abpmicroservices0001_0042.png",$="/images/abpmicroservices/micro001/abpmicroservices0001_0043.png",ee={},se=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),ie={class:"table-of-contents"},ae=p(`<h2 id="微服务电商项目落地" tabindex="-1"><a class="header-anchor" href="#微服务电商项目落地" aria-hidden="true">#</a> 微服务电商项目落地</h2><p>1、windows 10</p><p>2、linux centos 9</p><h3 id="落地技术前提" tabindex="-1"><a class="header-anchor" href="#落地技术前提" aria-hidden="true">#</a> 落地技术前提</h3><p>1、.Net7：.netcore新的版本，主要以.net5为主</p><p>2、DDD ：领域驱动设计思想</p><p>3、Abp vNext：基于.net7开发的微服务框架</p><p>4、Mysql8.0.23：</p><h3 id="落地技术工具" tabindex="-1"><a class="header-anchor" href="#落地技术工具" aria-hidden="true">#</a> 落地技术工具</h3><p>1、ABP CLI<br> 安装 abp cli</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet tool <span class="token function">install</span> <span class="token parameter variable">-g</span> Volo.Abp.Cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、VS2022</p><h3 id="如何创建微服务电商项目" tabindex="-1"><a class="header-anchor" href="#如何创建微服务电商项目" aria-hidden="true">#</a> 如何创建微服务电商项目</h3><h4 id="微服务电商项目如图所示" tabindex="-1"><a class="header-anchor" href="#微服务电商项目如图所示" aria-hidden="true">#</a> 微服务电商项目如图所示</h4><p><img src="`+d+'" alt="Alt text"></p><h3 id="微服务电商项目创建" tabindex="-1"><a class="header-anchor" href="#微服务电商项目创建" aria-hidden="true">#</a> 微服务电商项目创建</h3><p>对于以上电商微服务，应该如何创建，创建思路如下。</p><h3 id="创建微服务解决方案" tabindex="-1"><a class="header-anchor" href="#创建微服务解决方案" aria-hidden="true">#</a> 创建微服务解决方案</h3><p>1、先创建 <code>abpmicroservice</code> 文件夹</p><p><img src="'+l+`" alt="Alt text"></p><p>2、然后在LKN.Products文件夹中创建解决方案LKN.Microservices<br> 2.1、 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>abp new LKN.Microservices <span class="token parameter variable">-t</span> console <span class="token parameter variable">-o</span> LKN.Microservices <span class="token parameter variable">-v</span> <span class="token number">7.3</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令如图所示</p><p><img src="`+m+'" alt="Alt text"></p><p>2.2、结果如图所示</p><p><img src="'+v+`" alt="Alt text"></p><h3 id="创建微服务订单模块" tabindex="-1"><a class="header-anchor" href="#创建微服务订单模块" aria-hidden="true">#</a> 创建微服务订单模块</h3><p>1、先进在<code>LKN.Microservices</code> 解决方案文件夹中创建<code>LKN.Order</code>模块<br> 1.1 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>abp new LKN.Order <span class="token parameter variable">-t</span> module –dbms mysql –no-ui <span class="token parameter variable">-o</span> moduls<span class="token punctuation">\\</span>LKN.Order <span class="token parameter variable">-v</span> <span class="token number">7.3</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令如图所示：</p><p><img src="`+b+'" alt="Alt text"></p><p>2.2、结果如图所示</p><p><img src="'+u+`" alt="Alt text"></p><h3 id="创建微服务商品模块" tabindex="-1"><a class="header-anchor" href="#创建微服务商品模块" aria-hidden="true">#</a> 创建微服务商品模块</h3><p>1、先进在<code>LKN.Microservices</code>解决方案文件夹中创建<code>LKN.Product</code>模块<br> 1.1 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>abp new LKN.Product <span class="token parameter variable">-t</span> module –dbms mysql –no-ui <span class="token parameter variable">-o</span> moduls<span class="token punctuation">\\</span>LKN.Product <span class="token parameter variable">-v</span> <span class="token number">7.3</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+'" alt="Alt text"></p><p>2.2、结果如图所示</p><p><img src="'+h+`" alt="Alt text"></p><h3 id="创建微服务支付模块" tabindex="-1"><a class="header-anchor" href="#创建微服务支付模块" aria-hidden="true">#</a> 创建微服务支付模块</h3><p>1、先进在<code>LKN.Microservices</code>解决方案文件夹中创建<code>LKN.Payment</code>模块<br> 1.1 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>abp new LKN.Payment <span class="token parameter variable">-t</span> module –dbms mysql –no-ui <span class="token parameter variable">-o</span> moduls<span class="token punctuation">\\</span>LKN.Payment <span class="token parameter variable">-v</span> <span class="token number">7.3</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+_+'" alt="Alt text"></p><p>2.2、结果如图所示</p><p><img src="'+x+`" alt="Alt text"></p><h3 id="创建微服务用户模块" tabindex="-1"><a class="header-anchor" href="#创建微服务用户模块" aria-hidden="true">#</a> 创建微服务用户模块</h3><p>1、先进在LKN.Microservices解决方案文件夹中创建<code>LKN.User</code>模块</p><p>1.1 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>abp new LKN.User <span class="token parameter variable">-t</span> module –dbms mysql –no-ui <span class="token parameter variable">-o</span> moduls<span class="token punctuation">\\</span>LKN.User <span class="token parameter variable">-v</span> <span class="token number">7.3</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+A+'" alt="Alt text"></p><p>2.2、结果如图所示</p><p><img src="'+f+'" alt="Alt text"></p><h3 id="电商微服务层创建" tabindex="-1"><a class="header-anchor" href="#电商微服务层创建" aria-hidden="true">#</a> 电商微服务层创建</h3><p>1、先在<code>LKN.Microservice</code>解决方案文件夹创建<code>microservices</code>文件夹<br> 命令如图所示：</p><p><img src="'+L+'" alt="Alt text"></p><p>2、然后在microservices文件夹中引入订单、商品、支付、用户4个模块中Host项目中</p><p><code>LKD.Order.HttpApi.Host</code></p><p><img src="'+N+'" alt="Alt text"></p><p><code>LKD.Payment.HttpApi.Host</code></p><p><img src="'+K+'" alt="Alt text"></p><p><code>LKD.Product.HttpApi.Host</code></p><p><img src="'+k+'" alt="Alt text"></p><p><code>LKD.User.HttpApi.Host</code></p><p><img src="'+H+'" alt="Alt text"></p><p>结果如图所示</p><p><img src="'+C+'" alt="Alt text"></p><h3 id="电商微服务聚合层创建" tabindex="-1"><a class="header-anchor" href="#电商微服务聚合层创建" aria-hidden="true">#</a> 电商微服务聚合层创建</h3><p>1、先在<code>LKN.Microservice</code>解决方案文件夹创建<code>aggregateservices</code>文件夹</p><p>命令如图所示：</p><p><img src="'+M+'" alt="Alt text"></p><h3 id="如何引入微服务电商项目" tabindex="-1"><a class="header-anchor" href="#如何引入微服务电商项目" aria-hidden="true">#</a> 如何引入微服务电商项目</h3><h4 id="模块层引入" tabindex="-1"><a class="header-anchor" href="#模块层引入" aria-hidden="true">#</a> 模块层引入</h4><p>1、先使用<code>vs2022</code>引入<code>LKN.Microservices</code>项目</p><p><img src="'+O+'" alt="Alt text"></p><p>2、然后创建<code>moduls</code>文件夹</p><p><img src="'+y+'" alt="Alt text"></p><p>2.1、在<code>moduls</code>中创建订单、商品、支付、用户解决方案文件夹</p><p><img src="'+P+'" alt="Alt text"></p><p>2.2、然后在<code>LKN.Order</code>,<code>LKN.Payment</code>,<code>LKN.Product</code>,<code>LKN.User</code>解决方案文件夹中引入项目</p><p><img src="'+w+'" alt="Alt text"></p><h3 id="微服务层" tabindex="-1"><a class="header-anchor" href="#微服务层" aria-hidden="true">#</a> 微服务层</h3><p>1、先创建<code>microservices</code>解决方案文件夹<br> 如图所示</p><p><img src="'+D+'" alt="Alt text"></p><p>2、然后在<code>microservices</code>解决方案文件夹中引入项目</p><p><img src="'+S+'" alt="Alt text"></p><h3 id="微服务聚合层引入" tabindex="-1"><a class="header-anchor" href="#微服务聚合层引入" aria-hidden="true">#</a> 微服务聚合层引入</h3><p>1、先创建<code>aggregateservices</code>解决方案文件夹</p><p>​ 如图所示：</p><p><img src="'+q+'" alt="Alt text"></p><h3 id="如何运行微服务电商项目" tabindex="-1"><a class="header-anchor" href="#如何运行微服务电商项目" aria-hidden="true">#</a> 如何运行微服务电商项目</h3><p>1、先在<code>LKN.Order.HttpApi.Host</code>项目中重新项目依赖</p><p><img src="'+V+'" alt="Alt text"></p><p>1.1、重新引入后结果如图所示</p><p><img src="'+U+'" alt="Alt text"></p><p>​ 2、然后在<code>LKN.Order.HttpApi.Host</code>项目中移除项目</p><p><img src="'+B+'" alt="Alt text"></p><p>2.1、在<code>OrderHttpApiHostModule</code>类中删除引用</p><p><img src="'+E+'" alt="Alt text"></p><p>2.2、然后在<code>LKN.Order.HttpApi.Host</code>项目中引入<code>Volo.Abp.EntityFrameworkCore.MySQL</code></p><p><img src="'+F+'" alt="Alt text"></p><p>​3、然后在<code>OrderHttpApiHostModule</code>类中修改为</p><p><img src="'+G+'" alt="Alt text"></p><p>3.1、修改后结果如图所示：</p><p><img src="'+I+'" alt="Alt text"></p><p>​ 4、然后在<code>OrderHttpApiHostMigrationsDbContextFactory</code>类中修改为</p><p><img src="'+Q+'" alt="Alt text"></p><p>4.1、修改后结果如图所示：</p><p><img src="'+R+'" alt="Alt text"></p><p>​ 5、然后在<code>OrderHttpApiHostMigrationsDbContextFactory</code>类中修改为</p><p><img src="'+T+'" alt="Alt text"></p><p>5.1、修改后结果如图所示：</p><p><img src="'+j+`" alt="Alt text"></p><h3 id="订单微服务迁移" tabindex="-1"><a class="header-anchor" href="#订单微服务迁移" aria-hidden="true">#</a> 订单微服务迁移</h3><p>1、LKN.Order.HttpApi.Host项目控制台<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet ef migrations <span class="token function">add</span> orderservice  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+z+'" alt="Alt text"></p><p>1.1 迁移文件如图所示</p><p><img src="'+J+`" alt="Alt text"></p><p>2、然后进入LKN.Order.HttpApi.Host项目控制台<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet ef database update  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+W+'" alt="Alt text"></p><p>3.Mysql数据库结果如图所示</p><p><img src="'+X+`" alt="Alt text"></p><h3 id="订单微服务启动" tabindex="-1"><a class="header-anchor" href="#订单微服务启动" aria-hidden="true">#</a> 订单微服务启动</h3><p>1、先进入LKN.Order.HttpApi.Host 项目控制台<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet run  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+Y+'" alt="Alt text"><br><img src="'+Z+'" alt="Alt text"></p><h3 id="订单微服务访问" tabindex="-1"><a class="header-anchor" href="#订单微服务访问" aria-hidden="true">#</a> 订单微服务访问</h3><p>1、先进入浏览器<br> 输入地址：<code> https://localhost:44392</code></p><p><img src="'+$+`" alt="Alt text"></p><p>2、在<code>OrderHttpApiHostModule</code> 中，配置自动生在API接口</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var hostingEnvironment = context.Services.GetHostingEnvironment();
        var configuration = context.Services.GetConfiguration();
        Configure&lt;AbpDbContextOptions&gt;(options =&gt;
        {
            options.UseMySQL();
        });

        //自动生成api 
        ConfigureConventionalControllers();
        .....
    }

    //自动生成 api 接口方法
    private void ConfigureConventionalControllers()
    {
        Configure&lt;AbpAspNetCoreMvcOptions&gt;(options =&gt;
        {
            options.ConventionalControllers.Create(typeof(OrderApplicationModule).Assembly, options =&gt;
            {
                options.RootPath = &quot;OrderService&quot;;
            });
        });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,132);function re(ce,te){const i=t("router-link");return o(),n("div",null,[se,e("nav",ie,[e("ul",null,[e("li",null,[a(i,{to:"#目录"},{default:r(()=>[s("目录")]),_:1})]),e("li",null,[a(i,{to:"#微服务电商项目落地"},{default:r(()=>[s("微服务电商项目落地")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#落地技术前提"},{default:r(()=>[s("落地技术前提")]),_:1})]),e("li",null,[a(i,{to:"#落地技术工具"},{default:r(()=>[s("落地技术工具")]),_:1})]),e("li",null,[a(i,{to:"#如何创建微服务电商项目"},{default:r(()=>[s("如何创建微服务电商项目")]),_:1})]),e("li",null,[a(i,{to:"#微服务电商项目创建"},{default:r(()=>[s("微服务电商项目创建")]),_:1})]),e("li",null,[a(i,{to:"#创建微服务解决方案"},{default:r(()=>[s("创建微服务解决方案")]),_:1})]),e("li",null,[a(i,{to:"#创建微服务订单模块"},{default:r(()=>[s("创建微服务订单模块")]),_:1})]),e("li",null,[a(i,{to:"#创建微服务商品模块"},{default:r(()=>[s("创建微服务商品模块")]),_:1})]),e("li",null,[a(i,{to:"#创建微服务支付模块"},{default:r(()=>[s("创建微服务支付模块")]),_:1})]),e("li",null,[a(i,{to:"#创建微服务用户模块"},{default:r(()=>[s("创建微服务用户模块")]),_:1})]),e("li",null,[a(i,{to:"#电商微服务层创建"},{default:r(()=>[s("电商微服务层创建")]),_:1})]),e("li",null,[a(i,{to:"#电商微服务聚合层创建"},{default:r(()=>[s("电商微服务聚合层创建")]),_:1})]),e("li",null,[a(i,{to:"#如何引入微服务电商项目"},{default:r(()=>[s("如何引入微服务电商项目")]),_:1})]),e("li",null,[a(i,{to:"#微服务层"},{default:r(()=>[s("微服务层")]),_:1})]),e("li",null,[a(i,{to:"#微服务聚合层引入"},{default:r(()=>[s("微服务聚合层引入")]),_:1})]),e("li",null,[a(i,{to:"#如何运行微服务电商项目"},{default:r(()=>[s("如何运行微服务电商项目")]),_:1})]),e("li",null,[a(i,{to:"#订单微服务迁移"},{default:r(()=>[s("订单微服务迁移")]),_:1})]),e("li",null,[a(i,{to:"#订单微服务启动"},{default:r(()=>[s("订单微服务启动")]),_:1})]),e("li",null,[a(i,{to:"#订单微服务访问"},{default:r(()=>[s("订单微服务访问")]),_:1})])])])])]),ae])}const ne=c(ee,[["render",re],["__file","abpmicroservices0001.html.vue"]]);export{ne as default};