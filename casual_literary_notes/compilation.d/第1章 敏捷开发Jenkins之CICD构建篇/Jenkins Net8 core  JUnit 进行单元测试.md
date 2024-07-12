## Jenkins Net8 core  JUnit 进行单元测试



在 Jenkins 中，您可以使用 JUnit 进行单元测试，并将测试结果集成到 Jenkins Pipeline 中，以便在构建过程中自动运行测试并生成测试报告。下面是一个示例，展示如何在 Jenkins Pipeline 中使用 JUnit 进行测试和报告。

### 前提条件

- 确保 Jenkins 上安装了 JUnit 插件。
- 确保您的 .NET 项目配置了单元测试项目，并且使用 JUnit 格式输出测试结果（对于 .NET 项目，通常使用 `xUnit`、`NUnit` 或 `MSTest`，并使用 `xUnit` 提供的 `JunitXml.TestLogger` 生成 JUnit 格式的测试结果）。

### 声明式 Pipeline 示例

```groovy
pipeline {
    agent any

    environment {
        DOTNET_ROOT = tool name: 'dotnet8', type: 'DotNetCore'
        PATH = "${DOTNET_ROOT}:${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    sh 'dotnet build --configuration Release'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Testing...'
                    // 使用 xUnit 生成 JUnit 格式的测试结果
                    sh 'dotnet test --logger "trx;LogFileName=test_results.xml" --logger "junit;LogFileName=test_results_junit.xml"'
                }
            }
            post {
                always {
                    // 发布 JUnit 测试结果
                    junit '*/test_results_junit.xml'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying...'
                    // 假设使用 `dotnet publish` 发布并将结果部署到某个目录
                    sh 'dotnet publish --configuration Release --output ./publish'
                    
                    // 假设将发布的文件复制到远程服务器（替换为您的服务器地址和路径）
                    // sh 'scp -r ./publish/* user@server:/path/to/deploy'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
```

### Scripted Pipeline 示例

```groovy
node {
    def dotnetHome = tool name: 'dotnet8', type: 'DotNetCore'
    env.PATH = "${dotnetHome}:${env.PATH}"

    try {
        stage('Build') {
            echo 'Building...'
            sh 'dotnet build --configuration Release'
        }

        stage('Test') {
            try {
                echo 'Testing...'
                // 使用 xUnit 生成 JUnit 格式的测试结果
                sh 'dotnet test --logger "trx;LogFileName=test_results.xml" --logger "junit;LogFileName=test_results_junit.xml"'
            } finally {
                // 发布 JUnit 测试结果
                junit '*/test_results_junit.xml'
            }
        }

        stage('Deploy') {
            echo 'Deploying...'
            // 假设使用 `dotnet publish` 发布并将结果部署到某个目录
            sh 'dotnet publish --configuration Release --output ./publish'

            // 假设将发布的文件复制到远程服务器（替换为您的服务器地址和路径）
            // sh 'scp -r ./publish/* user@server:/path/to/deploy'
        }
    } catch (Exception e) {
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        if (currentBuild.result == 'FAILURE') {
            echo 'Pipeline failed!'
        } else {
            echo 'Pipeline completed successfully!'
        }
    }
}
```

### 说明

1. **环境配置**：
   - 使用 `tool` 函数查找 .NET 8 SDK 并配置环境变量。
   - 确保 Jenkins 节点上安装并配置了 .NET 8 SDK，并在 Jenkins 全局工具配置中设置相应的工具名称（例如 `dotnet8`）。

2. **Build 阶段**：
   - 使用 `dotnet build` 命令构建 .NET 项目。

3. **Test 阶段**：
   - 使用 `dotnet test` 命令运行单元测试，并使用 `xUnit` 生成 JUnit 格式的测试结果。
   - `--logger "junit;LogFileName=test_results_junit.xml"` 参数用于生成 JUnit 格式的测试结果文件。

4. **Post 条件**：
   - 在声明式 Pipeline 中，使用 `post` 部分来定义在 Pipeline 成功或失败时执行的操作。
   - 在 `post` 阶段的 `always` 块中，使用 `junit '*/test_results_junit.xml'` 发布 JUnit 测试结果。

