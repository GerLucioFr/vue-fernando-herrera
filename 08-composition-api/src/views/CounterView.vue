<template>
  <div class="counter-container">
    <h1>Counter</h1>
    <p>{{ counter }}</p>

    <button type="button" @click="minusCounter()">-1</button>
    <button type="button" @click="addCounter()">+1</button>
  </div>
</template>

<script>
import useCounter from '@/composables/useCounter';
export default {
  name: 'CounterView',
  props: {},
  emits: [],
  setup() {
    const { counter, addCounter, minusCounter } = useCounter(1);

    return { counter, addCounter, minusCounter };
  },
};
</script>

<style lang="scss" scoped></style>
