<template>
  <div>
    <h1>Search Pokemon</h1>
    <form @submit.prevent="onSubmit">
      <label for="search">Press Enter</label>
      <input
        type="number"
        min="1"
        placeholder="Search by Pokemon name"
        id="search"
        ref="searchInput"
        v-model="pokemonNumber"
      />
    </form>
  </div>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'SearchPokemonView',
  setup() {
    const router = useRouter();
    const pokemonNumber = ref(1);
    const searchInput = ref();

    onActivated(() => {
      searchInput.value.select();
    });

    return {
      pokemonNumber,
      searchInput,
      onSubmit: () => {
        router.push({
          name: 'pokemon',
          params: { id: pokemonNumber.value },
        });
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
