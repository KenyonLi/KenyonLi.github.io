---
title: '分布式中间件-ElasticSearch'
date: 2023-09-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '分布式中间件-ElasticSearch'
categories:
- 'C#'
---
## 目录

[[toc]]

## 分布式中间件-ElasticSearch
### 什么是ElasticsSearch
Elasticsearch 是全文搜索引擎。
### 什么全文搜索  
![Alt text](/images/elasticsearch/elasticsearch_001image.png)
客户端输入“100周年”，能够把数据库中一段话查询出来，就是是全文搜索。  
### 什么引擎  
能够完成全文搜索这件事情的工具，就叫做引擎。  
ElasticSearch 主要用在微服务系统中。  

### 什么地方使用ElastaicSearch  
ElasticSearch主要用在微服务系统中。

### 微服务系统中为什么要使用ElasticSearch 
微服务系统有很多，包含电商微服务系统，包含OA微服务系统，以及其他不同微服务系统。主要通过电商微服务系统来进行举例说明为什么要使用ElasticSearch?先得到一个电商微服务系统。如何得到？
电商微服务系统是由单体电商系统而来   
### 单体电商系统   

![Alt text](/images/elasticsearch/elasticsearch_002image.png)

在单体电商系统中，我们主要看一个业务场景，搜索商品业务场景。  
搜索商品实现过程，客户端发起查询请求——>电商系统——>电商数据库。  

如果客户端有这样一个要求，查询订单的时候，需要查询出商品。如何实现这个规则要求呢？   
查询订单实现过程，客户端发起查询请求——>电商系统——>电商数据库——>订单表和商品表进行关联。   

当时，电商系统并发量、业务量、数据量同时上升之后，单体系统查询，添加、修改、删除性能会急剧下降。进一步甚至会导致系统宕机（宕机也就是无法访问），如果系统出现了宕机问题，直接导致客户端
无法访问。  
在允许电商并发量、业务量、数据量同时上升情况下，如何提升系统性能，防止系统宕机呢？   
方案：需要进行业务模块拆分   
结果：形成电商微服务系统   

### 电商微服务系统  

![Alt text](/images/elasticsearch/elasticsearch_003image.png)

在电商微服务系统中，我们主要看业务场景，搜索商品业务场景。    
搜索商品实现过程，客户端发起查询请求——>电商系统——>电商微服务——>电商数据库。   


如果客户端有这样一个要求，查询订单的时候，需要搜索出商品。如何实现这个规则要求呢？   
查询订单实现过程，客户端发起查询请求——>电商网站——>订单微服务——>电商数据库。    

电商网站——> 电商微服务——> 电商数据库。  

一个订单查询需要涉及到2个微服务（订单微服务、商品微服务）查询。     
如果并发量比较大，会导致两个微服务查询性能下降。因为是同步请求，同步请求并发处理有限   
如果2个微服务其中一个微服务宕机了，会导致无法进行查询。    
如何提升系统性能和防止系统宕机呢？   
方案：使用ElasticSearch   

### 电商微服务系统-网站拆分   

![Alt text](/images/elasticsearch/elasticsearch_004image.png)

### 电商微服务系统-搜索微服务  

![Alt text](/images/elasticsearch/elasticsearch_005image.png)

### 电商微服务系统-ElasticSearch  

![Alt text](/images/elasticsearch/elasticsearch_006image.png)

在微服务电商系统中，我们主要看一个业务场景，搜索商品业务场景。    
搜索商品实现过程，客户端发起请求——>电商系统——>商品微服务——>电商数据库。    

如果客户端有这样一个要求，查询订单的时候，需要查询商品。如何实现个规则要求呢？    
查询订单实现过程，客户端发起请求——>电商网站——>ElasticSearch。   

在ElasticSearch中可以一次性查询出订单商品数据。而且还可以提升性能    
总结：这就是我们在电商系统中使用ElasticSearch的原因   
1、先从单体电商系统分析   
2、然后再从电商微服务系统分析  
3、最后引入ElasticSearch   
4、由此得到微服务系统中为什么要使用ElasticSearch      

## 微服务系统中如何落地ElasticSearch   
前提   
1、电商微服务系统   
2、ElasticSearch   
3、kibana   
步骤    
1、电商微服务系统准备   
通过vs创建.Net7电商系统微服务系统    

![Alt text](/images/elasticsearch/elasticsearch_007image.png)

2、ElasticSearch准备 
2.1 ElasticSearch 前提  
 
​ jdk1.8下载地址：https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html

​ jdk1.8安装：直接搜索安装

​ 2.2 Elasticsearch准备

​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-10-1

​ 文档地址：https://www.elastic.co/guide/en/elasticsearch/reference/7.10/index.html

​ Elasticsearch安装：
![Alt text](/images/elasticsearch/elasticsearch_008image.png)




3、kibana准备   
 3.1、kibana 下载   
 kibana 下载 https://www.elastic.co/cn/downloads/past-releases/logstash-7-10-1   
