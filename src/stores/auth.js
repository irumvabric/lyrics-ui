import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin',
};

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(
    localStorage.getItem('admin_auth') === 'true'
  );

  const adminName = computed(() => 'Administrateur');

  function login(username, password) {
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      isAuthenticated.value = true;
      localStorage.setItem('admin_auth', 'true');
      return true;
    }
    return false;
  }

  function logout() {
    isAuthenticated.value = false;
    localStorage.removeItem('admin_auth');
  }

  return {
    isAuthenticated,
    adminName,
    login,
    logout,
  };
});
