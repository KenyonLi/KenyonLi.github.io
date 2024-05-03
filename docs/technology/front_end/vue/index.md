---
title: 'vue语法基础'
date: 2023-06-25
tags:
- 'vue'
- 'css'
- 'h5'
categories:
- '技术'
---
## 目录
[[toc]]
## Vue 
::: tip Vue
> 建设中....
:::


## 预习：ts环境搭建
1、 资源  
https://www.typescriptlang.org

在线调试  选择“`Playground`”

2、安装`ts`
``` bash
npm i typescript -g 
```

3、配置文件 

``` bash
tsc --init
```
4、生成 package.json
``` bash
npm init
```

5、工程化
安装相关工具： webpack,webpack-cli, webpack-dev-server
``` bash
npm i webpack webpack-cli webpack-dev-server ts-loader typescript html-webpack-plugin 
```

Vue.js 是一种流行的 JavaScript 框架，用于构建用户界面和单页面应用程序。以下是一些 Vue.js 的基本语法：

1. 插值：使用双大括号 `{{ }}` 将数据绑定到 HTML 中。
   ```html
   <span>{{ message }}</span>
   ```

2. 指令：Vue 提供了一些内置指令，用于操作 DOM 元素。
   ```html
   <div v-if="isVisible">可见内容</div>
   ```

3. 事件处理：通过 `v-on` 指令来监听 DOM 事件。
   ```html
   <button v-on:click="handleClick">点击我</button>
   ```

4. 条件渲染：使用 `v-if` 指令根据条件渲染 DOM 元素。
   ```html
   <div v-if="isUserLoggedIn">用户已登录</div>
   ```

5. 列表渲染：使用 `v-for` 指令来遍历数组或对象。
   ```html
   <ul>
     <li v-for="item in items" :key="item.id">{{ item.name }}</li>
   </ul>
   ```

6. 计算属性：通过 `computed` 属性来定义计算属性。
   ```javascript
   computed: {
     fullName: function() {
       return this.firstName + ' ' + this.lastName;
     }
   }
   ```

7. 生命周期钩子：Vue 提供了一系列的生命周期钩子函数，用于在组件生命周期的不同阶段执行代码。
   ```javascript
   created() {
     console.log('组件创建完成');
   }
   ```

这只是 Vue.js 的一小部分基本语法，它还有很多其他功能和特性可供探索。