// export const getter = (state) => {
//   return;
// };

export const authStatus = (state) => {
  return state.status;
};

export const name = (state) => {
  return state.name || '';
};
