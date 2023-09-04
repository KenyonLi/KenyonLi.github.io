---
title: '分布式中间件-Redis'
date: 2023-08-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '分布式中间件-Redis'
categories:
- 'C#'
---


## 目录
[[toc]]
## 分布式中间件-Redis

### 什么是Redis
Redis是分布式缓存，主要是为了提升系统查询性能  

![Alt text](/images/redis/redis_0001image.png)

### 什么地方使用Redis
Redis主要用在集群系统中。  
### 集群系统中为什么要使用Redis 

单体电商  

![Alt text](/images/redis/redis_0002image.png)

单体电商-本地缓存  
 
![Alt text](/images/redis/redis_0003image.png)

电商集群  

![Alt text](/images/redis/redis_0004image.png)

电商集群-Redis  

![Alt text](/images/redis/redis_0005image.png)  

分析：单个系统，主要用来处理客户端的请求，一个系统处理客户端的请求量是有限的，当客户端的并发量，超过了系统的并发处理的并发能力，就会导致系统处理速度变慢，也就是所谓的性能下降。所以，为了提升性能。因此我们需要通过多个实例来分离。所以，，我们会创建多个系统实例，形成的系统就叫做集群系统。可以，集群系统，如何均衡处理客户端的请求。    
分流代表技术，就是Redis.  
在什么样的集群系统中使用redis呢？    
用的比较多的就是电商集群系统。那么，在电商集群系统中如何落地Redis?   
业务场景：创建商品业务场景

## 集群系统如何落地Redis  
前提：  
1、电商系统   
2、Redis  
步骤  
>1、电商集群系统准备
   通过vs创建.net7电商系统   
