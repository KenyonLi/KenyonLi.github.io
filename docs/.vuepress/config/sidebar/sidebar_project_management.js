//项目管理 
const managementConf = require('./project_management/management')

//sidebar_project_management 项目管理
//SidebarItem
module.exports = [
    {
        text: '什么项目管理',
        collapsible: true,
        activeMatch: "/",
        children: managementConf
    },
]