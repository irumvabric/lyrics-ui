<template>
  <div class="space-y-8">
    <!-- Search Input Banner -->
    <div class="bg-[#101212] border border-[#151818] p-5 sm:p-6 rounded-2xl">
      <h1 class="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">Recherche Musicale</h1>
      <div class="relative max-w-xl">
        <input
          v-model="query"
          type="text"
          placeholder="Rechercher une chanson, un artiste, un album (ex: Yesu, Patient...)"
          class="w-full bg-[#151818] border border-[#151818] focus:border-[#1F8A4C] rounded-xl px-4 py-3 text-sm text-white placeholder-[#666666] outline-none"
        />
        <span class="absolute right-3.5 top-3.5 text-xs text-[#666666]">
          {{ isSearching ? 'Recherche...' : '⏎' }}
        </span>
      </div>
      <p v-if="query" class="text-xs text-[#A0A0A0] mt-2 font-mono">
        Résultats pour : "<span class="text-white font-bold">{{ query }}</span>"
      </p>
    </div>

    <!-- Results: Songs -->
    <div v-if="matchedSongs.length > 0" class="space-y-3">
      <h2 class="text-base font-bold text-white tracking-tight flex items-center justify-between">
        <span>CHANSONS ({{ matchedSongs.length }})</span>
      </h2>
      <div class="bg-[#101212] border border-[#151818] rounded-xl overflow-hidden divide-y divide-[#151818]">
        <div
          v-for="song in matchedSongs"
          :key="song.id"
          @click="playerStore.playSong(song, matchedSongs)"
          class="group flex items-center justify-between p-3.5 hover:bg-[#151818] transition-colors cursor-pointer text-xs"
        >
          <div class="flex items-center gap-3">
            <img :src="song.cover_url" class="w-10 h-10 rounded object-cover" />
            <div>
              <p class="font-semibold text-white group-hover:text-[#1F8A4C]">{{ song.title }}</p>
              <p class="text-[#A0A0A0] text-[11px]">{{ song.artist?.name }}</p>
            </div>
          </div>
          <span class="font-mono text-[#A0A0A0]">{{ song.duration }}</span>
        </div>
      </div>
    </div>

    <!-- Results: Artists -->
    <div v-if="matchedArtists.length > 0" class="space-y-3">
      <h2 class="text-base font-bold text-white tracking-tight">
        ARTISTES ({{ matchedArtists.length }})
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          v-for="artist in matchedArtists"
          :key="artist.id"
          @click="router.push(`/artists/${artist.slug}`)"
          class="bg-[#101212] hover:bg-[#151818] border border-[#151818] p-4 rounded-xl text-center cursor-pointer transition-all"
        >
          <img :src="artist.photo_url" class="w-16 h-16 rounded-full mx-auto mb-2 object-cover" />
          <p class="font-bold text-sm text-white truncate">{{ artist.name }}</p>
          <p class="text-xs text-[#A0A0A0]">{{ artist.song_count }} chansons</p>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="query && matchedSongs.length === 0 && matchedArtists.length === 0" class="text-center py-12 text-[#A0A0A0] text-sm">
      Aucun résultat trouvé pour "{{ query }}". Essayez un autre mot-clé (ex: "Yesu", "Patient", "Worship").
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mockSongs, mockArtists } from '@/data/mockData';
import { usePlayerStore } from '@/stores/player';

const route = useRoute();
const router = useRouter();
const playerStore = usePlayerStore();

const query = ref((route.query.q as string) || 'Yesu');
const isSearching = ref(false);

watch(() => route.query.q, (newQ) => {
  if (typeof newQ === 'string') query.value = newQ;
});

const matchedSongs = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return mockSongs;
  return mockSongs.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.artist?.name.toLowerCase().includes(q) ||
    s.lyrics?.content.toLowerCase().includes(q)
  );
});

const matchedArtists = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return mockArtists;
  return mockArtists.filter(a => a.name.toLowerCase().includes(q) || a.bio.toLowerCase().includes(q));
});
</script>
