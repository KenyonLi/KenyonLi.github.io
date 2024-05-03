//项目管理 
const managementConf = require('./sidebar_project_management/management')

//sidebar_project_management 项目管理
//SidebarItem
module.exports = [
    {
        text: '项目管理',
        collapsible: true,
        activeMatch: "/",
        children: managementConf
    },
]