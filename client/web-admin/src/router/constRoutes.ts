/**
 * 路由常量，不需要权限
 */
import Layout from '../layout/index.vue';

const constRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true, // 导航菜单忽略该项
  },
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
      {
        path: 'mua',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
        name: 'mua',
        meta: {
          title: '波一个', // 导航菜单项标题
          icon: 'wx', // 导航菜单项图标
        },
      },
    ],
  },
];
export default constRoutes;
