<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <div class="mb-8">
      <p class="text-xs font-bold text-[#1E5AA8] uppercase tracking-widest mb-1">Discographie / Albums</p>
      <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Tous les Albums</h1>
      <p class="text-sm text-[#555555] mt-1">{{ filtered.length }} album(s)</p>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap gap-3 mb-8">
      <!-- Artist filter -->
      <select
        v-model="filterArtist"
        class="bg-[#111313] border border-white/8 text-sm text-white rounded-lg px-3 py-2 outline-none focus:border-[#1F8A4C]/50 transition-colors"
      >
        <option value="">Tous les artistes</option>
        <option v-for="a in artists" :key="a.id" :value="a.id">{{ a.name }}</option>
      </select>
      <!-- Year filter -->
      <select
        v-model="filterYear"
        class="bg-[#111313] border border-white/8 text-sm text-white rounded-lg px-3 py-2 outline-none focus:border-[#1F8A4C]/50 transition-colors"
      >
        <option value="">Toutes les années</option>
        <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
      </select>
      <button v-if="filterArtist || filterYear" @click="filterArtist = 0; filterYear = 0" class="text-xs text-[#1F8A4C] hover:underline px-2">Réinitialiser</button>
    </div>

    <!-- Grid -->
    <div v-if="filtered.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <router-link
        v-for="album in filtered"
        :key="album.id"
        :to="`/albums/${album.slug}`"
        class="group cursor-pointer"
      >
        <div class="relative aspect-square rounded-xl overflow-hidden mb-3 shadow-lg">
          <img :src="album.cover_url" :alt="album.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
        </div>
        <h3 class="font-bold text-sm text-white group-hover:text-[#1F8A4C] transition-colors truncate leading-snug">{{ album.title }}</h3>
        <p class="text-xs text-[#555555] truncate mt-0.5">{{ album.artist?.name }}</p>
        <p class="text-[11px] text-[#3a3a3a] font-mono mt-0.5">{{ album.release_year }} · {{ album.song_count }} chansons</p>
      </router-link>
    </div>
    <div v-else class="text-center py-16">
      <p class="text-[#555555] text-sm">Nta albums babonetse / Aucun album trouvé</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { mockAlbums, mockArtists } from '@/data/mockData';

const artists = mockArtists;
const filterArtist = ref<number | string>(0);
const filterYear = ref<number | string>(0);

const years = computed(() => [...new Set(mockAlbums.map(a => a.release_year))].sort((a, b) => b - a));

const filtered = computed(() => {
  let list = mockAlbums;
  if (filterArtist.value) list = list.filter(a => a.artist_id === Number(filterArtist.value));
  if (filterYear.value) list = list.filter(a => a.release_year === Number(filterYear.value));
  return list.sort((a, b) => b.release_year - a.release_year);
});
</script>
