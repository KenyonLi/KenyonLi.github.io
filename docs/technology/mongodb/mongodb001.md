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

![Alt text](/images/mongodb/mongodb_0016image.png)  
在5种模块中，配置模块和核心模块是与MongoDB框架密切相关的。而事件模块则是HTTP模块和Email模块的基础。HTTP模块和mail 模块的“地位”类似，它们都是更关心应用层面。   
MongodDB Wiredtiger 架构设计   
Wiredtiger 引擎写入原理   

![Alt text](/images/mongodb/mongodb_0017image.png)  

第一件事情：把商品数据存储在缓存中   
第二件事情：缓存的数据同步到磁盘   
#### Wiredtiger 数据防丢失败原理

![Alt text](/images/mongodb/mongodb_0018image.png)  

如上图，图中多一个 journaling buffer 和 journal 文件   
+ journaling buffer    
存放 mongodb 增删改指令的缓冲区      
+ journal 文件    
类似于关系数据库中的事务日志   
引入 journaling 的目的是：  
journaling 能够使 mongodb 数据库由于意外故障后快速恢复   
##### wiredting 索引原理    

![Alt text](/images/mongodb/mongodb_0019image.png)  
 
MongoDB中的缓存和磁盘存储数据都是依靠B+树数据结构实现数据存储，root节点和Internal 节点存储索引数据，leaf 存储真实数据  
 总结：MongoDB如何存储数据的原理   
 1、MongoDB全局设计  
 2、MongoDB 存储引擎 Wiredtger  
 3、Wiredter 如何存取数据  
 4、Wiredter 如何防止数据丢失  
 5、Wiredter  数据面存储结构，主要使用的是B+树（索引和数据是分开的），如果是B树，那么就会存索引和数据类似于一本书的结构。以页为单位存储数据，和存储索引    

### 添加商品场景落地-情况1 
情况1：当客户端通过电商微服务往MongoDB添加商品数据的时候，如果一个个添加，添加的效率比较低。如何解决添加商品添加效率低的问题？  
方案：批量添加  
#### 如何落地批量添加  
条件  
1、least_conn   
步骤   
1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码   
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
        /// 批量添加商品
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpPost("ProductList")]
        public ActionResult<Product> CreateProductList(Product[] Products)
        {
            _productService.CreateList(Products.ToList());
            return CreatedAtAction("GetProduct", Products);
        }
    }
```

1.2、然后在电商网站中创建ProductServer类，在ProductService类中添加代码    

```C# 
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

    public void CreateList(List<Product> Products)
        {
            _products.InsertMany(Products);
        }
 }
```
>>1.3、客户端访问  
  >>>1、进入到浏览器，添加商品   

![Alt text](/images/mongodb/mongodb_0020image.png)  

### 查询商品场景落地  
分析： 当客户端通过电商微服务往MongoDB中添加商品数据时候，商品数据已经被成功添加到MongoDB中。如何通过MongoDB查询到商品数据呢？  
方案：查询商品   
#### 如何落地查询商品  
条件   
1、ip_hash    
步骤  
1.1 先在电商网站中创建ProductController 类 ，在ProductController类添加代码

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
        /// 商品单个商品
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(string id)
        {
            var product = _productService.GetProductById(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }
    }
```
 1.2、然后在电商网站中创建ProductService类，在ProductService类中添加代码

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

   public Product GetProductById(string id)
        {
            return _products.Find<Product>(product => product.Id == id).FirstOrDefault();
        }
 }
```

### 查询商品场景落地-情况1  
情况1：当客户端通过微服务往MongoDB中查询商品的时候，一个一个查询效率比较低，如何实现批量查询？   
方案： 批量查询   
##### 如何实现批量查询呢  
步骤  
1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码   
```C# 
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
        /// 查询商品列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return _productService.GetProducts().ToList();
        }
    }