[kibana-7.10.1-windows-x86_64.zip 下载](https://artifacts.elastic.co/downloads/kibana/kibana-7.10.1-windows-x86_64.zip)  
文档地址：https://www.elastic.co/guide/en/logstash/7.10/index.html  
 3.2、安装 kibana   
![Alt text](/images/elasticsearch/elasticsearch_009image.png)  

### 添加商品场景落地  
条件   
1、电商微服务系统LKN.EBusiness.Service   
2、NEST   
3、客户端访问   
4、kibana   
步骤   
1、先进入到电商微服务系统LKN.EBusiness.Service   
1.1 、 在项目中通过nuget引入NEST 

![Alt text](/images/elasticsearch/elasticsearch_010image.png)  
 
1.2 先在电商网站中创建ProductController类

![Alt text](/images/elasticsearch/elasticsearch_011image.png)    

然后在ProductController类中添加代码   

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
        public ActionResult<Product> PostProduct(Product product)
        {
            _productService.Create(product);
            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }
    }
```

1.3、然后在电商网站中创建ProductService类

![Alt text](/images/elasticsearch/elasticsearch_012image.png)    

然后在ProductService类中添加代码     

``` C# 
/// <summary>
/// 商品服务实现
/// </summary>
public class ProductService : IProductService
{
    private readonly IMongoCollection<Product> _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri("http://localhost:9200");
                // var defaultIndex = "products";

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

    public void Create(Product Product)
        {
            elasticClient.Index(Product,idx => idx.Index("products"));
        }
 }
```
1.4、然后在电商网站中创建product类

![Alt text](image.png)

![Alt text](/images/elasticsearch/elasticsearch_013image.png)    

然后在product类中添加代码   
``` C# 
/// <summary>
    /// 商品
    /// </summary>
    public class Product
    {
        public string Id { set; get; }
        public string ProductCode { set; get; }    //商品编码
        public string ProductUrl { set; get; }         // 商品主图 text
        public string ProductTitle { set; get; }       //商品标题
        public string ProductDescription { set; get; }     // 图文描述
        public decimal ProductVirtualprice { set; get; } // 商品虚拟价格
        public decimal ProductPrice { set; get; }       //价格
        public int ProductSort { set; get; }    //商品序号
        public int ProductSold { set; get; }        //已售件数
        public int ProductStock { set; get; }       //商品库存
        public string ProductStatus { set; get; } // 商品状态
        public int score { set; get; } //商品级别
    }
```

1.5 、 然后启动电商网站实例一   

![Alt text](/images/elasticsearch/elasticsearch_014image.png)    


2、 ElasticSearch 准备  
2.1  先进入到ElasticSearch中，进入到config目录中   

![Alt text](/images/elasticsearch/elasticsearch_015image.png)    

``` yml
# ======================== Elasticsearch Configuration =========================
#
# NOTE: Elasticsearch comes with reasonable defaults for most settings.
#       Before you set out to tweak and tune the configuration, make sure you
#       understand what are you trying to accomplish and the consequences.
#
# The primary way of configuring a node is via this file. This template lists
# the most important settings you may want to configure for a production cluster.
#
# Please consult the documentation for further information on configuration options:
# https://www.elastic.co/guide/en/elasticsearch/reference/index.html
#
# ---------------------------------- Cluster -----------------------------------
#
# Use a descriptive name for your cluster:
#
cluster.name: my-application-cluster
#
# ------------------------------------ Node ------------------------------------
#
# Use a descriptive name for the node:
#
node.name: node-1
#
# Add custom attributes to the node:
#
#node.attr.rack: r1
#
# ----------------------------------- Paths ------------------------------------
#
# Path to directory where to store the data (separate multiple locations by comma):
#
#path.data: /path/to/data
#
# Path to log files:
#
#path.logs: /path/to/logs
#
# ----------------------------------- Memory -----------------------------------
#
# Lock the memory on startup:
#
#bootstrap.memory_lock: true
#
# Make sure that the heap size is set to about half the memory available
# on the system and that the owner of the process is allowed to use this
# limit.
#
# Elasticsearch performs poorly when the system is swapping the memory.
#
# ---------------------------------- Network -----------------------------------
#
# Set the bind address to a specific IP (IPv4 or IPv6):
#
network.host: localhost
#
# Set a custom port for HTTP:
#
http.port: 9200
cluster.routing.allocation.disk.threshold_enabled: false
http.cors.enabled: true
http.cors.allow-origin: "*"
#
# For more information, consult the network module documentation.
#
# --------------------------------- Discovery ----------------------------------
#
# Pass an initial list of hosts to perform discovery when this node is started:
# The default list of hosts is ["127.0.0.1", "[::1]"]
#
#discovery.seed_hosts: ["host1", "host2"]
#
# Bootstrap the cluster using an initial set of master-eligible nodes:
#
#cluster.initial_master_nodes: ["node-1", "node-2"]
#
# For more information, consult the discovery and cluster formation module documentation.
#
# ---------------------------------- Gateway -----------------------------------
#
# Block initial recovery after a full cluster restart until N nodes are started:
#
#gateway.recover_after_nodes: 3
#
# For more information, consult the gateway module documentation.
#
# ---------------------------------- Various -----------------------------------
#
# Require explicit names when deleting indices:
#
#action.destructive_requires_name: true

