import { Module } from 'vuex';
import { State } from '../state';

import state, { PlacesState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const placesModule: Module<PlacesState, State> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default placesModule;
