<template>
  <div>
    <h1>Todo list</h1>

    <button type="button" @click="showAddModal = true">Add new ToDo</button>

    <h5>(Double click to change task status)</h5>

    <button
      :class="{ active: currentTab === 'all' }"
      type="button"
      @click="currentTab = 'all'"
    >
      All
    </button>
    <button
      :class="{ active: currentTab === 'pending' }"
      type="button"
      @click="currentTab = 'pending'"
    >
      Pending
    </button>
    <button
      :class="{ active: currentTab === 'completed' }"
      type="button"
      @click="currentTab = 'completed'"
    >
      Completed
    </button>

    <ul>
      <li
        v-for="{ id, text, completed } in getByStatus"
        :key="id"
        :class="{ completed: completed }"
        @dblclick="changeTaskStatus(id)"
      >
        {{ text }} {{ completed ? 'at ' + completed : '' }}
      </li>
    </ul>

    <ModalAddTodoComponent
      v-if="showAddModal"
      @on:close="showAddModal = false"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import useTodos from '@/composables/useTodos';
export default {
  name: 'TodoView',
  components: {
    ModalAddTodoComponent: defineAsyncComponent(() =>
      import(/*webpackChunkName: 'modal'*/ '@/components/ModalAddTodoComponent')
    ),
  },
  setup() {
    const { currentTab, showAddModal, getByStatus, changeTaskStatus } =
      useTodos();

    return {
      currentTab,
      showAddModal,
      getByStatus,
      changeTaskStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: rgb(0, 34, 128);
  color: white;
}

.completed {
  text-decoration: line-through;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
}
</style>
