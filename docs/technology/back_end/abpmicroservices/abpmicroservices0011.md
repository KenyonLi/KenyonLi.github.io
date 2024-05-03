---
title: '微服务分布式文件系统、分布式缓存、分布式锁'
date: 2023-10-26 
tags:
- '微服务分布式文件系统、分布式缓存、分布式锁'
- 'abp'
- 'dotnet'
- 'minio'
categories:
- '技术'
---

## 目录
[[toc]]

## 微服务分布式文件系统、分布式缓存、分布式锁


## 分布式文件系统  

应用场景分析：为什么要使用文件系统呢？如果我们之前实现的电商微服务系统，它是由订单微服务、商品微服务、用户微服务、支付微服务等构成。  
如：商品微服务添加商品图片时，如果每个微服务上传到自己的本地上的话，假如100台微服务话，文件图片就会分散到各个微服务中，不方便维护管理
因此我们需要统一收集并且管理图片，就需要部署一个文件系统。采用Minio技术来实现 

### 落地实现集成各个微服务中对文件的管理  

步骤   
1、部署环境
启动Minio
``` bash
D:\test\ABP\devEvn\minio>minio.exe server .\data
```
2、商品微服务集成接口   

在moduls模块中，找到应用层、api接口层添加上传图片接口与实现。

2.1 应用接口层定义上传图片接口 `LKN.Product.Application.Contracts`

`IProductAppService` 定义图片上传接口
```c#
    /// <summary>
    /// 商品服务
    /// </summary>
    public interface IProductAppService:ICrudAppService<ProductDto,Guid,PagedAndSortedResultRequestDto,CreateProductDto,UpdateProductDto>
    {
        ...
        public  Task SaveOrderPictrueAsync(IFormFile formFile);
        ...
    }
```
 
2.2 应用层实现 `IProductAppService`上传图片的接口方法，
    
先引用`Minio` 包 ，采用 nuget `Volo.Abp.BlobStoring.Minio` 
``` c#
   //项目引用
    <PackageReference Include="Volo.Abp.BlobStoring.Minio" Version="7.3.0" />
```

ProductApplicationModule  添加依赖`  typeof(AbpBlobStoringMinioModule)`    
``` c#
[DependsOn(
     ....
    typeof(AbpBlobStoringMinioModule)
    )]
public class ProductApplicationModule : AbpModule
{
    ....
}

```

``` c#
 /// <summary>
    /// 禁止 ABP 默认的生成的API接口，创建、添加、查询
    /// </summary>
    [RemoteService(IsEnabled = false)]
    [Dependency(ServiceLifetime.Singleton)]
    public class ProductAppService : CrudAppService<
        Product,
        ProductDto, 
        Guid,
        PagedAndSortedResultRequestDto,
        CreateProductDto, 
        UpdateProductDto>, IProductAppService,
        ICapSubscribe
    {
        ....
      public async Task SaveOrderPictrueAsync(IFormFile formFile)
        {
            // 1、保存商品图片到Minio
            await _blobContainer.SaveAsync(formFile.FileName, formFile.OpenReadStream(), true); // true就是覆盖
            // 1、删除
            // 2、查询 stream  oss 系统
            //_blobContainer.SaveAsync
        }
        ....
    }
```
3、`LKN.Product.HttpApi.Host` 微服务站点配置 `Minio`连接信息

`ProductHttpApiHostModule` 中添加

```c#
  public override void ConfigureServices(ServiceConfigurationContext context)
    {
        ...
    // 4、使用Minio
        Configure<AbpBlobStoringOptions>(options =>
        {
            options.Containers.ConfigureDefault(container =>
            {
                container.UseMinio(minio =>
                {
                    minio.EndPoint = "127.0.0.1:9000";
                    minio.AccessKey = "minioadmin";
                    minio.SecretKey = "minioadmin";
                    minio.BucketName = "productservice"; // 存储文件数据库
                    minio.CreateBucketIfNotExists = true; // 桶不存在，就创建
                });
            });
        });
        .....
    }
```
4、启动微服务打开浏览器调用接口  

![Alt text](/images/abpmicroservices/micro011/abpmicroservices0011_0001image.png)     


5、在Minio浏览器管理端查看结果   

 ![Alt text](/images/abpmicroservices/micro011/abpmicroservices0011_0002image.png)     

## 分布缓存  
我们采用abp 架构封装Redis，创建项目时，会默认添加`Volo.Abp.Caching.StackExchangeRedis`
```c#
<PackageReference Include="Volo.Abp.Caching.StackExchangeRedis" Version="7.3.0" />
```
### 为什么要使用分布式缓存呢？
当然是提高性能，主要应用场景为一般查询并发请求数据时采用。
如：查询商品->商品微服务-->商品数据库  
1、50个商品并发查询。商品数据库  
2、200个商品并发查询。商品微服务  
50个商品并发。
200个查询商品并发。
#### 1、内存缓存。本地缓存
查询商品--商品微服务服务（缓存）--商品数据库  

如：400个查询商品并发

 ![Alt text](/images/abpmicroservices/micro011/abpmicroservices0011_0003image.png)     

存在问题：缓存命中率下降  

1、2个请求1次缓存 1/2 = 50%  
2、2次请求0次缓存 0/2 =50%

下降 意味着查询性能下降   
原因：走了数据库，性能会下降。 

#### 2、解决本地缓存存在的问题，我们方案分布式缓存

 ![Alt text](/images/abpmicroservices/micro011/abpmicroservices0011_0004image.png)     

