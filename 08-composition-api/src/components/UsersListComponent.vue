<template>
  <slot v-for="user in users" :key="user.id" :user="user"></slot>
</template>

<script>
export default {
  name: 'UsersListComponent',
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  list-style-type: none;
}
</style>
