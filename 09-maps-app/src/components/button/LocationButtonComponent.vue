<template>
  <button v-if="isButtonReady" type="button" @click="onCenterButtonClick">
    Center map
  </button>
</template>

<script lang="ts">
import { usePlacesStore, useMapStore } from '@/composables';
import { computed } from 'vue';
export default {
  name: 'LocationButtonComponent',
  setup() {
    const { map, isMapReady } = useMapStore();
    const { isUserLocationReady, userLocation } = usePlacesStore();

    return {
      isButtonReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady.value
      ),
      onCenterButtonClick: () => {
        if (map.value) {
          map.value.flyTo({
            center: userLocation.value,
            zoom: 13,
          });
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  top: 16px;
  right: 16px;

  padding: 8px 12px;

  background-color: black;
  color: white;

  border-radius: 4px;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
</style>
