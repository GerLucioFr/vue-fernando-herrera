<template>
  <div class="home-container">
    <MapComponent />
    <LocationButtonComponent />
    <SearchbarComponent />
    <NavigationDetailsComponent />
  </div>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';
import MapComponent from '@/components/map-view/MapComponent.vue';
import LocationButtonComponent from '@/components/button/LocationButtonComponent.vue';
import SearchbarComponent from '@/components/search-bar/SearchbarComponent.vue';
import NavigationDetailsComponent from '@/components/navigation/NavigationDetailsComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MapComponent,
    LocationButtonComponent,
    SearchbarComponent,
    NavigationDetailsComponent,
  },
  setup() {
    usePlacesStore();

    return {};
  },
});
</script>

<style lang="scss" scoped></style>