5. **Deploy 阶段**：
   - 使用 `dotnet publish` 命令发布应用程序。
   - 假设将发布的文件复制到远程服务器，可以使用 `scp` 命令（此部分需要根据实际情况进行调整）。

将这些脚本粘贴到 Jenkins 中的 Pipeline 配置中，并根据您的实际项目需求调整命令和路径，即可创建一个自动化的 .NET 8 Core 项目的构建、测试和部署 Pipeline，并集成 JUnit 测试结果。

## dotne test 生成报告



`dotnet test` 命令可以通过指定不同的日志记录器来生成测试结果文件。这些文件通常用于分析测试结果和生成报告。在这条命令中，我们使用了两个日志记录器，一个生成 `.trx` 文件，另一个生成 JUnit 格式的 `.xml` 文件。

### 命令解析

```sh
dotnet test --logger "trx;LogFileName=test_results.xml" --logger "junit;LogFileName=test_results_junit.xml"
```

- `dotnet test`：这是 .NET Core 的命令，用于运行单元测试。
- `--logger "trx;LogFileName=test_results.xml"`：指定使用 `trx` 日志记录器，并将结果保存为 `test_results.xml` 文件。
- `--logger "junit;LogFileName=test_results_junit.xml"`：指定使用 `junit` 日志记录器，并将结果保存为 `test_results_junit.xml` 文件。

### 日志记录器

- `trx`：这是 Visual Studio Test 的原生结果格式，`.trx` 文件包含详细的测试结果信息，适用于在 Visual Studio 中查看和分析。
- `junit`：这是 JUnit 测试框架的结果格式，`.xml` 文件包含测试结果的摘要信息，适用于在各种持续集成系统（如 Jenkins）中查看和分析。

### 生成 XML 文件的步骤

1. **安装必要的包**：
   - 确保项目引用了必要的 NuGet 包来生成这些日志文件。通常使用 `Microsoft.NET.Test.Sdk` 和 `xunit`。
   - 对于生成 JUnit 格式的日志文件，需要安装 `xunit` 的 JUnit XML Test Logger 包：
     ```sh
     dotnet add package xunit.runner.visualstudio --version 2.4.3
     dotnet add package JUnit.Xml.TestLogger --version 3.0.92
     ```

2. **配置项目**：
   - 在 `.csproj` 文件中确保包含以下内容，以便引用测试 SDK 和日志记录器：
     ```xml
     <ItemGroup>
       <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.3.2" />
       <PackageReference Include="xunit" Version="2.4.1" />
       <PackageReference Include="xunit.runner.visualstudio" Version="2.4.3" />
       <PackageReference Include="JUnit.Xml.TestLogger" Version="3.0.92" />
     </ItemGroup>
     ```

3. **运行测试**：
   - 使用 `dotnet test` 命令运行测试，并指定日志记录器：
     ```sh
     dotnet test --logger "trx;LogFileName=test_results.xml" --logger "junit;LogFileName=test_results_junit.xml"
     ```

4. **生成 XML 文件**：
   - 测试完成后，将在当前目录或指定目录生成 `test_results.xml` 和 `test_results_junit.xml` 文件。这些文件包含测试运行的详细结果。
   - `test_results.xml` 是 `trx` 格式，适用于 Visual Studio。
   - `test_results_junit.xml` 是 JUnit 格式，适用于 Jenkins 等持续集成系统。

### 使用 XML 文件

