<template>
  <div class="container">
    <CounterComponent title="Get in" :start="100" />
    <CounterComponent title="Get out" />
    <IndecisionComponent />
  </div>
</template>

<script>
import IndecisionComponent from './components/IndecisionComponent.vue';
import CounterComponent from './components/CounterComponent.vue';
export default {
  name: 'App',
  components: {
    IndecisionComponent,
    CounterComponent,
  },
};
</script>

<style></style>
