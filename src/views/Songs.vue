<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-white tracking-tight">Chansons Gospel</h1>
        <p class="text-xs text-[#A0A0A0]">Explorez les cantiques et louanges du Burundi</p>
      </div>
      <div class="text-xs text-[#1F8A4C] font-mono">
        {{ mockSongs.length }} titres disponibles
      </div>
    </div>

    <div class="bg-[#101212] border border-[#151818] rounded-xl overflow-hidden divide-y divide-[#151818]">
      <div
        v-for="(song, idx) in mockSongs"
        :key="song.id"
        class="group flex items-center justify-between p-3.5 hover:bg-[#151818] transition-colors cursor-pointer"
        @click="playerStore.playSong(song, mockSongs)"
      >
        <div class="flex items-center gap-3.5 min-w-0 flex-1">
          <span class="w-6 text-center text-xs font-mono text-[#666666] group-hover:text-white shrink-0">
            {{ String(idx + 1).padStart(2, '0') }}
          </span>
          <img :src="song.cover_url" class="w-12 h-12 rounded object-cover shrink-0" />
          <div class="truncate">
            <p class="text-sm font-semibold text-white group-hover:text-[#1F8A4C] transition-colors truncate">
              {{ song.title }}
            </p>
            <p class="text-xs text-[#A0A0A0] truncate">
              {{ song.artist?.name }} • {{ song.album?.title || 'Single' }}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-4 text-xs text-[#A0A0A0] shrink-0 font-mono">
          <span>{{ song.duration }}</span>
          <button
            @click.stop="toggleFavorite(song)"
            class="p-1 hover:text-[#C62828]"
            :class="song.is_favorite ? 'text-[#C62828]' : 'text-[#666666]'"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mockSongs } from '@/data/mockData';
import { usePlayerStore } from '@/stores/player';
import { useAppStore } from '@/stores/app';
import type { Song } from '@/types';

const playerStore = usePlayerStore();
const appStore = useAppStore();

function toggleFavorite(song: Song) {
  song.is_favorite = !song.is_favorite;
  appStore.addToast(
    song.is_favorite ? `"${song.title}" ajouté aux favoris` : `"${song.title}" retiré des favoris`,
    'success'
  );
}
</script>
