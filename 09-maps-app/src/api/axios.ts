import axios from 'axios';

export type CustomParamValue =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | null
  | undefined;

interface CustomParams {
  [key: string]: CustomParamValue;
}

export const axiosInstance = (
  baseURL: string,
  params?: CustomParams,
  headers?: CustomParams
) => {
  return axios.create({
    baseURL,
    params,
    headers,
  });
};
