---
title: '网关中间件Nginx'
date: 2023-08-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- '网关中间件Nginx'
categories:
- 'C#'
---

## 目录
[[toc]]

## 分布式中间件-Nginx
### 什么是Nginx
> Nginx是高性能HTTP服务器，反向代理服务器，邮件代理服务器，TCP/UDP反向代理服务器  
>[Nginx完整课件.pdf](/file/nginx/Nginx完整课件.pdf)
### 什么地方使用Nginx
> Nginx主要用在集群系统中。  

### 集群系统中为什么要使用Nginx
>单个系统，主要用来处理客户端的请求，一个系统处理客户端的请求量是有限的，当客户端的并发量，操过了系统处理的并发能力，就会导致系统处理速度变慢，也就是所谓的性能下降。所以，为了提升性能。
>因此我们需要通过多个实例来分离。所以， 我们会创建多个系统实例，形成的系统就叫做集群系统。可以，集群系统，如何均衡处理客户端的请求？  
>分流代表技术，就是Nginx。  

> 在什么样的集群系统中使用Nginx呢？用的比较多的就是电商集群系统。那么，在电商集群系统中如何落地Nginx？  

> 业务场景：创建商品业务场景  

### 集群系统中如何落地Nginx
>前提： 

+ 1、电商系统

+ 2、Nginx

> 步骤

- 1、电商集群系统准备

> 通过VS创建.Net7电商系统
![Alt text](/images/nginx/nginx_0001image.png)

> 2、Nginx准备

>> 2.1 Nginx前提准备
 [Nginx下载](https://nginx.org/en/download.html)
​ Nginx下载地址：https://nginx.org/download/nginx-1.24.0.zip

### 查询商品分流场景落地
条件  

- 1、电商集群系统LKN.EBusiness

- 2、Nginx启动

- 3、客户端访问

> 步骤  

> - 1、先进入到电商集群系统LKN.EBusiness

>> 1.1 先在电商网站微服务中创建ProductController类

>>​ 1.2、然后在ProductController类添加代码

``` C# 
        /// <summary>
        /// 创建商品
        /// </summary>
        /// <param name="productCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public Product CreateProduct(ProductCreateDto productCreateDto)
        {
            Console.WriteLine("查询商品");
            return new Product() ;
        }
``` 
>> 1.3、然后启动电商系统实例一  

 

>>​ 1.4、然后再启动电商系统实例二  

 

> 2、Nginx准备  

>> ​ 2.1 先进入到Nginx中

![Alt text](/images/nginx/nginx_0002image.png)

>> 2.2 然后打开nginx.conf配置，在里面添加

``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
        server localhost:5001;
        server localhost:5002;
    }
}
``` 
>> 2.3、然后启动Nginx
![Alt text](/images/nginx/nginx_0003image.png)

>3、客户端访问  

>>​ 3.1、进入到浏览器进行访问   

## 查询商品分流Nginx原理
### 模块化设计
> 高度模块化的设计是 Nginx 的架构基础。在 Nginx 中，除了少量的核心代码，其他一切皆为模块。  
> 所有模块间是分层次、分类别的，Nginx 官方共有五大类型的模块：核心模块、配置模块、事件模块、HTTP 模块、mail 模块、stream模块。它们之间的关系如下：

![Alt text](/images/nginx/nginx_0004image.png)

> 在这 5 种模块中，配置模块和核心模块是与 Nginx 框架密切相关的。而事件模块则是 HTTP 模块和 mail 模块的基础。HTTP 模块和 mail 模块的“地位”类似，它们都是更关注于应用层面。

### 多进程模型
> Nginx之所以为广大码农喜爱，除了其高性能外，还有其优雅的系统架构。与Memcached的经典多线程模型相比，Nginx是经典的多进程模型。Nginx启动后以daemon的方式在后台运行，后台进程包含一个master进程和多个worker进程，具体如下图：  

![Alt text](/images/nginx/nginx_0005image.png)

### 事件驱动架构
Nginx 处理事件的简单模型：
![Alt text](/images/nginx/nginx_0006image.png)

> 由上图可以看出，处理请求事件时，Nginx 的事件消费者只是被事件分发者进程短期调用而已，这种设计使得网络性能、用户感知的请求时延都得到了提升，每个用户的请求所产生的事件会及时响应，整个服务器的网络吞吐量都会由于事件的及时响应而增大。当然，这也带来一定的要求，即每个事件消费者都不能有阻塞行为，否则将会由于长时间占用事件分发者进程而导致其他事件得不到及时响应，Nginx 的非阻塞特性就是由于它的模块都是满足这个要求的。

### 虚拟主机
`ngx_http_core_module`  

>​ 作用：虚拟主机就是为了对所有应用系统进行反向代理  

> 反向代理
`ngx_http_proxy_module`  

>​ 作用：代理后端服务器。

>负载均衡 
`ngx_http_upstream_module`  

> 作用：将流量均分到指定后端实例 

## 查询商品分流场景落地-情况1
>情况1：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果5002处理请求比较慢，会导致请求堆积在5002。如何解决请求堆积问题？  
>方案：最小活跃数算法  

### 如何落地最小活跃数算法
> 条件  

> 1、least_conn

> 步骤  

> 1、在nginx.conf文件中添加  
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
        least_conn;
        server localhost:5001;
        server localhost:5002;
    }
}
``` 
### 查询商品分流场景落地-情况2
> 情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果5001和5002分别都有缓存，会导致缓存命中下降，请求会回源到数据库中去查询数据，导致性能下降。如何提升性能?  

