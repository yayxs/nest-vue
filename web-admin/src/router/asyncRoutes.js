/**
 * 权限页面
 */
import Layout from '../layout/index.vue';

const asyncRoutes = [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',

    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
        name: 'about',
        meta: {
          title: 'About',
          icon: 'qq',
          roles: ['editor'],
        },
      },
      {
        path: 'bla',
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
        name: 'bla',
        meta: {
          title: 'About',
          icon: 'qq',
          roles: ['admin'],
        },
      },
    ],
  },
];
export default asyncRoutes;
