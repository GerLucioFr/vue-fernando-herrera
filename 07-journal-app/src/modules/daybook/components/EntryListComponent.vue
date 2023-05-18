<template>
  <div class="row">
    <input class="form-control" type="search" placeholder="Search an entry" />
  </div>

  <div class="scrollable mt-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="item in 100" :key="item">
        <EntryComponent />
      </li>
    </ul>
  </div>
  <button class="btn btn-primary mt-4">
    <i class="fa fa-plus"></i>
    New Entry
  </button>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'EntryListComponent',
  components: {
    EntryComponent: defineAsyncComponent(() =>
      import('../components/EntryComponent')
    ),
  },
};
</script>

<style lang="scss" scoped>
.scrollable {
  max-height: calc(100vh - 240px);
  overflow-y: auto;
}

.list-group-item {
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
  }
}

button {
  width: 100%;
}
</style>
