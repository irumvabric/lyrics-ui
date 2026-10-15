<template>
  <div class="min-h-screen bg-slate-100 text-slate-900">
    <aside class="fixed inset-y-0 left-0 z-40 flex flex-col border-r border-slate-200 bg-white shadow-sm transition-all duration-300" :class="sidebarOpen ? 'w-56' : 'w-16'">
      <div class="flex h-14 shrink-0 items-center border-b border-slate-200 px-4">
        <router-link to="/admin/dashboard" class="flex min-w-0 items-center gap-2.5">
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-700">
            <i class="pi pi-headphones text-sm" style="color:#fff" aria-hidden="true"></i>
          </span>
          <span v-if="sidebarOpen" class="whitespace-nowrap text-sm font-extrabold text-slate-900">Gospel <span class="text-emerald-700">Admin</span></span>
        </router-link>
      </div>

      <nav class="flex-1 overflow-x-hidden overflow-y-auto py-4">
        <div class="space-y-1 px-2">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            :class="isActive(item.to) ? 'bg-emerald-50 text-emerald-800' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
          >
            <i :class="item.icon" class="flex h-5 w-5 shrink-0 items-center justify-center text-base" aria-hidden="true"></i>
            <span v-if="sidebarOpen" class="overflow-hidden text-ellipsis whitespace-nowrap">{{ item.label }}</span>
          </router-link>
        </div>
      </nav>

      <div class="space-y-1 border-t border-slate-200 px-2 py-4">
        <router-link to="/" target="_blank" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
          <i class="pi pi-external-link flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true"></i>
          <span v-if="sidebarOpen" class="whitespace-nowrap">Voir le site</span>
        </router-link>
        <button @click="handleLogout" class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-600 transition-colors hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
          <i class="pi pi-sign-out flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true"></i>
          <span v-if="sidebarOpen" class="whitespace-nowrap">Deconnexion</span>
        </button>
      </div>
    </aside>

    <div class="flex min-h-screen flex-col transition-all duration-300" :class="sidebarOpen ? 'ml-56' : 'ml-16'">
      <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-slate-200 bg-white/95 px-6 backdrop-blur">
        <button @click="sidebarOpen = !sidebarOpen" class="shrink-0 rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600" aria-label="Toggle navigation">
          <i class="pi pi-bars text-lg" aria-hidden="true"></i>
        </button>
        <h1 class="text-sm font-semibold text-slate-900">{{ pageTitle }}</h1>
        <div class="flex-1"></div>
        <div class="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><i class="pi pi-user" aria-hidden="true"></i></span>
          <span>{{ authStore.adminName }}</span>
        </div>
      </header>
      <main class="flex-1 p-4 sm:p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const sidebarOpen = ref(true);

const navItems = [
  { to: '/admin/dashboard', label: 'Tableau de bord', icon: 'pi pi-home' },
  { to: '/admin/artists', label: 'Artistes', icon: 'pi pi-users' },
  { to: '/admin/albums', label: 'Albums', icon: 'pi pi-folder' },
  { to: '/admin/songs', label: 'Chansons & Paroles', icon: 'pi pi-headphones' },
  { to: '/admin/genres', label: 'Genres', icon: 'pi pi-tags' },
];

function isActive(path: string): boolean {
  return route.path === path || route.path.startsWith(`${path}/`);
}

const pageTitles: Record<string, string> = {
  '/admin/dashboard': 'Tableau de bord',
  '/admin/artists': 'Gestion des artistes',
  '/admin/albums': 'Gestion des albums',
  '/admin/songs': 'Gestion des chansons et paroles',
  '/admin/genres': 'Gestion des genres',
};
const pageTitle = computed(() => pageTitles[route.path] || 'Administration');

async function handleLogout() {
  await authStore.logout();
  await router.push('/admin/login');
}
</script>