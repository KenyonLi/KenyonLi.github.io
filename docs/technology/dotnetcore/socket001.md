---
title: 'socket网络编程'
date: 2023-07-25
tags:
- 'donet core'
- 'C#'
categories:
- 'C#'
---

## 目录
[[toc]]


##  一、 socke 服务端代码

``` C# 
 using System;
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
        //private readonly ILogger<SocketTcpService> _logger;
        private ILog log;

        public SocketTcpService()
        {
            log = log4net.LogManager.GetLogger(typeof(SocketTcpService));
        }

        public void Start()
        {

            //服务器IP地址  
            IPAddress ip = IPAddress.Parse("192.168.1.16");
            serverSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            serverSocket.Bind(new IPEndPoint(ip, myProt));  //绑定IP地址：端口  
            serverSocket.Listen(10);    //设定最多10个排队连接请求  
            Console.WriteLine("启动监听{0}成功", serverSocket.LocalEndPoint.ToString());
            //通过Clientsoket发送数据  
            Thread myThread = new Thread(ListenClientConnect);
            myThread.Start();
            Console.ReadLine();
        }

        /// <summary>  
        /// 监听客户端连接  
        /// </summary>  
        private void ListenClientConnect()
        {
            while (true)
            {
                Socket clientSocket = serverSocket.Accept();
                // clientSocket.Send(Encoding.UTF8.GetBytes("Server Say Hello"));
                Thread receiveThread = new Thread(ReceiveMessage);
                receiveThread.Start(clientSocket);
            }
        }

        /// <summary>  
        /// 接收消息  
        /// </summary>  
        /// <param name="clientSocket"></param>  
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
                    //sendBuffer[0] = (packetLen. >> 24) & 0xff;
                    //sendBuffer[1] = (packetLen >> 16) & 0xff;
                    //sendBuffer[2] = (packetLen >> 8) & 0xff;
                    //sendBuffer[3] =  packetLen & 0xff;
                    // uart_send(sendBuffer, packetLen + 4);

                    string jsonStr = Encoding.UTF8.GetString(result, 4, receiveNumber - 4);

                    var jsonObject = JsonConvert.DeserializeObject<RFIDInfoDto<DataInfoReqDto>>(jsonStr);
                    string jsonStr1 = JsonConvert.SerializeObject(jsonObject);

                    log.Debug($"{myClientSocket.RemoteEndPoint.ToString()} {jsonStr1}");
                    Console.WriteLine("接收客户端{0}消息{1}", myClientSocket.RemoteEndPoint.ToString(), jsonStr);
                    //登录
                    if (jsonObject.cmd == "login")
                    {
                        var rt = JsonConvert.SerializeObject(new RFIDInfoDto<DataInfoRspDto>
                        {
                            cmd = jsonObject.cmd,
                            data = new DataInfoRspDto
                            {
                                result = "success",
                                rtc = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                                seq = jsonObject.data.seq
                            }
                        });

                        var src = Encoding.UTF8.GetBytes(rt);
                        byte[] bufSend = new byte[src.Length+4];
                        Buffer.BlockCopy(src,0, bufSend, 4,src.Length);
                        myClientSocket.Send(bufSend);
                        Console.WriteLine("【登录】发送客户端{0}消息{1}", myClientSocket.RemoteEndPoint.ToString(), rt);
                    }
                    //心跳
                    if (jsonObject.cmd == "tick") {
                        var rt = JsonConvert.SerializeObject(new RFIDInfoDto<DataInfoReqDto>
                        {
                            cmd = jsonObject.cmd,
                            data = new DataInfoReqDto
                            {
                                apMac = jsonObject.data.apMac,
                                seq = jsonObject.data.seq
                            }
                        }) ;
                        myClientSocket.Send(Encoding.UTF8.GetBytes(rt));
                        Console.WriteLine("【心跳】发送客户端{0}消息{1}", myClientSocket.RemoteEndPoint.ToString(), rt);
                    }
                }
                catch (Exception ex)
                {
                    log.Error($"{myClientSocket.RemoteEndPoint.ToString()} {ex}");
                    Console.WriteLine(ex.Message);
                    myClientSocket.Shutdown(SocketShutdown.Both);
                    myClientSocket.Close();
                   // break;
                }
            }
        }
    }
}

```

## 二 、socke 客户端代码

``` C# 
using System;
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
            IPAddress ip = IPAddress.Parse("192.168.1.16");
            Socket clientSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            try
            {
                clientSocket.Connect(new IPEndPoint(ip, 8181)); //配置服务器IP与端口  
                Console.WriteLine("连接服务器成功");
            }
            catch
            {
                Console.WriteLine("连接服务器失败，请按回车键退出！");
                return;
            }
            //通过clientSocket接收数据  
            int receiveLength = clientSocket.Receive(result);
            Console.WriteLine("接收服务器消息：{0}", Encoding.ASCII.GetString(result, 0, receiveLength));
            //通过 clientSocket 发送数据  
            for (int i = 0; i < 10; i++)
            {
                try
                {
                    Thread.Sleep(1000);    //等待1秒钟  
                    string sendMessage = "client send Message Hellp" + DateTime.Now;
                    clientSocket.Send(Encoding.ASCII.GetBytes(sendMessage));
                    Console.WriteLine("向服务器发送消息：{0}" + sendMessage);
                }
                catch
                {
                    clientSocket.Shutdown(SocketShutdown.Both);
                    clientSocket.Close();
                    break;
                }
            }
            Console.WriteLine("发送完毕，按回车键退出");
            Console.ReadLine();
        }   
    }
}

```


## 三、C# 常见的字节数组 byte[] 复制方法

::: tip C# 常见的字节数组 byte[] 复制方法
```C#
byte[] src ={1,2,3,4,5};
byte[] dest = new byte[src.Length];
for(int i=0; i<src.Length; i++)
{
    dest[i] = src[i]
}
```
``` C#
 byte[] src ={1,2,3,4,5};
 byte[] dest = new byte[src.Length];
 Array.Copy(src, dest, src.Length);
```
``` C#
byte[] src ={1,2,3,4,5};
byte[] dest;
dest =(byte[])src.Clone();
```
``` c#
byte[] srcArray = new byte[] { 0x01, 0x02, 0x03, 0x04 };
byte[] dstArray = new byte[srcArray.Length];
Buffer.BlockCopy(srcArray, 0, dstArray, 0, srcArray.Length);
```
::: 