```

2.3 、然后启动ElasticSearch    

``` bash 
elasticsearch.bat
```
![Alt text](/images/elasticsearch/elasticsearch_016image.png)    

2.4、ElasticSearch 启动是否成功  

![Alt text](/images/elasticsearch/elasticsearch_017image.png)    

3、客户端访问   

3.1 进入到浏览器，添加商品   

![Alt text](/images/elasticsearch/elasticsearch_018image.png)    

4、kibana 准备   
4.1、启动 kibana 

``` bash
D:\test\kibana-7.10.1-windows-x86_64\bin>kibana.bat
```
打开开发工具    

![Alt text](/images/elasticsearch/elasticsearch_019image.png)   


``` js
GET products_cluster/_search
{
    "query":{
        "match":{"productTitle":"手机"}
    }
}
```
![Alt text](/images/elasticsearch/elasticsearch_020image.png)   

#### 添加商品数据原理  

##### 全局设计   
[ElaticSearch 参考](http://www.codebaoku.com/tech/tech-yisu-461541.html)
###### 商品数据写入过程   
  1、不断将Document写入到 `In-memory buffer` (内存缓存区)   
  2、当满足一定条件后内存缓冲区中的Documents刷新到高速缓存（`cache`）。    
  3、生成新的segment,这个segment 还在 `cache` 中。    
  4、这时候还没有 commit ,但是已经可以被读取了。   
  画图如下：    

![Alt text](/images/elasticsearch/elasticsearch_021image.png)   

数据从 `buffer` 到 `cache` 的过程是定期每秒刷新一次。所以新写入的`Document`最慢1秒就可以在`cache`中被搜索到。   
而`Document` 从 `buffer` 到 `cache` 的过程叫做 `refresh`。 一般是1秒刷新一次，不需要进行额外修改。当然，如果有修改的需要，可以参考文末的相关资料。这也就是是为什么说`ElasticSearch`是 `准实时`的。    
###### 商品数据写入防止丢失  
1、`Document` 不断写入到 `In-memory buffer` ,此时也会追加 `translog`。    
2、当`buffer` 中的数据每秒 `refresh` 到 `cache` 中时，`translog` 并没有进入到刷新磁盘，是持续追加的。   
3、`translog` 每隔 5s 会 `fsync` 到磁盘。  
4、`translog` 会断续累加变得越来越大，当`translog` 大到一定程度或者每隔一段时间，会执行`flush`。   

![Alt text](/images/elasticsearch/elasticsearch_022image.png)  

`flush` 操作会分为以下几步执行   
1. `buffer` 被清空    
2. 记录 `commit point`   
3. `cache` 内的 `segment` 被 `fsync` 刷新到磁盘    
4. `translog`  被删除。   

![Alt text](/images/elasticsearch/elasticsearch_023image.png)   

值得注意的是：   
1. `translog` 每 `5s` 刷新一次磁盘，所以故障重启，可能会丢失`5s`的数据。     
2. `translog` 执行`flush`操作，默认`30`分钟一次，或者`translog`太大（2G）   

![Alt text](/images/elasticsearch/elasticsearch_024image.png)   

总结：  
1. ES把商品数据存储到缓冲区   
2. 从缓冲区中同步到缓存中    
3. 从缓存中异步刷新到磁盘   

#### 数据结构设计   
##### 数据设计结构  
1、Dcoument    
2、Index(数据库)      
3、Index(查询)   
##### 数据格式如下  

![Alt text](/images/elasticsearch/elasticsearch_025image.png)   

### 查询商品业务场景落地   

步骤   
1、先在 `ProductController` 类中添加代码   
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
        /// 搜索商品
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

2、然后在ProductService类中添加代码   

``` C# 

 /// <summary>
/// 商品服务实现
/// </summary>
public class ProductService : IProductService
{
    private readonly IMongoCollection<Product> _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri("http://localhost:9200");
                // var defaultIndex = "products";

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

    public Product GetProductById(string id)
        {
            return elasticClient.Get<Product>(id, idx => idx.Index("products")).Source;
        }
 }

```

3、客户端访问，进入到浏览器进行访问   


![Alt text](/images/elasticsearch/elasticsearch_026image.png)   


### 搜索商品业务场景落地  

步骤  
1、先在ProductController类中添加代码  

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
        /// 全文查询
        /// </summary>
        /// <param name="productDto"></param>
        /// <returns></returns>
        [HttpGet("KeywordSearch")]
        public ActionResult<IEnumerable<Product>> GetProductsKeywordSearch([FromQuery]ProductDto productDto)
        {
            var products = _productService.GetProductsKeywordSearch(productDto);

            if (products == null)
            {
                return NotFound();
            }

            return products.ToList();
        }
    }
```

2、然后在ProductService类中添加代码   

``` C# 
/// <summary>
/// 商品服务实现
/// </summary>
public class ProductService : IProductService
{
    private readonly IMongoCollection<Product> _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri("http://localhost:9200");
                // var defaultIndex = "products";

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

   public IEnumerable<Product> GetProductsKeywordSearch(ProductDto productDto)
        {
           return elasticClient.Search<Product>(s => s
            .Index("products")
            .Query(q => q
              .Match( mq => mq.Field(f => f.ProductTitle).Query(productDto.ProductTitle))
            )
           ).Documents;
        }
 }
```

3、客户端访问，进入到浏览器进行访问   

![Alt text](/images/elasticsearch/elasticsearch_027image.png)   

##### 正排索引  

