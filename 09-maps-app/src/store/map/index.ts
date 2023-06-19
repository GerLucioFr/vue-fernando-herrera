import { Module } from 'vuex';
import { State } from '../state';

import state, { MapState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const mapModule: Module<MapState, State> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default mapModule;
