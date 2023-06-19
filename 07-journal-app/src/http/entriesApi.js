import axios from 'axios';

export const axiosInstance = (baseURL, params) => {
  const instance = axios.create({
    baseURL,
    params,
  });

  instance.interceptors.request.use((config) => {
    config.params = {
      auth: localStorage.getItem('idToken'),
    };
    return config;
  });

  return instance;
};
