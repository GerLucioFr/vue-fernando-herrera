import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useTodos = () => {
  const store = useStore();

  const currentTab = ref('all');
  const showAddModal = ref(false);
  const addTodo = ref({
    id: null,
    text: '',
    completed: null,
  });
  return {
    currentTab,
    showAddModal,
    addTodo,
    getByStatus: computed(() => store.getters['getByStatus'](currentTab.value)),
    changeTaskStatus: (id) => {
      store.commit('toggleToDo', { id });
    },
    createTodo: () => {
      return new Promise((resolve, reject) => {
        if (!addTodo.value.text.length) {
          reject('Invalid value for text');
        }
        store.commit('createToDo', { todo: addTodo.value });
        resolve('Success');
      });
    },
    closeModal: () => {
      console.log('hola');
      showAddModal.value = false;
    },
  };
};

export default useTodos;