>2、Redis准备  
>>2.1 Redis 前提准备   
   Redist 下载地址：http://download.redis.io/releases/redis-7.2.0.tar.gz   
   [redis-7.2.0.tar.gz 下载](http://download.redis.io/releases/redis-7.2.0.tar.gz)     

``` bash
[root@localhost ~]# wget http://download.redis.io/releases/redis-7.2.0.tar.gz 
[root@localhost ~]# tar -xzf redis-7.2.0.tar.gz
[root@localhost ~]# cd redis-7.2.0/
```
安装中遇到的错误：   
[redis 安装 与错误解决办法 参考](https://www.cnblogs.com/operationhome/p/9752935.html)   

 `jemalloc/jemalloc.h: No such file or directory。` 这个错误，是因为系统没有安装gcc 如何导致的，当安装好gcc后，执行的命令`makk`    
 正确的解决 

```bash
[root@localhost ~]# make distclean  && make
```
::: tip 分析：导致出现这个错误的原因    
 

　　错误的本质是我们在开始执行make 时遇到了错误（大部分是由于gcc未安装），然后我们安装好了gcc 后，我们再执行make  ,这时就出现了jemalloc/jemalloc.h: No such file or directory。这是因为上次的

编译失败，有残留的文件，我们需要清理下，然后重新编译就可以了。    

网上的解决办法是有什么错误吗？    

　　网上的解决办法虽然最后也是可以成功安装好 redis ,但是是有一些隐患的，首先我们要知道redis 需要使用内存分配器的， make  MALLOC=jemalloc  就是指定内存分配器为 jemalloc ，make MALLOC=libc 就是指定内存分配器为 libc ，这个是有安全隐患的，jemalloc 内存分配器在实践中处理内存碎片是要比libc 好的，而且在README.md 文档也说明到了，jemalloc内存分配器也是包含在源码包里面的，可以在deps  目录下看到 jemalloc 目录。     
:::
>>2.2 然后打开redis.conf配置，在里面添加 `bind 0.0.0 -::1` ,并且关闭 `protected-mode` 值为`no` 否则外网不可访问。

![Alt text](/images/redis/redis_0006image.png)  

>>2.3 然后启动Redis 

![Alt text](/images/redis/redis_0007image.png)  

>3、客户端访问  
>> 3.1 进入浏览器进行访问  

![Alt text](/images/redis/redis_0008image.png)  

### 查询商品缓存Redis原理   
#### redis做了3件事情  
1、建立连接  
2、存储数据到本地缓存中（redis）   
3、持久化数据到文件（开启新线程）  
#### 为什么使用单线程  
原因： 数据完全基于内存操作，性能足够，而且多线程消耗性能   
#### redis 使用多线程   
1、开启多个线程做不同的事情  
2、而不是开启多个线程做同样的一件事情  
Redis 通信原理（建立连接）  
Redis 处理事件的简单模型：多路复用机制。微服务：订阅发布    
简单理解： 一个线程处理多个客户端连接  
操作系统：epoll   
redis: reactor 机制  

![Alt text](/images/redis/redis_0009image.png)  

由上图可以看出，处理请求事件时，Redis的事件消费者只是被事件发布者进程短期调用而已，这种设计使得网络性能、用户感知的请求时延都得到了提升，每个用户的请求所产生的事件及响应，整个服务器网络吞吐量都会由事件的及时响应而增加。当然，这也带来了一定的要求，即每个事件消费者都不能有阻塞行为，否则将会长时间占用事件发布者进程而导致其他事件得不到及时响应，Redis的非阻塞特性就是由于它的模块都是满足这个要求的。  

Redis数据存储原理：  

 Redis string 原理（存储数据到redis本地缓存中）  
 可变字符串   

![Alt text](/images/redis/redis_0010image.png)

数据持久化   
防止数据丢失   

Redis List 原理   

![Alt text](/images/redis/redis_0011image.png)  


Redis Set原理  
数组 + Hash表  

![Alt text](/images/redis/redis_0012image.png)  

数组存储数据  
Hash 表：作用   
防止数据重复，使用Hash 碰撞   

Redis Hash 原理图  
数组+ Hash + 单向链表  

![Alt text](/images/redis/redis_0013image.png)  

完全基于内存操作：内存不足的缺陷。不适合存储海量数据TP级   

Redis Zset原理图  

![Alt text](/images/redis/redis_0014image.png)  

### 查询商品缓存场景落地-情况1
情况1：当客户端通过集群电商系统从`redis`中查询数据的时候，都是一个一个查询的，如何实现批量查询呢？  
方案： 批量查询   
条件 
1. Set  
步骤   
1.1、在ProductController类添加代码  
``` C# 
/// <summary>
    /// 商品控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ConnectionMultiplexer _connectionMultiplexer;
        public ProductController(ConnectionMultiplexer connectionMultiplexer)
        {
            _connectionMultiplexer = connectionMultiplexer;
        }
        /// <summary>
        /// 查询商品
        /// </summary>
        /// <param name="productCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public Product GetProduct()
        {
           #region 2、存储商品对象-集合商品数据
            {
                // 1、从redis中取对象
                RedisValue[] productvalues = _connectionMultiplexer.GetDatabase(0).SetMembers("products");
                List<Product> products = new List<Product>();
                if (productvalues.Length == 0)
                {
                    // 2、从数据库中查询
                    products = _productDbContext.Products.ToList();

                    // 3、存储到redis中
                    List<RedisValue> redisValues = new List<RedisValue>();
                    foreach (var product1 in products)
                    {
                        string productjson = JsonConvert.SerializeObject(product1);//序列化
                        redisValues.Add(productjson);
                    }

                    _connectionMultiplexer.GetDatabase(0).SetAdd("products", redisValues.ToArray());

                    return products;
                }

                // 4、序列化，反序列化
                foreach (var redisValue in productvalues)
                {
                    product = JsonConvert.DeserializeObject<Product>(redisValue);//反序列化
                    products.Add(product);
                }
                return product;
            }
            #endregion
        }
    }     
        
```

### 查询商品缓存场景落地-情况2  
情况2：当客户端通过集群电商系统从redis批量查询数据的时候，全部一起查询，由于数据量过大，导致查询性能低下，如何提升查询性能？  
方案：分页查询  
条件    
1.SetScan   
步骤   
1.1、在ProductController类添加代码   
``` bash 
 /// <summary>
    /// 商品控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ConnectionMultiplexer _connectionMultiplexer;
        public ProductController(ConnectionMultiplexer connectionMultiplexer)
        {
            _connectionMultiplexer = connectionMultiplexer;
        }
         /// <summary>
        /// 查询商品
        /// </summary>
        /// <param name="productCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public Product GetProduct()
        {
          #region 3、存储商品对象-集合-分页查询
            {
                // 1、从redis中取对象
                RedisValue[] productvalues = _connectionMultiplexer.GetDatabase(0).SetScan("products", 10, 0, 10).ToArray();
                List<Product> products = new List<Product>();
                if (productvalues.Length == 0)
                {
                    // 2、从数据库中查询
                    products = _productDbContext.Products.ToList();

                    // 3、存储到redis中
                    List<RedisValue> redisValues = new List<RedisValue>();
                    foreach (var product1 in products)
                    {
                        string productjson = JsonConvert.SerializeObject(product1);//序列化
                        redisValues.Add(productjson);
                    }

                    _connectionMultiplexer.GetDatabase(0).SetAdd("products", redisValues.ToArray());
                }

                // 4、序列化，反序列化
                foreach (var redisValue in productvalues)
                {
                    product = JsonConvert.DeserializeObject<Product>(redisValue);//反序列化
                    products.Add(product);
                }
                return product;
            }
            #endregion
        }
    }     
```
### 修改商品销量场景落地
分析： 当客户端通过电商网站，每次购买一件商品，就会导致商品销量增加，由于商品存储到`redis`是以`json`的形式进行存储的，导致每次修改商品销量字段都需要进行商品数据序列化和反序列化，由于序列化和反序列化比较多，导致修改改商品销量性能下降，如何提升性能呢？   
方案： Hash字典   
条件  
1、`max_fails=2 fail_timeout=10s `;   
步骤   
1、在ProductController类添加代码   
``` C# 
 /// <summary>
    /// 商品控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ConnectionMultiplexer _connectionMultiplexer;
        public ProductController(ConnectionMultiplexer connectionMultiplexer)
        {
            _connectionMultiplexer = connectionMultiplexer;
        }
         /// <summary>
        /// 查询商品
        /// </summary>
        /// <param name="productCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public Product GetProduct()
        {
          #region 4、存储商品对象-字典形式
            {
                string ProductSold = _connectionMultiplexer.GetDatabase(0).HashGet("productHash", "ProductSold");
                if (string.IsNullOrEmpty(ProductSold))
                {
                    product = _productDbContext.Products.FirstOrDefault(s => s.Id == 1);
                    _connectionMultiplexer.GetDatabase(0).HashSet("productHash", "ProductSold", product.ProductStock);
                   //设置过期时间  10 秒
                    _connectionMultiplexer.GetDatabase(0).KeyExpire("productHash", TimeSpan.FromSeconds(10));
                }

                // 1、增加销量
                _connectionMultiplexer.GetDatabase(0).HashIncrement("productHash", "ProductSold");
                return product;
            }
            #endregion
        }
    }     
       
```

### 商品销量批量存储场景落地

分析：当数据库中商品销量数据存储到`redis`的时候，是一个个存储，多次和redis建立连接，导致添加效率下降，如何提升添加商品销量数据的性能？    
方案：批量添加   
#### 如何落地批量添加？
条件  
1、IBatch  
步骤   
1、在ProductController类添加代码 

```C# 
 /// <summary>
    /// 商品控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ConnectionMultiplexer _connectionMultiplexer;
        public ProductController(ConnectionMultiplexer connectionMultiplexer)
        {
            _connectionMultiplexer = connectionMultiplexer;
        }
         /// <summary>
        /// 查询商品
        /// </summary>
        /// <param name="productCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public Product GetProduct()
        {
          #region 6、存储商品对象-批量操作
            {
                var batch = _connectionMultiplexer.GetDatabase(0).CreateBatch();

                List<Product> products = new List<Product>();
                // 2、从数据库中查询
                products = _productDbContext.Products.ToList();

                // 3、存储到redis中
                for (int i = 0; i < products.Count; i++)
                {
                    batch.HashSetAsync("productHash" + i, "ProductSold", products[i].ProductSold);
                }
                batch.Execute();

                return product;
            }
            #endregion
        }
    }     
```

### 扣减商品库存业务场景落地  
条件  
1、电商系统   
2、Mysql8.0.23   
3、客户端   
步骤   
1、在电商系统中添加具体类 

![Alt text](/images/redis/redis_0015image.png)  

1.1、在电商系统中ProductController类中添加代码  

```C# 
/// <summary>
    /// 商品控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
         /// <summary>
        /// 扣减商品库存
        /// 做4件事情
        /// </summary>
        /// <returns></returns>
        [HttpGet("SubStock")]
        public IActionResult SubStock()
        {
            #region 1、扣减库存流程
            {
                  // 1、获取商品库存
                  var stocks = getPorductStocks();

                    // 2、判断商品库存是否为空
                    if (stocks.Count == 0)
                    {
                        // 2.1 秒杀失败消息
                        Console.WriteLine($"{Thread.CurrentThread.ManagedThreadId}：不好意思，秒杀已结束，商品编号:{stocks.Count}");
                    return new JsonResult("秒杀失败");
                    }

                    // 3、秒杀成功消息
                    Console.WriteLine($"{Thread.CurrentThread.ManagedThreadId}：恭喜你，秒杀成功，商品编号:{stocks.Count}");

                    // 4、扣减商品库存
                    subtracProductStocks(stocks);
                return new JsonResult("秒杀成功");
            }
            #endregion

            return new JsonResult("秒杀成功");
        }
        
        
        /// <summary>
        /// 获取商品库存
        /// </summary>
        /// <returns></returns>
        private Stocks getPorductStocks()
        {
            // 1、查询数据库获取库存，获取第一个商品的库存数(1)
            Stocks stocks = _productDbContext.Stocks.FirstOrDefault(s => s.Id == 1);

            // 2、返回库存
            return stocks;
        }

        /// <summary>
        /// 扣减商品库存
        /// </summary>
        private void subtracProductStocks(Stocks stocks)
        {
            // 1、扣减商品库存
            Stocks updateStocks = _productDbContext.Stocks.FirstOrDefault(s => s.Id == stocks.Id);
            updateStocks.Count = stocks.Count - 1;

            // 2、更新数据库
            _productDbContext.SaveChanges();
        }
    }
```
1.2、启动电商网站   

![Alt text](/images/redis/redis_0016image.png)  


2、在Mysql中创建Stock表

![Alt text](/images/redis/redis_0017image.png)  

3、客户端访问
![Alt text](/images/redis/redis_0018image.png)  

### 扣减商品库存业务分析 

分析： 当客户端从电商网站购买商品的时候，需要扣减商品库存，直接从数据库进行扣减，当电商系统是单实例的时候，如果客户端扣减库存并发量比较大，会出现超卖问题。如何解决超卖（10件商品卖出12件等）问题？
这个使用lock锁的方式可以进行解决，当电商系统是集群实例的时候，如果客户端扣减库存并发量比较大，这个时候，lock锁就会出现缺陷，依然存在超卖问题。如何解决集群电商系统中的超卖问题？    
方案： 分布式锁    
#### 如何落地分布式锁
条件  
1、RedisLock    
步骤   
1、封装分布式锁   
1.1 、 先在电商系统中创建RedisLock类  

![Alt text](/images/redis/redis_0019image.png)  

1.2、 然后在RedisLock类添加代码  
 ``` C# 
 /// <summary>
/// redis分布式锁
/// 1、封装redis分布锁
///    1、加锁
///    2、解锁
/// 2、应用分布式锁
/// </summary>
public class RedisLock
{
    // 1、redis连接管理类
    private ConnectionMultiplexer connectionMultiplexer = null;

    // 2、redis数据操作类
    private IDatabase database = null;
    public RedisLock()
    {
        connectionMultiplexer = ConnectionMultiplexer.Connect("192.168.44.4:6379");

        database = connectionMultiplexer.GetDatabase(0);
    }

    /// <summary>
    /// 加锁
    /// 1、key:锁名称
    /// 2、value:谁加的这把锁。线程1
    /// 3、exprie：过期时间：目的是为了防止死锁
    /// 
    /// </summary>

    public void Lock()
    {
        while (true)
        {
            bool flag = database.LockTake("redis-lock", Thread.CurrentThread.ManagedThreadId, TimeSpan.FromSeconds(60));
            // 1、true 加锁成功 2、false 加锁失败
            if (flag)
            {
                break;
            }
            // 防止死循环。通过等待时间，释放资源
            Thread.Sleep(10);
        }
    }

    /// <summary>
    /// 解锁
    /// </summary>

    public void UnLock()
    {
        bool flag = database.LockRelease("redis-lock", Thread.CurrentThread.ManagedThreadId);

        // true:释放成功  false 释放失败
        // 方案：释放资源
        connectionMultiplexer.Close();
    }
}
 ```

2、应用分布式锁  
2.1、在电商系统中ProductController类中添加分布式锁代码
```C# 
/// <summary>
    /// 商品控制器
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
         /// <summary>
        /// 扣减商品库存
        /// 做4件事情
        /// </summary>
        /// <returns></returns>
        [HttpGet("SubStock")]
        public IActionResult SubStock()
        {
            #region 1、扣减库存流程
            {
              
                RedisLock redisLock = new RedisLock();
                redisLock.Lock();
                  // 1、获取商品库存
                  var stocks = getPorductStocks();

                    // 2、判断商品库存是否为空
                    if (stocks.Count == 0)
                    {
                        // 2.1 秒杀失败消息
                        Console.WriteLine($"{Thread.CurrentThread.ManagedThreadId}：不好意思，秒杀已结束，商品编号:{stocks.Count}");
                    redisLock.UnLock();
                    return new JsonResult("秒杀失败");
                    }

                    // 3、秒杀成功消息
                    Console.WriteLine($"{Thread.CurrentThread.ManagedThreadId}：恭喜你，秒杀成功，商品编号:{stocks.Count}");

                    // 4、扣减商品库存
                    subtracProductStocks(stocks);
                redisLock.UnLock();
                return new JsonResult("秒杀成功");
            }
            #endregion

            return new JsonResult("秒杀成功");
        }
        
        
        /// <summary>
        /// 获取商品库存
        /// </summary>
        /// <returns></returns>
        private Stocks getPorductStocks()
        {
            // 1、查询数据库获取库存，获取第一个商品的库存数(1)
            Stocks stocks = _productDbContext.Stocks.FirstOrDefault(s => s.Id == 1);

            // 2、返回库存
            return stocks;
        }

        /// <summary>
        /// 扣减商品库存
        /// </summary>
        private void subtracProductStocks(Stocks stocks)
        {
            // 1、扣减商品库存
            Stocks updateStocks = _productDbContext.Stocks.FirstOrDefault(s => s.Id == stocks.Id);
            updateStocks.Count = stocks.Count - 1;

            // 2、更新数据库
            _productDbContext.SaveChanges();
        }
    }
```

## Redis-cluster(集群)  
### 什么是redis-cluster
redis-cluster 就是redis集群   
### 项目中为什么要使用redis-cluster
#### 电商集群系统使用redis   

![Alt text](/images/redis/redis_0020image.png)  


#### 单体redis  

![Alt text](/images/redis/redis_0021image.png)  

缺陷：单体redis可能由于各种原因导致宕机的问题。所以，需要使用redis主从集群   
redis-主从集群  

![Alt text](/images/redis/redis_0022image.png)  

缺陷：redis-主从集群，如果主节点宕机。导致整个redis集群不可用，所以，需要使用哨兵集群  

![Alt text](/images/redis/redis_0023image.png)  

 缺陷：  
 1、无法解决高并发写   
 2、无法解决海里数据存储  
 所以：需要使用redis-cluster   
 redis-cluster(集群)  

![Alt text](/images/redis/redis_0024image.png)  

redis-缓存架构   

![Alt text](/images/redis/redis_0025image.png)    

redis-cluster架构说明   
1、6个redis实例。 reids-cluster 运行需要的角色实例     
2、redis-trib.rb.作用：分配redis 主从角色     

### 集群电商系统中如何落地redis-cluster 
redis-cluster前提准备   
条件    
1、redis(6个实例)   
步骤  
1、在redisk 创建6个配置文件 
![Alt text](/images/redis/redis_0026image.png)    

1.1、在redis.6380.conf文件中，添加内容
```bash
port 6380
#bind 127.0.0.1 
bind 0.0.0.0       
appendonly yes
appendfilename "appendonly.6380.aof"   
cluster-enabled yes                                    
cluster-config-file nodes.6380.conf
cluster-node-timeout 15000
cluster-slave-validity-factor 10
cluster-migration-barrier 1
cluster-require-full-coverage yes
```

​1.2、在redis.6381.conf文件中，添加内容  

```bash
port 6381
bind 0.0.0.0        
appendonly yes
appendfilename "appendonly.6381.aof"   
cluster-enabled yes                                    
cluster-config-file nodes.6381.conf
cluster-node-timeout 15000
cluster-slave-validity-factor 10
cluster-migration-barrier 1
cluster-require-full-coverage yes
```
1.3、在redis.6382.conf文件中，添加内容

```bash
port 6382
bind 0.0.0.0        
appendonly yes
appendfilename "appendonly.6382.aof"   
cluster-enabled yes                                    
cluster-config-file nodes.6382.conf
cluster-node-timeout 15000
cluster-slave-validity-factor 10
cluster-migration-barrier 1
cluster-require-full-coverage yes
```

1.4、在redis.6383.conf文件中，添加内容
```bash
port 6383
bind 0.0.0.0         
appendonly yes
appendfilename "appendonly.6383.aof"   
cluster-enabled yes                                    
cluster-config-file nodes.6383.conf
cluster-node-timeout 15000
cluster-slave-validity-factor 10
cluster-migration-barrier 1
cluster-require-full-coverage yes
```

1.5、在redis.6384.conf文件中，添加内容
```bash
port 6384
bind 0.0.0.0        
appendonly yes
appendfilename "appendonly.6384.aof"   
cluster-enabled yes                                    
cluster-config-file nodes.6380.conf
cluster-node-timeout 15000
cluster-slave-validity-factor 10
cluster-migration-barrier 1
cluster-require-full-coverage yes
```

1.6、在redis.6385.conf文件中，添加内容

```bash
port 6385
bind 0.0.0.0        
appendonly yes
appendfilename "appendonly.6385.aof"   
cluster-enabled yes                                    
cluster-config-file nodes.6385.conf
cluster-node-timeout 15000
cluster-slave-validity-factor 10
cluster-migration-barrier 1
cluster-require-full-coverage yes
```

2、启动6个redis实例  

1.1 启动redis.6380.conf 
```bash
[root@localhost redis-7.2.0]# ./src/redis-server  ./redis-config/redis.6380.conf 
```
![Alt text](/images/redis/redis_0027image.png)    


1.2 启动redis.6381.conf 
```bash
[root@localhost redis-7.2.0]# ./src/redis-server  ./redis-config/redis.6381.conf 
```
![Alt text](/images/redis/redis_0028image.png)    

1.3 启动redis.6382.conf 

```bash
[root@localhost redis-7.2.0]# ./src/redis-server  ./redis-config/redis.6382.conf 
```
![Alt text](/images/redis/redis_0029image.png)    

1.4 启动redis.6383.conf 
```bash
[root@localhost redis-7.2.0]# ./src/redis-server  ./redis-config/redis.6383.conf 
```
![Alt text](/images/redis/redis_0030image.png)    

1.5 启动redis.6384.conf 

```bash
[root@localhost redis-7.2.0]# ./src/redis-server  ./redis-config/redis.6384.conf 
```
![Alt text](/images/redis/redis_0031image.png)    

1.6 启动redis.6385.conf 

```bash
[root@localhost redis-7.2.0]# ./src/redis-server  ./redis-config/redis.6385.conf 
```
![Alt text](/images/redis/redis_0032image.png)  

### redis-cluster 主从角色分配  
条件   
1、redis-trib.rb   
[ruby-3.0.6下载](https://cache.ruby-lang.org/pub/ruby/3.0/ruby-3.0.6.tar.gz)   
步骤    
1、ruby环境安装     
 1.1 windows    
 ruby环境下载：https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-3.2.2-1/rubyinstaller-3.2.2-1-x64.exe    
 [rubyinstaller 下载](https://rubyinstaller.org/downloads/)   
 1.2 centos9 
``` bash
 yum  install  ruby
 ```
2、 安装 redsi-3.2.2.gem 使用脚本命令
  2.1 window 安装
  ```bahs
   gem install redis -v 3.2.2
  ```
  ![Alt text](/images/redis/redis_0033image.png)  
  
  2.2 centos9 安装 

 ``` bash
 [root@localhost ruby]# gem install redis -v 3.2.2
 ```
  ![Alt text](/images/redis/redis_0034image.png)  
​
  2.3、redis-3.2.2.gem下载地址：https://rubygems.org/gems/redis/versions/3.2.2

3、redis-trib.rb搭建redis-cluster主从   
   3.1、 redis-trib.rb 下载地址：https://github.com/beebol/redis-trib.rb    
   [redis-trib.rb  源码下载](https://github.com/redis/redis/blob/3.2/src/redis-trib.rb)

   ![Alt text](/images/redis/redis_0035image.png)  

   3.2、 redis-trib.rb使用   
      通过cmd使用redis-trib.rb 
      ``` bash
      ruby redis-trib.rb create --replicas 1 127.0.0.1:6380 127.0.0.1:6381 127.0.0.1:6382 127.0.0.1:6383 127.0.0.1:6384 127.0.0.1:6385
      ```
      
   3.3 redis-trib.rb redis-cluster集群状态检查  

   ``` bash 
   ruby redis-tris-trib.rb  check 127.0.0.1:6380 
   ```
   ![Alt text](/images/redis/redis_0036image.png)  

## redis7.2 版本后， redist-trib.rb  集群配置都在 redis-cli 配置
[Anolis 8.6 下 Redis 7.2.0 集群搭建和配置 参考](https://blog.csdn.net/weixin_42176639/article/details/132434053)

```bash

## 1.在 rd1 复制配置文件
cp /home/redis-7.2.0/redis.conf /usr/local/redis/redis-cluster.conf
## 2.编辑
vim /usr/local/redis/redis-cluster.conf
## 设置密码 requirepass 123456
## 关闭保护模式 protected-mode no
## 开启集群 cluster-enabled yes 约1586行
## 设置配置文件 cluster-config-file redis-cluster.conf 约1594行
## 设置超时 cluster-node-timeout 15000 约1600行
## 设置主节点密码 masterauth 123456
## 设置日志 logfile /var/log/redis/redis-cluster.log
## 3.将 redis-cluster.conf 分发到 rd2 / rd3 / rd4 / rd5 / rd6
scp /usr/local/redis/redis-cluster.conf root@rd2:/usr/local/redis/
scp /usr/local/redis/redis-cluster.conf root@rd3:/usr/local/redis/
scp /usr/local/redis/redis-cluster.conf root@rd4:/usr/local/redis/
scp /usr/local/redis/redis-cluster.conf root@rd5:/usr/local/redis/
scp /usr/local/redis/redis-cluster.conf root@rd6:/usr/local/redis/
## 4.依次启动 rd1 / rd2 /rd3 /rd4 /rd5 / rd6
/usr/local/redis/bin/redis-server /usr/local/redis/redis-cluster.conf &
## 5.清空已有数据
## 5.创建集群 在任一节点执行
## -a 密码认证，若没写密码无效带这个参数
## --cluster create 创建集群实例列表 IP:PORT IP:PORT IP:PORT IP:PORT IP:PORT IP:PORT
## --cluster-replicas 复制因子1（即每个主节点需2个从节点）
/usr/local/redis/bin/redis-cli -a 123456 --cluster create --cluster-replicas 1 127.0.0.1:6380 127.0.0.1:6381 127.0.0.1:6382 127.0.0.1:6383 127.0.0.1:6384 127.0.0.1:6385

## 1.解压缩
tar zxvf redis-7.2.0.tar.gz
## 2.进入源码安装目录
cd /home/redis-7.2.0/src/
## 3.编译和安装
make && make install PREFIX=/usr/local/redis
## 4.进入Redis解压目录
cd /home/redis-7.2.0/
## 5.修改配置
vim redis.conf
## 6.启动服务
/usr/local/redis/bin/redis-server redis.conf &
## 7.停止服务
kill -9 `ps aux |grep redis|grep -v grep | awk '{print $2}'`
 ```

1、查看集群帮文档

``` bash
[root@localhost src]# ./redis-cli --cluster help
```
   ![Alt text](/images/redis/redis_0037image.png)  
2、分配角色
```bash
[root@localhost src]# ./redis-cli --cluster create --cluster-replicas 1 0.0.0.0:6380 0.0.0.0:6381 0.0.0.0:6382 0.0.0.0:6383 0.0.0.0:6384 0.0.0.0:6385
```
   ![Alt text](/images/redis/redis_0038image.png)  
  
  是否同意系统分配，接受 输入 `yes`  

 ![Alt text](/images/redis/redis_0039image.png)  

 3、查看节点状态
 ``` bash
 #状态
 [root@localhost src]# ./redis-cli --cluster check 0.0.0.0:6380
0.0.0.0:6380 (26b27f3b...) -> 0 keys | 5461 slots | 1 slaves.
127.0.0.1:6381 (c4f1f3e7...) -> 0 keys | 5462 slots | 1 slaves.
127.0.0.1:6382 (2a9f5d67...) -> 0 keys | 5461 slots | 1 slaves.
[OK] 0 keys in 3 masters.
0.00 keys per slot on average.
>>> Performing Cluster Check (using node 0.0.0.0:6380)
M: 26b27f3b253331d3e3dab852115d98d7b94e8b86 0.0.0.0:6380
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
S: 64e0075c643b46b5c76695690f741ba68cd424c2 127.0.0.1:6383
   slots: (0 slots) slave
   replicates 2a9f5d67f084d24e11989a7cd5f2a3bebca91286
M: c4f1f3e7e23993df60c847696cebbd2228f79c21 127.0.0.1:6381
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
S: 2c195b27f07dd22b2c5a712b5c09f984141caca2 127.0.0.1:6384
   slots: (0 slots) slave
   replicates 26b27f3b253331d3e3dab852115d98d7b94e8b86
M: 2a9f5d67f084d24e11989a7cd5f2a3bebca91286 127.0.0.1:6382
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
S: e8a0bd1e391f8665df7e64a817c65a88924cceb2 127.0.0.1:6385
   slots: (0 slots) slave
   replicates c4f1f3e7e23993df60c847696cebbd2228f79c21
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.

 #信息
 [root@localhost src]# ./redis-cli --cluster info 0.0.0.0:6380
 # slots信息
 [root@localhost redis-7.2.0]# ./src/redis-cli  -p 6380
127.0.0.1:6380> CLUSTER SLOTS

 ```     
 
 

## Redis 客户端工具
[Another-Redis-Desktop-Manager.1.6.1.exe 下载](https://gitee.com/qishibo/AnotherRedisDesktopManager/releases/tag/v1.6.1)
## Apache Bench安装
### Ubuntu  
``` bash
1: 使用apt在线安装
sudo apt install apache2-utils
2:检查安装是否成功：ab -V
```
### Centos 9
```bash 
yum -y install httpd-tools

ab -v
# 举例说明如何测试网站并发访问接受能力:
ab -c 10 -n 1000 -k https://www.baidu.com/
```

### windows 
[Apache 2.4 Server Binaries 下载](https://www.apachehaus.com/cgi-bin/download.plx)



### ab 使用说明  
[参考](https://blog.csdn.net/qq_22206899/article/details/82348122/)
``` bash
-c concurrency 请求并发数，默认为1；

-n requests 请求总数；

-A auth-username:password 向服务器提供基本认证信息。用户名和密码之间有一个“：”隔开，并将以base64编码形式发送，无论服务器是否需要（即是否发送了401认证需求代码），此字符串都会被发送。

-b windowsize Size of TCP send/receive buffer, in bytes.

-B local-address Address to bind to when making outgoing connections

-C cookie-name=value 对请求附加一个“Cookie:”头行。其典型形式是：name=value的一个参数对。此参数可以重复。

-d 不显示“percentage served within XX[ms] table”消息（为以前版本提供支持）

-e csv-file 产生一个逗号分隔（CSV）文件，其中包含了处理每个相应百分比请求（从1%到100%）所需要的相应百分比时间（以微妙为单位）。由于这种格式已经“二进制化”。所以比“gnuplot”格式更有用。

-f protocol 指定SSL/TLS procotol()

-g gnuplot-file 把所有测试结果写入一个“gnuplot”或者TSV（以TAB分隔）文件。此文件可以方便地导入Gnuplot,IDL,Mathematica,Excel中。其中的第一行为标题。

-h 显示使用方法的帮助信息

-H custom-header 对请求附加额外的头信息，此参数的典型形式是一个有效的头信息行，其中包含了以冒号分隔的字段和值（如：”Accept-Encoding:zip/zop;8bit“）.

-i 执行HEAD请求，而不是GET请求

-k 启用Keepalive功能，即在一个HTTP会话中执行多个请求。默认不启用此功能

-p POST-file 包含了POST数据的文件

-P proxy-auth-username:password 对一个中转代理提供基本认证信息。用户名和密码用”：“隔开，并将以base64编码形式发送。无论服务器是否需要（即是否发送了407代理认证需求代码）此字符串都会被发送。

-q 如果代理的请求数大于150，ab每处理大约10%或者100个请求时，会在stderr输出一个进度计数、此-q标记可以屏蔽这些信息。

-r 在socket接收错误时不退出

-s 用于编译中使用了SSL的受保护的https，而不是http协议的时候。此功能是实验性的，最好不要用。

-S 不显示中值和标准偏差值，而且在均值和中值为标准偏差值得1-2倍时，也不显示警告和出错信息。默认时，会显示最小值/均值/最大值等数值

-t timelimit 测试所进行的最大秒数。内部隐含值是”-n 50000“。它可以时对服务器的测试限制在一个固定的总时间以内。默认时：没有时间限制。

-T content-type POST数据时所使用的”Content-type“头信息

-u PUT-file File containing data to PUT. Remember to also set -T

-v verbosity 设置显示信息的详细程度，4或更大值会显示头信息，3或更大值可以显示响应代码（404，200等），2或更大值可以显示警告和其他信息。

-V 显示版本号并退出

-w 以HTML表格信息输出结果，默认时，它是白色背景的两列宽度的一张表

-x <table>-attributes 设置<table>属性的字符串。此属性被填入<table 这里>

-X proxy[:port] 对请求使用代理服务器

-y <tr>-attributes 设置<tr>属性的字符串

-z <td>-attributes 设置<td>属性的字符串

-Z ciphersuite 指定SSL/TLS密码套件（见openssl密码）
```

## 总线 
>1、分布锁:   
>> 使用场合：集群系统   
>> 使用场景：在集群系统中修改字段值的时候，使用。执行update   

>2、封装分布试锁   
>3、使用redis:主要就是集群   