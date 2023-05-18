import { createRouter, createWebHistory } from 'vue-router';
import daybookRouter from '@/modules/daybook/router';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: {
      name: 'daybook',
    },
  },
  {
    path: '/daybook',
    ...daybookRouter,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/daybook',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
