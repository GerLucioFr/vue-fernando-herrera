<template>
  <div v-if="!isLoading" class="list-container">
    <div class="row">
      <input
        class="form-control"
        type="search"
        placeholder="Search an entry"
        v-model="filter"
      />
    </div>

    <div class="scrollable mt-4">
      <ul v-if="filterEntries.length" class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="entry in filterEntries"
          :key="entry.div"
        >
          <EntryComponent :entry="entry" />
        </li>
      </ul>
      <div v-else class="d-flex justify-content-center">
        <h3>No entries</h3>
      </div>
    </div>
    <button class="btn btn-primary mt-4" @click="goToCreate">
      <i class="fa fa-plus"></i>
      New Entry
    </button>
  </div>

  <div v-else class="loading">
    <CircleLoaderComponent />
    <h5>Loading entries</h5>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'EntryListComponent',
  components: {
    EntryComponent: defineAsyncComponent(() =>
      import('../components/EntryComponent')
    ),
    CircleLoaderComponent: defineAsyncComponent(() =>
      import('@/modules/shared/components/CircleLoaderComponent')
    ),
  },
  data() {
    return {
      filter: '',
    };
  },
  computed: {
    ...mapGetters('daybook', ['getFilteredEntries']),
    ...mapState('daybook', ['isLoading']),
    filterEntries() {
      return this.getFilteredEntries(this.filter);
    },
  },
  methods: {
    goToCreate() {
      this.$router.push({ name: 'entry', params: { id: 'add' } });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
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

  .btn {
    width: 100%;
  }
}

.loading {
  display: flex;
  flex-direction: column;

  align-items: center;
}
</style>
