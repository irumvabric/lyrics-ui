<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-white tracking-tight">Mes Playlists</h1>
        <p class="text-xs text-[#A0A0A0]">Créez et organisez vos listes de louange personnelles</p>
      </div>
      <button
        @click="createPlaylistPrompt"
        class="px-4 py-2 rounded-lg bg-[#1F8A4C] hover:bg-[#18723e] text-white text-xs font-semibold shadow-md shadow-[#1F8A4C]/25 flex items-center gap-1.5"
      >
        <span>+</span>
        Créer une playlist
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="playlist in playlists"
        :key="playlist.id"
        class="bg-[#101212] border border-[#151818] p-5 rounded-xl hover:border-[#1F8A4C]/30 transition-all cursor-pointer"
      >
        <div class="w-12 h-12 rounded-lg bg-[#1F8A4C]/20 border border-[#1F8A4C]/30 flex items-center justify-center text-[#1F8A4C] mb-3 font-bold">
          ♪
        </div>
        <h3 class="text-base font-bold text-white">{{ playlist.title }}</h3>
        <p class="text-xs text-[#A0A0A0] mt-1">{{ playlist.description }}</p>
        <div class="mt-4 pt-3 border-t border-[#151818] flex items-center justify-between text-[11px] font-mono text-[#666666]">
          <span>{{ playlist.songs_count }} titres</span>
          <span class="text-[#1F8A4C]">Lire tout ▶</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

const playlists = ref([
  { id: 1, title: 'Mon Gospel du Dimanche', description: 'Chants d\'élévation et prière matinale', songs_count: 8 },
  { id: 2, title: 'Adoration & Méditation', description: 'Hymnes calmes pour la prière secrète', songs_count: 14 },
  { id: 3, title: 'Louange Éclatante Burundi', description: 'Rythmes festifs et célébration', songs_count: 11 },
]);

function createPlaylistPrompt() {
  appStore.addToast('La création de playlist sera connectée à la base de données en Phase 12.', 'info');
}
</script>
