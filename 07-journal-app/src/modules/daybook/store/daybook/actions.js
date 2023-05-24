// export const action = async ({ commit }) => {};

// import { generateUuid } from '@/helpers/uuid';
import { showError, showSuccess } from '@/helpers/alert';
import { axiosInstance } from '@/http/api';
import { uploadFile } from '@/helpers/files';

const url = 'https://vue-demo-e8d58-default-rtdb.firebaseio.com';
const entriesAPI = axiosInstance(url);

export const getEntries = async ({ commit }) => {
  try {
    commit('changeIsLoading', { isLoading: true });
    let entries = [];

    const res = await entriesAPI.get('/entries.json');
    const data = res.data || {};
    const entriesKeys = Object.keys(data);

    for (const key of entriesKeys) {
      const entry = {
        ...data[key],
        id: key,
      };
      entries.push(entry);
    }

    commit('setEntries', { entries });
    commit('changeIsLoading', { isLoading: false });
  } catch (error) {
    showError({
      title: 'Error',
      text: error,
    });
    commit('changeIsLoading', { isLoading: false });
  }
};

export const createEntry = async ({ commit }, { entry }) => {
  try {
    commit('changeIsLoading', { isLoading: true });

    const res = await entriesAPI.post(`/entries.json`, entry);

    entry = {
      ...entry,
      id: res.data.name,
    };

    commit('createEntry', { entry });
    commit('changeIsLoading', { isLoading: false });

    showSuccess({ title: 'Success', text: 'Entry created' });
    return entry;
  } catch (error) {
    showError({
      title: 'Error',
      text: error,
    });
    commit('changeIsLoading', { isLoading: false });
  }
};

export const updateEntry = async ({ commit }, { entry }) => {
  try {
    commit('changeIsLoading', { isLoading: true });

    const url = `/entries/${entry.id}.json`;
    const res = await entriesAPI.put(url, entry);

    commit('updateEntry', { entry: res.data });
    commit('changeIsLoading', { isLoading: false });

    showSuccess({ title: 'Success', text: 'Entry updated' });
  } catch (error) {
    showError({
      title: 'Error',
      text: error,
    });
    commit('changeIsLoading', { isLoading: false });
  }
};

export const deleteEntry = async ({ commit }, { entry }) => {
  try {
    commit('changeIsLoading', { isLoading: true });

    const url = `/entries/${entry.id}.json`;
    await entriesAPI.delete(url);

    commit('deleteEntry', { entry });
    commit('changeIsLoading', { isLoading: false });

    showSuccess({ title: 'Success', text: 'Entry deleted' });
    await entriesAPI.delete(url, entry);
  } catch (error) {
    showError({
      title: 'Error',
      text: error,
    });
    commit('changeIsLoading', { isLoading: false });
  }
};

export const uploadEntryImage = async ({ commit }, { file }) => {
  try {
    commit('changeIsLoading', { isLoading: true });

    const { secure_url } = await uploadFile(file);

    commit('changeIsLoading', { isLoading: false });
    return secure_url;
  } catch (error) {
    showError({
      title: 'Error',
      text: error,
    });
    commit('changeIsLoading', { isLoading: false });
  }
};
