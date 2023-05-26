<template>
  <div v-if="!isLoading && pokemon">
    <h1>It's {{ pokemon.name }} #{{ pokemon.id }}</h1>

    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>

  <div v-if="isLoading">Loading data...</div>
  <router-link :to="{ name: 'search' }">Go back</router-link>
</template>

<script>
import usePokemon from '@/composables/usePokemon';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { watch } from 'vue';
export default {
  name: 'PokemonView',
  setup() {
    const route = useRoute();
    const { isLoading, pokemon, searchPokemon } = usePokemon(route.params?.id);

    watch(
      () => route.params.id,
      (value) => {
        searchPokemon(value);
      }
    );

    onBeforeRouteLeave(() => {
      return window.confirm('Are you sure you want to leave?');
    });

    return { isLoading, pokemon };
  },
};
</script>

<style lang="scss" scoped></style>