`正排索引` ：是以文档对象的唯一ID作为索引，以文档内容作为记录的结构。  

![Alt text](/images/elasticsearch/elasticsearch_028image.png)    

##### 倒排索引 
`倒排索引`： `Inverte index` ,指的是将文档内容中的单词作为索引，将包含该词的文档ID作为记录的结构。  

![Alt text](/images/elasticsearch/elasticsearch_029image.png)    

##### 什么是分词   
把一段话分开   
苹果20手机--> 苹果20 手机 单词 word     

倒排索引的生成过程    
下面通过一个例子来说明下倒排索引的生成过程。   

假设目前有以下两个文档内容：  

``` 
productTitle:苏州街维亚大厦  
productTitle:桔子酒店苏州街店
```

![Alt text](/images/elasticsearch/elasticsearch_030image.png)    
![Alt text](/images/elasticsearch/elasticsearch_031image.png)    


有了倒排索引，能快速、灵活地实现各类搜索需求。整个搜索过程中我们不需要做任何文本的模糊匹配。

例如，如果需要在上述两个文档中查询 苏州街桔子 ，可以通过分词后 苏州街 查到 1、2，通过 桔子 查到 2，然后再进行取交取并等操作得到最终结果。

![Alt text](/images/elasticsearch/elasticsearch_032image.png)    

倒排索引结构   

![Alt text](/images/elasticsearch/elasticsearch_033image.png)       

Term Dictionary：存储单词和文档Id对应关系   

Postings List：记录表，记录文档Id   

文档 id（DocId, Document Id），包含单词的所有文档唯一 id，用于去正排索引中查询原始数据。   
词频（TF，Term Frequency），记录 Term 在每篇文档中出现的次数，用于后续相关性算分。   
位置（Position），记录 Term 在每篇文档中的分词位置（多个），用于做词语搜索（Phrase Query）。   
偏移（Offset），记录 Term 在每篇文档的开始和结束位置，用于高亮显示等。   


![Alt text](/images/elasticsearch/elasticsearch_034image.png)      

##### 倒排索引存储结构   
1、segment 段存储结构  

倒排索引term索引    

![Alt text](/images/elasticsearch/elasticsearch_035image.png)      


完整搜索过程   

![Alt text](/images/elasticsearch/elasticsearch_036image.png)      


#### 搜索商品数据分词
什么是分词   
分词：就是将一句话，拆分成一个个的词。例如：  

![Alt text](/images/elasticsearch/elasticsearch_037image.png)     


什么是分词器    
如何将一句话拆分成一个一个的词。就是分词器    

搜索商品分词落地    
步骤   

1、先在ProductController类中添加代码   
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
        /// 全文查询
        /// </summary>
        /// <param name="productDto"></param>
        /// <returns></returns>
        [HttpGet("KeywordSearch")]
        public ActionResult<IEnumerable<Product>> GetProductsKeywordSearch([FromQuery]ProductDto productDto)
        {
            var products = _productService.GetProductsKeywordSearch(productDto);

            if (products == null)
            {
                return NotFound();
            }

            return products.ToList();
        }
    }

```

2、然后在ProductService类中添加代码    
``` C# 
 /// <summary>
/// 商品服务实现
/// </summary>
public class ProductService : IProductService
{
    private readonly IMongoCollection<Product> _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri("http://localhost:9200");
                // var defaultIndex = "products";

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

   public IEnumerable<Product> GetProductsKeywordSearch(ProductDto productDto)
        {
           return elasticClient.Search<Product>(s => s
            .Index("products")
            .Query(q => q
              .Match( mq => mq.Field(f => f.ProductTitle).Query(productDto.ProductTitle))
            )
           ).Documents;
        }
 }
