<template>
  <div>
    <!-- Stats cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-[#0C0E0E] border border-white/5 rounded-xl p-5 flex items-center gap-4"
      >
        <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" :style="`background:${stat.color}22`">
          <span class="text-lg" v-html="stat.icon"></span>
        </div>
        <div>
          <p class="text-2xl font-extrabold text-white">{{ stat.value }}</p>
          <p class="text-xs text-[#555555] mt-0.5">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Quick actions + Recent songs -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Quick Actions -->
      <div class="bg-[#0C0E0E] border border-white/5 rounded-xl p-5">
        <h2 class="text-sm font-bold text-white mb-4">Actions Rapides</h2>
        <div class="space-y-2">
          <router-link
            v-for="action in quickActions"
            :key="action.to"
            :to="action.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
          >
            <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" :style="`background:${action.color}22`">
              <span v-html="action.icon" :style="`color:${action.color}`"></span>
            </div>
            <span class="text-sm text-[#A0A0A0] group-hover:text-white transition-colors">{{ action.label }}</span>
            <svg class="w-3.5 h-3.5 text-[#333333] group-hover:text-white ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>

      <!-- Recent Songs -->
      <div class="lg:col-span-2 bg-[#0C0E0E] border border-white/5 rounded-xl p-5">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-bold text-white">Dernières Chansons</h2>
          <router-link to="/admin/songs" class="text-xs text-[#1F8A4C] hover:underline">Voir tout →</router-link>
        </div>
        <div class="space-y-1">
          <div
            v-for="song in recentSongs"
            :key="song.id"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <img :src="song.cover_url" :alt="song.title" class="w-9 h-9 rounded-lg object-cover shrink-0" />
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">{{ song.title }}</p>
              <p class="text-xs text-[#444444] truncate mt-0.5">{{ song.artist?.name }} · {{ song.release_year }}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span v-if="song.lyrics" class="text-[10px] text-[#1F8A4C] bg-[#1F8A4C]/10 px-1.5 py-0.5 rounded font-semibold">Paroles ✓</span>
              <span v-else class="text-[10px] text-[#555555] bg-white/5 px-1.5 py-0.5 rounded">Pas de paroles</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary table -->
    <div class="mt-6 bg-[#0C0E0E] border border-white/5 rounded-xl p-5">
      <h2 class="text-sm font-bold text-white mb-4">Résumé par Artiste</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-white/5">
              <th class="text-left text-xs font-semibold text-[#555555] uppercase tracking-wider pb-3">Artiste</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider pb-3">Albums</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider pb-3">Chansons</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider pb-3">Avec paroles</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/3">
            <tr v-for="artist in artists" :key="artist.id" class="group hover:bg-white/2 transition-colors">
              <td class="py-3 pr-4">
                <div class="flex items-center gap-2.5">
                  <img :src="artist.photo_url" :alt="artist.name" class="w-7 h-7 rounded-full object-cover" />
                  <span class="font-semibold text-white text-sm">{{ artist.name }}</span>
                </div>
              </td>
              <td class="py-3 text-center text-[#777777] font-mono text-xs">{{ artist.album_count }}</td>
              <td class="py-3 text-center text-[#777777] font-mono text-xs">{{ artist.song_count }}</td>
              <td class="py-3 text-center">
                <span class="text-xs text-[#1F8A4C] font-semibold">
                  {{ songsWithLyricsByArtist(artist.id) }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mockStats, mockSongs, mockArtists } from '@/data/mockData';

const stats = [
  { label: 'Artistes', value: mockStats.artists_count.toLocaleString(), color: '#1F8A4C', icon: '🎤' },
  { label: 'Chansons', value: mockStats.songs_count.toLocaleString(), color: '#C62828', icon: '🎵' },
  { label: 'Albums', value: mockStats.albums_count.toLocaleString(), color: '#1E5AA8', icon: '💿' },
  { label: 'Genres', value: mockStats.genres_count.toString(), color: '#9333EA', icon: '🎸' },
];

const quickActions = [
  { to: '/admin/songs', label: 'Ajouter une chanson + paroles', color: '#1F8A4C', icon: '<svg class="w-4 h-4 fill-none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>' },
  { to: '/admin/artists', label: 'Ajouter un artiste', color: '#C62828', icon: '<svg class="w-4 h-4 fill-none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>' },
  { to: '/admin/albums', label: 'Ajouter un album', color: '#1E5AA8', icon: '<svg class="w-4 h-4 fill-none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>' },
  { to: '/admin/genres', label: 'Gérer les genres', color: '#9333EA', icon: '<svg class="w-4 h-4 fill-none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>' },
];

const recentSongs = mockSongs.slice(0, 5);
const artists = mockArtists;

function songsWithLyricsByArtist(artistId: number): string {
  const songs = mockSongs.filter(s => s.artist_id === artistId);
  const withLyrics = songs.filter(s => s.lyrics);
  return `${withLyrics.length} / ${songs.length}`;
}
</script>
