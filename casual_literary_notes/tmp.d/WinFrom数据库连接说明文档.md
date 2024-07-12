##  WinFrom   net8.0-windows



数据模型：采用 CodeFirst 方法，生成数据库表，使用  ef 数据库迁移指令。生成数据库

``` bash
Microsoft Windows [版本 10.0.19045.3324]
(c) Microsoft Corporation。保留所有权利。

D:\GitRepos\WinFormsApp.Demo\WinFormsApp.Demo>dotnet ef

                     _/\__
               ---==/    \\
         ___  ___   |.    \|\
        | __|| __|  |  )   \\\
        | _| | _|   \_/ |  //|\\
        |___||_|       /   \\\/\\

Entity Framework Core .NET Command-line Tools 7.0.11

Usage: dotnet ef [options] [command]

Options:
  --version        Show version information
  -h|--help        Show help information
  -v|--verbose     Show verbose output.
  --no-color       Don't colorize output.
  --prefix-output  Prefix output with level.

Commands:
  database    Commands to manage the database.
  dbcontext   Commands to manage DbContext types.
  migrations  Commands to manage migrations.

Use "dotnet ef [command] --help" for more information about a command.

D:\GitRepos\WinFormsApp.Demo\WinFormsApp.Demo>dotnet ef migrations add usersserver
Build started...
Build succeeded.
The Entity Framework tools version '7.0.11' is older than that of the runtime '8.0.5'. Update the tools for the latest features and bug fixes. See https://aka.ms/AAc1fbw for more information.
Done. To undo this action, use 'ef migrations remove'

D:\GitRepos\WinFormsApp.Demo\WinFormsApp.Demo>dotnet ef database update  usersserver
Build started...
Build succeeded.
The Entity Framework tools version '7.0.11' is older than that of the runtime '8.0.5'. Update the tools for the latest features and bug fixes. See https://aka.ms/AAc1fbw for more information.
Applying migration '20240526111507_usersserver'.
Done.

D:\GitRepos\WinFormsApp.Demo\WinFormsApp.Demo>
```

