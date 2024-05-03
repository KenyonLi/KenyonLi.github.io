
//javasrcipt 
const front_end_javascriptConf = require('./front_end/front_end_javascript')

//h5语法
const front_end_h5Conf = require('./front_end/front_end_h5')

//CSS样式 
const front_end_cssConf = require('./front_end/front_end_css')

//Vue语法 
const front_end_vueConf = require('./front_end/front_end_vue')

// sidebar_front_end 前端设计与分析
//SidebarItem
module.exports = [
    {
        text: 'javasrcipt',
        collapsible: true,
        activeMatch: "/",
        children: front_end_javascriptConf
    },
    {
        text: 'H5语法',
        collapsible: true,
        activeMatch: "/",
        children: front_end_h5Conf
    },
    {
        text: 'CSS样式',
        collapsible: true,
        activeMatch: "/",
        children: front_end_cssConf
    },
    {
        text: 'Vue语法',
        collapsible: true,
        activeMatch: "/",
        children: front_end_vueConf
    },
]
