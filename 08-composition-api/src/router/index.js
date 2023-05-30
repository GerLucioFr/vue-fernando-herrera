import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/counter',
    name: 'counter',
    component: () =>
      import(/*webpackChunckName: 'counter'*/ '@/views/CounterView'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/*webpackChunckName: 'users'*/ '@/views/UsersView'),
  },
  {
    path: '/search',
    name: 'search',
    component: () =>
      import(/*webpackChunckName: 'search'*/ '@/views/SearchPokemonView'),
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: () =>
      import(/*webpackChunckName: 'pokemon'*/ '@/views/PokemonView'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/*webpackChunckName: 'todo'*/ '@/views/TodoView'),
  },
  {
    path: '/slots',
    name: 'slots',
    component: () =>
      import(/*webpackChunckName: 'slots'*/ '@/views/CustomSlotsView'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
