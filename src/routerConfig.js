
import login from './components/login.vue'
import content from './components/content.vue'

import index from './components/main/index.vue'
import userTable from './components/main/userTable.vue'
import addPriceDome from './components/main/addPriceDome.vue'

// 路由准备的数据
export default
[
  {path:'/login', component:login},
  {path:'/content',component:content,
    children:[
      {path:'/content/main',component:index},
      {path:'/content/userTable',component:userTable},
      {path:'/content/addPriceDome',component:addPriceDome},
      {path:'/content/*',redirect:'/content/main'}
      ]
  },
  {path:'*', redirect:'/login'}
]


