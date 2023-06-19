<template>
  <div class="modal-background" @click.self="$emit('on:close')">
    <div class="modal">
      <h1>Add Todo</h1>
      <form @submit.prevent="submit">
        <div class="form-input">
          <label for="text">Text</label>
          <input v-model="addTodo.text" type="text" id="text" />
        </div>

        <div class="buttons-container"><button type="submit">Save</button></div>
      </form>
    </div>
  </div>
</template>

<script>
import useTodos from '@/composables/useTodos';
export default {
  name: 'ModalComponent',
  emits: ['on:close'],
  props: {},
  setup(_, context) {
    const { addTodo, createTodo } = useTodos();

    return {
      addTodo,
      submit: async () => {
        try {
          await createTodo();
          context.emit('on:close');
        } catch (error) {
          console.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    width: 300px;
    height: min-content;
    padding: 16px 32px;

    text-align: left;

    background-color: white;
    border-radius: 8px;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    .form-input {
      display: flex;
      align-items: baseline;
      gap: 8px;

      width: 100%;
      margin-bottom: 16px;

      input {
        width: 100%;

        padding: 8px;
        border-radius: 4px;
      }
    }

    .buttons-container {
      display: flex;
      justify-content: flex-end;
    }

    button {
      padding: 8px 12px;
      background-color: rgb(0, 77, 145);
      color: white;
    }
  }
}
</style>
