---
title: 'InnoDB架构详解、事务介绍'
date: 2023-07-10
tags:
- 'mysql'
- '数据库'
categories:
- '技术'

# NavLink - 外部 URL
prev:
  text: Mysql 架构体系详解
  link: /technology/database_design_analysis/mysql/01mysql_info.md

next:
  text: InnoDB事务
  link: /technology/database_design_analysis/mysql/03mysql_innoDB.md
---
## 目录
[[toc]]
## 一、InnoDB的磁盘结构
### 1、redolog文件
```
	由一组文件组成
	循环写
	默认是两个文件：
		ib_logfile0
		ib_logfile1
	文件数量可以调整，文件大小可以调整。默认是50m
```
### 2、表空间文件
```
	系统表空间：
		ibdata1
	用户表空间：
		用户的数据和索引信息
		存储格式：
			ibd文件->段->区（1m）->页（16k）->行（4中格式）
		mysql数据的读写是以页为单位，默认是16k，也可调整。
```
## 二、内存结构
### 1、bufferpool缓冲池
```
	1）数据页
		当读取数据页后会缓存到缓冲池中，内存中的数据和磁盘中的数据是相同的，如果再次读取相同的数据直接从内存中获得。
		减少磁盘的io，提高性能。
		如果缓冲池中写满了数据页，会采用LRU算法来移除数据页。
	2）索引页
		以页为单位将索引数据读取到内存放到缓冲区中。如果缓冲池中写满了数据页，会采用LRU算法来移除索引页。
	3）修改缓冲区change buffer
		早期版本中叫做插入缓冲区，insertbuffer。
		解决辅助索引更新问题的，当插入数据时，需要更新辅助索引（非主键索引），辅助索引的更新内容先保存到缓冲区中，
		后面由独立的线程定时更新磁盘。后期版本中无论是做更新还是删除操作都可以使用缓冲区。所以改名为changebuffer。
	4）自适应hash索引
		是有InnoDB来维护的一个hash索引。key-value形式的索引。
		用户是无法干预的，建立自适应hash索引的过程也是非常复杂的。
```
### 2、redolog buffer
```
	重做日志文件缓冲区。
	记录的就是redolog中的内容，记录增删改操作的动作，先写入缓冲区，然后再写入磁盘。
	redolog是mysql保证数据不丢失一个重要环节。如果执行commit操作，需要把redolog缓冲区中的数据写入redolog文件。就可以保证数据不丢失。

	数据更新流程：
	
	1、修改数据时，开启事务。
	2、判断数据是否在内存中，如果不在内存中，读取磁盘将数据页读取到缓冲池中。
	3、如果在内中就直接修改内存缓冲池中的数据页。就会造成内存中的数据页和磁盘的数据页不一致，形成脏页。
	4、修改内存数据页之前，需要写redolog缓存区。
	5、如果用户执行commit操作，需要把redolog中的内容写入磁盘。
	6、如果写redolog成功说明事物提交成功，否则commit失败需要回滚。

	redolog是顺序写，wal形式写，比随机写性能要好。

	redolog落盘的时机默认是commit时。但是时机是可以修改的，是通过参数控制：innodb_flush_log_at_trx_commit
	1）当属性值为0时，事务提交时，不会对重做日志进行写入操作，而是等待主线程按时写入每秒写入一次；
	2）当属性值为1时，事务提交时，会将重做日志写入操作系统缓存，并且调用操作系统的fsync，
		将缓冲区中的数据真正写入磁盘存储，确保不会出现数据丢失；默认值是1
	3）当属性值为2时，事务提交时，也会将redolog写入操作系统缓存，但是不会调用fsync，而是让操作系统自己去判断何时将缓存写入磁盘
```

## 三、脏页的落盘流程
### 1、checkpoint	
```
	通过checkpoint检查点机制执行落盘操作。

	1）sharp checkpoint：强制落盘，数据库关闭时。内存中所有的脏页全部落盘
	2）fuzzy checkpoint：将一部分脏页落盘。
		1、Master Thread Checkpoint；
			定时执行脏页落盘操作。
		2、FLUSH_LRU_LIST Checkpoint；
			当这个bufferpool空间页面数量不足的时候
			并且用户可以通过参数innodb_lru_scan_depth控制
		3、Async/Sync Flush Checkpoint；
			redolog快写满时需要执行。
			当redolog的使用量大于redolog总容量的75%小于90%时执行异步落盘。不会阻塞写入操作。
			当redolog的使用量大于redolog总容量的90%时执行同步落盘。会阻塞写入操作。
		4、Dirty Page too much Checkpoint
			bufferpool中脏页太多。
			innodb_max_dirty_pages_pct的默认值在innodb 1.0之前是90%，之后是75%。
```
### 2、脏页落盘的流程
```
	执行双写操作将数据页落盘。
	1）将脏页写入doublewrite缓冲区。
	2）将双写缓冲区的数据写入系统表空间(ibdata1)
	3）将双写缓冲区的数据写入用户表空间(*.ibd)

	双写保证落盘过程中不会造成数据页的损坏。
	redolog中记录的是某个数据页修改的内容，并不是数据页完整内容。
```