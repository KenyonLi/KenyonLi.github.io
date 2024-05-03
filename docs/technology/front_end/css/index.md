---
title: 'CSS语法基础'
date: 2023-06-25
tags:
- 'html'
- 'css'
- 'h5'
categories:
- '技术'
---
## 目录
[[toc]]

## CSS语法基础
 
CSS（层叠样式表）用于定义网页的样式和布局。以下是一些 CSS 的基础语法：

1. 选择器：用于选择要应用样式的 HTML 元素。
   ```css
   p {
       color: blue;
   }
   ```

2. 属性和值：属性定义要修改的样式属性，值定义属性的值。
   ```css
   p {
       color: blue;
       font-size: 16px;
   }
   ```

3. 注释：使用 `/* */` 注释 CSS 代码。
   ```css
   /* 这是一个注释 */
   ```

4. 类选择器：用于选择具有特定类的元素。
   ```css
   .highlight {
       background-color: yellow;
   }
   ```

5. ID 选择器：用于选择具有特定 ID 的元素。
   ```css
   #header {
       font-size: 24px;
   }
   ```

6. 组合选择器：使用逗号将多个选择器组合在一起。
   ```css
   h1, h2, h3 {
       font-family: Arial, sans-serif;
   }
   ```

7. 子选择器：选择某个元素的直接子元素。
   ```css
   ul > li {
       list-style-type: square;
   }
   ```

8. 伪类和伪元素：用于指定元素的特殊状态或位置。
   ```css
   a:hover {
       color: red;
   }
   ```

9. 盒模型：控制元素的内边距、外边距、边框和内容区域。
   ```css
   .box {
       padding: 10px;
       margin: 20px;
       border: 1px solid black;
   }
   ```

这些是 CSS 的基础语法，掌握这些语法将有助于你开始编写样式表来美化网页。