---
title: '微服务大数据库MongoDB、任务调度Hangfire'
date: 2023-10-26 
tags:
- '微服务大数据库MongoDB、任务调度Hangfire'
- 'abp'
- 'dotnet'
- 'minio'
categories:
- '技术'
---

## 目录
[[toc]]

## 微服务大数据库MongoDB、任务调度Hangfire

## 大数据数据库MongoDB
MongoDB文档数据库 json类似，xml yaml文件  

应用场景：以商品添加为例  
1、商品微服务 集成MongoDB  
1.1 在`LKN.Product.MongoDB` 中 `ProductMongoDbContext.cs` 类，添加代码  

`ProductMongoDbContext.cs`  代码实现，同时创建一个MongoDB远程连接对象 ConnectionMonogDBStringName  
``` c# 
using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace LKN.Product.MongoDB;

[ConnectionStringName(ProductDbProperties.ConnectionMonogDBStringName)]//需要创建远程连接字符串地址
public class ProductMongoDbContext : AbpMongoDbContext, IProductMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */
    public IMongoCollection<LKN.Product.Products.Product> Products => Collection<LKN.Product.Products.Product>(); // 创建商品模型
    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureProduct();
    }
}

```

`ProductMongoDbContextExtensions` 
```c#

public static class ProductMongoDbContextExtensions
{
    public static void ConfigureProduct(
        this IMongoModelBuilder builder,
        Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
    {
        Check.NotNull(builder, nameof(builder));
        var options = new ProductMongoModelBuilderConfigurationOptions(
                ProductDbProperties.DbTablePrefix
            );

        optionsAction?.Invoke(options);

        // 1、创建商品模型对应的表
        builder.Entity<Products.Product>(b =>
        {
            b.CollectionName = "Products";
        });
    }
}

```
`ProductMongoModelBuilderConfigurationOptions` 

```c#
using Volo.Abp.MongoDB;

namespace LKN.Product.MongoDB;

public class ProductMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
{
    public ProductMongoModelBuilderConfigurationOptions(string collectionPrefix = "") : base(collectionPrefix)
    {
    }
}
```


1.2 在`LKN.Product.Domain` 领域层定义接口 `IProductMongoDBRepository` 

``` c# 
 /// <summary>
    /// 商品仓储
    /// 1、做定制化
    /// </summary>
    public interface IProductMongoDBRepository : IRepository<Product, Guid>
    {
        Product GetProductByName(string ProductName);

        /// <summary>
        /// 查询和图片
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Product> GetProductAndImages();

        public Task DeleteProductByProductStock(int ProductStock);
    }
```

1.3 在`LKN.Product.MongoDB` MongoDB层 添加 `ProductMongoDBRepository` 实现

``` C# 
 
namespace LKN.Product.Products
{
    /// <summary>
    /// 商品仓储实现
    /// </summary>
    [Dependency(ServiceLifetime.Singleton)]
    public class ProductMongoDBRepository : MongoDbRepository<ProductMongoDbContext, Product, Guid>, IProductMongoDBRepository
    {
        public ProductMongoDBRepository(
            IMongoDbContextProvider<ProductMongoDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }

        public async Task DeleteProductByProductStock(int ProductStock)
        {
            // 1、获取MongoDB对应集合
            IMongoCollection<Product> mongoCollections = await GetCollectionAsync();

            // 2、根据库存删除商品
            await mongoCollections.DeleteManyAsync(Builders<Product>.Filter.Eq(b => b.ProductStock, ProductStock));
        }

        /*public override async Task<Products> GetAsync(Guid id, bool includeDetails = true, CancellationToken cancellationToken = default)
        {
            DbSet<Products> products = await GetDbSetAsync();
            return products.Include(p => p.ProductImages).Where(p => p.Id == id).FirstOrDefault();
        }*/

        public IEnumerable<Product> GetProductAndImages()
        {
            /* DbSet<Products> products = GetDbSetAsync().Result;

             return products.Include(product => product.ProductImages).ToList();*/
            return null;
        }

        /// <summary>
        /// 根据商品名称，查询商品
        /// </summary>
        /// <param name="ProductName"></param>
        /// <returns></returns>
        public Product GetProductByName(string ProductName)
        {
            /*// 1、第一种实现
            //EBusinessDbContext eBusinessDbContext = GetDbContextAsync().Result;

            // 2、第二种实现，根据名称获取商品
            DbSet<Products>  products = GetDbSetAsync().Result;
            return products.Where(product => product.ProductTitle == ProductName).FirstOrDefault();*/
            return null;
        }
    }
}

```

2、在`LKN.Product.HttpApi.Host` 配置项目引用 `LKN.Product.MongoDB`  并且在添加  `typeof(ProductMongoDbModule),`  

