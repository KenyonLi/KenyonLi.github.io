---
title: 'Net 后台代码模拟浏览器请求 Get、Post、Put的扩展方法'
date: 2023-11-16
tags:
- 'Get、Post、Put'
- 'C#'
categories:
- 'C#'
---

## 目录
[[toc]]

## Net 后台代码模拟浏览器请求 Get、Post、Put的扩展方法

## 一、 HttpClient 类 通过Get 请求 下载文件 
``` c#
HttpClientFactory _httpClientFactory;

var _httpClient = _httpClientFactory.CreateClient();

input.formFilePath  //下载地址
byte[] buff =  _httpClient.GetByteArrayAsync(input.formFilePath).Result;
```
## 二、HttpWebRequest类 通过Get 请求  下载文件

``` c# 
requestUrl // url 地址

 HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri(requestUrl));
            request.Accept = "*/*";
            request.KeepAlive = true;
            request.Timeout = 60 * 1000;//设置30s的超时
            request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36";
            request.Method = "Get";
            request.Credentials = CredentialCache.DefaultCredentials;
            HttpWebResponse response;
            try
            {
                using (response = (HttpWebResponse)request.GetResponse())//发起请求
                {
                    var readStream = response.GetResponseStream();
                    int count = (int)response.ContentLength;
                    int offset = 0;
                    byte[] buff = new byte[count];
                    int i = 0;
                    while (count > 0)
                    {
                        int n = readStream.Read(buff, offset, count);
                        if (n == 0) break;
                        count -= n;
                        offset += n;
                        i++;
                    }
                    #region - test 测试 -
                    /*
                     * test   测试 
                      string filpath = "D:/ggg22.jpg";
                    using (FileStream fs = File.Create(filpath))
                    {
                        fs.Write(buff, 0, buff.Length);
                    }
                      File.Exists(filpath);
                     */
                    #endregion
                    response.Close();
                    readStream.Close();
                    return buff;
                }
            }
            catch (WebException ex)
            {
                throw ex;
            }
```


## 三、Net 后台代码模拟浏览器请求 Get、Post、Put的扩展方法

