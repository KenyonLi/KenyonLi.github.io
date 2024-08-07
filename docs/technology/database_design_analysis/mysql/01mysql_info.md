---
title: 'Mysql 架构体系详解'
date: 2023-07-10
tags:
- 'mysql'
- '数据库'
categories:
- '技术'

# NavLink - 外部 URL
#prev:
  #text: mysql 的文件
  #link: /technology/database_design_analysis/mysql/index.md

next:
  text: InnoDB架构详解、事务介绍
  link: /technology/database_design_analysis/mysql/02mysql_info.md
 
---
## 目录
[[toc]]
## Mysql 架构体系详解
### 1、mysql的文件

>* `1） 配置文件` 
>> `/etc/my.cnf`
* `参考配置：`
 > [01.Mysql 架构篇](/file/mysql/01.MySQL架构篇.pdf)     
 > [02.Mysql 安装篇](/file/mysql/02.MySQL安装篇.pdf)
 ::: tip   参考配置
> `MySQL设置大小写不敏感：默认：区分表名的大小写，不区分列名的大小写`
* `0：大小写敏感  1：大小写不敏感`
   `lower_case_table_names=1`
* `默认字符集`

    `character-set-server=utf8`
* `默认时区`

​			`default-time_zone = '+8:00'`
:::
> * `2) 数据文件目录`
>> `/var/lib/mysql`
::: tip 数据文件目录
>* `1.日志文件`
>>`通用日志`
>>* `慢查询日志`
>>* `错误日志`
>>* `二进制日志（binlog）`
>* `2.数据文件`
>>* `保存在数据库对应的目录下`
>>* `InnoDB引擎创建的表：`
>>* `*.frm：表结构定义文件`
>>* `*.ibd：数据+索引`
>>* `MyIsam引擎：`
>>* `*.frm：表结构定义文件`
>>* `*.MYD：数据文件`
>>* `*.MYI：索引文件`
>* `3.系统表空间文件`
>>* `ibdata1`
>* `4.顺序IO`
>>* `日志文件。`
>> * `redolog，保证mysql数据完整性的重要环节。`
:::
### `2、mysql缓存`
​	`mysql5.7中可以使用，在mysql8中已经删除此功能。`
​	`开启缓存：`
​		`query_cache_type`
​		`0：缓存关闭`
​		`1：缓存开启，不缓存带“no_sql_cache”的sql语句`
​		`2：只缓存带“sql_cache”的sql语句`

### `3、mysql支持的引擎`
::: tip 引擎
>*	`可以通过命令查看mysql支持的引擎：`
>>* `show engines;`
>>* `同一个数据库中的不同的表可以使用不同的存储引擎。`
>>* `create table xx () engine=innoDB;`
:::

### `4、InnoDB引擎结构`
>* `1）磁盘结构`
>* `1、系统表空间`
>> * `ibdata1`
>> * `包含：`
>> * `数据字典`
>>* `双写缓冲区`
>>* `修改缓冲区`
>>* `undolog`

>* `2、用户表空间`
>> `每个表都对应一个idb文件。其中包含表中的数据和索引`
>* `3、回滚表空间`
>> `默认包含在系统表空间中，可以配置成独立的文件。`
>* `4、通用表空间`
>>`需要使用create tablespace语句创建，然后建表时指定表所在的表空间。`
>* `5、临时表空间`
>>`创建临时表时使用。`
>* `6、redolog`
>> * `重做日志文件`
>> * `由一组文件组成：`
>> * `ib_logfile0`
>> * `ib_logfile1`
>> * `循环写入，一个文件默认是50m`
>* `2）内存结构`
>> *	`1、缓冲池`
>>> `包含数据页+索引页（16k）`
>> * `2、修改缓冲区`
>>> `包含辅助索引更新的内容。`
>> * `3、自适应hash索引`
>>> * `完全由mysql控制无法人工干预`
>> * `4、redolog buffer`
>>> * `重做日志缓冲区`
>>> * `先写redo log buffer，在commit时将缓冲区的内容刷新到磁盘文件。`