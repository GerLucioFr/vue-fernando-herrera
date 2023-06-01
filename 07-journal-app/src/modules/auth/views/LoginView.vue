<template>
  <span class="login100-form-title p-b-41"> Ingresar </span>
  <form
    class="login100-form validate-form p-b-33 p-t-5"
    @submit.prevent="onSubmit"
  >
    <div class="wrap-input100 validate-input" data-validate="Enter username">
      <input
        class="input100"
        type="email"
        placeholder="Email"
        required
        v-model="useForm.email"
      />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input
        class="input100"
        type="password"
        placeholder="Password"
        required
        v-model="useForm.password"
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn">Login</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'register' }"
        >Do you do not have an account?</router-link
      >
    </div>
  </form>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth';
import { ref } from 'vue';
export default {
  name: 'LoginView',
  setup() {
    const { login } = useAuth();
    const useForm = ref({
      email: '',
      password: '',
    });
    return {
      useForm,
      onSubmit: async () => {
        await login(useForm.value);
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
