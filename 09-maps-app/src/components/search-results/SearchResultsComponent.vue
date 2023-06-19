<template>
  <div class="loading" v-if="isLoadingPlaces">
    <h5>Loading places...</h5>
  </div>
  <div v-else-if="places.length" class="places-container">
    <div
      v-for="place in places"
      :key="place.id"
      class="place-item"
      :class="{ active: activePlace?.id === place.id }"
      @click="selectPlace(place)"
    >
      <p class="title">{{ place.text }}</p>
      <p class="direction">{{ place.place_name }}</p>
      <div class="actions">
        <button @click="getDirections(place)" type="button">
          Get directions
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';
import { Feature } from '@/interfaces';

export default defineComponent({
  name: 'SearchResultsComponent',
  setup() {
    const { isLoadingPlaces, places, userLocation } = usePlacesStore();
    const { map, setPlaceMarkers, getDirections } = useMapStore();

    watch(places, (newPlaces) => {
      setPlaceMarkers(newPlaces);
    });

    const activePlace = ref<Feature | undefined>();
    return {
      isLoadingPlaces,
      places,
      activePlace,
      selectPlace: (place: Feature) => {
        activePlace.value = place;
        map.value?.flyTo({
          center: place.center,
          zoom: 13,
        });
      },
      getDirections: (place: Feature) => {
        getDirections(userLocation.value, place.center);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.places-container {
  margin-top: 8px;

  border: 1px solid rgb(199, 199, 199);
  border-radius: 4px;

  background-color: white;

  .place-item {
    padding: 8px;

    cursor: pointer;

    &:hover {
      background-color: rgb(245, 251, 253);
    }

    &:not(:first-child) {
      border-top: 1px solid rgb(199, 199, 199);
    }

    &.active {
      background-color: rgb(83, 83, 83);
      color: white;
    }

    .title {
      margin: 4px;

      font-size: 18px;
      font-weight: 700;
    }

    .direction {
      margin: 8px 0;
    }

    button {
      padding: 8px 12px;

      color: white;
      background-color: rgb(0, 53, 151);

      border-radius: 4px;
      border: none;

      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    .actions {
      display: flex;
      justify-content: end;
    }
  }
}
</style>
