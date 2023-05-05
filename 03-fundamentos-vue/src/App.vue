<template>
  <div class="container">
    <!-- <CounterComponent title="Get in" :start="1" />
    <CounterComponent title="Get out" /> -->
    <IndecisionComponent />
  </div>
</template>

<script>
import IndecisionComponent from './components/IndecisionComponent.vue';
export default {
  name: 'App',
  components: {
    IndecisionComponent,
  },
};
</script>

<style></style>
