<template>
  <div>
    <!-- Header + Add button -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-lg font-bold text-white">Artistes</h2>
        <p class="text-xs text-[#555555] mt-0.5">{{ artists.length }} artiste(s)</p>
      </div>
      <button @click="openModal()" id="add-artist-btn" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-semibold transition-colors shadow-lg shadow-[#1F8A4C]/20">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Ajouter
      </button>
    </div>

    <!-- Table -->
    <div class="bg-[#0C0E0E] border border-white/5 rounded-xl overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="border-b border-white/5">
            <tr>
              <th class="text-left text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Artiste</th>
              <th class="text-left text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3 hidden md:table-cell">Localisation</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Chansons</th>
              <th class="text-center text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Albums</th>
              <th class="text-right text-xs font-semibold text-[#555555] uppercase tracking-wider px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/3">
            <tr v-for="artist in artists" :key="artist.id" class="hover:bg-white/2 transition-colors group">
              <td class="px-5 py-3.5">
                <div class="flex items-center gap-3">
                  <img :src="artist.photo_url" :alt="artist.name" class="w-9 h-9 rounded-full object-cover shrink-0" />
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-white truncate">{{ artist.name }}</p>
                    <p class="text-[11px] text-[#444444] truncate font-mono">{{ artist.slug }}</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-3.5 text-sm text-[#666666] hidden md:table-cell">{{ artist.location }}</td>
              <td class="px-5 py-3.5 text-center text-sm font-mono text-[#777777]">{{ artist.song_count }}</td>
              <td class="px-5 py-3.5 text-center text-sm font-mono text-[#777777]">{{ artist.album_count }}</td>
              <td class="px-5 py-3.5">
                <div class="flex items-center justify-end gap-2">
                  <button @click="openModal(artist)" class="p-1.5 rounded-lg text-[#555555] hover:text-[#1F8A4C] hover:bg-[#1F8A4C]/10 transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button @click="deleteArtist(artist.id)" class="p-1.5 rounded-lg text-[#555555] hover:text-red-400 hover:bg-red-400/10 transition-colors">
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
          <h3 class="text-base font-bold text-white">{{ editMode ? 'Modifier' : 'Ajouter' }} un artiste</h3>
          <button @click="showModal = false" class="p-1 rounded-lg text-[#555555] hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <form @submit.prevent="saveArtist" class="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <label class="label-sm">Nom *</label>
              <input v-model="form.name" type="text" required class="input-dark" placeholder="Patient Bizimana" />
            </div>
            <div class="col-span-2">
              <label class="label-sm">Slug *</label>
              <input v-model="form.slug" type="text" required class="input-dark font-mono" placeholder="patient-bizimana" />
            </div>
            <div class="col-span-2">
              <label class="label-sm">Biographie</label>
              <textarea v-model="form.bio" rows="3" class="input-dark resize-none" placeholder="Description de l'artiste..."></textarea>
            </div>
            <div>
              <label class="label-sm">Photo URL</label>
              <input v-model="form.photo_url" type="url" class="input-dark" placeholder="https://..." />
            </div>
            <div>
              <label class="label-sm">Localisation</label>
              <input v-model="form.location" type="text" class="input-dark" placeholder="Bujumbura, Burundi" />
            </div>
            <div>
              <label class="label-sm">YouTube</label>
              <input v-model="form.youtube" type="url" class="input-dark" placeholder="https://youtube.com/..." />
            </div>
            <div>
              <label class="label-sm">Facebook</label>
              <input v-model="form.facebook" type="url" class="input-dark" placeholder="https://facebook.com/..." />
            </div>
          </div>
          <div class="flex gap-3 pt-2 border-t border-white/5">
            <button type="button" @click="showModal = false" class="flex-1 py-2.5 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors">
              Annuler
            </button>
            <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-bold transition-colors">
              {{ editMode ? 'Mettre à jour' : 'Ajouter' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { mockArtists } from '@/data/mockData';
import type { Artist } from '@/types';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const artists = ref<Artist[]>([...mockArtists]);
const showModal = ref(false);
const editMode = ref(false);
const editId = ref<number | null>(null);

const form = reactive({
  name: '', slug: '', bio: '', photo_url: '', location: '', youtube: '', facebook: ''
});

function openModal(artist?: Artist) {
  editMode.value = !!artist;
  editId.value = artist?.id ?? null;
  if (artist) {
    form.name = artist.name; form.slug = artist.slug; form.bio = artist.bio;
    form.photo_url = artist.photo_url; form.location = artist.location;
    form.youtube = artist.social_links?.youtube ?? '';
    form.facebook = artist.social_links?.facebook ?? '';
  } else {
    form.name = ''; form.slug = ''; form.bio = ''; form.photo_url = ''; form.location = '';
    form.youtube = ''; form.facebook = '';
  }
  showModal.value = true;
}

function saveArtist() {
  if (editMode.value && editId.value !== null) {
    const idx = artists.value.findIndex(a => a.id === editId.value);
    if (idx !== -1) {
      artists.value[idx] = { ...artists.value[idx], name: form.name, slug: form.slug, bio: form.bio, photo_url: form.photo_url, location: form.location };
      appStore.addToast(`Artiste "${form.name}" mis à jour !`, 'success');
    }
  } else {
    const newArtist: Artist = {
      id: Date.now(), name: form.name, slug: form.slug, bio: form.bio,
      photo_url: form.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      location: form.location, song_count: 0, album_count: 0, plays_count: 0, followers_count: 0,
      social_links: { youtube: form.youtube || undefined, facebook: form.facebook || undefined }
    };
    artists.value.unshift(newArtist);
    appStore.addToast(`Artiste "${form.name}" ajouté !`, 'success');
  }
  showModal.value = false;
}

function deleteArtist(id: number) {
  const artist = artists.value.find(a => a.id === id);
  if (confirm(`Supprimer "${artist?.name}" ?`)) {
    artists.value = artists.value.filter(a => a.id !== id);
    appStore.addToast(`Artiste supprimé.`, 'info');
  }
}
</script>

<style scoped>
.label-sm { @apply block text-xs font-semibold text-[#777777] uppercase tracking-wider mb-1.5; }
.input-dark { @apply w-full bg-[#111313] border border-white/8 focus:border-[#1F8A4C]/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#444444] outline-none transition-all; }
</style>
