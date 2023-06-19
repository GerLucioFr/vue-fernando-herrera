import { useMapStore, usePlacesStore } from '@/composables';
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue';
import mapboxgl from 'mapbox-gl';

export default defineComponent({
  name: 'MapComponent',
  setup() {
    const { isLoading, userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore();
    const mapElement = ref<HTMLDivElement>();

    onMounted(() => {
      if (isUserLocationReady.value) {
        initMap();
      }
    });

    watch(isUserLocationReady, () => {
      if (isUserLocationReady.value) {
        initMap();
      }
    });

    const initMap = async () => {
      nextTick(() => {
        if (mapElement.value) {
          const map = new mapboxgl.Map({
            container: mapElement.value,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: userLocation.value,
            zoom: 13,
          });

          const customPopup = new mapboxgl.Popup()
            .setLngLat(userLocation.value)
            .setHTML(`<h4>Your current Location</h4>`);

          new mapboxgl.Marker()
            .setLngLat(userLocation.value)
            .setPopup(customPopup)
            .addTo(map);

          setMap(map);
        }
      });
    };

    return { isLoading, userLocation, isUserLocationReady, mapElement };
  },
});
