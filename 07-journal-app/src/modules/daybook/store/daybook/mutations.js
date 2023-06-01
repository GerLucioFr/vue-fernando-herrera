// export const mutation = (state) => {};

export const changeIsLoading = (state, { isLoading }) => {
  state.isLoading = isLoading;
};

export const setEntries = (state, { entries }) => {
  state.entries = [...state.entries, ...entries];
};

export const createEntry = (state, { entry }) => {
  state.entries.unshift(entry);
};

export const updateEntry = (state, { entry }) => {
  state.entries = state.entries.map((item) => {
    if (item.id === entry.id) {
      return { ...item, ...entry };
    }
    return item;
  });
};

export const deleteEntry = (state, { entry }) => {
  state.entries = state.entries.filter((item) => item.id !== entry.id);
};

export const clearEntries = (state) => {
  state.entries = [];
};
