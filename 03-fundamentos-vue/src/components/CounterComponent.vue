<template>
  <div class="counter-container">
    <h1>{{ setTitle }}</h1>
    <p>{{ counter }}{{ setPersonsCopy }}</p>

    <div>
      <button type="button" :disabled="counter === 0" @click="decreaseCounter">
        Decrease -
      </button>
      <button type="button" @click="increaseCounter">Increase +</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 0,
      validator(value) {
        return !value || value >= 0;
      },
    },
  },
  name: 'CounterComponent',
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      if (this.counter === 0) {
        return;
      }

      this.counter--;
    },
  },
  computed: {
    setPersonsCopy() {
      return this.counter === 0
        ? ''
        : this.counter === 1
        ? ' person'
        : ' people';
    },
    setTitle() {
      return this.title || 'Counter';
    },
  },
};
</script>

<style>
button {
  margin: 16px;
  padding: 4px 8px;

  background-color: rgb(0, 151, 58);
  color: white;
  border: none;
  border-radius: 8px;
}

button:hover {
  background-color: rgb(0, 90, 35);
}

button:disabled {
  background-color: rgb(241, 241, 241);
  color: rgb(0, 0, 0);
}
</style>
