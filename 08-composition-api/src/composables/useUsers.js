import { ref } from 'vue';
import { getUsers } from '@/helpers/users';

const useUsers = () => {
  const isLoading = ref(false);
  const usersData = ref({
    page: 1,
    per_page: 1,
    total: 1,
    total_pages: 1,
    data: [],
  });

  const onGetUsers = async (page, per_page) => {
    isLoading.value = true;
    usersData.value = await getUsers({ page, per_page });
    isLoading.value = false;
  };

  onGetUsers({ page: 1, per_page: 6 });

  return {
    isLoading,
    usersData,

    onGetUsers,
    previousPage: () =>
      onGetUsers(usersData.value.page - 1, usersData.value.per_page),
    nextPage: () =>
      onGetUsers(usersData.value.page + 1, usersData.value.per_page),
  };
};

export default useUsers;
