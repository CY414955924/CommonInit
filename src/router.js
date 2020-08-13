import Vue from 'vue';
import Router from 'vue-router';
import index from "./views/index.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/login'], resolve)
    },
  ]
});
