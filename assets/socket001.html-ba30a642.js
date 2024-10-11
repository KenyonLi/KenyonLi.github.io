import{_ as l,r as t,o as v,c as r,a as e,b as s,w as d,d as n,e as c}from"./app-c1c3c937.js";const a={},u=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),o={class:"table-of-contents"},m=c(`<h2 id="一、-socke-服务端代码" tabindex="-1"><a class="header-anchor" href="#一、-socke-服务端代码" aria-hidden="true">#</a> 一、 socke 服务端代码</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Dlx.RFID.WebAPI.Model;
using log4net;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Dlx.RFID.WebAPI.SocketService
{
    public class SocketTcpService
    {
        private static byte[] result = new byte[1024];
        private static int myProt = 8181;   //端口  
        static Socket serverSocket;
        //private readonly ILogger&lt;SocketTcpService&gt; _logger;
        private ILog log;

        public SocketTcpService()
        {
            log = log4net.LogManager.GetLogger(typeof(SocketTcpService));
        }

        public void Start()
        {

            //服务器IP地址  
            IPAddress ip = IPAddress.Parse(&quot;192.168.1.16&quot;);
            serverSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            serverSocket.Bind(new IPEndPoint(ip, myProt));  //绑定IP地址：端口  
            serverSocket.Listen(10);    //设定最多10个排队连接请求  
            Console.WriteLine(&quot;启动监听{0}成功&quot;, serverSocket.LocalEndPoint.ToString());
            //通过Clientsoket发送数据  
            Thread myThread = new Thread(ListenClientConnect);
            myThread.Start();
            Console.ReadLine();
        }

        /// &lt;summary&gt;  
        /// 监听客户端连接  
        /// &lt;/summary&gt;  
        private void ListenClientConnect()
        {
            while (true)
            {
                Socket clientSocket = serverSocket.Accept();
                // clientSocket.Send(Encoding.UTF8.GetBytes(&quot;Server Say Hello&quot;));
                Thread receiveThread = new Thread(ReceiveMessage);
                receiveThread.Start(clientSocket);
            }
        }

        /// &lt;summary&gt;  
        /// 接收消息  
        /// &lt;/summary&gt;  
        /// &lt;param name=&quot;clientSocket&quot;&gt;&lt;/param&gt;  
        private void ReceiveMessage(object clientSocket)
        {
            Socket myClientSocket = (Socket)clientSocket;
            while (true)
            {
                try
                {
                    //通过clientSocket接收数据  
                    int receiveNumber = myClientSocket.Receive(result);

                    //int packetLen = receiveNumber + 4;
                    //var sendBuffer = BitConverter.GetBytes(receiveNumber);
                    //// int[] sendBuffer = ((byte)receiveNumber).tot;
                    //sendBuffer[0] = (packetLen. &gt;&gt; 24) &amp; 0xff;
                    //sendBuffer[1] = (packetLen &gt;&gt; 16) &amp; 0xff;
                    //sendBuffer[2] = (packetLen &gt;&gt; 8) &amp; 0xff;
                    //sendBuffer[3] =  packetLen &amp; 0xff;
                    // uart_send(sendBuffer, packetLen + 4);

                    string jsonStr = Encoding.UTF8.GetString(result, 4, receiveNumber - 4);

                    var jsonObject = JsonConvert.DeserializeObject&lt;RFIDInfoDto&lt;DataInfoReqDto&gt;&gt;(jsonStr);
                    string jsonStr1 = JsonConvert.SerializeObject(jsonObject);

                    log.Debug($&quot;{myClientSocket.RemoteEndPoint.ToString()} {jsonStr1}&quot;);
                    Console.WriteLine(&quot;接收客户端{0}消息{1}&quot;, myClientSocket.RemoteEndPoint.ToString(), jsonStr);
                    //登录
                    if (jsonObject.cmd == &quot;login&quot;)
                    {
                        var rt = JsonConvert.SerializeObject(new RFIDInfoDto&lt;DataInfoRspDto&gt;
                        {
                            cmd = jsonObject.cmd,
                            data = new DataInfoRspDto
                            {
                                result = &quot;success&quot;,
                                rtc = DateTime.Now.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;),
                                seq = jsonObject.data.seq
                            }
                        });

                        var src = Encoding.UTF8.GetBytes(rt);
                        byte[] bufSend = new byte[src.Length+4];
                        Buffer.BlockCopy(src,0, bufSend, 4,src.Length);
                        myClientSocket.Send(bufSend);
                        Console.WriteLine(&quot;【登录】发送客户端{0}消息{1}&quot;, myClientSocket.RemoteEndPoint.ToString(), rt);
                    }
                    //心跳
                    if (jsonObject.cmd == &quot;tick&quot;) {
                        var rt = JsonConvert.SerializeObject(new RFIDInfoDto&lt;DataInfoReqDto&gt;
                        {
                            cmd = jsonObject.cmd,
                            data = new DataInfoReqDto
                            {
                                apMac = jsonObject.data.apMac,
                                seq = jsonObject.data.seq
                            }
                        }) ;
                        myClientSocket.Send(Encoding.UTF8.GetBytes(rt));
                        Console.WriteLine(&quot;【心跳】发送客户端{0}消息{1}&quot;, myClientSocket.RemoteEndPoint.ToString(), rt);
                    }
                }
                catch (Exception ex)
                {
                    log.Error($&quot;{myClientSocket.RemoteEndPoint.ToString()} {ex}&quot;);
                    Console.WriteLine(ex.Message);
                    myClientSocket.Shutdown(SocketShutdown.Both);
                    myClientSocket.Close();
                   // break;
                }
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-、socke-客户端代码" tabindex="-1"><a class="header-anchor" href="#二-、socke-客户端代码" aria-hidden="true">#</a> 二 、socke 客户端代码</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TestProject1.SocketClentService
{
    public class SocketTcpServiceClient
    {

        private static byte[] result = new byte[1024];
        public static void Start()
        {
            //设定服务器IP地址  
            IPAddress ip = IPAddress.Parse(&quot;192.168.1.16&quot;);
            Socket clientSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            try
            {
                clientSocket.Connect(new IPEndPoint(ip, 8181)); //配置服务器IP与端口  
                Console.WriteLine(&quot;连接服务器成功&quot;);
            }
            catch
            {
                Console.WriteLine(&quot;连接服务器失败，请按回车键退出！&quot;);
                return;
            }
            //通过clientSocket接收数据  
            int receiveLength = clientSocket.Receive(result);
            Console.WriteLine(&quot;接收服务器消息：{0}&quot;, Encoding.ASCII.GetString(result, 0, receiveLength));
            //通过 clientSocket 发送数据  
            for (int i = 0; i &lt; 10; i++)
            {
                try
                {
                    Thread.Sleep(1000);    //等待1秒钟  
                    string sendMessage = &quot;client send Message Hellp&quot; + DateTime.Now;
                    clientSocket.Send(Encoding.ASCII.GetBytes(sendMessage));
                    Console.WriteLine(&quot;向服务器发送消息：{0}&quot; + sendMessage);
                }
                catch
                {
                    clientSocket.Shutdown(SocketShutdown.Both);
                    clientSocket.Close();
                    break;
                }
            }
            Console.WriteLine(&quot;发送完毕，按回车键退出&quot;);
            Console.ReadLine();
        }   
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、c-常见的字节数组-byte-复制方法" tabindex="-1"><a class="header-anchor" href="#三、c-常见的字节数组-byte-复制方法" aria-hidden="true">#</a> 三、C# 常见的字节数组 byte[] 复制方法</h2><div class="custom-container tip"><p class="custom-container-title">C# 常见的字节数组 byte[] 复制方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>byte[] src ={1,2,3,4,5};
byte[] dest = new byte[src.Length];
for(int i=0; i&lt;src.Length; i++)
{
    dest[i] = src[i]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> byte[] src ={1,2,3,4,5};
 byte[] dest = new byte[src.Length];
 Array.Copy(src, dest, src.Length);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>byte[] src ={1,2,3,4,5};
byte[] dest;
dest =(byte[])src.Clone();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>byte[] srcArray = new byte[] { 0x01, 0x02, 0x03, 0x04 };
byte[] dstArray = new byte[srcArray.Length];
Buffer.BlockCopy(srcArray, 0, dstArray, 0, srcArray.Length);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,6);function b(g,S){const i=t("router-link");return v(),r("div",null,[u,e("nav",o,[e("ul",null,[e("li",null,[s(i,{to:"#目录"},{default:d(()=>[n("目录")]),_:1})]),e("li",null,[s(i,{to:"#一、-socke-服务端代码"},{default:d(()=>[n("一、 socke 服务端代码")]),_:1})]),e("li",null,[s(i,{to:"#二-、socke-客户端代码"},{default:d(()=>[n("二 、socke 客户端代码")]),_:1})]),e("li",null,[s(i,{to:"#三、c-常见的字节数组-byte-复制方法"},{default:d(()=>[n("三、C# 常见的字节数组 byte[] 复制方法")]),_:1})])])]),m])}const k=l(a,[["render",b],["__file","socket001.html.vue"]]);export{k as default};
