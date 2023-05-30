import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        text: 'Go to the office',
        completed: null,
      },
      {
        id: 2,
        text: 'Do exercise',
        completed: 'Mon May 29 2023',
      },
    ],
  },
  getters: {
    pendingTodos(state /**getters, rootState */) {
      return state.todos.filter((item) => !item.completed);
    },
    completedTodos: (state) => {
      return state.todos.filter((item) => item.completed);
    },
    todos: (state) => {
      return [...state.todos];
    },
    getByStatus: (_, getters) => (status) => {
      switch (status) {
        case 'all':
          return getters.todos;
        case 'pending':
          return getters.pendingTodos;
        case 'completed':
          return getters.completedTodos;
        default:
          return getters.todos;
      }
    },
  },
  mutations: {
    toggleToDo: (state, { id }) => {
      const taskId = state.todos.findIndex((item) => item.id === id);
      const currentStatus = state.todos[taskId].completed;
      state.todos[taskId].completed = currentStatus
        ? null
        : new Date().toDateString();
    },
    createToDo: (state, { todo }) => {
      if (!todo.text?.length) {
        return;
      }
      todo.id = Math.max(...state.todos.map((todo) => todo.id)) + 1;
      state.todos.unshift(todo);
    },
  },
  actions: {},
  modules: {},
});
