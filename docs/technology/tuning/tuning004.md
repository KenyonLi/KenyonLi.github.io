---
title: 'WebAPI调优'
date: '2024-04-28' 
tags:
- 'WebAPI调优'
- 'abp'
- 'dotnet'
- 'docker'
categories:
- '技术'
---

## 目录
[[toc]]

## WebAPI调优
::: tip WebAPI 调优:降低操作时间
1、时间调优。
2、代码调优。代码结构
::: 

## 为什么要对WebAPI调优

::: tip 1、查询秒杀商品业务场景
客户端--->秒杀商品100ms-->900ms数据库。 客户端请求时间就是1s,如何降低呢。
1、性能监控工具：skywallking
2、方案：缩短路径
3、工具：本地缓存
4、落地：落地本地缓存
:::

落地本地缓存 
var meoryCacheEntryOptions= MemoryCacheEntryOptions()
设置过期时间，为了保证数据与源头一致。
meoryCacheEntryOptions.AbsoluteExpirationRelativetToNow = TimeSpan.FromSecconds(60);
数据量过多的情况。
meoryCacheEntryOptions.SetSize(1024);
限制缓存大小(保证系统不影响其他操作)

方案：使用异步更新缓存
```C#
meoryCacheEntryOptions.RegisterPostEvictionCallback((key,value,reason,state)=>{
    //1. key = seckills
    //2. valu = List<Seckills>()
    //3. reason 回收原因
    //4. state 状态
    // 可以更新数据
});
```
缓存击穿：当查询时，缓存刚才过期。数据异构形式。
如果缓存的数据量，比较大。1000条数据
MemoryCache 1000条数据
1.CacheItem
2.设置过期时间。

如果：
1.全部一起过期

缓存数据删除的意义：
1. 数据一致
2. 腾出空间

1. 先进先出算法
队列中。
2. 如果缓存数据一直不使用。
缓存过期，缓存数据使用频率低。 
经常不使用回收算法
方案：记录访问次数。如果访问次数<10
自动回收

回收总结：
1、数据过期如何回收。先进先出算法 FIFO
2、数据使用频率低，如何回收。经常不使用回收算法。（memoryCacheEntry没有实现） LRU
3、基本上使用 LFU
4、优先回收

本地缓存缺陷：
存在前提：单体项目

集群部署使用redis


查询商品路径
客户端-->查询webapi-->redis
方案：缩短路径
所以：缓存数据直接存储到客户端：是优化极致，性能极致。
http浏览器缓存
总结：
   1 缓存优化极致：路径优化极致
   数据特点
   数据量有大和小。
   如果数据量越小，查询性能越高。
   如果数据量越大，查询性能越低。

   压缩算法：将大的数据压缩成小的数据。

   1.  本地缓存优化
   2. 分布式缓存优化
   3. http浏览器缓存优化
   4. 响应结果压缩。将大的数据压缩为比较小的数据

