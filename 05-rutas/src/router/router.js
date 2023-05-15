import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticatedGuard } from './auth.guard';

// import ListPage from '@/modules/pokemon/pages/ListPage';

export const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/pokemon',
  },
  {
    path: '/pokemon',
    name: 'PokemonLayout',
    component: () =>
      import(
        /*webpackChunkName: 'PokemonLayout'*/ '@/modules/pokemon/layouts/PokemonLayout'
      ),
    beforeEnter: [isAuthenticatedGuard],
    children: [
      {
        path: 'list',
        name: 'PokemonHome',
        component: () =>
          import(
            /*webpackChunkName: 'List'*/ '@/modules/pokemon/pages/ListPage'
          ),
      },
      {
        path: 'about',
        name: 'PokemonAbout',
        component: () =>
          import(
            /*webpackChunkName: 'AboutPage'*/ '@/modules/pokemon/pages/AboutPage'
          ),
      },
      {
        path: 'details/:id',
        name: 'PokemonDetails',
        props: (route) => {
          const { id } = route.params;
          return {
            id,
          };
        },
        component: () =>
          import(
            /*webpackChunkName: 'DetailsPage'*/ '@/modules/pokemon/pages/DetailsPage'
          ),
      },
      {
        path: '',
        redirect: { name: 'PokemonHome' },
      },
    ],
  },
  {
    path: '/dragonball',
    name: 'DragonballLayout',
    component: () =>
      import(
        /*webpackChunkName: 'DragonballLayout'*/ '@/modules/dragonball/layouts/DragonballLayout'
      ),
    children: [
      {
        path: 'list',
        name: 'DragonballHome',
        component: () =>
          import(
            /*webpackChunkName: 'List'*/ '@/modules/dragonball/pages/ListPage'
          ),
      },
      {
        path: 'about',
        name: 'DragonballAbout',
        component: () =>
          import(
            /*webpackChunkName: 'AboutPage'*/ '@/modules/dragonball/pages/AboutPage'
          ),
      },
      {
        path: 'details/:id',
        name: 'DragonballDetails',
        props: (route) => {
          const { id } = route.params;
          return {
            id,
          };
        },
        component: () =>
          import(
            /*webpackChunkName: 'DetailsPage'*/ '@/modules/dragonball/pages/DetailsPage'
          ),
      },
      {
        path: '',
        redirect: { name: 'DragonballHome' },
      },
    ],
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () =>
      import(
        /*webpackChunkName: 'NoPageFound'*/ '@/modules/shared/pages/NoPageFound'
      ),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Async global guard
const canAccess = () => {
  return new Promise((resolve) => {
    const rand = Math.random() * 100;
    const flag = true;
    if (rand > 50 || flag) {
      console.log('Allow global guard');
      resolve(true);
    } else {
      console.log('Deny global guard');
      resolve(false);
    }
  });
};

router.beforeEach(async (to, from, next) => {
  const authenticated = await canAccess();
  authenticated ? next() : next(from.path);
});
