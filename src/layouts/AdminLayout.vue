<template>
  <div class="min-h-screen bg-[#080A0A] flex">
    <!-- ─── Sidebar ─── -->
    <aside
      class="fixed inset-y-0 left-0 z-40 flex flex-col bg-[#0C0E0E] border-r border-white/5 transition-all duration-300"
      :class="sidebarOpen ? 'w-56' : 'w-16'"
    >
      <!-- Logo -->
      <div class="h-14 flex items-center px-4 border-b border-white/5 shrink-0">
        <router-link to="/admin/dashboard" class="flex items-center gap-2.5 min-w-0">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1F8A4C] to-[#155e34] flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <span v-if="sidebarOpen" class="text-sm font-extrabold text-white whitespace-nowrap overflow-hidden">
            Gospel <span class="text-[#1F8A4C]">Admin</span>
          </span>
        </router-link>
      </div>

      <!-- Nav items -->
      <nav class="flex-1 py-4 overflow-y-auto overflow-x-hidden">
        <div class="space-y-0.5 px-2">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium transition-all group"
            :class="isActive(item.to)
              ? 'bg-[#1F8A4C]/15 text-[#1F8A4C]'
              : 'text-[#777777] hover:text-white hover:bg-white/5'"
          >
            <span class="shrink-0 w-5 h-5 flex items-center justify-center" v-html="item.icon"></span>
            <span v-if="sidebarOpen" class="whitespace-nowrap overflow-hidden text-ellipsis">{{ item.label }}</span>
          </router-link>
        </div>
      </nav>

      <!-- Bottom -->
      <div class="px-2 py-4 border-t border-white/5 space-y-1">
        <router-link
          to="/"
          class="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-[#777777] hover:text-white hover:bg-white/5 transition-all"
          target="_blank"
        >
          <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          <span v-if="sidebarOpen" class="whitespace-nowrap">Voir le site</span>
        </router-link>
        <button
          @click="handleLogout"
          class="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-[#777777] hover:text-red-400 hover:bg-red-500/5 transition-all"
        >
          <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <span v-if="sidebarOpen" class="whitespace-nowrap">Déconnexion</span>
        </button>
      </div>
    </aside>

    <!-- ─── Main area ─── -->
    <div class="flex-1 flex flex-col min-h-screen transition-all duration-300" :class="sidebarOpen ? 'ml-56' : 'ml-16'">
      <!-- Topbar -->
      <header class="sticky top-0 z-30 h-14 bg-[#080A0A]/95 backdrop-blur border-b border-white/5 flex items-center px-6 gap-4">
        <!-- Toggle sidebar -->
        <button @click="sidebarOpen = !sidebarOpen" class="p-1.5 rounded-lg text-[#777777] hover:text-white hover:bg-white/5 transition-colors shrink-0">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <!-- Page title -->
        <h1 class="text-sm font-semibold text-white">{{ pageTitle }}</h1>
        <!-- Spacer -->
        <div class="flex-1"></div>
        <!-- Admin badge -->
        <div class="flex items-center gap-2 text-xs text-[#666666]">
          <div class="w-6 h-6 rounded-full bg-[#1F8A4C]/20 flex items-center justify-center">
            <svg class="w-3.5 h-3.5 text-[#1F8A4C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
          <span>Administrateur</span>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 p-6 text-white">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const sidebarOpen = ref(true);

const navItems = [
  {
    to: '/admin/dashboard',
    label: 'Tableau de bord',
    icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  },
  {
    to: '/admin/artists',
    label: 'Artistes',
    icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  },
  {
    to: '/admin/albums',
    label: 'Albums',
    icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
  },
  {
    to: '/admin/songs',
    label: 'Chansons & Paroles',
    icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>`,
  },
  {
    to: '/admin/genres',
    label: 'Genres',
    icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>`,
  },
];

function isActive(path: string): boolean {
  return route.path === path || route.path.startsWith(path + '/');
}

const pageTitles: Record<string, string> = {
  '/admin/dashboard': 'Tableau de bord',
  '/admin/artists': 'Gestion des Artistes',
  '/admin/albums': 'Gestion des Albums',
  '/admin/songs': 'Gestion des Chansons & Paroles',
  '/admin/genres': 'Gestion des Genres',
};

const pageTitle = computed(() => pageTitles[route.path] || 'Administration');

function handleLogout() {
  authStore.logout();
  router.push('/admin/login');
}
</script>
