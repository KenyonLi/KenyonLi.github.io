---
title: 'ElasticSearch-分词器'
date: 2023-09-07
tags:
- 'dotnet core'
- 'C#'
- '中间件'
- 'ElasticSearch-分词器'
categories:
- 'C#'
---
## 目录

[[toc]]

# ElasticSearch-分词器

## 什么是分词器

将：一段文字拆分成为独立的词。

## ElasticSearch为什么要使用分词

### 直接全文本查询

### 模糊查询

### 分词器查询

## ElasticSearch分词器如何落地

条件

1、电商项目

2、Elasticsearch

3、NEST

步骤

```
1、然后创建电商项目
  vs2019创建项目

2、先下载Elasticsearch

下载地址：https://www.elastic.co/downloads/elasticsearch

3、然后启动Elasticsearch

通过cmd ./elasticsearch.bat

默认地址：http://localhost:9200/

4、然后在电商项目中通过Nuget引入NEST

或者通过dotnet add package NEST

文档地址：<https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/nest.html>

5、然后在电商项目中NEST连接Elasticsearch
6、添加商品数据。然后进行模糊查询
```

## ElasticSearch 如何根据片段查询出文档

需要对分词进行分析

条件

1、kibaba

2、Analyzer

步骤

1、先下载kibana。

2、然后配置kibana为utf-8

3、然后进入bin目录直接cmd启动

kibana.bat

4、打开kibana，直接进入开发者工具页面

5、然后通过分析器分析文本

```
GET products/_analyze
{
  "text": "<HTML>p6架构班TTEST11wqaaa"
}
```

即可得到被分词后的效果。默认使用是standard标准分析器实现

## ElasticSearch  Analyzer 分析器执行原理

条件

1、字符过滤器 char_filter

2、分词器 tokenizer

3、词单元过滤器 filter

流程直接走流程图即可

## ElasticSearch  如何指定字段进行分词

条件

1、kibana

2、Mapping

步骤

1、先通过kibana查询Index商品表对应Mapping映射

```
GET products/_mapping
```

2、然后查看映射关系，

发现string 都被默认转换成为了text文本。只有文本才能实现分词

ElasticSearch无法修改映射。需要重新创建索引。就是数据库

3、然后重新创建Index商品，然后指定映射。

```
PUT producs_0
{
	"mappings": {
        "properties": {
            "productTitle": {
            "type": "keyword"
            }
        }
	}
}
```

4、然后迁移数据

```
POST _reindex
{
  "source": {
    "index": "products"
  },
  "dest": {
    "index": "products_0"
  }
}
```

5、然后查询映射关系

```
GET products_0/_mapping
```

6、然后在客户端查询数据

## ElasticSearch  如何进行自定义分词

目的：是把大写换成小写。

条件

1、standard

2、settings

步骤

1、先创建商品数据库products_1

```
PUT mall_product_8
{
  "settings": {
    "analysis": {
      "analyzer": {
        "my_tony":{
            "type": "custom",
            "char_filter":  [ "html_strip"],
            "tokenizer":  "standard",
             "filter":[ "lowercase"]
        }
    }
  }},
  "mappings": {
			"properties": {
				"productTitle": {
					"type": "text",
					"analyzer": "my_tony"
				}
			}
	}
}
```

2、然后在数据库products_1中进行测试

```
GET product_1/_analyze
{
  "analyzer": "my_tony",
  "text": "<HTML>手机TTEST11wqaaa"
}
```

3、然后进行数据读写

## ElasticSearch  如何进行自定义分词扩展

目的：对汉语词语进行分词

条件

1、elasticsearch-analysis-ik

步骤

1、先进入到bin目录，然后安装elasticsearch-analysis-ik

elasticsearch-plugin.bat install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.10.1/elasticsearch-analysis-ik-7.10.1.zip

2、然后创建index数据库products_2

```
PUT products_2
{
	"mappings": {
			"properties": {
				"productTitle": {
					"analyzer": "ik_max_word",
                    "search_analyzer": "ik_smart"
				}
			}
	}
}
```

3、然后进行验证

```
GET mall_product_8/_analyze
{
  "analyzer": "ik_max_word",
  "text": "手机"
}
```

