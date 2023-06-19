import { MutationTree } from 'vuex';
import { PlacesState } from './state';
import { Feature } from '@/interfaces';

export const mutationsMethods = {
  setCurrentPosition: 'setCurrentPosition',
  setIsLoading: 'setIsLoading',
  setPlaces: 'setPlaces',
  setIsLoadingPlaces: 'setIsLoadingPlaces',
};

const mutation: MutationTree<PlacesState> = {
  setCurrentPosition(state: PlacesState, coords: GeolocationCoordinates): void {
    const { longitude, latitude } = coords;
    state.userLocation = [longitude, latitude];
  },

  setIsLoading(state: PlacesState, value: boolean): void {
    state.isLoading = value;
  },

  setIsLoadingPlaces(state: PlacesState, value: boolean): void {
    state.isLoadingPlaces = value;
  },

  setPlaces(state: PlacesState, places: Feature[]): void {
    state.places = places;
  },
};

export default mutation;
