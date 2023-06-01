<template>
  <router-view />
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth';
export default {
  setup() {
    const { validateAuth, authStatus } = useAuth();

    validateAuth();

    return { authStatus };
  },
};
</script>

<style src="./assets/scss/index.scss" lang="scss"></style>
