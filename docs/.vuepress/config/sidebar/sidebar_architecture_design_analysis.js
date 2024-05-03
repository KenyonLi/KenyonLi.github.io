
//设计模式
const designConf = require('./architecture_design_analysis/design')

//EA工具
const enterprise_architectConf = require('./architecture_design_analysis/enterprise_architect')

// 架构设计与分析
//SidebarItem
module.exports = [
    {
      text: '设计模式',
      collapsible: true,
      activeMatch: "/",
      children:  designConf
    },
    {
        text: 'EA工具',
        collapsible: true,
        activeMatch: "/",
        children:  enterprise_architectConf
      },
]