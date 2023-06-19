<template>
  <div>
    <h1>Learning slots</h1>

    <button type="button" @click="showModal = true">Open modal</button>

    <ModalComponent
      title="My title"
      v-if="showModal"
      @on:close="showModal = false"
    >
      <template v-slot:header><h2>Title</h2> </template>
      <template v-slot:body>
        <p>
          Magna tempor labore elit laborum non veniam veniam ullamco qui culpa.
          Nisi aliquip Lorem ad sint quis sit velit esse mollit qui ullamco.
          Amet ex id do pariatur eiusmod fugiat ipsum cillum amet. Velit dolor
          quis reprehenderit magna laborum est aute anim ipsum consequat eu.
          Laboris ut laboris cillum eiusmod adipisicing. Esse Lorem pariatur
          pariatur proident do ullamco elit ea aliqua consequat.
        </p>
      </template>

      <template v-slot:footer>
        <button type="button" @click="showModal = false">Close</button>
      </template>

      <template v-slot:exposed="{ newTitle }">
        <p>{{ newTitle }}</p>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
export default {
  name: 'CustomSlotsView',
  components: {
    ModalComponent: defineAsyncComponent(() =>
      import(/*webpackChunkName: 'modal'*/ '@/components/ModalComponent')
    ),
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal,
    };
  },
};
</script>

<style lang="scss" scoped></style>