```

3、客户端访问，进入到浏览器进行访问   


![Alt text](/images/elasticsearch/elasticsearch_038image.png)     

4、 kibana 中查询   

![Alt text](/images/elasticsearch/elasticsearch_039image.png)     

为什么输入手机可以查询出手机13
核心原因：使用分词器导致

进入kibana
输入
``` js
GET products/_analyze
{
   "text":"手机13"
}
```
![Alt text](/images/elasticsearch/elasticsearch_040image.png)      


手机13被分词成了 手 机 13   

每一个分词叫做token   

分词具体解析   

1、token 分词标识    

2、start_offset 分词开始偏移量   

3、end_offset 分词结束偏移量   

4、type 分词类型(类似于字段类型)   

5、position 分词位置    

当客户端进行商品搜索的时候，输入商品名称“手机”，”手机“也被分词，分成“手” 和 “机”。然后使用倒排索引进行查询，就查询出了商品名称对应的“手机13”数据。   

##### 分词执行原理   
###### 分词器   
1、**StandardAnalyzer**   

默认使用的是标准分词器StandardAnalyzer   

###### 分词器执行过程     

![Alt text](/images/elasticsearch/elasticsearch_041image.png)        

 
StandardAnalyzer主要做了3件事情  

1、文本过滤 char_filter 作用：过滤出不必要的信息，例如：一些字符 < > , 。等等   

2、分词 tokenizer 作用：将句子进行分词操作   

3、词单元过滤器 filter：将分的词进行自定义操作，例如：将大写转换成小写，将小写转换成大写   

###### 分词字段   
只有文本(text)类型的字段才能被分词   

###### 分词字段映射   
Mapping 每一个字段通过映射设置相应类型  

###### 分词字段查询  
1、进入kibana，输入   

``` js
GET products/_mapping
{

}
```

2、kibana结果显示

``` js
{
  "products" : {
    "mappings" : {
      "properties" : {
        "id" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "productCode" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "productDescription" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "productPrice" : {
          "type" : "float"
        },
        "productSold" : {
          "type" : "long"
        },
        "productSort" : {
          "type" : "long"
        },
        "productStatus" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "productStock" : {
          "type" : "long"
        },
        "productTitle" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "productUrl" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "productVirtualprice" : {
          "type" : "float"
        },
        "score" : {
          "type" : "long"
        }
      }
    }
  }
}
```

![Alt text](/images/elasticsearch/elasticsearch_042image.png)        


maappings映射解析

1、type：text 只有文本的字段才能被分词，其他不会被分词。只有字符串类型才能被转换成text文本类型

2、keyword：字符串类型字段不分词。固定值查询

##### 商品搜素数据分词-情况1
分析：默认商品名称字段都是默认进行分词的，分词之后，都是大写字母转换成小写，现在想将小写字母转换成大写字母？如何实现

方案：自定义分词

###### 如何落地自定义分词
1、kibana

步骤

1、创建自定义分词   

``` js
PUT products_3
{
  "settings": {
    "analysis": {
      "analyzer": {
        "product_custom":{
            "type": "custom",
            "char_filter":  [ "html_strip"],
            "tokenizer":  "standard",
            "filter":[ "uppercase"]
        }
    }
  }},
  "mappings": {
			"properties": {
				"productTitle": {
					"type": "text",
					"analyzer": "product_custom"
				}
			}
	}
}
```

![Alt text](/images/elasticsearch/elasticsearch_043image.png)        


3、查询商品名称字段映射情况

​ 3.1、在kibana中输入
``` js
GET products_3/_mapping
{

}
```

![Alt text](/images/elasticsearch/elasticsearch_044image.png)        


4、查询商品名称字段分词情况

​ 3.1、在kibana中输入
``` js
GET products_3/_analyze
{
  "field": "productTitle", 
  "text":  "手机iphone"
}
```

![Alt text](/images/elasticsearch/elasticsearch_045image.png)        



#### 商品搜素数据分词-情况2  
分析：默认商品名称字段都是默认进行分词的，分词之后，中文都被拆分成了一个一个的词，完全不符合国人的语意情况，如何解决中文分词问题呢？   

方案：自定义分词器   

如何落地自定义分词器   

1、elasticsearch-analysis-ik   

步骤   

1、elasticsearch-analysis-ik前提准备   

​ 1.1、下载地址：https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.10.1/elasticsearch-analysis-ik-7.10.1.zip   

​ 1.2、文档地址：https://github.com/medcl/elasticsearch-analysis-ik    

![Alt text](/images/elasticsearch/elasticsearch_046image.png)        

​ 1.3、elasticsearch-analysis-ik安装：

​ 1.3.1、进入到elasticsearch-7.10.1 bin目录中

![Alt text](/images/elasticsearch/elasticsearch_047image.png)        


​ 1.3.2、使用cmd进行安装   
```bash
#使用 
elasticsearch-plugin.bat install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.10.1/elasticsearch-analysis-ik-7.10.1.zip   
```
​ 1.2.3、进入大plugins目录中，安装成功
![Alt text](image.png)
![Alt text](/images/elasticsearch/elasticsearch_048image.png)        
![Alt text](/images/elasticsearch/elasticsearch_049image.png)        


1.3.4、ES重新启动

4、elasticsearch-analysis-ik应用

​ 4.1、创建elasticsearch-analysis-ik分词器
```js
PUT products_4
{
  "mappings": {
			"properties": {
				"productTitle": {
					"type": "text",
					"analyzer": "ik_max_word"
				}
			}
	}
}
```
4.2 kibana 查看展示
![Alt text](/images/elasticsearch/elasticsearch_050image.png)        


4.3、查询商品名称字段映射情况

​ 4.3.1、在kibana中输入
``` js
GET products_4/_mapping
{

}
```

![Alt text](/images/elasticsearch/elasticsearch_051image.png)        


4.4、查询商品名称字段分词情况

​ 4.4.1、在kibana中输入
```js
GET products_4/_analyze
{
  "field": "productTitle", 
  "text":  "手机iphone"
}
```

![Alt text](/images/elasticsearch/elasticsearch_052image.png)        


### 聚合商品业务场景落地
#### 什么是聚合
聚合：就是统计。做报表的核心方式  

#### 聚合商品价格平均数落地
步骤  

1、先在ProductController类中添加代码  
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
        /// 聚合查询
        /// </summary>
        /// <param name="productDto"></param>
        /// <returns></returns>
        [HttpGet("AggreateTextSearch")]
        public ActionResult<ValueAggregate> GetProductsAggreateTextSearch([FromQuery] ProductDto productDto)
        {
            var products = _productService.GetProductsAggreateTextSearch(productDto);

            if (products == null)
            {
                return NotFound();
            }

            return products;
        }
    }
```

