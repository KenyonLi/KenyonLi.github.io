import{_ as a,r as s,o as t,c as r,a as e,b as l,w as d,d as n,e as c}from"./app-c1c3c937.js";const u={},v=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),o={class:"table-of-contents"},m=c(`<h2 id="一、innodb的锁" tabindex="-1"><a class="header-anchor" href="#一、innodb的锁" aria-hidden="true">#</a> <code>一</code>、InnoDB的锁</h2><div class="custom-container tip"><p class="custom-container-title">参考</p><blockquote><p><a href="/file/mysql/05.MySQL%E9%94%81%E7%AF%87.pdf">05.MySQL锁篇</a></p></blockquote></div><h3 id="_1、分类" tabindex="-1"><a class="header-anchor" href="#_1、分类" aria-hidden="true">#</a> 1、分类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   锁的位置分类：
   	记录锁
   	间隙锁
   	临键锁
   锁的功能：
   	共享锁（S）
   	排它锁（X）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、加锁" tabindex="-1"><a class="header-anchor" href="#_2、加锁" aria-hidden="true">#</a> 2、加锁</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	update
	delete
	select ... lock in share mode;
	select ... for update;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、意向锁-intention-locks" tabindex="-1"><a class="header-anchor" href="#_3、意向锁-intention-locks" aria-hidden="true">#</a> 3、意向锁 Intention Locks</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	为了提高加表级锁锁效率，快速判断出当前表中是否有行锁的存在就会在表上添加一个标志位，作为是否有行锁的标记。
	这个标志位就是意向锁。
	意向锁阻塞的是表级锁。lock table t2 read|write
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、记录锁" tabindex="-1"><a class="header-anchor" href="#_4、记录锁" aria-hidden="true">#</a> 4、记录锁</h3><pre><code>根据主键等值查询时加锁加记录锁。
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	-- 加记录共享锁
	select * from t1_simple where id = 1 lock in share mode;
	-- 加记录排它锁
	select * from t1_simple where id = 1 for update;
	准确的说是尝试加临键锁，然后退化成记录锁。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、间隙锁" tabindex="-1"><a class="header-anchor" href="#_5、间隙锁" aria-hidden="true">#</a> 5、间隙锁</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	锁定的是记录和记录之间的间隙，例如（1,3）、（4,10），一旦锁定，不允许向区间只内插入数据。

尝试加临键锁，如果查询条件没有命中任何记录，此时临键锁会退化成间隙锁。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--+---------+
| id  | pubtime |
+-----+---------+
|   1 |      10 |
|   3 |      10 |
|   6 |     100 |
|   8 |      20 |
|  10 |       1 |
| 100 |      20 |
| 101 |       2 |
+-----+---------+
select * from t1_simple where id = 4 for update;
id为4的记录不存在时加间隙锁（3,6），此时再插入id为4、5的记录会阻塞。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、临键锁" tabindex="-1"><a class="header-anchor" href="#_6、临键锁" aria-hidden="true">#</a> 6、临键锁</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	记录锁+间隙锁。左开右闭的区间。例如（1,3]、（3,10]

默认情况下，innodb使用next-key locks来锁定记录。会根据不同的情况进行退化。
当做范围查询时，命令一条以上的记录时会加临键锁。
select * from t1_simple where id &lt; 3 for update;
加锁的范围：
	记录：1、3
	间隙：(1,3)，(负无穷,1)
如果查询条件没有命中记录，那么就会加全表的记录锁+间隙锁。
select * from t1_simple where id &lt; 4 for update;
由于id为4的记录不存在。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、根据辅助索引更新" tabindex="-1"><a class="header-anchor" href="#_7、根据辅助索引更新" aria-hidden="true">#</a> 7、根据辅助索引更新</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	会在辅助索引上加间隙锁，根据辅助索引找到影响到的记录的id，在主索引上加记录锁。
	select * from t1_simple where pubtime=10 for update;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、插入意向锁" tabindex="-1"><a class="header-anchor" href="#_8、插入意向锁" aria-hidden="true">#</a> 8、插入意向锁</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	为了防止插入的数据冲突，在插入的数据未提交时会锁定新插入数据的id。
	A事务插入id为10的记录未提交时，B事务再插入id为10的记录时会阻塞。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>番外篇：
用 &lt;=&gt;null会走索引吗？ 答：会

张真真：sql99里面有一个新的语法 可以通过，&lt;=&gt;这种符号，用于判断等于null. select * from table where a&lt;=&gt;null and b=2。

explain select * from t_multiple_index where a &lt;=&gt; null;
explain select * from t_multiple_index where a &lt;=&gt; null and b &gt; 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="explain-select-from-t-multiple-index-where-a-null-and-b-1-and-c-a" tabindex="-1"><a class="header-anchor" href="#explain-select-from-t-multiple-index-where-a-null-and-b-1-and-c-a" aria-hidden="true">#</a> explain select * from t_multiple_index where a &lt;=&gt; null and b &gt; 1 and c=&#39;a&#39;;</h2>`,23);function b(h,_){const i=s("router-link");return t(),r("div",null,[v,e("nav",o,[e("ul",null,[e("li",null,[l(i,{to:"#目录"},{default:d(()=>[n("目录")]),_:1})]),e("li",null,[l(i,{to:"#一、innodb的锁"},{default:d(()=>[n("一、InnoDB的锁")]),_:1}),e("ul",null,[e("li",null,[l(i,{to:"#_1、分类"},{default:d(()=>[n("1、分类")]),_:1})]),e("li",null,[l(i,{to:"#_2、加锁"},{default:d(()=>[n("2、加锁")]),_:1})]),e("li",null,[l(i,{to:"#_3、意向锁-intention-locks"},{default:d(()=>[n("3、意向锁 Intention Locks")]),_:1})]),e("li",null,[l(i,{to:"#_4、记录锁"},{default:d(()=>[n("4、记录锁")]),_:1})]),e("li",null,[l(i,{to:"#_5、间隙锁"},{default:d(()=>[n("5、间隙锁")]),_:1})]),e("li",null,[l(i,{to:"#_6、临键锁"},{default:d(()=>[n("6、临键锁")]),_:1})]),e("li",null,[l(i,{to:"#_7、根据辅助索引更新"},{default:d(()=>[n("7、根据辅助索引更新")]),_:1})]),e("li",null,[l(i,{to:"#_8、插入意向锁"},{default:d(()=>[n("8、插入意向锁")]),_:1})])])]),e("li",null,[l(i,{to:"#explain-select-from-t-multiple-index-where-a-null-and-b-1-and-c-a"},{default:d(()=>[n("explain select * from t_multiple_index where a <=> null and b > 1 and c='a';")]),_:1})])])]),m])}const p=a(u,[["render",b],["__file","05InnoDB_lock.html.vue"]]);export{p as default};
