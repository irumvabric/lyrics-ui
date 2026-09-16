<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <div class="mb-8">
      <h1 class="text-2xl sm:text-3xl font-extrabold text-white mb-1">
        Nshaka / Recherche
        <span v-if="query" class="text-[#1F8A4C]">"{{ query }}"</span>
      </h1>
      <p class="text-sm text-[#555555]">{{ totalResults }} résultat(s) trouvé(s)</p>
    </div>

    <!-- No query -->
    <div v-if="!query" class="text-center py-20">
      <svg class="w-12 h-12 text-[#333333] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <p class="text-[#555555] text-sm">Injiza ijambo ushaka kuri buri browser hejuru.<br/>Saisissez un terme dans la barre de recherche ci-dessus.</p>
    </div>

    <div v-else>
      <!-- Songs results -->
      <section v-if="songResults.length" class="mb-10">
        <h2 class="text-sm font-bold text-[#1F8A4C] uppercase tracking-widest mb-4">
          Indirimbo / Chansons ({{ songResults.length }})
        </h2>
        <div class="bg-[#0C0E0E] border border-white/5 rounded-xl overflow-hidden divide-y divide-white/5">
          <router-link
            v-for="song in songResults"
            :key="song.id"
            :to="`/lyrics/${song.slug}`"
            class="flex items-center gap-4 px-4 sm:px-5 py-3.5 hover:bg-white/3 transition-colors group cursor-pointer"
          >
            <img :src="song.cover_url" :alt="song.title" class="w-10 h-10 rounded-lg object-cover shrink-0" />
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ song.title }}</p>
              <p class="text-xs text-[#555555] truncate mt-0.5">{{ song.artist?.name }} <span v-if="song.album">· {{ song.album.title }}</span></p>
            </div>
            <span v-if="song.lyrics" class="text-[10px] text-[#1F8A4C] bg-[#1F8A4C]/10 px-2 py-0.5 rounded font-semibold shrink-0">Paroles</span>
            <svg class="w-3.5 h-3.5 text-[#333333] group-hover:text-[#1F8A4C] shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </section>

      <!-- Artist results -->
      <section v-if="artistResults.length" class="mb-10">
        <h2 class="text-sm font-bold text-[#C62828] uppercase tracking-widest mb-4">
          Abahanzi / Artistes ({{ artistResults.length }})
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <router-link
            v-for="artist in artistResults"
            :key="artist.id"
            :to="`/artists/${artist.slug}`"
            class="group flex items-center gap-3 bg-[#0C0E0E] border border-white/5 rounded-xl p-3 hover:border-[#1F8A4C]/30 transition-all"
          >
            <img :src="artist.photo_url" :alt="artist.name" class="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#1F8A4C] transition-all" />
            <div class="min-w-0">
              <p class="text-sm font-bold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ artist.name }}</p>
              <p class="text-[11px] text-[#444444]">{{ artist.song_count }} chansons</p>
            </div>
          </router-link>
        </div>
      </section>

      <!-- Album results -->
      <section v-if="albumResults.length" class="mb-10">
        <h2 class="text-sm font-bold text-[#1E5AA8] uppercase tracking-widest mb-4">
          Albums ({{ albumResults.length }})
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <router-link
            v-for="album in albumResults"
            :key="album.id"
            :to="`/albums/${album.slug}`"
            class="group cursor-pointer"
          >
            <div class="aspect-square rounded-xl overflow-hidden mb-2 shadow-lg">
              <img :src="album.cover_url" :alt="album.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 class="text-xs font-bold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ album.title }}</h3>
            <p class="text-[11px] text-[#444444] truncate mt-0.5">{{ album.artist?.name }}</p>
          </router-link>
        </div>
      </section>

      <!-- No results -->
      <div v-if="totalResults === 0" class="text-center py-16">
        <p class="text-[#555555] text-sm">Nta bibonetse kuri "{{ query }}" / Aucun résultat pour "{{ query }}"</p>
        <router-link to="/" class="mt-4 inline-block text-sm text-[#1F8A4C] hover:underline">← Retour à l'accueil</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockSongs, mockArtists, mockAlbums } from '@/data/mockData';

const route = useRoute();
const query = computed(() => (route.query.q as string)?.toLowerCase().trim() || '');

const songResults = computed(() =>
  !query.value ? [] : mockSongs.filter(s =>
    s.title.toLowerCase().includes(query.value) ||
    s.artist?.name.toLowerCase().includes(query.value) ||
    s.album?.title.toLowerCase().includes(query.value) ||
    s.lyrics?.content.toLowerCase().includes(query.value)
  )
);

const artistResults = computed(() =>
  !query.value ? [] : mockArtists.filter(a =>
    a.name.toLowerCase().includes(query.value) ||
    a.location.toLowerCase().includes(query.value)
  )
);

const albumResults = computed(() =>
  !query.value ? [] : mockAlbums.filter(a =>
    a.title.toLowerCase().includes(query.value) ||
    a.artist?.name.toLowerCase().includes(query.value)
  )
);

const totalResults = computed(() => songResults.value.length + artistResults.value.length + albumResults.value.length);
</script>
