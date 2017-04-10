import VueRouter from 'vue-router'
//路由配置
import routerConfig from './routerConfig'

const router=new VueRouter({
  mode: 'hash',
  base: __dirname, //从根路径访问
  routes: routerConfig 
});

router.beforeEach((to, from, next) => {
  if (!to.meta.noAuth) {
    console.log("需要登录的路由",to);
    console.log('token=>',JSON.parse(window.localStorage.getItem('emp')).token);
    next();
  } else {
    next();
  }
})

export default router