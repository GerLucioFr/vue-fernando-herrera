<template>
  <div class="pokemon-navbar">
    <div class="pokemon-navbar-container">
      <LinkComponent v-for="item of links" :key="item.name" :link="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    LinkComponent: defineAsyncComponent(() =>
      import('@/modules/shared/components/LinkComponent')
    ),
  },
  data() {
    return {
      links: [
        {
          to: { name: 'PokemonHome' },
          name: 'Home',
        },
        {
          to: { name: 'PokemonDetails', params: { id: 9 } },
          name: 'Details',
        },
        {
          to: { name: 'PokemonAbout' },
          name: 'About',
        },
        {
          to: { url: 'https://vuejs.org/' },
          name: 'Vue Docs',
        },
      ],
    };
  },
  name: 'PokemonNavbarComponent',
};
</script>

<style scoped lang="scss">
.pokemon-navbar {
  width: 100%;
  padding: 12px;

  background-color: rgb(194, 45, 0);
  color: white;

  &-container {
    display: flex;
    justify-content: space-around;
  }
}
</style>
