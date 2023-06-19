import { createRouter, createWebHistory } from 'vue-router';
import daybookRouter from '@/modules/daybook/router';
import authRouter from '@/modules/auth/router';
import isAuth from './auth-guard';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/daybook',
  },
  {
    path: '/daybook',
    ...daybookRouter,
    beforeEnter: [isAuth],
  },
  {
    path: '/auth',
    ...authRouter,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/auth',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
