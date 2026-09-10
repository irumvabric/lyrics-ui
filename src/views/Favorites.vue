<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-white tracking-tight">Mes Favoris</h1>
        <p class="text-xs text-[#A0A0A0]">Vos cantiques et louanges préférés</p>
      </div>
      <div class="flex gap-2 text-xs">
        <button
          @click="activeTab = 'songs'"
          class="px-3 py-1.5 rounded-lg transition-colors font-medium"
          :class="activeTab === 'songs' ? 'bg-[#1F8A4C] text-white' : 'bg-[#151818] text-[#A0A0A0]'"
        >
          Mes chansons
        </button>
        <button
          @click="activeTab = 'artists'"
          class="px-3 py-1.5 rounded-lg transition-colors font-medium"
          :class="activeTab === 'artists' ? 'bg-[#1F8A4C] text-white' : 'bg-[#151818] text-[#A0A0A0]'"
        >
          Mes artistes
        </button>
      </div>
    </div>

    <!-- Favorite Songs List -->
    <div v-if="activeTab === 'songs'" class="bg-[#101212] border border-[#151818] rounded-xl overflow-hidden divide-y divide-[#151818]">
      <div
        v-for="song in favoriteSongs"
        :key="song.id"
        @click="playerStore.playSong(song, favoriteSongs)"
        class="group flex items-center justify-between p-3.5 hover:bg-[#151818] transition-colors cursor-pointer text-xs"
      >
        <div class="flex items-center gap-3">
          <img :src="song.cover_url" class="w-10 h-10 rounded object-cover" />
          <div>
            <p class="font-semibold text-white group-hover:text-[#1F8A4C]">{{ song.title }}</p>
            <p class="text-[#A0A0A0] text-[11px]">{{ song.artist?.name }}</p>
          </div>
        </div>
        <div class="flex items-center gap-4 text-xs font-mono">
          <span class="text-[#A0A0A0]">{{ song.duration }}</span>
          <span class="text-[#C62828]">♥</span>
        </div>
      </div>
    </div>

    <!-- Favorite Artists -->
    <div v-else class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div
        v-for="artist in mockArtists.slice(0, 3)"
        :key="artist.id"
        class="bg-[#101212] border border-[#151818] p-4 rounded-xl text-center"
      >
        <img :src="artist.photo_url" class="w-16 h-16 rounded-full mx-auto mb-2 object-cover" />
        <p class="font-bold text-sm text-white">{{ artist.name }}</p>
        <p class="text-xs text-[#A0A0A0]">{{ artist.song_count }} chansons</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { mockSongs, mockArtists } from '@/data/mockData';
import { usePlayerStore } from '@/stores/player';

const playerStore = usePlayerStore();
const activeTab = ref<'songs' | 'artists'>('songs');

const favoriteSongs = computed(() => {
  return mockSongs.filter(s => s.is_favorite);
});
</script>
