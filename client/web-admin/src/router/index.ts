import Vue from 'vue';
import Router from 'vue-router';
import constRoutes from '@/router/constRoutes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes,
});
