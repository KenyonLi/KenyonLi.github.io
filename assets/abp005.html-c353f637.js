import{_ as o,r as l,o as s,c as d,a as e,b as n,w as r,d as t,e as a}from"./app-c1c3c937.js";const c="/images/abp/abp005/abp005_0001image.png",u="/images/abp/abp005/abp005_0002image.png",v="/images/abp/abp005/abp005_0003image.png",p={},b=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),t(" 目录")],-1),m={class:"table-of-contents"},g=a(`<h2 id="核心项目-电商项目落地实战-三-仓储、服务层优化" tabindex="-1"><a class="header-anchor" href="#核心项目-电商项目落地实战-三-仓储、服务层优化" aria-hidden="true">#</a> 核心项目-电商项目落地实战(三)-仓储、服务层优化</h2><h3 id="电商服务层优化" tabindex="-1"><a class="header-anchor" href="#电商服务层优化" aria-hidden="true">#</a> 电商服务层优化</h3><blockquote><ul><li>1 LKN.EBusiness.Application</li><li>2 LKN.EBusiness.Application.Contracts</li></ul></blockquote><h3 id="服务层优化-针对产品服务-依赖abp框架的接口服务、实现服务来完善" tabindex="-1"><a class="header-anchor" href="#服务层优化-针对产品服务-依赖abp框架的接口服务、实现服务来完善" aria-hidden="true">#</a> 服务层优化，针对产品服务，依赖abp框架的接口服务、实现服务来完善</h3><div class="custom-container tip"><p class="custom-container-title"> </p><p>根据abp框架实现 常用的添加、修改、删除、查询</p><blockquote><ul><li>1 、在<strong>Application.Contracts</strong>层中添加 <strong>IProudectAppService</strong> 服务接口，继承 <strong>ICrudAppService&lt;ProductDto,Guid,PagedAndSortedResultRequestDto,CreateProductDto,UpdateProductDto&gt;</strong> ，这时需要创建好返回实体的Dto（<strong>PrductDto</strong>）、引用abp框架中的“<strong>PagedAndSortedResultRequestDto</strong>”或者自己创建自定义查询的Dto对象、创建添加“<strong>CreateProductDto</strong>”、 创建更新“<strong>UpdateProductDto</strong>”等实体对象。</li><li>2 、在<strong>Application</strong> 层中添加 <strong>ProudectAppService</strong> 实现服务接口，实现该接口我们使用abp框架提供的实现在来完成，如：<strong>CrudAppService&lt;Product, ProductDto, Guid, PagedAndSortedResultRequestDto, CreateProductDto, UpdateProductDto&gt;, IProductAppService</strong> 泛型中的 <strong>Product</strong> 聚合根据实体、<strong>ProductDto</strong>返回实体 、 <strong>Guid</strong> 表主键id类型 、<strong>PagedAndSortedResultRequestDto</strong> 查询条件Dto 、 <strong>CreateProductDto</strong>创建产品实例Dto、 <strong>UpdateProductDto</strong> 更新产品实例Dto等。</li><li>3 、Dto表的关联映射配置，在<strong>Application</strong>层，<strong>EBusinessApplicationAutoMapperProfile</strong>文件中</li></ul></blockquote></div><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> public EBusinessApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap&lt;Product, ProductDto&gt;();
        CreateMap&lt;PagedAndSortedResultRequestDto, Product&gt;();
        CreateMap&lt;CreateProductDto, Product&gt;();
        CreateMap&lt;UpdateProductDto, Product&gt;();
        CreateMap&lt;ProductAttrQueryDto, Product&gt;();
        CreateMap&lt;ProductImageDto, ProductImage&gt;();
        CreateMap&lt;ProductImage, ProductImageDto&gt;();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现部分代码" tabindex="-1"><a class="header-anchor" href="#实现部分代码" aria-hidden="true">#</a> 实现部分代码</h3><hr><blockquote><ul><li>1、服务层</li></ul></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> public class ProductAppService : CrudAppService&lt;Product, ProductDto, Guid, PagedAndSortedResultRequestDto, CreateProductDto, UpdateProductDto&gt;, IProductAppService
    {
        public IProductAbpRepository _productAbpRepository;

        public ProductAppService(IProductAbpRepository repository) : base(repository)
        {
            _productAbpRepository = repository;
        }

        public IEnumerable&lt;ProductDto&gt; GetProductAndImage()
        {
            // 1、查询所有和图片
            IEnumerable&lt;Product&gt; products = _productAbpRepository.GetProductAndImages();

            // 2、然后映射
            return ObjectMapper.Map&lt;IEnumerable&lt;Product&gt;, List&lt;ProductDto&gt;&gt;(products);
        }

        public IEnumerable&lt;ProductDto&gt; GetProductByAttr(ProductAttrQueryDto createProductDto)
        {
            // 1、查询所有和图片
            IEnumerable&lt;Product&gt; products = _productAbpRepository.GetProductByName(createProductDto.productName);

            // 2、然后映射
            return ObjectMapper.Map&lt;IEnumerable&lt;Product&gt;, List&lt;ProductDto&gt;&gt;(products);
        }

        public ProductTotaLDto GetProductTotals()
        {
            throw new NotImplementedException();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>2 服务接口层</li></ul></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    /// &lt;summary&gt;
    /// 商品服务
    /// &lt;/summary&gt;
    public interface IProductAppService:ICrudAppService&lt;ProductDto,Guid,PagedAndSortedResultRequestDto,CreateProductDto,UpdateProductDto&gt;
    {
        public IEnumerable&lt;ProductDto&gt; GetProductAndImage();

        public IEnumerable&lt;ProductDto&gt; GetProductByAttr(ProductAttrQueryDto createProductDto);

        public ProductTotaLDto GetProductTotals();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见异常处理" tabindex="-1"><a class="header-anchor" href="#常见异常处理" aria-hidden="true">#</a> 常见异常处理</h2><h4 id="注意命令规范" tabindex="-1"><a class="header-anchor" href="#注意命令规范" aria-hidden="true">#</a> 注意命令规范</h4><p>如：<code>LKN.Order.Application</code> 和 <code>LKN.Order.Application.Contracts</code> 定义接口与实现时，<code>IxxxxAbpService</code>接口 与 <code>xxxxAbpService</code> ,其中 <code>xxxx</code>名称要一致，否则在 <code>LKN.Order.HttpApi</code>服务层，调用时<code>Autofac</code> 映射报异常：</p><p><img src="`+c+'" alt="Alt text"></p><p><code>LKN.Order.HttpApi</code> 调用 <code>IOrderAppservice</code> 时 <img src="'+u+`" alt="Alt text"></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[08:36:54 ERR] ---------- RemoteServiceErrorInfo ----------
{
  &quot;code&quot;: null,
  &quot;message&quot;: &quot;对不起,在处理你的请求期间,产生了一个服务器内部错误!&quot;,
  &quot;details&quot;: null,
  &quot;data&quot;: {
    &quot;ActivatorChain&quot;: &quot;LKN.Order.Orders.OrdersController&quot;
  },
  &quot;validationErrors&quot;: null
}

[08:36:54 ERR] An exception was thrown while activating LKN.Order.Orders.OrdersController.
Autofac.Core.DependencyResolutionException: An exception was thrown while activating LKN.Order.Orders.OrdersController.
 ---&gt; Autofac.Core.DependencyResolutionException: None of the constructors found on type &#39;LKN.Order.Orders.OrdersController&#39; can be invoked with the available services and parameters:
Cannot resolve parameter &#39;LKN.Order.Orders.IOrderAppService OrderAppService&#39; of constructor &#39;Void .ctor(LKN.Order.Orders.IOrderAppService)&#39;.

See https://autofac.rtfd.io/help/no-constructors-bindable for more info.
   at Autofac.Core.Activators.Reflection.ReflectionActivator.&lt;&gt;c__DisplayClass14_0.&lt;UseSingleConstructorActivation&gt;b__0(ResolveRequestContext ctxt, Action\`1 next)
   at Autofac.Core.Resolving.Pipeline.ResolvePipelineBuilder.&lt;&gt;c__DisplayClass14_0.&lt;BuildPipeline&gt;b__1(ResolveRequestContext ctxt)
   at Autofac.Core.Resolving.Middleware.DisposalTrackingMiddleware.Execute(ResolveRequestContext context, Action\`1 next)
   at Autofac.Core.Resolving.Pipeline.ResolvePipelineBuilder.&lt;&gt;c__DisplayClass14_0.&lt;BuildPipeline&gt;b__1(ResolveRequestContext ctxt)
   at Autofac.Builder.RegistrationBuilder\`3.&lt;&gt;c__DisplayClass41_0.&lt;PropertiesAutowired&gt;b__0(ResolveRequestContext ctxt, Action\`1 next)
   at Autofac.Core.Resolving.Pipeline.ResolvePipelineBuilder.&lt;&gt;c__DisplayClass14_0.&lt;BuildPipeline&gt;b__1(ResolveRequestContext ctxt)
   at Autofac.Core.Resolving.Middleware.ActivatorErrorHandlingMiddleware.Execute(ResolveRequestContext context, Action\`1 next)
   --- End of inner exception stack trace ---
   at Autofac.Core.Resolving.Middleware.ActivatorErrorHandlingMiddleware.Execute(ResolveRequestContext context, Action\`1 next)
   at Autofac.Core.Resolving.Pipeline.ResolvePipelineBuilder.&lt;&gt;c__DisplayClass14_0.&lt;BuildPipeline&gt;b__1(ResolveRequestContext ctxt)
   at Autofac.Core.Resolving.Pipeline.ResolvePipelineBuilder.&lt;&gt;c__DisplayClass14_0.&lt;BuildPipeline&gt;b__1(ResolveRequestContext ctxt)
   at Autofac.Core.Resolving.Middleware.SharingMiddleware.Execute(ResolveRequestContext context, Action\`1 next)
   at Autofac.Core.Resolving.Pipeline.ResolvePipelineBuilder.&lt;&gt;c__DisplayClass14_0.&lt;BuildPipeline&gt;b__1(ResolveRequestContext ctxt)
   at Autofac.Core.Resolving.Pipeline.ResolvePipelineBuilder.&lt;&gt;c__DisplayClass14_0.&lt;BuildPipeline&gt;b__1(ResolveRequestContext ctxt)
   at Autofac.Core.Resolving.Middleware.CircularDependencyDetectorMiddleware.Execute(ResolveRequestContext context, Action\`1 next)
   at Autofac.Core.Resolving.Pipeline.ResolvePipelineBuilder.&lt;&gt;c__DisplayClass14_0.&lt;BuildPipeline&gt;b__1(ResolveRequestContext ctxt)
   at Autofac.Core.Resolving.ResolveOperation.GetOrCreateInstance(ISharingLifetimeScope currentOperationScope, ResolveRequest request)
   at Autofac.Core.Resolving.ResolveOperation.ExecuteOperation(ResolveRequest request)
   at Autofac.ResolutionExtensions.TryResolveService(IComponentContext context, Service service, IEnumerable\`1 parameters, Object&amp; instance)
   at Autofac.ResolutionExtensions.ResolveService(IComponentContext context, Service service, IEnumerable\`1 parameters)
   at Microsoft.AspNetCore.Mvc.Controllers.ControllerFactoryProvider.&lt;&gt;c__DisplayClass6_0.&lt;CreateControllerFactory&gt;g__CreateController|0(ControllerContext controllerContext)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Next(State&amp; next, Scope&amp; scope, Object&amp; state, Boolean&amp; isCompleted)
   at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.InvokeInnerFilterAsync()
--- End of stack trace from previous location ---
   at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.&lt;InvokeNextExceptionFilterAsync&gt;g__Awaited|26_0(ResourceInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
[08:36:54 ERR] ---------- Exception Data ----------
ActivatorChain = LKN.Order.Orders.OrdersController

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h5><p>就是把<code>LKN.Order.Application</code>应用服务层的<code>**Orders**AppService</code>实现类名称，跟<code>LKN.Order.Application.Contracts</code>的<code>I**Order**AppService</code>接口名称，修改为<code> **Order** AppService</code>和 <code>I**Order**AppService</code> 即可。</p><p><img src="`+v+'" alt="Alt text"></p>',21);function A(C,P){const i=l("router-link");return s(),d("div",null,[b,e("nav",m,[e("ul",null,[e("li",null,[n(i,{to:"#目录"},{default:r(()=>[t("目录")]),_:1})]),e("li",null,[n(i,{to:"#核心项目-电商项目落地实战-三-仓储、服务层优化"},{default:r(()=>[t("核心项目-电商项目落地实战(三)-仓储、服务层优化")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#电商服务层优化"},{default:r(()=>[t("电商服务层优化")]),_:1})]),e("li",null,[n(i,{to:"#服务层优化-针对产品服务-依赖abp框架的接口服务、实现服务来完善"},{default:r(()=>[t("服务层优化，针对产品服务，依赖abp框架的接口服务、实现服务来完善")]),_:1})]),e("li",null,[n(i,{to:"#实现部分代码"},{default:r(()=>[t("实现部分代码")]),_:1})])])]),e("li",null,[n(i,{to:"#常见异常处理"},{default:r(()=>[t("常见异常处理")]),_:1})])])]),g])}const R=o(p,[["render",A],["__file","abp005.html.vue"]]);export{R as default};
