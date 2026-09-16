<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-lg font-bold text-white">Albums</h2>
        <p class="text-xs text-[#555555] mt-0.5">{{ albums.length }} album(s)</p>
      </div>
      <button @click="openModal()" id="add-album-btn" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-semibold transition-colors shadow-lg shadow-[#1F8A4C]/20">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Ajouter
      </button>
    </div>

    <div class="bg-[#0C0E0E] border border-white/5 rounded-xl overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="border-b border-white/5">
            <tr>
              <th class="text-left text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Album</th>
              <th class="text-left text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Artiste</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Année</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Chansons</th>
              <th class="text-right text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/3">
            <tr v-for="album in albums" :key="album.id" class="hover:bg-white/2 transition-colors">
              <td class="px-5 py-3.5">
                <div class="flex items-center gap-3">
                  <img :src="album.cover_url" :alt="album.title" class="w-10 h-10 rounded-lg object-cover shrink-0 shadow-md" />
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-white truncate">{{ album.title }}</p>
                    <p class="text-[11px] text-[#444444] truncate font-mono">{{ album.slug }}</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-3.5 text-sm text-[#666666] hidden md:table-cell">{{ album.artist?.name }}</td>
              <td class="px-5 py-3.5 text-center text-sm font-mono text-[#777777]">{{ album.release_year }}</td>
              <td class="px-5 py-3.5 text-center text-sm font-mono text-[#777777]">{{ album.song_count }}</td>
              <td class="px-5 py-3.5">
                <div class="flex items-center justify-end gap-2">
                  <button @click="openModal(album)" class="p-1.5 rounded-lg text-[#555555] hover:text-[#1F8A4C] hover:bg-[#1F8A4C]/10 transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button @click="deleteAlbum(album.id)" class="p-1.5 rounded-lg text-[#555555] hover:text-red-400 hover:bg-red-400/10 transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="showModal = false">
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div class="relative w-full max-w-lg bg-[#0F1110] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div class="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h3 class="text-base font-bold text-white">{{ editMode ? 'Modifier' : 'Ajouter' }} un album</h3>
          <button @click="showModal = false" class="p-1 rounded-lg text-[#555555] hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <form @submit.prevent="saveAlbum" class="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label class="label-sm">Titre *</label>
            <input v-model="form.title" type="text" required class="input-dark" placeholder="Titre de l'album" />
          </div>
          <div>
            <label class="label-sm">Artiste *</label>
            <select v-model="form.artist_id" required class="input-dark">
              <option value="">Choisir un artiste</option>
              <option v-for="a in allArtists" :key="a.id" :value="a.id">{{ a.name }}</option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="label-sm">Slug *</label>
              <input v-model="form.slug" type="text" required class="input-dark font-mono" placeholder="titre-album" />
            </div>
            <div>
              <label class="label-sm">Année *</label>
              <input v-model="form.release_year" type="number" required min="1990" max="2030" class="input-dark font-mono" placeholder="2026" />
            </div>
          </div>
          <div>
            <label class="label-sm">Cover URL</label>
            <input v-model="form.cover_url" type="url" class="input-dark" placeholder="https://..." />
          </div>
          <div>
            <label class="label-sm">Description</label>
            <textarea v-model="form.description" rows="3" class="input-dark resize-none" placeholder="Description de l'album..."></textarea>
          </div>
          <div class="flex gap-3 pt-2 border-t border-white/5">
            <button type="button" @click="showModal = false" class="flex-1 py-2.5 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors">Annuler</button>
            <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-bold transition-colors">{{ editMode ? 'Mettre à jour' : 'Ajouter' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { mockAlbums, mockArtists } from '@/data/mockData';
import type { Album } from '@/types';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const albums = ref<Album[]>([...mockAlbums]);
const allArtists = mockArtists;
const showModal = ref(false);
const editMode = ref(false);
const editId = ref<number | null>(null);

const form = reactive({ title: '', slug: '', artist_id: '' as number | string, release_year: 2026, cover_url: '', description: '' });

function openModal(album?: Album) {
  editMode.value = !!album;
  editId.value = album?.id ?? null;
  if (album) {
    form.title = album.title; form.slug = album.slug; form.artist_id = album.artist_id;
    form.release_year = album.release_year; form.cover_url = album.cover_url; form.description = album.description ?? '';
  } else {
    form.title = ''; form.slug = ''; form.artist_id = ''; form.release_year = 2026; form.cover_url = ''; form.description = '';
  }
  showModal.value = true;
}

function saveAlbum() {
  const artist = allArtists.find(a => a.id === Number(form.artist_id));
  if (editMode.value && editId.value !== null) {
    const idx = albums.value.findIndex(a => a.id === editId.value);
    if (idx !== -1) {
      albums.value[idx] = { ...albums.value[idx], title: form.title, slug: form.slug, release_year: form.release_year, cover_url: form.cover_url, description: form.description, artist_id: Number(form.artist_id), artist };
      appStore.addToast(`Album "${form.title}" mis à jour !`, 'success');
    }
  } else {
    albums.value.unshift({ id: Date.now(), title: form.title, slug: form.slug, release_year: form.release_year, cover_url: form.cover_url || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80', song_count: 0, artist_id: Number(form.artist_id), artist, description: form.description });
    appStore.addToast(`Album "${form.title}" ajouté !`, 'success');
  }
  showModal.value = false;
}

function deleteAlbum(id: number) {
  const album = albums.value.find(a => a.id === id);
  if (confirm(`Supprimer "${album?.title}" ?`)) {
    albums.value = albums.value.filter(a => a.id !== id);
    appStore.addToast('Album supprimé.', 'info');
  }
}
</script>

<style scoped>
.label-sm { @apply block text-xs font-semibold text-[#777777] uppercase tracking-wider mb-1.5; }
.input-dark { @apply w-full bg-[#111313] border border-white/8 focus:border-[#1F8A4C]/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#444444] outline-none transition-all; }
</style>
