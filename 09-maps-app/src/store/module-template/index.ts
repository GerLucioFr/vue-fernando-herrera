import { Module } from 'vuex';
import { State } from '../state';

import state, { ExampleState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<ExampleState, State> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
