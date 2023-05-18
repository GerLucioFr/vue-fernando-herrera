import { createStore } from 'vuex';
import daybook from '@/modules/daybook/store/daybook';

const store = createStore({
  actions: {},
  devtools: {},
  getters: {},
  mutations: {},
  state: {},
  modules: {
    daybook,
  },
});

export default store;
