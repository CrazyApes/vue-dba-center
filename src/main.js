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
import red from './common/red';

import 'element-ui/lib/theme-default/index.css';
import 'animate.css/animate.min.css';
import '../static/fonts/robot.css';
import '../static/css/icon/icon.css';
// import 'vue-material/dist/vue-material.css' 由于版本css bug，所以引用本地修改 ↓
import '../static/css/material.css';
import '../static/css/nice.css';

Vue.use(VueRouter);
Vue.use(VueX);
Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(ElementUI);
Vue.use(red);

//开启debug模式
Vue.config.debug = true;


let vm=new Vue({
  router,
  store,
  template: '<App/>',
  components: {App}
 // render: h => h(App)
}).$mount('#app') //注册绑定



