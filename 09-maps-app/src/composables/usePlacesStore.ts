import { useStore } from 'vuex';
import { State } from '@/store/state';
import { computed, onMounted } from 'vue';
import { Feature } from '@/interfaces';

export const usePlacesStore = () => {
  const store = useStore<State>();

  onMounted(() => {
    const location = store.getters['places/isUserLocationReady'];

    if (!location) {
      try {
        store.dispatch('places/getInitialLocation');
      } catch (error) {
        console.error(error);
      }
    }
  });

  return {
    isLoading: computed<boolean>(() => store.state.places?.isLoading || false),
    userLocation: computed<[number, number]>(
      () => store.state.places?.userLocation || [1, 1]
    ),
    isUserLocationReady: computed<boolean>(
      () => store.getters['places/isUserLocationReady']
    ),
    isLoadingPlaces: computed<boolean>(
      () => store.state.places?.isLoadingPlaces || false
    ),
    places: computed<Feature[]>(() => store.state.places?.places || []),
    searchPlaces: (query = '') => store.dispatch('places/searchPlaces', query),
  };
};
