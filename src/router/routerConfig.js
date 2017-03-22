
import login from '../components/login.vue'
import content from '../components/content.vue'

import index from '../components/main/index.vue'
import customerTable from '../components/main/customerTable.vue'
import employeeTable from '../components/main/employeeTable.vue'
import addPriceDome from '../components/main/addPriceDome.vue'

import page404 from '../components/error/page404'

// 路由准备的数据
export default
[
  {path:'/login', component:login},
  {path:'/content',component:content,
    children:[
      {path:'/content/main',component:index},
      {path:'/content/customerTable',component:customerTable},
      {path:'/content/employeeTable',component:employeeTable},
      {path:'/content/addPriceDome',component:addPriceDome},
      {path:'/content',redirect:'/content/main'}
      ]
  },
  {path:'', redirect:'/login'},
  {path:'/404', component:page404},
  {path:'*', redirect:'/404'}
]


