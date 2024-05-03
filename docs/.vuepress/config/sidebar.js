//前端设计与技术
const sidebar_front_endConf = require('./sidebar/sidebar_front_end')
//后端设计与技术
const sidebar_back_endConf = require('./sidebar/sidebar_back_end')
//数据库设计与技术
const sidebar_database_design_analysisConf = require('./sidebar/sidebar_database_design_analysis')
//部署与运维技术
const sidebar_deployment_operationsConf = require('./sidebar/sidebar_deployment_operations')
//产品设计与分析
const sidebar_product_design_analysisConf = require('./sidebar/sidebar_product_design_analysis')
//架构设计与分析
const sidebar_architecture_design_analysisConf = require('./sidebar/sidebar_architecture_design_analysis')
//代码管理
const sidebar_code_managementConf = require('./sidebar/sidebar_code_management')
//人工智能
const sidebar_artificial_intelligenceConf = require('./sidebar/sidebar_artificial_intelligence')
//项目管理
const sidebar_project_managementConf = require('./sidebar/sidebar_project_management')

module.exports = [
  // SidebarItem
  {
    text: '前端设计与技术',
    collapsible: true,
    children:sidebar_front_endConf
  },
  {
    text: '后端设计与技术',
    collapsible: true,
    children:sidebar_back_endConf
  },
  {
    text: '数据库设计与技术',
    collapsible: true,
    children:sidebar_database_design_analysisConf
  }, 
  {
    text: '架构设计与分析',
    collapsible: true,
    children:sidebar_architecture_design_analysisConf
  },
  {
    text: '部署与运维技术',
    collapsible: true,
    children:sidebar_deployment_operationsConf
  },
  {
    text: '产品设计与分析',
    collapsible: true,
    children:sidebar_product_design_analysisConf
  },
  {
    text: '代码管理',
    collapsible: true,
    children:sidebar_code_managementConf
  },
  {
    text: '人工智能',
    collapsible: true,
    children:sidebar_artificial_intelligenceConf
  },
  {
    text: '项目管理',
    collapsible: true,
    children:sidebar_project_managementConf
  },
]