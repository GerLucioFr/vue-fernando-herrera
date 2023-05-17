<template>
  <div>
    <h1>Counter</h1>
    <h3>Direct access: {{ $store.state.counter.count }}</h3>
    <h3>Computed {{ countComputed }}</h3>
    <h3>Map state: {{ count }}</h3>
    <h3>Map state isLoading: {{ isLoading }}</h3>

    <h3>Direct square: {{ $store.getters['counter/getCountSquare'] }}</h3>
    <h3>Map getters: {{ getCountSquare }}</h3>

    <button @click="decrement" type="button">Decrease</button>
    <button @click="increment" type="button">Increase</button>
    <button @click="incrementBy" type="button">Increase by 5</button>
    <button :disabled="isLoading" @click="incrementRandom" type="button">
      Increase Random
    </button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'CounterComponent',
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    // ...mapState(['count']),
    ...mapState('counter', {
      count: 'count',
      isLoading: 'isLoading',
    }),
    ...mapGetters('counter', ['getCountSquare']),
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment');
    },
    decrement() {
      this.$store.commit('counter/decrement');
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', { value: 5 });
    },
    ...mapActions('counter', ['incrementRandom']),
  },
};
</script>

<style></style>
