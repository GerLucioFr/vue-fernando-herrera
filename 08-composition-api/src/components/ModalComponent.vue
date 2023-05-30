<template>
  <div class="modal-background" @click.self="$emit('on:close')">
    <div class="modal">
      <slot name="header" />
      <slot name="body" />
      <slot name="footer" />

      <slot name="exposed" :newTitle="newTitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  emits: ['on:close'],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    console.log({ props, context });
    return {
      newTitle: props.title.toUpperCase(),
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
    width: 600px;
    height: min-content;
    padding: 16px 32px;

    text-align: left;

    background-color: white;
    border-radius: 8px;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    button {
      padding: 8px 12px;
      background-color: rgb(0, 77, 145);
      color: white;
    }
  }
}
</style>
