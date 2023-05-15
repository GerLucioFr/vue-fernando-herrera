<template>
  <div class="navbar">
    <div class="navbar-container">
      <LinkComponent v-for="item of links" :key="item.name" :link="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    LinkComponent: defineAsyncComponent(() => import('./LinkComponent.vue')),
  },
  data() {
    return {
      links: [
        {
          to: { name: 'PokemonHome' },
          name: 'Pokemon',
        },
        {
          to: { name: 'DragonballHome' },
          name: 'DragonBall',
        },
      ],
    };
  },
  name: 'NavbarComponent',
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  padding: 12px;

  background-color: rgb(0, 45, 141);
  color: white;

  &-container {
    display: flex;
    justify-content: space-around;
  }
}
</style>
