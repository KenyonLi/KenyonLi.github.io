//ai
const aiConf = require('./artificial_intelligence/ai')
 
// 人工智能
//SidebarItem
module.exports = [
    {
        text: '人工智能',
        collapsible: true,
        activeMatch: "/",
        children:  aiConf
      },
]

