---
title: 'InnoDB锁篇'
date: 2023-07-10
tags:
- 'mysql'
- '数据库'
categories:
- '技术'

# NavLink - 外部 URL
prev:
  text: InnoDB架构详解、事务介绍
  link: /technology/database_design_analysis/mysql/02mysql_info.md.md

next:
  text: InnoDB索引
  link: /technology/database_design_analysis/mysql/04mysql_info.md
---
## 目录
[[toc]]
## 一、InnoDB锁篇

### 1、什么是lbcc
::: tip 参考配置
> [0.3 MySQL事务篇](/file/mysql/03.MySQL事务篇.pdf)
:::
```
基于锁的并发控制
```
### 2.什么是mvcc
```
基于版本的并发控制
```
### 3.InnoDB中mvcc的实现
```
基于undolog+readview实现的
	undolog：回滚日志。
	readview：读视图。
修改数据后undolog的行为：
1）undolog中的内容
	其中包含修改的数据行的内容。
	每个记录行中包含：回滚指针、事务id、rowid（如果没有主键）+字段内容。
	事务id：修改当前记录的事务的id
2）read view
	控制读取记录时哪个版本可以读取。
	m_ids[]:保存当前数据库中活跃的事务id。
	m_up_limit_id：m_ids事务列表中的最小事务id，如果当前列表为空那么就等于m_low_limit_id。事务id的下限。
	m_low_limit_id：系统中将要产生的下一个事务id的值。事务id的上限。
	m_creator_trx_id：当前事务id，m_ids中不包含当前事务id。

	readview访问控制：
	1、版本中事务id小于readview的下限版本可以访问，在生成readview时事务以及结束。
	2、版本中事务id大于等于readview的上限不可以被访问，生成readview时事务还没有生成。
	3、如果版本号大于readview中的下限并且小于readview的上限，判断事务在m_ids中是否存在，如果存在不可以访问，如果不存在可以访问。
	4、如果版本号等于当前事务id可以被访问
```
### 4、mvcc实现事务隔离级别
```
    InnoDB中mvcc只支持两种事务隔离级别：RC、RR
	RC：每次读取数据前都生成一个ReadView，可以读到最新已提交的数据。
	RR：在事务开始后第一次读取数据时生成一个ReadView，以后再执行相同的sql语句使用同一个ReadView。
```
### 5、快照读和当前读
```
    普通查询都是快照读，不需要加锁，读写不冲突。
	当前读：
		insert
		delete
		update
		select .. for update
		select .. lock in share mode
	都需要加锁。lbcc。
```
