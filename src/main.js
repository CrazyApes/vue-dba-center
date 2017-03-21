// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueX from 'vuex'
import index from './store/index'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import ElementUI from 'element-ui'

//css
import 'element-ui/lib/theme-default/index.css'
import 'animate.css/animate.min.css'
import '../static/fonts/robot.css'
import '../static/css/icon/icon.css'
import '../static/css/common.css'
import '../static/css/nice.css'

import _ from 'lodash'

//路由配置
import routerConfig from './routerConfig'

//引入根组件
import App from './App'
//开启debug模式
Vue.config.debug = true;
//全局暴露lodash
window[_]=_;

//注册路由
Vue.use(VueRouter)
//注册vux
Vue.use(VueX)
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(ElementUI)

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  // mode: 'hash',
  base: __dirname, //从根路径访问
  routes: routerConfig, // （缩写）相当于 routes: routes
  linkActiveClass:'active'
})

new Vue({
  router,
  store:index,
  template: '<App/>',
  components: {App}
 // render: h => h(App)
}).$mount('#app') //注册绑定


