<template>
  <div class="users-container">
    <h1 v-if="isLoading">Loading...</h1>
    <h2 v-if="!isLoading && !usersData?.data?.length">Error</h2>

    <div v-if="!isLoading && usersData?.data?.length">
      <h1>Users</h1>
      <ul>
        <li
          v-for="{ id, email, first_name, last_name } in usersData.data"
          :key="id"
        >
          <p>
            <strong>{{ first_name }} {{ last_name }}</strong
            >: {{ email }}
          </p>
        </li>
      </ul>

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
export default {
  name: 'UsersView',
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
ul {
  padding: 0;
  list-style-type: none;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
}
</style>
