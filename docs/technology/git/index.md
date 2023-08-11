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