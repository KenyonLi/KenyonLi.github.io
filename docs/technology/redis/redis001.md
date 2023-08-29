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