>方案：`Hash一致性算法`

### 如何落地hash一致性算法？
> 条件  

> 1、ip_hash  

> 步骤  

> 1、在nginx.conf文件中添加  

``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
        ip_hash;
        server localhost:5001;
        server localhost:5002;
    }
}
```
### 查询商品分流场景落地-情况3
> 情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001的时候，5001零时宕机了，会导致请求失败。如何保证请求成功  
> 方案：失败重试  

> 如何落地失败重试？  
>条件  
> 1、max_fails=2 fail_timeout=10s;  

>步骤  

>1、在nginx.conf文件中添加  
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
    }
}
```
### 查询商品分流场景落地-情况4 
> 情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001的时候，5001永久宕机了，会导致请求失败。如何保证请求成功  
>方案：`故障转移`

>如何落地故障转移？  
>条件  
>1、自动失败重试  
### 查询商品分流场景落地-情况5
>情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001和5002，两个实例同时宕机了，会导致系统不可用，如何保证系统高度可用？  
>方案：主机备份   
>如何落地主机备份？  
>条件
>> 1、backup  

> 步骤  

> 1、在nginx.conf文件中添加  
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
        server localhost:5003 backup;
    }
}
```

### 查询商品分流场景落地-情况6
>情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001和5002，两个实例处理能力达到极限的时候，导致系统可能宕机的风险。所以，在有限资源的情况下。我们应如何保证系统不宕机？ 

> 方案：`限流`  

> 如何落地限流？  
>条件  

>1、ngx_http_limit_conn_module  

>步骤 

>1、在nginx.conf文件中添加  
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    limit_conn_zone $server_name zone=perserver:10m;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            limit_conn perserver 1;
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
        server localhost:5003 backup;
    }
}
``` 
>和客户端无关

>缺陷：导致正常客户端无法使用  

### 限流-情况1
>缺陷：服务端被限制只能允许访问10个请求，那么就会限制请求数量进行访问，请求数可能来至于多个客户端，如果一个客户端都把请求数占用了。就会导致其他客户端无法进行请求，导致恶意攻击。   

>方案：客户端限流  

>如何落地客户端限流？  
>条件
>1、binary_remote_addr 
>步骤  

> 1、在nginx.conf文件中添加 
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    limit_conn_zone $binary_remote_addr zone=perserver:10m;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            limit_conn perserver 1;
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
        server localhost:5003 backup;
    }
}
```
### 限流-情况2
> 注意：$binary_remote_addr 是 获取客户端ip地址的变量，长度为 4 字节，会话信息的长度为 32 字节。
> 1048576 /32 = 32768个会话

>缺陷： 

> 1、如果客户端非常多，每个IP都限制请求处理1次，如果出现了100万个客户端，那么就有非常多的客户端徐亚需要进行处理，那么就会导致系统被压垮。所以，这个时候，就需要使用平滑处理    

> 方案：客户端IP平滑限流   

>如何落地客户端IP平滑限流？  
>条件  

>1、ngx_http_limit_req_module  

>步骤 

>1、在nginx.conf文件中添加  
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    limit_req_zone $binary_remote_addr zone=addr:10m rate=2r/s;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            limit_req zone=addr;
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
        server localhost:5003 backup;
    }
}
```
#### 原理：

