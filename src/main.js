// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueX from 'vuex';
import store from './store/store';
import router from './router/router';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import ElementUI from 'element-ui';
import App from './App';
import 'lodash';

import 'element-ui/lib/theme-default/index.css';
import 'animate.css/animate.min.css';
import '../static/fonts/robot.css';
import '../static/css/icon/icon.css';

// import 'vue-material/dist/vue-material.css'

import '../static/css/material.css';
import '../static/css/nice.css';

Vue.use(VueRouter);
Vue.use(VueX);
Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(ElementUI);


//开启debug模式
Vue.config.debug = true;
// 如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项。启用该选项后，请求会以application/x-www-form-urlencoded作为MIME type，就像普通的HTML表单一样。
Vue.http.options.emulateJSON = true;

new Vue({
  router,
  store,
  template: '<App/>',
  components: {App}
 // render: h => h(App)
}).$mount('#app') //注册绑定


