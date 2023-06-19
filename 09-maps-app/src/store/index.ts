import { createStore } from 'vuex';
import { State } from './state';
import placesModule from './places';
import mapModule from './map';

export default createStore<State>({
  modules: {
    places: placesModule,
    map: mapModule,
  },
});
