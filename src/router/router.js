import VueRouter from 'vue-router'
//路由配置
import routerConfig from './routerConfig'

export default new VueRouter({
     // mode: 'hash',
  base: __dirname, //从根路径访问
  routes: routerConfig, // （缩写）相当于 routes: routes
  linkActiveClass:'active'
})