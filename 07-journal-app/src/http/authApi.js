import { fireBaseKey } from '@/keys';
import { axiosInstance } from './api';

const url = 'https://identitytoolkit.googleapis.com/v1/accounts';
const authAxios = axiosInstance(url, { key: fireBaseKey });

export const register = async (user) => {
  try {
    const res = await authAxios.post(':signUp', user);
    return res.data;
  } catch (error) {
    const { code, message } = error.response.data.error;
    throw new Error(`code: ${code}, error: ${message}`);
  }
};

export const updateName = async (idToken, displayName) => {
  try {
    const res = await authAxios.post(':update', {
      idToken,
      displayName,
    });
    return res.data;
  } catch (error) {
    const { code, message } = error.response.data.error;
    throw new Error(`code: ${code}, error: ${message}`);
  }
};

export const signIn = async (email, password, returnSecureToken) => {
  try {
    const res = await authAxios.post(':signInWithPassword', {
      email,
      password,
      returnSecureToken,
    });
    return res.data;
  } catch (error) {
    const { code } = error.response.data.error;
    throw new Error(`code: ${code}, error: invalid email or password`);
  }
};

export const getUserData = async (idToken) => {
  try {
    const res = await authAxios.post(':lookup', {
      idToken,
    });
    return res.data.users;
  } catch (error) {
    const { code, message } = error.response.data.error;
    throw new Error(`code: ${code}, error: ${message}`);
  }
};
