---
title: 'git 常用命令'
date: 2023-08-11
tags:
- 'git'
categories:
- '代码管理工具'
---

## 目录
[[toc]]

## git 常用命令

:::tip 清空git缓存
``` bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```
:::

::: tip GitHub创建命令
``` bash
echo "# 你的介绍" >> README.md

git init

git add .

git commit -m "提交日志"

git remote add origin 仓库地址

git push -u origin master
```
:::


## git和github新手安装使用教程（三步入门）
 [参考](https://www.cnblogs.com/ttjsndx/p/7943444.html)
 
 

 

### 一：初始化本地仓库git

> 1.下载一个git吧   [下载链接](https://gitforwindows.org/) ，根据提示安装git

> 2.新建一个文件夹repo作为本地仓库，右键，选择Git Init here。注意：有的版本没有`git init here` ,则选择git bash here ,在打开的页面中输入git init

>> 第一步的结果就是：（1）在安装的时候自动配置了git运行环境。（2）通过git init 在指定文件夹生成了隐藏的 .git 文件夹。用于保存本地仓库版本的相关信息（版本信息，仓库信息，git命令编译规则等）

### 二：将自己的电脑与指定github账户关联

>1.创建一个github账户吧  [创建地址](https://github.com/)  

>2.在本机上设置你的github的邮箱和用户名` 

```bash
git config --global user.name "用户名"
git config --global user.email "邮箱"
```
>3.生成本机的`SSH key`
``` bash
ssh-keygen -t rsa -C "邮箱"
```
::: tip  提示
 >按三次回车键，最后会生成ssh key值，并告诉你key值存放的文件的位置，找到该文件并复制ssh key
:::

> 4.打开你的github主页。找到Settings,选择SSH and GPG keys ，再选择new SSH key，title 随意填，key值就是刚刚生成的本机 SSH KEY

 ![Alt text](/images/git/git_0001image.png)
 ![Alt text](/images/git/git_0002image.png)


>第二步设置了本地git与github之间通信的密码，github账户只接受合法的SSH KEY 对其下项目进行修改。  

### 三：将自己的仓库与github上的某个项目关联

> 1.打开github主页，选择 new repository,打开新建项目页面。 

>>　　   在新建项目页面，输入项目名称，点击下一步，复制生成项目后的项目SSH  

> 2.打开本地仓库的git bash页面。输入  
``` bash
git remote add origin "项目SSH"
## 删除 现有远程的git地址 
git remote remove origin
```

 > 3.先同步github上master分支的代码，再指定上传的默认分支  
``` bash
git pull origin master
git push -u origin master
```

>>　　第三步设置了本地仓库对应的是github账户上的哪一个项目，并且设置了代码上传的分支。注意github上的项目名称与本地仓库名称同级，也就是说，从github上同步代码时，只会更新项目名称下的各个文件到本地仓库中。  

>>以上就是安装配置github的全部过程，以下为github最常用的命令

| 编号 |	命令 | 备注 |
| :----: | :--    |:--                                                        |
| 1 |git status	           |查看仓库的改变情况，会有相关的提示操作出现                              |
| 2	|git add -A	           |直接添加所有改动的文件                                                |
| 3	|git commit -m "note"  |确认生成本地的版本，note是 版本特点说明                                |
| 4	|git push	           |将改动上传到github，若没有指定分支，则需要使用git push origin master    |
| 5	|git log               |查看版本更新情况                                                      |
| 6	|git reset -hard x	   |回退到某个本地版本,x为git log中出现的hash值的前七位                     |
| 7	|git clean -xf	       |清除所有的未提交文件                                                   |

 ## git fetch和git pull的区别

[git fetch和git pull的区别](https://www.jianshu.com/p/c89eb2a6b917)
### 1、简单概括
>而git pull 则是将远程主机的最新内容拉下来后直接合并，即：git pull = git fetch + git merge，这样可能会产生冲突，需要手动解决。
>下面我们来详细了解一下git fetch和git pull的用法。 

![Alt text](/images/git/git_0003image.png)
>## 2、分支的概念
在介绍两种方法之前，我们需要先了解一下分支的概念：
分支是用来标记特定代码的提交，每一个分支通过SHA1sum值来标识，所以对分支的操作是轻量级的，你改变的仅仅是SHA1sum值。

如下图所示，当前有2个分支，A,C,E属于master分支，而A,B，D,F属于dev分支。
```bash
 A----C----E（master）
  \
   B---D---F(dev)
```
它们的head指针分别指向E和F，对上述做如下操作：
```bash
git checkout master  //选择or切换到master分支
git merge dev        //将dev分支合并到当前分支(master)中
```
合并完成之后：
```bash
A---C---E---G(master)
 \         /
  B---D---F（dev）
```
现在ABCDEFG属于master，G是一次合并后的结果，是将E和Ｆ的代码合并后的结果，可能会出现冲突。而ABDF依然属于dev分支。可以继续在dev的分支上进行开发:
```bash
A---C---E---G---H(master)
 \         /
  B---D---F---I（dev）
```
>分支（branch）的基本操作：
```bash
git branch //查看本地所有分支 

git branch -r //查看远程所有分支

git branch -a //查看本地和远程的所有分支

git branch <branchname> //新建分支

git branch -d <branchname> //删除本地分支

git branch -d -r <branchname> //删除远程分支，删除后还需推送到服务器
git push origin:<branchname>  //删除后推送至服务器

git branch -m <oldbranch> <newbranch> //重命名本地分支
/**
*重命名远程分支：
*1、删除远程待修改分支
*2、push本地新分支到远程服务器
*/

//git中一些选项解释:

-d
--delete：删除

-D
--delete --force的快捷键

-f
--force：强制

-m
--move：移动或重命名

-M
--move --force的快捷键

-r
--remote：远程

-a
--all：所有
```
3、git fetch 用法
git fetch 命令：
```bash
$ git fetch <远程主机名> //这个命令将某个远程主机的更新全部取回本地
```
如果只想取回特定分支的更新，可以指定分支名：
```
$ git fetch <远程主机名> <分支名> //注意之间有空格
```
最常见的命令如取回origin 主机的master 分支：
```
$ git fetch origin master
```
取回更新后，会返回一个FETCH_HEAD ，指的是某个branch在服务器上的最新状态，我们可以在本地通过它查看刚取回的更新信息：
```
$ git log -p FETCH_HEAD
```
 

可以看到返回的信息包括更新的文件名，更新的作者和时间，以及更新的代码（19行红色[删除]和绿色[新增]部分）。
我们可以通过这些信息来判断是否产生冲突，以确定是否将更新merge到当前分支。

4、git pull用法
前面提到，git pull 的过程可以理解为：
```
git fetch origin master //从远程主机的master分支拉取最新内容 
git merge FETCH_HEAD    //将拉取下来的最新内容合并到当前所在的分支中
```
即将远程主机的某个分支的更新取回，并与本地指定的分支合并，完整格式可表示为：
```
$ git pull <远程主机名> <远程分支名>:<本地分支名>
```
如果远程分支是与当前分支合并，则冒号后面的部分可以省略：

```
$ git pull origin next
```

### git下载指定分支代码到本地

任务一：下载地址为git@e.coding.net:lkn-microservices/LKN-MicroServices.git；分支名为dev
```bash
$ git clone -b 分支名 网址.git 
$ git clone -b lesson-2 git@e.coding.net:lkn-microservices/LKN-MicroServices.git
```

### git 合并分支
[合并改动 参考](https://www.git-tower.com/learn/git/ebook/cn/command-line/branching-merging/merging)

#### 整合分支-不是简单提交  
在开始准备合并时，你不必（当然也不能）把那些要整合的改动打包为一个单独的提交。相反，你要告诉git,你想要和那个分支（branch）进行整合，git会从那个分支中判断出哪些提交还没有被整合到你当前工作的HEAD分支中。只有这些提交才能被整合进来。

此外，你不需要去考虑这些改动最终会到了哪里，整合的目标永远是你的当前的 HEAD 分支，也就是你的工作副本
![Alt text](/images/git/gitindex_001image.png)
在 Git 中，进行合并是非常简单方便的。它只需要两个步骤：

（1） 切换到那个需要接收改动的分支上。
（2） 执行 “git merge” 命令，并且在后面加上那个将要合并进来的分支的名称。
来让我们把 “contact-form” 分支的改动合并到 “master” 中去：
```bash
$ git checkout master
$ git merge contact-form
```


## git创建分支错误提示 fatal: Not a valid object name: 'master'.
[git创建分支错误提示](https://blog.csdn.net/ion_L/article/details/82686231)
``` bash
$ git branch 微服务注册
fatal: not a valid object name: 'master'
```
>究其原因，是由于刚创建的git仓库默认的master分支要在第一次有效的commit之后才会真正建立，否则就像你声明了个对象但没初始化一样。