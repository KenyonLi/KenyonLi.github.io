import{_ as s,r as l,o as d,c as r,a as e,b as n,w as t,d as a,e as c}from"./app-c1c3c937.js";const u={},v=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),a(" 目录")],-1),o={class:"table-of-contents"},p=c(`<h1 id="elasticsearch-分词器" tabindex="-1"><a class="header-anchor" href="#elasticsearch-分词器" aria-hidden="true">#</a> ElasticSearch-分词器</h1><h2 id="什么是分词器" tabindex="-1"><a class="header-anchor" href="#什么是分词器" aria-hidden="true">#</a> 什么是分词器</h2><p>将：一段文字拆分成为独立的词。</p><h2 id="elasticsearch为什么要使用分词" tabindex="-1"><a class="header-anchor" href="#elasticsearch为什么要使用分词" aria-hidden="true">#</a> ElasticSearch为什么要使用分词</h2><h3 id="直接全文本查询" tabindex="-1"><a class="header-anchor" href="#直接全文本查询" aria-hidden="true">#</a> 直接全文本查询</h3><h3 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> 模糊查询</h3><h3 id="分词器查询" tabindex="-1"><a class="header-anchor" href="#分词器查询" aria-hidden="true">#</a> 分词器查询</h3><h2 id="elasticsearch分词器如何落地" tabindex="-1"><a class="header-anchor" href="#elasticsearch分词器如何落地" aria-hidden="true">#</a> ElasticSearch分词器如何落地</h2><p>条件</p><p>1、电商项目</p><p>2、Elasticsearch</p><p>3、NEST</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、然后创建电商项目
  vs2019创建项目

2、先下载Elasticsearch

下载地址：https://www.elastic.co/downloads/elasticsearch

3、然后启动Elasticsearch

通过cmd ./elasticsearch.bat

默认地址：http://localhost:9200/

4、然后在电商项目中通过Nuget引入NEST

或者通过dotnet add package NEST

文档地址：&lt;https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/nest.html&gt;

5、然后在电商项目中NEST连接Elasticsearch
6、添加商品数据。然后进行模糊查询
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elasticsearch-如何根据片段查询出文档" tabindex="-1"><a class="header-anchor" href="#elasticsearch-如何根据片段查询出文档" aria-hidden="true">#</a> ElasticSearch 如何根据片段查询出文档</h2><p>需要对分词进行分析</p><p>条件</p><p>1、kibaba</p><p>2、Analyzer</p><p>步骤</p><p>1、先下载kibana。</p><p>2、然后配置kibana为utf-8</p><p>3、然后进入bin目录直接cmd启动</p><p>kibana.bat</p><p>4、打开kibana，直接进入开发者工具页面</p><p>5、然后通过分析器分析文本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET products/_analyze
{
  &quot;text&quot;: &quot;&lt;HTML&gt;p6架构班TTEST11wqaaa&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即可得到被分词后的效果。默认使用是standard标准分析器实现</p><h2 id="elasticsearch-analyzer-分析器执行原理" tabindex="-1"><a class="header-anchor" href="#elasticsearch-analyzer-分析器执行原理" aria-hidden="true">#</a> ElasticSearch Analyzer 分析器执行原理</h2><p>条件</p><p>1、字符过滤器 char_filter</p><p>2、分词器 tokenizer</p><p>3、词单元过滤器 filter</p><p>流程直接走流程图即可</p><h2 id="elasticsearch-如何指定字段进行分词" tabindex="-1"><a class="header-anchor" href="#elasticsearch-如何指定字段进行分词" aria-hidden="true">#</a> ElasticSearch 如何指定字段进行分词</h2><p>条件</p><p>1、kibana</p><p>2、Mapping</p><p>步骤</p><p>1、先通过kibana查询Index商品表对应Mapping映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET products/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、然后查看映射关系，</p><p>发现string 都被默认转换成为了text文本。只有文本才能实现分词</p><p>ElasticSearch无法修改映射。需要重新创建索引。就是数据库</p><p>3、然后重新创建Index商品，然后指定映射。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT producs_0
{
	&quot;mappings&quot;: {
        &quot;properties&quot;: {
            &quot;productTitle&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
            }
        }
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、然后迁移数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST _reindex
{
  &quot;source&quot;: {
    &quot;index&quot;: &quot;products&quot;
  },
  &quot;dest&quot;: {
    &quot;index&quot;: &quot;products_0&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、然后查询映射关系</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET products_0/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6、然后在客户端查询数据</p><h2 id="elasticsearch-如何进行自定义分词" tabindex="-1"><a class="header-anchor" href="#elasticsearch-如何进行自定义分词" aria-hidden="true">#</a> ElasticSearch 如何进行自定义分词</h2><p>目的：是把大写换成小写。</p><p>条件</p><p>1、standard</p><p>2、settings</p><p>步骤</p><p>1、先创建商品数据库products_1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT mall_product_8
{
  &quot;settings&quot;: {
    &quot;analysis&quot;: {
      &quot;analyzer&quot;: {
        &quot;my_tony&quot;:{
            &quot;type&quot;: &quot;custom&quot;,
            &quot;char_filter&quot;:  [ &quot;html_strip&quot;],
            &quot;tokenizer&quot;:  &quot;standard&quot;,
             &quot;filter&quot;:[ &quot;lowercase&quot;]
        }
    }
  }},
  &quot;mappings&quot;: {
			&quot;properties&quot;: {
				&quot;productTitle&quot;: {
					&quot;type&quot;: &quot;text&quot;,
					&quot;analyzer&quot;: &quot;my_tony&quot;
				}
			}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后在数据库products_1中进行测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET product_1/_analyze
{
  &quot;analyzer&quot;: &quot;my_tony&quot;,
  &quot;text&quot;: &quot;&lt;HTML&gt;手机TTEST11wqaaa&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后进行数据读写</p><h2 id="elasticsearch-如何进行自定义分词扩展" tabindex="-1"><a class="header-anchor" href="#elasticsearch-如何进行自定义分词扩展" aria-hidden="true">#</a> ElasticSearch 如何进行自定义分词扩展</h2><p>目的：对汉语词语进行分词</p><p>条件</p><p>1、elasticsearch-analysis-ik</p><p>步骤</p><p>1、先进入到bin目录，然后安装elasticsearch-analysis-ik</p><p>elasticsearch-plugin.bat install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.10.1/elasticsearch-analysis-ik-7.10.1.zip</p><p>2、然后创建index数据库products_2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT products_2
{
	&quot;mappings&quot;: {
			&quot;properties&quot;: {
				&quot;productTitle&quot;: {
					&quot;analyzer&quot;: &quot;ik_max_word&quot;,
                    &quot;search_analyzer&quot;: &quot;ik_smart&quot;
				}
			}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后进行验证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET mall_product_8/_analyze
{
  &quot;analyzer&quot;: &quot;ik_max_word&quot;,
  &quot;text&quot;: &quot;手机&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73);function h(m,b){const i=l("router-link");return d(),r("div",null,[v,e("nav",o,[e("ul",null,[e("li",null,[n(i,{to:"#目录"},{default:t(()=>[a("目录")]),_:1})]),e("li",null,[n(i,{to:"#什么是分词器"},{default:t(()=>[a("什么是分词器")]),_:1})]),e("li",null,[n(i,{to:"#elasticsearch为什么要使用分词"},{default:t(()=>[a("ElasticSearch为什么要使用分词")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#直接全文本查询"},{default:t(()=>[a("直接全文本查询")]),_:1})]),e("li",null,[n(i,{to:"#模糊查询"},{default:t(()=>[a("模糊查询")]),_:1})]),e("li",null,[n(i,{to:"#分词器查询"},{default:t(()=>[a("分词器查询")]),_:1})])])]),e("li",null,[n(i,{to:"#elasticsearch分词器如何落地"},{default:t(()=>[a("ElasticSearch分词器如何落地")]),_:1})]),e("li",null,[n(i,{to:"#elasticsearch-如何根据片段查询出文档"},{default:t(()=>[a("ElasticSearch 如何根据片段查询出文档")]),_:1})]),e("li",null,[n(i,{to:"#elasticsearch-analyzer-分析器执行原理"},{default:t(()=>[a("ElasticSearch Analyzer 分析器执行原理")]),_:1})]),e("li",null,[n(i,{to:"#elasticsearch-如何指定字段进行分词"},{default:t(()=>[a("ElasticSearch 如何指定字段进行分词")]),_:1})]),e("li",null,[n(i,{to:"#elasticsearch-如何进行自定义分词"},{default:t(()=>[a("ElasticSearch 如何进行自定义分词")]),_:1})]),e("li",null,[n(i,{to:"#elasticsearch-如何进行自定义分词扩展"},{default:t(()=>[a("ElasticSearch 如何进行自定义分词扩展")]),_:1})])])]),p])}const x=s(u,[["render",h],["__file","elasticsearch002.html.vue"]]);export{x as default};
