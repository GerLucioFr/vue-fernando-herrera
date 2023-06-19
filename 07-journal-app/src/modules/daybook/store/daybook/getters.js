// export const getter = (state) => {
//   return;
// };

export const getFilteredEntries =
  (state) =>
  (filter = '') => {
    return state.entries.filter(
      (entry) =>
        entry.text.toLowerCase().includes(filter.toLowerCase()) ||
        entry.date.toLowerCase().includes(filter.toLowerCase())
    );
  };

export const getEntryById = (state) => (id) => {
  const entry = state.entries.find((entry) => entry.id === id);

  return entry ? { ...entry } : undefined;
};
