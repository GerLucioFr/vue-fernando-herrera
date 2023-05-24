<template>
  <div v-if="!isLoading" class="d-flex justify-content-center">
    <h3 class="align-self-center">No entry selected</h3>
  </div>

  <div v-else class="loading align-self-center">
    <CircleLoaderComponent />
    <h5>Loading entry</h5>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState } from 'vuex';
export default {
  name: 'NoEntrySelected',
  components: {
    CircleLoaderComponent: defineAsyncComponent(() =>
      import('@/modules/shared/components/CircleLoaderComponent')
    ),
  },
  computed: {
    ...mapState('daybook', ['isLoading']),
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}

.loading {
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100%;
}
</style>
