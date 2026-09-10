<template>
  <div v-if="artist" class="space-y-8">
    <!-- Artist Banner / Hero -->
    <div class="flex flex-col sm:flex-row items-center sm:items-end gap-6 bg-[#101212] border border-[#151818] p-6 sm:p-8 rounded-2xl">
      <img
        :src="artist.photo_url"
        :alt="artist.name"
        class="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-4 ring-[#1F8A4C]/30 shadow-2xl shrink-0"
      />
      <div class="space-y-2 text-center sm:text-left flex-1">
        <span class="text-[11px] font-mono uppercase tracking-wider text-[#1F8A4C] font-bold">
          Artiste Burundais Vérifié
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ artist.name }}
        </h1>
        <p class="text-xs text-[#A0A0A0] flex items-center justify-center sm:justify-start gap-2">
          <span>📍 {{ artist.location }}</span>
          <span>•</span>
          <span>{{ artist.song_count }} chansons</span>
          <span>•</span>
          <span>{{ (artist.plays_count / 1000000).toFixed(1) }}M écoutes</span>
        </p>

        <!-- Actions -->
        <div class="flex items-center gap-3 pt-3 justify-center sm:justify-start">
          <button
            @click="playAll"
            class="px-6 py-2 rounded-full bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-[#1F8A4C]/30 transition-all"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Écouter
          </button>
          <button
            @click="toggleFollow"
            class="px-5 py-2 rounded-full border border-[#151818] bg-[#151818] hover:bg-[#1f2424] text-white text-sm font-medium transition-all"
          >
            {{ isFollowing ? 'Abonné ✓' : '+ Suivre' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Biography & Songs Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left: Chansons Populaires -->
      <div class="lg:col-span-2 space-y-4">
        <h2 class="text-lg font-bold text-white tracking-tight">Chansons Populaires</h2>
        <div class="bg-[#101212] border border-[#151818] rounded-xl overflow-hidden divide-y divide-[#151818]">
          <div
            v-for="(song, idx) in artistSongs"
            :key="song.id"
            @click="playerStore.playSong(song, artistSongs)"
            class="group flex items-center justify-between p-3 hover:bg-[#151818] transition-colors cursor-pointer text-xs"
          >
            <div class="flex items-center gap-3 truncate">
              <span class="w-5 text-center text-[#666666] font-mono">{{ idx + 1 }}</span>
              <img :src="song.cover_url" class="w-10 h-10 rounded object-cover shrink-0" />
              <div class="truncate">
                <p class="font-semibold text-white group-hover:text-[#1F8A4C] truncate">{{ song.title }}</p>
                <p class="text-[#A0A0A0] text-[11px] truncate">{{ song.album?.title || 'Single' }}</p>
              </div>
            </div>
            <span class="font-mono text-[#A0A0A0]">{{ song.duration }}</span>
          </div>
        </div>
      </div>

      <!-- Right: Biography & Info -->
      <div class="space-y-4">
        <h2 class="text-lg font-bold text-white tracking-tight">À propos</h2>
        <div class="bg-[#101212] border border-[#151818] rounded-xl p-5 text-xs text-[#A0A0A0] space-y-3 leading-relaxed">
          <p>{{ artist.bio }}</p>
          <div class="pt-3 border-t border-[#151818] space-y-1.5 font-mono text-[11px]">
            <p><span class="text-white">Pays :</span> Burundi</p>
            <p><span class="text-white">Abonnés :</span> {{ (artist.followers_count / 1000).toFixed(0) }}k</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockArtists, mockSongs } from '@/data/mockData';
import { usePlayerStore } from '@/stores/player';
import { useAppStore } from '@/stores/app';

const route = useRoute();
const playerStore = usePlayerStore();
const appStore = useAppStore();
const isFollowing = ref(false);

const artist = computed(() => {
  const slug = route.params.slug as string;
  return mockArtists.find(a => a.slug === slug) || mockArtists[0];
});

const artistSongs = computed(() => {
  if (!artist.value) return [];
  return mockSongs.filter(s => s.artist_id === artist.value.id);
});

function playAll() {
  if (artistSongs.value.length > 0) {
    playerStore.playSong(artistSongs.value[0], artistSongs.value);
  }
}

function toggleFollow() {
  isFollowing.value = !isFollowing.value;
  appStore.addToast(
    isFollowing.value ? `Vous suivez désormais ${artist.value.name}` : `Vous ne suivez plus ${artist.value.name}`,
    'info'
  );
}
</script>
