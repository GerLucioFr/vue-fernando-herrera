<template>
  <NavbarComponent />

  <div class="container">
    <div class="row">
      <div class="entries-component col-4">
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
import { mapActions } from 'vuex';
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
  created() {
    this.getEntries();
  },
  methods: {
    ...mapActions('daybook', ['getEntries']),
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 88px);
}

.row {
  height: calc(100vh - 88px);
}

.entries-component {
  border-right: 2px solid rgb(224, 224, 224);
}
</style>
