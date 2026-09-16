<template>
  <div v-if="album" class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <!-- Album header -->
    <div class="flex flex-col sm:flex-row gap-6 mb-10 pb-10 border-b border-white/5">
      <img :src="album.cover_url" :alt="album.title" class="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover shadow-2xl shrink-0" />
      <div class="flex-1 min-w-0">
        <p class="text-xs font-bold text-[#1E5AA8] uppercase tracking-widest mb-2">Album · {{ album.release_year }}</p>
        <h1 class="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-2">{{ album.title }}</h1>
        <router-link :to="`/artists/${album.artist?.slug}`" class="inline-flex items-center gap-2 mb-3 group">
          <img :src="album.artist?.photo_url" :alt="album.artist?.name" class="w-6 h-6 rounded-full object-cover" />
          <span class="text-sm font-semibold text-[#777777] group-hover:text-[#1F8A4C] transition-colors">{{ album.artist?.name }}</span>
        </router-link>
        <p v-if="album.description" class="text-sm text-[#666666] leading-relaxed max-w-xl mb-4">{{ album.description }}</p>
        <div class="flex gap-5 text-center">
          <div>
            <p class="text-xl font-extrabold text-white">{{ album.song_count }}</p>
            <p class="text-[10px] text-[#444444] uppercase tracking-wide">Indirimbo</p>
          </div>
          <div>
            <p class="text-xl font-extrabold text-white">{{ album.release_year }}</p>
            <p class="text-[10px] text-[#444444] uppercase tracking-wide">Umwaka / Année</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Song list -->
    <h2 class="text-lg font-extrabold text-white mb-4">
      Indirimbo / Chansons <span class="text-[#444444] font-normal text-base">({{ albumSongs.length }})</span>
    </h2>
    <div class="bg-[#0C0E0E] border border-white/5 rounded-xl overflow-hidden divide-y divide-white/5">
      <router-link
        v-for="(song, idx) in albumSongs"
        :key="song.id"
        :to="`/lyrics/${song.slug}`"
        class="flex items-center gap-4 px-4 sm:px-5 py-3.5 hover:bg-white/3 transition-colors group cursor-pointer"
      >
        <span class="text-xs font-mono text-[#333333] w-6 text-right shrink-0">{{ idx + 1 }}</span>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ song.title }}</p>
          <p class="text-xs text-[#444444] truncate mt-0.5">{{ song.duration }}</p>
        </div>
        <span v-if="song.lyrics" class="text-[10px] text-[#1F8A4C] bg-[#1F8A4C]/10 px-2 py-0.5 rounded font-semibold shrink-0">Paroles</span>
        <svg class="w-3.5 h-3.5 text-[#333333] group-hover:text-[#1F8A4C] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </router-link>
      <div v-if="!albumSongs.length" class="px-5 py-10 text-center text-sm text-[#444444]">
        Nta ndirimbo zabonetse / Aucune chanson trouvée
      </div>
    </div>

    <!-- Other albums by artist -->
    <div v-if="otherAlbums.length" class="mt-12">
      <h3 class="text-base font-bold text-white mb-4">Autres albums de <span class="text-[#1F8A4C]">{{ album.artist?.name }}</span></h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <router-link v-for="a in otherAlbums" :key="a.id" :to="`/albums/${a.slug}`" class="group">
          <div class="aspect-square rounded-xl overflow-hidden mb-2 shadow-lg">
            <img :src="a.cover_url" :alt="a.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <h4 class="text-xs font-bold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ a.title }}</h4>
          <p class="text-[10px] text-[#444444] font-mono mt-0.5">{{ a.release_year }}</p>
        </router-link>
      </div>
    </div>
  </div>

  <div v-else class="max-w-6xl mx-auto px-4 py-20 text-center">
    <p class="text-[#555555]">Album introuvable</p>
    <router-link to="/albums" class="mt-4 inline-block text-sm text-[#1F8A4C] hover:underline">← Retour aux albums</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockAlbums, mockSongs } from '@/data/mockData';

const route = useRoute();
const slug = computed(() => route.params.slug as string);
const album = computed(() => mockAlbums.find(a => a.slug === slug.value));
const albumSongs = computed(() => mockSongs.filter(s => s.album_id === album.value?.id));
const otherAlbums = computed(() =>
  mockAlbums.filter(a => a.artist_id === album.value?.artist_id && a.id !== album.value?.id)
);
</script>
