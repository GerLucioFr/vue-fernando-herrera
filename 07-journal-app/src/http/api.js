import axios from 'axios';

export const axiosInstance = (baseURL, params) => {
  return axios.create({
    baseURL,
    params,
  });
};
