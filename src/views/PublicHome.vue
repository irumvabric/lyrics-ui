<template>
  <div>
    <!-- ══ HERO ══ -->
    <section class="relative overflow-hidden bg-gradient-to-b from-[#0D1A10] to-[#080A0A] py-16 px-4">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSIjMUY4QTRDIiBzdHJva2Utd2lkdGg9Ii41IiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div class="relative max-w-2xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F8A4C]/10 border border-[#1F8A4C]/20 text-xs font-semibold text-[#1F8A4C] mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-[#1F8A4C] animate-pulse"></span>
          Amashitira y'indirimbo za Gospel — Paroles Gospel Burundi
        </div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Les Paroles du <span class="text-[#1F8A4C]">Gospel</span> Burundais
        </h1>
        <p class="text-sm sm:text-base text-[#777777] mb-8 max-w-lg mx-auto leading-relaxed">
          Shaka amashitira y'indirimbo — Trouvez les paroles de vos chansons gospel préférées en Kirundi et en Français.
        </p>
        <!-- Search bar -->
        <form @submit.prevent="handleSearch" class="flex items-center max-w-md mx-auto bg-[#111313] border border-white/10 focus-within:border-[#1F8A4C]/50 rounded-full overflow-hidden shadow-xl shadow-black/30 transition-all">
          <input
            v-model="searchQuery"
            id="hero-search"
            type="text"
            placeholder="Nshaka indirimbo, umuhanzi... / Chanson, artiste..."
            class="flex-1 bg-transparent pl-5 pr-3 py-3 text-sm text-white placeholder-[#555555] outline-none"
          />
          <button type="submit" class="m-1 px-5 py-2 rounded-full bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-semibold transition-colors shrink-0">
            Nshaka
          </button>
        </form>
        <!-- Quick stats -->
        <div class="flex flex-wrap justify-center gap-6 mt-10 text-center">
          <div v-for="s in stats" :key="s.label">
            <p class="text-xl font-extrabold text-white">{{ s.value }}</p>
            <p class="text-xs text-[#555555] mt-0.5">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ RECENT SONGS ══ -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div class="flex items-end justify-between mb-6">
        <div>
          <p class="text-xs font-bold text-[#1F8A4C] uppercase tracking-widest mb-1">Bishasha / Récentes</p>
          <h2 class="text-xl sm:text-2xl font-extrabold text-white">Paroles Récentes</h2>
        </div>
        <router-link to="/search" class="text-xs font-semibold text-[#1F8A4C] hover:text-[#27a85d] transition-colors flex items-center gap-1">
          Tout voir <span>→</span>
        </router-link>
      </div>

      <div class="bg-[#0C0E0E] border border-white/5 rounded-xl overflow-hidden divide-y divide-white/5">
        <router-link
          v-for="(song, idx) in recentSongs"
          :key="song.id"
          :to="`/lyrics/${song.slug}`"
          class="flex items-center gap-4 px-4 sm:px-5 py-3.5 hover:bg-white/3 transition-colors group cursor-pointer"
        >
          <!-- Index -->
          <span class="text-xs font-mono text-[#444444] w-5 text-center shrink-0 group-hover:text-[#1F8A4C] transition-colors">{{ idx + 1 }}</span>
          <!-- Cover -->
          <img :src="song.cover_url" :alt="song.title" class="w-10 h-10 rounded-lg object-cover shrink-0 shadow-md" />
          <!-- Info -->
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-white group-hover:text-[#1F8A4C] transition-colors truncate">{{ song.title }}</p>
            <p class="text-xs text-[#555555] truncate mt-0.5">
              {{ song.artist?.name }}
              <span v-if="song.album"> · {{ song.album.title }}</span>
            </p>
          </div>
          <!-- Genre badges -->
          <div class="hidden sm:flex gap-1 shrink-0">
            <span
              v-for="genre in (song.genres ?? []).slice(0, 1)"
              :key="genre.id"
              class="px-2 py-0.5 rounded-full text-[10px] font-semibold"
              :style="`background:${genre.color}22;color:${genre.color}`"
            >{{ genre.name.split('/')[0].trim() }}</span>
          </div>
          <!-- Year -->
          <span class="text-xs text-[#444444] font-mono shrink-0">{{ song.release_year }}</span>
          <!-- Lyrics icon -->
          <svg class="w-4 h-4 text-[#333333] group-hover:text-[#1F8A4C] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </router-link>
      </div>
    </section>

    <!-- ══ RECENT ALBUMS ══ -->
    <section class="bg-[#0C0E0E] border-y border-white/5 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-end justify-between mb-6">
          <div>
            <p class="text-xs font-bold text-[#1E5AA8] uppercase tracking-widest mb-1">Discographie / Albums</p>
            <h2 class="text-xl sm:text-2xl font-extrabold text-white">Albums Récents</h2>
          </div>
          <router-link to="/albums" class="text-xs font-semibold text-[#1F8A4C] hover:text-[#27a85d] transition-colors flex items-center gap-1">
            Tout voir <span>→</span>
          </router-link>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <router-link
            v-for="album in recentAlbums"
            :key="album.id"
            :to="`/albums/${album.slug}`"
            class="group cursor-pointer"
          >
            <div class="relative aspect-square rounded-xl overflow-hidden mb-2.5 shadow-lg">
              <img :src="album.cover_url" :alt="album.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
            </div>
            <h3 class="font-bold text-xs text-white group-hover:text-[#1F8A4C] transition-colors truncate leading-snug">{{ album.title }}</h3>
            <p class="text-[11px] text-[#555555] truncate mt-0.5">{{ album.artist?.name }}</p>
            <p class="text-[10px] text-[#3a3a3a] font-mono mt-0.5">{{ album.release_year }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ══ ARTISTS ══ -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div class="flex items-end justify-between mb-6">
        <div>
          <p class="text-xs font-bold text-[#C62828] uppercase tracking-widest mb-1">Abahanzi / Artistes</p>
          <h2 class="text-xl sm:text-2xl font-extrabold text-white">Artistes à la Une</h2>
        </div>
        <router-link to="/artists" class="text-xs font-semibold text-[#1F8A4C] hover:text-[#27a85d] transition-colors flex items-center gap-1">
          Tout voir <span>→</span>
        </router-link>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <router-link
          v-for="artist in featuredArtists"
          :key="artist.id"
          :to="`/artists/${artist.slug}`"
          class="group text-center cursor-pointer"
        >
          <div class="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-2.5">
            <img
              :src="artist.photo_url"
              :alt="artist.name"
              class="w-full h-full rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#1F8A4C] transition-all duration-300 shadow-lg"
            />
          </div>
          <h3 class="text-xs font-bold text-white group-hover:text-[#1F8A4C] transition-colors leading-snug truncate px-1">{{ artist.name }}</h3>
          <p class="text-[10px] text-[#444444] mt-0.5 font-mono">{{ artist.song_count }} chansons</p>
        </router-link>
      </div>
    </section>

    <!-- ══ BROWSE BY GENRE ══ -->
    <section class="bg-[#0C0E0E] border-t border-white/5 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-end justify-between mb-6">
          <div>
            <p class="text-xs font-bold text-[#9333EA] uppercase tracking-widest mb-1">Ubwoko / Genres</p>
            <h2 class="text-xl sm:text-2xl font-extrabold text-white">Parcourir par Genre</h2>
          </div>
          <router-link to="/genres" class="text-xs font-semibold text-[#1F8A4C] hover:text-[#27a85d] transition-colors flex items-center gap-1">
            Tout voir <span>→</span>
          </router-link>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <router-link
            v-for="genre in genres"
            :key="genre.id"
            :to="`/genres`"
            class="group flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 hover:border-white/10 bg-[#080A0A] hover:bg-[#0F1110] transition-all"
          >
            <span class="w-2.5 h-2.5 rounded-full shrink-0 transition-transform group-hover:scale-125" :style="`background:${genre.color}`"></span>
            <div class="min-w-0">
              <p class="text-sm font-semibold text-white truncate">{{ genre.name.split('/')[0].trim() }}</p>
              <p class="text-[11px] text-[#444444] mt-0.5">{{ genre.song_count }} chansons</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { mockSongs, mockAlbums, mockArtists, mockStats, mockGenres } from '@/data/mockData';

const router = useRouter();
const searchQuery = ref('');

const recentSongs = mockSongs.slice(0, 8);
const recentAlbums = mockAlbums.slice(0, 6);
const featuredArtists = mockArtists.slice(0, 6);
const genres = mockGenres;

const stats = [
  { value: mockStats.songs_count.toLocaleString(), label: 'Indirimbo / Chansons' },
  { value: mockStats.artists_count.toLocaleString(), label: 'Abahanzi / Artistes' },
  { value: mockStats.albums_count.toLocaleString(), label: 'Albums' },
  { value: mockStats.total_views, label: 'Ivyarabonywe / Vues' },
];

function handleSearch() {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } });
  }
}
</script>
