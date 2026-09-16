<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-lg font-bold text-white">Genres</h2>
        <p class="text-xs text-[#555555] mt-0.5">{{ genres.length }} genre(s)</p>
      </div>
      <button @click="openModal()" id="add-genre-btn" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F8A4C] hover:bg-[#18723e] text-white text-sm font-semibold transition-colors shadow-lg shadow-[#1F8A4C]/20">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Ajouter
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div
        v-for="genre in genres"
        :key="genre.id"
        class="bg-[#0C0E0E] border border-white/5 rounded-xl p-4 flex items-center gap-4 group hover:border-white/10 transition-all"
      >
        <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" :style="`background:${genre.color}22`">
          <span class="w-4 h-4 rounded-full" :style="`background:${genre.color}`"></span>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-bold text-white truncate">{{ genre.name }}</h3>
          <p class="text-xs text-[#444444] mt-0.5">{{ genre.song_count }} chansons · <span class="font-mono">{{ genre.slug }}</span></p>
        </div>
        <div class="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <button @click="openModal(genre)" class="p-1.5 rounded-lg text-[#555555] hover:text-[#1F8A4C] hover:bg-[#1F8A4C]/10 transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          </button>
          <button @click="deleteGenre(genre.id)" class="p-1.5 rounded-lg text-[#555555] hover:text-red-400 hover:bg-red-400/10 transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="showModal = false">
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div class="relative w-full max-w-md bg-[#0F1110] border border-white/10 rounded-2xl shadow-2xl">
        <div class="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h3 class="text-base font-bold text-white">{{ editMode ? 'Modifier' : 'Ajouter' }} un genre</h3>
          <button @click="showModal = false" class="p-1 rounded-lg text-[#555555] hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <form @submit.prevent="saveGenre" class="px-6 py-5 space-y-4">
          <div>
            <label class="label-sm">Nom *</label>
            <input v-model="form.name" type="text" required class="input-dark" placeholder="Gospel Traditionnel" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="label-sm">Slug *</label>
              <input v-model="form.slug" type="text" required class="input-dark font-mono" placeholder="traditional" />
            </div>
            <div>
              <label class="label-sm">Couleur</label>
              <div class="flex gap-2 items-center">
                <input v-model="form.color" type="color" class="w-10 h-10 rounded-lg border border-white/10 bg-transparent cursor-pointer" />
                <input v-model="form.color" type="text" class="input-dark font-mono flex-1" placeholder="#1F8A4C" />
              </div>
            </div>
          </div>
          <div>
            <label class="label-sm">Description</label>
            <textarea v-model="form.description" rows="3" class="input-dark resize-none" placeholder="Description du genre..."></textarea>
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
import { mockGenres } from '@/data/mockData';
import type { Genre } from '@/types';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const genres = ref<Genre[]>([...mockGenres]);
const showModal = ref(false);
const editMode = ref(false);
const editId = ref<number | null>(null);

const form = reactive({ name: '', slug: '', color: '#1F8A4C', description: '' });

function openModal(genre?: Genre) {
  editMode.value = !!genre;
  editId.value = genre?.id ?? null;
  if (genre) {
    form.name = genre.name; form.slug = genre.slug;
    form.color = genre.color ?? '#1F8A4C'; form.description = genre.description ?? '';
  } else {
    form.name = ''; form.slug = ''; form.color = '#1F8A4C'; form.description = '';
  }
  showModal.value = true;
}

function saveGenre() {
  if (editMode.value && editId.value !== null) {
    const idx = genres.value.findIndex(g => g.id === editId.value);
    if (idx !== -1) {
      genres.value[idx] = { ...genres.value[idx], name: form.name, slug: form.slug, color: form.color, description: form.description };
      appStore.addToast(`Genre "${form.name}" mis à jour !`, 'success');
    }
  } else {
    genres.value.push({ id: Date.now(), name: form.name, slug: form.slug, color: form.color, description: form.description, song_count: 0 });
    appStore.addToast(`Genre "${form.name}" ajouté !`, 'success');
  }
  showModal.value = false;
}

function deleteGenre(id: number) {
  const g = genres.value.find(g => g.id === id);
  if (confirm(`Supprimer "${g?.name}" ?`)) {
    genres.value = genres.value.filter(g => g.id !== id);
    appStore.addToast('Genre supprimé.', 'info');
  }
}
</script>

<style scoped>
.label-sm { @apply block text-xs font-semibold text-[#777777] uppercase tracking-wider mb-1.5; }
.input-dark { @apply w-full bg-[#111313] border border-white/8 focus:border-[#1F8A4C]/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#444444] outline-none transition-all; }
</style>
