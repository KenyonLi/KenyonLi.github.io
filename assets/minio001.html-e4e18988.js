import{_ as o,r as t,o as m,c,a as n,b as e,w as a,d as i,e as d}from"./app-c1c3c937.js";const u="/images/minio/minio001_0001image.png",p="/images/minio/minio001_0002image.png",v="/images/minio/minio001_0003image.png",b="/images/minio/minio001_0004image.png",g="/images/minio/minio001_0005image.png",h="/images/minio/minio001_0006image.png",k="/images/minio/minio001_0007image.png",x="/images/minio/minio001_0008image.png",_="/images/minio/minio001_0009image.png",q="/images/minio/minio001_0010image.png",f="/images/minio/minio001_0011image.png",M="/images/minio/minio001_0012image.png",C="/images/minio/minio001_0013image.png",A="/images/minio/minio001_0014image.png",F="/images/minio/minio001_0015image.png",y="/images/minio/minio001_0016image.png",w="/images/minio/minio001_0017image.png",L="/images/minio/minio001_0018image.png",O="/images/minio/minio001_0019image.png",W="/images/minio/minio001_0020image.png",I="/images/minio/minio001_0021image.png",P="/images/minio/minio001_0022image.png",S="/images/minio/minio001_0023image.png",B="/images/minio/minio001_0024image.png",N="/images/minio/minio001_0025image.png",R="/images/minio/minio001_0026image.png",E="/images/minio/minio001_0027image.png",D="/images/minio/minio001_0028image.png",j="/images/minio/minio001_0029image.png",U="/images/minio/minio001_0030image.png",G="/images/minio/minio001_0031image.png",X="/images/minio/minio001_0032image.png",z="/images/minio/minio001_0033image.png",H="/images/minio/minio001_0034image.png",T="/images/minio/minio001_0035image.png",J="/images/minio/minio001_0036image.png",$="/images/minio/minio001_0037image.png",V="/images/minio/minio001_0038image.png",l="/images/minio/minio001_0039image.png",K="/images/minio/minio001_0040image.png",Y="/images/minio/minio001_0041image.png",Z="/images/minio/minio001_0042image.png",Q="/images/minio/minio001_0043image.png",nn="/images/minio/minio001_0044image.png",en="/images/minio/minio001_0045image.png",sn="/images/minio/minio001_0046image.png",an="/images/minio/minio001_0047image.png",ln="/images/minio/minio001_0048image.png",tn="/images/minio/minio001_0049image.png",dn="/images/minio/minio001_0050image.png",rn="/images/minio/minio001_0051image.png",on="/images/minio/minio001_0052image.png",mn="/images/minio/minio001_0053image.png",cn="/images/minio/minio001_0054image.png",un="/images/minio/minio001_0055image.png",pn="/images/minio/minio001_0056image.png",vn="/images/minio/minio001_0057image.png",bn={},gn=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),hn={class:"table-of-contents"},kn=d('<h2 id="分布式文件系统中间件-minio" tabindex="-1"><a class="header-anchor" href="#分布式文件系统中间件-minio" aria-hidden="true">#</a> 分布式文件系统中间件-Minio</h2><h3 id="什么是minio" tabindex="-1"><a class="header-anchor" href="#什么是minio" aria-hidden="true">#</a> 什么是Minio</h3><p>Minio是分布式文件系统。指：文件可以存储在多个主机中 如图所示：</p><p><img src="'+u+'" alt="Alt text"></p><p>文件：<strong>图片，视频，音频</strong>等等<br> 主机：linux 、 windows 、 mac 等等<br> 图片可以存储到多个linux,或者多个windows,或者从个Mac 换句话说：Minio就是OSS。对象存储系统。对象代表的是任何文件都可以存储。一般，目前主流的云平台，基本使用的都是OSS存储文件方式。Minio中存储最大文件可以达到5TB。任何类型的文件都是支持的。</p><h3 id="什么地方使用minio" tabindex="-1"><a class="header-anchor" href="#什么地方使用minio" aria-hidden="true">#</a> 什么地方使用Minio</h3><p>Minio主要使用在微服务中。单体系统中，图片资源是比较少的，所以，没有必要使用分布文件系统。</p><h3 id="微服务系统中为什么要使用minio" tabindex="-1"><a class="header-anchor" href="#微服务系统中为什么要使用minio" aria-hidden="true">#</a> 微服务系统中为什么要使用Minio</h3><p>微服务系统有很多，包含电商微服务系统，包含OA微服务系统，以及其他不同微服务系统。主要通过电商微服务系统进行举例说明为什么要使用Minio?<br> 先得到一个电商微服务系统。如何得到？电商微服务系统是由单体电商系统而来</p><h4 id="单体电商系统" tabindex="-1"><a class="header-anchor" href="#单体电商系统" aria-hidden="true">#</a> 单体电商系统</h4><p>搜索商品实现过程，客户端发起查询请求——&gt;电商系统——&gt;电商数据库。</p><p>如果客户端有这一个要求，查询订单时候，需要查询出商品。如何实现这个规则要求呢？</p><p>查询订单实现过程，客户端发武查询请求——&gt;电商系统——&gt;电商数据库——&gt;订单表和商品表进行关联。</p><p>当时，如果电商系统并发量、业务量、数据量全部上升之后，单体系统查询，添加、修改、删除性能会急剧下降。进一步甚至会导致系统宕机（宕机也就无法访问），如果系统出现了宕机问题，直接导致系统无法访问。</p><p>在允许电商系统并发量、业务量、数据量上升的情况下，如何提升系统性能，防止系统宕机呢？<br> 方案：需要进行系统业务模块拆分<br> 结果：形成电商微服务系统</p><h4 id="电商微服务系统" tabindex="-1"><a class="header-anchor" href="#电商微服务系统" aria-hidden="true">#</a> 电商微服务系统</h4><p><img src="'+p+'" alt="Alt text"></p><p>在微服务电商系统中，我们主要看一个业务场景，搜索商品业务场景。</p><p>搜索商品实现过程，客户端发起查询请求——&gt;电商系统——&gt;电商数据库。</p><p>如果客户端有这样一个要求，查询订单的时候，需要搜索出商品。如何实现这个规则要求呢？<br> 查询订单实现过程，客户端发起查询请求——&gt;电商网站——&gt;订单微服务——&gt;电商数据库。<br> 电商网站——&gt;商品微服务——&gt;电商数据库。<br> 一次订单查询需要涉及到2个微服务（订单微服务，商品微服务）查询。 如果并发量比较大，会导致2个微服务查询性能下降。因为是同步请求，同步请求并发处理有限<br> 如果两个微服务其中一个微服务宕机了，会导致无法进行查询。<br> 如何提升系统性能和防止系统宕机呢？<br> 方案：使用Minio</p><h4 id="电商微服务系统-上传图片" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-上传图片" aria-hidden="true">#</a> 电商微服务系统-上传图片</h4><p><img src="'+v+'" alt="Alt text"></p><h4 id="电商微服务系统-电商网站拆分" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-电商网站拆分" aria-hidden="true">#</a> 电商微服务系统-电商网站拆分</h4><p><img src="'+b+'" alt="Alt text"></p><h4 id="电商微服务系统-minio" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-minio" aria-hidden="true">#</a> 电商微服务系统-Minio</h4><p><img src="'+g+'" alt="Alt text"></p><p>在微服务电商系统中，我们主要看一个业务场景，搜索商品业务场景。<br> 搜索商品实现过程，客户端发起查询请求——&gt;电商系统——&gt;商品微服务——&gt;电商数据库。<br> 如果客户端有这样一个要求，查询订单的时候，需要查询出商品。如何实现这个规则要求呢？<br> 查询订单实现过程，客户端发起查询请求——&gt;电商网站——&gt;Minio。<br> 在Minio中可以一次性查询出订单商品数据。而且还可以提升性能<br> 总结：这就是我们在电商系统中使用Minio原因<br> 1、先从单体电商系统分析<br> 2、然后再从电商微服务系统分析<br> 3、最后引入 Minio<br> 4、由此得到微服务系统为什么要使用Minio</p><h3 id="微服务中如何落地minio" tabindex="-1"><a class="header-anchor" href="#微服务中如何落地minio" aria-hidden="true">#</a> 微服务中如何落地Minio</h3><p>前提<br> 1、电商微服务系统<br> 2、Minio<br> 3、mc<br> 步骤<br> 1、电商微服务系统准备<br> 通过vs2022创建Net7电商微服务系统<br><img src="'+h+'" alt="Alt text"></p><p>2、Minio准备</p>',30),xn=n("br",null,null,-1),_n={href:"https://dl.min.io/server/minio/release/windows-amd64/minio.exe",target:"_blank",rel:"noopener noreferrer"},qn=d('<p>​ 如图所示</p><p><img src="'+k+'" alt="Alt text"></p><p>3、mc准备<br> 下载地址：https://dl.min.io/client/mc/release/windows-amd64/mc.exe</p><p>​ 如图所示</p><p><img src="'+x+'" alt="Alt text"></p><h4 id="上传商品图片业务场景落地" tabindex="-1"><a class="header-anchor" href="#上传商品图片业务场景落地" aria-hidden="true">#</a> 上传商品图片业务场景落地</h4><p>条件<br> 1、电商微服务系统LKN.EBusiness<br> 2、Minio<br> 3、客户端<br> 步骤<br> 1、先进行电商微服务系统LKN.EBusiness 1.1 在项目中通过nuget引入Minio</p><p><img src="'+_+'" alt="Alt text"></p><p>1.2、先在商品网站中创建ProductController类</p><p><img src="'+q+`" alt="Alt text"></p><p>然后再ProductController类添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Minio;

namespace LKN.EBusiness.Controllers
{
    /// &lt;summary&gt;
    /// 商品图片控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductFileController : ControllerBase
    {

        private readonly ILogger&lt;ProductFileController&gt; _logger;

        public ProductFileController(ILogger&lt;ProductFileController&gt; logger)
        {
            _logger = logger;
        }

        /// &lt;summary&gt;
        /// 文件上传
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost(&quot;Upload&quot;)]
        public IActionResult Upload(IFormFile formFile)
        {
            // 2.1 创建MinioClient客户端
            MinioClient minioClient = new MinioClient(&quot;127.0.0.1:9000&quot;, &quot;minioadmin&quot;, &quot;minioadmin&quot;);

            // 2.2 创建文件桶
            if (!minioClient.BucketExistsAsync(&quot;product&quot;).Result)
            {
                minioClient.MakeBucketAsync(&quot;product&quot;).Wait();
            }

            // 2.3 上传文件
            minioClient.PutObjectAsync(&quot;product&quot;, formFile.FileName, formFile.OpenReadStream(), formFile.Length).Wait();

            _logger.LogInformation($&quot;文件:{formFile.FileName}上传到MinIO成功&quot;);

            return new JsonResult(&quot;上传成功&quot;);
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、Minio准备 2.1 先进入到Minio目录</p><p><img src="`+f+`" alt="Alt text"></p><p>2.2、然后使用cmd启动Minio</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>experimental environment<span class="token punctuation">\\</span>minio<span class="token operator">&gt;</span>minio.exe server .<span class="token punctuation">\\</span>data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+M+'" alt="Alt text"></p><p>2.3、Minio启动成功后<br> 进入浏览器访问Minio后台管理系统<br> 2.3.1、 查看后台管理地址</p><p><img src="'+C+'" alt="Alt text"></p><p>2.3.2 然后进入浏览器访问</p><p><img src="'+A+'" alt="Alt text"></p><p>2.3.3、 输入Minio用户名和密码<br> 用户名：minioadmin 密码：minioadmin</p><p><img src="'+F+'" alt="Alt text"></p><p>3、客户端访问</p><p><img src="'+y+'" alt="Alt text"></p><p>4、结果查看<br> 4.1、进入到Minio后台管理中</p><p><img src="'+w+'" alt="Alt text"></p><p>然后查看文件</p><p><img src="'+L+`" alt="Alt text"></p><h5 id="添加商品图片原理" tabindex="-1"><a class="header-anchor" href="#添加商品图片原理" aria-hidden="true">#</a> 添加商品图片原理</h5><h3 id="上传批量商品图片业务场景落地" tabindex="-1"><a class="header-anchor" href="#上传批量商品图片业务场景落地" aria-hidden="true">#</a> 上传批量商品图片业务场景落地</h3><p>步骤<br> 1、先在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    /// &lt;summary&gt;
    /// 商品图片控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductFileController : ControllerBase
    {

        private readonly ILogger&lt;ProductFileController&gt; _logger;

        public ProductFileController(ILogger&lt;ProductFileController&gt; logger)
        {
            _logger = logger;
        }

        /// &lt;summary&gt;
        /// 批量商品上传
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost(&quot;UploadList&quot;)]
        public IActionResult UploadList(IFormFile[] files)
        {
            // 2.1 遍历所有文件
            foreach (var formFile in files)
            {
                if (formFile.Length &gt; 0)
                {
                    // 2.1 创建MinioClient客户端
                    MinioClient minioClient = new MinioClient(&quot;127.0.0.1:9000&quot;, &quot;minioadmin&quot;, &quot;minioadmin&quot;);

                    // 2.2 创建文件桶
                    if (!minioClient.BucketExistsAsync(&quot;product&quot;).Result)
                    {
                        minioClient.MakeBucketAsync(&quot;product&quot;).Wait();
                    }

                    // 2.3 上传文件
                    minioClient.PutObjectAsync(&quot;product&quot;, formFile.FileName, formFile.OpenReadStream(), formFile.Length).Wait();

                    _logger.LogInformation($&quot;文件:{formFile.FileName}上传到MinIO成功&quot;);
                }
            }

            return new JsonResult(&quot;上传成功&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、客户端访问，进入到浏览器进行访问</p><p><img src="`+O+`" alt="Alt text"></p><h3 id="下载商品图片业务场景落地" tabindex="-1"><a class="header-anchor" href="#下载商品图片业务场景落地" aria-hidden="true">#</a> 下载商品图片业务场景落地</h3><p>步骤</p><p>1、先在ProductController类中添加代码</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/// &lt;summary&gt;
    /// 商品图片控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductFileController : ControllerBase
    {

        private readonly ILogger&lt;ProductFileController&gt; _logger;

        public ProductFileController(ILogger&lt;ProductFileController&gt; logger)
        {
            _logger = logger;
        }

        /// &lt;summary&gt;
        /// 商品图片下载
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost(&quot;Download&quot;)]
        [HttpGet(&quot;Download&quot;)]
        public IActionResult Download(string fileName)
        {
            FileStreamResult fileStreamResult = null;
            try
            {
                // 1、创建MioIO客户端
                MinioClient minioClient = new MinioClient(&quot;127.0.0.1:9000&quot;, &quot;minioadmin&quot;, &quot;minioadmin&quot;);

                var imgStream = new MemoryStream();
                // 2、下载图片
                minioClient.GetObjectAsync(&quot;product&quot;, fileName, stream =&gt; stream.CopyTo(imgStream)).Wait();
                imgStream.Position = 0;

                fileStreamResult = new FileStreamResult(imgStream, &quot;image/jpg&quot;);
                
            }
            catch (MinioException e)
            {

                Console.WriteLine(&quot;Error: &quot; + e);
            }

            return fileStreamResult;
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、客户端访问，进入到浏览器进行访问</p><p><img src="`+W+`" alt="Alt text"></p><h3 id="删除商品图片业务场景落地" tabindex="-1"><a class="header-anchor" href="#删除商品图片业务场景落地" aria-hidden="true">#</a> 删除商品图片业务场景落地</h3><p>步骤<br> 1、先在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>        /// &lt;summary&gt;
        /// 商品图片删除
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpDelete]
        public IActionResult FileDelete(string fileName)
        {
                try
                {
                    // 2.1、创建客户端
                    MinioClient minioClient = new MinioClient(&quot;127.0.0.1:9000&quot;, &quot;minioadmin&quot;, &quot;minioadmin&quot;);

                    var imgStream = new MemoryStream();
                    // 2.2、单个图片删除
                    minioClient.RemoveObjectAsync(&quot;product&quot;, fileName).Wait();
                }
                catch (MinioException e)
                {
                    Console.WriteLine(&quot;Error: &quot; + e);
                }

            return Ok(&quot;删除成功&quot;);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、客户端访问，进入到浏览器进行访问</p><p><img src="`+I+'" alt="Alt text"></p><p>3、然后进入到minio后台查看结果</p><p><img src="'+P+`" alt="Alt text"></p><h3 id="删除批量商品业务场景落地" tabindex="-1"><a class="header-anchor" href="#删除批量商品业务场景落地" aria-hidden="true">#</a> 删除批量商品业务场景落地</h3><p>步骤<br> 1、先在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>        /// &lt;summary&gt;
        /// 批量商品图片删除
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpDelete(&quot;DeleteList&quot;)]
        public IActionResult FileDeleteList(string[] fileNames)
        {

            #region 2、MinIO分布式文件系统下载
            {
                try
                {
                    // 2.1、创建客户端
                    MinioClient minioClient = new MinioClient(&quot;127.0.0.1:9000&quot;, &quot;minioadmin&quot;, &quot;minioadmin&quot;);

                    var imgStream = new MemoryStream();
                    // 2.2、批量删除
                    minioClient.RemoveObjectAsync(&quot;productpictures&quot;, fileNames.ToList()).Wait();
                }
                catch (MinioException e)
                {
                    Console.WriteLine(&quot;Error: &quot; + e);
                }

            }
            #endregion

            return Ok(&quot;删除成功&quot;);
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、客户端访问，进入到浏览器进行访问</p><p><img src="`+S+`" alt="Alt text"></p><h3 id="复制商品图片业务场景落地" tabindex="-1"><a class="header-anchor" href="#复制商品图片业务场景落地" aria-hidden="true">#</a> 复制商品图片业务场景落地</h3><p>步骤<br> 1、先在ProductController类中添加代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
    /// 商品图片控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class ProductFileController : ControllerBase
    {

        private readonly ILogger&lt;ProductFileController&gt; _logger;

        public ProductFileController(ILogger&lt;ProductFileController&gt; logger)
        {
            _logger = logger;
        }

         /// &lt;summary&gt;
        /// 商品图片复制
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost(&quot;FileCopy&quot;)]
        public IActionResult FileCopy(string fileName, string destFileName)
        {
            #region 1、图片复制
            {
                try
                {
                    // 2.1、创建客户端
                    MinioClient minioClient = new MinioClient(&quot;127.0.0.1:9000&quot;, &quot;minioadmin&quot;, &quot;minioadmin&quot;);

                    var imgStream = new MemoryStream();
                    // 2.2、批量删除
                    minioClient.CopyObjectAsync(&quot;product&quot;, fileName, &quot;productnew&quot;, destFileName).Wait();
                }
                catch (MinioException e)
                {
                    Console.WriteLine(&quot;Error: &quot; + e);
                }

            }
            #endregion

            return Ok(&quot;复制成功&quot;);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、浏览器添加</p><p><img src="`+B+'" alt="Alt text"></p><p>注意Copy的对象，需要在Minio客户端创建目标数据库</p><p><img src="'+N+'" alt="Alt text"></p><p>3、进入Minio中查看图片数据</p><p><img src="'+R+'" alt="Alt text"><br><img src="'+E+'" alt="Alt text"></p><p>然后查看复制的图片</p><p><img src="'+D+'" alt="Alt text"></p><h3 id="商品图片监听场景落地" tabindex="-1"><a class="header-anchor" href="#商品图片监听场景落地" aria-hidden="true">#</a> 商品图片监听场景落地</h3><p>分析：当客户端通过电商微服务往Minio中添加数据的时候，商品数据已经被成功添加到Minio中。如何从Minio中搜索商品数据？<br> 方案： 商品图片监听</p><h4 id="如何落地商品图片监听" tabindex="-1"><a class="header-anchor" href="#如何落地商品图片监听" aria-hidden="true">#</a> 如何落地商品图片监听</h4><p>条件<br> 1、Mysql<br> 2、Minio Console<br> 3、Minio<br> 4、Minio mc<br> 步骤<br> 1、Mysql 准备<br> 1.1、在Mysql 中创建miniodb数据库</p><p><img src="'+j+'" alt="Alt text"></p><p>2、Minio Console准备<br> 2.1、进入Minio Console, 选择<code>Events</code></p><p><img src="'+U+'" alt="Alt text"></p><p>2.2、在Event Destinations 中 选择Mysql</p><p><img src="'+G+'" alt="Alt text"></p><p>2.3、Mysql Event Destination 填写连接数据库信息</p><p><img src="'+X+`" alt="Alt text"></p><p>3、Minio准备<br> 3.1、进入Minio目录中，然后重启，输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
minio server <span class="token parameter variable">--address</span> :9000 --console-address <span class="token string">&quot;:9001&quot;</span> ./data

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+z+`" alt="Alt text"></p><p>获取Mysql队列名：<code>arn:minio:sqs::miniok01:mysql</code></p><p>4、Minio mc 准备<br> 4.1、进入到Minio目录，使用 cmd ,输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mc.exe <span class="token builtin class-name">alias</span> <span class="token builtin class-name">set</span> myminio http://127.0.0.1:9000 minioadmin minioadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+H+`" alt="Alt text"></p><p>4.2、进入到Minio目录，使用cmd ,输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mc</span> event <span class="token function">add</span> <span class="token parameter variable">--event</span> <span class="token string">&quot;put,delete&quot;</span> myminio/productpictures arn:minio:sqs::miniok01:mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+T+'" alt="Alt text"></p><p>5、浏览器准备</p><p><img src="'+J+'" alt="Alt text"></p><p>6、数据库中查看结果</p><p><img src="'+$+'" alt="Alt text"></p><h3 id="minio多租户" tabindex="-1"><a class="header-anchor" href="#minio多租户" aria-hidden="true">#</a> Minio多租户</h3><h4 id="什么是多租户" tabindex="-1"><a class="header-anchor" href="#什么是多租户" aria-hidden="true">#</a> 什么是多租户</h4><p>多租户：系统运行多个实例给个不同的客户使用</p><p>多租户如图所示</p><p><img src="'+V+'" alt="Alt text"></p><h3 id="为什么要在微服务系统中使用多租户" tabindex="-1"><a class="header-anchor" href="#为什么要在微服务系统中使用多租户" aria-hidden="true">#</a> 为什么要在微服务系统中使用多租户</h3><p>分析： Minio默认给一个客户使用，当客户变多之后，所有客户的数据都集中在Minio内部的时候，导致数据冲突的问题。例如：客户A的数据，可能会修改成客户B的数据，客户B可能查询客户A的数据。所以，如何解决客户数据冲突问题？</p><p>方案：Minio多租户</p><h3 id="微服务系统中如何落地多租户" tabindex="-1"><a class="header-anchor" href="#微服务系统中如何落地多租户" aria-hidden="true">#</a> 微服务系统中如何落地多租户</h3><p>条件<br> 1、Minio<br> 2、电商项目</p><p>步骤</p><p>1、租户1启动</p><p>1.1 进入到Minio目录中</p><p><img src="'+l+`" alt="Alt text"></p><p>1.2 然后输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minio server <span class="token parameter variable">--address</span> :9001 --console-address <span class="token string">&quot;:9002&quot;</span> ./tenant1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+K+'" alt="Alt text"></p><p>1.3、进入到Minio查看结果</p><p><img src="'+Y+`" alt="Alt text"></p><p>1.4、电商项目连接</p><p>​ 1.4.1、先在ProductController类中添加代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    /// &lt;summary&gt;
    /// 文件上传
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost(&quot;UploadList&quot;)]
    public IActionResult UploadList(IFormFile[] files)
    {
        // 2.1 遍历所有文件
        foreach (var formFile in files)
        {
            if (formFile.Length &gt; 0)
            {
                // 2.1 创建MinioClient客户端
                MinioClient minioClient = new MinioClient()
                                    .WithEndpoint(&quot;127.0.0.1&quot;, 9000)
                                    .WithCredentials(&quot;minioadmin&quot;, &quot;minioadmin&quot;)
                                    .Build();
                //minioClient.WithSSL();
                // 2.2 创建文件桶(数据库)
                if (!minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket(&quot;productpictures&quot;)).Result)
                {
                    minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket(&quot;productpictures&quot;)).Wait();
                }


                // 2.3 上传文件
                minioClient.PutObjectAsync(new PutObjectArgs().WithBucket(&quot;productpictures&quot;).WithObject(formFile.FileName).WithStreamData(formFile.OpenReadStream()).WithObjectSize(formFile.Length)).ConfigureAwait(false);

                _logger.LogInformation($&quot;文件:{formFile.FileName}上传到MinIO成功&quot;);
            }
        }

        return new JsonResult(&quot;上传成功&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、租户2启动 2.1 进入到Minio目录中</p><p><img src="`+l+`" alt="Alt text"></p><p>2.2 然后输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minio server <span class="token parameter variable">--address</span> :9001 --console-address <span class="token string">&quot;:9002&quot;</span> ./tenant2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.3、进入到Minio查看结果,会生成<code>tenant2</code>文件 。 2.4、电商项目连接 ​ 2.4.1、先在ProductController类中添加代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> /// &lt;summary&gt;
    /// 文件上传
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost(&quot;UploadList&quot;)]
    public IActionResult UploadList(IFormFile[] files)
    {
        // 2.1 遍历所有文件
        foreach (var formFile in files)
        {
            if (formFile.Length &gt; 0)
            {
                // 2.1 创建MinioClient客户端
                MinioClient minioClient = new MinioClient()
                                    .WithEndpoint(&quot;127.0.0.1&quot;, 9000)
                                    .WithCredentials(&quot;minioadmin&quot;, &quot;minioadmin&quot;)
                                    .Build();
                //minioClient.WithSSL();
                // 2.2 创建文件桶(数据库)
                if (!minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket(&quot;productpictures&quot;)).Result)
                {
                    minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket(&quot;productpictures&quot;)).Wait();
                }


                // 2.3 上传文件
                minioClient.PutObjectAsync(new PutObjectArgs().WithBucket(&quot;productpictures&quot;).WithObject(formFile.FileName).WithStreamData(formFile.OpenReadStream()).WithObjectSize(formFile.Length)).ConfigureAwait(false);

                _logger.LogInformation($&quot;文件:{formFile.FileName}上传到MinIO成功&quot;);
            }
        }

        return new JsonResult(&quot;上传成功&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、租户3启动</p><p>​ 3.1、进入到Minio目录中</p><p><img src="`+l+`" alt="Alt text"></p><p>3.2、然后输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minio server <span class="token parameter variable">--address</span> :9005 --console-address <span class="token string">&quot;:9006&quot;</span> ./tenant3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.4、电商项目连接</p><p>​ 3.4.1、先在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
    /// 文件上传
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpPost(&quot;UploadList&quot;)]
    public IActionResult UploadList(IFormFile[] files)
    {
        // 2.1 遍历所有文件
        foreach (var formFile in files)
        {
            if (formFile.Length &gt; 0)
            {
                // 2.1 创建MinioClient客户端
                MinioClient minioClient = new MinioClient()
                                    .WithEndpoint(&quot;127.0.0.1&quot;, 9000)
                                    .WithCredentials(&quot;minioadmin&quot;, &quot;minioadmin&quot;)
                                    .Build();
                //minioClient.WithSSL();
                // 2.2 创建文件桶(数据库)
                if (!minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket(&quot;productpictures&quot;)).Result)
                {
                    minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket(&quot;productpictures&quot;)).Wait();
                }


                // 2.3 上传文件
                minioClient.PutObjectAsync(new PutObjectArgs().WithBucket(&quot;productpictures&quot;).WithObject(formFile.FileName).WithStreamData(formFile.OpenReadStream()).WithObjectSize(formFile.Length)).ConfigureAwait(false);

                _logger.LogInformation($&quot;文件:{formFile.FileName}上传到MinIO成功&quot;);
            }
        }

        return new JsonResult(&quot;上传成功&quot;);
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="minio集群" tabindex="-1"><a class="header-anchor" href="#minio集群" aria-hidden="true">#</a> Minio集群</h3><h4 id="单主机-多硬盘模式" tabindex="-1"><a class="header-anchor" href="#单主机-多硬盘模式" aria-hidden="true">#</a> 单主机/多硬盘模式</h4><h5 id="什么是单主机-多硬盘模式" tabindex="-1"><a class="header-anchor" href="#什么是单主机-多硬盘模式" aria-hidden="true">#</a> 什么是单主机/多硬盘模式</h5><p>一个主机下，有多个硬盘或者多个磁盘来存储文件。</p><p>如果所示：</p><p><img src="`+Z+'" alt="Alt text"></p><p>架构说明<br> 1、1个主节点（Master node） 管理索引（创建索引、删除索引）、分配分片<br> 维护元数据<br> 管理集群节点状态<br> 一个Minoa集群中，只有一个Master节点。在生产环境中，内存可以相对小一点，但机器要稳定。<br> 2、2个数据（Data node）<br> 在Minio集群中，会有N个DataNode节点。DataNode节点主要负责：<br> 数据写入、数据检索、大部分Minio的压力都在DataNode节点上<br> 在生产环境中，内存最好配置大一些<br> 1、高可用集群<br> 2、海量数据并发读副本<br> 3、海量数据并发写分片<br> 4、海量数据存储分片</p><h5 id="为什么要使用单主机-多硬盘模式" tabindex="-1"><a class="header-anchor" href="#为什么要使用单主机-多硬盘模式" aria-hidden="true">#</a> 为什么要使用单主机/多硬盘模式</h5><p>分析：商品图片数据通过客户端，使用Minio存储到磁盘下，当磁盘中的商品图片，商品图片从磁盘中删除了，导致商品图片不可用。客户端无法正常查询商品图片。如何解决当图片从磁盘上删除除后，能够正常访问？</p><p>方案：单主机，多硬盘</p><h6 id="如何落地单主机-多硬盘" tabindex="-1"><a class="header-anchor" href="#如何落地单主机-多硬盘" aria-hidden="true">#</a> 如何落地单主机/多硬盘</h6><p>步骤<br> 1、单主机，多硬盘模式搭建<br> 1.1 进入到Minio目录中</p><p><img src="'+l+`" alt="Alt text"></p><p>1.2、然后输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minio server <span class="token parameter variable">--address</span> :9010 --console-address <span class="token string">&quot;:9011&quot;</span> ./data1 ./data2 ./data3 ./data4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+Q+'" alt="Alt text"><br> 1.3 、 进入到Minio查看结果</p><p><img src="'+nn+`" alt="Alt text"></p><h5 id="微服务项目落地单主机-多硬盘" tabindex="-1"><a class="header-anchor" href="#微服务项目落地单主机-多硬盘" aria-hidden="true">#</a> 微服务项目落地单主机/多硬盘</h5><p>2、先在ProductController类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>     /// &lt;summary&gt;
        /// 批量文件上传
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost(&quot;UploadList&quot;)]
        public IActionResult UploadList(IFormFile[] files)
        {
            // 2.1 遍历所有文件
            foreach (var formFile in files)
            {
                if (formFile.Length &gt; 0)
                {
                    // 2.1 创建MinioClient客户端
                    MinioClient minioClient = new MinioClient()
                                       .WithEndpoint(&quot;127.0.0.1&quot;, 9000)
                                       .WithCredentials(&quot;minioadmin&quot;, &quot;minioadmin&quot;)
                                       .Build();
                    //minioClient.WithSSL();
                    // 2.2 创建文件桶(数据库)
                    if (!minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket(&quot;productpictures&quot;)).Result)
                    {
                        minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket(&quot;productpictures&quot;)).Wait();
                    }


                    // 2.3 上传文件
                    minioClient.PutObjectAsync(new PutObjectArgs().WithBucket(&quot;productpictures&quot;).WithObject(formFile.FileName).WithStreamData(formFile.OpenReadStream()).WithObjectSize(formFile.Length)).ConfigureAwait(false);

                    _logger.LogInformation($&quot;文件:{formFile.FileName}上传到MinIO成功&quot;);
                }
            }

            return new JsonResult(&quot;上传成功&quot;);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="minio单主机-多硬盘原理" tabindex="-1"><a class="header-anchor" href="#minio单主机-多硬盘原理" aria-hidden="true">#</a> Minio单主机/多硬盘原理</h5><h6 id="多副本" tabindex="-1"><a class="header-anchor" href="#多副本" aria-hidden="true">#</a> 多副本</h6><p>多副本技术就比较简单直接了，既然要冗余关键数据，就干脆多存几份好了，单个数据的盘坏了不要紧，还有备份可以使用。<br> 这种技术现在的软件系统中随处可见，比如mysql的同步/异步备份，分布式数据库中的三副本存储+一致性协议。<br> 这种方法的优缺点也比较明显，优点是写入效率高，无需多余的计算，直接存储多份即可，数据恢复也比较快，从副本复制即可。缺点就是存储效率低，以前需要的磁盘容量直接x2或者x3了，成本很高。</p><p><img src="`+en+'" alt="Alt text"></p><h6 id="纠删码" tabindex="-1"><a class="header-anchor" href="#纠删码" aria-hidden="true">#</a> 纠删码</h6><p>数据——&gt;加密而已</p><p>纠删码——&gt; 纠正（恢复）删除的代码。允许你删对象 。</p><p>保证数据高可用。</p><p>常规思路：存储两份。 如：xxx.png xxx.png</p><p>冗余：</p><p>纠删码：xxx.png ——&gt; 图片分片，分成两份</p><p>xxx.png ——&gt; 图片分片，分成两份<br> 4份数据。都是相同的。<br> 开始编码：<br> 1、xxx.png ——&gt;图片分片，编码<br> 2、xxx.png ——&gt;图片分片，编码</p><p>删除data1 data 2——&gt;恢复</p><p>ErasureCode(纠删码)以更低成本的方式提供近似三个副本的可靠性，吸引众多分布式存储、云存储的厂商和用户。可以说纠删码是云存储，尤其是现在广泛使用的对象存储的核心。 纠删码（ErasoureCode ES）是一种编码容错技术，最早是在通信行业解决部分的数据在传输中的损耗问题。其基本原理就是把传输的信号分段，加入一些数据的校验再让各段间发生相互关联，即使在传输 过程中丢失部分信号，接收端仍然通过算法将完整的信息计算出来。在数据存储中，纠删码将数据分割成片段，把冗余数据块扩展和编码，并将其存储在不同的位置，例如磁盘、存储节点或其他物理位置。</p><div class="custom-container tip"><p class="custom-container-title">思考</p><p>现在思考一个问题：现在有两份数据（有可能其实一份数据被分成了两部分），允许你做2的冗余（就是实际存储的使用是要存储数据的2倍（（2+2）/ 2 = 2）），要求达到这样的效果：任意两份数据的丢失，数据都能恢复。</p></div><p>如何来解决这个问题呢。一个简单的想法是，给两个数据都做一下备份。</p><p><img src="'+sn+'" alt="Alt text"></p><p>将数据存储为 X1,X2,X3,X4分别等于A1，A2,A1,A2; 这样假设数据 X1 X2丢失了，数据就可以从X3,X4中恢复出来。但是这样存储存在问题： 如果丢失的数据刚好是X1,X3呢，那么原先的数据A1就彻底丢失找不回来了。但是你可以使用下面的一种存储方式X1,X2还是不变，X3=A1+A2,X4=A1+2*A2 这样任意两份数据丢失，都可以恢复A1和A2了。</p><p>Minio使用纠删码<br> Minio中： 至少有4个数据目录<br> 1、传统冗余：至少2个数据目录等分片。4份数据。<br> 2、4个目录中。</p><p>总结：Minio至少都有4个数据目录。<br> 规则：必须有一半数据，数据不丢失，才能恢复。<br> N/2例如：4个目录中，必须保证2个数据不丢失。才能正常使用。 1、恢复任何磁盘损坏的数据<br> 包括直接删除、磁盘性道丢失、磁盘中毒。</p><h6 id="单主机-多硬盘模式-情况1" tabindex="-1"><a class="header-anchor" href="#单主机-多硬盘模式-情况1" aria-hidden="true">#</a> 单主机/多硬盘模式-情况1</h6><p>分析：目前部署的单主机使用的单主机多硬盘模式，只有一个客户，如果需要给多客户使用多租户方式部署不同的单主机多硬盘模式。如何实现呢？</p><p>方案： 多租户单主机/多硬盘</p><p>多租户单主机/多硬盘落地<br> 步骤<br> 1、租户1单主机，多硬盘启动<br> 1.1、进入到Minio目录</p><p><img src="'+l+`" alt="Alt text"></p><p>1.2、然后输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minio server <span class="token parameter variable">--address</span> :9001 --console-address <span class="token string">&quot;:9002&quot;</span> ./tenant1/data1 ./tenant1/data2 ./tenant1/data3 ./tenant1/data4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+an+'" alt="Alt text"></p><p>1.3 进入到tenant1目录中</p><p><img src="'+ln+'" alt="Alt text"></p><p>2、租户2单主机，多硬盘启动<br> 2.1、进入到Minio目录中</p><p><img src="'+l+`" alt="Alt text"></p><p>2.2、然后输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minio server <span class="token parameter variable">--address</span> :9003 --console-address <span class="token string">&quot;:9004&quot;</span> ./tenant2/data1 ./tenant2/data2 ./tenant2/data3 ./tenant2/data4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+tn+'" alt="Alt text"><br> 2.3、进入到tenant2目录中</p><p><img src="'+dn+'" alt="Alt text"></p><p>3、租户3单主机，多硬盘启动</p><p>3.1、进入到Minio目录中</p><p><img src="'+l+`" alt="Alt text"></p><p>3.2、然后输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minio server <span class="token parameter variable">--address</span> :9005 --console-address <span class="token string">&quot;:9006&quot;</span> ./tenant3/data1 ./tenant3/data2 ./tenant3/data3 ./tenant3/data4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+rn+'" alt="Alt text"></p><p>3.3、进入到tenant3目录中</p><p><img src="'+on+'" alt="Alt text"></p><h6 id="单主机-多硬盘模式-情况2" tabindex="-1"><a class="header-anchor" href="#单主机-多硬盘模式-情况2" aria-hidden="true">#</a> 单主机/多硬盘模式-情况2</h6><p>分析：目前Minio部署在windows上，直接根据Minio文件来做Minio硬盘的区分，能够直接运行。但是，当我们需要在Linux系统上运行Minio,如何在Linux上运行？<br> 方案：linux虚拟机</p><h6 id="linux系统minio单主机-多硬盘" tabindex="-1"><a class="header-anchor" href="#linux系统minio单主机-多硬盘" aria-hidden="true">#</a> linux系统Minio单主机/多硬盘</h6><p>条件<br> 1、linux虚拟机<br> 2、磁盘<br> 3、Minio<br> 步骤<br> 1、 Linux 虚拟机准备<br> 1.1 安装Linux虚拟机<br> 在虚拟机管理 <code>Oracle VM VirtualBox</code> 安装 <code>centos9.0 </code> 选择着【设置】——&gt;【存储】——&gt;【控制器】 添加，如果没有虚拟硬盘，先创建，然后再选择中</p><p><img src="'+mn+'" alt="Alt text"></p><p>1.2 连接Linux虚拟机<br> 使用xshell连接linux虚拟机</p><p><img src="'+cn+'" alt="Alt text"></p><p>2、磁盘准备</p><p>2.1 磁盘安装</p><p><img src="'+un+`" alt="Alt text"></p><p>2.2、磁盘加载</p><p>将虚拟添加磁盘加载到linux系统中，输入命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># for host in $(ls /sys/class/scsi_host) ; do echo &quot;- - -&quot; &gt; /sys/class/scsi_host/$host/scan; done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.3 磁盘状态<br> 查看磁盘状态，输入：<code>lsblk</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsblk</span>
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda           <span class="token number">8</span>:0    <span class="token number">0</span>   20G  <span class="token number">0</span> disk 
├─sda1        <span class="token number">8</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> part /boot
└─sda2        <span class="token number">8</span>:2    <span class="token number">0</span>   19G  <span class="token number">0</span> part 
  ├─cs-root <span class="token number">253</span>:0    <span class="token number">0</span>   17G  <span class="token number">0</span> lvm  /
  └─cs-swap <span class="token number">253</span>:1    <span class="token number">0</span>    2G  <span class="token number">0</span> lvm  <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
