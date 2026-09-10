<template>
  <div class="space-y-10">
    <!-- Hero Section -->
    <section class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#101212] via-[#151818] to-[#101212] border border-[#151818] p-6 sm:p-10 shadow-2xl">
      <!-- Background Ambient Glows (Burundi Colors) -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#1F8A4C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1E5AA8]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-2xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151818] border border-[#1F8A4C]/30 text-xs font-semibold text-[#1F8A4C] mb-4">
          <span class="w-2 h-2 rounded-full bg-[#1F8A4C] animate-pulse"></span>
          Plateforme Officielle du Gospel Burundais
        </div>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Découvrez le <span class="text-[#1F8A4C]">Gospel</span> Burundais
        </h1>

        <p class="text-base sm:text-lg text-[#A0A0A0] leading-relaxed mb-6 font-normal">
          Écoutez, découvrez et soutenez les artistes gospel du Burundi. Louange, adoration, choeurs et chants traditionnels en Kirundi et en Français.
        </p>

        <div class="flex flex-wrap items-center gap-3">
          <router-link
            to="/songs"
            class="px-6 py-3 rounded-lg bg-[#1F8A4C] hover:bg-[#18723e] text-white font-semibold text-sm transition-all shadow-lg shadow-[#1F8A4C]/30 flex items-center gap-2"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Découvrir les chansons
          </router-link>

          <router-link
            to="/artists"
            class="px-6 py-3 rounded-lg bg-[#151818] hover:bg-[#1f2424] text-white font-semibold text-sm border border-[#151818] hover:border-[#A0A0A0]/20 transition-all flex items-center gap-2"
          >
            Explorer les artistes
          </router-link>

          <router-link
            to="/architecture"
            class="px-4 py-3 rounded-lg bg-[#101212] hover:bg-[#151818] text-[#A0A0A0] hover:text-white font-mono text-xs border border-[#151818] transition-all flex items-center gap-2"
          >
            <span class="w-2 h-2 rounded-full bg-[#1F8A4C]"></span>
            Phase 1 : Architecture
          </router-link>
        </div>
      </div>
    </section>

    <!-- Phase 1 Architecture Verification Card -->
    <section class="bg-[#101212] border border-[#151818] rounded-xl p-5 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#151818] pb-4 mb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-[#1F8A4C]/15 border border-[#1F8A4C]/30 flex items-center justify-center text-[#1F8A4C]">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h2 class="text-base font-bold text-white flex items-center gap-2">
              Phase 1 Complétée : Architecture Laravel + Vue.js
              <span class="px-2 py-0.5 text-[10px] bg-[#1F8A4C]/20 text-[#1F8A4C] rounded font-mono font-bold">ACTIF</span>
            </h2>
            <p class="text-xs text-[#A0A0A0]">Séparation stricte Frontend (Vue 3, Pinia, Vite) et Backend (Laravel 11, Sanctum, MySQL)</p>
          </div>
        </div>

        <router-link
          to="/architecture"
          class="text-xs text-[#1F8A4C] hover:underline flex items-center gap-1 font-semibold"
        >
          Voir le dossier complet d'architecture
          <span>→</span>
        </router-link>
      </div>

      <!-- Quick Architecture Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div class="p-3 rounded-lg bg-[#151818] border border-[#101212]">
          <p class="text-[#A0A0A0] mb-1">Frontend</p>
          <p class="font-bold text-white">Vue.js 3 + Vite</p>
          <p class="text-[11px] text-[#1F8A4C] mt-1">Pinia, Vue Router, Tailwind</p>
        </div>
        <div class="p-3 rounded-lg bg-[#151818] border border-[#101212]">
          <p class="text-[#A0A0A0] mb-1">Backend REST API</p>
          <p class="font-bold text-white">Laravel 11 + Sanctum</p>
          <p class="text-[11px] text-[#1E5AA8] mt-1">Routes, Contrôleurs, Policies</p>
        </div>
        <div class="p-3 rounded-lg bg-[#151818] border border-[#101212]">
          <p class="text-[#A0A0A0] mb-1">Base de Données</p>
          <p class="font-bold text-white">MySQL (14 Tables)</p>
          <p class="text-[11px] text-[#A0A0A0] mt-1">Modèles Eloquent configurés</p>
        </div>
        <div class="p-3 rounded-lg bg-[#151818] border border-[#101212]">
          <p class="text-[#A0A0A0] mb-1">Lecteur Audio Global</p>
          <p class="font-bold text-white">Persistant & Réactif</p>
          <p class="text-[11px] text-[#1F8A4C] mt-1">Navigation sans coupure</p>
        </div>
      </div>
    </section>

    <!-- Popular Artists Section -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-xl font-bold text-white tracking-tight">Artistes Populaires</h2>
          <p class="text-xs text-[#A0A0A0]">Les voix gospel les plus écoutées au Burundi</p>
        </div>
        <router-link
          to="/artists"
          class="text-xs font-semibold text-[#1F8A4C] hover:text-[#27a85d] transition-colors"
        >
          Voir tous les artistes →
        </router-link>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="artist in mockArtists"
          :key="artist.id"
          @click="router.push(`/artists/${artist.slug}`)"
          class="group bg-[#101212] hover:bg-[#151818] border border-[#151818] hover:border-[#1F8A4C]/30 p-4 rounded-xl text-center cursor-pointer transition-all hover:-translate-y-1"
        >
          <div class="relative mx-auto w-24 h-24 mb-3">
            <img
              :src="artist.photo_url"
              :alt="artist.name"
              class="w-full h-full object-cover rounded-full shadow-lg ring-2 ring-transparent group-hover:ring-[#1F8A4C] transition-all"
            />
          </div>
          <h3 class="font-bold text-sm text-white group-hover:text-[#1F8A4C] transition-colors truncate">
            {{ artist.name }}
          </h3>
          <p class="text-[11px] text-[#A0A0A0] mt-0.5">
            {{ artist.song_count }} chansons
          </p>
          <p class="text-[11px] text-[#666666] font-mono mt-0.5">
            {{ formatNumber(artist.plays_count) }} écoutes
          </p>
        </div>
      </div>
    </section>

    <!-- Trending Songs Section -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-xl font-bold text-white tracking-tight">Chansons Tendances</h2>
          <p class="text-xs text-[#A0A0A0]">Les titres du moment qui touchent les coeurs</p>
        </div>
        <router-link
          to="/songs"
          class="text-xs font-semibold text-[#1F8A4C] hover:text-[#27a85d] transition-colors"
        >
          Voir toutes les chansons →
        </router-link>
      </div>

      <div class="bg-[#101212] border border-[#151818] rounded-xl overflow-hidden divide-y divide-[#151818]">
        <div
          v-for="(song, idx) in mockSongs"
          :key="song.id"
          class="group flex items-center justify-between p-3 sm:p-4 hover:bg-[#151818] transition-colors cursor-pointer"
          @click="playerStore.playSong(song, mockSongs)"
        >
          <!-- Left: Number, Cover, Title, Artist -->
          <div class="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <span class="w-6 text-center text-xs font-mono text-[#666666] group-hover:text-white shrink-0">
              {{ String(idx + 1).padStart(2, '0') }}
            </span>

            <div class="relative w-12 h-12 rounded overflow-hidden shrink-0">
              <img
                :src="song.cover_url"
                :alt="song.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <svg class="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <div class="truncate">
              <p class="text-sm font-semibold text-white group-hover:text-[#1F8A4C] transition-colors truncate">
                {{ song.title }}
              </p>
              <p class="text-xs text-[#A0A0A0] truncate">
                {{ song.artist?.name }} • <span class="text-[#666666]">{{ song.album?.title || 'Single' }}</span>
              </p>
            </div>
          </div>

          <!-- Right: Plays, Duration, Actions -->
          <div class="flex items-center gap-4 sm:gap-6 text-xs text-[#A0A0A0] shrink-0">
            <span class="hidden sm:inline font-mono">{{ formatNumber(song.plays_count) }} écoutes</span>
            <span class="font-mono">{{ song.duration }}</span>

            <!-- Favorite Button -->
            <button
              @click.stop="toggleFavorite(song)"
              class="p-1 text-[#666666] hover:text-[#C62828] transition-colors"
              title="Ajouter aux favoris"
            >
              <svg
                class="w-4 h-4"
                :class="song.is_favorite ? 'text-[#C62828] fill-current' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Albums Section -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-xl font-bold text-white tracking-tight">Albums & Projets</h2>
          <p class="text-xs text-[#A0A0A0]">Les recueils d'adoration complets</p>
        </div>
        <router-link
          to="/albums"
          class="text-xs font-semibold text-[#1F8A4C] hover:text-[#27a85d] transition-colors"
        >
          Voir tous les albums →
        </router-link>
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
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { usePlayerStore } from '@/stores/player';
import { useAppStore } from '@/stores/app';
import { mockArtists, mockSongs, mockAlbums } from '@/data/mockData';
import type { Song } from '@/types';

const router = useRouter();
const playerStore = usePlayerStore();
const appStore = useAppStore();

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'k';
  return num.toString();
}

function toggleFavorite(song: Song) {
  song.is_favorite = !song.is_favorite;
  appStore.addToast(
    song.is_favorite ? `"${song.title}" ajouté à vos favoris` : `"${song.title}" retiré des favoris`,
    'success'
  );
}
</script>
