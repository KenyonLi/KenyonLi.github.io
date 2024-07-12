## Net 8 的异常种类有哪些

在 .NET 8 中，异常是用于处理程序执行过程中出现的错误或其他意外情况的重要机制。.NET 框架提供了丰富的异常类型，以下是一些常见的异常种类：

### 1. **系统异常**
这些异常由 .NET 运行时或库自动引发，通常表示严重的系统错误或无法恢复的情况。

- **System.Exception**: 所有异常的基类。
- **System.SystemException**: 所有系统级异常的基类。

#### 1.1 **运行时异常**
- **System.NullReferenceException**: 引用空对象时引发的异常。
- **System.IndexOutOfRangeException**: 数组索引超出范围时引发的异常。
- **System.DivideByZeroException**: 除以零操作引发的异常。
- **System.InvalidOperationException**: 操作无效时引发的异常。
- **System.StackOverflowException**: 执行堆栈溢出时引发的异常。
- **System.OutOfMemoryException**: 内存不足时引发的异常。

#### 1.2 **输入输出异常**
- **System.IO.IOException**: I/O 操作失败时引发的异常。
- **System.IO.FileNotFoundException**: 文件未找到时引发的异常。
- **System.IO.DirectoryNotFoundException**: 目录未找到时引发的异常。
- **System.IO.EndOfStreamException**: 读取超过流的末尾时引发的异常。

#### 1.3 **类型相关异常**
- **System.InvalidCastException**: 类型转换失败时引发的异常。
- **System.FormatException**: 字符串格式无效时引发的异常。
- **System.TypeLoadException**: 类型加载失败时引发的异常。
- **System.MissingMethodException**: 方法缺失时引发的异常。
- **System.MissingFieldException**: 字段缺失时引发的异常。

### 2. **应用程序异常**
这些异常通常由应用程序代码引发，表示应用程序逻辑错误或业务规则冲突。

- **System.ApplicationException**: 所有应用程序级异常的基类。

#### 2.1 **用户定义异常**
开发人员可以通过继承 `System.Exception` 或 `System.ApplicationException` 创建自定义异常，用于表示特定的业务逻辑错误。

### 3. **任务和异步操作异常**
- **System.AggregateException**: 包含一个或多个异常的集合，通常在处理异步任务或并行操作时使用。
- **System.OperationCanceledException**: 操作取消时引发的异常，常用于异步操作中。

### 4. **安全异常**
- **System.Security.SecurityException**: 安全错误时引发的异常。
- **System.UnauthorizedAccessException**: 无权限访问资源时引发的异常。

### 5. **网络和通信异常**
- **System.Net.WebException**: 网络操作失败时引发的异常。
- **System.Net.Sockets.SocketException**: 套接字操作失败时引发的异常。

### 6. **数据和数据库异常**
- **System.Data.Common.DbException**: 数据库操作失败时引发的异常。
- **System.Data.SqlClient.SqlException**: SQL Server 操作失败时引发的异常。

### 7. **序列化和反序列化异常**
- **System.Runtime.Serialization.SerializationException**: 序列化操作失败时引发的异常。
- **System.Text.Json.JsonException**: JSON 处理失败时引发的异常。

### 8. **反射异常**
- **System.Reflection.TargetInvocationException**: 调用通过反射方法引发的异常。

这些异常类型帮助开发人员在不同的情境下识别和处理错误，从而提高应用程序的健壮性和可靠性。通过了解和使用这些异常类型，可以编写更健壮的代码，处理可能出现的各种异常情况。