sdb           <span class="token number">8</span>:16   <span class="token number">0</span>    1G  <span class="token number">0</span> disk 
sdc           <span class="token number">8</span>:32   <span class="token number">0</span>    1G  <span class="token number">0</span> disk 
sdd           <span class="token number">8</span>:48   <span class="token number">0</span>    1G  <span class="token number">0</span> disk 
sde           <span class="token number">8</span>:64   <span class="token number">0</span>    1G  <span class="token number">0</span> disk 
sr0          <span class="token number">11</span>:0    <span class="token number">1</span> 1024M  <span class="token number">0</span> rom  
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.4、磁盘格式分区操作 2.4.1、磁盘格式化sdb分区<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkfs.ext4 /dev/sdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext4  /dev/sdb </span>
<span class="token function">mke2fs</span> <span class="token number">1.46</span>.5 <span class="token punctuation">(</span><span class="token number">30</span>-Dec-2021<span class="token punctuation">)</span>
创建含有 <span class="token number">262144</span> 个块（每块 4k）和 <span class="token number">65536</span> 个inode的文件系统
文件系统UUID：c24a422b-b4f9-4a2c-a60f-8e15ab44f3bf
超级块的备份存储于下列块： 
	<span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>

正在分配组表： 完成                            
正在写入inode表： 完成                            
创建日志（8192 个块）完成
写入超级块和文件系统账户统计信息： 已完成

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.4.2、磁盘格式化sdc分区<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkfs.ext4 /dev/sdc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext4  /dev/sdc </span>
<span class="token function">mke2fs</span> <span class="token number">1.46</span>.5 <span class="token punctuation">(</span><span class="token number">30</span>-Dec-2021<span class="token punctuation">)</span>
创建含有 <span class="token number">262144</span> 个块（每块 4k）和 <span class="token number">65536</span> 个inode的文件系统
文件系统UUID：9f5d7649-f9a7-43a5-a8a5-7d99a6bab951
超级块的备份存储于下列块： 
	<span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>

