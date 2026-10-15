<template>
  <div class="min-h-screen bg-[#F5F7F8] text-slate-900 flex flex-col antialiased">
    <!-- ─── Navbar ─── -->
    <header class="sticky top-0 z-50 bg-[#F8FAFC]/95 backdrop-blur-xl border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 shrink-0 group">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1F8A4C] to-[#155e34] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <span class="text-base font-extrabold tracking-tight text-slate-900 hidden sm:block">
            Gospel <span class="text-[#1F8A4C]">Burundi</span>
          </span>
        </router-link>

        <!-- Nav links (desktop) -->
        <nav class="hidden md:flex items-center gap-0.5">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            active-class="text-slate-900 bg-slate-100"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <!-- Search -->
        <form @submit.prevent="handleSearch" class="flex items-center flex-1 max-w-xs relative mx-2">
          <input
            v-model="searchQuery"
            type="text"
            id="navbar-search"
            placeholder="Nshaka... / Rechercher..."
            class="w-full bg-white border border-slate-200 focus:border-[#1F8A4C]/60 rounded-full pl-3.5 pr-9 py-1.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
          />
          <button type="submit" class="absolute right-1.5 p-1 rounded-full bg-[#1F8A4C] hover:bg-[#18723e] transition-colors">
            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </form>

        <!-- Right -->
        <div class="flex items-center gap-2 shrink-0">
          <router-link
            to="/admin"
            class="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#1F8A4C] transition-colors px-2 py-1 rounded border border-slate-200 hover:border-[#1F8A4C]/30"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Admin
          </router-link>
          <!-- Mobile menu button -->
          <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <transition name="slide-down">
        <div v-if="mobileOpen" class="md:hidden border-t border-slate-200 bg-[#F8FAFC] px-4 py-3 flex flex-col gap-2">
          <form @submit.prevent="handleSearch" class="flex items-center relative mb-2">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Nshaka... / Rechercher..."
              class="w-full bg-[#111313] border border-white/8 focus:border-[#1F8A4C]/60 rounded-full pl-3.5 pr-9 py-2 text-sm text-white placeholder-[#555555] outline-none"
            />
            <button type="submit" class="absolute right-1.5 p-1 rounded-full bg-[#1F8A4C]">
              <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </form>
          <nav class="flex flex-col gap-1">
            <router-link
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              @click="mobileOpen = false"
              class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
              active-class="text-slate-900 bg-slate-100"
            >
              {{ link.label }}
            </router-link>
            <router-link to="/admin" @click="mobileOpen = false" class="px-3 py-2 rounded-lg text-sm font-medium text-[#666666] hover:text-[#1F8A4C] transition-all">
              ⚙ Admin
            </router-link>
          </nav>
        </div>
      </transition>
    </header>

    <!-- ─── Content ─── -->
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- ─── Footer ─── -->
    <footer class="border-t border-slate-200 bg-[#F8FAFC] mt-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div class="col-span-2 md:col-span-1">
            <router-link to="/" class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1F8A4C] to-[#155e34] flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <span class="font-extrabold text-sm text-white">Gospel <span class="text-[#1F8A4C]">Burundi</span></span>
            </router-link>
            <p class="text-xs text-[#555555] leading-relaxed">
              Amashitira y'indirimbo za gospel zo Burundi.<br/>Les paroles du gospel burundais.
            </p>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Explorer</h4>
            <ul class="space-y-2">
              <li v-for="link in footerLinks" :key="link.to">
                <router-link :to="link.to" class="text-xs text-[#555555] hover:text-[#1F8A4C] transition-colors">{{ link.label }}</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Genres</h4>
            <ul class="space-y-2">
              <li><router-link to="/genres" class="text-xs text-[#555555] hover:text-[#1F8A4C] transition-colors">Adoration / Worship</router-link></li>
              <li><router-link to="/genres" class="text-xs text-[#555555] hover:text-[#1F8A4C] transition-colors">Louange / Praise</router-link></li>
              <li><router-link to="/genres" class="text-xs text-[#555555] hover:text-[#1F8A4C] transition-colors">Chorale / Choir</router-link></li>
              <li><router-link to="/genres" class="text-xs text-[#555555] hover:text-[#1F8A4C] transition-colors">Gospel Traditionnel</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Infos</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-xs text-[#555555] hover:text-[#1F8A4C] transition-colors">À propos</a></li>
              <li><a href="#" class="text-xs text-[#555555] hover:text-[#1F8A4C] transition-colors">Contact</a></li>
              <li><router-link to="/admin" class="text-xs text-[#555555] hover:text-[#1F8A4C] transition-colors">Administration</router-link></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#3a3a3a]">
          <p>© 2026 Gospel Burundi. Uburenganzira bwose bwihariwe / Tous droits réservés.</p>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#1F8A4C] animate-pulse"></span>
            <span>Burundi 🇧🇮</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Toast -->
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ToastContainer from '@/components/common/ToastContainer.vue';

const router = useRouter();
const mobileOpen = ref(false);
const searchQuery = ref('');

function handleSearch() {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } });
    mobileOpen.value = false;
    searchQuery.value = '';
  }
}

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/artists', label: 'Artistes' },
  { to: '/albums', label: 'Albums' },
  { to: '/genres', label: 'Genres' },
];

const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/artists', label: 'Artistes' },
  { to: '/albums', label: 'Albums' },
  { to: '/search', label: 'Recherche' },
];
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.12s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.2s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
