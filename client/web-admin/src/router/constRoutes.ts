/**
 * 路由常量，不需要权限
 */
import { RouteConfig } from 'vue-router';
import Layout from '../layout/layout.vue';

const constRoutes: RouteConfig[] = [
  // 登录
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
  },
  // 其他
  {
    path: '/',
    component: Layout, // 应用布局
    redirect: '/home',
    meta: { title: '首页', icon: 'qq' },
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
        name: 'home',
        meta: {
          title: 'Home', // 导航菜单项标题
          icon: 'qq', // 导航菜单项图标
        },
      },
    ],
  },
];
export default constRoutes;