- 1、令牌桶算法

- 2、漏桶算法

### 限流-情况3
>缺陷：

>1、如果客户端请求非常多，1s处理2个是 每500ms 处理一个，就会导致并发性能下降。这个时候把不能处理的，排除掉，然后再来处理。所以需要加缓存来处理。缓冲几个，以提升性能。  

>方案：客户端IP平滑限流-突发   

>如何落地客户端IP平滑限流？   
>条件  

> 1、ngx_http_limit_req_module   

>步骤  

>1、在nginx.conf文件中添加  
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    limit_req_zone $binary_remote_addr zone=addr:10m rate=2r/s;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            limit_req zone=addr burst=5;
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
        server localhost:5003 backup;
    }
}
```
### 限流-情况4
> 缺陷：  
>1、如果客户端请求非常多，1s处理2个是 每500ms 处理一个，就会导致并发性能下降。这个时候把不能处理的，排除掉，然后再来处理。所以需要加缓存来处理。缓冲几个，以提升性能。  
>方案：客户端IP平滑限流-突发  
>如何落地客户端IP平滑限流？  
>条件 

> 1、ngx_http_limit_req_module  

>步骤 

>1、在nginx.conf文件中添加 
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    limit_req_zone $binary_remote_addr zone=addr:10m rate=2r/s;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            limit_req zone=addr burst=5;
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
        server localhost:5003 backup;
    }
}
```
### 限流-情况5
> 缺陷：

> 1、如果客户端请求非常多，1s处理2个是 每500ms 处理一个，就会导致并发性能下降。这个时候把不能处理的，排除掉，然后再来处理。所以需要加缓存来处理。缓冲几个，以提升性能。

> 方案：客户端IP平滑限流-立即突发

> 如何落地客户端IP平滑限流立即突发？
> 条件

>1、ngx_http_limit_req_module

>步骤
> 1、在nginx.conf文件中添加

```bash 

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    limit_req_zone $binary_remote_addr zone=addr:10m rate=2r/s;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            limit_req zone=addr burst=5 nodelay;
            proxy_pass  http://LKN.EBusiness;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
        server localhost:5003 backup;
    }
}
```
### 查询商品缓存场景落地-情况7
>情况7：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001和5002，两个实例处理能力达到极限的时候，如何更高提升系统性能场景？

>方案：代理缓存

>如何落地代理缓存？   
>条件

> 1、ngx_http_proxy_module   

>步骤  

>1、在nginx.conf文件中添加   
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    proxy_cache_path /cache/nginx/ levels=1:2 keys_zone=mycache:64m;
    limit_conn_zone $server_name zone=perserver:10m;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            limit_conn perserver 1;
            proxy_cache mycache;
            proxy_pass  http://LKN.EBusiness;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_cache_methods GET HEAD;
            proxy_cache_revalidate on;
            proxy_cache_valid 200 302 10m;
            proxy_cache_valid 404 1m;
            proxy_cache_valid any 1m;
            proxy_cache_min_uses 1;
            proxy_cache_use_stale error timeout invalid_header http_500 http_502 http_503 http_504;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    #动态负载均衡配置
    upstream LKN.EBusiness{
    
        server localhost:5001 max_fails=2 fail_timeout=10s;
        server localhost:5002 max_fails=2 fail_timeout=10s;
        server localhost:5003 backup;
    }
}
```
### 参数详解
``` bash
proxy_cache_path /cache/nginx/ levels=1:2 keys_zone=mycache:64m;
#proxy_cache_path 为缓存存放路径;
#levels的第一位表示使用1级子目录冒号隔开第二位表示使用2级子目录,其最多使用三级,1表示每个一级子目录的名字只能使用1个字符;
#key_zone中的mycache为缓存名字,可以在location或者server中通过proxy_cache引用;64m表示用多少内存空间存储nginx key;

proxy_cache mycache;
#引用mycache缓存空间;

proxy_pass http://LKN.EBusiness;;
#将来自 / 的请求代理至192.168.123.34:80 该服务器,后面的 ‘/’ 是必须的;

proxy_set_header Host $host;
#用于后端的real server区分不同的虚拟主机;

