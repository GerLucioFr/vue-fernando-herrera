import { GetterTree } from 'vuex';
import { MapState } from './state';
import { State } from '../state';

const getters: GetterTree<MapState, State> = {
  isMapReady(state: MapState): boolean {
    return !!state.map;
  },
};

export default getters;
