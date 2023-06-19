<template>
  <div class="details-container" v-if="distance">
    <p>
      Distance: <b>{{ distance }}</b>
    </p>
    <p>
      Duration: <b>{{ duration }}</b>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
  name: 'NavigationDetailsComponent',
  setup() {
    const { distance, duration } = useMapStore();
    return { distance, duration };
  },
});
</script>

<style lang="scss" scoped>
.details-container {
  position: fixed;
  bottom: 16px;
  right: 16px;

  padding: 0 8px;

  border-radius: 4px;

  background-color: rgb(255, 252, 78);
}
</style>
