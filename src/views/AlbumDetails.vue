<template>
  <div v-if="album" class="space-y-8 max-w-4xl">
    <div class="flex flex-col sm:flex-row items-center sm:items-end gap-6 bg-[#101212] border border-[#151818] p-6 rounded-2xl">
      <img
        :src="album.cover_url"
        :alt="album.title"
        class="w-48 h-48 rounded-xl object-cover shadow-2xl shrink-0"
      />
      <div class="space-y-2 text-center sm:text-left flex-1">
        <span class="text-[11px] font-mono uppercase tracking-wider text-[#1F8A4C] font-bold">
          Album Gospel
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ album.title }}
        </h1>
        <p class="text-sm text-[#A0A0A0]">
          Par
          <router-link
            v-if="album.artist"
            :to="`/artists/${album.artist.slug}`"
            class="text-white font-semibold hover:text-[#1F8A4C] underline decoration-neutral-700 underline-offset-4"
          >
            {{ album.artist.name }}
          </router-link>
          • {{ album.release_year }} • {{ album.song_count }} chansons
        </p>
        <div class="pt-3">
          <button
            @click="playAlbum"
            class="px-6 py-2.5 rounded-full bg-[#1F8A4C] hover:bg-[#18723e] text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#1F8A4C]/30 transition-all"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Tout écouter
          </button>
        </div>
      </div>
    </div>

    <!-- Album Song List -->
    <div class="bg-[#101212] border border-[#151818] rounded-xl overflow-hidden divide-y divide-[#151818]">
      <div
        v-for="(song, idx) in albumSongs"
        :key="song.id"
        @click="playerStore.playSong(song, albumSongs)"
        class="group flex items-center justify-between p-3.5 hover:bg-[#151818] transition-colors cursor-pointer text-xs"
      >
        <div class="flex items-center gap-3">
          <span class="w-5 text-center text-[#666666] font-mono">{{ idx + 1 }}</span>
          <p class="font-semibold text-white group-hover:text-[#1F8A4C]">{{ song.title }}</p>
        </div>
        <span class="font-mono text-[#A0A0A0]">{{ song.duration }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockAlbums, mockSongs } from '@/data/mockData';
import { usePlayerStore } from '@/stores/player';

const route = useRoute();
const playerStore = usePlayerStore();

const album = computed(() => {
  const slug = route.params.slug as string;
  return mockAlbums.find(a => a.slug === slug) || mockAlbums[0];
});

const albumSongs = computed(() => {
  if (!album.value) return [];
  return mockSongs.filter(s => s.album_id === album.value.id);
});

function playAlbum() {
  if (albumSongs.value.length > 0) {
    playerStore.playSong(albumSongs.value[0], albumSongs.value);
  }
}
</script>