proxy_set_header X-Real-IP $remote_addr;
#记录客户端真实ip地址,而不是代理服务器地址,需要后端web服务器开启日志相应功能接收;

proxy_cache_methods GET HEAD;
#表示对客户端请求的GET 和 HEAD方法进行缓存;

proxy_cache_revalidate on;
#本地缓存过期会检查后端服务器该缓存是否存在，避免后端重传占据带宽;

proxy_cache_valid 200 302 10m;
proxy_cache_valid 404 1m;
proxy_cache_valid any 1m;
#针对于不同的响应码进行缓存不同的时间设定;

proxy_cache_min_uses 1;
#某一个请求被响应多少次才会被缓存,默认是1,可以将该值设置为大一些;

proxy_cache_use_stale error timeout invalid_header http_500 http_502 http_503 http_504;
#指明哪种场景可以使用过期缓存,提升用户体验;

补充:
proxy_hide_header;
#隐藏由proxy响应客户端时指定的首部;

proxy_buffer 4|8k
#为了响应客户端更快,服务器端响应客户端可能分成多个ip报文响应,也可以整合在一起再一次响应;

Nginx缓存是键值存储，URL是键，文件路径是值。键值存储的速度就是加快在文件系统中查找的速度。所以，存储的key是哈希过的值。
```
### 查询商品Https应用场景
>为了保证查询商品是安全的，所以需要使用Https通信。  

>条件

>1、server-cert.pem证书

>2、server-key.pem证书

>步骤

>1、证书生成
>>1.1 使用openSSL工具生成  [下载openSSL](https://slproweb.com/products/Win32OpenSSL.html)   
>>>1.1.1  下载openSSL地址：https://slproweb.com/download/Win64OpenSSL-3_1_2.msi   
>>>1.1.2  证书生成地址：https://jingyan.baidu.com/article/6c67b1d6be538c2787bb1e06.html   
>>>1.1.3  证书生成地址: https://blog.csdn.net/weixin_44454510/article/details/126939208

>>1.2 证书路径：

![Alt text](/images/nginx/nginx_0006image.png)

>2、在nginx.conf文件中添加
``` bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;  
events {
   worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
access_log  logs/access.log  main;

sendfile        on;
#tcp_nopush     on;

#keepalive_timeout  0;
keepalive_timeout  65;

#gzip  on;
proxy_cache_path /cache/nginx/ levels=1:2 keys_zone=mycache:64m;
limit_conn_zone $server_name zone=perserver:10m;
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        limit_conn perserver 1;
        proxy_cache mycache;
        proxy_pass  http://LKN.EBusiness;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_methods GET HEAD;
        proxy_cache_revalidate on;
        proxy_cache_valid 200 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 1m;
        proxy_cache_min_uses 1;
        proxy_cache_use_stale error timeout invalid_header http_500 http_502 http_503 http_504;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
    
    # https 虚拟主机
	server {
        listen       4435 ssl;
        server_name  localhost;

		ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem;
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }
    }
}

#动态负载均衡配置
upstream LKN.EBusiness{

    server localhost:5001 max_fails=2 fail_timeout=10s;
    server localhost:5002 max_fails=2 fail_timeout=10s;
    server localhost:5003 backup;
}
}
```
### Http转Https
>缺陷：系统当中总是有很多默认的Http请求，如何将保证http请求转换成https呢？  

> 条件  

>1、ngx_http_rewrite_module  

>步骤  

>2、在nginx.conf文件中添加   
```bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;  
    events {
        worker_connections  1024;
    }
http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    proxy_cache_path /cache/nginx/ levels=1:2 keys_zone=mycache:64m;
    limit_conn_zone $server_name zone=perserver:10m;
    server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        limit_conn perserver 1;
        proxy_cache mycache;
        proxy_pass  http://LKN.EBusiness;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_methods GET HEAD;
        proxy_cache_revalidate on;
        proxy_cache_valid 200 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 1m;
        proxy_cache_min_uses 1;
        proxy_cache_use_stale error timeout invalid_header http_500 http_502 http_503 http_504;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
    
    # https 虚拟主机
	server {
        listen       4435 ssl;
        server_name  localhost;

		ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem;
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }
    }
}

