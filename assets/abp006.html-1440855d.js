import{_ as l,r as t,o as d,c as r,a as e,b as n,w as s,d as a,e as c}from"./app-c1c3c937.js";const u="/images/abp/abp6_0003image.png",v="/images/abp/abp6_0004image.png",o="/images/abp/abp6_0005image.png",b="/images/abp/abp6_0006image.png",m="/images/abp/abp6_0007image.png",p="/images/abp/abp6_0008image.png",g="/images/abp/abp6_0009image.png",h="/images/abp/abp6_0001image.png",_="/images/abp/abp6_0002image.png",A={},f=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),a(" 目录")],-1),P={class:"table-of-contents"},B=c('<h2 id="一、abp框架优化网络接口层" tabindex="-1"><a class="header-anchor" href="#一、abp框架优化网络接口层" aria-hidden="true">#</a> 一、ABP框架优化网络接口层</h2><h3 id="_1、lkn-ebusiness-httpapi-接口-自动生成自定义控制器-api-接口" tabindex="-1"><a class="header-anchor" href="#_1、lkn-ebusiness-httpapi-接口-自动生成自定义控制器-api-接口" aria-hidden="true">#</a> 1、LKN.EBusiness.HttpApi 接口，自动生成自定义控制器“API”接口</h3><div class="custom-container tip"><p class="custom-container-title">开启自动生成API配置</p><p>在<strong>LKN.EBusiness.HttpApi.Host</strong> 层中“<strong>EBusinessHttpApiHostModule</strong>” , <strong>configureServices</strong>配置自动生成API接口。</p></div><p><img src="'+u+'" alt="Alt text"></p><blockquote><ul><li>1.1 修改ABP框架默认的URL地址名称 代码设置： <img src="'+v+'" alt="Alt text"></li><li>1.2 UI界面效果：把默认的“App”修改为“EBusiness” <img src="'+o+'" alt="Alt text"></li></ul></blockquote><h3 id="_2、abp架构属性-remoteservice-isenabled-false-可以禁止abp架构默认的生成的api接口-可以作用于类、方法中。" tabindex="-1"><a class="header-anchor" href="#_2、abp架构属性-remoteservice-isenabled-false-可以禁止abp架构默认的生成的api接口-可以作用于类、方法中。" aria-hidden="true">#</a> 2、ABP架构属性 <strong>[RemoteService(IsEnabled = false)]</strong> 可以禁止ABP架构默认的生成的API接口，可以作用于类、方法中。</h3><p>默认没有添加 <strong>[RemoteService(IsEnabled = false)]</strong><img src="'+b+'" alt="Alt text"></p><div class="custom-container tip"><p class="custom-container-title">[RemoteService(IsEnabled = false)] 类</p><p>禁止所有的类方法、包括自己定义的方法。</p></div><div class="custom-container tip"><p class="custom-container-title">[RemoteService(IsEnabled = false)] 类方法中</p><p>只禁止标记的类方法。 <img src="'+m+'" alt="Alt text"></p></div><h3 id="_3、让自己定义服务类-使用abp架构生成api接口-只需要继承abp的-ebusinessappservice-即可以实现。" tabindex="-1"><a class="header-anchor" href="#_3、让自己定义服务类-使用abp架构生成api接口-只需要继承abp的-ebusinessappservice-即可以实现。" aria-hidden="true">#</a> 3、让自己定义服务类，使用ABP架构生成API接口，只需要继承ABP的“EBusinessAppService”即可以实现。</h3><div class="custom-container tip"><p class="custom-container-title">如果自己定义的接口名称与ABP接口名称相同就会报错</p><p>如图 <img src="'+p+'" alt="Alt text"></p><blockquote><ul><li>1、解决方法，就是避免自己定义接口与ABP框架定义名称相同，或者类名称不要与ABP命名类的名称相同，<br> 如：ABP服务层规范命名，“Product<s>AppService</s>” 架构会自动去掉“<s>AppService</s>”，生成API接口名称就是“Product”。避免冲突自己定义的<br> 服务层接口取名就“ProductY<s>Service</s>”名称，这样ABP框架帮我们生成API接口时，就会生成“ProductY”。</li><li>2、解决方法，就是避免自己定义接口与ABP框架定义名称不要与框架相同，即可。 <img src="'+g+`" alt="Alt text"></li></ul></blockquote></div><h2 id="二、abp框架优化网络web层" tabindex="-1"><a class="header-anchor" href="#二、abp框架优化网络web层" aria-hidden="true">#</a> 二、ABP框架优化网络web层</h2><div class="custom-container tip"><p class="custom-container-title">视图</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>@page
@using LKN.EBusiness.Web.Pages.Products
@using Microsoft.AspNetCore.Authorization
@using Microsoft.Extensions.Localization
@model IndexModel
@*@inject IStringLocalizer&lt;EBusinessResource&gt; L*@
@inject IAuthorizationService AuthorizationService
@section scripts
{
    &lt;abp-script src=&quot;/Pages/Products/Index.js&quot;/&gt;
}

&lt;abp-card&gt;
    &lt;abp-card-header&gt;
        &lt;abp-row&gt;
            &lt;abp-column size-md=&quot;_6&quot;&gt;
                &lt;abp-card-title&gt;&quot;商品&quot;&lt;/abp-card-title&gt;
            &lt;/abp-column&gt;
            &lt;abp-column size-md=&quot;_6&quot; class=&quot;text-right&quot;&gt;
                    &lt;abp-button id=&quot;NewBookButton&quot;
                                text=&quot;添加&quot;
                                icon=&quot;plus&quot;
                                button-type=&quot;Primary&quot;/&gt;
            &lt;/abp-column&gt;
        &lt;/abp-row&gt;
    &lt;/abp-card-header&gt;
    &lt;abp-card-body&gt;
        &lt;abp-table striped-rows=&quot;true&quot; id=&quot;BooksTable&quot;&gt;&lt;/abp-table&gt;
    &lt;/abp-card-body&gt;
&lt;/abp-card&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">Js</p><p>前端请求是通过ajax请后端API接口的，libs库调用后端方法时，需要添加命名空间名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$(function () {
    var l = abp.localization.getResource(&#39;EBusiness&#39;);
    var createModal = new abp.ModalManager(abp.appPath + &#39;Products/CreateModal&#39;);
    var editModal = new abp.ModalManager(abp.appPath + &#39;Products/EditModal&#39;);

    var dataTable = $(&#39;#BooksTable&#39;).DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[1, &quot;asc&quot;]],
            searching: false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(***服务层命名空间**.product.getList),
            columnDefs: [
                {
                    title: l(&#39;Actions&#39;),
                    rowAction: {
                        items:
                            [
                                {
                                    text: l(&#39;Edit&#39;),
                                    visible: abp.auth.isGranted(&#39;BookStore.Books.Edit&#39;),
                                    action: function (data) {
                                        editModal.open({ id: data.record.id });
                                    }
                                },
                                {
                                    text: l(&#39;Delete&#39;),
                                    visible: abp.auth.isGranted(&#39;BookStore.Books.Delete&#39;),
                                    confirmMessage: function (data) {
                                        return l(
                                            &#39;BookDeletionConfirmationMessage&#39;,
                                            data.record.name
                                        );
                                    },
                                    action: function (data) {
                                        acme.bookStore.books.book
                                            .delete(data.record.id)
                                            .then(function () {
                                                abp.notify.info(
                                                    l(&#39;SuccessfullyDeleted&#39;)
                                                );
                                                dataTable.ajax.reload();
                                            });
                                    }
                                }
                            ]
                    }
                },
                {
                    title: l(&#39;ProductTitle&#39;),
                    data: &quot;productTitle&quot;
                },
                {
                    title: l(&#39;ProductPrice&#39;),
                    data: &quot;productPrice&quot;
                },
                {
                    title: l(&#39;Type&#39;),
                    data: &quot;type&quot;,
                    render: function (data) {
                        return l(&#39;Enum:BookType:&#39; + data);
                    }
                },
                {
                    title: l(&#39;PublishDate&#39;),
                    data: &quot;publishDate&quot;,
                    render: function (data) {
                        return luxon
                            .DateTime
                            .fromISO(data, {
                                locale: abp.localization.currentCulture.name
                            }).toLocaleString();
                    }
                },
                {
                    title: l(&#39;CreationTime&#39;),
                    data: &quot;creationTime&quot;,
                    render: function (data) {
                        return luxon
                            .DateTime
                            .fromISO(data, {
                                locale: abp.localization.currentCulture.name
                            }).toLocaleString(luxon.DateTime.DATETIME_SHORT);
                    }
                }
            ]
        })
    );

    createModal.onResult(function () {
        dataTable.ajax.reload();
    });

    editModal.onResult(function () {
        dataTable.ajax.reload();
    });

    $(&#39;#NewBookButton&#39;).click(function (e) {
        e.preventDefault();
        createModal.open();
    });
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>总结：从自动API控制器想到：技术目的为了代替人力，提升工作效率。技术代理人力的思想。</p><p>进一歩：面向对象的思想<br> 风格--&gt;乐乐同学--&gt;写代码<br> 进一步：架构思维</p><h2 id="三、abp框架原理分析" tabindex="-1"><a class="header-anchor" href="#三、abp框架原理分析" aria-hidden="true">#</a> 三、ABP框架原理分析</h2><p>面向接口编程</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="`+h+'" alt="Alt text"></h2><p><img src="'+_+'" alt="Alt text"></p>',20);function x(q,k){const i=t("router-link");return d(),r("div",null,[f,e("nav",P,[e("ul",null,[e("li",null,[n(i,{to:"#目录"},{default:s(()=>[a("目录")]),_:1})]),e("li",null,[n(i,{to:"#一、abp框架优化网络接口层"},{default:s(()=>[a("一、ABP框架优化网络接口层")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#_1、lkn-ebusiness-httpapi-接口-自动生成自定义控制器-api-接口"},{default:s(()=>[a("1、LKN.EBusiness.HttpApi 接口，自动生成自定义控制器“API”接口")]),_:1})]),e("li",null,[n(i,{to:"#_2、abp架构属性-remoteservice-isenabled-false-可以禁止abp架构默认的生成的api接口-可以作用于类、方法中。"},{default:s(()=>[a("2、ABP架构属性 [RemoteService(IsEnabled = false)] 可以禁止ABP架构默认的生成的API接口，可以作用于类、方法中。")]),_:1})]),e("li",null,[n(i,{to:"#_3、让自己定义服务类-使用abp架构生成api接口-只需要继承abp的-ebusinessappservice-即可以实现。"},{default:s(()=>[a("3、让自己定义服务类，使用ABP架构生成API接口，只需要继承ABP的“EBusinessAppService”即可以实现。")]),_:1})])])]),e("li",null,[n(i,{to:"#二、abp框架优化网络web层"},{default:s(()=>[a("二、ABP框架优化网络web层")]),_:1})]),e("li",null,[n(i,{to:"#三、abp框架原理分析"},{default:s(()=>[a("三、ABP框架原理分析")]),_:1})]),e("li",null,[n(i,{to:"#"})])])]),B])}const S=l(A,[["render",x],["__file","abp006.html.vue"]]);export{S as default};
