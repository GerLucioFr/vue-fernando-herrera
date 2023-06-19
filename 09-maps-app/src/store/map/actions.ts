import { ActionTree } from 'vuex';
import { MapState } from './state';
import { State } from '../state';
import { axiosInstance } from '@/api';
import { mapboxBasicParams } from '../places/actions';
import { NavigationResponse } from '@/interfaces/navigation';
import { mapsMutationsMethods } from './mutations';

const mapboxNavigationApiUrl =
  'https://api.mapbox.com/directions/v5/mapbox/driving';
const mapboxNavigationApi = axiosInstance(mapboxNavigationApiUrl, {
  ...mapboxBasicParams,
  alternatives: false,
  geometries: 'geojson',
  overview: 'full',
  steps: true,
});

const actions: ActionTree<MapState, State> = {
  async getDirections(
    { commit },
    { start, end }: { start: [number, number]; end: [number, number] }
  ): Promise<void> {
    try {
      const res = await mapboxNavigationApi.get<NavigationResponse>(
        `/${start.toString()};${end.toString()}`
      );

      const { geometry, distance, duration } = res.data.routes[0];
      const { coordinates } = geometry;

      commit(mapsMutationsMethods.setDuration, duration);
      commit(mapsMutationsMethods.setDistance, distance);

      commit(mapsMutationsMethods.setRoute, coordinates);
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

export default actions;