2、然后在ProductService类中添加代码  
``` C# 

/// <summary>
/// 商品服务实现
/// </summary>
public class ProductService : IProductService
{
    private readonly IMongoCollection<Product> _products;

    public ProductService()
    {
        #region 1、单实例连接
            {
                var node = new Uri("http://localhost:9200");
                // var defaultIndex = "products";

                var settings = new ConnectionSettings(node);
                //.DefaultIndex(defaultIndex);

                elasticClient = new ElasticClient(settings);
            }
            #endregion
     
    }

   public ValueAggregate GetProductsAggreateTextSearch(ProductDto productDto)
        {
            #region 1、聚合查询(平均值)
            {
                var ducmentsss = elasticClient.Search<Product>(s => s
                         .Index("products")
                         .Query(q => q.Match(mq => mq.Field(f => f.ProductTitle).Query(productDto.ProductTitle)))
                         .Aggregations(a => a.Average("ProductPrice_Average", aa => aa.Field(f => f.ProductPrice)))
                       ).Aggregations.Average("ProductPrice_Average");

                return ducmentsss;
            }
            #endregion
     }
 }
```

3、客户端访问，进入到浏览器进行访问  


![Alt text](/images/elasticsearch/elasticsearch_053image.png)        


#### 聚合商品数据原理  

##### 函式、列式数据存储  

![Alt text](/images/elasticsearch/elasticsearch_054image.png)     


行式存储：是一行一行进行存储，   

列式存储：是一列一列进存储。列式存储有利于做聚合操作。  

`doc_values`结构   
`doc_values`字段文件 

![Alt text](/images/elasticsearch/elasticsearch_055image.png)     


#### 查询商品分页业务场景落地
分析：当客户端通过电商微服务往Elasticsearch中添加商品数据的时候，商品数据已经被成功添加到Elasticsearch中。如何从Elasticsearch中搜索商品数据？   

方案：商品分页   

如何落地商品分页   

条件 

1、`ip_hash`   

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
        /// 查询商品(分页查询)
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult<IEnumerable<Product>> GetProductsByPage(int page, int pageSize)
        {
            var products = _productService.GetProductsByPage(page, pageSize).ToList();

            if (products == null)
            {
                return NotFound();
            }

            return products;
        }
    }
```

​ 1.2、然后在电商网站中创建ProductService类，在ProductService类中添加代码   

``` C# 
/// <summary>
/// 商品服务实现
/// </summary>
public class ProductService : IProductService
{
    private readonly IMongoCollection<Product> _products;

    public ProductService()
    {
        // 1、建立Elasticsearch连接
        var client = new MongoClient("Elasticsearch://localhost:27017");
        // 2、获取商品库(自己创建商品数据)
        var database = client.GetDatabase("ProductDB");

        // 3、获取商品表(自己创建商品数)
        _products = database.GetCollection<Product>("Product");
     
    }

  public IEnumerable<Product> GetProductsByPage(int page, int pageSize)
        {
            #region 1、直接查询
            {
                var request = new SearchRequest("products");
                request.From = (page-1)* pageSize;
                request.Size = pageSize;

                return elasticClient.Search<Product>(request).Documents;
            }
            #endregion

            #region 2、委托查询
            {
                return elasticClient.Search<Product>(s => s
                .Index("products")
                .From((page - 1) * pageSize)
                .Size(pageSize)
                ).Documents;
            }
            #endregion
        }
 }

```
#### 删除商品业务场景落地

分析：当客户端通过电商微服务往Elasticsearch中添加商品的时候，数据量非常大，这个时候，客户端希望能够删除商品，如何删除商品？  

方案：删除商品  

如何删除商品？  
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
        /// 删除商品
        /// </summary>
        /// <param name="id"></param>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(string id)
        {

            try
            {
                _productService.Delete(id);
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

``` C# 
 /// <summary>
/// 商品服务实现
/// </summary>
public class ProductService : IProductService
{
    private readonly IMongoCollection<Product> _products;

    public ProductService()
    {
        // 1、建立Elasticsearch连接
        var client = new MongoClient("Elasticsearch://localhost:27017");
        // 2、获取商品库(自己创建商品数据)
        var database = client.GetDatabase("ProductDB");

        // 3、获取商品表(自己创建商品数)
        _products = database.GetCollection<Product>("Product");
     
    }

