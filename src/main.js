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
import '../static/css/common.css';
import '../static/css/nice.css';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueX);
Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  template: '<App/>',
  components: {App}
 // render: h => h(App)
}).$mount('#app') //注册绑定


