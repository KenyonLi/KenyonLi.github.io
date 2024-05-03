//MySql数据库
const mysqlConf = require('./sidebar_database_design_analysis/mysql')

//MongoDB数据库
const mongodbConf = require('./sidebar_database_design_analysis/mongodb')

//Redis数据库
const redisConf = require('./sidebar_database_design_analysis/redis')

//sidebar_database_design_analysis 数据库设计与分析
//SidebarItem
module.exports = [
    {
        text: 'MySql数据库',
        collapsible: true,
        activeMatch: "/",
        children: mysqlConf
    },
    {
        text: 'MongoDB数据库',
        collapsible: true,
        activeMatch: "/",
        children: mongodbConf
    },
    {
        text: 'Redis数据库',
        collapsible: true,
        activeMatch: "/",
        children: redisConf
    },
]
