## CentOS 7 上部署 Exceptionless 私有服务器

在 CentOS 7 上部署 Exceptionless 私有服务器需要一些步骤，包括安装依赖项、配置 MongoDB、ElasticSearch、Redis 以及配置和运行 Exceptionless 应用程序。以下是详细的部署步骤：

### 1. 安装依赖项

首先，确保系统是最新的，并安装必要的依赖项：

```sh
sudo yum update -y
sudo yum install -y wget curl nano
```

### 2. 安装 Docker 和 Docker Compose

Exceptionless 推荐使用 Docker 来部署。安装 Docker 和 Docker Compose：

```sh
# 安装 Docker
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce

# 启动并启用 Docker
sudo systemctl start docker
sudo systemctl enable docker

# 安装 Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. 设置 Docker Compose 文件

创建一个目录来存放 Docker Compose 文件和配置文件：

```sh
mkdir -p ~/exceptionless
cd ~/exceptionless
```

创建一个 `docker-compose.yml` 文件，内容如下：

```yaml
version: '3.4'

services:
  mongo:
    image: mongo:4.2
    volumes:
      - mongo-data:/data/db
    networks:
      - exceptionless

  redis:
    image: redis:5.0.7
    networks:
      - exceptionless

  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.10.0
    environment:
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    mem_limit: 1g
    networks:
      - exceptionless

  exceptionless:
    image: exceptionless/exceptionless:latest
    ports:
      - "5000:80"
    environment:
      ConnectionStrings__Cache=redis://redis:6379
      ConnectionStrings__Elasticsearch=http://elasticsearch:9200
      ConnectionStrings__Mongo=mongodb://mongo:27017/exceptionless
      Exceptionless__ApiKey=YOUR_API_KEY # 需要设置你自己的 API Key
      Exceptionless__AppMode=Production
    depends_on:
      - mongo
      - redis
      - elasticsearch
    networks:
      - exceptionless

volumes:
  mongo-data:

networks:
  exceptionless:
```

### 4. 启动 Exceptionless 服务

在 `~/exceptionless` 目录下运行以下命令来启动 Exceptionless：

```sh
sudo docker-compose up -d
```

这会启动 MongoDB、Redis、ElasticSearch 和 Exceptionless 服务，并将 Exceptionless 绑定到主机的端口 5000。

### 5. 访问 Exceptionless

在浏览器中访问 `http://<your_server_ip>:5000`，您应该会看到 Exceptionless 的界面。

### 6. 配置防火墙（可选）

如果服务器上启用了防火墙，需要允许端口 5000：

```sh
sudo firewall-cmd --permanent --add-port=5000/tcp
sudo firewall-cmd --reload
```

### 7. 持久化数据和配置（可选）

您可以将数据卷挂载到主机目录，以便在容器重启时保留数据。修改 `docker-compose.yml`：

```yaml
volumes:
  mongo-data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /path/to/your/mongo/data
  elasticsearch-data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /path/to/your/elasticsearch/data
```

创建这些目录：

```sh
sudo mkdir -p /path/to/your/mongo/data
sudo mkdir -p /path/to/your/elasticsearch/data
sudo chown -R 1000:1000 /path/to/your/elasticsearch/data # 确保 Elasticsearch 有权限写入数据目录
```

### 总结

通过上述步骤，您已经在 CentOS 7 上成功部署了 Exceptionless 私有服务器。这包括安装必要的依赖项、设置 Docker 和 Docker Compose 文件，以及启动 Exceptionless 服务。这使得您可以利用 Exceptionless 强大的日志管理和错误跟踪功能，来更好地管理和监控您的应用程序。