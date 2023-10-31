---
title: 'dotnet 安装 sdk '
date: 2023-06-25
tags:
- 'dotnet 安装 sdk'
- 'C#'
categories:
- 'C#'
---

## 目录
[[toc]]

## dotnet 安装 sdk   

["dotnet 下载官网"](https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-centos)

## CentOS Linux 7
安装 .NET 之前，请运行以下命令，将 Microsoft 包签名密钥添加到受信任密钥列表，并添加 Microsoft 包存储库。 打开终端并运行以下命令：

``` Bash
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
```
## 安装 SDK
.NET SDK 使你可以通过 .NET 开发应用。 如果安装 .NET SDK，则无需安装相应的运行时。 若要安装 .NET SDK，请运行以下命令：

``` Bash
sudo yum install dotnet-sdk-7.0
```
## 示例
安装 ASP.NET Core 7.0 运行时：aspnetcore-runtime-7.0   
安装 .NET Core 2.1 运行时：dotnet-runtime-2.1   
安装 .NET 5 SDK：dotnet-sdk-5.0   
安装 .NET Core 3.1 SDK：dotnet-sdk-3.1   



## 安装运行时
[下载官网](https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-rhel#supported-distributions)                  

通过 ASP.NET Core 运行时，可以运行使用 .NET 开发且未提供运行时的应用。 以下命令将安装 ASP.NET Core 运行时，这是与 .NET 最兼容的运行时。 在终端中，运行以下命令：

``` Bash
sudo dnf install aspnetcore-runtime-7.0
```
作为 ASP.NET Core 运行时的一种替代方法，你可以安装不包含 ASP.NET Core 支持的 .NET 运行时：将上一命令中的 aspnetcore-runtime-7.0 替换为 dotnet-runtime-7.0：
``` bash
sudo dnf install dotnet-runtime-7.0
```

