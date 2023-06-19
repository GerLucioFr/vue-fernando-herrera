<template>
  <div class="searchbar-container">
    <input
      type="search"
      id=""
      v-model="searchTerm"
      placeholder="Search places"
    />
    <SearchResultsComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import SearchResultsComponent from '../search-results/SearchResultsComponent.vue';
import { usePlacesStore } from '@/composables';

export default defineComponent({
  name: 'SearchbarComponent',
  components: {
    SearchResultsComponent,
  },
  setup() {
    const { searchPlaces } = usePlacesStore();

    const debounceTimeout = ref();
    const debounceValue = ref('');

    return {
      searchTerm: computed({
        get(): string {
          return debounceValue.value;
        },
        set(value: string) {
          if (debounceTimeout.value) {
            clearTimeout(debounceTimeout.value);
          }
          debounceTimeout.value = setTimeout(async () => {
            debounceValue.value = value;
            await searchPlaces(value);
          }, 500);
        },
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
.searchbar-container {
  position: fixed;
  top: 16px;
  left: 16px;

  max-width: 400px;

  padding: 12px;

  background-color: rgb(245, 251, 253);

  border-radius: 8px;

  box-shadow: 5px 5px 5px rgba($color: #000000, $alpha: 0.2);

  input {
    width: 376px;

    padding: 12px 16px;

    border-radius: 8px;

    border: 1px solid blue;

    &:focus {
      outline: none;
    }
  }
}
</style>
