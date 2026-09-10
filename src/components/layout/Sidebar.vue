<template>
  <div>
    <!-- Desktop Sidebar -->
    <aside class="hidden lg:flex flex-col w-64 bg-[#101212] border-r border-[#151818] h-screen sticky top-0 z-30 select-none">
      <!-- Logo Header -->
      <div class="p-6 pb-4 flex items-center gap-3">
        <div class="w-9 h-9 rounded-lg bg-[#1F8A4C] flex items-center justify-center shadow-lg shadow-[#1F8A4C]/20 shrink-0">
          <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
        <div>
          <h1 class="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
            Gospel <span class="text-[#1F8A4C]">Burundi</span>
          </h1>
          <p class="text-[11px] text-[#A0A0A0] tracking-wider uppercase font-semibold">Umuziki w'Imana</p>
        </div>
      </div>

      <!-- Navigation Links (Scrollable) -->
      <nav class="flex-1 overflow-y-auto px-4 py-2 space-y-6 text-sm">
        <!-- Accueil -->
        <div>
          <router-link
            to="/"
            class="flex items-center gap-3 px-3 py-2.5 rounded-md transition-all font-medium"
            :class="isActive('/') ? 'bg-[#1F8A4C] text-white shadow-md shadow-[#1F8A4C]/25' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{{ appStore.t('home') }}</span>
          </router-link>

          <router-link
            to="/architecture"
            class="mt-1 flex items-center justify-between px-3 py-2 rounded-md transition-all text-xs font-semibold"
            :class="isActive('/architecture') ? 'bg-[#151818] text-[#1F8A4C] border border-[#1F8A4C]/30' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
          >
            
          </router-link>
        </div>

        <!-- Section MUSIQUE -->
        <div>
          <p class="px-3 text-[11px] font-bold text-[#666666] tracking-wider uppercase mb-1">
            {{ appStore.t('music') }}
          </p>
          <div class="space-y-0.5">
            <router-link
              to="/songs"
              class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
              :class="isActive('/songs') ? 'bg-[#151818] text-[#1F8A4C] font-semibold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <span>Chansons</span>
            </router-link>

            <router-link
              to="/artists"
              class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
              :class="isActive('/artists') ? 'bg-[#151818] text-[#1F8A4C] font-semibold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Artistes</span>
            </router-link>

            <router-link
              to="/albums"
              class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
              :class="isActive('/albums') ? 'bg-[#151818] text-[#1F8A4C] font-semibold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Albums</span>
            </router-link>

            <router-link
              to="/genres"
              class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
              :class="isActive('/genres') ? 'bg-[#151818] text-[#1F8A4C] font-semibold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Genres</span>
            </router-link>
          </div>
        </div>

        <!-- Section MA BIBLIOTHÈQUE -->
        <div>
          <p class="px-3 text-[11px] font-bold text-[#666666] tracking-wider uppercase mb-1">
            {{ appStore.t('library') }}
          </p>
          <div class="space-y-0.5">
            <router-link
              to="/favorites"
              class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
              :class="isActive('/favorites') ? 'bg-[#151818] text-[#1F8A4C] font-semibold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
            >
              <svg class="w-4 h-4 text-[#C62828]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>{{ appStore.t('favorites') }}</span>
            </router-link>

            <router-link
              to="/playlists"
              class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
              :class="isActive('/playlists') ? 'bg-[#151818] text-[#1F8A4C] font-semibold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <span>{{ appStore.t('playlists') }}</span>
            </router-link>

            <router-link
              to="/history"
              class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
              :class="isActive('/history') ? 'bg-[#151818] text-[#1F8A4C] font-semibold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ appStore.t('history') }}</span>
            </router-link>
          </div>
        </div>

        <!-- Section ADMINISTRATION (If admin) -->
        <div v-if="authStore.isAdmin" class="pt-2 border-t border-[#151818]">
          <div class="flex items-center justify-between px-3 mb-1">
            <p class="text-[11px] font-bold text-[#1F8A4C] tracking-wider uppercase">
              {{ appStore.t('admin') }}
            </p>
            <span class="px-1.5 py-0.5 text-[9px] bg-[#1F8A4C]/20 text-[#1F8A4C] rounded font-bold">ADMIN</span>
          </div>
          <div class="space-y-0.5">
            <router-link
              to="/admin/dashboard"
              class="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
              :class="isActive('/admin/dashboard') ? 'bg-[#151818] text-[#1F8A4C] font-semibold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Dashboard Admin</span>
            </router-link>
          </div>
        </div>
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-4 border-t border-[#151818] space-y-1 text-xs text-[#A0A0A0]">
        <div class="flex items-center justify-between px-2 py-1.5 rounded hover:bg-[#151818] cursor-pointer">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
            {{ appStore.t('settings') }}
          </span>
        </div>

        <div
          v-if="authStore.isAuthenticated"
          @click="authStore.logout()"
          class="flex items-center justify-between px-2 py-1.5 rounded hover:bg-[#151818] cursor-pointer text-[#C62828] hover:text-[#e53935]"
        >
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            {{ appStore.t('logout') }}
          </span>
        </div>
      </div>
    </aside>

    <!-- Mobile Drawer Overlay -->
    <div
      v-if="appStore.isMobileDrawerOpen"
      class="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
      @click="appStore.toggleMobileDrawer(false)"
    ></div>

    <!-- Mobile Drawer -->
    <aside
      class="fixed inset-y-0 left-0 z-50 w-72 bg-[#101212] border-r border-[#151818] transform transition-transform duration-300 lg:hidden flex flex-col"
      :class="appStore.isMobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-6 flex items-center justify-between border-b border-[#151818]">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded bg-[#1F8A4C] flex items-center justify-center text-white font-bold">
            GB
          </div>
          <span class="font-bold text-white">Gospel Burundi</span>
        </div>
        <button
          @click="appStore.toggleMobileDrawer(false)"
          class="p-2 text-neutral-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto p-4 space-y-4 text-sm" @click="appStore.toggleMobileDrawer(false)">
        <router-link to="/" class="block px-3 py-2 rounded font-medium text-white hover:bg-[#151818]">
          {{ appStore.t('home') }}
        </router-link>
        <router-link to="/architecture" class="block px-3 py-2 rounded text-[#1F8A4C] bg-[#151818] font-medium">
          Phase 1 Architecture
        </router-link>
        <router-link to="/songs" class="block px-3 py-2 rounded text-[#A0A0A0] hover:text-white hover:bg-[#151818]">
          Chansons
        </router-link>
        <router-link to="/artists" class="block px-3 py-2 rounded text-[#A0A0A0] hover:text-white hover:bg-[#151818]">
          Artistes
        </router-link>
        <router-link to="/albums" class="block px-3 py-2 rounded text-[#A0A0A0] hover:text-white hover:bg-[#151818]">
          Albums
        </router-link>
        <router-link to="/genres" class="block px-3 py-2 rounded text-[#A0A0A0] hover:text-white hover:bg-[#151818]">
          Genres
        </router-link>
        <router-link to="/favorites" class="block px-3 py-2 rounded text-[#A0A0A0] hover:text-white hover:bg-[#151818]">
          {{ appStore.t('favorites') }}
        </router-link>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useAppStore } from '@/stores/app';

const route = useRoute();
const authStore = useAuthStore();
const appStore = useAppStore();

function isActive(path: string) {
  if (path === '/') return route.path === '/';
  return route.path.startsWith(path);
}
</script>
