// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueX from 'vuex'
import store from './store'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'



//路由配置
import routerConfig from './routerConfig'

//引入根组件
import App from './App'
//开启debug模式
Vue.config.debug = true;

//注册路由
Vue.use(VueRouter)
//注册vux
Vue.use(VueX)
Vue.use(VueResource)
Vue.use(VueMaterial)


// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  // mode: 'hash',
  base: __dirname, //从根路径访问
  routes: routerConfig, // （缩写）相当于 routes: routes
  linkActiveClass:'active'
})

new Vue({
  router,
  store,
  template: '<App/>',
  components: {App}
 // render: h => h(App)
}).$mount('#app') //注册绑定