两次请求。1/2 =50%    

上升缓存命中率，就是提升性能。
所以我们在微服务中采用分布式缓存

## 如何落地
以商品微服务为例，在查询商品信息时，把储存到缓存中。
步骤：  
1、部署环境 `redis`    
2、` LKN.Product.HttpApi`模块集成 ,引用 `Volo.Abp.Caching.StackExchangeRedis`    
2、``模块配置 ``
实现:    
  1、启动redis服务
  ``` bash
     redis-server.exe 
  ```
  2、在` LKN.Product.HttpApi.Host` 商品微服务中,`ProductHttpApiModule`中添加依赖注册 `typeof(AbpCachingStackExchangeRedisModule),`特性 
  ```C#
  [DependsOn(
   ...
     typeof(AbpCachingStackExchangeRedisModule),
   ...
    )]

  ```
  3、在`LKN.Product.HttpApi.Host`网站中找到 `ProductHttpApiHostModule` 类配置 `redis`信息 ,并且在`appsettings.json`设置redis 连接参数   

ProductHttpApiHostModule 添加 redis 
  ``` c#
   public override void ConfigureServices(ServiceConfigurationContext context)
    {
        ...
  // 5、使用Redis
        Configure<AbpDistributedCacheOptions>(options =>
        {
            options.KeyPrefix = "ProductService:";
        });
        ...
    }
  ```

appsettings.json
``` json
{
...
  "Redis": {
    "Configuration": "127.0.0.1:6379"
  },
...
}

```

4、`LKN.Product.HttpApi`模块下找到`ProductController.cs`类，在 `GetAsync` 接口使用redis 缓存商品信息实例
ProductsController
```c# 
    [RemoteService]
    [Route("api/ProductService/Product")]
    public class ProductsController : ProductController, IProductAppService
    {
        private readonly IProductAppService _ProductAppService;
        public IDistributedCache<ProductDto> _distributedCache { set; get; } // 使用redis
        public ProductsController(IProductAppService ProductAppService)
        {
            _ProductAppService = ProductAppService;
        }
        /// <summary>
        /// 查询商品API
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ProductDto> GetAsync(Guid id)
        {
            ProductDto productDto = await _distributedCache.GetAsync(id.ToString());
            if (productDto == null)
            {
                productDto = await _ProductAppService.GetAsync(id);
                await _distributedCache.SetAsync(id.ToString(), productDto, new DistributedCacheEntryOptions()
                {
                    AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(60) // 设置过期时间
                });
            }
            return productDto;
        }
        ....
    }

```
查看效果：

 ![Alt text](/images/abpmicroservices/micro011/abpmicroservices0011_0005image.png)     

缓存成功！！

### Redis中数据是否需要设置过期时间？
 1、必须有过期时间  
 如果不设置过期时间，数据发生变化，数据就会出现了污染。

## 分布式锁 
### 电商微服务项目中，为什么要使用分布式锁？

应用场景：扣减库存的业务
创建订单时，就会更新商品。

更新商品微服务库。  


 ![Alt text](/images/abpmicroservices/micro011/abpmicroservices0011_0006image.png)     

这种情况就会出现”超买问题“  
1、商品卖出超量 
假如：库存10件，卖出了20件。

20个扣减库存并发  
1、服务实例同时查询数据库。
### 如何防止超卖？
1、10件商品，必须10件。  

 ![Alt text](/images/abpmicroservices/micro011/abpmicroservices0011_0007image.png)     

 使用分布式锁场景，就可以解决超卖问题。

 ### 如何落地分布式锁？  

 1、`RedisLock` 类的实现
 ```c#
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
            connectionMultiplexer = ConnectionMultiplexer.Connect("localhost:6379");

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

            /*while (true)
            {
                bool flag = database.LockTake("redis-lock", Thread.CurrentThread.ManagedThreadId, TimeSpan.FromSeconds(10));
                // 1、true ：成功：false 失败
                // 如果加锁失败。
                if (flag)
                {
                    break;
                }

                // 1、怎么防止死循环
                Thread.Sleep(10);
            }*/
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

 2、`LKN.Product.HttpApi` 模块中，在ProductsConstroller的更新商品接口，添加分布式锁
 ```C# 
 /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<ProductDto> UpdateAsync(Guid id, UpdateProductDto input)
        {
            //throw new Exception("扣减库存失败");
            #region 1、传统
            {
                /* ProductDto productDto = await _ProductAppService.UpdateAsync(id, input);*/
            }
            #endregion

            #region 2、分布式锁(多实例)
            {
                RedisLock redisLock = new RedisLock();
                redisLock.Lock();
                ProductDto productDto = await _ProductAppService.UpdateAsync(id, input);
                redisLock.UnLock();
                return productDto;
            }
            #endregion

            #region 2、线程锁(单实例)
            {
                /*lock ()
                {
                    ProductDto productDto = await _ProductAppService.UpdateAsync(id, input);
                }
                
                return productDto;*/
            }
            #endregion
        }
 ```

### redis实现分布式锁原因？ 
1、redis单线程特性
分布式事务和分布式锁区别？  
1、分布式事务：不同微服务数据一致。订单微服务商品微服务 
2、分布式锁：同一个服务，多个实例（集群）。

### 内存和缓存的区别是什么？
 磁盘上有内存  
 缓存（应用），用内存（技术）   
 缓存  
 1、时间限制：只能多久

 redis:会消耗内存  
 内存有限情况，存储海量数据采用`SSDB`     