正在分配组表： 完成                            
正在写入inode表： 完成                            
创建日志（8192 个块）完成
写入超级块和文件系统账户统计信息： 已完成

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.4.3、磁盘格式化sdd分区<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkfs.ext4 /dev/sdd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext4  /dev/sdd </span>
<span class="token function">mke2fs</span> <span class="token number">1.46</span>.5 <span class="token punctuation">(</span><span class="token number">30</span>-Dec-2021<span class="token punctuation">)</span>
创建含有 <span class="token number">262144</span> 个块（每块 4k）和 <span class="token number">65536</span> 个inode的文件系统
文件系统UUID：eeec8a03-5d8b-41a1-b975-2c297271402c
超级块的备份存储于下列块： 
	<span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>

正在分配组表： 完成                            
正在写入inode表： 完成                            
创建日志（8192 个块）完成
写入超级块和文件系统账户统计信息： 已完成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.4.4、磁盘格式化sde分区<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkfs.ext4 /dev/sde
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.ext4  /dev/sde </span>
<span class="token function">mke2fs</span> <span class="token number">1.46</span>.5 <span class="token punctuation">(</span><span class="token number">30</span>-Dec-2021<span class="token punctuation">)</span>
创建含有 <span class="token number">262144</span> 个块（每块 4k）和 <span class="token number">65536</span> 个inode的文件系统
文件系统UUID：7bab6404-172c-4f81-b4e6-7e757bef0071
超级块的备份存储于下列块： 
	<span class="token number">32768</span>, <span class="token number">98304</span>, <span class="token number">163840</span>, <span class="token number">229376</span>

