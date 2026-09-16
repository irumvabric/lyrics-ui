<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <div class="mb-8">
      <p class="text-xs font-bold text-[#9333EA] uppercase tracking-widest mb-1">Ubwoko / Genres</p>
      <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Genres Musicaux</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="genre in genres"
        :key="genre.id"
        class="group flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-[#0C0E0E] hover:bg-[#0F1110] hover:border-white/10 transition-all cursor-pointer"
      >
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110" :style="`background:${genre.color}22`">
          <span class="w-5 h-5 rounded-full" :style="`background:${genre.color}`"></span>
        </div>
        <div class="flex-1 min-w-0">
          <h2 class="text-base font-bold text-white group-hover:text-white transition-colors leading-snug">{{ genre.name }}</h2>
          <p class="text-xs text-[#555555] mt-1 leading-relaxed">{{ genre.description }}</p>
          <p class="text-xs font-mono mt-2" :style="`color:${genre.color}`">{{ genre.song_count }} indirimbo / chansons</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mockGenres } from '@/data/mockData';
const genres = mockGenres;
</script>
