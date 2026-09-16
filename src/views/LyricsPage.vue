<template>
  <div v-if="song" class="max-w-3xl mx-auto px-4 sm:px-6 py-10">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-xs text-[#444444] mb-8 flex-wrap">
      <router-link to="/" class="hover:text-[#1F8A4C] transition-colors">Accueil</router-link>
      <span>›</span>
      <router-link to="/artists" class="hover:text-[#1F8A4C] transition-colors">Artistes</router-link>
      <span>›</span>
      <router-link :to="`/artists/${song.artist?.slug}`" class="hover:text-[#1F8A4C] transition-colors">{{ song.artist?.name }}</router-link>
      <span>›</span>
      <span class="text-[#666666]">{{ song.title }}</span>
    </nav>

    <!-- Song header -->
    <div class="flex flex-col sm:flex-row gap-5 mb-8 pb-8 border-b border-white/5">
      <img :src="song.cover_url" :alt="song.title" class="w-28 h-28 rounded-xl object-cover shadow-xl shrink-0" />
      <div class="flex-1 min-w-0">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-1">{{ song.title }}</h1>
        <router-link :to="`/artists/${song.artist?.slug}`" class="text-base font-semibold text-[#1F8A4C] hover:text-[#27a85d] transition-colors block mb-1">
          {{ song.artist?.name }}
        </router-link>
        <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#555555] mb-3">
          <span v-if="song.album">
            <router-link :to="`/albums/${song.album.slug}`" class="hover:text-[#1F8A4C] transition-colors">
              📀 {{ song.album.title }}
            </router-link>
          </span>
          <span>📅 {{ song.release_year }}</span>
          <span>🕒 {{ song.duration }}</span>
          <span v-if="song.lyrics?.language">🌐 {{ song.lyrics.language }}</span>
        </div>
        <!-- Genre badges -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          <span
            v-for="genre in song.genres"
            :key="genre.id"
            class="px-2 py-0.5 rounded-full text-[10px] font-semibold"
            :style="`background:${genre.color}22;color:${genre.color}`"
          >{{ genre.name }}</span>
        </div>
        <!-- Actions -->
        <div class="flex gap-2 flex-wrap">
          <a
            v-if="song.youtube_url"
            :href="song.youtube_url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors shadow-lg shadow-red-600/20"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Kûmva kuri YouTube / Écouter sur YouTube
          </a>
          <button
            @click="copyLyrics"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111313] border border-white/8 hover:border-[#1F8A4C]/40 text-white text-xs font-semibold transition-colors"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            {{ copied ? 'Copié ✓' : 'Copier les paroles' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Lyrics -->
    <div v-if="song.lyrics" class="mb-12">
      <h2 class="text-sm font-bold text-[#1F8A4C] uppercase tracking-widest mb-6">
        Amashitira / Paroles
      </h2>
      <div class="bg-[#0C0E0E] border border-white/5 rounded-2xl p-6 sm:p-8">
        <pre class="font-sans text-sm sm:text-base text-[#D0D0D0] leading-8 whitespace-pre-wrap break-words lyric-text">{{ song.lyrics.content }}</pre>
      </div>
      <!-- Disclaimer -->
      <p class="text-[11px] text-[#333333] mt-4 text-center leading-relaxed">
        Les paroles sont fournies à titre éducatif et culturel uniquement.<br/>
        Amashitira atangwa ku mpamvu z'inyigisho n'umuco gusa.
      </p>
    </div>

    <!-- No lyrics -->
    <div v-else class="mb-10 text-center py-12 bg-[#0C0E0E] border border-white/5 rounded-2xl">
      <svg class="w-10 h-10 text-[#333333] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      <p class="text-sm text-[#444444]">Amashitira ntabwo arabonetse / Paroles non disponibles pour le moment.</p>
    </div>

    <!-- Related songs -->
    <div v-if="relatedSongs.length">
      <h3 class="text-base font-bold text-white mb-4">
        Indirimbo zisangiye umuhanzi / Autres chansons de <span class="text-[#1F8A4C]">{{ song.artist?.name }}</span>
      </h3>
      <div class="space-y-1">
        <router-link
          v-for="s in relatedSongs"
          :key="s.id"
          :to="`/lyrics/${s.slug}`"
          class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/3 transition-colors group cursor-pointer"
        >
          <img :src="s.cover_url" :alt="s.title" class="w-9 h-9 rounded-lg object-cover shrink-0" />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ s.title }}</p>
            <p class="text-xs text-[#444444] truncate mt-0.5">{{ s.album?.title ?? 'Single' }}</p>
          </div>
          <span v-if="s.lyrics" class="text-[10px] text-[#1F8A4C] bg-[#1F8A4C]/10 px-1.5 py-0.5 rounded font-semibold shrink-0">Paroles</span>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="max-w-3xl mx-auto px-4 py-20 text-center">
    <p class="text-[#555555]">Indirimbo ntabonetse / Chanson introuvable</p>
    <router-link to="/" class="mt-4 inline-block text-sm text-[#1F8A4C] hover:underline">← Retour à l'accueil</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockSongs } from '@/data/mockData';
import { useAppStore } from '@/stores/app';

const route = useRoute();
const appStore = useAppStore();
const slug = computed(() => route.params.slug as string);
const song = computed(() => mockSongs.find(s => s.slug === slug.value));
const copied = ref(false);

const relatedSongs = computed(() =>
  mockSongs.filter(s => s.artist_id === song.value?.artist_id && s.id !== song.value?.id).slice(0, 5)
);

function copyLyrics() {
  if (!song.value?.lyrics) return;
  navigator.clipboard.writeText(song.value.lyrics.content).then(() => {
    copied.value = true;
    appStore.addToast('Paroles copiées ! / Amashitira yakopowe !', 'success');
    setTimeout(() => { copied.value = false; }, 2500);
  });
}
</script>

<style scoped>
.lyric-text {
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 2;
}
</style>
