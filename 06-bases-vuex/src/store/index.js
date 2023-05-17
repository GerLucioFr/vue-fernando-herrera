import { createStore } from 'vuex';
import counterStore from './counter';

const store = createStore({
  modules: {
    counter: counterStore,
  },
});

export default store;
