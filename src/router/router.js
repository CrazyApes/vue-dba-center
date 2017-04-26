import VueRouter from 'vue-router'
//路由配置
import routerConfig from './routerConfig'

import red from '../common/red'

const router = new VueRouter({
  mode: 'hash',
  base: __dirname, //从根路径访问
  routes: routerConfig
});

router.beforeEach((to, from, next) => {
  if (!to.meta.noAuth) {
    if (!red.getEmp()) {
      alert('用户登录失效，请重新登陆！')
      next('/login');
    }
  } else {
    next();
  }
  next();
})

export default router