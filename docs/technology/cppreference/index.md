---
title: 'C/C++基础'
date: 2023-06-23 12:44:15
tags:
- '面向对象'
- 'c/c++'
categories:
- '技术'
#permalinkPattern: :year/:month/:day/:slug.html # 2023/06/23/index.html
---
## 目录

[[toc]]
 
 ## 什么“大端”模式和“小端”模式
 [参考地址](https://blog.csdn.net/yimuta9538/article/details/131108000)   

计算机中的大端模式和小端模式是数据存储方式的两种不同表现形式。它们分别用于描述字节在内存中的排列方式，即如何存储多字节数据类型（例如整数、浮点数等）的字节序列。本文将详细介绍大端模式和小端模式的概念、区别、应用及其相关知识。

## 一、概念
### 1.1 大端模式  
大端模式（Big-Endian）又称为网络字节序，指的是数据的高位字节存储在低地址处，而数据的低位字节存储在高地址处。这与我们平常的阅读顺序相同，先看到的是高位，后看到的是低位，因此被称为“大端”。  
例如，对于一个四字节整数0x12345678,在大端模式下，它的高字节是0x12,低位字节是0x78,它们在内存中的排列方式如下

+-----+-----+------+-----+
|12   |  34 |   56 |  78 |
+-----+-----+------+-----+
addr3  addr2  addr1 addr0


### 1.2 小端模式   
小端模式（Little-Endian）指的是数据的低位字节存储在低地址处，而数据的高位字节存储在高地址处。这与我们平常的阅读顺序相反，先看到的是低位，后看到的是高位，因此被称为“小端”。
例如,对于一个四字节整数0x12345678,在小端模式下，它的高字节是0x78,低字节是0x12,它们在内存中的排列方式如下图所示：

+-----+-----+------+-----+
| 78  |  56 |  34  | 12  |
+-----+-----+------+-----+
addr0  addr2  addr3 addr4

## 二、区别  
大端模式和小端模式的区别在于多字节数据类型在内存中的排列方式不同。具体而言，它们的区别主要表现在以下两个方面：
 ### 2.1 内存存储顺序
 在大端模式下，多字节数据类型的高位字节存储在低地址处，低位字节存储在高地址处；而在小端模式下，则恰好相反，多字节数据类型的低位处，高位字节存储在高地址处。
 ### 2.2 网络传输顺序  
 在网络传输数据时，通常需要将数据转换成一定的字节序（即网络字节序），以确保在不同机器之间的传输中不会出现问题。因此，大多数协议规定了网络字节序采用大端模式。
## 三、应用
 大端模式和小端模式的应用主要小孩以下几个方面：
 ### 3.1 硬件架构  
 不同的硬件架构（如：x86,ARM等）可能采用不同的字节方式。例如，Inte x86系统列处理器采用的是小端模式，而MIPS、PowerPC等处理器则采用的是大端模式。因此，在编写跨平台程序时，需要注意这些
差异，并进行相应的处理。
 ### 3.2 文件格式  
 在文件格式中，常常需要使用待定的字节序来表示数据。例如，BMP图像文件中，像素数据通常采用小端模式存储；而WAV音频文件中，样本数据则用大端式中，样本数据则采用大端模式存储。  
 ### 3.3 网络传输  
 在网络传输数据时，通常需要将数据转换成网络字节序。例如，在TCP/IP协议中，采用的是端模式作为网络字节序。因此，在编写网络程序时，需要进行字节序转换以确保正确地传输数据。
 ### 3.4 数据库存储   
 在数据库中，常常需要对多字节数据类型进行排序和比较。由于不同的字节方式会影响排序结果，因此在数据库设计中需要考虑字节序问题。  

## 四字节序转换  
在实际编程中，需要将不同字节序的数据进行转换。常见的字节序换函数包括：
### 4.1 htons和ntohs  
htons(host to network short) 和 ntohs(network to host short) 用于将16位整数从主机字节序转换成网络字节或从网络字节序转换成主机字节序。
``` C
#include <arpa/inet.h>
uint16_t htons(uint16_t hostshort);
uint16_t ntohs(uint16_t netshort);
```
### 4.2 htonl(host to network long) 和 ntohl(network to host long) 用于将32位整数从主机字位序转换成网络字节序或从网络字节序转换成主机字节序。
``` C
#include <arap/inet.h>
uint32_t htonl(uint32_t hostlong);
uint32_t ntohl(uint32_t netlong);
```
这些函数可以在不同平台上保证正确的字节序转换，并且在大数操作系统上都是已经实现。

## 五 结论   
本文介绍了计算机中的大端模式和小端模式，它们分别用于描述多字节数据类型在内存中的排列方式。大端模式和小端模式的区别在于字节的存储顺序不同，前者高位字节在低地址处，后者高位字节在高地址处。在实际应用中，大端模式和小端模式的应用主要涉及硬件架构、文件格式、网络传输和数据库存储等方面。为了确保数据在不同平台之间正确地传输和处理，需要进行字节序转换。常见的字节序转换函数包括htons、ntohs、htonl和ntohl等。

