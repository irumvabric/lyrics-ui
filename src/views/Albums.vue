<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-white tracking-tight">Albums Gospel</h1>
        <p class="text-xs text-[#A0A0A0]">Recueils complets d'adoration et de louange</p>
      </div>
      <div class="text-xs text-[#1F8A4C] font-mono">
        {{ mockAlbums.length }} albums
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="album in mockAlbums"
        :key="album.id"
        @click="router.push(`/albums/${album.slug}`)"
        class="group bg-[#101212] hover:bg-[#151818] border border-[#151818] hover:border-[#1F8A4C]/30 p-3.5 rounded-xl cursor-pointer transition-all"
      >
        <div class="relative aspect-square rounded-lg overflow-hidden mb-3">
          <img
            :src="album.cover_url"
            :alt="album.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 class="font-bold text-sm text-white truncate group-hover:text-[#1F8A4C] transition-colors">
          {{ album.title }}
        </h3>
        <p class="text-xs text-[#A0A0A0] truncate mt-0.5">
          {{ album.artist?.name }}
        </p>
        <div class="flex items-center justify-between text-[11px] text-[#666666] mt-2 font-mono">
          <span>{{ album.release_year }}</span>
          <span>{{ album.song_count }} chansons</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { mockAlbums } from '@/data/mockData';

const router = useRouter();
</script>
