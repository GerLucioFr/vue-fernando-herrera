import { GetterTree } from 'vuex';
import { PlacesState } from './state';
import { State } from '../state';

const getters: GetterTree<PlacesState, State> = {
  isUserLocationReady(state: PlacesState): boolean {
    return !!state.userLocation;
  },
};

export default getters;
