import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const useAuth = () => {
  const store = useStore();
  const router = useRouter();

  const register = async (user) => {
    try {
      await store.dispatch('auth/createUser', { user });
      router.push({ name: 'daybook' });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (user) => {
    try {
      await store.dispatch('auth/signInUser', { user });
      router.push({ name: 'daybook' });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    store.commit('auth/logoutUser');
    store.commit('daybook/clearEntries');
    router.push({ name: 'login' });
  };

  const validateAuth = async () => {
    const status = await store.dispatch('auth/validateAuth');
    if (!status) {
      router.push({ name: 'login' });
    }
  };

  return {
    register,
    login,
    validateAuth,
    logout,
    authStatus: computed(() => store.getters['auth/authStatus']),
    name: computed(() => store.getters['auth/name']),
  };
};

export default useAuth;
