---
title: 'git'
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