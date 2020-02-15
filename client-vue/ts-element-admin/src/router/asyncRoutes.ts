/**
 * 权限页面
 */
import Layout from '../layout/layout.vue';

const asyncRoutes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/User.vue'),
        name: 'user',
        meta: {
          title: 'user',
          icon: 'qq',
          roles: ['admin'],
        },
      },
      {
        path: 'other',
        component: () => import(/* webpackChunkName: "other" */ '@/views/other/Other.vue'),
        name: 'other',
        meta: {
          title: 'Other',
          icon: 'qq',
          roles: ['user'],
        },
      },
    ],
  },
];
export default asyncRoutes;
