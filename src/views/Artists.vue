<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <!-- Header -->
    <div class="mb-8">
      <p class="text-xs font-bold text-[#1F8A4C] uppercase tracking-widest mb-1">Abahanzi / Artistes</p>
      <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Tous les Artistes</h1>
      <p class="text-sm text-[#555555] mt-1">{{ filteredArtists.length }} artiste(s) trouvé(s)</p>
    </div>

    <!-- A-Z Filter -->
    <div class="flex flex-wrap gap-1 mb-8">
      <button
        v-for="letter in alphabet"
        :key="letter"
        @click="activeLetter = activeLetter === letter ? null : letter"
        class="w-8 h-8 rounded-lg text-xs font-bold transition-all"
        :class="activeLetter === letter
          ? 'bg-[#1F8A4C] text-white shadow-md shadow-[#1F8A4C]/20'
          : 'bg-[#111313] text-[#555555] hover:text-white hover:bg-[#1a1c1c] border border-white/5'"
      >
        {{ letter }}
      </button>
      <button
        v-if="activeLetter"
        @click="activeLetter = null"
        class="px-3 h-8 rounded-lg text-xs font-bold bg-white/5 text-[#A0A0A0] hover:bg-white/10 transition-all"
      >
        Tout
      </button>
    </div>

    <!-- Artists Grid -->
    <div v-if="filteredArtists.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <router-link
        v-for="artist in filteredArtists"
        :key="artist.id"
        :to="`/artists/${artist.slug}`"
        class="group text-center bg-[#0C0E0E] border border-white/5 rounded-xl p-4 hover:border-[#1F8A4C]/30 hover:bg-[#0F1110] transition-all"
      >
        <div class="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-3">
          <img
            :src="artist.photo_url"
            :alt="artist.name"
            class="w-full h-full rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#1F8A4C] transition-all duration-300 shadow-lg"
          />
        </div>
        <h2 class="text-sm font-bold text-white group-hover:text-[#1F8A4C] transition-colors leading-snug truncate">{{ artist.name }}</h2>
        <p class="text-[11px] text-[#444444] mt-1 font-mono">{{ artist.song_count }} chansons</p>
        <p class="text-[10px] text-[#333333] mt-0.5">{{ artist.location }}</p>
      </router-link>
    </div>

    <!-- Empty state -->
    <div v-else class="text-center py-16">
      <p class="text-[#555555] text-sm">Nta bahanzi babonetse kuri "{{ activeLetter }}"</p>
      <button @click="activeLetter = null" class="mt-4 text-xs text-[#1F8A4C] hover:underline">Reba bose / Voir tous</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { mockArtists } from '@/data/mockData';

const activeLetter = ref<string | null>(null);
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const filteredArtists = computed(() => {
  if (!activeLetter.value) return mockArtists;
  return mockArtists.filter(a => a.name.toUpperCase().startsWith(activeLetter.value!));
});
</script>
