---
title: 'js语法基础'
date: 2023-06-25
tags:
- 'js'
- 'css'
- 'h5'
categories:
- '技术'
---
## 目录
[[toc]]

## JavaScript

JavaScript 是一种广泛用于网页开发的脚本语言，也可用于构建服务器端应用程序。以下是一些 JavaScript 的基础语法：

1. 变量声明：使用 `var`、`let` 或 `const` 来声明变量。
   ```javascript
   var x = 10;
   let y = 20;
   const z = 30;
   ```

2. 数据类型：包括数字、字符串、布尔值、数组、对象等。
   ```javascript
   var num = 10;
   var str = 'Hello';
   var bool = true;
   var arr = [1, 2, 3];
   var obj = { key: 'value' };
   ```

3. 运算符：包括算术运算符、比较运算符、逻辑运算符等。
   ```javascript
   var sum = 10 + 5;
   var isGreater = 20 > 10;
   var isValid = true && false;
   ```

4. 条件语句：使用 `if...else`、`switch` 来进行条件判断。
   ```javascript
   if (num > 0) {
     console.log('正数');
   } else {
     console.log('负数或零');
   }
   ```

5. 循环语句：使用 `for`、`while`、`do...while` 来进行循环操作。
   ```javascript
   for (var i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

6. 函数：使用 `function` 关键字定义函数。
   ```javascript
   function greet(name) {
     console.log('Hello, ' + name + '!');
   }
   greet('Alice');
   ```

7. 对象：使用对象字面量 `{}` 或构造函数来创建对象。
   ```javascript
   var person = { name: 'Alice', age: 30 };
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   var alice = new Person('Alice', 30);
   ```

这些是 JavaScript 的基础语法，掌握这些语法将有助于你开始编写简单的 JavaScript 程序。