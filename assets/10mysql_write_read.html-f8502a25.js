import{_ as o,r,o as p,c,a as s,b as a,w as l,d as n,e as t}from"./app-c1c3c937.js";const d="/images/mysql/10mysql_write_read/mysql_write_read_0001.png",u={},v=s("h2",{id:"目录",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),m={class:"table-of-contents"},b=s("h2",{id:"mysql-8-0-主从部署-读写分离",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mysql-8-0-主从部署-读写分离","aria-hidden":"true"},"#"),n(" Mysql 8.0 主从部署-读写分离")],-1),k={href:"https://blog.csdn.net/Cairo_A/article/details/130629394",target:"_blank",rel:"noopener noreferrer"},_=s("br",null,null,-1),g={href:"https://blog.csdn.net/u013618714/article/details/131558487",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.likecs.com/show-203959282.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="基于二进制日志文件位置" tabindex="-1"><a class="header-anchor" href="#基于二进制日志文件位置" aria-hidden="true">#</a> 基于二进制日志文件位置</h2><h3 id="主服务器-192-168-3-63" tabindex="-1"><a class="header-anchor" href="#主服务器-192-168-3-63" aria-hidden="true">#</a> 主服务器 192.168.3.63</h3><p>1、创建一个同步账号 <code>db_sync</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> create user <span class="token string">&#39;db_sync&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;db_sync@123&#39;</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.03</span> sec<span class="token punctuation">)</span>
<span class="token comment">#授权  </span>
mysql<span class="token operator">&gt;</span> grant replication slave on *.*to <span class="token string">&#39;db_sync&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
<span class="token comment">#刷权限 </span>
ysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在主服务器上执行以下命令获取当前二进制日志文件的名称和位置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show master status<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.1 记录输出中的File和Position值，后续在从服务器上使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show master status<span class="token punctuation">;</span>
+---------------+----------+--------------+------------------+-------------------+
<span class="token operator">|</span> File          <span class="token operator">|</span> Position <span class="token operator">|</span> Binlog_Do_DB <span class="token operator">|</span> Binlog_Ignore_DB <span class="token operator">|</span> Executed_Gtid_Set <span class="token operator">|</span>
+---------------+----------+--------------+------------------+-------------------+
<span class="token operator">|</span> binlog.000002 <span class="token operator">|</span>      <span class="token number">879</span> <span class="token operator">|</span>              <span class="token operator">|</span>                  <span class="token operator">|</span>                   <span class="token operator">|</span>
+---------------+----------+--------------+------------------+-------------------+
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、配置主服务器 mysql-server.cnf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span>  <span class="token operator">&gt;&gt;</span> /etc/my.cnf.d/mysql-server.cnf <span class="token operator">&lt;&lt;</span><span class="token string">EOF 
#服务器 id，随意，但要唯一
server-id = 1  
#binlog刷盘策略
sync_binlog=1
#二进制文件存放路径
log-bin = mysql-bin 
#参数用于排除自带的数据库。  
binlog-ignore-db = mysql 
binlog-ignore-db = information_schema
binlog-ignore-db = performance_schema
#二进制日志格式，建议使用ROW格式以获得更好的兼容性和可靠性。
binlog-format = ROW 
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.1 重启mysql 服务器，配置才能生效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysqld 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="次服务器192-168-3-64" tabindex="-1"><a class="header-anchor" href="#次服务器192-168-3-64" aria-hidden="true">#</a> 次服务器192.168.3.64</h3><p>1、修改 <code>mysql-server.cnf</code> 配置 设置 <code>server-id</code> 不能重复。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span>/etc/my.cnf.d/mysql-server.cnf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
server-id = 2
#中继日志文件的名称，用于从主服务器接收二进制日志事件。
relay-log = mysql-relay-bin 
#从服务器的二进制日志文件的名称。
log_bin = mysql-bin 
#不同步相关的库
replicate-ignore-db = mysql 
replicate-ignore-db = information_schema
replicate-ignore-db = performance_schema
EOF</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启mysql 服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、登录 mysql 配置次服务参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重置所有的复制关系。</span>
mysql<span class="token operator">&gt;</span> reset slave all<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected
Time: <span class="token number">0</span>.056s

mysql<span class="token operator">&gt;</span> stop slave<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
<span class="token comment">## 配置主服务 信息</span>
mysql<span class="token operator">&gt;</span> change master to  master_host <span class="token operator">=</span> <span class="token string">&#39;192.168.3.63&#39;</span>, master_user <span class="token operator">=</span> <span class="token string">&#39;db_sync&#39;</span>, master_password <span class="token operator">=</span> <span class="token string">&#39;skceDB@123&#39;</span>,master_log_file <span class="token operator">=</span> <span class="token string">&#39;binlog.000002&#39;</span>, master_log_pos <span class="token operator">=</span> <span class="token number">1341</span>, <span class="token assign-left variable">get_master_public_key</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">9</span> warnings <span class="token punctuation">(</span><span class="token number">0.05</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> start slave<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.04</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.1 查询 同步状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show slave status<span class="token punctuation">\\</span>G<span class="token punctuation">;</span>
*************************** <span class="token number">1</span>. row ***************************
               Slave_IO_State: 
                  Master_Host: <span class="token number">192.168</span>.3.63
                  Master_User: db_sync
                  Master_Port: <span class="token number">3306</span>
                Connect_Retry: <span class="token number">60</span>
              Master_Log_File: binlog.000002
          Read_Master_Log_Pos: <span class="token number">1341</span>
               Relay_Log_File: localhost-relay-bin.000001
                Relay_Log_Pos: <span class="token number">4</span>
        Relay_Master_Log_File: binlog.000002
             Slave_IO_Running: No
            Slave_SQL_Running: Yes
              Replicate_Do_DB: 
          Replicate_Ignore_DB: 
           Replicate_Do_Table: 
       Replicate_Ignore_Table: 
      Replicate_Wild_Do_Table: 
  Replicate_Wild_Ignore_Table: 
                   Last_Errno: <span class="token number">0</span>
                   Last_Error: 
                 Skip_Counter: <span class="token number">0</span>
          Exec_Master_Log_Pos: <span class="token number">1341</span>
              Relay_Log_Space: <span class="token number">157</span>
              Until_Condition: None
               Until_Log_File: 
                Until_Log_Pos: <span class="token number">0</span>
           Master_SSL_Allowed: No
           Master_SSL_CA_File: 
           Master_SSL_CA_Path: 
              Master_SSL_Cert: 
            Master_SSL_Cipher: 
               Master_SSL_Key: 
        Seconds_Behind_Master: NULL
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: <span class="token number">13117</span>
                Last_IO_Error: Fatal error: The slave I/O thread stops because master and slave have equal MySQL server ids<span class="token punctuation">;</span> these ids must be different <span class="token keyword">for</span> replication to work <span class="token punctuation">(</span>or the --replicate-same-server-id option must be used on slave but this does not always <span class="token function">make</span> sense<span class="token punctuation">;</span> please check the manual before using it<span class="token punctuation">)</span>.
               Last_SQL_Errno: <span class="token number">0</span>
               Last_SQL_Error: 
  Replicate_Ignore_Server_Ids: 
             Master_Server_Id: <span class="token number">1</span>
                  Master_UUID: 
             Master_Info_File: mysql.slave_master_info
                    SQL_Delay: <span class="token number">0</span>
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State: Replica has <span class="token builtin class-name">read</span> all relay log<span class="token punctuation">;</span> waiting <span class="token keyword">for</span> <span class="token function">more</span> updates
           Master_Retry_Count: <span class="token number">86400</span>
                  Master_Bind: 
      Last_IO_Error_Timestamp: <span class="token number">230816</span> <span class="token number">18</span>:43:21
     Last_SQL_Error_Timestamp: 
               Master_SSL_Crl: 
           Master_SSL_Crlpath: 
           Retrieved_Gtid_Set: 
            Executed_Gtid_Set: 
                Auto_Position: <span class="token number">0</span>
         Replicate_Rewrite_DB: 
                 Channel_Name: 
           Master_TLS_Version: 
       Master_public_key_path: 
        Get_master_public_key: <span class="token number">1</span>
            Network_Namespace: 
<span class="token number">1</span> row <span class="token keyword">in</span> set, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

ERROR: 
No query specified
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果失败了<br><code> Slave_IO_Running: No</code><br><code>Slave_SQL_Running: Yes</code></p><div class="custom-container tip"><p class="custom-container-title">Last_IO_Error</p><p>Last_IO_Error: Fatal error: The slave I/O thread stops because master and slave have equal MySQL server ids; these ids must be different for replication to work (or the --replicate-same-server-id option must be used on slave but this does not always make sense; please check the manual before using it).</p></div><p>什么意思呢，就是 server_id 重复了（这里不是server_uuid,也排查过uuid没有重复）<br> 主和从服务的server_id 的值相同的，证明一点，之前my.cnf配置server_id值没有生效, 需要在<code>mysql-server.cnf</code> 配置 才行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;%server_id%&#39;</span><span class="token punctuation">;</span>     
+----------------+-------+
<span class="token operator">|</span> Variable_name  <span class="token operator">|</span> Value <span class="token operator">|</span>
+----------------+-------+
<span class="token operator">|</span> server_id      <span class="token operator">|</span> <span class="token number">1</span>     <span class="token operator">|</span>
<span class="token operator">|</span> server_id_bits <span class="token operator">|</span> <span class="token number">32</span>    <span class="token operator">|</span>
+----------------+-------+
<span class="token number">2</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用脚本修改了之后，就可以。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;%server_id%&#39;</span><span class="token punctuation">;</span>
+----------------+-------+
<span class="token operator">|</span> Variable_name  <span class="token operator">|</span> Value <span class="token operator">|</span>
+----------------+-------+
<span class="token operator">|</span> server_id      <span class="token operator">|</span> <span class="token number">2</span>     <span class="token operator">|</span>
<span class="token operator">|</span> server_id_bits <span class="token operator">|</span> <span class="token number">32</span>    <span class="token operator">|</span>
+----------------+-------+
<span class="token number">2</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> stop slave <span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> start slave<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.04</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> show slave status<span class="token punctuation">\\</span>G<span class="token punctuation">;</span>
*************************** <span class="token number">1</span>. row ***************************
               Slave_IO_State: Waiting <span class="token keyword">for</span> <span class="token builtin class-name">source</span> to send event
                  Master_Host: <span class="token number">192.168</span>.3.63
                  Master_User: db_sync
                  Master_Port: <span class="token number">3306</span>
                Connect_Retry: <span class="token number">60</span>
              Master_Log_File: binlog.000004
          Read_Master_Log_Pos: <span class="token number">157</span>
               Relay_Log_File: localhost-relay-bin.000005
                Relay_Log_Pos: <span class="token number">367</span>
        Relay_Master_Log_File: binlog.000004
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB: 
          Replicate_Ignore_DB: 
           Replicate_Do_Table: 
       Replicate_Ignore_Table: 
      Replicate_Wild_Do_Table: 
  Replicate_Wild_Ignore_Table: 
                   Last_Errno: <span class="token number">0</span>
                   Last_Error: 
                 Skip_Counter: <span class="token number">0</span>
          Exec_Master_Log_Pos: <span class="token number">157</span>
              Relay_Log_Space: <span class="token number">791</span>
              Until_Condition: None
               Until_Log_File: 
                Until_Log_Pos: <span class="token number">0</span>
           Master_SSL_Allowed: No
           Master_SSL_CA_File: 
           Master_SSL_CA_Path: 
              Master_SSL_Cert: 
            Master_SSL_Cipher: 
               Master_SSL_Key: 
        Seconds_Behind_Master: <span class="token number">0</span>
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: <span class="token number">0</span>
                Last_IO_Error: 
               Last_SQL_Errno: <span class="token number">0</span>
               Last_SQL_Error: 
  Replicate_Ignore_Server_Ids: 
             Master_Server_Id: <span class="token number">1</span>
                  Master_UUID: 278d0d30-3b11-11ee-b4c3-080027790eb7
             Master_Info_File: mysql.slave_master_info
                    SQL_Delay: <span class="token number">0</span>
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State: Replica has <span class="token builtin class-name">read</span> all relay log<span class="token punctuation">;</span> waiting <span class="token keyword">for</span> <span class="token function">more</span> updates
           Master_Retry_Count: <span class="token number">86400</span>
                  Master_Bind: 
      Last_IO_Error_Timestamp: 
     Last_SQL_Error_Timestamp: 
               Master_SSL_Crl: 
           Master_SSL_Crlpath: 
           Retrieved_Gtid_Set: 
            Executed_Gtid_Set: 
                Auto_Position: <span class="token number">0</span>
         Replicate_Rewrite_DB: 
                 Channel_Name: 
           Master_TLS_Version: 
       Master_public_key_path: 
        Get_master_public_key: <span class="token number">1</span>
            Network_Namespace: 
<span class="token number">1</span> row <span class="token keyword">in</span> set, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

ERROR: 
No query specified

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="修改mysqlserver-id方法" tabindex="-1"><a class="header-anchor" href="#修改mysqlserver-id方法" aria-hidden="true">#</a> 修改MySQLserver-id方法</h3><div class="custom-container tip"><p class="custom-container-title">mysql 同步异常</p><p>Fatal error: The slave I/O thread stops because master and slave have equal MySQL server ids; these ids must be different for replication to work (or the --replicate-same-server-id option must be used on slave but this does not always make sense; please check the manual before using it).</p></div><p>解决方法<br> 修改MySQLserver-id方法如下：<br> 1、使用root用户登录MySQL数据库。<br> 2、运行以下命令查看MySQL当前的server-id的值：<code>show variables like &#39;server_id&#39; 3、运行以下命令修改MySQL的server-id值：</code>set global server_id=新的server-id值。<br> 4、再次运行<code>show variables like &#39;%server_id%&#39;。</code>验证MySQL的server-id是否已经修改成功</p><h5 id="注意-重启mysql-数据库后-这些配置都失效-如果需要持久-需要配置到my-cnf文件中。" tabindex="-1"><a class="header-anchor" href="#注意-重启mysql-数据库后-这些配置都失效-如果需要持久-需要配置到my-cnf文件中。" aria-hidden="true">#</a> 注意：重启mysql 数据库后，这些配置都失效，如果需要持久，需要配置到my.cnf文件中。</h5><h3 id="mysql读写分离原理" tabindex="-1"><a class="header-anchor" href="#mysql读写分离原理" aria-hidden="true">#</a> Mysql读写分离原理</h3><p>条件</p><blockquote><p>1、binlog<br> 2、relaylog<br><img src="`+d+`" alt="Alt text"></p></blockquote><h3 id="主从复制" tabindex="-1"><a class="header-anchor" href="#主从复制" aria-hidden="true">#</a> 主从复制</h3><p>主从复制（Master-Slave Replication）是一种常见的数据库复制技术，用于在多个数据库服务器之间实现数据的同步复制。在主从复制中，一个数据库服务器充当主服务器（Master），负责接收和处理所有的写操作，而其他的数据库服务器充当从服务器（Slave），负责接收和执行主服务器上的写操作所生成的日志，从而实现数据的同步复制。</p><p>主从复制的工作流程大致如下：</p><p>主服务器接收到写操作后，将其记录到二进制日志（Binary Log）中。<br> 从服务器定期连接主服务器，并请求获取主服务器上的二进制日志。<br> 主服务器将二进制日志发送给从服务器，并将其应用到从服务器上，使得从服务器上的数据与主服务器保持一致。<br> 当主服务器出现故障或者网络中断时，从服务器可以接管主服务器的角色，成为新的主服务器，从而保证系统的高可用性和容错性。<br> 通过主从复制，可以实现以下好处：</p><p>提高系统的可扩展性和读写分离能力：读操作可以分摊到多个从服务器上进行处理，从而提高系统的并发能力。<br> 提高系统的可用性和容错性：当主服务器出现故障时，可以快速切换到从服务器上继续提供服务。<br> 数据备份：从服务器上存储了主服务器上的所有数据，可以作为主服务器数据的备份，以防止数据丢失。<br> 需要注意的是，主从复制并不能保证数据的强一致性，只能保证数据的最终一致性。在主从复制环境下，主服务器上的写操作会异步地传播到从服务器上，存在一定的延迟。因此，在读操作之后进行写操作时，可能会读取到旧数据。如果需要实现强一致性，可以考虑其他的复制技术，如主主复制（Master-Master Replication）或者分布式事务等。</p><h3 id="mysql读写分离分离异步同步模式" tabindex="-1"><a class="header-anchor" href="#mysql读写分离分离异步同步模式" aria-hidden="true">#</a> Mysql读写分离分离异步同步模式</h3><p>默认为异步同步模式。<br> 异步同步模式会有缺陷，如果slave宕机，会导致数据不一致性风险。<br> 需要使用同步模式进行同步</p><h3 id="mysql读写分离分离半同步模式" tabindex="-1"><a class="header-anchor" href="#mysql读写分离分离半同步模式" aria-hidden="true">#</a> Mysql读写分离分离半同步模式</h3><p>条件</p><blockquote><p>1、 <code>rpl_semi_sync_master</code> (主服务器)<br> 2、 <code>rpl_semi_sync_slave</code> （次服务器）</p></blockquote><p>步骤：</p><blockquote><p>1、先查询mysql是否可以安装版本</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> @@have_dynamic_loading<span class="token punctuation">;</span>
+------------------------+
<span class="token operator">|</span> @@have_dynamic_loading <span class="token operator">|</span>
+------------------------+
<span class="token operator">|</span> YES                    <span class="token operator">|</span>
+------------------------+
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示查询结果为<code>YES</code> 可以安装</p><blockquote><h4 id="_2、在主服务器的mysql中安装rpl-semi-sync-master-插件" tabindex="-1"><a class="header-anchor" href="#_2、在主服务器的mysql中安装rpl-semi-sync-master-插件" aria-hidden="true">#</a> 2、在主服务器的Mysql中安装<code>rpl_semi_sync_master</code> 插件</h4><p>在 192.168.3.63 服务器的mysql 安装</p><blockquote><p>2.1 先在<code>master</code> 节点上安装 <code>rpl_semi_sync_master</code></p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token function">install</span> plugin rpl_semi_sync_master SONAME <span class="token string">&#39;semisync_master.so&#39;</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>2.2 然后查询插件是否安装成功</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;rpl_semi%&#39;</span><span class="token punctuation">;</span>
+-------------------------------------------+------------+
<span class="token operator">|</span> Variable_name                             <span class="token operator">|</span> Value      <span class="token operator">|</span>
+-------------------------------------------+------------+
<span class="token operator">|</span> rpl_semi_sync_master_enabled              <span class="token operator">|</span> OFF        <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_timeout              <span class="token operator">|</span> <span class="token number">10000</span>      <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_trace_level          <span class="token operator">|</span> <span class="token number">32</span>         <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_wait_for_slave_count <span class="token operator">|</span> <span class="token number">1</span>          <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_wait_no_slave        <span class="token operator">|</span> ON         <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_wait_point           <span class="token operator">|</span> AFTER_SYNC <span class="token operator">|</span>
+-------------------------------------------+------------+
<span class="token number">6</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>2.3然后开启<code>master</code>复制</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">rpl_semi_sync_master_enabled</span><span class="token operator">=</span>ON<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>2.4 然后查询</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;rpl_semi%&#39;</span><span class="token punctuation">;</span>
+-------------------------------------------+------------+
<span class="token operator">|</span> Variable_name                             <span class="token operator">|</span> Value      <span class="token operator">|</span>
+-------------------------------------------+------------+
<span class="token operator">|</span> rpl_semi_sync_master_enabled              <span class="token operator">|</span> ON         <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_timeout              <span class="token operator">|</span> <span class="token number">10000</span>      <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_trace_level          <span class="token operator">|</span> <span class="token number">32</span>         <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_wait_for_slave_count <span class="token operator">|</span> <span class="token number">1</span>          <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_wait_no_slave        <span class="token operator">|</span> ON         <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_master_wait_point           <span class="token operator">|</span> AFTER_SYNC <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_slave_enabled               <span class="token operator">|</span> ON         <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_slave_trace_level           <span class="token operator">|</span> <span class="token number">32</span>         <span class="token operator">|</span>
+-------------------------------------------+------------+
<span class="token number">8</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为<code>ON</code> 设置成功</p><blockquote><h4 id="_3、在次服务器的mysql中安装rpl-semi-sync-slave插件" tabindex="-1"><a class="header-anchor" href="#_3、在次服务器的mysql中安装rpl-semi-sync-slave插件" aria-hidden="true">#</a> 3、在次服务器的Mysql中安装<code>rpl_semi_sync_slave</code>插件</h4><p>在 192.168.3.64 服务器的mysql 安装</p><blockquote><p>3.1 先在<code>master</code> 节点上安装 <code>rpl_semi_sync_slave</code></p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token function">install</span> plugin rpl_semi_sync_slave SONAME <span class="token string">&#39;semisync_slave.so&#39;</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.02</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>3.2 然后查询插件是否安装成功</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show global variables like <span class="token string">&#39;rpl_semi%&#39;</span><span class="token punctuation">;</span>
+---------------------------------+-------+
<span class="token operator">|</span> Variable_name                   <span class="token operator">|</span> Value <span class="token operator">|</span>
+---------------------------------+-------+
<span class="token operator">|</span> rpl_semi_sync_slave_enabled     <span class="token operator">|</span> OFF   <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_slave_trace_level <span class="token operator">|</span> <span class="token number">32</span>    <span class="token operator">|</span>
+---------------------------------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>3.3 然后开启slaver复制</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">rpl_semi_sync_slave_enabled</span><span class="token operator">=</span>ON<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>3.4 查看是否设置成功，如<code>NO</code>成功。</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show global variables like <span class="token string">&#39;rpl_semi%&#39;</span><span class="token punctuation">;</span>
+---------------------------------+-------+
<span class="token operator">|</span> Variable_name                   <span class="token operator">|</span> Value <span class="token operator">|</span>
+---------------------------------+-------+
<span class="token operator">|</span> rpl_semi_sync_slave_enabled     <span class="token operator">|</span> ON    <span class="token operator">|</span>
<span class="token operator">|</span> rpl_semi_sync_slave_trace_level <span class="token operator">|</span> <span class="token number">32</span>    <span class="token operator">|</span>
+---------------------------------+-------+
<span class="token number">2</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>3.5 然后开启半同步复制模式</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> stop slave io_thread<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.02</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> start slave io_thread<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>3.6 查询看slave 状态 是否成功 ,如 <code>Slave_IO_Running</code> 和 <code>Slave_SQL_Running</code> 为 <code>YES</code> ,表明设置成功。</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show slave status<span class="token punctuation">\\</span>G<span class="token punctuation">;</span>
*************************** <span class="token number">1</span>. row ***************************
               Slave_IO_State: Waiting <span class="token keyword">for</span> <span class="token builtin class-name">source</span> to send event
                  Master_Host: <span class="token number">192.168</span>.3.63
                  Master_User: db_sync
                  Master_Port: <span class="token number">3306</span>
                Connect_Retry: <span class="token number">60</span>
              Master_Log_File: binlog.000004
          Read_Master_Log_Pos: <span class="token number">1492</span>
               Relay_Log_File: localhost-relay-bin.000003
                Relay_Log_Pos: <span class="token number">323</span>
        Relay_Master_Log_File: binlog.000004
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
            <span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slave-io-running-no-失败原因" tabindex="-1"><a class="header-anchor" href="#slave-io-running-no-失败原因" aria-hidden="true">#</a> Slave_IO_Running: NO 失败原因：</h3><p>Slave_io_running 如果为no或者connecting</p><ul><li><p>关闭防火墙</p></li><li><p>主从Server_id一致</p></li><li><p>数据库目录(data)目录下 auto.cnf一致</p></li><li><p>主服务器mysql权限</p></li><li><p>复制账户用户名或密码错误</p></li><li><p>网络不通</p></li><li><p>Mysql8中存在：创建用户时密码加密规则。</p></li></ul><h3 id="slave-sql-running如果为no" tabindex="-1"><a class="header-anchor" href="#slave-sql-running如果为no" aria-hidden="true">#</a> Slave_SQL_RUNNING如果为NO</h3><ul><li>表示主服务器二进制名称不对或者读取数据便宜位置不对</li></ul><p>解决方式：从新导入SQL文件，并且准确记录MASTER_LOG_FILE与MASTER_LOG_POS的值</p><h2 id="基于gtid-实现主从部署实现读写分离" tabindex="-1"><a class="header-anchor" href="#基于gtid-实现主从部署实现读写分离" aria-hidden="true">#</a> 基于GTID 实现主从部署实现读写分离</h2><h3 id="什么是gtid同步" tabindex="-1"><a class="header-anchor" href="#什么是gtid同步" aria-hidden="true">#</a> 什么是GTID同步</h3><p>GTID是一种全局事务ID，它是在master上已经提交的事务，slave直接根据该ID进行复制操作。该操作替代了binary log + postion的方式。使得主从复制的配置操作更加简单。</p><blockquote><p>该模式需要MySQL&gt;=5.6版本。<br> GTID（Global Transaction Identifier）是MySQL数据库中用于标识全局事务的唯一标识符。它是在MySQL 5.6版本中引入的一项重要特性。</p></blockquote><p>在传统的复制环境中，MySQL使用二进制日志文件和位置（Binary Log File and Position）来标识主从复制中的事务。然而，当涉及到主从切换、故障恢复或者拓扑结构变更时，使用二进制日志文件和位置来定位事务变得复杂而困难。</p><p>GTID通过引入全局唯一的事务标识符，解决了传统复制环境中的一些问题。每个事务都会被分配一个全局唯一的GTID，无论它在哪个数据库服务器上执行。GTID由两部分组成：源ID和事务ID。源ID标识数据库服务器，事务ID则标识特定的事务。</p><p>使用GTID的主要优势包括：</p><p>简化主从切换：当需要进行主从切换时，无需手动记录和配置二进制日志文件和位置，而只需基于GTID进行配置。<br> 简化故障恢复：在发生故障后，可以根据GTID来确定故障前后的数据一致性，简化故障恢复过程。<br> 简化拓扑结构变更：当需要进行拓扑结构变更时，使用GTID可以更轻松地进行配置和管理。<br> 要启用GTID，需要在MySQL配置文件中进行相应的设置，并在主服务器和从服务器上进行配置和同步。一旦启用了GTID，它将成为主从复制中事务标识的主要方式。</p><p>需要注意的是，GTID并不是适用于所有场景的解决方案。在某些特定的情况下，如异构复制、多主复制或者特殊的拓扑结构等，可能需要考虑其他的复制技术或方案。</p><h3 id="gtid组成部分" tabindex="-1"><a class="header-anchor" href="#gtid组成部分" aria-hidden="true">#</a> GTID组成部分</h3><p>GTID = server-id + transaction-id组成。server-id不是MySQL配置文件中id，而是每一个MySQL服务在启动时，都会生成一个全局随机唯一的ID。transaction-id则是事务的ID，创建事务是会自动生成一个ID。</p><h3 id="配置流程" tabindex="-1"><a class="header-anchor" href="#配置流程" aria-hidden="true">#</a> 配置流程</h3><p>1、 master的配置文件增加如下配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server_id               <span class="token operator">=</span> <span class="token number">1</span>
log_bin                 <span class="token operator">=</span> ON
binlog_format           <span class="token operator">=</span> ROW
gtid_mode				<span class="token operator">=</span> ON
enforce_gtid_consistency <span class="token operator">=</span> ON

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、slave的配置文件增加如下配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server_id               <span class="token operator">=</span> <span class="token number">2</span>
log_bin                 <span class="token operator">=</span> mysql-bin
binlog_format           <span class="token operator">=</span> ROW
gtid_mode				<span class="token operator">=</span> ON
enforce_gtid_consistency <span class="token operator">=</span> ON
log_slave_updates		<span class="token operator">=</span> ON

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、配置好之后，一定记得重启master和salve服务。重启好之后，登录master，使用show master status;查看一下GTID。会看到如下的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show master status<span class="token punctuation">;</span>
+-----------+----------+--------------+------------------+------------------------------------------+
<span class="token operator">|</span> File      <span class="token operator">|</span> Position <span class="token operator">|</span> Binlog_Do_DB <span class="token operator">|</span> Binlog_Ignore_DB <span class="token operator">|</span> Executed_Gtid_Set                        <span class="token operator">|</span>
+-----------+----------+--------------+------------------+------------------------------------------+
<span class="token operator">|</span> ON.000005 <span class="token operator">|</span> <span class="token number">729</span>      <span class="token operator">|</span>              <span class="token operator">|</span>                  <span class="token operator">|</span> a9cf78c4-257f-13eb-94e0-0242ac120007:1-2 <span class="token operator">|</span>
+-----------+----------+--------------+------------------+------------------------------------------+
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span>
Time: <span class="token number">0</span>.011s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、slave服务建立连接关系。下面的操作都是在slave节点进行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重置所有的复制关系。</span>
mysql<span class="token operator">&gt;</span> reset slave all<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected
Time: <span class="token number">0</span>.056s


<span class="token comment"># 查看主从复制状态，发现没有任何信息了，则表示重置成功了。</span>
mysql<span class="token operator">&gt;</span> show slave status<span class="token punctuation">\\</span>G<span class="token punctuation">;</span>
<span class="token number">0</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span>
Time: <span class="token number">0</span>.005s


<span class="token comment"># 设置master信息。</span>
change master to <span class="token assign-left variable">master_host</span><span class="token operator">=</span><span class="token string">&#39;192.168.3.63&#39;</span>,master_port<span class="token operator">=</span><span class="token number">3306</span>,master_user<span class="token operator">=</span><span class="token string">&#39;db_sync&#39;</span>,master_password<span class="token operator">=</span><span class="token string">&#39;skceDB@123&#39;</span>,master_auto_position<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected
Time: <span class="token number">0</span>.048s


<span class="token comment"># 启动复制。</span>
start slave<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> start slave<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected
Time: <span class="token number">0</span>.007s


<span class="token comment"># 查看复制状态。</span>
mysql<span class="token operator">&gt;</span> stop slave io_thread<span class="token punctuation">;</span>
***************************<span class="token punctuation">[</span> <span class="token number">1</span>. row <span class="token punctuation">]</span>***************************
Slave_IO_State                <span class="token operator">|</span> Waiting <span class="token keyword">for</span> master to send event
Master_Host                   <span class="token operator">|</span> <span class="token number">192.168</span>.3.63
Master_User                   <span class="token operator">|</span> slave_user
Master_Port                   <span class="token operator">|</span> <span class="token number">3306</span>
Connect_Retry                 <span class="token operator">|</span> <span class="token number">60</span>
Master_Log_File               <span class="token operator">|</span> ON.000005
Read_Master_Log_Pos           <span class="token operator">|</span> <span class="token number">729</span>
Relay_Log_File                <span class="token operator">|</span> aa7863c59748-relay-bin.000002
Relay_Log_Pos                 <span class="token operator">|</span> <span class="token number">928</span>
Relay_Master_Log_File         <span class="token operator">|</span> ON.000005
Slave_IO_Running              <span class="token operator">|</span> Yes
Slave_SQL_Running             <span class="token operator">|</span> Yes
Replicate_Do_DB               <span class="token operator">|</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、需要测试结果，可以直接在master插入数据，看slave数据是否已经发生变化</p><h2 id="mysql8-0日志" tabindex="-1"><a class="header-anchor" href="#mysql8-0日志" aria-hidden="true">#</a> Mysql8.0日志</h2>`,98),q={href:"https://blog.csdn.net/weixin_58297531/article/details/129208179",target:"_blank",rel:"noopener noreferrer"},f=s("br",null,null,-1),S=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;%general_log%&#39;</span><span class="token punctuation">;</span>
+------------------+------------------------------+
<span class="token operator">|</span> Variable_name    <span class="token operator">|</span> Value                        <span class="token operator">|</span>
+------------------+------------------------------+
<span class="token operator">|</span> general_log      <span class="token operator">|</span> OFF                          <span class="token operator">|</span>
<span class="token operator">|</span> general_log_file <span class="token operator">|</span> /var/lib/mysql/localhost.log <span class="token operator">|</span>
+------------------+------------------------------+
<span class="token number">2</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">general_log</span><span class="token operator">=</span>ON<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;%general_log%&#39;</span><span class="token punctuation">;</span>
+------------------+------------------------------+
<span class="token operator">|</span> Variable_name    <span class="token operator">|</span> Value                        <span class="token operator">|</span>
+------------------+------------------------------+
<span class="token operator">|</span> general_log      <span class="token operator">|</span> ON                           <span class="token operator">|</span>
<span class="token operator">|</span> general_log_file <span class="token operator">|</span> /var/lib/mysql/localhost.log <span class="token operator">|</span>
+------------------+------------------------------+
<span class="token number">2</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、重启mysql 数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、查看mysql 查询日志</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;general_log%&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------+------------------------------+</span>
<span class="token operator">|</span> Variable_name    <span class="token operator">|</span> <span class="token keyword">Value</span>                        <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+------------------------------+</span>
<span class="token operator">|</span> general_log      <span class="token operator">|</span> <span class="token keyword">OFF</span>                          <span class="token operator">|</span>
<span class="token operator">|</span> general_log_file <span class="token operator">|</span> <span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>mysql<span class="token operator">/</span>localhost<span class="token punctuation">.</span>log <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+------------------------------+</span>
<span class="token number">2</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

<span class="token comment"># 开启</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token keyword">global</span> general_log<span class="token operator">=</span><span class="token keyword">ON</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function w(L,M){const e=r("router-link"),i=r("ExternalLinkIcon");return p(),c("div",null,[v,s("nav",m,[s("ul",null,[s("li",null,[a(e,{to:"#目录"},{default:l(()=>[n("目录")]),_:1})]),s("li",null,[a(e,{to:"#mysql-8-0-主从部署-读写分离"},{default:l(()=>[n("Mysql 8.0 主从部署-读写分离")]),_:1})]),s("li",null,[a(e,{to:"#基于二进制日志文件位置"},{default:l(()=>[n("基于二进制日志文件位置")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#主服务器-192-168-3-63"},{default:l(()=>[n("主服务器 192.168.3.63")]),_:1})]),s("li",null,[a(e,{to:"#次服务器192-168-3-64"},{default:l(()=>[n("次服务器192.168.3.64")]),_:1})]),s("li",null,[a(e,{to:"#修改mysqlserver-id方法"},{default:l(()=>[n("修改MySQLserver-id方法")]),_:1})]),s("li",null,[a(e,{to:"#mysql读写分离原理"},{default:l(()=>[n("Mysql读写分离原理")]),_:1})]),s("li",null,[a(e,{to:"#主从复制"},{default:l(()=>[n("主从复制")]),_:1})]),s("li",null,[a(e,{to:"#mysql读写分离分离异步同步模式"},{default:l(()=>[n("Mysql读写分离分离异步同步模式")]),_:1})]),s("li",null,[a(e,{to:"#mysql读写分离分离半同步模式"},{default:l(()=>[n("Mysql读写分离分离半同步模式")]),_:1})]),s("li",null,[a(e,{to:"#slave-io-running-no-失败原因"},{default:l(()=>[n("Slave_IO_Running: NO 失败原因：")]),_:1})]),s("li",null,[a(e,{to:"#slave-sql-running如果为no"},{default:l(()=>[n("Slave_SQL_RUNNING如果为NO")]),_:1})])])]),s("li",null,[a(e,{to:"#基于gtid-实现主从部署实现读写分离"},{default:l(()=>[n("基于GTID 实现主从部署实现读写分离")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#什么是gtid同步"},{default:l(()=>[n("什么是GTID同步")]),_:1})]),s("li",null,[a(e,{to:"#gtid组成部分"},{default:l(()=>[n("GTID组成部分")]),_:1})]),s("li",null,[a(e,{to:"#配置流程"},{default:l(()=>[n("配置流程")]),_:1})])])]),s("li",null,[a(e,{to:"#mysql8-0日志"},{default:l(()=>[n("Mysql8.0日志")]),_:1})])])]),b,s("p",null,[s("a",k,[n("这27个常见的MySQL服务器参数配置你得记住！ 参考"),a(i)]),_,s("a",g,[n("主从配置参考"),a(i)]),s("a",h,[n("MySQL异步复制架构中传统复制的原理阐述"),a(i)])]),y,s("p",null,[s("a",q,[n("mysql8.0-日志 参考"),a(i)]),f,n(" 1、开启查询日志")]),S])}const R=o(u,[["render",w],["__file","10mysql_write_read.html.vue"]]);export{R as default};
