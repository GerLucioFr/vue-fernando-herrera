<template>
  <NavbarComponent />

  <div class="container">
    <div class="d-flex">
      <div class="col-4">
        <EntryListComponent />
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'DaybookLayout',
  components: {
    NavbarComponent: defineAsyncComponent(() =>
      import('../components/NavbarComponent')
    ),
    EntryListComponent: defineAsyncComponent(() =>
      import('../components/EntryListComponent')
    ),
  },
};
</script>

<style scoped lang="scss"></style>
