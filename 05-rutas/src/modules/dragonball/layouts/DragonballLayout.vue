<template>
  <DragonballNavbarComponent />
  <div class="dragonball-container">
    <h1>Dragonball</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'DragonballLayout',
  components: {
    DragonballNavbarComponent: defineAsyncComponent(() =>
      import('@/modules/dragonball/components/DragonballNavbarComponent')
    ),
  },
};
</script>

<style scoped lang="scss">
.dragonball-container {
  padding: 2em;

  background-color: rgb(255, 225, 225);

  h1 {
    margin-bottom: 1em;
  }
}
</style>
