import{_ as l,r as n,o as s,c,a as e,b as r,w as i,d as a,e as o}from"./app-c1c3c937.js";const d="/images/enterprise_architect/ea01/ea001_001image.png",h="/images/enterprise_architect/ea01/ea001_002image.png",_="/images/enterprise_architect/ea01/ea001_003image.png",u="/images/enterprise_architect/ea01/ea001_004image.png",p="/images/enterprise_architect/ea01/ea001_005image.png",m={},f=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),a(" 目录")],-1),g={class:"table-of-contents"},A=o('<h2 id="ea-工具-uml" tabindex="-1"><a class="header-anchor" href="#ea-工具-uml" aria-hidden="true">#</a> EA 工具 UML</h2><h2 id="uml-概念" tabindex="-1"><a class="header-anchor" href="#uml-概念" aria-hidden="true">#</a> UML 概念</h2><p>用例图：从业务需求中找，就是要动词下的明细。</p><p><img src="'+d+'" alt="Alt text"></p><p>1、 关联：参与者与用例之间的关系<br> 2、 包含：如果B是A的某项子功能，并且建模者确切地知道在A所对应的动作序列中何时将调用B,则称用例A包含用例B.<br> 3、 扩展：如果A与B相似，但A的功能比B多，A的动作序列是通过B的动作序列中的某些执行点上插入附加动作序列而构成的，则称用例A扩展用例B.<br> 4、 继承（泛化）： 如果 A 与B 相似，但A的动作序列是通过改写B的部分动作或者扩展B的部分动作而获得的，则称用例A继承用例B.</p><h2 id="学生成绩管理的用例图" tabindex="-1"><a class="header-anchor" href="#学生成绩管理的用例图" aria-hidden="true">#</a> 学生成绩管理的用例图</h2><p><img src="'+h+'" alt="Alt text"></p><h2 id="类图" tabindex="-1"><a class="header-anchor" href="#类图" aria-hidden="true">#</a> 类图</h2><p><img src="'+_+'" alt="Alt text"></p><h2 id="类图-初步领域概念模型" tabindex="-1"><a class="header-anchor" href="#类图-初步领域概念模型" aria-hidden="true">#</a> 类图（初步领域概念模型）</h2><p>1、泛化/继承： 子类继承父类，实现父类所有的功能，并拥有父类没有的功能。<br> 2、关联：普通关联：组合：部分不能脱离整体。聚合：整体和部分，部分可以脱离整体。<br> 3、依赖：A类的某个方法中，使用了B类，就说A类依赖于B类，它们是依赖关系。<br> 4、实现：特殊的依赖关系。</p><p>类图，从业务需求中，就要找名词的明细。<br><img src="'+u+'" alt="Alt text"></p><h2 id="顺序图" tabindex="-1"><a class="header-anchor" href="#顺序图" aria-hidden="true">#</a> 顺序图</h2><p>1、顺序图是一张二维图</p><ul><li>纵向代表时间轴，时间沿垂直方向向下延伸；</li><li>横向由多个参与交互的对象构成<br> 2、一张基本的顺序图由以下图形元素构成：</li><li>对象及其生命线与活跃期</li><li>消息传递</li><li>注解<br><img src="'+p+'" alt="Alt text"></li></ul>',15);function b(x,B){const t=n("router-link");return s(),c("div",null,[f,e("nav",g,[e("ul",null,[e("li",null,[r(t,{to:"#目录"},{default:i(()=>[a("目录")]),_:1})]),e("li",null,[r(t,{to:"#ea-工具-uml"},{default:i(()=>[a("EA 工具 UML")]),_:1})]),e("li",null,[r(t,{to:"#uml-概念"},{default:i(()=>[a("UML 概念")]),_:1})]),e("li",null,[r(t,{to:"#学生成绩管理的用例图"},{default:i(()=>[a("学生成绩管理的用例图")]),_:1})]),e("li",null,[r(t,{to:"#类图"},{default:i(()=>[a("类图")]),_:1})]),e("li",null,[r(t,{to:"#类图-初步领域概念模型"},{default:i(()=>[a("类图（初步领域概念模型）")]),_:1})]),e("li",null,[r(t,{to:"#顺序图"},{default:i(()=>[a("顺序图")]),_:1})])])]),A])}const v=l(m,[["render",b],["__file","ea001.html.vue"]]);export{v as default};