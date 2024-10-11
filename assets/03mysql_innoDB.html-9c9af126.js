import{_ as l,r as s,o as t,c,a as e,b as d,w as a,d as i,e as r}from"./app-c1c3c937.js";const v={},u=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),o={class:"table-of-contents"},m=r(`<h2 id="一、innodb锁篇" tabindex="-1"><a class="header-anchor" href="#一、innodb锁篇" aria-hidden="true">#</a> 一、InnoDB锁篇</h2><h3 id="_1、什么是lbcc" tabindex="-1"><a class="header-anchor" href="#_1、什么是lbcc" aria-hidden="true">#</a> 1、什么是lbcc</h3><div class="custom-container tip"><p class="custom-container-title">参考配置</p><blockquote><p><a href="/file/mysql/03.MySQL%E4%BA%8B%E5%8A%A1%E7%AF%87.pdf">0.3 MySQL事务篇</a></p></blockquote></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>基于锁的并发控制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-什么是mvcc" tabindex="-1"><a class="header-anchor" href="#_2-什么是mvcc" aria-hidden="true">#</a> 2.什么是mvcc</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>基于版本的并发控制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-innodb中mvcc的实现" tabindex="-1"><a class="header-anchor" href="#_3-innodb中mvcc的实现" aria-hidden="true">#</a> 3.InnoDB中mvcc的实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>基于undolog+readview实现的
	undolog：回滚日志。
	readview：读视图。
修改数据后undolog的行为：
1）undolog中的内容
	其中包含修改的数据行的内容。
	每个记录行中包含：回滚指针、事务id、rowid（如果没有主键）+字段内容。
	事务id：修改当前记录的事务的id
2）read view
	控制读取记录时哪个版本可以读取。
	m_ids[]:保存当前数据库中活跃的事务id。
	m_up_limit_id：m_ids事务列表中的最小事务id，如果当前列表为空那么就等于m_low_limit_id。事务id的下限。
	m_low_limit_id：系统中将要产生的下一个事务id的值。事务id的上限。
	m_creator_trx_id：当前事务id，m_ids中不包含当前事务id。

	readview访问控制：
	1、版本中事务id小于readview的下限版本可以访问，在生成readview时事务以及结束。
	2、版本中事务id大于等于readview的上限不可以被访问，生成readview时事务还没有生成。
	3、如果版本号大于readview中的下限并且小于readview的上限，判断事务在m_ids中是否存在，如果存在不可以访问，如果不存在可以访问。
	4、如果版本号等于当前事务id可以被访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、mvcc实现事务隔离级别" tabindex="-1"><a class="header-anchor" href="#_4、mvcc实现事务隔离级别" aria-hidden="true">#</a> 4、mvcc实现事务隔离级别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    InnoDB中mvcc只支持两种事务隔离级别：RC、RR
	RC：每次读取数据前都生成一个ReadView，可以读到最新已提交的数据。
	RR：在事务开始后第一次读取数据时生成一个ReadView，以后再执行相同的sql语句使用同一个ReadView。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、快照读和当前读" tabindex="-1"><a class="header-anchor" href="#_5、快照读和当前读" aria-hidden="true">#</a> 5、快照读和当前读</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    普通查询都是快照读，不需要加锁，读写不冲突。
	当前读：
		insert
		delete
		update
		select .. for update
		select .. lock in share mode
	都需要加锁。lbcc。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(_,h){const n=s("router-link");return t(),c("div",null,[u,e("nav",o,[e("ul",null,[e("li",null,[d(n,{to:"#目录"},{default:a(()=>[i("目录")]),_:1})]),e("li",null,[d(n,{to:"#一、innodb锁篇"},{default:a(()=>[i("一、InnoDB锁篇")]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#_1、什么是lbcc"},{default:a(()=>[i("1、什么是lbcc")]),_:1})]),e("li",null,[d(n,{to:"#_2-什么是mvcc"},{default:a(()=>[i("2.什么是mvcc")]),_:1})]),e("li",null,[d(n,{to:"#_3-innodb中mvcc的实现"},{default:a(()=>[i("3.InnoDB中mvcc的实现")]),_:1})]),e("li",null,[d(n,{to:"#_4、mvcc实现事务隔离级别"},{default:a(()=>[i("4、mvcc实现事务隔离级别")]),_:1})]),e("li",null,[d(n,{to:"#_5、快照读和当前读"},{default:a(()=>[i("5、快照读和当前读")]),_:1})])])])])]),m])}const f=l(v,[["render",b],["__file","03mysql_innoDB.html.vue"]]);export{f as default};
