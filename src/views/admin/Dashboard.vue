<template>
  <div class="space-y-6">
    <section class="grid grid-cols-2 gap-4 xl:grid-cols-4">
      <article
        v-for="stat in stats"
        :key="stat.label"
        class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
      >
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" :style="`background-color:${stat.color}14;color:${stat.color}`">
          <i :class="stat.icon" class="text-lg" aria-hidden="true"></i>
        </div>
        <div class="min-w-0">
          <p class="text-2xl font-extrabold text-slate-900">{{ stat.value }}</p>
          <p class="mt-0.5 text-xs font-medium text-slate-500">{{ stat.label }}</p>
        </div>
      </article>
    </section>

    <section class="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 class="mb-4 text-sm font-bold text-slate-900">Actions rapides</h2>
        <div class="space-y-1">
          <router-link
            v-for="action in quickActions"
            :key="action.to"
            :to="action.to"
            class="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" :style="`background-color:${action.color}14;color:${action.color}`">
              <i :class="action.icon" aria-hidden="true"></i>
            </span>
            <span class="text-sm font-medium text-slate-600 transition-colors group-hover:text-emerald-800">{{ action.label }}</span>
            <i class="pi pi-angle-right ml-auto text-xs text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-700" aria-hidden="true"></i>
          </router-link>
        </div>
      </article>

      <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-sm font-bold text-slate-900">Dernières chansons</h2>
          <router-link to="/admin/songs" class="rounded-md px-2 py-1 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">Voir tout</router-link>
        </div>
        <div class="space-y-1">
          <div
            v-for="song in recentSongs"
            :key="song.id"
            class="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
          >
            <img :src="song.cover_url" :alt="song.title" class="h-10 w-10 shrink-0 rounded-lg object-cover ring-1 ring-slate-200" />
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-semibold text-slate-800">{{ song.title }}</p>
              <p class="mt-0.5 truncate text-xs text-slate-500">{{ song.artist?.name }} · {{ song.release_year }}</p>
            </div>
            <span v-if="song.lyrics" class="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
              <i class="pi pi-check" aria-hidden="true"></i> Paroles
            </span>
            <span v-else class="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500">Pas de paroles</span>
          </div>
        </div>
      </article>
    </section>

    <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 class="mb-4 text-sm font-bold text-slate-900">Résumé par artiste</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-200">
              <th class="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Artiste</th>
              <th class="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Albums</th>
              <th class="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Chansons</th>
              <th class="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Avec paroles</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="artist in artists" :key="artist.id" class="transition-colors hover:bg-slate-50">
              <td class="py-3 pr-4">
                <div class="flex items-center gap-2.5">
                  <img :src="artist.photo_url" :alt="artist.name" class="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" />
                  <span class="text-sm font-semibold text-slate-800">{{ artist.name }}</span>
                </div>
              </td>
              <td class="py-3 text-center font-mono text-xs text-slate-600">{{ artist.album_count }}</td>
              <td class="py-3 text-center font-mono text-xs text-slate-600">{{ artist.song_count }}</td>
              <td class="py-3 text-center text-xs font-semibold text-emerald-700">{{ songsWithLyricsByArtist(artist.id) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { mockStats, mockSongs, mockArtists } from '@/data/mockData';

const stats = [
  { label: 'Artistes', value: mockStats.artists_count.toLocaleString(), color: '#1F8A4C', icon: 'pi pi-users' },
  { label: 'Chansons', value: mockStats.songs_count.toLocaleString(), color: '#C62828', icon: 'pi pi-headphones' },
  { label: 'Albums', value: mockStats.albums_count.toLocaleString(), color: '#1E5AA8', icon: 'pi pi-folder' },
  { label: 'Genres', value: mockStats.genres_count.toString(), color: '#9333EA', icon: 'pi pi-tags' },
];

const quickActions = [
  { to: '/admin/songs', label: 'Ajouter une chanson + paroles', color: '#1F8A4C', icon: 'pi pi-plus-circle' },
  { to: '/admin/artists', label: 'Ajouter un artiste', color: '#C62828', icon: 'pi pi-user-plus' },
  { to: '/admin/albums', label: 'Ajouter un album', color: '#1E5AA8', icon: 'pi pi-folder-plus' },
  { to: '/admin/genres', label: 'Gerer les genres', color: '#9333EA', icon: 'pi pi-tag' },
];

const recentSongs = mockSongs.slice(0, 5);
const artists = mockArtists;

function songsWithLyricsByArtist(artistId: number): string {
  const songs = mockSongs.filter(song => song.artist_id === artistId);
  const withLyrics = songs.filter(song => song.lyrics);
  return `${withLyrics.length} / ${songs.length}`;
}
</script>