import { axiosInstance } from '@/http/api';

const url = 'https://reqres.in/api/users';

export const getUsers = async (pagination) => {
  try {
    const usersAPI = axiosInstance(url);
    const { page = 1, per_page = 6 } = pagination;
    const res = await usersAPI.get('', {
      params: {
        page,
        per_page,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
