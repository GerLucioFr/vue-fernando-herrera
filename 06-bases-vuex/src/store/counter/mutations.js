export const increment = (state) => {
  state.count++;
};

export const decrement = (state) => {
  state.count--;
};

export const incrementBy = (state, { value }) => {
  state.count += value;
};

export const changeIsLoading = (state, { value }) => {
  state.isLoading = value;
};