#动态负载均衡配置
upstream LKN.EBusiness{

    server localhost:5001 max_fails=2 fail_timeout=10s;
    server localhost:5002 max_fails=2 fail_timeout=10s;
    server localhost:5003 backup;
	}
}
```
### 查询商品数据库应用场景
>问题：查询商品并发量非常大，导致一个数据库无法正常处理客户端请求，所以需要使用数据库集群来解决并发量问题？如何对数据库进行代理呢？  

>条件  

>1、ngx_stream_core_module 

>2、ngx_stream_proxy_module  

>3、ngx_stream_upstream_module  

>步骤  

>1、在nginx.conf文件中添加  
```bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;    
    events {
        worker_connections  1024;
    }
    
http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
access_log  logs/access.log  main;

sendfile        on;
#tcp_nopush     on;

#keepalive_timeout  0;
keepalive_timeout  65;

#gzip  on;
proxy_cache_path /cache/nginx/ levels=1:2 keys_zone=mycache:64m;
limit_conn_zone $server_name zone=perserver:10m;
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        limit_conn perserver 1;
        proxy_cache mycache;
        proxy_pass  http://LKN.EBusiness;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_methods GET HEAD;
        proxy_cache_revalidate on;
        proxy_cache_valid 200 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 1m;
        proxy_cache_min_uses 1;
        proxy_cache_use_stale error timeout invalid_header http_500 http_502 http_503 http_504;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
    
    # https 虚拟主机
	server {
        listen       4435 ssl;
        server_name  localhost;

		ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem;
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }
    }
}

#动态负载均衡配置
upstream LKN.EBusiness{
    server localhost:5001 max_fails=2 fail_timeout=10s;
    server localhost:5002 max_fails=2 fail_timeout=10s;
    server localhost:5003 backup;
}
}

#数据库代理
stream {

	server {
       listen 13306; 
       proxy_connect_timeout 1s;
       proxy_timeout 3s;
       proxy_pass localhost:3306;    
    }

    upstream mysql {
       server localhost:3306;
    }
}
``` 
### 查询商品Web应用场景
>如果商品是在电商Web网站中，这个时候从电商网站当中查询商品的时候，会同时加载两类数据，静态 数据和动态数据，静态数据：js css 图片，视频，音频等等，动态资源：商品数据。如果访问js css 并发量比较大，会出现cpu，内存等资源全部被耗尽，导致动态数据加载没有资源可用，所以，导致动态资源请求导致性能下降问题？如何提升性能？   

>方案：动静分离  

>前提

>1、电商web系统

>步骤

>1、使用vs2022创建电商web系统

![Alt text](/images/nginx/nginx_007image.png)
​

如何落地动静分离
条件

1、LKN.EBusiness.Web

2、Nginx

步骤

1、先进入到LKN.EBusiness.Web中

​ 将wwwroot文件拆分到放到LKN.EBusiness.StaticResource目录中

![Alt text](/images/nginx/nginx_008image.png)


1、然后进入Nginx中，在nginx.conf文件中添加
```bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;

​    events {
​        worker_connections  1024;
​    }
​    
    http {
        include       mime.types;
        default_type  application/octet-stream;
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
        #                  '$status $body_bytes_sent "$http_referer" '
        #                  '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  logs/access.log  main;

sendfile        on;
#tcp_nopush     on;

#keepalive_timeout  0;
keepalive_timeout  65;

#gzip  on;
proxy_cache_path /cache/nginx/ levels=1:2 keys_zone=mycache:64m;
limit_conn_zone $server_name zone=perserver:10m;
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        limit_conn perserver 1;
        proxy_cache mycache;
        proxy_pass  http://LKN.EBusiness;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_methods GET HEAD;
        proxy_cache_revalidate on;
        proxy_cache_valid 200 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 1m;
        proxy_cache_min_uses 1;
        proxy_cache_use_stale error timeout invalid_header http_500 http_502 http_503 http_504;
    }

    #静态资源
    location ~ \.(ico|js|css|png|jpg|mp4)$ {
        root D:/work/net-project/分布式中间件专题/网关中间件Nginx/LKN.EBusiness.StaticResource/wwwroot;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

    # https 虚拟主机
    server {
        listen       4435 ssl;
        server_name  localhost;

       ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem;
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }
    }
}

#动态负载均衡配置
upstream LKN.EBusiness{

    server localhost:5001 max_fails=2 fail_timeout=10s;
    server localhost:5002 max_fails=2 fail_timeout=10s;
    server localhost:5003 backup;
}
}