![Alt text](/images/abpmicroservices/micro012/abpmicroservices0012_0001image.png)     


ProductHttpApiHostModule  代码实现
```c# 

[DependsOn(
  ...
    typeof(ProductMongoDbModule),
  ...
 )]
public class ProductHttpApiHostModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
         ...
        // 6、使用不开启默认事务（支持单节点MonogDB）
        Configure<AbpUnitOfWorkDefaultOptions>(options =>
        {
            options.TransactionBehavior = UnitOfWorkTransactionBehavior.Disabled;
        });
        ...
    }
    ....
 }
```
`appsettings.json`  添加 ProductMonogDB 连接字符串  

``` json
{
  "ConnectionStrings": {
    "Default": "Server=localhost;Port=3306;Database=Product;Uid=root;Pwd=myPassword;",
    //"Product": "Server=(LocalDb)\\MSSQLLocalDB;Database=Product_Module;Trusted_Connection=True;TrustServerCertificate=True"
    "Product": "Server=loclahost;Port=3306;Database=LKN.ProductService;Uid=root;Pwd=skceDsB010993.;",
    "ProductMonogDB": "mongodb://localhost:27017"
  },
}
```
 

## 使用EF和MongoDB时，只能二选择一个

需要注意的是`LKN.Product.MongoDB ` 的 `ProductMongoDbContext`类，上下文对象的远程连接地址 
```c# 
[ConnectionStringName(ProductDbProperties.ConnectionMonogDBStringName)]
```

现在切换MongoDB存储，只需要在 `LKN.Product.Application` 模块中ProductAppService类，切换MongoDB上下文对象即可。

![Alt text](/images/abpmicroservices/micro012/abpmicroservices0012_0002image.png)     

打开浏览器添加商品   

![Alt text](/images/abpmicroservices/micro012/abpmicroservices0012_0003image.png)     

结果添加成功  

![Alt text](/images/abpmicroservices/micro012/abpmicroservices0012_0004image.png)     

## 总结

1、MongoDB和EFCore可以共存一个项目中。

IProductAbpRepository   
ProductMongoDBRepository   

多微服务关联查询     
1、用户微服务查询订单微服务，查询支付微服务     
添加订单： 数据存储一条，MongoDB存储一份   
添加支付： 数据存储一条，MongoDB存储一份   

用户微服务查询  
1、查询MongoDB 
可以提升性能    

但是：事务问题  
 分布事务可以解决，但是增加复杂度   

数据异构 Cannal 来实现   
## 任务调度Hangfire 

 1、添加订单业务场景，消耗库存     
 订单：时间期限，一般默认为30分钟。   
 回收库存，给其他订单使用。   
 
 如何自动回收库存，所以，Hangfire   

 ## 如何落地Hnagfire  

 步骤  
 1、准备OrderService微服务  
 2、使用abp 的`Volo.Abp.BackgroundWorkers.Hangfire`
 
 实现：
    1、 在订单微服务应用层上引用`Volo.Abp.BackgroundWorkers.Hangfire`
    ``` c# 
     <PackageReference Include="Volo.Abp.BackgroundWorkers.Hangfire" Version="7.3.0" />
    ```
    2、OrderApplicationModule 添加 依赖注入    `typeof(AbpBackgroundWorkersHangfireModule),`

    ``` c#
    [DependsOn(
    typeof(OrderDomainModule),
    typeof(OrderApplicationContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpPermissionManagementApplicationModule),
       typeof(AbpBackgroundWorkersHangfireModule),
    typeof(AbpAutoMapperModule)
    )]
public class OrderApplicationModule : AbpModule
{
    ....
}
 ```

 任务添加`OrderStackWorker` 并实现`HangfireBackgroundWorkerBase`

 ``` c# 

    /// <summary>
    /// 自动回收库存任务
    /// </summary>
    public class OrderStackWorker : HangfireBackgroundWorkerBase
    {
        public ILogger<OrderStackWorker> _logger { get; set; } //efcore
        public OrderStackWorker()
        {
            RecurringJobId = nameof(OrderStackWorker);
            CronExpression = Cron.MinuteInterval(1);
        }
        public override Task DoWorkAsync(CancellationToken cancellationToken = default)
        {
            _logger.LogInformation("Executed OrderStackWorker。。。。");
            //1、遍历订单表
            //2、判断订单是否过期。根据时间字段
            //3、过期的订单，直接回复库存

            return Task.CompletedTask;
        }
    }
 ```

## Hanfire 与 ScheduleMaster 的区别是什么  
Hanfire 是单体  
ScheduleMaster 任务调度中心