    public void Delete(string Id)
        {
            elasticClient.Delete<Product>(Id, idx => idx.Index("products"));
        }
 }
 ```
#### 修改商品业务场景落地
分析：当客户端通过电商微服务往Elasticsearch中添加商品的时候，商品添加错误，希望能够修改商品，这个时候，客户端希望能够修改商品，如何修改商品？   

方案：修改商品   

如何落地修改商品？   
步骤   

1.1 先在电商网站中创建ProductController类，在ProductController类中添加代码   
``` c#
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
            if (id != product.Id)
            {
                return BadRequest();
            }

            try
            {
                _productService.Update(product);
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
        // 1、建立Elasticsearch连接
        var client = new MongoClient("Elasticsearch://localhost:27017");
        // 2、获取商品库(自己创建商品数据)
        var database = client.GetDatabase("ProductDB");

        // 3、获取商品表(自己创建商品数)
        _products = database.GetCollection<Product>("Product");
     
    }

   		/// <summary>
        /// 更新
        /// </summary>
        /// <param name="Product"></param>
        public void Update(Product Product)
        {
            elasticClient.Update<Product>(Product.Id, idx =>
                idx.Upsert(Product).Index("products")
            );
        }
 }
 ```

### Elasticsearch集群  

#### Elasticsearch集群架构

![Alt text](/images/elasticsearch/elasticsearch_056image.png)     


架构说明 
 
1、1个主节点（Master node）  
 
管理索引（创建索引、删除索引）、分配分片  
维护元数据  
管理集群节点状态  
一个Elasticsearch集群中，只有一个Master节点。在生产环境中，内存可以相对  
小一点，但机器要稳定。  

2、2个数据（Data node）  

在Elasticsearch集群中，会有N个DataNode节点。DataNode节点主要负责：  
数据写入、数据检索，大部分Elasticsearch的压力都在DataNode节点上  
在生产环境中，内存最好配置大一些  

1、高可用 集群  

2、海量数据并发读 副本  

3、海量数据并发写 分片  

4、海量数据存储 分片  

#### 微服务项目中如何落地Elasticsearch集群
Elasticsearch集群落地前提  
条件  

1、Master 1个实例

2、DataNode 2个实例

3、elasticsearch-head-master

4、电商微服务项目

Elasticsearch Master 阶段准备
步骤

1、Master准备

​ 1.1、先创建Elasticsearch Master节点

![Alt text](/images/elasticsearch/elasticsearch_057image.png)     


1.2、然后在Elasticsearch中config目录中，找到elasticsearch.yml文件

![Alt text](/images/elasticsearch/elasticsearch_058image.png)     

1.3、然后elasticsearch.yml内添加内容  

```yml
cluster.name: es-cluster
node.name: node-1
node.master: true
node.attr.rack: r1
network.host: localhost
http.port: 9201
transport.tcp.port: 9301
discovery.seed_hosts: ["localhost:9301", "localhost:9302", "localhost:9303"]
cluster.initial_master_nodes: ["node-1","node-2","node-3"]
```
​ 1.4、然后进入Elasticsearch bin目录中启动
``` bash
​ elasticsearch.bat
```
![Alt text](/images/elasticsearch/elasticsearch_059image.png)     

#### Elasticsearch DataNode节点1准备

​ 1.1、先创建Elasticsearch DataNode节点  

![Alt text](/images/elasticsearch/elasticsearch_060image.png)     

1.2、然后在Elasticsearch中config目录中，找到elasticsearch.yml文件   

![Alt text](/images/elasticsearch/elasticsearch_061image.png)     

1.3、然后在elasticsearch.yml内添加内容
``` yml
cluster.name: es-cluster
node.name: node-2
node.master: false
#node.master: true
node.attr.rack: r1
bootstrap.memory_lock: false
network.host: localhost
http.port: 9202
transport.tcp.port: 9302
discovery.seed_hosts: ["localhost:9301", "localhost:9302", "localhost:9303"]
cluster.initial_master_nodes: ["node-1","node-2","node-3"]
```
​ 1.4、然后进入Elasticsearch bin目录中启动
``` bash
​ elasticsearch.bat
```
![Alt text](/images/elasticsearch/elasticsearch_062image.png)     


#### Elasticsearch DataNode节点2准备

​ 1.1、先创建Elasticsearch DataNode节点

![Alt text](/images/elasticsearch/elasticsearch_063image.png)     


​ 1.2、然后在Elasticsearch中config目录中，找到elasticsearch.yml文件

![Alt text](/images/elasticsearch/elasticsearch_064image.png)     


​ 1.3、然后在elasticsearch.yml内添加内容
``` yml
cluster.name: es-cluster
node.name: node-3
node.master: false
#node.master: true
node.attr.rack: r1
bootstrap.memory_lock: false
network.host: localhost
http.port: 9203
transport.tcp.port: 9303
discovery.seed_hosts: ["localhost:9301", "localhost:9302", "localhost:9303"]
cluster.initial_master_nodes: ["node-1","node-2","node-3"]
```
1.4、然后进入Elasticsearch bin目录中启动
``` bash
​ elasticsearch.bat
```
![Alt text](/images/elasticsearch/elasticsearch_065image.png)     

#### elasticsearch-head-master准备

 1、`elasticsearch-head-master`
前提  

​ 1.1、`node.js` 运行环境：http://nodejs.cn/download/

​ 1.2、`elasticsearch-head-master`下载地址：https://github.com/mobz/elasticsearch-head/archive/refs/heads/master.zip

![Alt text](/images/elasticsearch/elasticsearch_066image.png)     

2、elasticsearch-head-master安装    
   2.1、进入到elasticsearch-head-master目录中   

![Alt text](/images/elasticsearch/elasticsearch_067image.png)   


    2.2、然后使用cmd输入**npm install**，进行安装  
    ``` bash
    npm install
    ```    

3、 `elasticsearch-head-master`运行

​ 然后使用cmd输入**npm run start**，进行运行

![Alt text](/images/elasticsearch/elasticsearch_068image.png)   

``` bash
npm run start
```

![Alt text](/images/elasticsearch/elasticsearch_069image.png)   

4、`elasticsearch-head-master`访问

​ 进入到浏览器输入http://localhost:9100进行访问

![Alt text](/images/elasticsearch/elasticsearch_070image.png)   


elasticsearch-head-master说明

1、green：绿色，代表搭建成功

2、red:红色，搭建失败

3、yellow:黄色，只有一个节点可用，也算搭建失败

#### Elasticsearch集群电商微服务项目集成
1、进入到LKN.EBusines.Service项目ProductService类中

![Alt text](/images/elasticsearch/elasticsearch_071image.png)   

2、然后在ProductService类中增加  

![Alt text](/images/elasticsearch/elasticsearch_072image.png)   

``` C# 
   /// <summary>
    /// 商品服务实现
    /// </summary>
    public class ProductService : IProductService
    {
        private readonly ElasticClient elasticClient;
   public ProductService(/*IConfiguration configuration*/IOptions<ProductMongoDBOptions> options)
    {
        /* ProductMongoDBOptions productMongoDBOptions = options.Value;
         // 1、建立MongoDB连接
         var client = new MongoClient(productMongoDBOptions.ConnectionString);

         // 2、获取商品库
         var database = client.GetDatabase("productdb");

         // 3、获取商品表(集合)
         _products = database.GetCollection<Product>("Product");*/
        #region 1、单实例连接
        {
           /* var node = new Uri("http://localhost:9200");
            // var defaultIndex = "products";

            var settings = new ConnectionSettings(node);
            //.DefaultIndex(defaultIndex);

            elasticClient = new ElasticClient(settings);*/
        }
        #endregion

        #region 2、集群连接
        {
            var nodes = new Uri[]
            {
                new Uri("http://localhost:9201"),
                new Uri("http://localhost:9202"),
                new Uri("http://localhost:9203"),
            };
            var pool = new StaticConnectionPool(nodes);
            var settings = new ConnectionSettings(pool);

            elasticClient = new ElasticClient(settings);
        }
        #endregion

    }
}
```
​
#### 电商微服务项目访问

1、进入到浏览器进行访问

![Alt text](/images/elasticsearch/elasticsearch_073image.png)   


2、然后进入elasticsearch-head-master中，查看数据

![Alt text](/images/elasticsearch/elasticsearch_074image.png)   
![Alt text](image-1.png)

#### Elasticsearch集群数据存储原理  

Elasticsearch集主要是通过分片来进行存储的   

##### 集群分片   
​ 主分片：存储数据，数据增删改查   

​ 副本分片：数据备份，防止数据丢失   

![Alt text](/images/elasticsearch/elasticsearch_075image.png)   

粗线0就是分片   

细线0是分片副本

##### 集群分片kibana中查看

![Alt text](/images/elasticsearch/elasticsearch_076image.png)   

##### Elasticsearch存储数据原理

原理图如下：   

![Alt text](/images/elasticsearch/elasticsearch_077image.png)   

核心细节如下： 

``` bash
shard = hash(routing) % number_of_primary_shards
```

1、先Hash，先对文档_idHash，   

2、然后取模，然后对分片数取模   

流程如下：  

以下是在主副分片和任何副本分片上面 成功新建，索引和删除文档所需要的步骤顺序：   

1. 客户端向 Node 1 发送新建、索引或者删除请求。    
2. 节点使用文档的 _id 确定文档属于分片 0 。请求会被转发到 Node 3，因为分片 0 的主分片目前被分配在 Node 3 上。    
3. Node 3 在主分片上面执行请求。如果成功了，它将请求并行转发到 Node 1 和 Node 2 的副本分片上。一旦所有的副本分片都报告成功, Node 3 将向协调节点报告成功，协调节点向客户端报告成功。   
##### Elasticsearch查询数据原理

原理图如下：  

![Alt text](/images/elasticsearch/elasticsearch_078image.png)  

流程如下：

以下是从主分片或者副本分片检索文档的步骤顺序：

1、客户端向 Node 1 发送获取请求。  

2、节点使用文档的 _id 来确定文档属于分片 0 。分片 0 的副本分片存在于所有的三个节点上。 在这种情况下，它将请求转发到 Node 2 。  

3、Node 2 将文档返回给 Node 1 ，然后将文档返回给客户端。  

在处理读取请求时，协调结点在每次请求的时候都会通过轮询所有的副本分片来达到负载均衡。  

在文档被检索时，已经被索引的文档可能已经存在于主分片上但是还没有复制到副本分片。 在这种情况下，副本分片可能会报告文档不存在，但是主分片可能成功返回文档。 一旦索引请求成功返回给用户，文档在主分片和副本分片都是可用的。  

##### 集群分片-情况1
情况1：集群分片默认只有一个主分片，一个副本分片，如果遇到海量商品存储，一个分片无法存储，如何存储海量数据？  

方案：多分片机制   

##### 如何落地多分片机制
1、进入到kibana中进行，创建新数据库，输入   
``` js
PUT products_cluster_0
{
   "settings" : {
      "number_of_shards" : 3,
      "number_of_replicas" : 1
   }
}
```


![Alt text](/images/elasticsearch/elasticsearch_079image.png)  


 说明：   

​ 1.1、number_of_shards代表分片数量   

 1.​2、number_of_replicas代表分表副本   

 2、然后在elasticsearch-head查看结果   

![Alt text](/images/elasticsearch/elasticsearch_080image.png)  

粗线0,1,2代表主分片

细线0,1,2代表副本分片
