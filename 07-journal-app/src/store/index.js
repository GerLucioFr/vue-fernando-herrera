import { createStore } from 'vuex';
import daybook from '@/modules/daybook/store/daybook';
import auth from '@/modules/auth/store/auth';

const store = createStore({
  actions: {},
  devtools: {},
  getters: {},
  mutations: {},
  state: {},
  modules: {
    auth,
    daybook,
  },
});

export default store;
