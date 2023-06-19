<template>
  <div>
    <h1>About</h1>
    <p>{{ title }}</p>

    <button type="button" @click="changeTitle">Change title</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  onBeforeMount,
  onMounted,
  onRenderTriggered,
  onRenderTracked,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onActivated,
  onDeactivated,
} from 'vue';
export default {
  setup() {
    console.log('Setup');
    const title = ref('Hello');

    onBeforeMount(() => {
      console.log('onBeforeUnmount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });

    return {
      title,
      changeTitle: () => (title.value = 'Bye'),
    };
  },
};
</script>

<style lang="scss" scoped></style>
