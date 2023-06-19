import store from '@/store';

const isAuth = async (to, from, next) => {
  const status = await store.dispatch('auth/validateAuth');
  if (status) {
    next();
  } else {
    next({ name: 'login' });
  }
};

export default isAuth;