``` c# 
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace  Infrastructure
{
    public static class HttpClientExtensions
    {
        /// web get 请求
        public static async Task<HttpResponseMessage> GetWithHeadersAsync(this HttpClient httpClient, string requestUrl, Dictionary<string, string> headers)
        {
            using (var request = new HttpRequestMessage(HttpMethod.Get, requestUrl))
            {
                foreach (var header in headers)
                {
                    request.Headers.Add(header.Key, header.Value);
                }
                if (Regex.IsMatch(requestUrl, "^https://"))
                {
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;
                    ServicePointManager.ServerCertificateValidationCallback = CheckValidationResult;
                }
                return await httpClient.SendAsync(request);
            }
        }
        /// <summary>
        /// web post 请求
        /// </summary>
        /// <param name="httpClient"></param>
        /// <param name="requestUrl"></param>
        /// <param name="headers"></param>
        /// <param name="content"></param>
        /// <returns></returns>
        public static async Task<HttpResponseMessage> PostWithHeadersAsync(this HttpClient httpClient, string requestUrl, Action<Dictionary<string, string>> headers, string content)
        {
            using (var request = new HttpRequestMessage(HttpMethod.Post, requestUrl))
            {
                Dictionary<string, string> _headers = new Dictionary<string, string>();
                if (headers != null) { headers(_headers); }

                foreach (var header in _headers)
                {
                    request.Headers.Add(header.Key, header.Value);
                }
                if (!string.IsNullOrWhiteSpace(content))
                {
                    request.Content = new StringContent(content);
                }
                if (Regex.IsMatch(requestUrl, "^https://"))
                {
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;
                    ServicePointManager.ServerCertificateValidationCallback = CheckValidationResult;
                }

                return await httpClient.SendAsync(request);
            }
        }
        /// <summary>
        /// web  put 请求
        /// </summary>
        /// <param name="webRequest"></param>
        /// <param name="requestUrl"></param>
        /// <param name="headers"></param>
        /// <param name="content"></param>
        /// <returns></returns>
        public static string PutWebClientWithHeaderAsync(this HttpClient httpClient, string requestUrl, Dictionary<string, string> headers, byte[] content)
        {

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri(requestUrl, UriKind.RelativeOrAbsolute));
            foreach (var header in headers)
            {
                request.Headers.Add(header.Key, header.Value);
            }

            request.Accept = "*/*";
            request.KeepAlive = true;
            request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0 Gecko/20100101 Firefox/52.0";
            request.Method = "PUT";
            request.ContentLength = content.Length;
            // 9.写入上传请求数据
            using (Stream requestStream = request.GetRequestStream())
            {
                requestStream.Write(content, 0, content.Length);
                requestStream.Close();
            }
            string body = "";
            using (HttpWebResponse webResponse = (HttpWebResponse)request.GetResponse())
            {
                using (StreamReader reader = new StreamReader(webResponse.GetResponseStream(), Encoding.UTF8))
                {
                    body = reader.ReadToEnd();
                    reader.Close();
                }
            }
            return body;
        }

        /// <summary>
        /// web post 请求
        /// </summary>
        /// <param name="webRequest"></param>
        /// <param name="requestUrl"></param>
        /// <param name="headers"></param>
        /// <param name="content"></param>
        /// <returns></returns>
        public static string PostWebClientWithHeaderAsync(this HttpClient httpClient, string requestUrl, Action<Dictionary<string, string>> headers, byte[] content)
        {

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri(requestUrl, UriKind.RelativeOrAbsolute));
            Dictionary<string, string> _headers = new Dictionary<string, string>();
            if (headers != null) { headers(_headers); }

            foreach (var header in _headers)
            {
                request.Headers.Add(header.Key, header.Value);
            }

            request.Accept = "*/*";
            /// request.GetResponse = "";
            request.KeepAlive = true;
            // request.Timeout = 5 * 1000;//5秒
            request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0 Gecko/20100101 Firefox/52.0";
            request.Method = "Post";
            request.ContentLength = content.Length;
            // 9.写入上传请求数据
            using (Stream requestStream = request.GetRequestStream())
            {
                requestStream.Write(content, 0, content.Length);
                requestStream.Close();
            }
            string body = "";
            using (HttpWebResponse webResponse = (HttpWebResponse)request.GetResponse())
            {
                using (StreamReader reader = new StreamReader(webResponse.GetResponseStream(), Encoding.UTF8))
                {
                    body = reader.ReadToEnd();
                    reader.Close();
                }
            }
            return body;
        }

        /// <summary>
        ///  get   下载图片
        /// </summary>
        /// <param name="webRequest"></param>
        /// <param name="requestUrl"></param>
        /// <param name="headers"></param>
        /// <param name="content"></param>
        /// <returns></returns>
        public static byte[] GetDownloadImageBytes(this HttpClient httpClient, string requestUrl)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri(requestUrl));
            request.Accept = "*/*";
            request.KeepAlive = true;
            request.Timeout = 60 * 1000;//设置30s的超时
            request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36";
            request.Method = "Get";
            request.Credentials = CredentialCache.DefaultCredentials;
            HttpWebResponse response;
            try
            {
                using (response = (HttpWebResponse)request.GetResponse())//发起请求
                {
                    var readStream = response.GetResponseStream();
                    int count = (int)response.ContentLength;
                    int offset = 0;
                    byte[] buff = new byte[count];
                    int i = 0;
                    while (count > 0)
                    {
                        int n = readStream.Read(buff, offset, count);
                        if (n == 0) break;
                        count -= n;
                        offset += n;
                        i++;
                    }
                    #region - test 测试 -
                    /*
                     * test   测试 
                      string filpath = "D:/ggg22.jpg";
                    using (FileStream fs = File.Create(filpath))
                    {
                        fs.Write(buff, 0, buff.Length);
                    }
                      File.Exists(filpath);
                     */
                    #endregion
                    response.Close();
                    readStream.Close();
                    return buff;
                }
            }
            catch (WebException ex)
            {
                throw ex;
            }
        }

        static bool CheckValidationResult(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors errors)
        {
            return true;
        }
    }
}
```