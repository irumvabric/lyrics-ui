<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-white tracking-tight">Historique d'Écoute</h1>
      <p class="text-xs text-[#A0A0A0]">Retrouvez les titres récemment joués</p>
    </div>

    <div class="space-y-6">
      <!-- Section Aujourd'hui -->
      <div>
        <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-[#1F8A4C] mb-3">
          Aujourd'hui
        </h2>
        <div class="bg-[#101212] border border-[#151818] rounded-xl overflow-hidden divide-y divide-[#151818]">
          <div
            v-for="song in mockSongs.slice(0, 3)"
            :key="song.id"
            @click="playerStore.playSong(song)"
            class="group flex items-center justify-between p-3.5 hover:bg-[#151818] transition-colors cursor-pointer text-xs"
          >
            <div class="flex items-center gap-3">
              <img :src="song.cover_url" class="w-10 h-10 rounded object-cover" />
              <div>
                <p class="font-semibold text-white group-hover:text-[#1F8A4C]">{{ song.title }}</p>
                <p class="text-[#A0A0A0] text-[11px]">{{ song.artist?.name }}</p>
              </div>
            </div>
            <span class="font-mono text-[#A0A0A0]">{{ song.duration }}</span>
          </div>
        </div>
      </div>

      <!-- Section Hier -->
      <div>
        <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-[#666666] mb-3">
          Hier
        </h2>
        <div class="bg-[#101212] border border-[#151818] rounded-xl overflow-hidden divide-y divide-[#151818]">
          <div
            v-for="song in mockSongs.slice(3, 5)"
            :key="song.id"
            @click="playerStore.playSong(song)"
            class="group flex items-center justify-between p-3.5 hover:bg-[#151818] transition-colors cursor-pointer text-xs"
          >
            <div class="flex items-center gap-3">
              <img :src="song.cover_url" class="w-10 h-10 rounded object-cover" />
              <div>
                <p class="font-semibold text-white group-hover:text-[#1F8A4C]">{{ song.title }}</p>
                <p class="text-[#A0A0A0] text-[11px]">{{ song.artist?.name }}</p>
              </div>
            </div>
            <span class="font-mono text-[#A0A0A0]">{{ song.duration }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mockSongs } from '@/data/mockData';
import { usePlayerStore } from '@/stores/player';

const playerStore = usePlayerStore();
</script>
