<template>
  <div v-if="artist" class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <!-- Artist Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 pb-10 border-b border-white/5">
      <img :src="artist.photo_url" :alt="artist.name" class="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-white/5 shadow-2xl shrink-0" />
      <div class="flex-1 min-w-0">
        <p class="text-xs font-bold text-[#1F8A4C] uppercase tracking-widest mb-1">Umûhanzi / Artiste</p>
        <h1 class="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-2">{{ artist.name }}</h1>
        <p class="text-xs text-[#555555] mb-3 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          {{ artist.location }}
        </p>
        <p class="text-sm text-[#888888] leading-relaxed max-w-2xl">{{ artist.bio }}</p>
        <!-- Stats -->
        <div class="flex gap-6 mt-4 text-center">
          <div>
            <p class="text-lg font-extrabold text-white">{{ artist.song_count }}</p>
            <p class="text-[10px] text-[#444444] uppercase tracking-wide">Indirimbo</p>
          </div>
          <div>
            <p class="text-lg font-extrabold text-white">{{ artist.album_count }}</p>
            <p class="text-[10px] text-[#444444] uppercase tracking-wide">Albums</p>
          </div>
          <div>
            <p class="text-lg font-extrabold text-white">{{ formatNum(artist.plays_count) }}</p>
            <p class="text-[10px] text-[#444444] uppercase tracking-wide">Ivyarabonywe</p>
          </div>
        </div>
        <!-- Social links -->
        <div v-if="artist.social_links" class="flex gap-2 mt-4">
          <a v-if="artist.social_links.youtube" :href="artist.social_links.youtube" target="_blank" class="p-1.5 rounded-lg bg-white/5 text-[#555555] hover:text-red-500 hover:bg-red-500/10 transition-colors">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a v-if="artist.social_links.facebook" :href="artist.social_links.facebook" target="_blank" class="p-1.5 rounded-lg bg-white/5 text-[#555555] hover:text-blue-400 hover:bg-blue-400/10 transition-colors">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Albums section -->
    <div v-if="artistAlbums.length" class="mb-10">
      <h2 class="text-lg font-extrabold text-white mb-4">
        Albums <span class="text-[#444444] text-base font-normal">({{ artistAlbums.length }})</span>
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <router-link v-for="album in artistAlbums" :key="album.id" :to="`/albums/${album.slug}`" class="group">
          <div class="relative aspect-square rounded-xl overflow-hidden mb-2 shadow-lg">
            <img :src="album.cover_url" :alt="album.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
          </div>
          <h3 class="text-sm font-bold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ album.title }}</h3>
          <p class="text-xs text-[#444444] font-mono mt-0.5">{{ album.release_year }} · {{ album.song_count }} chansons</p>
        </router-link>
      </div>
    </div>

    <!-- Songs section -->
    <div v-if="artistSongs.length">
      <h2 class="text-lg font-extrabold text-white mb-4">
        Chansons / Indirimbo <span class="text-[#444444] text-base font-normal">({{ artistSongs.length }})</span>
      </h2>
      <div class="bg-[#0C0E0E] border border-white/5 rounded-xl overflow-hidden divide-y divide-white/5">
        <router-link
          v-for="(song, idx) in artistSongs"
          :key="song.id"
          :to="`/lyrics/${song.slug}`"
          class="flex items-center gap-4 px-4 sm:px-5 py-3 hover:bg-white/3 transition-colors group cursor-pointer"
        >
          <span class="text-xs font-mono text-[#333333] w-5 text-right shrink-0">{{ idx + 1 }}</span>
          <img :src="song.cover_url" :alt="song.title" class="w-9 h-9 rounded-lg object-cover shrink-0" />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ song.title }}</p>
            <p class="text-xs text-[#444444] truncate mt-0.5">{{ song.album?.title ?? 'Single' }} · {{ song.release_year }}</p>
          </div>
          <div class="flex items-center gap-1 shrink-0">
            <span v-if="song.lyrics" class="text-[10px] text-[#1F8A4C] bg-[#1F8A4C]/10 px-1.5 py-0.5 rounded font-semibold">Paroles</span>
          </div>
          <svg class="w-3.5 h-3.5 text-[#333333] group-hover:text-[#1F8A4C] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="max-w-6xl mx-auto px-4 py-20 text-center">
    <p class="text-[#555555] text-lg">Umûhanzi ntabonetse / Artiste introuvable</p>
    <router-link to="/artists" class="mt-4 inline-block text-sm text-[#1F8A4C] hover:underline">← Retour aux artistes</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockArtists, mockAlbums, mockSongs } from '@/data/mockData';

const route = useRoute();
const slug = computed(() => route.params.slug as string);

const artist = computed(() => mockArtists.find(a => a.slug === slug.value));
const artistAlbums = computed(() => mockAlbums.filter(a => a.artist_id === artist.value?.id));
const artistSongs = computed(() => mockSongs.filter(s => s.artist_id === artist.value?.id));

function formatNum(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'k';
  return n.toString();
}
</script>
