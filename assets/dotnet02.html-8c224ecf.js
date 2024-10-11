import{_ as l,r,o as d,c as a,a as e,b as s,w as t,d as n,e as u}from"./app-c1c3c937.js";const v={},c=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),m={class:"table-of-contents"},b=u(`<h2 id="net-后台代码模拟浏览器请求-get、post、put的扩展方法" tabindex="-1"><a class="header-anchor" href="#net-后台代码模拟浏览器请求-get、post、put的扩展方法" aria-hidden="true">#</a> Net 后台代码模拟浏览器请求 Get、Post、Put的扩展方法</h2><h2 id="一、-httpclient-类-通过get-请求-下载文件" tabindex="-1"><a class="header-anchor" href="#一、-httpclient-类-通过get-请求-下载文件" aria-hidden="true">#</a> 一、 HttpClient 类 通过Get 请求 下载文件</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>HttpClientFactory _httpClientFactory;

var _httpClient = _httpClientFactory.CreateClient();

input.formFilePath  //下载地址
byte[] buff =  _httpClient.GetByteArrayAsync(input.formFilePath).Result;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、httpwebrequest类-通过get-请求-下载文件" tabindex="-1"><a class="header-anchor" href="#二、httpwebrequest类-通过get-请求-下载文件" aria-hidden="true">#</a> 二、HttpWebRequest类 通过Get 请求 下载文件</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>requestUrl // url 地址

 HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri(requestUrl));
            request.Accept = &quot;*/*&quot;;
            request.KeepAlive = true;
            request.Timeout = 60 * 1000;//设置30s的超时
            request.UserAgent = &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36&quot;;
            request.Method = &quot;Get&quot;;
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
                    while (count &gt; 0)
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
                      string filpath = &quot;D:/ggg22.jpg&quot;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、net-后台代码模拟浏览器请求-get、post、put的扩展方法" tabindex="-1"><a class="header-anchor" href="#三、net-后台代码模拟浏览器请求-get、post、put的扩展方法" aria-hidden="true">#</a> 三、Net 后台代码模拟浏览器请求 Get、Post、Put的扩展方法</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
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
        public static async Task&lt;HttpResponseMessage&gt; GetWithHeadersAsync(this HttpClient httpClient, string requestUrl, Dictionary&lt;string, string&gt; headers)
        {
            using (var request = new HttpRequestMessage(HttpMethod.Get, requestUrl))
            {
                foreach (var header in headers)
                {
                    request.Headers.Add(header.Key, header.Value);
                }
                if (Regex.IsMatch(requestUrl, &quot;^https://&quot;))
                {
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;
                    ServicePointManager.ServerCertificateValidationCallback = CheckValidationResult;
                }
                return await httpClient.SendAsync(request);
            }
        }
        /// &lt;summary&gt;
        /// web post 请求
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;httpClient&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;requestUrl&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;headers&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;content&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static async Task&lt;HttpResponseMessage&gt; PostWithHeadersAsync(this HttpClient httpClient, string requestUrl, Action&lt;Dictionary&lt;string, string&gt;&gt; headers, string content)
        {
            using (var request = new HttpRequestMessage(HttpMethod.Post, requestUrl))
            {
                Dictionary&lt;string, string&gt; _headers = new Dictionary&lt;string, string&gt;();
                if (headers != null) { headers(_headers); }

                foreach (var header in _headers)
                {
                    request.Headers.Add(header.Key, header.Value);
                }
                if (!string.IsNullOrWhiteSpace(content))
                {
                    request.Content = new StringContent(content);
                }
                if (Regex.IsMatch(requestUrl, &quot;^https://&quot;))
                {
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;
                    ServicePointManager.ServerCertificateValidationCallback = CheckValidationResult;
                }

                return await httpClient.SendAsync(request);
            }
        }
        /// &lt;summary&gt;
        /// web  put 请求
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;webRequest&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;requestUrl&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;headers&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;content&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static string PutWebClientWithHeaderAsync(this HttpClient httpClient, string requestUrl, Dictionary&lt;string, string&gt; headers, byte[] content)
        {

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri(requestUrl, UriKind.RelativeOrAbsolute));
            foreach (var header in headers)
            {
                request.Headers.Add(header.Key, header.Value);
            }

            request.Accept = &quot;*/*&quot;;
            request.KeepAlive = true;
            request.UserAgent = &quot;Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0 Gecko/20100101 Firefox/52.0&quot;;
            request.Method = &quot;PUT&quot;;
            request.ContentLength = content.Length;
            // 9.写入上传请求数据
            using (Stream requestStream = request.GetRequestStream())
            {
                requestStream.Write(content, 0, content.Length);
                requestStream.Close();
            }
            string body = &quot;&quot;;
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

        /// &lt;summary&gt;
        /// web post 请求
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;webRequest&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;requestUrl&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;headers&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;content&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static string PostWebClientWithHeaderAsync(this HttpClient httpClient, string requestUrl, Action&lt;Dictionary&lt;string, string&gt;&gt; headers, byte[] content)
        {

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri(requestUrl, UriKind.RelativeOrAbsolute));
            Dictionary&lt;string, string&gt; _headers = new Dictionary&lt;string, string&gt;();
            if (headers != null) { headers(_headers); }

            foreach (var header in _headers)
            {
                request.Headers.Add(header.Key, header.Value);
            }

            request.Accept = &quot;*/*&quot;;
            /// request.GetResponse = &quot;&quot;;
            request.KeepAlive = true;
            // request.Timeout = 5 * 1000;//5秒
            request.UserAgent = &quot;Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0 Gecko/20100101 Firefox/52.0&quot;;
            request.Method = &quot;Post&quot;;
            request.ContentLength = content.Length;
            // 9.写入上传请求数据
            using (Stream requestStream = request.GetRequestStream())
            {
                requestStream.Write(content, 0, content.Length);
                requestStream.Close();
            }
            string body = &quot;&quot;;
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

        /// &lt;summary&gt;
        ///  get   下载图片
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;webRequest&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;requestUrl&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;headers&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;content&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static byte[] GetDownloadImageBytes(this HttpClient httpClient, string requestUrl)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri(requestUrl));
            request.Accept = &quot;*/*&quot;;
            request.KeepAlive = true;
            request.Timeout = 60 * 1000;//设置30s的超时
            request.UserAgent = &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36&quot;;
            request.Method = &quot;Get&quot;;
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
                    while (count &gt; 0)
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
                      string filpath = &quot;D:/ggg22.jpg&quot;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function o(g,p){const i=r("router-link");return d(),a("div",null,[c,e("nav",m,[e("ul",null,[e("li",null,[s(i,{to:"#目录"},{default:t(()=>[n("目录")]),_:1})]),e("li",null,[s(i,{to:"#net-后台代码模拟浏览器请求-get、post、put的扩展方法"},{default:t(()=>[n("Net 后台代码模拟浏览器请求 Get、Post、Put的扩展方法")]),_:1})]),e("li",null,[s(i,{to:"#一、-httpclient-类-通过get-请求-下载文件"},{default:t(()=>[n("一、 HttpClient 类 通过Get 请求 下载文件")]),_:1})]),e("li",null,[s(i,{to:"#二、httpwebrequest类-通过get-请求-下载文件"},{default:t(()=>[n("二、HttpWebRequest类 通过Get 请求 下载文件")]),_:1})]),e("li",null,[s(i,{to:"#三、net-后台代码模拟浏览器请求-get、post、put的扩展方法"},{default:t(()=>[n("三、Net 后台代码模拟浏览器请求 Get、Post、Put的扩展方法")]),_:1})])])]),b])}const h=l(v,[["render",o],["__file","dotnet02.html.vue"]]);export{h as default};
