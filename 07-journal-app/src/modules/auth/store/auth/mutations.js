// export const mutation = (state) => {};

export const changeIsLoading = (state, { isLoading }) => {
  state.isLoading = isLoading;
};

export const loginUser = (state, { user, idToken, refreshToken }) => {
  const { name, email } = user;

  if (idToken) {
    localStorage.setItem('idToken', idToken);
    state.idToken = idToken;
  }
  if (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken);
    state.refreshToken = refreshToken;
  }
  state.status = 'authenticated';
  state.name = name;
  state.email = email;
};

export const logoutUser = (state) => {
  localStorage.removeItem('idToken');
  localStorage.removeItem('refreshToken');
  state.idToken = null;
  state.refreshToken = null;
  state.name = null;
  state.email = null;
  state.status = 'not-authenticated';
};
