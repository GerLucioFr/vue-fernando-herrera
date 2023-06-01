// export const action = async ({ commit }) => {};

import { register, updateName, signIn, getUserData } from '@/http/authApi';
import { showError, showSuccess } from '@/helpers/alert';

export const createUser = async ({ commit }, { user }) => {
  const { email, password } = user;
  commit('changeIsLoading', { isLoading: true });

  try {
    const { idToken, refreshToken } = await register({
      email,
      password,
      returnSecureToken: true,
    });
    await updateName(idToken, user.name);
    commit('loginUser', {
      user,
      idToken,
      refreshToken,
    });
    showSuccess({ title: 'Success', text: 'User created' });
    commit('changeIsLoading', { isLoading: false });
  } catch (error) {
    showError({
      title: 'Error',
      text: error,
    });
    commit('changeIsLoading', { isLoading: false });
    throw new Error(error);
  }
};

export const signInUser = async ({ commit }, { user }) => {
  commit('changeIsLoading', { isLoading: true });

  try {
    const { email, password } = user;

    const { idToken, refreshToken, displayName } = await signIn(
      email,
      password,
      true
    );
    user.name = displayName;
    commit('loginUser', {
      user,
      idToken,
      refreshToken,
    });
    showSuccess({ title: 'Success', text: 'Logged In' });
    commit('changeIsLoading', { isLoading: false });
  } catch (error) {
    showError({
      title: 'Error',
      text: error,
    });
    commit('changeIsLoading', { isLoading: false });
    throw new Error(error);
  }
};

export const validateAuth = async ({ commit }) => {
  commit('changeIsLoading', { isLoading: true });

  const idToken = localStorage.getItem('idToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!idToken) {
    commit('logoutUser');
    commit('changeIsLoading', { isLoading: false });

    return false;
  }

  try {
    const users = await getUserData(idToken);
    const { email, displayName } = users[0];
    commit('loginUser', {
      user: { email, name: displayName },
      idToken,
      refreshToken,
    });
    commit('changeIsLoading', { isLoading: false });
    return true;
  } catch (error) {
    commit('logoutUser');
    commit('changeIsLoading', { isLoading: false });
    return false;
  }
};
