---
title: 'dotnet core基础'
date: 2023-06-25
tags:
- 'dotnet core'
- 'C#'
categories:
- 'C#'
---


## 目录
[[toc]]
## 一、 EFCore数据库迁移命令

## dotnet 安装 CLI 

``` bash
dotnet tool install --global dotnet-ef --version 5.0
```

[EFCore数据库迁移命令](https://blog.csdn.net/az44yao/article/details/111399857)
::: tip 前言
 因为现在用.net core 开发新项目，过程中需要经常涉及到数据命令的迁移，今天分别整EFCore 的两种迁移数据库的方式 

>1 程序包管理器控制台 , Package Manager Console（PMC）

>>如果你用visual studio 开发建议使用PMC迁移方式，该方式是同时支持efcore和原先的ef 迁移的

>2 命令行工具 ,Command line interface (CLI)

>>该方式适用于跨平台开发的时候进行迁移数据库的，也就是可脱离visual studio，比如你用vs code，或直接打开cmd控制台进行操作
:::
### 下面先列出两种方式对比，然后再分用vs 和vscode分别详细说明
|迁移命令描述|CLI命令|PMC命令|
| :---    |:---  |:---  |
|创建迁移：migrationName为迁移名称     | dotnet ef migrations add migrationName  |add-migration migrationName|
|移除迁移（删除最近的一次迁移）         | dotnet ef migrations remove             |remove-migration           |
|应用所有的迁移（使迁移文件应用到数据库）| dotnet ef database update               |update-database            |
|指定版本进行迁移                      | dotnet ef database update migrationName |update-database migrationName |
|生成对应版本的脚本                    | dotnet ef migrations script             |script-migration            |
|查看迁移列表                          | dotnet ef migrations list               |                            |
|查看数据库上下文信息                   | dotnet ef dbcontext info                |                            |

## 1、 安装 donet tool 工具
::: tip LKN.EBusiness.EntityFrameworkCore 数据迁移
```
  dotnet tool install --global dotnet-ef
```
:::

## 2. 跨平台命令行工具 ,Command line interface (CLI)
``` bash
dotnet ef migrations add  生成一条迁移
dotnet ef migrations remove  删除最新一次迁移
dotnet ef  database  update 生成迁移到数据库，跟上面pmc命令类似 后面加指定的迁移作为参数可以进行版本的回滚
dotnet ef migrations script   也跟pmc类似  如果没有任何参数的话默认是生成所有sql脚本，
但是参数格式略有不同如下：dotnet ef migrations script migrationName1  migrationName2 ;
是像这样直接跟迁移名称的也就是生成migrationName1 到migrationName2 的sql脚本
```
 
 ## 二、EF 反向工程生成 Model
::: tip  依赖包引用
    Pomelo.EntityFrameworkCore.MySql
:::
``` 
1、反向所有表
   dotnet ef dbcontext  scaffold "Server=..;Port=3306;Database=...;Uid=root;Pwd=...;"  Pomelo.EntityFrameworkCore.MySql
2、反向指定一张表或多张表（--table a --table b ）
   dotnet ef dbcontext  scaffold "Server=..;Port=3306;Database=...;Uid=root;Pwd=...;"  Pomelo.EntityFrameworkCore.MySql --table 表名称
3、反向表名根实体类一样  --use-database-names
    dotnet ef dbcontext  scaffold "Server=..;Port=3306;Database=...;Uid=root;Pwd=...;"  Pomelo.EntityFrameworkCore.MySql --use-database-names
4、Dbcontext名称
    默认情况下，已搭建基架构的DbContext类名称将是后缀为Context的数据库名称。若要指定不同名称，请在PMC中使用-Context,在.Net Core CLI 中使用--context
5、目录和命名空间
   实体类和DbContext类将搭建到项目的根目录中，并使项目的默认命名空间。
   .NET CLI
    可使用--output-dir 指定在其中为类搭建基架的目录，并且可使用 --context-dir 将DbContext类搭建到与实体类型类的目录中：
    dotnet ef dbcontext scaffold "Server=..;Port=3306;Database=...;Uid=root;Pwd=...;" --context-dir Data --output-dir Models
6、默认情况下，命名空间将是根命名空加上项目根目录下任何子目录的名称。但是，从EFCore 5.0 开始，可使用 --namespace 覆盖所有输出类的命名空间。还可使用 --context-namespace 仅覆盖DbContext类的命名空间
    dotnet ef dbcontext scaffold "Server=..;Port=3306;Database=...;Uid=root;Pwd=...;"  --namespace your.namespace --context-namespace your.DbContext.Namespace    
```
 ## 三、EF 多表sql 查询
1、创建一个实体类，把需要关联的字段写在这个类，并在实体类上添加`[keyless]`特性，表示该类没有主键。
``` C# 
  [keyless]
  public class Test{
     public string  rolseName{get;set;}
     public string  ProjectName {get;set;}
     public string  neighborhoodName {get;set;}
     ....
  }
```
2、在EFDbcontent 上下文类中，添加 `DbSet<Test> Tests {get;set;}` 
``` C#
         public DbSet<Test> Tests { get; set; }
```
3、使用 EF 实现 多表关联sql 查询 实例

``` C# 
    1、创建数据库对象 EFDbContext db   EF中`$`不能省略
     var d = _dbContext.Tests.FromSqlInterpolated($@"select t1.`ProjectName`,t2.`rolseName`, t3.`neighborhoodName` from  `a` t1 
                        left  join   `b` t2 on t1.`pointCode` = t2.`pointCode`
                        left join `c` t3 on t3.`neighborhoodId` = t2.`neighborhoodId`");
```

## 数据迁移：实现Entity与数据库的映射
数据库迁移，即将程序中DbContenxt的实体类，映射到数据库中。具体而言就是根据DbContext中的实体类，在数据库中创建表、更改表结构等（即根据Entity,在数据库中设计表）。
迁移主要用到两个命令：Add-Migration xxx 和 Update-Database.可通过vs自带的Package Manage Console 工具执行这两个命令完成迁移。  
1、 Add-Migration xxx 命令：添加迁移，xxx为描述性单词。如果数据库还没有创建，则会创建一个迁移文件夹Migration,迁移文件夹中包含迁移类和快照类。   
每次执行迁移文件夹中包含则会生成一个迁移类和快照类，每次执行Add-Migration 都会生成一个迁移类，而快照类只有一个。  
迁移类的代码，就是对应创建数据库的代码（或者更新数据库的代码）。   
2、Update-Database 命令：这个命令会使用迁移代码，将其转成sql语句，然后执行到目标数据库。执行成功后，数据库中的表就会和DbContext中的Entity一一对应。如果更新了DbContext中Entity的设计，则再此执行Add-Migration 和 Update-Database即可，此时会另外生成迁移类，但快照只有一个。

3、通过vs2022 迁移数据库
``` bashe 
 Add-Migration InitialDB
 Update-Database InitialDB
```
