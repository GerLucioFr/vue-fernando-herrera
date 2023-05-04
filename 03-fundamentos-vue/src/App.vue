<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="container">
    <CounterComponent title="Get in" :start="1" />
    <CounterComponent title="Get out" />
  </div>
</template>

<script>
import CounterComponent from './components/CounterComponent.vue';
export default {
  name: 'App',
  components: {
    CounterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: space-around;
}
</style>
