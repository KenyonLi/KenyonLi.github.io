import{_ as t,r as l,o as s,c as r,a as e,b as a,w as d,d as i,e as c}from"./app-c1c3c937.js";const u={},v=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),m={class:"table-of-contents"},o=c(`<h2 id="一、索引分类" tabindex="-1"><a class="header-anchor" href="#一、索引分类" aria-hidden="true">#</a> 一、索引分类</h2><div class="custom-container tip"><p class="custom-container-title">参考</p><blockquote><p><a href="/file/mysql/04.MySQL%E7%B4%A2%E5%BC%95%E7%AF%87.pdf">04.MySQL索引篇</a></p></blockquote></div><h3 id="_1-根据主次来分" tabindex="-1"><a class="header-anchor" href="#_1-根据主次来分" aria-hidden="true">#</a> 1）根据主次来分</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	主索引：主键创建的索引，只要是主键会自动创建索引。
	辅助索引：非主键字段上创建的索引
		唯一索引
		组合索引
		普通索引
		前缀索引，基于某个字段前面的几个字符创建的索引。基本上不用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-索引类型" tabindex="-1"><a class="header-anchor" href="#_2-索引类型" aria-hidden="true">#</a> 2）索引类型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	聚簇索引（聚集索引）：主键上的索引，InnoDB引擎。
	非聚簇索引（非聚集索引）：非主键字段上创建的索引。MyIsam引擎创建的索引。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、索引的数据结构" tabindex="-1"><a class="header-anchor" href="#二、索引的数据结构" aria-hidden="true">#</a> 二、索引的数据结构</h2><h3 id="_1、索引的应用场景" tabindex="-1"><a class="header-anchor" href="#_1、索引的应用场景" aria-hidden="true">#</a> 1、索引的应用场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	查询数据时会使用索引。
	第一种：等值查询
		select * from t where id = 1;
	第二种：范围查询
		select * from t where id &gt; 3 and id &lt; 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、索引使用的数据结构" tabindex="-1"><a class="header-anchor" href="#_2、索引使用的数据结构" aria-hidden="true">#</a> 2、索引使用的数据结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	1）hash
		key-value
		适合于在等值查询。不适合做范围查询。
		InnoDB中自适应hash索引。
	2）二叉查找树（二叉排序树）
		二叉树特点：每个节点最多有2个分叉，左子树和右子树数据顺序左小右大。
		问题：
			根节点的选取非常重要，如果运气不好这棵二叉树会退化成一个链表。
	3）平衡二叉查找树
		特点：最主要的特征是树的左右两个子树的层级最多相差1，如果左右子树的高度差大于1根节点会进行旋转，让左右子树达到一个平衡状态。
		问题：
			如果数据量很多，平衡二叉树的高度就会很高，从根节点遍历到叶子节点过程就会产生很多次磁盘IO，从而影响性能。
	4）B树
		多叉平衡树。
		每个节点上面有个分支，每个节点可以保存多个数据，节点中保存的最大的数据量= degree - 1
		问题：
			1）中间节点是保存数据的，造成一个节点中保存的数据量变少，导致b树的degree就会变小。
			2）做范围查询效率也不高。

	5）b+树
		B+树所有数据都存放在叶子节点，中间节点只保存key。叶子节点之间有双向指针形成一个双向链表。
		即适合做等值查询也适合做范围查询。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、myisam引擎的索引" tabindex="-1"><a class="header-anchor" href="#_3、myisam引擎的索引" aria-hidden="true">#</a> 3、myisam引擎的索引</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	主键索引和非主键索引相同，都是和数据分开存放。
	查询时根据索引找到对应的数据所在的地址，根据地址查询到对应的数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、innodb引擎" tabindex="-1"><a class="header-anchor" href="#_4、innodb引擎" aria-hidden="true">#</a> 4、InnoDB引擎</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	主键索引：聚簇索引，索引和数据是保存在一起的，所有的数据都是保存在B+tree的叶子节点中。
			如果在InnoDB中不创建主键，数据是无法存储的。InnoDB会自动生成一个隐藏列rowid，作为默认的主键。
			联合主键也是聚簇索引。

	辅助索引：非聚餐索引，索引对应的叶子节点中保存的是记录的id，根据辅助索引可以查询到对应的数据的id，
			然后再根据id查询主索引，最终找到对应的数据，需要有一个回表的过程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、组合索引" tabindex="-1"><a class="header-anchor" href="#_5、组合索引" aria-hidden="true">#</a> 5、组合索引</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	组合索引一定是辅助索引。
	组合索引：基于多个字段创建的索引。

	创建索引时，除主键索引之外，尽可能创建一个组合索引，把经常查询的字段放到组合索引中。不要在每个字段上都创建一个索引。使用索引时只能选择一个。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function b(h,_){const n=l("router-link");return s(),r("div",null,[v,e("nav",m,[e("ul",null,[e("li",null,[a(n,{to:"#目录"},{default:d(()=>[i("目录")]),_:1})]),e("li",null,[a(n,{to:"#一、索引分类"},{default:d(()=>[i("一、索引分类")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#_1-根据主次来分"},{default:d(()=>[i("1）根据主次来分")]),_:1})]),e("li",null,[a(n,{to:"#_2-索引类型"},{default:d(()=>[i("2）索引类型")]),_:1})])])]),e("li",null,[a(n,{to:"#二、索引的数据结构"},{default:d(()=>[i("二、索引的数据结构")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#_1、索引的应用场景"},{default:d(()=>[i("1、索引的应用场景")]),_:1})]),e("li",null,[a(n,{to:"#_2、索引使用的数据结构"},{default:d(()=>[i("2、索引使用的数据结构")]),_:1})]),e("li",null,[a(n,{to:"#_3、myisam引擎的索引"},{default:d(()=>[i("3、myisam引擎的索引")]),_:1})]),e("li",null,[a(n,{to:"#_4、innodb引擎"},{default:d(()=>[i("4、InnoDB引擎")]),_:1})]),e("li",null,[a(n,{to:"#_5、组合索引"},{default:d(()=>[i("5、组合索引")]),_:1})])])])])]),o])}const f=t(u,[["render",b],["__file","04mysql_info.html.vue"]]);export{f as default};
