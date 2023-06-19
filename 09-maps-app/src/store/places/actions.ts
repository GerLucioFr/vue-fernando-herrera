import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { State } from '../state';
import { mutationsMethods } from './mutations';
import { axiosInstance } from '@/api';
import { Language, PlacesResponse } from '@/interfaces';
import { mapBoxToken } from '../../../token';

export const mapboxBasicParams = {
  language: Language.En,
  access_token: mapBoxToken,
};

const mapboxPlacesApiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const mapboxPlacesApi = axiosInstance(mapboxPlacesApiUrl, mapboxBasicParams);

const actions: ActionTree<PlacesState, State> = {
  getInitialLocation({ commit }): void {
    commit(mutationsMethods.setIsLoading, true);

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { coords } = position;

        commit(mutationsMethods.setCurrentPosition, coords);
        commit(mutationsMethods.setIsLoading, false);
      },
      (err: GeolocationPositionError) => {
        commit(mutationsMethods.setIsLoading, false);

        throw new Error(err.message);
      }
    );
  },

  async searchPlaces({ commit, state }, query: string): Promise<void> {
    commit(mutationsMethods.setIsLoadingPlaces, true);

    query = query.trim();
    if (!query.length || !state.userLocation) {
      commit(mutationsMethods.setPlaces, []);
      commit(mutationsMethods.setIsLoadingPlaces, false);

      return;
    }
    try {
      const res = await mapboxPlacesApi.get<PlacesResponse>(`/${query}.json`, {
        params: {
          proximity: state.userLocation?.toString(),
        },
      });
      commit(mutationsMethods.setPlaces, res.data?.features);
      commit(mutationsMethods.setIsLoadingPlaces, false);
    } catch (error: any) {
      commit(mutationsMethods.setIsLoadingPlaces, false);
      throw new Error(error);
    }
  },
};

export default actions;
