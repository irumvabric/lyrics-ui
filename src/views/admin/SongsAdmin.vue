<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-lg font-bold text-white">Chansons & Paroles / Indirimbo</h2>
        <p class="text-xs text-[#555555] mt-0.5">{{ songs.length }} chanson(s)</p>
      </div>
      <button @click="openModal()" id="add-song-btn" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-semibold transition-colors shadow-lg shadow-[#1F8A4C]/20">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Ajouter
      </button>
    </div>

    <!-- Filter bar -->
    <div class="flex flex-wrap gap-3 mb-4">
      <select v-model="filterArtist" class="bg-[#111313] border border-white/8 text-sm text-white rounded-lg px-3 py-1.5 outline-none focus:border-[#1F8A4C]/50">
        <option value="">Tous les artistes</option>
        <option v-for="a in allArtists" :key="a.id" :value="a.id">{{ a.name }}</option>
      </select>
      <select v-model="filterLyrics" class="bg-[#111313] border border-white/8 text-sm text-white rounded-lg px-3 py-1.5 outline-none focus:border-[#1F8A4C]/50">
        <option value="">Toutes</option>
        <option value="yes">Avec paroles</option>
        <option value="no">Sans paroles</option>
      </select>
    </div>

    <!-- Table -->
    <div class="bg-[#0C0E0E] border border-white/5 rounded-xl overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="border-b border-white/5">
            <tr>
              <th class="text-left text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Chanson</th>
              <th class="text-left text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Artiste</th>
              <th class="text-left text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Album</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Paroles</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Année</th>
              <th class="text-right text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/3">
            <tr v-for="song in filteredSongs" :key="song.id" class="hover:bg-white/2 transition-colors">
              <td class="px-5 py-3">
                <div class="flex items-center gap-3">
                  <img :src="song.cover_url" :alt="song.title" class="w-9 h-9 rounded-lg object-cover shrink-0" />
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-white truncate">{{ song.title }}</p>
                    <p class="text-[10px] text-[#444444] font-mono">{{ song.duration }}</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-3 text-sm text-[#666666] hidden md:table-cell">{{ song.artist?.name }}</td>
              <td class="px-5 py-3 text-sm text-[#555555] hidden lg:table-cell truncate max-w-[120px]">{{ song.album?.title ?? '—' }}</td>
              <td class="px-5 py-3 text-center">
                <span v-if="song.lyrics" class="inline-flex items-center gap-1 text-[10px] text-[#1F8A4C] bg-[#1F8A4C]/10 px-2 py-0.5 rounded-full font-bold">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Oui
                </span>
                <span v-else class="text-[10px] text-[#444444] bg-white/5 px-2 py-0.5 rounded-full">Non</span>
              </td>
              <td class="px-5 py-3 text-center text-xs font-mono text-[#666666] hidden sm:table-cell">{{ song.release_year }}</td>
              <td class="px-5 py-3">
                <div class="flex items-center justify-end gap-2">
                  <button @click="openModal(song)" class="p-1.5 rounded-lg text-[#555555] hover:text-[#1F8A4C] hover:bg-[#1F8A4C]/10 transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button @click="deleteSong(song.id)" class="p-1.5 rounded-lg text-[#555555] hover:text-red-400 hover:bg-red-400/10 transition-colors">
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
      <div class="relative w-full max-w-2xl bg-[#0F1110] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <!-- Modal header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h3 class="text-base font-bold text-white">{{ editMode ? 'Modifier' : 'Ajouter' }} une chanson</h3>
          <button @click="showModal = false" class="p-1 rounded-lg text-[#555555] hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Tabs -->
        <div class="flex border-b border-white/5">
          <button
            v-for="tab in ['Informations', 'Paroles / Amashitira']"
            :key="tab"
            @click="activeTab = tab"
            class="px-5 py-2.5 text-sm font-semibold transition-colors border-b-2 -mb-px"
            :class="activeTab === tab ? 'text-[#1F8A4C] border-[#1F8A4C]' : 'text-[#555555] border-transparent hover:text-white'"
          >
            {{ tab }}
          </button>
        </div>

        <form @submit.prevent="saveSong" class="max-h-[65vh] overflow-y-auto">
          <!-- Tab: Informations -->
          <div v-show="activeTab === 'Informations'" class="px-6 py-5 space-y-4">
            <div>
              <label class="label-sm">Titre *</label>
              <input v-model="form.title" type="text" required class="input-dark" placeholder="Titre de la chanson" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="label-sm">Artiste *</label>
                <select v-model="form.artist_id" required class="input-dark">
                  <option value="">Choisir</option>
                  <option v-for="a in allArtists" :key="a.id" :value="a.id">{{ a.name }}</option>
                </select>
              </div>
              <div>
                <label class="label-sm">Album</label>
                <select v-model="form.album_id" class="input-dark">
                  <option value="">Aucun (Single)</option>
                  <option v-for="a in allAlbums" :key="a.id" :value="a.id">{{ a.title }}</option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="label-sm">Slug *</label>
                <input v-model="form.slug" type="text" required class="input-dark font-mono" placeholder="titre-chanson" />
              </div>
              <div>
                <label class="label-sm">Durée</label>
                <input v-model="form.duration" type="text" class="input-dark font-mono" placeholder="04:21" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="label-sm">Année</label>
                <input v-model="form.release_year" type="number" min="1990" max="2030" class="input-dark font-mono" />
              </div>
              <div>
                <label class="label-sm">Langue des paroles</label>
                <input v-model="form.lyrics_lang" type="text" class="input-dark" placeholder="Kirundi & Français" />
              </div>
            </div>
            <div>
              <label class="label-sm">Lien YouTube</label>
              <input v-model="form.youtube_url" type="url" class="input-dark" placeholder="https://youtube.com/..." />
            </div>
            <div>
              <label class="label-sm">Cover URL</label>
              <input v-model="form.cover_url" type="url" class="input-dark" placeholder="https://..." />
            </div>
          </div>

          <!-- Tab: Paroles -->
          <div v-show="activeTab === 'Paroles / Amashitira'" class="px-6 py-5">
            <div class="flex items-center justify-between mb-2">
              <label class="label-sm">Paroles de la chanson / Amashitira</label>
              <span class="text-[10px] text-[#444444]">{{ form.lyrics_content.length }} caractères</span>
            </div>
            <textarea
              v-model="form.lyrics_content"
              rows="16"
              class="input-dark resize-y w-full font-mono text-xs leading-relaxed"
              placeholder="[Refrain]&#10;Ijambo rya mbere...&#10;&#10;[Couplet 1]&#10;Amagambo y'igice ca mbere..."
            ></textarea>
            <p class="text-[10px] text-[#444444] mt-2">
              Utilisez [Refrain], [Couplet 1], [Pont], [Agace] etc. pour structurer les paroles.
            </p>
          </div>

          <!-- Footer -->
          <div class="flex gap-3 px-6 py-4 border-t border-white/5">
            <button type="button" @click="showModal = false" class="flex-1 py-2.5 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors">Annuler</button>
            <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-bold transition-colors">
              {{ editMode ? 'Mettre à jour' : 'Ajouter la chanson' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { mockSongs, mockArtists, mockAlbums } from '@/data/mockData';
import type { Song } from '@/types';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const songs = ref<Song[]>([...mockSongs]);
const allArtists = mockArtists;
const allAlbums = mockAlbums;
const showModal = ref(false);
const editMode = ref(false);
const editId = ref<number | null>(null);
const activeTab = ref('Informations');

const filterArtist = ref<number | string>('');
const filterLyrics = ref('');

const filteredSongs = computed(() => {
  let list = songs.value;
  if (filterArtist.value) list = list.filter(s => s.artist_id === Number(filterArtist.value));
  if (filterLyrics.value === 'yes') list = list.filter(s => !!s.lyrics);
  if (filterLyrics.value === 'no') list = list.filter(s => !s.lyrics);
  return list;
});

const form = reactive({
  title: '', slug: '', artist_id: '' as number | string, album_id: '' as number | string,
  duration: '03:00', release_year: 2026, lyrics_content: '', lyrics_lang: 'Kirundi & Français',
  youtube_url: '', cover_url: ''
});

function openModal(song?: Song) {
  editMode.value = !!song;
  editId.value = song?.id ?? null;
  activeTab.value = 'Informations';
  if (song) {
    form.title = song.title; form.slug = song.slug; form.artist_id = song.artist_id;
    form.album_id = song.album_id ?? ''; form.duration = song.duration;
    form.release_year = song.release_year; form.lyrics_content = song.lyrics?.content ?? '';
    form.lyrics_lang = song.lyrics?.language ?? 'Kirundi & Français';
    form.youtube_url = song.youtube_url ?? ''; form.cover_url = song.cover_url;
  } else {
    form.title = ''; form.slug = ''; form.artist_id = ''; form.album_id = '';
    form.duration = '03:00'; form.release_year = 2026; form.lyrics_content = '';
    form.lyrics_lang = 'Kirundi & Français'; form.youtube_url = ''; form.cover_url = '';
  }
  showModal.value = true;
}

function saveSong() {
  const artist = allArtists.find(a => a.id === Number(form.artist_id));
  const album = form.album_id ? allAlbums.find(a => a.id === Number(form.album_id)) : undefined;
  const lyrics = form.lyrics_content.trim()
    ? { id: Date.now(), song_id: editId.value ?? Date.now(), content: form.lyrics_content, language: form.lyrics_lang }
    : undefined;

  if (editMode.value && editId.value !== null) {
    const idx = songs.value.findIndex(s => s.id === editId.value);
    if (idx !== -1) {
      songs.value[idx] = { ...songs.value[idx], title: form.title, slug: form.slug, artist_id: Number(form.artist_id), artist, album_id: album?.id, album, duration: form.duration, release_year: form.release_year, lyrics, youtube_url: form.youtube_url, cover_url: form.cover_url };
      appStore.addToast(`"${form.title}" mis à jour !`, 'success');
    }
  } else {
    const newSong: Song = {
      id: Date.now(), title: form.title, slug: form.slug,
      cover_url: form.cover_url || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80',
      youtube_url: form.youtube_url || undefined, duration: form.duration, duration_seconds: 0,
      release_year: form.release_year, plays_count: 0, status: 'approved',
      artist_id: Number(form.artist_id), artist, album_id: album?.id, album, lyrics
    };
    songs.value.unshift(newSong);
    appStore.addToast(`"${form.title}" ajoutée !`, 'success');
  }
  showModal.value = false;
}

function deleteSong(id: number) {
  const s = songs.value.find(s => s.id === id);
  if (confirm(`Supprimer "${s?.title}" ?`)) {
    songs.value = songs.value.filter(s => s.id !== id);
    appStore.addToast('Chanson supprimée.', 'info');
  }
}
</script>

<style scoped>
.label-sm { @apply block text-xs font-semibold text-[#777777] uppercase tracking-wider mb-1.5; }
.input-dark { @apply w-full bg-[#111313] border border-white/8 focus:border-[#1F8A4C]/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#444444] outline-none transition-all; }
</style>
