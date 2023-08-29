---
title: '分布式中间件-MongoDB'
date: 2023-08-29
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '分布式中间件-MongoDB'
categories:
- 'C#'
---

## 目录
[[toc]]

## 分布式中间件-MongoDB

### 什么MongoDB
MongoDB是文档数据库，专门用来存储类似Json文档的数据库，

### 什么是文档 
json,xml,yaml这些都是文档。mongodb主要是用来存储什么文档呢，主要是存储Bson文档，Bson文档和json是类似的，不同在一于Bson文档主要是可以添加数据类型。
### 什么地方使用MongoDB
MongoDB主要用在微服务系统中。

## 微服务系统中系统中为什么要使用MongoDB
微服务系统有很多，包含电商微服务系统，包含OA微服务系统，以及其他不同微服务系统。主要通过电商微服务系统来进行举例说明为什么要使用MongoDB？先得到一个电商微服务系统。如何得到呢？电商微服务系统是由单体系统而来
### 单体电商系统  

![Alt text](/images/mongodb/mongodb_0001image.png)

在单体电商系统中，我们主要看一个业务场景，查询商品业务场景。   
查询商品实现过程，客户端发起请求 ——> 电商系统 ——> 电商数据库。  
如果客户端有这样一个要求，查询订单的时候，需要查询出商品。如何实现这个规则要求呢？   
查询订单实现过程，客户端发起请求——>电商系统——>电商数据库——>订单表和商品表进行关联。   

当时，如果电商系统并发量，业务量，数据量全部上升之后，单体系统查询，添加、修改、删除性能会急剧下降。进一步甚至导致系统宕机（宕机也就是无法访问），如果系统出现了宕机问题，直接导致客户端无法访问。  

在允许电商并发量、业务量、数据量同时上升的情况下，如何提升系统性能，防止系统宕机呢？  
方案：需要进行业务模块拆分   
结果：形成电商微服务系统   
### 电商微服务系统  

![Alt text](/images/mongodb/mongodb_0002image.png)

在微服务电商中，我们主要看一个业务场景，查询商品业务场景。  

查询商品实现过程，客户端发起查询请求——>电商系统——>电商微服务——>电商数据库。  
 
如果客户端有这样一个要求，查询订单时候，需要查询出商品。如何实现个规则要求呢？      
查询订单实现过程，客户端发起请求——>电商网站——>订单微服务——>电商数据库。   
电商网站——>商品微服务——>电商数据库。  

一次订单查询需要涉及到2个微服务（订单微服务、商品微服务）查询。  
如果并发量比较大，会导致两个微服务查询性能下降。因为是同步请求，同步请求并发处理有限   
如果2个微服务其中一个微服务宕机了，会导致无法进行查询。    

如何提升系统性能和防止系统宕机呢？   
方案： 使用MongoDB  
### 电商微服务系统-MongoDB   

![Alt text](/images/mongodb/mongodb_0003image.png)  
 
在微服务电商系统中，我们主要看一个业务场景，查询商品业务场景。   
查询商品实现过程，客户端发起请求——>电商系统——>电商微服务——>电商数据库。 

如果客户端有这样一个要求，查询订单的时候，需要查询出商品。如何实现这个规则要求呢？
查询订单实现过程，客户端发起请求——>电商网站——>MongoDB。  

在MongoDB中可以一次性查询出订单商品信息数据。而且还可以提升性能   

总结：这就是我们在电商系统中使用MongoDB原因  
1、先从单体电商系统分析   
2、然后再从电商微服务系统分析   
3、最后引入MongoDB  
4、由此得到微服务系统中为什么要使用MongoDB  

## 微服务系统中如何落地MongoDB
前提：  
1、电商微服务系统   
2、MongoDB  
3、MongoDB Compass   
步骤  
1、电商微服务系统准备  
 通过vs创建.Net7 电商微服务系统 
![Alt text](/images/mongodb/mongodb_0004image.png)  
2、MongoDB准备  
   2.1 MongoDB 前提准备  
      [MongoDB下载地址](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.0-signed.msi)：https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.0-signed.msi  

      MongoDB下载地址： https://www.mongodb.com/try/download/community  
      MongoDB安装：
![Alt text](/images/mongodb/mongodb_0005image.png)  


