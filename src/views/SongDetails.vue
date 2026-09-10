<template>
  <div v-if="song" class="space-y-8 max-w-4xl">
    <!-- Header with Cover and Metadata -->
    <div class="flex flex-col sm:flex-row gap-6 items-center sm:items-end bg-[#101212] border border-[#151818] p-6 rounded-2xl">
      <img
        :src="song.cover_url"
        :alt="song.title"
        class="w-48 h-48 rounded-xl object-cover shadow-2xl shrink-0"
      />

      <div class="space-y-2 flex-1 text-center sm:text-left">
        <span class="text-[11px] font-mono uppercase tracking-wider text-[#1F8A4C] font-bold">
          Chanson Gospel
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ song.title }}
        </h1>
        <p class="text-sm text-[#A0A0A0]">
          Par
          <router-link
            v-if="song.artist"
            :to="`/artists/${song.artist.slug}`"
            class="text-white font-semibold hover:text-[#1F8A4C] underline decoration-neutral-700 underline-offset-4"
          >
            {{ song.artist.name }}
          </router-link>
          • {{ song.album?.title || 'Single' }} • {{ song.release_year }} • {{ song.duration }}
        </p>

        <!-- Actions Buttons -->
        <div class="flex flex-wrap items-center gap-3 pt-3 justify-center sm:justify-start">
          <button
            @click="playerStore.playSong(song)"
            class="px-6 py-2.5 rounded-full bg-[#1F8A4C] hover:bg-[#18723e] text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-[#1F8A4C]/30"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Écouter
          </button>

          <button
            @click="toggleFavorite"
            class="px-4 py-2.5 rounded-full bg-[#151818] hover:bg-[#1f2424] text-white text-sm font-medium border border-[#151818] transition-all flex items-center gap-2"
          >
            <span :class="song.is_favorite ? 'text-[#C62828]' : 'text-[#666666]'">♥</span>
            {{ song.is_favorite ? 'Dans les favoris' : 'Ajouter aux favoris' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Lyrics Section (Section 14: Paroles avec excellente lisibilité) -->
    <div class="bg-[#101212] border border-[#151818] rounded-2xl p-6 sm:p-8">
      <div class="flex items-center justify-between border-b border-[#151818] pb-4 mb-6">
        <div>
          <h2 class="text-xl font-bold text-white tracking-tight">Paroles</h2>
          <p class="text-xs text-[#A0A0A0]">Langue : {{ song.lyrics?.language || 'Kirundi' }}</p>
        </div>
        <span class="px-2.5 py-1 text-[11px] rounded bg-[#151818] text-[#1E5AA8] font-mono">
          Vérifié
        </span>
      </div>

      <div class="whitespace-pre-line font-normal text-base sm:text-lg leading-relaxed text-neutral-200">
        {{ song.lyrics?.content || 'Les paroles pour cette chanson seront bientôt disponibles.' }}
      </div>
    </div>
  </div>
  <div v-else class="text-center py-16 text-[#A0A0A0]">
    Chanson introuvable.
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { mockSongs } from '@/data/mockData';
import { usePlayerStore } from '@/stores/player';
import { useAppStore } from '@/stores/app';

const route = useRoute();
const playerStore = usePlayerStore();
const appStore = useAppStore();

const song = computed(() => {
  const slug = route.params.slug as string;
  return mockSongs.find(s => s.slug === slug) || mockSongs[0];
});

function toggleFavorite() {
  if (song.value) {
    song.value.is_favorite = !song.value.is_favorite;
    appStore.addToast(
      song.value.is_favorite ? 'Ajouté à vos favoris' : 'Retiré de vos favoris',
      'success'
    );
  }
}
</script>
