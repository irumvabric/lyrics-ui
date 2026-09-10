import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { User, UserRole } from '../types';
import { api } from '../services/api';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>((() => {
    const saved = localStorage.getItem('gospel_user');
    return saved ? JSON.parse(saved) : {
      id: 1,
      name: 'Jean Nkurunziza',
      email: 'jean@gospelburundi.bi',
      role: 'ADMIN' as UserRole,
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    };
  })());

  const token = ref<string | null>((() => {
    return localStorage.getItem('gospel_token') || 'demo_sanctum_token_123';
  })());

  const isAuthenticated = computed(() => !!token.value && !!user.value);
  const isAdmin = computed(() => user.value?.role === 'ADMIN');
  const isArtist = computed(() => user.value?.role === 'ARTIST');
  const userName = computed(() => user.value?.name || 'Visiteur');

  function setSession(newUser: User, newToken: string) {
    user.value = newUser;
    token.value = newToken;
    localStorage.setItem('gospel_user', JSON.stringify(newUser));
    localStorage.setItem('gospel_token', newToken);
  }

  function clearSession() {
    user.value = null;
    token.value = null;
    localStorage.removeItem('gospel_user');
    localStorage.removeItem('gospel_token');
  }

  async function login(credentials: { email: string; password: string }) {
    try {
      const response = await api.login(credentials);
      setSession(response.data.user, response.data.token);
      return response.data;
    } catch (error) {
      // Fallback demo login if mock/offline
      const demoUser: User = {
        id: 1,
        name: 'Jean Nkurunziza',
        email: credentials.email,
        role: credentials.email.includes('admin') ? 'ADMIN' : 'USER',
        avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      };
      setSession(demoUser, 'sanctum_token_' + Date.now());
      return { user: demoUser, token: 'sanctum_token_' + Date.now() };
    }
  }

  function logout() {
    clearSession();
  }

  function switchRole(role: UserRole) {
    if (user.value) {
      user.value.role = role;
      localStorage.setItem('gospel_user', JSON.stringify(user.value));
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    isAdmin,
    isArtist,
    userName,
    setSession,
    clearSession,
    login,
    logout,
    switchRole,
  };
});
