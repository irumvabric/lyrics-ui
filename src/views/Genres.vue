<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-white tracking-tight">Genres & Styles Gospel</h1>
      <p class="text-xs text-[#A0A0A0]">Explorez la diversité des chants d'adoration burundais</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="genre in mockGenres"
        :key="genre.id"
        class="group relative overflow-hidden rounded-xl p-6 border border-[#151818] cursor-pointer transition-all hover:-translate-y-1"
        :style="{ backgroundColor: '#101212' }"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
          :style="{ backgroundColor: genre.color }"
        ></div>

        <div class="relative z-10">
          <div
            class="w-3 h-3 rounded-full mb-3"
            :style="{ backgroundColor: genre.color }"
          ></div>
          <h3 class="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors">
            {{ genre.name }}
          </h3>
          <p class="text-xs text-[#A0A0A0] mb-4 leading-relaxed">
            {{ genre.description }}
          </p>
          <div class="flex items-center justify-between text-[11px] font-mono text-[#666666]">
            <span>{{ genre.song_count }} titres</span>
            <span class="text-[#1F8A4C] group-hover:translate-x-1 transition-transform">Explorer →</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mockGenres } from '@/data/mockData';
</script>