3、MongoDB Compass准备  
   3.1 MongoDB Compass前提准备  
     ​ [MongoDB Compass下载地址1.31.1-win32-x64](https://downloads.mongodb.com/compass/mongodb-compass-1.31.1-win32-x64.zip)：https://downloads.mongodb.com/compass/mongodb-compass-1.31.1-win32-x64.zip   
      [MongoDB Compass下载地址1.39.3-win32-x64](https://downloads.mongodb.com/compass/mongodb-compass-1.39.3-win32-x64.exe?_ga=2.86267800.1014844034.1693278031-905397172.1693277989)：https://downloads.mongodb.com/compass/mongodb-compass-1.39.3-win32-x64.exe     
      ![Alt text](/images/mongodb/mongodb_0006image.png)  

    3.2 MongoDB Shell   
[MongoDB Shell 下载地址](https://downloads.mongodb.com/compass/mongosh-1.10.6-win32-x64.zip) 
[Windows 环境下 MongoDB7.0 找不到 mongo.exe ](https://blog.csdn.net/a6661314/article/details/128741072)  
![Alt text](/images/mongodb/mongodb_0007image.png)  

### 添加商品场景落地  
条件  
1、电商微服务系统LKN.EBusiness  
2、MongoDB.Driver 
3、客户端访问  
4、MongoDB Compass 
步骤  
 1、先进入到电商微服务系统LKN.EBusiness 
   1.1 在项目中通过nuget引入MongoDB.Driver 
    ![Alt text](/images/mongodb/mongodb_0008image.png)  

   1.2先在电商网站中创建ProductController类，在ProductController类中添加代码
   ``` C# 
/// <summary>
    /// 商品控制器
    /// </summary>
    [ApiController]
    [Route("Product")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        } 
        /// <summary>
        /// 添加商品
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<Product> CreateProduct(Product product)
        {
            _productService.Create(product);
            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }
    }

   ```
   1.3、 然后在电商网站中创建ProductServer类，在ProductService类中添加代码   
   ``` C# 
    /// <summary>
/// 商品服务实现
/// </summary>
public class ProductService : IProductService
{
    private readonly IMongoCollection<Product> _products;

    public ProductService()
    {
        // 1、建立MongoDB连接
        var client = new MongoClient("mongodb://localhost:27017");
        // 2、获取商品库(自己创建商品数据)
        var database = client.GetDatabase("ProductDB");

        // 3、获取商品表(自己创建商品数)
        _products = database.GetCollection<Product>("Product");
     
    }

    public void Create(Product Product)
    {
        _products.InsertOne(Product);
    }
 }
```
1.4、然后启动电商网站实例一  
    ![Alt text](/images/mongodb/mongodb_0009image.png)  
``` bash
dotnet run 
```

>2、MongoDB 准备    
   >>2.1 先进入到MongoDB 中 
    ![Alt text](/images/mongodb/mongodb_0010image.png)  

   >>2.2 然后打开MongoDB.cfg配置，在里面添加
   ```bash 
# mongod.conf
# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: D:\Program Files\MongoDB\Server\7.0\data

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path:  D:\Program Files\MongoDB\Server\7.0\log\mongod.log

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1

#processManagement:

#security:

#operationProfiling:

#replication:

#sharding:

## Enterprise-Only Options:

#auditLog:

   ```
>>2.3、然后启动MongoDB 
``` bash
mongod.exe --config "D:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg"
```
![Alt text](/images/mongodb/mongodb_0011image.png)  

>3、客户端访问  
>> 3.1 、进入到浏览器，添加商品  
![Alt text](/images/mongodb/mongodb_0012image.png)  

>4、MongoDB Compass准备   
 >>4.1 启动Compass

![Alt text](/images/mongodb/mongodb_0013image.png)  

 >>4.2 登录Compass  

![Alt text](/images/mongodb/mongodb_0014image.png)  
>>4.3查看 Compass 
![Alt text](/images/mongodb/mongodb_0015image.png)  
### 添加商品数据原理
### MongoDB全局架构设计
高度模块化的设计是 MongoDB 的架构基础。在 MongoDB 中，除了少量的核心代码，其他一切皆为模块。

所有模块间是分层次、分类别的，MongoDB 官方共有五大类型的模块：核心模块、配置模块、事件模块、HTTP 模块、mail 模块、stream模块。它们之间的关系如下：

## MongoDB复制集
## MongoDB分片