#数据库代理
stream {

    server {
       listen 13306; 
       proxy_connect_timeout 1s;
       proxy_timeout 3s;
       proxy_pass localhost:3306;    
    }

    upstream mysql {
       server localhost:3306;
    }
}
```
>3、客户端进行访问

>动静分离-情况1
>缺陷：如果动静资源在一个虚拟主机中，那么静态资源和动态资源共享同一个资源，如果静态或者动态资源访问量比较大，把资源消耗殆尽，动态和静态资源互相会进行影响，导致系统整体上性能下降，如何提升性能？

>方案：动静不同虚拟主机

>如何落地动静不同虚拟主机
>条件

>1、server

>步骤

>1、然后进入Nginx中，在nginx.conf文件中添加
```bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;

#pid        logs/nginx.pid;    
​    events {
​        worker_connections  1024;
​    }
​    
    http {
        include       mime.types;
        default_type  application/octet-stream;
    	log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
        #                  '$status $body_bytes_sent "$http_referer" '
        #                  '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  logs/access.log  main;
sendfile        on;
#tcp_nopush     on;

#keepalive_timeout  0;
keepalive_timeout  65;

#gzip  on;
proxy_cache_path /cache/nginx/ levels=1:2 keys_zone=mycache:64m;
limit_conn_zone $server_name zone=perserver:10m;
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        limit_conn perserver 1;
        proxy_cache mycache;
        proxy_pass  http://LKN.EBusiness;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_methods GET HEAD;
        proxy_cache_revalidate on;
        proxy_cache_valid 200 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 1m;
        proxy_cache_min_uses 1;
        proxy_cache_use_stale error timeout invalid_header http_500 http_502 http_503 http_504;
    }
    
    #静态资源
    #location ~ \.(ico|js|css|png|jpg|mp4)$ {
    #	root D:/work/net-project/分布式中间件专题/网关中间件Nginx/LKN.EBusiness.StaticResource/wwwroot;
    #}

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
    
    server {
        listen       8089;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        #location / {
        #    root   html;
        #    index  index.html index.htm;
        #}
				
		location / {
            proxy_pass  http://localhost:5007;
        }
		
		#静态资源
		#location ~ \.(ico|js|css|png|jpg|mp4)$ {
        #    root D:/work/net-project/分布式中间件专题/网关中间件Nginx/LKN.EBusiness.StaticResource/wwwroot;
        #}

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }
	
	server {
        listen       8090;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        #location / {
        #    root   html;
        #    index  index.html index.htm;
        #}
				
		#location / {
        #    proxy_pass  http://localhost:5007;
        #}
		
		#静态资源
		location ~ \.(ico|js|css|png|jpg|mp4)$ {
            root D:/work/net-project/分布式中间件专题/网关中间件Nginx/LKN.EBusiness.StaticResource/wwwroot;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }
	
	proxy_cache_path cache/nginx/ levels=1:2 keys_zone=mycache:64m;
	server {
        listen       8091;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        #location / {
        #    root   html;
        #    index  index.html index.htm;
        #}
				
		location / {
			proxy_cache mycache;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_cache_methods GET HEAD;
            proxy_cache_revalidate on;
            proxy_cache_valid 200 302 10m;
            proxy_cache_valid 404 1m;
            proxy_cache_valid any 1m;
            proxy_cache_min_uses 1;
            proxy_cache_use_stale error timeout invalid_header http_500 http_502 http_503 http_504;
            proxy_pass  http://localhost:8089;
        }
		
		#静态资源
		location ~ \.(ico|js|css|png|jpg|mp4)$ {
            proxy_pass  http://localhost:8090;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    
    # https 虚拟主机
	server {
        listen       4435 ssl;
        server_name  localhost;

		ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem;
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass  http://LKN.EBusiness;
        }
    }
}

#动态负载均衡配置
upstream LKN.EBusiness{

    server localhost:5001 max_fails=2 fail_timeout=10s;
    server localhost:5002 max_fails=2 fail_timeout=10s;
    server localhost:5003 backup;
}
}

