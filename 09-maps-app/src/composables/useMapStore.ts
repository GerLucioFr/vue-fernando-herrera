import { Feature } from '@/interfaces';
import { mapsMutationsMethods } from '@/store/map/mutations';
import { State } from '@/store/state';
import mapboxgl from 'mapbox-gl';
import { computed } from 'vue';
import { useStore } from 'vuex';

export const useMapStore = () => {
  const store = useStore<State>();

  return {
    map: computed<mapboxgl.Map | undefined>(() => store.state.map?.map),
    distance: computed<string>(() => {
      const { distance = 0 } = store.state.map;

      if (distance / 1000 > 1) {
        return `${(distance / 1000).toFixed(2)} km`;
      }
      return distance === 0 ? '' : `${distance} m`;
    }),
    duration: computed<string>(() => {
      const { duration = 0 } = store.state.map;
      if (duration / 3600 > 1) {
        return `${(duration / 60).toFixed(2)} h`;
      } else if (duration / 60 > 1) {
        return `${(duration / 60).toFixed(2)} min`;
      }
      return duration === 0 ? '' : `${duration} s`;
    }),
    isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),

    setMap: (map: mapboxgl.Map) =>
      store.commit(`map/${mapsMutationsMethods.setMap}`, map),
    setPlaceMarkers: (places: Feature[]) => {
      store.commit(`map/${mapsMutationsMethods.setPlaceMarkers}`, places);
    },
    getDirections: (start: [number, number], end: [number, number]) =>
      store.dispatch('map/getDirections', { start, end }),
  };
};
