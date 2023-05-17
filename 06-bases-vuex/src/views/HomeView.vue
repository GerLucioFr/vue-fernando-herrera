<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CounterComponent />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'HomeView',
  components: {
    CounterComponent: defineAsyncComponent(() =>
      import(
        /*webpackChunkName: 'CounterComponent'*/ '@/components/CounterComponent'
      )
    ),
  },
};
</script>
