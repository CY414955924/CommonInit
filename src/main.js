import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex/store';
import './util/common_styles.scss';

import Mixin from './mixins';


// // 挂载全局Mixin
// Vue.mixin(Mixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
