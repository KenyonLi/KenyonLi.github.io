import{_ as l,r as s,o,c as r,a as e,b as t,w as n,d as i,e as c}from"./app-c1c3c937.js";const p={},d=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),u={class:"table-of-contents"},h=c(`<h2 id="webapi调优" tabindex="-1"><a class="header-anchor" href="#webapi调优" aria-hidden="true">#</a> WebAPI调优</h2><div class="custom-container tip"><p class="custom-container-title">WebAPI 调优:降低操作时间</p><p>1、时间调优。 2、代码调优。代码结构</p></div><h2 id="为什么要对webapi调优" tabindex="-1"><a class="header-anchor" href="#为什么要对webapi调优" aria-hidden="true">#</a> 为什么要对WebAPI调优</h2><div class="custom-container tip"><p class="custom-container-title">1、查询秒杀商品业务场景</p><p>客户端---&gt;秒杀商品100ms--&gt;900ms数据库。 客户端请求时间就是1s,如何降低呢。 1、性能监控工具：skywallking 2、方案：缩短路径 3、工具：本地缓存 4、落地：落地本地缓存</p></div><p>落地本地缓存 var meoryCacheEntryOptions= MemoryCacheEntryOptions() 设置过期时间，为了保证数据与源头一致。 meoryCacheEntryOptions.AbsoluteExpirationRelativetToNow = TimeSpan.FromSecconds(60); 数据量过多的情况。 meoryCacheEntryOptions.SetSize(1024); 限制缓存大小(保证系统不影响其他操作)</p><p>方案：使用异步更新缓存</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>meoryCacheEntryOptions.RegisterPostEvictionCallback((key,value,reason,state)=&gt;{
    //1. key = seckills
    //2. valu = List&lt;Seckills&gt;()
    //3. reason 回收原因
    //4. state 状态
    // 可以更新数据
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存击穿：当查询时，缓存刚才过期。数据异构形式。 如果缓存的数据量，比较大。1000条数据 MemoryCache 1000条数据 1.CacheItem 2.设置过期时间。</p><p>如果： 1.全部一起过期</p><p>缓存数据删除的意义：</p><ol><li><p>数据一致</p></li><li><p>腾出空间</p></li><li><p>先进先出算法 队列中。</p></li><li><p>如果缓存数据一直不使用。 缓存过期，缓存数据使用频率低。 经常不使用回收算法 方案：记录访问次数。如果访问次数&lt;10 自动回收</p></li></ol><p>回收总结： 1、数据过期如何回收。先进先出算法 FIFO 2、数据使用频率低，如何回收。经常不使用回收算法。（memoryCacheEntry没有实现） LRU 3、基本上使用 LFU 4、优先回收</p><p>本地缓存缺陷： 存在前提：单体项目</p><p>集群部署使用redis</p><p>查询商品路径 客户端--&gt;查询webapi--&gt;redis 方案：缩短路径 所以：缓存数据直接存储到客户端：是优化极致，性能极致。 http浏览器缓存 总结： 1 缓存优化极致：路径优化极致 数据特点 数据量有大和小。 如果数据量越小，查询性能越高。 如果数据量越大，查询性能越低。</p><p>压缩算法：将大的数据压缩成小的数据。</p><ol><li>本地缓存优化</li><li>分布式缓存优化</li><li>http浏览器缓存优化</li><li>响应结果压缩。将大的数据压缩为比较小的数据</li></ol>`,17);function m(v,b){const a=s("router-link");return o(),r("div",null,[d,e("nav",u,[e("ul",null,[e("li",null,[t(a,{to:"#目录"},{default:n(()=>[i("目录")]),_:1})]),e("li",null,[t(a,{to:"#webapi调优"},{default:n(()=>[i("WebAPI调优")]),_:1})]),e("li",null,[t(a,{to:"#为什么要对webapi调优"},{default:n(()=>[i("为什么要对WebAPI调优")]),_:1})])])]),h])}const y=l(p,[["render",m],["__file","tuning004.html.vue"]]);export{y as default};
