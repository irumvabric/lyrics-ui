import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Song } from '../types';

export const usePlayerStore = defineStore('player', () => {
  const currentSong = ref<Song | null>({
    id: 1,
    title: 'Yesu Ni We',
    slug: 'yesu-ni-we',
    cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80',
    audio_url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=inspirational-uplifting-acoustic-guitar-114408.mp3',
    duration: '04:21',
    duration_seconds: 261,
    release_year: 2026,
    plays_count: 1420500,
    status: 'approved',
    artist_id: 1,
    artist: {
      id: 1,
      name: 'Patient Bizimana',
      slug: 'patient-bizimana',
      bio: 'Artiste gospel burundais renommé, pionnier de la louange et de l\'adoration contemporaine.',
      photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      location: 'Bujumbura, Burundi',
      song_count: 125,
      album_count: 8,
      plays_count: 1250000,
      followers_count: 340000
    },
    album: {
      id: 1,
      title: 'Ubwiza Bw\'Imana',
      slug: 'ubwiza-bw-imana',
      cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80',
      release_year: 2026,
      song_count: 12,
      artist_id: 1
    },
    is_favorite: true
  });

  const isPlaying = ref(false);
  const volume = ref(80);
  const progress = ref(32); // e.g. 32s
  const queue = ref<Song[]>([]);
  const currentIndex = ref(0);
  const repeatMode = ref<'off' | 'all' | 'one'>('all');
  const isShuffle = ref(false);

  // Computed
  const duration = computed(() => currentSong.value?.duration_seconds || 261);
  const formattedProgress = computed(() => {
    const mins = Math.floor(progress.value / 60);
    const secs = Math.floor(progress.value % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  });
  const formattedDuration = computed(() => currentSong.value?.duration || '04:21');

  // Simulated audio element
  let audioElement: HTMLAudioElement | null = null;
  let progressInterval: any = null;

  function initAudio() {
    if (typeof window === 'undefined') return;
    if (!audioElement) {
      audioElement = new Audio();
      audioElement.volume = volume.value / 100;

      audioElement.addEventListener('ended', () => {
        if (repeatMode.value === 'one') {
          audioElement!.currentTime = 0;
          audioElement!.play();
        } else {
          next();
        }
      });
    }
  }

  function playSong(song: Song, newQueue?: Song[]) {
    currentSong.value = song;
    progress.value = 0;
    if (newQueue && newQueue.length > 0) {
      queue.value = newQueue;
      currentIndex.value = newQueue.findIndex(s => s.id === song.id);
    }
    isPlaying.value = true;
    startProgressTimer();
  }

  function togglePlay() {
    if (!currentSong.value) return;
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
      startProgressTimer();
    } else {
      stopProgressTimer();
    }
  }

  function next() {
    if (queue.value.length > 0) {
      let nextIdx = currentIndex.value + 1;
      if (nextIdx >= queue.value.length) {
        nextIdx = 0;
      }
      currentIndex.value = nextIdx;
      currentSong.value = queue.value[nextIdx];
      progress.value = 0;
      isPlaying.value = true;
    }
  }

  function prev() {
    if (progress.value > 4) {
      progress.value = 0;
      return;
    }
    if (queue.value.length > 0) {
      let prevIdx = currentIndex.value - 1;
      if (prevIdx < 0) {
        prevIdx = queue.value.length - 1;
      }
      currentIndex.value = prevIdx;
      currentSong.value = queue.value[prevIdx];
      progress.value = 0;
      isPlaying.value = true;
    }
  }

  function seek(seconds: number) {
    progress.value = Math.min(Math.max(0, seconds), duration.value);
  }

  function setVolume(newVal: number) {
    volume.value = Math.max(0, Math.min(100, newVal));
    if (audioElement) {
      audioElement.volume = volume.value / 100;
    }
  }

  function toggleFavorite() {
    if (currentSong.value) {
      currentSong.value.is_favorite = !currentSong.value.is_favorite;
    }
  }

  function toggleShuffle() {
    isShuffle.value = !isShuffle.value;
  }

  function toggleRepeat() {
    if (repeatMode.value === 'off') repeatMode.value = 'all';
    else if (repeatMode.value === 'all') repeatMode.value = 'one';
    else repeatMode.value = 'off';
  }

  function startProgressTimer() {
    stopProgressTimer();
    progressInterval = setInterval(() => {
      if (isPlaying.value && currentSong.value) {
        if (progress.value < duration.value) {
          progress.value += 1;
        } else {
          next();
        }
      }
    }, 1000);
  }

  function stopProgressTimer() {
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
  }

  return {
    currentSong,
    isPlaying,
    volume,
    progress,
    duration,
    queue,
    currentIndex,
    repeatMode,
    isShuffle,
    formattedProgress,
    formattedDuration,
    playSong,
    togglePlay,
    next,
    prev,
    seek,
    setVolume,
    toggleFavorite,
    toggleShuffle,
    toggleRepeat,
    initAudio,
  };
});
