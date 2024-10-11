import{_ as l,r as t,o as d,c as r,a as n,b as s,w as a,d as e,e as c}from"./app-c1c3c937.js";const p={},v=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),e(" 目录")],-1),u={class:"table-of-contents"},o=c(`<h2 id="工厂、抽象工厂、策略模式" tabindex="-1"><a class="header-anchor" href="#工厂、抽象工厂、策略模式" aria-hidden="true">#</a> 工厂、抽象工厂、策略模式</h2><h3 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h3><h3 id="什么是设计原则" tabindex="-1"><a class="header-anchor" href="#什么是设计原则" aria-hidden="true">#</a> 什么是设计原则</h3><p>设计原则是一套设计原则的行为准则，用来约束代码设计的。<br> 就好比国家的法律，法律是用来约束人民能够和谐相处，所以是一个好的约束。<br> 那么同理，设计原则也是一个好的约束，是为了我们设计出更好的代码。所以也是一个好的约束。 在设计代码里面一共分为6个原则，也即6个约束！</p><h3 id="设计原则类型" tabindex="-1"><a class="header-anchor" href="#设计原则类型" aria-hidden="true">#</a> 设计原则类型</h3><h4 id="单一职责原则" tabindex="-1"><a class="header-anchor" href="#单一职责原则" aria-hidden="true">#</a> 单一职责原则</h4><p>要点：一个方法一个类只负责一个事情<br> 核心条件：一个类只有一个类似的功能方法。 定义：不要存在多于一个导致类变更的原因。通俗的说，即一个类只负责一项职责。<br> 问题由来： 类T 负责两个不同的职责：职责P1,职责P2.当由于职责P1需求发生改变而需要修改类T时，有可能会导致本运行的职责P2功能发生故障。<br> 解决方案：遵循单一职责。分别建立两个类T1、T2,使T1完成职责P1功能，T2完成职责P2功能。这样，当修改类T1时，不会使职责P2发生故障风险; 同理，当修改T2时，也不会使职责P1发生故障风险。</p><h4 id="依赖倒置原则" tabindex="-1"><a class="header-anchor" href="#依赖倒置原则" aria-hidden="true">#</a> 依赖倒置原则</h4><p>要点： 依赖抽象，不依赖具体<br> 核心条件： 使用接口编程<br> 定义： 高层模块不应该依赖低层模块，二者都应该依赖抽象；抽象不应该依赖细节；细节应该依赖抽象。<br> 问题由来： 类A直接依赖类B，假如要将类A改为依赖类C，则必须通过修改类A的代码来达成。这种场景下，类A一般是高层模块，负责复杂的业务逻辑；类B和类C是低层模块，负责基本的原子操作；假如修改类A，会给程序带来不必要的风险。 解决方案：将类A修改为依赖接口I，类B和类C各自实现接口I,类A通过接口I间接与类B或者类C发生联系，则会大大降低修改类A的几率。</p><p>例如：<br> 我们给小孩讲故事书上面的故事，父母、故事书，小孩长大了，需要讲电视上的故事，父母不会讲了，所以我们需要抽象出讲故事的接口，分别让 父母依赖讲故事接口就可以了。这就是依赖倒置。</p><h4 id="开闭原则" tabindex="-1"><a class="header-anchor" href="#开闭原则" aria-hidden="true">#</a> 开闭原则</h4><p>要点： 对扩展开发，对修改关闭<br> 核心条件： 使用接口和抽象类<br> 定义： 一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。<br> 问题由来： 在软件的生命周期内，因为变化、升级和维护等原因需要对软件原有代码进行修改时，可能会给旧代码中引入错误，也可能会使我们不得不对整个功能进行重构，并且需要原有代码经过 重新测试。<br> 解决方案： 当软件需要变化时，尽量通过扩展软件的行为来实现变化，而不是通过修改已有的代码来实现变化。</p><h4 id="接口隔离原则" tabindex="-1"><a class="header-anchor" href="#接口隔离原则" aria-hidden="true">#</a> 接口隔离原则</h4><p>要点：使用多个隔离的接口，比使用单个接口要好<br> 核心条件： 将接口按照功能进行拆分成多个子接口<br> 定义：客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。 问题由来：类A通过接口I依赖类B,类C通过接口I依赖类D,如果接口I对于类A和类B来说不是最小接口，则类B和类D必须去实现他们不需要的方法。</p><p>解决方案： 将臃肿的接口I拆分为独立的几个接口，类A和类C分别与他们需要的接口建立依赖关系。也就是采用接口隔离原则。</p><p>例如：<br> 天空的鸟，有两个功能，会飞，吃虫子<br> 这个时候，我们人类模仿鸟类实现了飞行的功能。这个时候肯定会继承鸟类的所有功能，可是人吃饭不能吃虫子啊，所有必须讲鸟类的会飞和吃虫子功能拆分开，然后各取所需。</p><h4 id="里氏代换原则" tabindex="-1"><a class="header-anchor" href="#里氏代换原则" aria-hidden="true">#</a> 里氏代换原则</h4><p>要点：使用子类代替基类(不能重写父类的方法)</p><p>核心条件：使用子类</p><p>问题由来：有一功能P1，由类A完成。现需要将功能P1进行扩展，扩展后的功能为P，其中P由原有功能P1与新功能P2组成。新功能P由类A的子类B来完成，则子类B在完成新功能P2的同时，有可能会导致原有功能P1发生故障。</p><p>解决方案：当使用继承时，遵循里氏替换原则。类B继承类A时，除添加新的方法完成新增功能P2外，尽量不要重写父类A的方法，也尽量不要重载父类A的方法。</p><p>继承包含这样一层含义：父类中凡是已经实现好的方法（相对于抽象方法而言），实际上是在设定一系列的规范和契约，虽然它不强制要求所有的子类必须遵从这些契约，但是如果子类对这些非抽象方法任意修改，就会对整个继承体系造成破坏。而里氏替换原则就是表达了这一层含义。</p><p>例如：</p><p>子女继承父母的爱哭的性格特点，但是在改变的时候，子女只能改变自己的性格特点，不能改变父母的性格特点。</p><h3 id="迪米特法则-又称最少知道原则" tabindex="-1"><a class="header-anchor" href="#迪米特法则-又称最少知道原则" aria-hidden="true">#</a> 迪米特法则，又称最少知道原则</h3><p>要点：类与类之间相互调用尽量少</p><p>核心条件：一个类暴露的信息越少越好(封装)。提供层次尽量少</p><p>定义：一个对象应该对其他对象保持最少的了解。</p><p>问题由来：类与类之间的关系越密切，耦合度越大，当一个类发生改变时，对另一个类的影响也越大。</p><p>解决方案：尽量降低类与类之间的耦合。</p><p>迪米特法则又叫最少知道原则，最早是在1987年由美国Northeastern University的Ian Holland提出。通俗的来讲，就是一个类对自己依赖的类知道的越少越好。也就是说，对于被依赖的类来说，无论逻辑多么复杂，都尽量地的将逻辑封装在类的内部，对外除了提供的public方法，不对外泄漏任何信息。迪米特法则还有一个更简单的定义：只与直接的朋友通信。首先来解释一下什么是直接的朋友：每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说这两个对象之间是朋友关系。耦合的方式很多，依赖、关联、组合、聚合等。其中，我们称出现成员变量、方法参数、方法返回值中的类为直接的朋友，而出现在局部变量中的类则不是直接的朋友。也就是说，陌生的类最好不要作为局部变量的形式出现在类的内部。</p><p>例如：</p><p>公司有老板，有部分经理，有员工，老板和经理通信，不能直接和员工通信。</p><h2 id="设计模式-1" tabindex="-1"><a class="header-anchor" href="#设计模式-1" aria-hidden="true">#</a> 设计模式</h2><p>什么是设计模式 设计模式就是设计开发软件的套路，就是告诉你们如何玩软件</p><p>代表了最佳的实践，同时呢，是代码设计经验的总结。也称作为程序内功心法。</p><p>为什么要使用设计模式 由于设计模式是一套心法，让我们在设计代码的过程中少走很多弯路，是走向架构的必备前提条件</p><h2 id="设计模式类型" tabindex="-1"><a class="header-anchor" href="#设计模式类型" aria-hidden="true">#</a> 设计模式类型</h2><h3 id="创建型" tabindex="-1"><a class="header-anchor" href="#创建型" aria-hidden="true">#</a> 创建型</h3><p>作用：创建对象</p><p>优点：创建对象更加灵活</p><h3 id="结构型" tabindex="-1"><a class="header-anchor" href="#结构型" aria-hidden="true">#</a> 结构型：</h3><p>结构型设计模式是一种软件设计模式，用于解决在设计软件结构时遇到的常见问题。它主要关注对象的组合，以便形成更大的结构，并且可以通过简化对象之间的通信和相互作用来提高系统的灵活性和可维护性。常见的结构型设计模式包括适配器模式、装饰器模式、代理模式等。</p><p>作用：动态提供类和的组合</p><p>优点：提高类和对象的复用性，增加扩展性</p><h3 id="行为型" tabindex="-1"><a class="header-anchor" href="#行为型" aria-hidden="true">#</a> 行为型</h3><p>行为型设计模式是一类软件设计模式，用于处理对象之间的通信、职责分配和算法的抽象。这些模式涉及到类和对象如何交互以及如何分配职责。它们可以帮助开发人员更好地设计对象之间的交互，从而实现更灵活、可维护和可扩展的代码。常见的行为型设计模式包括观察者模式、策略模式、命令模式等。 作用：对象之间交互</p><p>优点：将对象之间关系进行解耦，独立扩展性高</p><h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><p>什么是工厂模式 定义：</p><p>工厂模式就是我们需要一个对象，不是直接创建，而是从一个工厂对象获取。</p><p>举例：</p><p>好比您需要一辆汽车，可以直接从工厂里面提货，而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h3><p>工厂模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><p>工厂模式关心的是最终产出(创建)的对象, 而不关心创建的过程。</p><p>为什么要使用工厂模式 我们平时都是直接new对象的，为什么还要使用工厂模式呢，我们来看一下一个简单的例子</p><p>验证码场景</p><p>实现一个验证码</p><p>条件</p><p>1、区域</p><p>2、数字</p><p>对于验证码的区域，客户需要我们画一个矩形区域，过一段时间后，客户又需要画一个圆形区域，又过一段时间，客户又需要我们画一个正方形区域，大家都明白，客户的需求是无止境的。那么我们一个个改代码，把原有的代码去掉。</p><p>聪明的我们，为了保留以前的代码，所以我们进行了抽象。为了适应代码的变化</p><p>这个时候，客户又说，我想自动选择区域。所以使用工厂模式来解决</p><p>总结：工厂模式就是用来解决动态选择接口的问题</p><p>如何实现工厂模式 条件</p><p>1、工厂类</p><p>2、接口选择方法</p><h2 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h2><p>什么是抽象工厂模式 定义：</p><p>抽象工厂模式就是我们需要一个工厂，不是直接通过new一个工厂，而是从一个超级工厂对象来获取这个工厂</p><p>举例：</p><p>好比您需要一辆汽车，可以直接从汽车工厂里面提货，而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现。</p><p>好比您需要一辆摩托车，可以直接从摩托车工厂里面提货，而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现。</p><p>好比您需要一辆电动车，可以直接从电动车工厂里面提货，而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现。</p><p>如果我们从淘宝一起将汽车、摩托车、电动车一起提出来，淘宝就是抽象工厂</p><p>总结：</p><p>抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。</p><p>该超级工厂又称为其他工厂的工厂。</p><p>这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><p>为什么要使用抽象工厂模式 验证的画区域完成后，需要填充颜色。画区域和填充颜色是一样的原理。</p><p>如果客户端需要动态选择工厂，那我们就需要使用抽象工厂模式</p><p>如何实现抽象工厂模式 策略模式 什么是策略模式 定义：</p><p>策略模式就是用来代替if….else的一种设计模式，属于行为型设计模式。</p><p>举例：</p><p>我们去上班，如果是太阳，我们选择走路去上班。如果是阴天，我们选择骑自行车。如果是下雨天，我们选择开车。等等</p><p>走路，骑自行车，开车，这就是上班的策略。</p><p>总结：</p><p>在策略模式（Strategy Pattern）中，一个类的行为或其算法可以在运行时更改。这种类型的设计模式属于行为型模式。</p><p>在策略模式中，我们创建表示各种策略的对象和一个行为随着策略对象改变而改变的 context 对象。策略对象改变 context 对象的执行算法。</p><p>为什么要使用策略模式 少儿编程中</p><p>数字的4则运算</p><p>如果少儿5个月，6个月，7个月，8个月，一岁，需要增加开根号，2岁，需要计算平方了。三岁，需要弄三叫函数了等等</p><p>如果我们都是写在一个代码里面，每需求修改一次，都是修改这个运算类，是无止境的，当我修改加法运算的时候，又会修改这个类，导致这个类永远在被修改，无法提供良好的扩展性。</p><p>所有就出现了策略模式代替</p><p>优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。</p><p>缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。</p><p>如何实现策略模式 条件</p><p>1、策略接口</p><p>2、策略选择类</p><h2 id="综合案例ioc" tabindex="-1"><a class="header-anchor" href="#综合案例ioc" aria-hidden="true">#</a> 综合案例IOC</h2><h3 id="什么是ioc" tabindex="-1"><a class="header-anchor" href="#什么是ioc" aria-hidden="true">#</a> 什么是IOC</h3><p>IOC，就是控制反转。对象由工厂创建，这个过程就叫做IOC,没有工厂之前，我们都是自己创建对象，然后使用，现在由工厂创建对象，这个过程就是IOC。</p><p>对象由三个阶段组成，对象创建，对象使用，对象销毁。控制的是什么，控制的是对象创建和对象销毁。</p><p>那么什么是IOC容器，能够创建n个对象，然后能够存储起来，就是IOC容器。</p><p>什么是DI，DI就是对象属性由IOC容器赋值的过程就。</p><p>例如：容器有对象A和对象B，将对象B值赋值给对象A就是DI</p><p>有两层意思</p><p>1、对象的创建由工厂创建</p><p>2、对象的属性由工厂赋值</p><p>3、对象的代理由工厂代理</p><p>这三个功能合起来就是IOC</p><p>为什么要使用IOC 目的：提高通用性和扩展性。</p><p>1、降低耦合度</p><p>2、提高扩展性</p><p>如何实现IOC 条件</p><p>1、工厂</p><p>2、集合</p><p>3、反射</p><p>4、配置</p><p>步骤</p><p>1、创建工厂对象和容器</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>class DefaultIOCFactory
{
 /// &lt;summary&gt;
        /// 1、IOC容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, object&gt; iocContainer = new Dictionary&lt;string, object&gt;();
        
        public DefaultIOCFactory(){
            
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、程序集加载</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>class DefaultIOCFactory
{
   /// &lt;summary&gt;
   /// 1、IOC容器(存储对象)
   /// &lt;/summary&gt;
   private Dictionary&lt;string, object&gt; iocContainer = new Dictionary&lt;string, object&gt;();
   public DefaultIOCFactory(){
        // 1、加载程序集
            Assembly assembly = Assembly.LoadFrom(&quot;RuanMou.ArchitectRelax.DesignMode1&quot;);
           } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、创建对象</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> class DefaultIOCFactory
{
 /// &lt;summary&gt;
        /// 1、IOC容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, object&gt; iocContainer = new Dictionary&lt;string, object&gt;();
   public DefaultIOCFactory(){
        // 1、加载程序集
            Assembly assembly = Assembly.Load(&quot;RuanMou.ArchitectRelax.DesignMode1&quot;);
         // 2、使用反射从程序集获取对象类型
            Type[] types = assembly.GetTypes();
             foreach (var type in types)
            {
                // 3.1 创建对象/对象属性赋值
                object _obejct = Activator.CreateInstance(type);

                // 3.2 对象存储
                iocContainer.Add(type.Name, _obejct);
            }
           } 
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、对象依赖注入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    ///  递归创建对象
    ///  <span class="token number">1</span>、先找出抽象通用逻辑
    ///  <span class="token number">2</span>、然后找出通用逻辑里面通用的参数
    ///  <span class="token number">3</span>、最后封装成函数，自己调用自己
 class DefaultIOCFactory
<span class="token punctuation">{</span>
 /// <span class="token operator">&lt;</span>summary<span class="token operator">&gt;</span>
        /// <span class="token number">1</span>、IOC容器<span class="token punctuation">(</span>存储对象<span class="token punctuation">)</span>
        /// <span class="token operator">&lt;</span>/summary<span class="token operator">&gt;</span>
        private Dictionary<span class="token operator">&lt;</span>string, object<span class="token operator">&gt;</span> iocContainer <span class="token operator">=</span> new Dictionary<span class="token operator">&lt;</span>string, object<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   public <span class="token function-name function">DefaultIOCFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        // <span class="token number">1</span>、加载程序集
            Assembly assembly <span class="token operator">=</span> Assembly.Load<span class="token punctuation">(</span><span class="token string">&quot;RuanMou.ArchitectRelax.DesignMode1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         // <span class="token number">2</span>、使用反射从程序集获取对象类型
            Type<span class="token punctuation">[</span><span class="token punctuation">]</span> types <span class="token operator">=</span> assembly.GetTypes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            foreach <span class="token punctuation">(</span>var <span class="token builtin class-name">type</span> <span class="token keyword">in</span> types<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                // <span class="token number">3.1</span> 创建对象/对象属性赋值
                object _obejct <span class="token operator">=</span> Activator.CreateInstance<span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
                
                // <span class="token number">3.2</span> 属性赋值
                PropertyInfo<span class="token punctuation">[</span><span class="token punctuation">]</span> propertyInfos <span class="token operator">=</span> type.GetProperties<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                foreach <span class="token punctuation">(</span>var item <span class="token keyword">in</span> propertyInfos<span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    foreach <span class="token punctuation">(</span>var type1 <span class="token keyword">in</span> types<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>item.PropertyType.Name.Equals<span class="token punctuation">(</span>type1.Name<span class="token punctuation">))</span>
                        <span class="token punctuation">{</span>
                            object _obejct1 <span class="token operator">=</span> Activator.CreateInstance<span class="token punctuation">(</span>type1<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            item.SetValue<span class="token punctuation">(</span>_obejct, _obejct1<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                
           // <span class="token number">3.2</span> 对象存储
            iocContainer.Add<span class="token punctuation">(</span>type.Name, _obejct<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、递归进行依赖注入​</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>class DefaultIOCFactory
{
 /// &lt;summary&gt;
        /// 1、IOC容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, object&gt; iocContainer = new Dictionary&lt;string, object&gt;();
   public DefaultIOCFactory(){
         // 1、加载程序集
            Assembly assembly = Assembly.Load(&quot;RuanMou.ArchitectRelax.DesignMode1&quot;);
         // 2、使用反射从程序集获取对象类型
            Type[] types = assembly.GetTypes();
             foreach (var type in types)
            {
              object _obejct = CreateObject(type, types);
            
             // 3.2 对象存储
             iocContainer.Add(type.Name, _obejct);
           }
    } 
   
   //递归进行对象依赖注入
   public object CreateObject(Type type,Type[] types)
        {
            // 3.1 创建对象/对象属性赋值
            object _obejct = Activator.CreateInstance(type);

            // 3.2 属性赋值
            PropertyInfo[] propertyInfos = type.GetProperties();
            foreach (var item in propertyInfos)
            {
                foreach (var type1 in types)
                {
                    if (item.PropertyType.Name.Equals(type1.Name))
                    {
                        item.SetValue(_obejct, CreateObject(item.PropertyType, types));
                    }
                }
            }
            return _obejct;
        }
}   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、Type容器递归进行对象依赖注入()</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>class DefaultIOCFactory
{
 /// &lt;summary&gt;
        /// 1、IOC容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, object&gt; iocContainer = new Dictionary&lt;string, object&gt;();
        /// &lt;summary&gt;
        /// 2、IOC TYPE容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, Type&gt; iocTypeContainer = new Dictionary&lt;string, Type&gt;();
   public DefaultIOCFactory(){
        // 1、加载程序集
            Assembly assembly = Assembly.Load(&quot;RuanMou.ArchitectRelax.DesignMode1&quot;);
         // 2、使用反射从程序集获取对象类型
            Type[] types = assembly.GetTypes();
              foreach (var type in types)
            {
                iocTypeContainer.Add(type.Name, type);
            }
             foreach (var type in types)
            {
              object _obejct = CreateObject(type.Name);// 3.2 对象存储
              iocContainer.Add(type.Name, _obejct);
            }
         } 

   //递归进行对象依赖注入
  public object CreateObject(string typeName)
        {
            // 1、从type容器获取Type
            Type type = iocTypeContainer[typeName];
            // 3.1 创建对象/对象属性赋值
            object _obejct = Activator.CreateInstance(type);

            // 3.2属性赋值
            PropertyInfo[] propertyInfos = type.GetProperties();
            foreach (var item in propertyInfos)
            {
                 item.SetValue(_obejct, CreateObject(item.PropertyType.Name));
            }
            return _obejct;
        }
    }   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、如何防止重复创建</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>class DefaultIOCFactory
{
 /// &lt;summary&gt;
        /// 1、IOC容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, object&gt; iocContainer = new Dictionary&lt;string, object&gt;();
        /// &lt;summary&gt;
        /// 2、IOC TYPE容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, Type&gt; iocTypeContainer = new Dictionary&lt;string, Type&gt;();
   public DefaultIOCFactory(){
        // 1、加载程序集
            Assembly assembly = Assembly.Load(&quot;lkn.ArchitectRelax.DesignMode1&quot;);
         // 2、使用反射从程序集获取对象类型
            Type[] types = assembly.GetTypes();
              foreach (var type in types)
            {
                iocTypeContainer.Add(type.Name, type);
            }
             foreach (var type in types)
            {
              object _obejct = CreateObject(type.Name);// 3.2 对象存储
    iocContainer.Add(type.Name, _obejct);
   }
         } 

   //递归进行对象依赖注入
  public object CreateObject(string typeName)
        {
           // 2、防止重复创建
            if (iocContainer.ContainsKey(typeName))
            {
                return iocContainer[typeName];
            }
            // 1、从type容器获取Type
            Type type = iocTypeContainer[typeName];
            // 3.1 创建对象/对象属性赋值
            object _obejct = Activator.CreateInstance(type);

       // 3.2属性赋值
        PropertyInfo[] propertyInfos = type.GetProperties();
        foreach (var item in propertyInfos)
        {
             item.SetValue(_obejct, CreateObject(item.PropertyType.Name));
        }
        return _obejct;
    }
}   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、需要时创建对象</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>   class DefaultIOCFactory
{
 /// &lt;summary&gt;
        /// 1、IOC容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, object&gt; iocContainer = new Dictionary&lt;string, object&gt;();
        /// &lt;summary&gt;
        /// 2、IOC TYPE容器(存储对象)
        /// &lt;/summary&gt;
        private Dictionary&lt;string, Type&gt; iocTypeContainer = new Dictionary&lt;string, Type&gt;();
   public DefaultIOCFactory(){
        // 1、加载程序集
            Assembly assembly = Assembly.Load(&quot;RuanMou.ArchitectRelax.DesignMode1&quot;);
         // 2、使用反射从程序集获取对象类型
            Type[] types = assembly.GetTypes();
              foreach (var type in types)
            {
                iocTypeContainer.Add(type.Name, type);
            }
             foreach (var type in types)
            {
              object _obejct = CreateObject(type.Name);// 3.2 对象存储
    iocContainer.Add(type.Name, _obejct);
   }
         } 

   //递归进行对象依赖注入
  public object CreateObject(string typeName)
        {
           // 2、防止重复创建
            if (iocContainer.ContainsKey(typeName))
            {
                return iocContainer[typeName];
            }
            // 1、从type容器获取Type
            Type type = iocTypeContainer[typeName];
            // 3.1 创建对象/对象属性赋值
            object _obejct = Activator.CreateInstance(type);

   // 3.2属性赋值
    PropertyInfo[] propertyInfos = type.GetProperties();
    foreach (var item in propertyInfos)
    {
         item.SetValue(_obejct, CreateObject(item.PropertyType.Name));
    }
    return _obejct;
}
       /// &lt;summary&gt;
        /// 2、获取对象
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
       public object GetObject(string typeName)
        {
            // 3.1 创建对象/对象属性赋值
            object _obejct = CreateObject(typeName);

            // 3.2 对象存储
            iocContainer.Add(typeName, _obejct);

            return _obejct;
       }
}   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,138);function b(m,y){const i=t("router-link");return d(),r("div",null,[v,n("nav",u,[n("ul",null,[n("li",null,[s(i,{to:"#目录"},{default:a(()=>[e("目录")]),_:1})]),n("li",null,[s(i,{to:"#工厂、抽象工厂、策略模式"},{default:a(()=>[e("工厂、抽象工厂、策略模式")]),_:1}),n("ul",null,[n("li",null,[s(i,{to:"#设计模式"},{default:a(()=>[e("设计模式")]),_:1})]),n("li",null,[s(i,{to:"#什么是设计原则"},{default:a(()=>[e("什么是设计原则")]),_:1})]),n("li",null,[s(i,{to:"#设计原则类型"},{default:a(()=>[e("设计原则类型")]),_:1})]),n("li",null,[s(i,{to:"#迪米特法则-又称最少知道原则"},{default:a(()=>[e("迪米特法则，又称最少知道原则")]),_:1})])])]),n("li",null,[s(i,{to:"#设计模式-1"},{default:a(()=>[e("设计模式")]),_:1})]),n("li",null,[s(i,{to:"#设计模式类型"},{default:a(()=>[e("设计模式类型")]),_:1}),n("ul",null,[n("li",null,[s(i,{to:"#创建型"},{default:a(()=>[e("创建型")]),_:1})]),n("li",null,[s(i,{to:"#结构型"},{default:a(()=>[e("结构型：")]),_:1})]),n("li",null,[s(i,{to:"#行为型"},{default:a(()=>[e("行为型")]),_:1})])])]),n("li",null,[s(i,{to:"#工厂模式"},{default:a(()=>[e("工厂模式")]),_:1}),n("ul",null,[n("li",null,[s(i,{to:"#总结"},{default:a(()=>[e("总结：")]),_:1})])])]),n("li",null,[s(i,{to:"#抽象工厂模式"},{default:a(()=>[e("抽象工厂模式")]),_:1})]),n("li",null,[s(i,{to:"#综合案例ioc"},{default:a(()=>[e("综合案例IOC")]),_:1}),n("ul",null,[n("li",null,[s(i,{to:"#什么是ioc"},{default:a(()=>[e("什么是IOC")]),_:1})])])])])]),o])}const C=l(p,[["render",b],["__file","design001.html.vue"]]);export{C as default};