#数据库代理
stream {

	server {
       listen 13306; 
       proxy_connect_timeout 1s;
       proxy_timeout 3s;
       proxy_pass localhost:3306;    
    }

    upstream mysql {
       server localhost:3306;
    }
}
```
### 动静分离-情况2
>缺陷：如果动静资源在一个虚拟主机中，那么静态资源和动态资源共享同一个资源，如果静态或者动态资源访问量比较大，把资源消耗殆尽，动态和静态资源互相会进行影响，导致系统整体上性能下降，如何提升性能？

>方案：Include

## Nginx集群场景
>项目中如何落地Nginx集群
>条件

- 1、linux

- 2、 nginx

- 3、keepalived

> 步骤

### 虚拟机准备：

>1、先通过vwworkstation创建2台linux主机

> 地址：192.168.44.3

>​ 地址：192.168.44.4

>nginx准备：

> 2、然后分别在2台主机上安装nginx

192.168.44.3：

>1 安装 nginx需要工具
``` bash
	 yum -y install gcc make pcre-devel zlib-devel tar zlib
```
>2 下载nginx
```bash
	 wget  http://nginx.org/download/nginx-1.17.1.tar.gz
```
>3 nginx解压/nginx目录 
``` bash
	tar -zxvf  nginx-1.17.1.tar.gz
```
> 4 切换到/nginx/nginx-1.17.1 
>>	执行./configure  
>>		make  
>>		make install   进行安装
>5 切换到/usr/local/nginx/sbin
>>	执行 ./nginx 启动nginx

>yum方式

>192.168.44.4：

### 1 安装 nginx需要工具
```bash
	 yum -y install gcc make pcre-devel zlib-devel tar zlib
```
### 2 下载nginx
```bash
	 wget  http://nginx.org/download/nginx-1.24.0.tar.gz
```
### 3 nginx解压/nginx目录
```bash
	tar -zxvf  nginx-1.24.0.tar.gz
```
### 4 切换到/nginx/nginx-1.24.0
```
	执行./configure  
		make  
		make install 进行安装
