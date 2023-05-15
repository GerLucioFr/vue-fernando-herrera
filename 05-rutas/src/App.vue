<template>
  <NavbarComponent />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'App',
  components: {
    NavbarComponent: defineAsyncComponent(() =>
      import(
        /*webpackChunkName: 'NavbarComponent'*/ './modules/shared/components/NavbarComponent'
      )
    ),
  },
};
</script>

<style src="./assets/css/index.scss" lang="scss"></style>