```

1.2、然后在电商网站中创建ProductService类，在ProduceService类中添加代码
```C# 
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

   public IEnumerable<Product> GetProducts()
        {
            return _products.Find(product => true).ToList();
        }
 }
```

### 查询商品落地场景-情况2

情况2：当客户端通过电商微服务往MongoDB中查询商品的时候，批量查询很多数据，由于数据量过大，导致内存直接溢出。如何防止数据量过大，导致内存溢出的问题？
方案：分页查询  

如何落地分布查询呢    

步骤  

1.1 先在电商网站创建ProductController类，在ProductController类中添加代码  
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
        /// 商品分页查询
        /// </summary>
        /// <param name="Page"></param>
        /// <param name="PageSize"></param>
        /// <returns></returns>
        [HttpGet("Page")]
        public ActionResult<IEnumerable<Product>> GetProductsByPage(int Page ,int PageSize)
        {
            return _productService.GetProductsByPage(Page, PageSize).ToList();
        }
    }
```
1.2 然后在电商网站中创建ProductService类，在ProductService类中添加代码    

```C# 
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

   /// <summary>
        /// 商品分页查询
        /// </summary>
        /// <param name="id"></param>
        /// <param name="Product"></param>
        public IEnumerable<Product> GetProductsByPage(int Page,int PageSize)
        {
            var skip = (Page - 1) * PageSize;
            return _products.Find(x => true).Skip(skip).Limit(PageSize).ToList();
        }
 }
```
### 删除商品场景落地   
分析：当客户端通过电商微服务往MongoDB中添加商品的时候，数据量非常大，这个时候，客户端希望能够删除商品，如何删除商品？  
方案：删除商品   


如何删除商品？   

步骤    
1.1  先在电商网站中创建ProductControlles类，在ProductController类中添加
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
        /// 删除商品
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpDelete]
        public IActionResult DeletetProduct(Product product)
        {
            try
            {
                _productService.Delete(product);
            }
            catch (Exception)
            {
                throw;
            }

            return NoContent();
        }
    }
```

1.2 然后在电商网站中创建ProductService类，在ProductService类中添加代码  

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

   public void Delete(Product Product)
        {
            _products.DeleteOne(product => product.Id == Product.Id);
        }
 }
```
### 修改商品场景落地
分析：当客户端通过微服务往MongoDB中添加商品的时候，商品添加错误，希望能够修改商品，这个时候，客户端希望能够修改商品，如何修改商品？  
方案： 修改商品  
##### 如何修改商品？  
步骤  
1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码   
```C# 
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
        /// 修改商品
        /// </summary>
        /// <param name="id"></param>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult PutProduct(string id, Product product)
        {
            try
            {
                _productService.Update(id,product);
            }
            catch (Exception)
            {
                throw;
            }

            return NoContent();
        }
    }
```

1.2 然后在电商网站中创建ProductService类，在ProductService类中添加代码   
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

   		/// <summary>
        /// 更新
        /// </summary>
        /// <param name="id"></param>
        /// <param name="Product"></param>
        public void Update(string id, Product Product)
        {
            var update = Builders<Product>.Update;
            _products.UpdateOne(product => product.Id == id, update.Set("ProductTitle", Product.ProductTitle));
        }
 }
```
### 修改商品场景落地-情况1 
分析：当客户端通过电商微服务在MongoDB中修改商品的时候，只能修改一个文档的字段值，如果一个个修改文档的字段值，效率会比较低，导致修改效率下降，如何实现批量修改文档的字段值？  
方案：批量修改文档字段值   

如何落地批量修改文档字段值？ 
步骤  
1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码 
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
        /// 商品文档批量修改
        /// </summary>
        /// <param name="id"></param>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpPut("UpdateList")]
        public IActionResult PutProductList(string id, Product product)
        {
            try
            {
                _productService.UpdateList(id, product);
            }
            catch (Exception)
            {
                throw;
            }

            return NoContent();
        }
    }
```
​ 1.2、然后在电商网站中创建ProductService类，在ProductService类中添加代码