```
### 5 切换到/usr/local/nginx/sbin
>	执行 ./nginx 启动nginx
```bash
./nginx
```
### 6 禁用 nginx
``` bash
./nginx  -s stop
```
### 7 重启 nginx
``` bash
./nginx -s reload
```

### yum方式安装
>3、然后配置分别将秒杀项目部署到Nginx中

> 在192.168.44.4主机中进行部署

>4、然后在192.168.44.3配置秒杀项目地址
```bash
server {

     listen       8081;
     server_name  localhost;
     #charset koi8-r;
     #access_log  logs/host.access.log  main;
     location / {
        proxy_pass http://192.168.44.4:5000;
     }
   }
   ```
>`keepalived`准备

>1、先分别在2台主机上安装keepalived
```bash
yum install keepalived
```
>2、然后启动keepalived
```bash
systemctl start keepalived.service
systemctl stop keepalived.service
systemctl restart keepalived.service
```
>3、然后在192.168.44.4配置Keepalive

>进入到cd /etc/keepalived/keepalived.conf配置文件
```yml
 global_defs {

   notification_email { # keepalived服务宕机异常出现的时候，发送通知邮件 可以是多个   acassen@firewall.loc  #  收件人邮箱1

 failover@firewall.loc #  收件人邮箱2

 sysadmin@firewall.loc #  收件人邮箱3
   }

   notification_email_from Alexandre.Cassen@firewall.loc  #邮件发件人

   smtp_server 192.168.200.1  # 邮件服务器地址

   smtp_connect_timeout 30   # 超时时间

   router_id LVS_DEVEL   # 机器标识 局域网内唯一即可

   vrrp_skip_check_adv_addr # 默认是不跳过检查。检查收到的VRRP通告中的所有地址可能会比较耗时，设置此命令的意思是，如果通告与接收的上一个通告来自相同的master路由器，则不执行检查(跳过检查)。

   #vrrp_strict   # 严格遵守VRRP协议。下列情况将会阻止启动Keepalived：1. 没有VIP地址。2. 单播邻居。3. 在VRRP版本2中有IPv6地址。

   vrrp_garp_interval 0  # 小数类型，单位秒，在一个网卡上每组gratuitous arp消息之间的延迟时间，默认为0，一个发送的消息=n组 arp报文

   vrrp_gna_interval 0 # 小数类型，单位秒， 在一个网卡上每组na消息之间的延迟时间，默认为0

}
vrrp_instance VI_1 {
state MASTER  # 服务器状态 MASTER是主服务器  BACKUP是备份服务器 主服务器的priority要比备份服务器大

interface ens33 # 通信端口 通过ip addr可以看到 根据自己的机器配置

virtual_router_id 51  # vrrp实例id  keepalived集群，实例id必须一致

priority 100  # 权重比 主服务器的priority要比备份服务器大

advert_int 1  # 心跳间隔  单位秒  keepalived多机器集群 通过心跳检测，如果发送心跳没反应 就立刻接管；

authentication { # 服务器之间通信密码

    auth_type PASS

    auth_pass 1111

}

virtual_ipaddress { # 自定义虚拟IP 

    192.168.91.199

}
}
```
>3、然后在192.168.44.3配置Keepalive

>进入到cd /etc/keepalived/keepalived.conf配置文件
```yml
 global_defs {

   notification_email { # keepalived服务宕机异常出现的时候，发送通知邮件 可以是多个   acassen@firewall.loc  #  收件人邮箱1

 failover@firewall.loc #  收件人邮箱2

 sysadmin@firewall.loc #  收件人邮箱3
   }

   notification_email_from Alexandre.Cassen@firewall.loc  #邮件发件人

   smtp_server 192.168.200.1  # 邮件服务器地址

   smtp_connect_timeout 30   # 超时时间

   router_id LVS_DEVEL   # 机器标识 局域网内唯一即可

   vrrp_skip_check_adv_addr # 默认是不跳过检查。检查收到的VRRP通告中的所有地址可能会比较耗时，设置此命令的意思是，如果通告与接收的上一个通告来自相同的master路由器，则不执行检查(跳过检查)。

   #vrrp_strict   # 严格遵守VRRP协议。下列情况将会阻止启动Keepalived：1. 没有VIP地址。2. 单播邻居。3. 在VRRP版本2中有IPv6地址。

   vrrp_garp_interval 0  # 小数类型，单位秒，在一个网卡上每组gratuitous arp消息之间的延迟时间，默认为0，一个发送的消息=n组 arp报文

   vrrp_gna_interval 0 # 小数类型，单位秒， 在一个网卡上每组na消息之间的延迟时间，默认为0

}
vrrp_instance VI_1 {
state BACKUP  # 服务器状态 MASTER是主服务器  BACKUP是备份服务器 主服务器的priority要比备份服务器大

interface ens33 # 通信端口 通过ip addr可以看到 根据自己的机器配置

virtual_router_id 51  # vrrp实例id  keepalived集群，实例id必须一致

priority 99  # 权重比 主服务器的priority要比备份服务器大

advert_int 1  # 心跳间隔  单位秒  keepalived多机器集群 通过心跳检测，如果发送心跳没反应 就立刻接管；

authentication { # 服务器之间通信密码
auth_type PASS
auth_pass 1111
}

virtual_ipaddress { # 自定义虚拟IP 
192.168.91.199
}
}
```
>4、然后重启Keepalived
```bash
systemctl restart keepalived.service
```
>5、日志查看
```
tail -f /usr/local/nginx/logs/access.log
tail -f /var/log/messages
```
>2、查看进程
``` bash
ps -ef|grep keep
```
## Nginx自动重启-手动
>条件

>1、nginx_check.sh

>步骤

>1、先创建nginx_check.sh

>2、然后添加内容
```bash
#!/bin/bash
echo 'xxxxxx'
count_nginx=`ps -ef|grep -w nginx|grep -v grep|wc -l`
echo $count_nginx
if [ $count_nginx -eq 0 ];then
/usr/local/nginx/sbin/nginx
sleep 2
if [ `ps -ef|grep -w nginx|grep -v grep|wc -l` -eq 0 ];then
    systemctl stop keepalived.service
fi  
fi
```
>3、然后重启Nginx

### Nginx自动重启-启动
>条件

>1、keepalived

>步骤

>1、在keepalived.conf中添加内容
``` bash
vrrp_script chk_http_port {
     script "/root/nginx_check.sh" #脚本地址
     interval 2 #检测脚本执行的间隔
     weight 2 #比重
}
```
## socket 配置
```bash
   #数据库代理
stream {
    server {
       listen 8181; 
       proxy_connect_timeout 1s;
       proxy_timeout 3s;
       proxy_pass rfidConn;
    }

    upstream rfidConn {
       server localhost:8182;
       server localhost:8183;
       server localhost:8184;
    }
}
```