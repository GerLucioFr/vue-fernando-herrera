<template>
  <div class="users-container">
    <h1 v-if="isLoading">Loading...</h1>
    <h2 v-if="!isLoading && !usersData?.data?.length">Error</h2>

    <div v-if="!isLoading && usersData?.data?.length">
      <h1>Users</h1>
      <UsersListComponent :users="usersData?.data" v-slot="{ user }">
        <p>
          <strong>{{ user.first_name }} {{ user.last_name }}</strong
          >: {{ user.email }}
        </p>
      </UsersListComponent>
      <!-- <ul>
        <li
          v-for="{ id, email, first_name, last_name } in usersData.data"
          :key="id"
        >
          <p>
            <strong>{{ first_name }} {{ last_name }}</strong
            >: {{ email }}
          </p>
        </li>
      </ul> -->

      <div class="pagination">
        <button
          type="button"
          :disabled="usersData.page <= 1"
          @click="previousPage"
        >
          Previous
        </button>
        <span>{{ usersData.page }} of {{ usersData.total_pages }}</span>
        <button
          type="button"
          :disabled="usersData.page >= usersData.total_pages"
          @click="nextPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useUsers from '@/composables/useUsers';
import { defineAsyncComponent } from 'vue';
export default {
  name: 'UsersView',
  components: {
    UsersListComponent: defineAsyncComponent(() =>
      import(
        /*webpackChunkName: 'UsersListComponent'*/ '@/components/UsersListComponent'
      )
    ),
  },

  setup() {
    const { isLoading, usersData, previousPage, nextPage } = useUsers();

    return {
      isLoading,
      usersData,
      previousPage,
      nextPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
}
</style>
