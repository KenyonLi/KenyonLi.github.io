//git 工具
const gitConf = require('./sidebar_code_management/git')
//Markdown语法
const markdownConf = require('./sidebar_code_management/markdown')

//sidebar_code_management代码管理
//SidebarItem
module.exports = [
    {
        text: 'git工具',
        collapsible: true,
        activeMatch: "/",
        children: gitConf
    },
    {
        text: 'Markdown语法',
        collapsible: true,
        activeMatch: "/",
        children: markdownConf
    },
]