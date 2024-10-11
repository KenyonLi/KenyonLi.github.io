import{_ as r,r as o,o as u,c,a as e,b as i,w as t,d as a,e as g}from"./app-c1c3c937.js";const s="/images/rabbitmq/rabbitmq001.png",p="/images/rabbitmq/rabbitmq002.png",h="/images/rabbitmq/rabbitmq003.png",b="/images/rabbitmq/rabbitmq004.png",d="/images/rabbitmq/rabbitmq005.png",l="/images/rabbitmq/rabbitmq006.png",Q="/images/rabbitmq/rabbitmq007.png",m="/images/rabbitmq/rabbitmq008.png",y="/images/rabbitmq/rabbitmq009.png",x="/images/rabbitmq/rabbitmq010.png",f={},_=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),a(" 目录")],-1),k={class:"table-of-contents"},M=g('<h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> <strong>简介</strong></h3><p>MQ全称为Message Queue, 消息队列（MQ）是一种应用程序对应用程序的通信方法。应用程序通过读写出入队列的消息（针对应用程序的数据）来通信，而无需专用连接来链接它们。消息传递指的是程序之间通过在消息中发送数据进行通信，而不是通过直接调用彼此来通信，直接调用通常是用于诸如远程过程调用的技术。排队指的是应用程序通过 队列来通信。队列的使用除去了接收和发送应用程序同时执行的要求。其中较为成熟的MQ产品有IBM WEBSPHERE MQ等等...</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> <strong>使用场景</strong></h2><p>在项目中，将一些无需即时返回且耗时的操作提取出来，进行了异步处理，而这种异步处理的方式大大的节省了服务器的请求响应时间，从而提高了系统的吞吐量。</p><h1 id="相关名称介绍" tabindex="-1"><a class="header-anchor" href="#相关名称介绍" aria-hidden="true">#</a> <strong>相关名称介绍</strong></h1><h2 id="connectionfactory、connection、channel" tabindex="-1"><a class="header-anchor" href="#connectionfactory、connection、channel" aria-hidden="true">#</a> ConnectionFactory、Connection、Channel</h2><p>ConnectionFactory、Connection、Channel都是RabbitMQ对外提供的API中最基本的对象。</p><p>Connection是RabbitMQ的socket链接，它封装了socket协议相关部分逻辑。</p><p>ConnectionFactory为Connection的制造工厂。</p><p>Channel是我们与RabbitMQ打交道的最重要的一个接口，我们大部分的业务操作是在Channel这个接口中完成的，包括定义Queue、定义Exchange、绑定Queue与Exchange、发布消息等。</p><h2 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h2><p>Queue（队列）是RabbitMQ的内部对象，用于存储消息，用下图表示。</p><p><img src="'+s+'" alt="img"></p><p>RabbitMQ中的消息都只能存储在Queue中，生产者（下图中的P）生产消息并最终投递到Queue中，消费者（下图中的C）可以从Queue中获取消息并消费。</p><p><img src="'+p+'" alt="img"></p><p>多个消费者可以订阅同一个Queue，这时Queue中的消息会被平均分摊给多个消费者进行处理，而不是每个消费者都收到所有的消息并处理。</p><p><img src="'+h+'" alt="img"></p><h2 id="message-确认" tabindex="-1"><a class="header-anchor" href="#message-确认" aria-hidden="true">#</a> Message 确认</h2><p>在实际应用中，可能会发生消费者收到Queue中的消息，但没有处理完成就宕机（或出现其他意外）的情况，这种情况下就可能会导致消息丢失。为了避免这种情况发生，我们可以要求消费者在消费完消息后发送一个回执给RabbitMQ，RabbitMQ收到消息回执（Message acknowledgment）后才将该消息从Queue中移除；如果RabbitMQ没有收到回执并检测到消费者的RabbitMQ连接断开，则RabbitMQ会将该消息发送给其他消费者（如果存在多个消费者）进行处理。这里不存在timeout概念，一个消费者处理消息时间再长也不会导致该消息被发送给其他消费者，除非它的RabbitMQ连接断开。</p><p>这里会产生另外一个问题，如果我们的开发人员在处理完业务逻辑后，忘记发送回执给RabbitMQ，这将会导致严重的bug——Queue中堆积的消息会越来越多；消费者重启后会重复消费这些消息并重复执行业务逻辑…</p><p>另外pub message是没有ack的。</p><h2 id="message-持久化" tabindex="-1"><a class="header-anchor" href="#message-持久化" aria-hidden="true">#</a> Message 持久化</h2><p>如果我们希望即使在RabbitMQ服务重启的情况下，也不会丢失消息，我们可以将Queue与Message都设置为可持久化的（durable），这样可以保证绝大部分情况下我们的RabbitMQ消息不会丢失。但依然解决不了小概率丢失事件的发生（比如RabbitMQ服务器已经接收到生产者的消息，但还没来得及持久化该消息时RabbitMQ服务器就断电了），如果我们需要对这种小概率事件也要管理起来，那么我们要用到事务。由于这里仅为RabbitMQ的简单介绍，所以这里将不讲解RabbitMQ相关的事务。</p><h2 id="prefetch-count" tabindex="-1"><a class="header-anchor" href="#prefetch-count" aria-hidden="true">#</a> Prefetch count</h2><p>前面我们讲到如果有多个消费者同时订阅同一个Queue中的消息，Queue中的消息会被平摊给多个消费者。这时如果每个消息的处理时间不同，就有可能会导致某些消费者一直在忙，而另外一些消费者很快就处理完手头工作并一直空闲的情况。我们可以通过设置prefetchCount来限制Queue每次发送给每个消费者的消息数，比如我们设置prefetchCount=1，则Queue每次给每个消费者发送一条消息；消费者处理完这条消息后Queue会再给该消费者发送一条消息。</p><p><img src="'+b+'" alt="img"></p><h2 id="exchange" tabindex="-1"><a class="header-anchor" href="#exchange" aria-hidden="true">#</a> Exchange</h2><p>在上一节我们看到生产者将消息投递到Queue中，实际上这在RabbitMQ中这种事情永远都不会发生。实际的情况是，生产者将消息发送到Exchange（交换器，下图中的X），由Exchange将消息路由到一个或多个Queue中（或者丢弃）。</p><p><img src="'+d+'" alt="img"></p><p>Exchange是按照什么逻辑将消息路由到Queue的？这个将在下面的<strong>8、Binding</strong>中介绍。</p><p>RabbitMQ中的Exchange有四种类型，不同的类型有着不同的路由策略，这将在下面的<strong>10、****Exchange Types</strong>中介绍。</p><h2 id="routing-key" tabindex="-1"><a class="header-anchor" href="#routing-key" aria-hidden="true">#</a> routing key</h2><p>生产者在将消息发送给Exchange的时候，一般会指定一个routing key，来指定这个消息的路由规则，而这个routing key需要与Exchange Type及binding key联合使用才能最终生效。</p><p>在Exchange Type与binding key固定的情况下（在正常使用时一般这些内容都是固定配置好的），我们的生产者就可以在发送消息给Exchange时，通过指定routing key来决定消息流向哪里。RabbitMQ为routing key设定的长度限制为255 bytes。</p><h2 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h2><p>RabbitMQ中通过Binding将Exchange与Queue关联起来，这样RabbitMQ就知道如何正确地将消息路由到指定的Queue了。</p><p><img src="'+l+'" alt="img"></p><h2 id="binding-key" tabindex="-1"><a class="header-anchor" href="#binding-key" aria-hidden="true">#</a> Binding key</h2><p>在绑定（Binding）Exchange与Queue的同时，一般会指定一个binding key；消费者将消息发送给Exchange时，一般会指定一个routing key；当binding key与routing key相匹配时，消息将会被路由到对应的Queue中。这个将在Exchange Types章节会列举实际的例子加以说明。</p><p>在绑定多个Queue到同一个Exchange的时候，这些Binding允许使用相同的binding key。 binding key 并不是在所有情况下都生效，它依赖于Exchange Type，比如fanout类型的Exchange就会无视binding key，而是将消息路由到所有绑定到该Exchange的Queue。</p><h2 id="exchange-types" tabindex="-1"><a class="header-anchor" href="#exchange-types" aria-hidden="true">#</a> Exchange Types</h2><p>RabbitMQ常用的Exchange Type有fanout、direct、topic、headers这四种（AMQP规范里还提到两种Exchange Type，分别为system与自定义，这里不予以描述），下面分别进行介绍。</p><p><strong>fanout</strong></p><p>fanout类型的Exchange路由规则非常简单，它会把所有发送到该Exchange的消息路由到所有与它绑定的Queue中。</p><p><img src="'+Q+'" alt="img"></p><p>上图中，生产者（P）发送到Exchange（X）的所有消息都会路由到图中的两个Queue，并最终被两个消费者（C1与C2）消费。</p><p><strong>direct</strong></p><p>direct类型的Exchange路由规则也很简单，它会把消息路由到那些binding key与routing key完全匹配的Queue中。</p><p><img src="'+m+'" alt="img"></p><p>以上图的配置为例，我们以routingKey=”error”发送消息到Exchange，则消息会路由到Queue1（amqp.gen-S9b…，这是由RabbitMQ自动生成的Queue名称）和Queue2（amqp.gen-Agl…）；如果我们以routingKey=”info”或routingKey=”warning”来发送消息，则消息只会路由到Queue2。如果我们以其他routingKey发送消息，则消息不会路由到这两个Queue中。</p><p><strong>topic</strong></p><p>前面讲到direct类型的Exchange路由规则是完全匹配binding key与routing key，但这种严格的匹配方式在很多情况下不能满足实际业务需求。topic类型的Exchange在匹配规则上进行了扩展，它与direct类型的Exchage相似，也是将消息路由到binding key与routing key相匹配的Queue中，但这里的匹配规则有些不同，它约定：</p><p>routing key为一个句点号“. ”分隔的字符串（我们将被句点号“. ”分隔开的每一段独立的字符串称为一个单词），如“stock.usd.nyse”、“nyse.vmw”、“quick.orange.rabbit”</p><p>binding key与routing key一样也是句点号“. ”分隔的字符串。</p><p>binding key中可以存在两种特殊字符“<em>”与“#”，用于做模糊匹配，其中“</em>”用于匹配一个单词，“#”用于匹配多个单词（可以是零个）。</p><p><img src="'+y+'" alt="img"></p><p>以上图中的配置为例，routingKey=”quick.orange.rabbit”的消息会同时路由到Q1与Q2，routingKey=”lazy.orange.fox”的消息会路由到Q1与Q2，routingKey=”lazy.brown.fox”的消息会路由到Q2，routingKey=”lazy.pink.rabbit”的消息会路由到Q2（只会投递给Q2一次，虽然这个routingKey与Q2的两个bindingKey都匹配）；routingKey=”quick.brown.fox”、routingKey=”orange”、routingKey=”quick.orange.male.rabbit”的消息将会被丢弃，因为它们没有匹配任何bindingKey。</p><p><strong>headers</strong></p><p>headers类型的Exchange不依赖于routing key与binding key的匹配规则来路由消息，而是根据发送的消息内容中的headers属性进行匹配。</p><p>在绑定Queue与Exchange时指定一组键值对；当消息发送到Exchange时，RabbitMQ会取到该消息的headers（也是一个键值对的形式），对比其中的键值对是否完全匹配Queue与Exchange绑定时指定的键值对；如果完全匹配则消息会路由到该Queue，否则不会路由到该Queue。</p><p>该类型的Exchange没有用到过（不过也应该很有用武之地），所以不做介绍。</p><h2 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc" aria-hidden="true">#</a> RPC</h2><p>MQ本身是基于异步的消息处理，前面的示例中所有的生产者（P）将消息发送到RabbitMQ后不会知道消费者（C）处理成功或者失败（甚至连有没有消费者来处理这条消息都不知道）。</p><p>但实际的应用场景中，我们很可能需要一些同步处理，需要同步等待服务端将我的消息处理完成后再进行下一步处理。这相当于RPC（Remote Procedure Call，远程过程调用）。在RabbitMQ中也支持RPC。</p><p><img src="'+x+'" alt="img"></p><p>RabbitMQ中实现RPC的机制是：</p><p>客户端发送请求（消息）时，在消息的属性（MessageProperties，在AMQP协议中定义了14中properties，这些属性会随着消息一起发送）中设置两个值replyTo（一个Queue名称，用于告诉服务器处理完成后将通知我的消息发送到这个Queue中）和correlationId（此次请求的标识号，服务器处理完成后需要将此属性返还，客户端将根据这个id了解哪条请求被成功执行了或执行失败）；</p><p>服务器端收到消息并处理；</p><p>服务器端处理完消息后0，0将生成一条应答消息到replyTo指定的Queue，同时带上correlationId属性；</p><p>客户端之前已订阅replyTo指 定的Queue，从中收到服务器的应答消息后，根据其中的correlationId属性分析哪条请求被执行了，根据执行结果进行后续业务处理。</p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> <strong>总结</strong></h1><p>本文介绍了RabbitMQ中个人认为最重要的概念，充分利用RabbitMQ提供的这些功能就可以处理我们绝大部分的异步业务了。</p>',73);function E(R,q){const n=o("router-link");return u(),c("div",null,[_,e("nav",k,[e("ul",null,[e("li",null,[i(n,{to:"#目录"},{default:t(()=>[a("目录")]),_:1})]),e("li",null,[i(n,{to:"#rabbitmq"},{default:t(()=>[a("RabbitMQ")]),_:1}),e("ul",null,[e("li",null,[i(n,{to:"#简介"},{default:t(()=>[a("简介")]),_:1})])])]),e("li",null,[i(n,{to:"#使用场景"},{default:t(()=>[a("使用场景")]),_:1})]),e("li",null,[i(n,{to:"#connectionfactory、connection、channel"},{default:t(()=>[a("ConnectionFactory、Connection、Channel")]),_:1})]),e("li",null,[i(n,{to:"#queue"},{default:t(()=>[a("Queue")]),_:1})]),e("li",null,[i(n,{to:"#message-确认"},{default:t(()=>[a("Message 确认")]),_:1})]),e("li",null,[i(n,{to:"#message-持久化"},{default:t(()=>[a("Message 持久化")]),_:1})]),e("li",null,[i(n,{to:"#prefetch-count"},{default:t(()=>[a("Prefetch count")]),_:1})]),e("li",null,[i(n,{to:"#exchange"},{default:t(()=>[a("Exchange")]),_:1})]),e("li",null,[i(n,{to:"#routing-key"},{default:t(()=>[a("routing key")]),_:1})]),e("li",null,[i(n,{to:"#binding"},{default:t(()=>[a("Binding")]),_:1})]),e("li",null,[i(n,{to:"#binding-key"},{default:t(()=>[a("Binding key")]),_:1})]),e("li",null,[i(n,{to:"#exchange-types"},{default:t(()=>[a("Exchange Types")]),_:1})]),e("li",null,[i(n,{to:"#rpc"},{default:t(()=>[a("RPC")]),_:1})])])]),M])}const P=r(f,[["render",E],["__file","rabbitmq01.html.vue"]]);export{P as default};
