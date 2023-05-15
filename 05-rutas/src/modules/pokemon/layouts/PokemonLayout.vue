<template>
  <PokemonNavbarComponent />
  <div class="pokemon-container">
    <h1>Pokemon</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'PokemonLayout',
  components: {
    PokemonNavbarComponent: defineAsyncComponent(() =>
      import('@/modules/pokemon/components/PokemonNavbarComponent')
    ),
  },
};
</script>

<style scoped lang="scss">
.pokemon-container {
  padding: 2em;

  background-color: rgb(141, 209, 255);

  h1 {
    margin-bottom: 1em;
  }
}
</style>
