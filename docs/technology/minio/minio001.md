---
title: '分布式文件系统中间件Minio'
date: 2023-09-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '分布式文件系统中间件Minio'
categories:
- 'C#'
---
## 目录

[[toc]]

## 分布式文件系统中间件-Minio  

### 什么是Minio 
Minio是分布式文件系统。指：文件可以存储在多个主机中
如图所示：

![Alt text](/images/minio/minio001_0001image.png)   

文件：**图片，视频，音频**等等   
主机：linux 、 windows 、 mac 等等   
图片可以存储到多个linux,或者多个windows,或者从个Mac 
换句话说：Minio就是OSS。对象存储系统。对象代表的是任何文件都可以存储。一般，目前主流的云平台，基本使用的都是OSS存储文件方式。Minio中存储最大文件可以达到5TB。任何类型的文件都是支持的。   

### 什么地方使用Minio   

Minio主要使用在微服务中。单体系统中，图片资源是比较少的，所以，没有必要使用分布文件系统。   

### 微服务系统中为什么要使用Minio  

微服务系统有很多，包含电商微服务系统，包含OA微服务系统，以及其他不同微服务系统。主要通过电商微服务系统进行举例说明为什么要使用Minio?   
先得到一个电商微服务系统。如何得到？电商微服务系统是由单体电商系统而来    

#### 单体电商系统  

搜索商品实现过程，客户端发起查询请求——>电商系统——>电商数据库。    

如果客户端有这一个要求，查询订单时候，需要查询出商品。如何实现这个规则要求呢？   

查询订单实现过程，客户端发武查询请求——>电商系统——>电商数据库——>订单表和商品表进行关联。  

当时，如果电商系统并发量、业务量、数据量全部上升之后，单体系统查询，添加、修改、删除性能会急剧下降。进一步甚至会导致系统宕机（宕机也就无法访问），如果系统出现了宕机问题，直接导致系统无法访问。   

在允许电商系统并发量、业务量、数据量上升的情况下，如何提升系统性能，防止系统宕机呢？  
方案：需要进行系统业务模块拆分   
结果：形成电商微服务系统   
#### 电商微服务系统  

![Alt text](/images/minio/minio001_0002image.png)  

在微服务电商系统中，我们主要看一个业务场景，搜索商品业务场景。   

搜索商品实现过程，客户端发起查询请求——>电商系统——>电商数据库。   

如果客户端有这样一个要求，查询订单的时候，需要搜索出商品。如何实现这个规则要求呢？  
查询订单实现过程，客户端发起查询请求——>电商网站——>订单微服务——>电商数据库。  
电商网站——>商品微服务——>电商数据库。   
一次订单查询需要涉及到2个微服务（订单微服务，商品微服务）查询。
如果并发量比较大，会导致2个微服务查询性能下降。因为是同步请求，同步请求并发处理有限   
如果两个微服务其中一个微服务宕机了，会导致无法进行查询。   
如何提升系统性能和防止系统宕机呢？  
方案：使用Minio  

#### 电商微服务系统-上传图片   

![Alt text](/images/minio/minio001_0003image.png)  


#### 电商微服务系统-电商网站拆分  

![Alt text](/images/minio/minio001_0004image.png)  


#### 电商微服务系统-Minio  

![Alt text](/images/minio/minio001_0005image.png)   

在微服务电商系统中，我们主要看一个业务场景，搜索商品业务场景。   
搜索商品实现过程，客户端发起查询请求——>电商系统——>商品微服务——>电商数据库。  
如果客户端有这样一个要求，查询订单的时候，需要查询出商品。如何实现这个规则要求呢？  
查询订单实现过程，客户端发起查询请求——>电商网站——>Minio。   
在Minio中可以一次性查询出订单商品数据。而且还可以提升性能   
总结：这就是我们在电商系统中使用Minio原因    
1、先从单体电商系统分析   
2、然后再从电商微服务系统分析  
3、最后引入 Minio   
4、由此得到微服务系统为什么要使用Minio  

### 微服务中如何落地Minio  
 前提  
 1、电商微服务系统  
 2、Minio  
 3、mc  
 步骤  
 1、电商微服务系统准备  
 通过vs2022创建Net7电商微服务系统    
