//linux  
const linuxConf = require('./sidebar_deployment_operations/linux')

//docker 容器
const dockerConf = require('./sidebar_deployment_operations/docker')

//frp 网络穿透工具
const frpConf = require('./sidebar_deployment_operations/frp')

//jenkins 工具
const jenkinsConf = require('./sidebar_deployment_operations/jenkins')


//sidebar_deployment_operations 部署与运维技术
//SidebarItem
module.exports = [
    {
        text: 'linux系统',
        collapsible: true,
        activeMatch: "/",
        children: linuxConf
    },
    {
        text: 'Docker容器',
        collapsible: true,
        activeMatch: "/",
        children: dockerConf
    },
    {
        text: 'jenkins工具',
        collapsible: true,
        activeMatch: "/",
        children: jenkins
    },
    {
        text: 'frp 网络穿透工具',
        collapsible: true,
        activeMatch: "/",
        children: frpConf
    },
]
