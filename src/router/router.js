import VueRouter from 'vue-router'
//路由配置
import routerConfig from './routerConfig'

import red from '../common/red'

const router=new VueRouter({
  mode: 'hash',
  base: __dirname, //从根路径访问
  routes: routerConfig 
});

router.beforeEach((to, from, next) => {
  if (!to.meta.noAuth) {
    console.log("需要登录的路由",to);
    console.log('token=>',red.getEmp().token);
    next();
  } else {
    next();
  }
})

export default router