- **在 Jenkins 中使用 JUnit 测试报告**：
  - 在 Jenkins Pipeline 中，可以使用 `junit` 步骤来解析并发布 JUnit 测试结果。
  - 示例：
    ```groovy
    pipeline {
        agent any
    
        environment {
            DOTNET_ROOT = tool name: 'dotnet8', type: 'DotNetCore'
            PATH = "${DOTNET_ROOT}:${env.PATH}"
        }
    
        stages {
            stage('Build') {
                steps {
                    script {
                        echo 'Building...'
                        sh 'dotnet build --configuration Release'
                    }
                }
            }
    
            stage('Test') {
                steps {
                    script {
                        echo 'Testing...'
                        sh 'dotnet test --logger "trx;LogFileName=test_results.xml" --logger "junit;LogFileName=test_results_junit.xml"'
                    }
                }
                post {
                    always {
                        junit '*/test_results_junit.xml'
                    }
                }
            }
    
            stage('Deploy') {
                steps {
                    script {
                        echo 'Deploying...'
                        sh 'dotnet publish --configuration Release --output ./publish'
                        // 假设将发布的文件复制到远程服务器（替换为您的服务器地址和路径）
                        // sh 'scp -r ./publish/* user@server:/path/to/deploy'
                    }
                }
            }
        }
    
        post {
            success {
                echo 'Pipeline completed successfully!'
            }
            failure {
                echo 'Pipeline failed!'
            }
        }
    }
    ```

通过这种方式，您可以在 Jenkins Pipeline 中运行 .NET 单元测试，并生成 JUnit 格式的测试结果文件，便于在 Jenkins 中查看和分析测试结果。



## Net 8 CLI 指定某个单元测试

在 .NET 项目中，您可以通过指定路径或项目文件来运行特定的单元测试项目。以下是如何在 Jenkins Pipeline 中指定某个单元测试项目并生成测试结果的示例。

假设您的项目结构如下：

```
MySolution/
├── src/
│   └── MyApp/
│       └── MyApp.csproj
└── tests/
    └── MyApp.Tests/
        └── MyApp.Tests.csproj
```

### 在 Jenkins Pipeline 中指定特定的单元测试项目

您可以通过指定测试项目的路径或项目文件来运行特定的测试项目。以下是一个完整的 Jenkins Pipeline 示例：

```groovy
pipeline {
    agent any

    environment {
        DOTNET_ROOT = tool name: 'dotnet8', type: 'DotNetCore'
        PATH = "${DOTNET_ROOT}:${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    // 指定解决方案文件进行构建
                    sh 'dotnet build MySolution.sln --configuration Release'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    // 指定单元测试项目进行测试，并生成测试结果文件
                    sh 'dotnet test tests/MyApp.Tests/MyApp.Tests.csproj --logger "trx;LogFileName=test_results.xml" --logger "junit;LogFileName=test_results_junit.xml"'
                }
            }
            post {
                always {
                    // 发布 JUnit 测试结果
                    junit 'tests/MyApp.Tests/test_results_junit.xml'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying...'
                    // 发布应用程序
                    sh 'dotnet publish src/MyApp/MyApp.csproj --configuration Release --output ./publish'
                    // 假设将发布的文件复制到远程服务器（替换为您的服务器地址和路径）
                    // sh 'scp -r ./publish/* user@server:/path/to/deploy'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
```

### 说明

1. **Build 阶段**：
   - 使用 `dotnet build MySolution.sln --configuration Release` 命令构建解决方案文件。这将构建所有项目，包括应用程序和测试项目。

2. **Test 阶段**：
   - 使用 `dotnet test tests/MyApp.Tests/MyApp.Tests.csproj` 命令运行特定的单元测试项目。
   - `--logger "trx;LogFileName=test_results.xml"`：生成 `.trx` 格式的测试结果文件。
   - `--logger "junit;LogFileName=test_results_junit.xml"`：生成 JUnit 格式的测试结果文件。

3. **Post 条件**：
   - 在 `post` 阶段的 `always` 块中，使用 `junit 'tests/MyApp.Tests/test_results_junit.xml'` 发布 JUnit 测试结果。这将使 Jenkins 能够解析并显示测试结果。

4. **Deploy 阶段**：
   - 使用 `dotnet publish src/MyApp/MyApp.csproj --configuration Release --output ./publish` 命令发布应用程序。
   - 根据需要，您可以添加将发布的文件复制到远程服务器的步骤。

通过这种方式，您可以在 Jenkins Pipeline 中指定并运行特定的单元测试项目，同时生成和发布测试结果。