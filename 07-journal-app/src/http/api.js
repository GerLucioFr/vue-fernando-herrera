import axios from 'axios';

export const axiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
  });
};