```C# 
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

   		/// <summary>
        /// 批量更新
        /// </summary>
        /// <param name="id"></param>
        /// <param name="Product"></param>
        public void UpdateList(string id, Product Product)
        {
            var filter = Builders<Product>.Filter;
            var update = Builders<Product>.Update;
            _products.UpdateMany(product => product.ProductCode == Product.ProductCode, update.Set("ProductTitle", Product.ProductTitle));
        }
 }
```
### 修改商品场景落地-情况2

分析：当客户端通过电商微服务往MongoDB中添加商品的时候，商品添加错误，希望能够修改商品，这个时候，只能一个个修改字段值，当商品有了新的属性字段的时候，如何动态更新字段？   

方案：动态增加商品字段   

如何落地动态增加商品字段？  
步骤  

1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码  

```C# 
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
        /// 修改商品
        /// </summary>
        /// <param name="id"></param>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpPut("UpdateField")]
        public IActionResult PutFieldProduct(string id, ProductUpdateFiledDto productUpdateFiledDto)
        {
            try
            {
                _productService.UpdateFiled(id, productUpdateFiledDto);
            }
            catch (Exception)
            {
                throw;
            }

            return NoContent();
        }
    }
```
1.2、然后在电商网站中创建ProductService类，在ProductService类中添加代码  

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

   		/// <summary>
        /// 更新字段(增加字段)
        /// </summary>
        /// <param name="id"></param>
        /// <param name="Product"></param>
        public void UpdateFiled(string id, ProductUpdateFiledDto productUpdateFiledDto)
        {
            var update = Builders<Product>.Update;
            _products.UpdateOne(product => product.Id == id, update.AddToSet("ProductTest", productUpdateFiledDto.ProductLike));
        }
 }
```
1.3 浏览器访问  

![Alt text](/images/mongodb/mongodb_0021image.png)  

1.4  compass结果显示  

![Alt text](/images/mongodb/mongodb_0022image.png)


## MongoDB复制集
分析：服务端被限制只能允许访问10个请求，那么就会限制请求数量进行访问，请求数进行访问，请求数可能来至于多个客户端，如果一个客户端都把请求数占用了。就会导致其他客户端无法进行请求，导致恶意攻击。  
方案： 客户端限流   
### 什么是复制集  
一份数据复制成多份。如图所示   

![Alt text](/images/mongodb/mongodb_0023image.png)  

项目中为什么要使用复制集   
微服务电商系统，如图所示   

![Alt text](/images/mongodb/mongodb_0024image.png)  

当客户端通过电商网站人MongoDB中查询数据的时候，如果MongoDB宕机，就会导致整个系统不可用，如何保证MongoDB高可用呢？  
方案： MongoDB复制集  
微服务电商系统-MongoDB复制集，如图所示   

![Alt text](/images/mongodb/mongodb_0025image.png)  

### 微服务项目中如何落地MongoDB复制集？  

MongoDB复制集集群概念   

![Alt text](/images/mongodb/mongodb_0026image.png)  


#### primary ： 主节点，负责接受客户端请求   
#### secondary: 从节点，负责从主节点复制数据 

### MongoDB 复制集准备  
条件  
1、MongoDB(3个MongoDB实例)
2、电商微服务系统   
步骤  
1、在MongoDB 中创建3个配置文件  

![Alt text](/images/mongodb/mongodb_0027image.png)  

1.2、在mongod-27018.cfg文件中，添加内容  
``` bash
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: D:\Program Files\MongoDB\Server\7.0\ReplicaSet-data\data-27018

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path:  D:\Program Files\MongoDB\Server\7.0\ReplicaSet-log\mongod-27018.log

# network interfaces
net:
  port: 27018
  bindIp: 127.0.0.1


#processManagement:

#security:

#operationProfiling:

replication:
  replSetName: rs0

#sharding:

## Enterprise-Only Options:

#auditLog:


```

​ 1.3、在mongod-27019.cfg文件中，添加内容
``` bash
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: D:\Program Files\MongoDB\Server\7.0\ReplicaSet-data\data-27019

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path:  D:\Program Files\MongoDB\Server\7.0\ReplicaSet-log\mongod-27019.log

# network interfaces
net:
  port: 27019
  bindIp: 127.0.0.1


#processManagement:

#security:

#operationProfiling:

replication:
  replSetName: rs0

#sharding:

## Enterprise-Only Options:

#auditLog:


```
​ 1.4、在mongod-27020.cfg文件中，添加内容
``` bash
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: D:\Program Files\MongoDB\Server\7.0\ReplicaSet-data\data-27020

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path:  D:\Program Files\MongoDB\Server\7.0\ReplicaSet-log\mongod-27020.log

# network interfaces
net:
  port: 27020
  bindIp: 127.0.0.1


#processManagement:

#security:

#operationProfiling:

replication:
  replSetName: rs0

#sharding:

## Enterprise-Only Options:

#auditLog:

```

2、在MongoDB 中创建三个数据目录

![Alt text](/images/mongodb/mongodb_0028image.png)  
 
3、在MongoDB 中创建日志目录

![Alt text](/images/mongodb/mongodb_0029image.png)  

4、MongoDB多个实例启动  
  4.1 mongod-27018实例启动 
  ```bash 
  >mongod.exe -f "D:\Program Files\MongoDB\Server\7.0\bin\ReplicaSet\mongod-27018.cfg"
  ```
![Alt text](/images/mongodb/mongodb_0030image.png)  

   4.2 mongod-27019实例启动  
``` bash 
mongod.exe -f "D:\Program Files\MongoDB\Server\7.0\bin\ReplicaSet\mongod-27019.cfg"
```
![Alt text](/images/mongodb/mongodb_0031image.png)  
   4.3 mongod-27020 实例启动  
   ``` bash
   >mongod.exe -f ./ReplicaSet/mongod-27020.cfg
   ``` 
![Alt text](/images/mongodb/mongodb_0032image.png)  

### MongoDB 复制集角色分配  
条件
1.mongosh.exe  
[Windows 环境下 MongoDB7.0 找不到 mongo.exe ](https://blog.csdn.net/a6661314/article/details/128741072)  
步骤  
1、primary节点初始化  
1.1 连接27018 节点 `mongosh.exe --host 127.0.0.1 --port 27018 `

![Alt text](/images/mongodb/mongodb_0033image.png)  

1.2 初始化主节点 `rs.initiate()`

```bash
  rs.initate();
```
![Alt text](/images/mongodb/mongodb_0034image.png)  

1.3、主节点状态查看 `rs.status()`
``` bash 
rs.status();
```
![Alt text](/images/mongodb/mongodb_0035image.png)  

1.4 主节点中添加27019节点  
```bash
rs.add("127.0.0.1:27019");
```
![Alt text](/images/mongodb/mongodb_0036image.png)  


1.5、主节点中添加27020节点
``` bash 
rs.add("127.0.0.1:27020");
```

![Alt text](/images/mongodb/mongodb_0037image.png)  

1.6查看节点状态  
```bash
rs.status();

```
![Alt text](/images/mongodb/mongodb_0038image.png)  


MongoDB复制集 Compass 连接  

compass 连接地址   
`mongodb://localhost:27018,localhost:27019,localhost:27020/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`   

![Alt text](/images/mongodb/mongodb_0039image.png)  

### MongoDB 复制集电商微服务项目连接  

![Alt text](/images/mongodb/mongodb_0040image.png)  
 
 ##### MongoDB复制集缺陷
  1、数据量过大，MongoDB所在的磁盘容量有限，无法存储海量数据   
  2、高并发的写，一个MongoDB主节点并发处理能力有限，无法解决高并发写  
  所以：需要使用MongoDB分片  
## MongoDB分片



