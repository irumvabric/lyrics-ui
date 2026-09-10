<template>
  <header class="sticky top-0 z-20 bg-[#080A0A]/95 backdrop-blur-md border-b border-[#151818] px-4 lg:px-8 py-3.5 flex items-center justify-between gap-4">
    <!-- Left: Mobile Menu Toggle & Search Bar -->
    <div class="flex items-center gap-3 flex-1 max-w-2xl">
      <button
        @click="appStore.toggleMobileDrawer(true)"
        class="lg:hidden p-2 rounded-lg bg-[#101212] text-white hover:bg-[#151818] transition-colors"
        aria-label="Ouvrir le menu"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Global Search Field -->
      <div class="relative flex-1">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#666666]">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          v-model="searchQuery"
          @keydown.enter="handleSearch"
          type="text"
          :placeholder="appStore.t('searchPlaceholder')"
          class="w-full bg-[#101212] border border-[#151818] focus:border-[#1F8A4C] focus:bg-[#151818] rounded-full pl-10 pr-10 py-2 text-sm text-white placeholder-[#666666] outline-none transition-all"
        />
        <button
          v-if="searchQuery"
          @click="searchQuery = ''"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-[#666666] hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Right: Language Switcher, Notifications & Auth Profile -->
    <div class="flex items-center gap-3 shrink-0">
      <!-- Language Selector -->
      <div class="relative">
        <select
          :value="appStore.currentLanguage"
          @change="(e: any) => appStore.setLanguage(e.target.value)"
          class="bg-[#101212] border border-[#151818] text-xs text-[#A0A0A0] hover:text-white rounded-lg px-2.5 py-1.5 outline-none cursor-pointer"
        >
          <option value="fr">FR 🇧🇮</option>
          <option value="rn">RN 🇧🇮</option>
          <option value="en">EN 🌍</option>
        </select>
      </div>

      <!-- Notifications Bell -->
      <button
        @click="appStore.addToast('Aucune nouvelle notification pour le moment', 'info')"
        class="relative p-2 text-[#A0A0A0] hover:text-white hover:bg-[#101212] rounded-full transition-colors"
        title="Notifications"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-[#1F8A4C] rounded-full"></span>
      </button>

      <!-- Authenticated User Profile -->
      <div v-if="authStore.isAuthenticated" class="flex items-center gap-3 pl-2 border-l border-[#151818]">
        <div class="hidden sm:block text-right">
          <p class="text-xs font-semibold text-white leading-tight">
            Bonjour, {{ authStore.user?.name.split(' ')[0] }}
          </p>
          <span class="text-[10px] text-[#1F8A4C] font-mono font-medium tracking-wide">
            {{ authStore.user?.role }}
          </span>
        </div>
        <img
          :src="authStore.user?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'"
          alt="Avatar"
          class="w-8 h-8 rounded-full object-cover ring-2 ring-[#1F8A4C]/40"
        />
      </div>

      <!-- Guest Login / Register Buttons -->
      <div v-else class="flex items-center gap-2">
        <router-link
          to="/login"
          class="text-xs font-medium text-white hover:text-[#1F8A4C] px-3 py-1.5 rounded transition-colors"
        >
          {{ appStore.t('login') }}
        </router-link>
        <router-link
          to="/register"
          class="text-xs font-medium bg-[#1F8A4C] hover:bg-[#18723e] text-white px-3.5 py-1.5 rounded-full transition-colors shadow-sm shadow-[#1F8A4C]/30"
        >
          {{ appStore.t('register') }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useAppStore } from '@/stores/app';

const router = useRouter();
const authStore = useAuthStore();
const appStore = useAppStore();

const searchQuery = ref('');

function handleSearch() {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } });
  }
}
</script>