![Alt text](/images/minio/minio001_0006image.png)   

 2、Minio准备  
  
 下载地址：https://dl.min.io/server/minio/release/windows-amd64/minio.exe   
 [windows-amd64/minio.exe 下载](https://dl.min.io/server/minio/release/windows-amd64/minio.exe)    

​ 如图所示  

![Alt text](/images/minio/minio001_0007image.png)   

3、mc准备  
下载地址：https://dl.min.io/client/mc/release/windows-amd64/mc.exe

​ 如图所示  

![Alt text](/images/minio/minio001_0008image.png)   

#### 上传商品图片业务场景落地  

条件  
1、电商微服务系统LKN.EBusiness   
2、Minio  
3、客户端  
步骤   
1、先进行电商微服务系统LKN.EBusiness 
1.1 在项目中通过nuget引入Minio  

![Alt text](/images/minio/minio001_0009image.png)  

1.2、先在商品网站中创建ProductController类

![Alt text](/images/minio/minio001_0010image.png)  

然后再ProductController类添加代码  

```C# 
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Minio;

namespace LKN.EBusiness.Controllers
{
    /// <summary>
    /// 商品图片控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductFileController : ControllerBase
    {

        private readonly ILogger<ProductFileController> _logger;

        public ProductFileController(ILogger<ProductFileController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// 文件上传
        /// </summary>
        /// <returns></returns>
        [HttpPost("Upload")]
        public IActionResult Upload(IFormFile formFile)
        {
            // 2.1 创建MinioClient客户端
            MinioClient minioClient = new MinioClient("127.0.0.1:9000", "minioadmin", "minioadmin");

            // 2.2 创建文件桶
            if (!minioClient.BucketExistsAsync("product").Result)
            {
                minioClient.MakeBucketAsync("product").Wait();
            }

            // 2.3 上传文件
            minioClient.PutObjectAsync("product", formFile.FileName, formFile.OpenReadStream(), formFile.Length).Wait();

            _logger.LogInformation($"文件:{formFile.FileName}上传到MinIO成功");

            return new JsonResult("上传成功");
        }
    }
}

```
2、Minio准备
2.1 先进入到Minio目录

![Alt text](/images/minio/minio001_0011image.png)  

2.2、然后使用cmd启动Minio

``` bash
D:\experimental environment\minio>minio.exe server .\data
```
![Alt text](/images/minio/minio001_0012image.png)  

2.3、Minio启动成功后  
进入浏览器访问Minio后台管理系统  
2.3.1、 查看后台管理地址

![Alt text](/images/minio/minio001_0013image.png)  

2.3.2 然后进入浏览器访问   

![Alt text](/images/minio/minio001_0014image.png)  

2.3.3、 输入Minio用户名和密码  
用户名：minioadmin 密码：minioadmin   

![Alt text](/images/minio/minio001_0015image.png)   

3、客户端访问
 
![Alt text](/images/minio/minio001_0016image.png)   

4、结果查看  
4.1、进入到Minio后台管理中   

![Alt text](/images/minio/minio001_0017image.png)    

然后查看文件  

![Alt text](/images/minio/minio001_0018image.png)   

##### 添加商品图片原理   

### 上传批量商品图片业务场景落地 
步骤   
1、先在ProductController类中添加代码  

``` C# 
    /// <summary>
    /// 商品图片控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductFileController : ControllerBase
    {

        private readonly ILogger<ProductFileController> _logger;

        public ProductFileController(ILogger<ProductFileController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// 批量商品上传
        /// </summary>
        /// <returns></returns>
        [HttpPost("UploadList")]
        public IActionResult UploadList(IFormFile[] files)
        {
            // 2.1 遍历所有文件
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    // 2.1 创建MinioClient客户端
                    MinioClient minioClient = new MinioClient("127.0.0.1:9000", "minioadmin", "minioadmin");

                    // 2.2 创建文件桶
                    if (!minioClient.BucketExistsAsync("product").Result)
                    {
                        minioClient.MakeBucketAsync("product").Wait();
                    }

                    // 2.3 上传文件
                    minioClient.PutObjectAsync("product", formFile.FileName, formFile.OpenReadStream(), formFile.Length).Wait();

                    _logger.LogInformation($"文件:{formFile.FileName}上传到MinIO成功");
                }
            }

            return new JsonResult("上传成功");
        }
    }
```

2、客户端访问，进入到浏览器进行访问  

![Alt text](/images/minio/minio001_0019image.png)  

### 下载商品图片业务场景落地  

步骤  

1、先在ProductController类中添加代码  

``` C #
/// <summary>
    /// 商品图片控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductFileController : ControllerBase
    {

        private readonly ILogger<ProductFileController> _logger;

        public ProductFileController(ILogger<ProductFileController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// 商品图片下载
        /// </summary>
        /// <returns></returns>
        [HttpPost("Download")]
        [HttpGet("Download")]
        public IActionResult Download(string fileName)
        {
            FileStreamResult fileStreamResult = null;
            try
            {
                // 1、创建MioIO客户端
                MinioClient minioClient = new MinioClient("127.0.0.1:9000", "minioadmin", "minioadmin");

                var imgStream = new MemoryStream();
                // 2、下载图片
                minioClient.GetObjectAsync("product", fileName, stream => stream.CopyTo(imgStream)).Wait();
                imgStream.Position = 0;

                fileStreamResult = new FileStreamResult(imgStream, "image/jpg");
                
            }
            catch (MinioException e)
            {

                Console.WriteLine("Error: " + e);
            }

            return fileStreamResult;
        }
    }

```

3、客户端访问，进入到浏览器进行访问    

![Alt text](/images/minio/minio001_0020image.png)  

### 删除商品图片业务场景落地  

步骤  
1、先在ProductController类中添加代码  
``` C# 
        /// <summary>
        /// 商品图片删除
        /// </summary>
        /// <returns></returns>
        [HttpDelete]
        public IActionResult FileDelete(string fileName)
        {
                try
                {
                    // 2.1、创建客户端
                    MinioClient minioClient = new MinioClient("127.0.0.1:9000", "minioadmin", "minioadmin");

                    var imgStream = new MemoryStream();
                    // 2.2、单个图片删除
                    minioClient.RemoveObjectAsync("product", fileName).Wait();
                }
                catch (MinioException e)
                {
                    Console.WriteLine("Error: " + e);
                }

            return Ok("删除成功");
        }
```

2、客户端访问，进入到浏览器进行访问   

![Alt text](/images/minio/minio001_0021image.png)  

3、然后进入到minio后台查看结果   

![Alt text](/images/minio/minio001_0022image.png)  


### 删除批量商品业务场景落地  
步骤  
1、先在ProductController类中添加代码   
``` C# 
/// <summary>
        /// 批量商品图片删除
        /// </summary>
        /// <returns></returns>
        [HttpDelete("DeleteList")]
        public IActionResult FileDeleteList(string[] fileNames)
        {

            #region 2、MinIO分布式文件系统下载
            {
                try
                {
                    // 2.1、创建客户端
                    MinioClient minioClient = new MinioClient("127.0.0.1:9000", "minioadmin", "minioadmin");

                    var imgStream = new MemoryStream();
                    // 2.2、批量删除
                    minioClient.RemoveObjectAsync("productpictures", fileNames.ToList()).Wait();
                }
                catch (MinioException e)
                {
                    Console.WriteLine("Error: " + e);
                }

            }
            #endregion

            return Ok("删除成功");
        }

```

2、客户端访问，进入到浏览器进行访问  

![Alt text](/images/minio/minio001_0023image.png)    

### 复制商品图片业务场景落地   

步骤   
1、先在ProductController类中添加代码   
``` c# 
/// <summary>
    /// 商品图片控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductFileController : ControllerBase
    {

        private readonly ILogger<ProductFileController> _logger;

        public ProductFileController(ILogger<ProductFileController> logger)
        {
            _logger = logger;
        }

         /// <summary>
        /// 商品图片复制
        /// </summary>
        /// <returns></returns>
        [HttpPost("FileCopy")]
        public IActionResult FileCopy(string fileName, string destFileName)
        {
            #region 1、图片复制
            {
                try
                {
                    // 2.1、创建客户端
                    MinioClient minioClient = new MinioClient("127.0.0.1:9000", "minioadmin", "minioadmin");

                    var imgStream = new MemoryStream();
                    // 2.2、批量删除
                    minioClient.CopyObjectAsync("product", fileName, "productnew", destFileName).Wait();
                }
                catch (MinioException e)
                {
                    Console.WriteLine("Error: " + e);
                }

            }
            #endregion

            return Ok("复制成功");
        }
```

2、浏览器添加  

![Alt text](/images/minio/minio001_0024image.png)      

注意Copy的对象，需要在Minio客户端创建目标数据库    

![Alt text](/images/minio/minio001_0025image.png)      

3、进入Minio中查看图片数据   

![Alt text](/images/minio/minio001_0026image.png)      
![Alt text](/images/minio/minio001_0027image.png)    
  
然后查看复制的图片   

![Alt text](/images/minio/minio001_0028image.png)      

### 商品图片监听场景落地   
分析：当客户端通过电商微服务往Minio中添加数据的时候，商品数据已经被成功添加到Minio中。如何从Minio中搜索商品数据？   
方案： 商品图片监听  

#### 如何落地商品图片监听    
条件   
1、Mysql  
2、Minio Console  
3、Minio  
4、Minio mc  
步骤   
1、Mysql 准备  
1.1、在Mysql 中创建miniodb数据库    

![Alt text](/images/minio/minio001_0029image.png)    

2、Minio Console准备   
2.1、进入Minio Console, 选择`Events`

![Alt text](/images/minio/minio001_0030image.png)   

2.2、在Event Destinations 中 选择Mysql 

![Alt text](/images/minio/minio001_0031image.png)    

2.3、Mysql Event Destination 填写连接数据库信息    

![Alt text](/images/minio/minio001_0032image.png)     

3、Minio准备     
3.1、进入Minio目录中，然后重启，输入     

``` bash

minio server --address :9000 --console-address ":9001" ./data

```

![Alt text](/images/minio/minio001_0033image.png)    

获取Mysql队列名：`arn:minio:sqs::miniok01:mysql`   

4、Minio mc 准备  
4.1、进入到Minio目录，使用 cmd ,输入  
``` bash
mc.exe alias set myminio http://127.0.0.1:9000 minioadmin minioadmin
```
![Alt text](/images/minio/minio001_0034image.png)    

4.2、进入到Minio目录，使用cmd ,输入  

``` bash
mc event add --event "put,delete" myminio/productpictures arn:minio:sqs::miniok01:mysql
```
![Alt text](/images/minio/minio001_0035image.png)    

5、浏览器准备   

![Alt text](/images/minio/minio001_0036image.png)    

6、数据库中查看结果  

![Alt text](/images/minio/minio001_0037image.png)    



### Minio多租户

#### 什么是多租户  

多租户：系统运行多个实例给个不同的客户使用   

多租户如图所示   

![Alt text](/images/minio/minio001_0038image.png)    

### 为什么要在微服务系统中使用多租户  
分析： Minio默认给一个客户使用，当客户变多之后，所有客户的数据都集中在Minio内部的时候，导致数据冲突的问题。例如：客户A的数据，可能会修改成客户B的数据，客户B可能查询客户A的数据。所以，如何解决客户数据冲突问题？   

方案：Minio多租户  

### 微服务系统中如何落地多租户   
条件   
1、Minio   
2、电商项目   

步骤   

1、租户1启动  

1.1 进入到Minio目录中   

![Alt text](/images/minio/minio001_0039image.png)    

1.2 然后输入以下命令  

``` bash 
minio server --address :9001 --console-address ":9002" ./tenant1
```

![Alt text](/images/minio/minio001_0040image.png)    
 
 1.3、进入到Minio查看结果   

![Alt text](/images/minio/minio001_0041image.png)    



1.4、电商项目连接

​ 1.4.1、先在ProductController类中添加代码

``` c# 
    /// <summary>
    /// 文件上传
    /// </summary>
    /// <returns></returns>
    [HttpPost("UploadList")]
    public IActionResult UploadList(IFormFile[] files)
    {
        // 2.1 遍历所有文件
        foreach (var formFile in files)
        {
            if (formFile.Length > 0)
            {
                // 2.1 创建MinioClient客户端
                MinioClient minioClient = new MinioClient()
                                    .WithEndpoint("127.0.0.1", 9000)
                                    .WithCredentials("minioadmin", "minioadmin")
                                    .Build();
                //minioClient.WithSSL();
                // 2.2 创建文件桶(数据库)
                if (!minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket("productpictures")).Result)
                {
                    minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket("productpictures")).Wait();
                }


                // 2.3 上传文件
                minioClient.PutObjectAsync(new PutObjectArgs().WithBucket("productpictures").WithObject(formFile.FileName).WithStreamData(formFile.OpenReadStream()).WithObjectSize(formFile.Length)).ConfigureAwait(false);

                _logger.LogInformation($"文件:{formFile.FileName}上传到MinIO成功");
            }
        }

        return new JsonResult("上传成功");
    }
```

2、租户2启动 
2.1 进入到Minio目录中   

![Alt text](/images/minio/minio001_0039image.png)    

2.2 然后输入以下命令  

``` bash 
minio server --address :9001 --console-address ":9002" ./tenant2
```
​ 2.3、进入到Minio查看结果,会生成`tenant2`文件 。
2.4、电商项目连接
​ 2.4.1、先在ProductController类中添加代码
``` c# 
 /// <summary>
    /// 文件上传
    /// </summary>
    /// <returns></returns>
    [HttpPost("UploadList")]
    public IActionResult UploadList(IFormFile[] files)
    {
        // 2.1 遍历所有文件
        foreach (var formFile in files)
        {
            if (formFile.Length > 0)
            {
                // 2.1 创建MinioClient客户端
                MinioClient minioClient = new MinioClient()
                                    .WithEndpoint("127.0.0.1", 9000)
                                    .WithCredentials("minioadmin", "minioadmin")
                                    .Build();
                //minioClient.WithSSL();
                // 2.2 创建文件桶(数据库)
                if (!minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket("productpictures")).Result)
                {
                    minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket("productpictures")).Wait();
                }


                // 2.3 上传文件
                minioClient.PutObjectAsync(new PutObjectArgs().WithBucket("productpictures").WithObject(formFile.FileName).WithStreamData(formFile.OpenReadStream()).WithObjectSize(formFile.Length)).ConfigureAwait(false);

                _logger.LogInformation($"文件:{formFile.FileName}上传到MinIO成功");
            }
        }

        return new JsonResult("上传成功");
    }
```

3、租户3启动    

​ 3.1、进入到Minio目录中   

![Alt text](/images/minio/minio001_0039image.png)    

 3.2、然后输入以下命令   

``` bash
minio server --address :9005 --console-address ":9006" ./tenant3
```

 3.4、电商项目连接

​ 3.4.1、先在ProductController类中添加代码
``` C# 
/// <summary>
    /// 文件上传
    /// </summary>
    /// <returns></returns>
    [HttpPost("UploadList")]
    public IActionResult UploadList(IFormFile[] files)
    {
        // 2.1 遍历所有文件
        foreach (var formFile in files)
        {
            if (formFile.Length > 0)
            {
                // 2.1 创建MinioClient客户端
                MinioClient minioClient = new MinioClient()
                                    .WithEndpoint("127.0.0.1", 9000)
                                    .WithCredentials("minioadmin", "minioadmin")
                                    .Build();
                //minioClient.WithSSL();
                // 2.2 创建文件桶(数据库)
                if (!minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket("productpictures")).Result)
                {
                    minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket("productpictures")).Wait();
                }


                // 2.3 上传文件
                minioClient.PutObjectAsync(new PutObjectArgs().WithBucket("productpictures").WithObject(formFile.FileName).WithStreamData(formFile.OpenReadStream()).WithObjectSize(formFile.Length)).ConfigureAwait(false);

                _logger.LogInformation($"文件:{formFile.FileName}上传到MinIO成功");
            }
        }

        return new JsonResult("上传成功");
    }

```

### Minio集群  

#### 单主机/多硬盘模式
##### 什么是单主机/多硬盘模式
一个主机下，有多个硬盘或者多个磁盘来存储文件。

如果所示：

![Alt text](/images/minio/minio001_0042image.png)    

架构说明   
1、1个主节点（Master node）
管理索引（创建索引、删除索引）、分配分片   
维护元数据   
管理集群节点状态   
一个Minoa集群中，只有一个Master节点。在生产环境中，内存可以相对小一点，但机器要稳定。   
2、2个数据（Data node）  
在Minio集群中，会有N个DataNode节点。DataNode节点主要负责：   
数据写入、数据检索、大部分Minio的压力都在DataNode节点上    
在生产环境中，内存最好配置大一些   
1、高可用集群    
2、海量数据并发读副本    
3、海量数据并发写分片    
4、海量数据存储分片    

##### 为什么要使用单主机/多硬盘模式   
分析：商品图片数据通过客户端，使用Minio存储到磁盘下，当磁盘中的商品图片，商品图片从磁盘中删除了，导致商品图片不可用。客户端无法正常查询商品图片。如何解决当图片从磁盘上删除除后，能够正常访问？   

方案：单主机，多硬盘  

###### 如何落地单主机/多硬盘   
步骤   
1、单主机，多硬盘模式搭建   
1.1 进入到Minio目录中

![Alt text](/images/minio/minio001_0039image.png)    

1.2、然后输入以下命令

``` bash
minio server --address :9010 --console-address ":9011" ./data1 ./data2 ./data3 ./data4
```

![Alt text](/images/minio/minio001_0043image.png)    
1.3 、 进入到Minio查看结果   

![Alt text](/images/minio/minio001_0044image.png)    


##### 微服务项目落地单主机/多硬盘  
2、先在ProductController类中添加代码   
``` C# 
     /// <summary>
        /// 批量文件上传
        /// </summary>
        /// <returns></returns>
        [HttpPost("UploadList")]
        public IActionResult UploadList(IFormFile[] files)
        {
            // 2.1 遍历所有文件
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    // 2.1 创建MinioClient客户端
                    MinioClient minioClient = new MinioClient()
                                       .WithEndpoint("127.0.0.1", 9000)
                                       .WithCredentials("minioadmin", "minioadmin")
                                       .Build();
                    //minioClient.WithSSL();
                    // 2.2 创建文件桶(数据库)
                    if (!minioClient.BucketExistsAsync(new BucketExistsArgs().WithBucket("productpictures")).Result)
                    {
                        minioClient.MakeBucketAsync(new MakeBucketArgs().WithBucket("productpictures")).Wait();
                    }


                    // 2.3 上传文件
                    minioClient.PutObjectAsync(new PutObjectArgs().WithBucket("productpictures").WithObject(formFile.FileName).WithStreamData(formFile.OpenReadStream()).WithObjectSize(formFile.Length)).ConfigureAwait(false);

                    _logger.LogInformation($"文件:{formFile.FileName}上传到MinIO成功");
                }
            }

            return new JsonResult("上传成功");
        }
```

##### Minio单主机/多硬盘原理  
###### 多副本   
多副本技术就比较简单直接了，既然要冗余关键数据，就干脆多存几份好了，单个数据的盘坏了不要紧，还有备份可以使用。   
这种技术现在的软件系统中随处可见，比如mysql的同步/异步备份，分布式数据库中的三副本存储+一致性协议。    
这种方法的优缺点也比较明显，优点是写入效率高，无需多余的计算，直接存储多份即可，数据恢复也比较快，从副本复制即可。缺点就是存储效率低，以前需要的磁盘容量直接x2或者x3了，成本很高。   

![Alt text](/images/minio/minio001_0045image.png)    

###### 纠删码  
数据——>加密而已  

纠删码——> 纠正（恢复）删除的代码。允许你删对象 。

保证数据高可用。   

常规思路：存储两份。 如：xxx.png  xxx.png   

冗余：

纠删码：xxx.png ——> 图片分片，分成两份    
        
xxx.png ——> 图片分片，分成两份  
4份数据。都是相同的。   
开始编码：   
1、xxx.png ——>图片分片，编码   
2、xxx.png ——>图片分片，编码   

删除data1 data 2——>恢复  

ErasureCode(纠删码)以更低成本的方式提供近似三个副本的可靠性，吸引众多分布式存储、云存储的厂商和用户。可以说纠删码是云存储，尤其是现在广泛使用的对象存储的核心。
纠删码（ErasoureCode ES）是一种编码容错技术，最早是在通信行业解决部分的数据在传输中的损耗问题。其基本原理就是把传输的信号分段，加入一些数据的校验再让各段间发生相互关联，即使在传输
过程中丢失部分信号，接收端仍然通过算法将完整的信息计算出来。在数据存储中，纠删码将数据分割成片段，把冗余数据块扩展和编码，并将其存储在不同的位置，例如磁盘、存储节点或其他物理位置。   

::: tip 思考
现在思考一个问题：现在有两份数据（有可能其实一份数据被分成了两部分），允许你做2的冗余（就是实际存储的使用是要存储数据的2倍（（2+2）/ 2 = 2）），要求达到这样的效果：任意两份数据的丢失，数据都能恢复。 
:::

如何来解决这个问题呢。一个简单的想法是，给两个数据都做一下备份。   


![Alt text](/images/minio/minio001_0046image.png)    


将数据存储为 X1,X2,X3,X4分别等于A1，A2,A1,A2; 这样假设数据 X1 X2丢失了，数据就可以从X3,X4中恢复出来。但是这样存储存在问题： 如果丢失的数据刚好是X1,X3呢，那么原先的数据A1就彻底丢失找不回来了。但是你可以使用下面的一种存储方式X1,X2还是不变，X3=A1+A2,X4=A1+2*A2 这样任意两份数据丢失，都可以恢复A1和A2了。    

Minio使用纠删码  
Minio中： 至少有4个数据目录  
1、传统冗余：至少2个数据目录等分片。4份数据。   
2、4个目录中。  

总结：Minio至少都有4个数据目录。   
规则：必须有一半数据，数据不丢失，才能恢复。  
N/2例如：4个目录中，必须保证2个数据不丢失。才能正常使用。
1、恢复任何磁盘损坏的数据   
包括直接删除、磁盘性道丢失、磁盘中毒。    

###### 单主机/多硬盘模式-情况1  
分析：目前部署的单主机使用的单主机多硬盘模式，只有一个客户，如果需要给多客户使用多租户方式部署不同的单主机多硬盘模式。如何实现呢？    

方案： 多租户单主机/多硬盘   

多租户单主机/多硬盘落地  
步骤  
1、租户1单主机，多硬盘启动   
1.1、进入到Minio目录  

![Alt text](/images/minio/minio001_0039image.png)    

1.2、然后输入以下命令    

``` bash
minio server --address :9001 --console-address ":9002" ./tenant1/data1 ./tenant1/data2 ./tenant1/data3 ./tenant1/data4
```
![Alt text](/images/minio/minio001_0047image.png)    

1.3 进入到tenant1目录中  

![Alt text](/images/minio/minio001_0048image.png)    


2、租户2单主机，多硬盘启动  
2.1、进入到Minio目录中

![Alt text](/images/minio/minio001_0039image.png)    

2.2、然后输入以下命令  

``` bash
minio server --address :9003 --console-address ":9004" ./tenant2/data1 ./tenant2/data2 ./tenant2/data3 ./tenant2/data4
```
![Alt text](/images/minio/minio001_0049image.png)  
2.3、进入到tenant2目录中  

![Alt text](/images/minio/minio001_0050image.png)  

3、租户3单主机，多硬盘启动    

3.1、进入到Minio目录中   

![Alt text](/images/minio/minio001_0039image.png)    

3.2、然后输入以下命令    

``` bash
minio server --address :9005 --console-address ":9006" ./tenant3/data1 ./tenant3/data2 ./tenant3/data3 ./tenant3/data4
```

![Alt text](/images/minio/minio001_0051image.png)    

3.3、进入到tenant3目录中   

![Alt text](/images/minio/minio001_0052image.png)     

###### 单主机/多硬盘模式-情况2  
分析：目前Minio部署在windows上，直接根据Minio文件来做Minio硬盘的区分，能够直接运行。但是，当我们需要在Linux系统上运行Minio,如何在Linux上运行？   
方案：linux虚拟机  
###### linux系统Minio单主机/多硬盘  
条件  
1、linux虚拟机   
2、磁盘  
3、Minio  
步骤  
1、 Linux 虚拟机准备   
1.1 安装Linux虚拟机   
在虚拟机管理 `Oracle VM VirtualBox` 安装 `centos9.0 ` 选择着【设置】——>【存储】——>【控制器】 添加，如果没有虚拟硬盘，先创建，然后再选择中

![Alt text](/images/minio/minio001_0053image.png)     

1.2 连接Linux虚拟机   
使用xshell连接linux虚拟机   

![Alt text](/images/minio/minio001_0054image.png)     

2、磁盘准备   

2.1 磁盘安装   

![Alt text](/images/minio/minio001_0055image.png)     

2.2、磁盘加载  

将虚拟添加磁盘加载到linux系统中，输入命令    

``` bash
[root@localhost ~]# for host in $(ls /sys/class/scsi_host) ; do echo "- - -" > /sys/class/scsi_host/$host/scan; done
```
2.3   磁盘状态  
查看磁盘状态，输入：`lsblk`
```bash
[root@localhost ~]# lsblk
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda           8:0    0   20G  0 disk 
├─sda1        8:1    0    1G  0 part /boot
└─sda2        8:2    0   19G  0 part 
  ├─cs-root 253:0    0   17G  0 lvm  /
  └─cs-swap 253:1    0    2G  0 lvm  [SWAP]
sdb           8:16   0    1G  0 disk 
sdc           8:32   0    1G  0 disk 
sdd           8:48   0    1G  0 disk 
sde           8:64   0    1G  0 disk 
sr0          11:0    1 1024M  0 rom  
[root@localhost ~]# 

```
2.4、磁盘格式分区操作
2.4.1、磁盘格式化sdb分区  
输入命令：
``` bash
mkfs.ext4 /dev/sdb
```
``` bash 
[root@localhost ~]# mkfs.ext4  /dev/sdb 
mke2fs 1.46.5 (30-Dec-2021)
创建含有 262144 个块（每块 4k）和 65536 个inode的文件系统
文件系统UUID：c24a422b-b4f9-4a2c-a60f-8e15ab44f3bf
超级块的备份存储于下列块： 
	32768, 98304, 163840, 229376

正在分配组表： 完成                            
正在写入inode表： 完成                            
创建日志（8192 个块）完成
写入超级块和文件系统账户统计信息： 已完成

```
2.4.2、磁盘格式化sdc分区  
输入命令：
``` bash
mkfs.ext4 /dev/sdc
```
```bash 
[root@localhost ~]# mkfs.ext4  /dev/sdc 
mke2fs 1.46.5 (30-Dec-2021)
创建含有 262144 个块（每块 4k）和 65536 个inode的文件系统
文件系统UUID：9f5d7649-f9a7-43a5-a8a5-7d99a6bab951
超级块的备份存储于下列块： 
	32768, 98304, 163840, 229376

正在分配组表： 完成                            
正在写入inode表： 完成                            
创建日志（8192 个块）完成
写入超级块和文件系统账户统计信息： 已完成

```

2.4.3、磁盘格式化sdd分区  
输入命令：
``` bash
mkfs.ext4 /dev/sdd
```
``` bash
[root@localhost ~]# mkfs.ext4  /dev/sdd 
mke2fs 1.46.5 (30-Dec-2021)
创建含有 262144 个块（每块 4k）和 65536 个inode的文件系统
文件系统UUID：eeec8a03-5d8b-41a1-b975-2c297271402c
超级块的备份存储于下列块： 
	32768, 98304, 163840, 229376

正在分配组表： 完成                            
正在写入inode表： 完成                            
创建日志（8192 个块）完成
写入超级块和文件系统账户统计信息： 已完成
```

2.4.4、磁盘格式化sde分区  
输入命令：
``` bash
mkfs.ext4 /dev/sde
```
``` bash
[root@localhost ~]# mkfs.ext4  /dev/sde 
mke2fs 1.46.5 (30-Dec-2021)
创建含有 262144 个块（每块 4k）和 65536 个inode的文件系统
文件系统UUID：7bab6404-172c-4f81-b4e6-7e757bef0071
超级块的备份存储于下列块： 
	32768, 98304, 163840, 229376

正在分配组表： 完成                            
正在写入inode表： 完成                            
创建日志（8192 个块）完成
写入超级块和文件系统账户统计信息： 已完成

```

3、Minio准备  
3.1 Minio 文件夹
输入命令： `mkdir minio`

``` bash
[root@localhost ~]# ll
drwxr-xr-x.  2 root root       6  9月 12 14:01 minio
```

3.2 进入minio文件夹，下载Minio  
[下载](wget https://dl.min.io/server/minio/release/linux-amd64/minio)：   
``` bash
wget https://dl.min.io/server/minio/release/linux-amd64/minio
```
3.3 ​ 执行命令：`chmod +x minio`  设置权限   
``` bash 
chmod +x minio  
```

3.4 Minio磁盘挂载
3.4.1、在minio文件中，创建四个数据目录  
``` bash
[root@localhost minio]# mkdir  data1 data2 data3 data4
[root@localhost minio]# ll
总用量 96640
drwxr-xr-x. 2 root root        6  9月 12 15:29 data1
drwxr-xr-x. 2 root root        6  9月 12 15:29 data2
drwxr-xr-x. 2 root root        6  9月 12 15:29 data3
drwxr-xr-x. 2 root root        6  9月 12 15:29 data4
-rwxr-xr-x. 1 root root 98959360  9月 12 15:24 minio
```

3.4.2、将4个数据

``` bash
[root@localhost minio]# mount /dev/sdb /root/minio/data1
[root@localhost minio]# mount /dev/sdc /root/minio/data2
[root@localhost minio]# mount /dev/sdd /root/minio/data3
[root@localhost minio]# mount /dev/sde /root/minio/data4

[root@localhost minio]# lsblk 
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda           8:0    0   20G  0 disk 
├─sda1        8:1    0    1G  0 part /boot
└─sda2        8:2    0   19G  0 part 
  ├─cs-root 253:0    0   17G  0 lvm  /
  └─cs-swap 253:1    0    2G  0 lvm  [SWAP]
sdb           8:16   0    1G  0 disk /root/minio/data1
sdc           8:32   0    1G  0 disk /root/minio/data2
sdd           8:48   0    1G  0 disk /root/minio/data3
sde           8:64   0    1G  0 disk /root/minio/data4
sr0          11:0    1 1024M  0 rom  

```

3.4 Minio运行   
3.4.1 minio默认用户名和密码 ，输入命令  

``` bash
[root@localhost minio]# export MINIO_ROOT_USER=adminminio
[root@localhost minio]# export MINIO_ROOT_PASSWORD=adminminio
```
3.4.2 minio运行命令   
``` bash 
./minio server /root/minio/data1 /root/minio/data2 /root/minio/data3 /root/minio/data4 --console-address ":9001"
```

![Alt text](/images/minio/minio001_0056image.png)    

#### 多主机/单硬盘模式   

分析：如果一个主机宕机了，就会导致所有的图片数据全部丢失，客户端无法进行访问，如何保证当主机宕机了，商品图片数据依然可以访问呢？  
方案：多主机/单硬盘  
##### 如何落地多主机单硬盘 
条件  
1、4台linux虚拟主机  
2、Minio  
步骤  
1、 linux虚拟机准备 
   1.1、linux虚拟机 192.168.3.60 、192.168.3.61 、192.168.3.62、192.168.3.63
   1.2、虚拟机磁盘准备，及添加。
   1.3、xshell 虚拟机连接  
2、Minio准备
2.1、linux虚拟机主机192.168.3.66 
2.1.1、Minio准备  

![Alt text](/images/minio/minio001_0057image.png)    

``` bash
./minio server --address :9000 http://192.168.3.60/root/minio/data1/zz http://192.168.3.61/root/minio/data1/zz http://192.168.3.62/root/minio/data1/zz http://192.168.3.63/root/minio/data1/zz
```
#### 多主机/多硬盘模式


