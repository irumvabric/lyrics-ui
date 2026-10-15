import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import api from '@/services/api';

function parseAuthResponse(body) {
  const payload = body?.data ?? body ?? {};
  return {
    token: payload.access_token ?? payload.token ?? payload.auth_token,
    user: payload.user ?? body?.user ?? null,
  };
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || '');
  const user = ref(JSON.parse(localStorage.getItem('auth_user') || 'null'));
  const isAuthenticated = computed(() => Boolean(token.value));
  const isAdmin = computed(() => {
    const role = String(user.value?.role || '').toUpperCase();
    return role === 'ADMIN' || user.value?.is_admin === true;
  });
  const adminName = computed(() => user.value?.name || user.value?.username || 'Administrateur');

  function acceptSession(body) {
    const result = parseAuthResponse(body);
    if (!result.token) throw new Error('The auth API did not return an access token.');
    token.value = result.token;
    user.value = result.user;
    localStorage.setItem('token', result.token);
    localStorage.setItem('admin_auth', 'true');
    if (result.user) localStorage.setItem('auth_user', JSON.stringify(result.user));
    else localStorage.removeItem('auth_user');
    return result.user;
  }

  async function login(credentials) {
    const isAdminLogin = Boolean(credentials.username);
    const endpoint = isAdminLogin
      ? (import.meta.env.VITE_ADMIN_LOGIN_ENDPOINT || '/auth/login')
      : (import.meta.env.VITE_LOGIN_ENDPOINT || '/auth/login');
    const payload = {
      email: credentials.email || credentials.username,
      password: credentials.password,
      device_name: isAdminLogin ? 'Gospel Burundi Admin' : 'Gospel Burundi Web',
    };
    const { data } = await api.post(endpoint, payload);
    return acceptSession(data);
  }

  async function register(details) {
    const { data } = await api.post(import.meta.env.VITE_REGISTER_ENDPOINT || '/auth/register', details);
    return acceptSession(data);
  }

  function switchRole(role) {
    if (user.value) {
      user.value = { ...user.value, role };
      localStorage.setItem('auth_user', JSON.stringify(user.value));
    }
  }

  async function logout() {
    const currentToken = token.value;
    token.value = '';
    user.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('admin_auth');
    localStorage.removeItem('auth_user');
    try {
      await api.post(import.meta.env.VITE_LOGOUT_ENDPOINT || '/auth/logout', {}, {
        headers: currentToken ? { Authorization: `Bearer ${currentToken}` } : {},
      });
    } catch {
      // The local session is already cleared if the API logout request fails.
    }
  }

  window.addEventListener('auth:unauthorized', () => {
    token.value = '';
    user.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('admin_auth');
    localStorage.removeItem('auth_user');
  });

  return { token, user, isAuthenticated, isAdmin, adminName, login, register, switchRole, logout };
});
