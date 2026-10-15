<template>
  <footer
    v-if="playerStore.currentSong"
    class="fixed bottom-0 inset-x-0 z-30 bg-[#F8FAFC]/95 backdrop-blur-xl border-t border-slate-200 px-3 sm:px-6 py-2.5 sm:py-3 transition-all"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
      <!-- Left: Song Info -->
      <div class="flex items-center gap-3 w-1/3 min-w-[140px] sm:min-w-[200px] overflow-hidden">
        <img
          :src="playerStore.currentSong.cover_url"
          :alt="playerStore.currentSong.title"
          class="w-11 h-11 sm:w-12 sm:h-12 rounded object-cover shrink-0 shadow-md shadow-black/40"
        />
        <div class="truncate">
          <router-link
            :to="`/songs/${playerStore.currentSong.slug}`"
            class="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#1F8A4C] transition-colors truncate block"
          >
            {{ playerStore.currentSong.title }}
          </router-link>
          <router-link
            v-if="playerStore.currentSong.artist"
            :to="`/artists/${playerStore.currentSong.artist.slug}`"
            class="text-[11px] text-slate-600 hover:text-slate-900 transition-colors truncate block"
          >
            {{ playerStore.currentSong.artist.name }}
          </router-link>
        </div>

        <!-- Favorite Button -->
        <button
          @click="playerStore.toggleFavorite()"
          class="hidden sm:inline-flex p-1.5 text-slate-500 hover:text-slate-900 transition-colors shrink-0"
          title="Favoris"
        >
          <svg
            class="w-4 h-4 transition-colors"
            :class="playerStore.currentSong.is_favorite ? 'text-[#C62828] fill-current' : 'hover:text-[#C62828]'"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <!-- Center: Controls & Progress Bar -->
      <div class="flex flex-col items-center flex-1 max-w-xl">
        <!-- Control Buttons -->
        <div class="flex items-center gap-3 sm:gap-5 mb-1.5">
          <!-- Shuffle -->
          <button
            @click="playerStore.toggleShuffle()"
            class="hidden sm:inline-flex text-xs transition-colors p-1"
            :class="playerStore.isShuffle ? 'text-[#1F8A4C]' : 'text-[#666666] hover:text-white'"
            title="Lecture aléatoire"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-2m-4 6l4 4m0-4l-4-4" />
            </svg>
          </button>

          <!-- Prev -->
          <button
            @click="playerStore.prev()"
            class="text-slate-500 hover:text-slate-900 transition-colors p-1"
            title="Précédent"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>

          <!-- Play / Pause -->
          <button
            @click="playerStore.togglePlay()"
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transition-transform active:scale-95 shadow-md shadow-white/10"
            title="Lecture / Pause"
          >
            <svg v-if="!playerStore.isPlaying" class="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <svg v-else class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          </button>

          <!-- Next -->
          <button
            @click="playerStore.next()"
            class="text-slate-500 hover:text-slate-900 transition-colors p-1"
            title="Suivant"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>

          <!-- Repeat -->
          <button
            @click="playerStore.toggleRepeat()"
            class="hidden sm:inline-flex text-xs transition-colors p-1 relative"
            :class="playerStore.repeatMode !== 'off' ? 'text-[#1F8A4C]' : 'text-[#666666] hover:text-white'"
            title="Répéter"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span v-if="playerStore.repeatMode === 'one'" class="absolute -top-1 -right-1 text-[8px] font-bold">1</span>
          </button>
        </div>

        <!-- Progress bar & Time -->
        <div class="w-full flex items-center gap-2 text-[11px] text-slate-500 font-mono select-none">
          <span class="w-9 text-right shrink-0">{{ playerStore.formattedProgress }}</span>
          <div
            class="relative flex-1 h-1.5 bg-slate-200 rounded-full cursor-pointer group"
            @click="handleProgressClick"
          >
            <div
              class="h-full bg-[#1F8A4C] rounded-full relative group-hover:bg-[#27a85d] transition-all"
              :style="{ width: `${progressPercent}%` }"
            >
              <span class="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow transition-opacity"></span>
            </div>
          </div>
          <span class="w-9 text-left shrink-0">{{ playerStore.formattedDuration }}</span>
        </div>
      </div>

      <!-- Right: Volume & Extra actions -->
      <div class="hidden md:flex items-center justify-end gap-3 w-1/3 min-w-[140px]">
        <router-link
          :to="`/songs/${playerStore.currentSong.slug}`"
          class="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1.5 px-2 py-1 rounded hover:bg-slate-100"
          title="Afficher les paroles"
        >
          <svg class="w-4 h-4 text-[#1E5AA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="text-[11px]">Paroles</span>
        </router-link>

        <!-- Volume Slider -->
        <div class="flex items-center gap-2">
          <button
            @click="playerStore.setVolume(playerStore.volume === 0 ? 80 : 0)"
            class="text-slate-500 hover:text-slate-900 transition-colors"
          >
            <svg v-if="playerStore.volume === 0" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
            <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
          <input
            type="range"
            min="0"
            max="100"
            :value="playerStore.volume"
            @input="(e: any) => playerStore.setVolume(Number(e.target.value))"
            class="w-16 sm:w-20 h-1 bg-slate-200 accent-[#1F8A4C] rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePlayerStore } from '@/stores/player';

const playerStore = usePlayerStore();

const progressPercent = computed(() => {
  if (!playerStore.duration) return 0;
  return Math.min(100, (playerStore.progress / playerStore.duration) * 100);
});

function handleProgressClick(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, clickX / rect.width));
  playerStore.seek(Math.floor(percent * playerStore.duration));
}
</script>
