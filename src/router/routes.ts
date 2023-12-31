import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/market',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: ':symbol', component: () => import('pages/MarketPage.vue') },
    ],
  },
  {
    path: '/explorer',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ExplorerPage.vue') }],
  },

  {
    path: '/table',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TablePage.vue') }],
  },

  {
    path: '/wallet',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WalletPage.vue') }],
  },

  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
