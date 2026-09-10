<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-white tracking-tight">Artistes Gospel du Burundi</h1>
        <p class="text-xs text-[#A0A0A0]">Découvrez les chantres et conducteurs de louange</p>
      </div>
      <div class="text-xs text-[#1F8A4C] font-mono">
        {{ filteredArtists.length }} artistes trouvés
      </div>
    </div>

    <!-- Alphabet Filter Bar -->
    <div class="flex flex-wrap items-center gap-1 p-2 bg-[#101212] border border-[#151818] rounded-xl overflow-x-auto text-xs font-mono">
      <button
        @click="selectedLetter = 'ALL'"
        class="px-2.5 py-1 rounded transition-colors"
        :class="selectedLetter === 'ALL' ? 'bg-[#1F8A4C] text-white font-bold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
      >
        TOUS
      </button>
      <button
        v-for="char in alphabet"
        :key="char"
        @click="selectedLetter = char"
        class="w-7 h-7 flex items-center justify-center rounded transition-colors"
        :class="selectedLetter === char ? 'bg-[#1F8A4C] text-white font-bold' : 'text-[#A0A0A0] hover:text-white hover:bg-[#151818]'"
      >
        {{ char }}
      </button>
    </div>

    <!-- Artists Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div
        v-for="artist in filteredArtists"
        :key="artist.id"
        @click="router.push(`/artists/${artist.slug}`)"
        class="group bg-[#101212] hover:bg-[#151818] border border-[#151818] hover:border-[#1F8A4C]/30 p-4 rounded-xl text-center cursor-pointer transition-all hover:-translate-y-1"
      >
        <div class="relative mx-auto w-24 h-24 mb-3">
          <img
            :src="artist.photo_url"
            :alt="artist.name"
            class="w-full h-full object-cover rounded-full shadow-lg ring-2 ring-transparent group-hover:ring-[#1F8A4C] transition-all"
          />
        </div>
        <h3 class="font-bold text-sm text-white group-hover:text-[#1F8A4C] transition-colors truncate">
          {{ artist.name }}
        </h3>
        <p class="text-[11px] text-[#A0A0A0] mt-0.5">
          {{ artist.song_count }} chansons
        </p>
        <p class="text-[11px] text-[#666666] font-mono mt-0.5">
          {{ (artist.plays_count / 1000).toFixed(0) }}k écoutes
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { mockArtists } from '@/data/mockData';

const router = useRouter();
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
const selectedLetter = ref('ALL');

const filteredArtists = computed(() => {
  if (selectedLetter.value === 'ALL') return mockArtists;
  if (selectedLetter.value === '#') {
    return mockArtists.filter(a => /^\d/.test(a.name));
  }
  return mockArtists.filter(a => a.name.toUpperCase().startsWith(selectedLetter.value));
});
</script>