正在分配组表： 完成                            
正在写入inode表： 完成                            
创建日志（8192 个块）完成
写入超级块和文件系统账户统计信息： 已完成

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、Minio准备<br> 3.1 Minio 文件夹 输入命令： <code>mkdir minio</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll</span>
drwxr-xr-x.  <span class="token number">2</span> root root       <span class="token number">6</span>  <span class="token number">9</span>月 <span class="token number">12</span> <span class="token number">14</span>:01 minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.2 进入minio文件夹，下载Minio<br> [下载](wget https://dl.min.io/server/minio/release/linux-amd64/minio)：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dl.min.io/server/minio/release/linux-amd64/minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.3 ​ 执行命令：<code>chmod +x minio</code> 设置权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x minio  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.4 Minio磁盘挂载 3.4.1、在minio文件中，创建四个数据目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># mkdir  data1 data2 data3 data4</span>
<span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">96640</span>
drwxr-xr-x. <span class="token number">2</span> root root        <span class="token number">6</span>  <span class="token number">9</span>月 <span class="token number">12</span> <span class="token number">15</span>:29 data1
drwxr-xr-x. <span class="token number">2</span> root root        <span class="token number">6</span>  <span class="token number">9</span>月 <span class="token number">12</span> <span class="token number">15</span>:29 data2
drwxr-xr-x. <span class="token number">2</span> root root        <span class="token number">6</span>  <span class="token number">9</span>月 <span class="token number">12</span> <span class="token number">15</span>:29 data3
drwxr-xr-x. <span class="token number">2</span> root root        <span class="token number">6</span>  <span class="token number">9</span>月 <span class="token number">12</span> <span class="token number">15</span>:29 data4
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">98959360</span>  <span class="token number">9</span>月 <span class="token number">12</span> <span class="token number">15</span>:24 minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4.2、将4个数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># mount /dev/sdb /root/minio/data1</span>
<span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># mount /dev/sdc /root/minio/data2</span>
<span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># mount /dev/sdd /root/minio/data3</span>
<span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># mount /dev/sde /root/minio/data4</span>

<span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># lsblk </span>
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda           <span class="token number">8</span>:0    <span class="token number">0</span>   20G  <span class="token number">0</span> disk 
├─sda1        <span class="token number">8</span>:1    <span class="token number">0</span>    1G  <span class="token number">0</span> part /boot
└─sda2        <span class="token number">8</span>:2    <span class="token number">0</span>   19G  <span class="token number">0</span> part 
  ├─cs-root <span class="token number">253</span>:0    <span class="token number">0</span>   17G  <span class="token number">0</span> lvm  /
  └─cs-swap <span class="token number">253</span>:1    <span class="token number">0</span>    2G  <span class="token number">0</span> lvm  <span class="token punctuation">[</span>SWAP<span class="token punctuation">]</span>
sdb           <span class="token number">8</span>:16   <span class="token number">0</span>    1G  <span class="token number">0</span> disk /root/minio/data1
sdc           <span class="token number">8</span>:32   <span class="token number">0</span>    1G  <span class="token number">0</span> disk /root/minio/data2
sdd           <span class="token number">8</span>:48   <span class="token number">0</span>    1G  <span class="token number">0</span> disk /root/minio/data3
sde           <span class="token number">8</span>:64   <span class="token number">0</span>    1G  <span class="token number">0</span> disk /root/minio/data4
sr0          <span class="token number">11</span>:0    <span class="token number">1</span> 1024M  <span class="token number">0</span> rom  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4 Minio运行<br> 3.4.1 minio默认用户名和密码 ，输入命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># export MINIO_ROOT_USER=adminminio</span>
<span class="token punctuation">[</span>root@localhost minio<span class="token punctuation">]</span><span class="token comment"># export MINIO_ROOT_PASSWORD=adminminio</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4.2 minio运行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./minio server /root/minio/data1 /root/minio/data2 /root/minio/data3 /root/minio/data4 --console-address <span class="token string">&quot;:9001&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+pn+'" alt="Alt text"></p><h4 id="多主机-单硬盘模式" tabindex="-1"><a class="header-anchor" href="#多主机-单硬盘模式" aria-hidden="true">#</a> 多主机/单硬盘模式</h4><p>分析：如果一个主机宕机了，就会导致所有的图片数据全部丢失，客户端无法进行访问，如何保证当主机宕机了，商品图片数据依然可以访问呢？<br> 方案：多主机/单硬盘</p><h5 id="如何落地多主机单硬盘" tabindex="-1"><a class="header-anchor" href="#如何落地多主机单硬盘" aria-hidden="true">#</a> 如何落地多主机单硬盘</h5><p>条件<br> 1、4台linux虚拟主机<br> 2、Minio<br> 步骤<br> 1、 linux虚拟机准备 1.1、linux虚拟机 192.168.3.60 、192.168.3.61 、192.168.3.62、192.168.3.63 1.2、虚拟机磁盘准备，及添加。 1.3、xshell 虚拟机连接<br> 2、Minio准备 2.1、linux虚拟机主机192.168.3.66 2.1.1、Minio准备</p><p><img src="'+vn+`" alt="Alt text"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./minio server <span class="token parameter variable">--address</span> :9000 http://192.168.3.60/root/minio/data1/zz http://192.168.3.61/root/minio/data1/zz http://192.168.3.62/root/minio/data1/zz http://192.168.3.63/root/minio/data1/zz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="多主机-多硬盘模式" tabindex="-1"><a class="header-anchor" href="#多主机-多硬盘模式" aria-hidden="true">#</a> 多主机/多硬盘模式</h4>`,238);function fn(Mn,Cn){const s=t("router-link"),r=t("ExternalLinkIcon");return m(),c("div",null,[gn,n("nav",hn,[n("ul",null,[n("li",null,[e(s,{to:"#目录"},{default:a(()=>[i("目录")]),_:1})]),n("li",null,[e(s,{to:"#分布式文件系统中间件-minio"},{default:a(()=>[i("分布式文件系统中间件-Minio")]),_:1}),n("ul",null,[n("li",null,[e(s,{to:"#什么是minio"},{default:a(()=>[i("什么是Minio")]),_:1})]),n("li",null,[e(s,{to:"#什么地方使用minio"},{default:a(()=>[i("什么地方使用Minio")]),_:1})]),n("li",null,[e(s,{to:"#微服务系统中为什么要使用minio"},{default:a(()=>[i("微服务系统中为什么要使用Minio")]),_:1})]),n("li",null,[e(s,{to:"#微服务中如何落地minio"},{default:a(()=>[i("微服务中如何落地Minio")]),_:1})]),n("li",null,[e(s,{to:"#上传批量商品图片业务场景落地"},{default:a(()=>[i("上传批量商品图片业务场景落地")]),_:1})]),n("li",null,[e(s,{to:"#下载商品图片业务场景落地"},{default:a(()=>[i("下载商品图片业务场景落地")]),_:1})]),n("li",null,[e(s,{to:"#删除商品图片业务场景落地"},{default:a(()=>[i("删除商品图片业务场景落地")]),_:1})]),n("li",null,[e(s,{to:"#删除批量商品业务场景落地"},{default:a(()=>[i("删除批量商品业务场景落地")]),_:1})]),n("li",null,[e(s,{to:"#复制商品图片业务场景落地"},{default:a(()=>[i("复制商品图片业务场景落地")]),_:1})]),n("li",null,[e(s,{to:"#商品图片监听场景落地"},{default:a(()=>[i("商品图片监听场景落地")]),_:1})]),n("li",null,[e(s,{to:"#minio多租户"},{default:a(()=>[i("Minio多租户")]),_:1})]),n("li",null,[e(s,{to:"#为什么要在微服务系统中使用多租户"},{default:a(()=>[i("为什么要在微服务系统中使用多租户")]),_:1})]),n("li",null,[e(s,{to:"#微服务系统中如何落地多租户"},{default:a(()=>[i("微服务系统中如何落地多租户")]),_:1})]),n("li",null,[e(s,{to:"#minio集群"},{default:a(()=>[i("Minio集群")]),_:1})])])])])]),kn,n("p",null,[i("下载地址：https://dl.min.io/server/minio/release/windows-amd64/minio.exe"),xn,n("a",_n,[i("windows-amd64/minio.exe 下载"),e(r)])]),qn])}const Fn=o(bn,[["render",fn],["__file","minio001.html.vue"]]);export{Fn as default};
