<template>
  <div>
    <h1>Reactive vs Ref</h1>
    <p>{{ ironman }} alive: {{ isIronmanAlive }}</p>
    <p>{{ batman }} alive: {{ isBatmanAlive }}</p>

    <button type="button" @click="changeIronman">Change Ironman</button>
    <button type="button" @click="changeBatman">Change Batman</button>
    <button type="button" @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  name: 'HomeView',
  setup() {
    const ironman = ref({ name: 'Tony Stark', age: 50 });
    const batman = reactive({ name: 'Bruce Wayne', age: 38 });

    const isIronmanAlive = ref(false);
    const isBatmanAlive = ref(true);

    return {
      ironman,
      batman,
      isIronmanAlive,
      isBatmanAlive,
      changeIronman: () => (ironman.value.age = 45),
      changeBatman: () => (batman.age = 35),
      changeStatus: () => {
        isIronmanAlive.value = !isIronmanAlive.value;
        isBatmanAlive.value = !isBatmanAlive.value;
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
