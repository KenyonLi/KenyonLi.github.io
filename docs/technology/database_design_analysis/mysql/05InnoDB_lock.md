---
title: 'Mysql InnoDB 锁'
date: 2023-06-25
tags:
- 'mysql'
- '数据库'
categories:
- '技术'

# NavLink - 外部 URL
prev:
  text: InnoDB索引
  link: /technology/database_design_analysis/mysql/04mysql_info.md

next:
  text: InnoDB锁
  link: /technology/database_design_analysis/mysql/06mysql_info.md
---
## 目录
[[toc]]

## `一`、InnoDB的锁
::: tip 参考
> [05.MySQL锁篇](/file/mysql/05.MySQL锁篇.pdf)
:::
 ### 1、分类
 ```
	锁的位置分类：
		记录锁
		间隙锁
		临键锁
	锁的功能：
		共享锁（S）
		排它锁（X）
```
### 2、加锁
```
	update
	delete
	select ... lock in share mode;
	select ... for update;
```
### 3、意向锁 Intention Locks
```
	为了提高加表级锁锁效率，快速判断出当前表中是否有行锁的存在就会在表上添加一个标志位，作为是否有行锁的标记。
	这个标志位就是意向锁。
	意向锁阻塞的是表级锁。lock table t2 read|write
```
### 4、记录锁
	根据主键等值查询时加锁加记录锁。
```
	-- 加记录共享锁
	select * from t1_simple where id = 1 lock in share mode;
	-- 加记录排它锁
	select * from t1_simple where id = 1 for update;
	准确的说是尝试加临键锁，然后退化成记录锁。
```
### 5、间隙锁
```
	锁定的是记录和记录之间的间隙，例如（1,3）、（4,10），一旦锁定，不允许向区间只内插入数据。

尝试加临键锁，如果查询条件没有命中任何记录，此时临键锁会退化成间隙锁。
```
```
--+---------+
| id  | pubtime |
+-----+---------+
|   1 |      10 |
|   3 |      10 |
|   6 |     100 |
|   8 |      20 |
|  10 |       1 |
| 100 |      20 |
| 101 |       2 |
+-----+---------+
select * from t1_simple where id = 4 for update;
id为4的记录不存在时加间隙锁（3,6），此时再插入id为4、5的记录会阻塞。
```

### 6、临键锁

```
	记录锁+间隙锁。左开右闭的区间。例如（1,3]、（3,10]

默认情况下，innodb使用next-key locks来锁定记录。会根据不同的情况进行退化。
当做范围查询时，命令一条以上的记录时会加临键锁。
select * from t1_simple where id < 3 for update;
加锁的范围：
	记录：1、3
	间隙：(1,3)，(负无穷,1)
如果查询条件没有命中记录，那么就会加全表的记录锁+间隙锁。
select * from t1_simple where id < 4 for update;
由于id为4的记录不存在。
```

### 7、根据辅助索引更新
```
	会在辅助索引上加间隙锁，根据辅助索引找到影响到的记录的id，在主索引上加记录锁。
	select * from t1_simple where pubtime=10 for update;
```
### 8、插入意向锁
```
	为了防止插入的数据冲突，在插入的数据未提交时会锁定新插入数据的id。
	A事务插入id为10的记录未提交时，B事务再插入id为10的记录时会阻塞。
```
---
```
番外篇：
用 <=>null会走索引吗？ 答：会

张真真：sql99里面有一个新的语法 可以通过，<=>这种符号，用于判断等于null. select * from table where a<=>null and b=2。

explain select * from t_multiple_index where a <=> null;
explain select * from t_multiple_index where a <=> null and b > 1;
```
## explain select * from t_multiple_index where a <=> null and b > 1 and c='a';
