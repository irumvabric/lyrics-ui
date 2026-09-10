<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="border-b border-[#151818] pb-5 flex items-center justify-between">
      <div>
        <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1F8A4C]/15 text-[#1F8A4C] text-xs font-mono font-bold mb-2">
          PANNEAU D'ADMINISTRATION
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Tableau de Bord & Métriques
        </h1>
        <p class="text-xs text-[#A0A0A0] mt-1">Supervision de l'écosystème musical Gospel Burundi</p>
      </div>

      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 bg-[#101212] border border-[#151818] rounded text-xs font-mono text-[#1F8A4C]">
          ● Sanctum Token Actif
        </span>
      </div>
    </div>

    <!-- 5 KPI Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      <div class="bg-[#101212] border border-[#151818] p-4 rounded-xl">
        <p class="text-xs text-[#A0A0A0] font-medium">Artistes</p>
        <p class="text-2xl font-bold text-white mt-1">24</p>
        <p class="text-[11px] text-[#1F8A4C] mt-1 font-mono">+3 ce mois</p>
      </div>

      <div class="bg-[#101212] border border-[#151818] p-4 rounded-xl">
        <p class="text-xs text-[#A0A0A0] font-medium">Chansons</p>
        <p class="text-2xl font-bold text-white mt-1">182</p>
        <p class="text-[11px] text-[#1F8A4C] mt-1 font-mono">+12 cette semaine</p>
      </div>

      <div class="bg-[#101212] border border-[#151818] p-4 rounded-xl">
        <p class="text-xs text-[#A0A0A0] font-medium">Albums</p>
        <p class="text-2xl font-bold text-white mt-1">19</p>
        <p class="text-[11px] text-[#A0A0A0] mt-1 font-mono">100% vérifiés</p>
      </div>

      <div class="bg-[#101212] border border-[#151818] p-4 rounded-xl">
        <p class="text-xs text-[#A0A0A0] font-medium">Écoutes totales</p>
        <p class="text-2xl font-bold text-white mt-1">1.42M</p>
        <p class="text-[11px] text-[#1E5AA8] mt-1 font-mono">+8.4% de croissance</p>
      </div>

      <div class="bg-[#101212] border border-[#151818] p-4 rounded-xl">
        <p class="text-xs text-[#A0A0A0] font-medium">Utilisateurs</p>
        <p class="text-2xl font-bold text-white mt-1">8,450</p>
        <p class="text-[11px] text-[#1F8A4C] mt-1 font-mono">+420 récents</p>
      </div>
    </div>

    <!-- Pending Songs & Moderation -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Pending Songs Validation -->
      <div class="bg-[#101212] border border-[#151818] rounded-xl p-5 space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-base font-bold text-white tracking-tight">
            Chansons en attente de modération (2)
          </h2>
          <span class="text-xs text-[#C62828] font-mono">Action requise</span>
        </div>

        <div class="divide-y divide-[#151818] text-xs">
          <div class="py-3 flex items-center justify-between gap-3">
            <div>
              <p class="font-bold text-white">Ndagusenga Mwami</p>
              <p class="text-[#A0A0A0]">Artiste : Patient Bizimana • Format : MP3 320kbps</p>
            </div>
            <div class="flex gap-2">
              <button
                @click="appStore.addToast('Chanson validée et publiée', 'success')"
                class="px-2.5 py-1 bg-[#1F8A4C] hover:bg-[#18723e] text-white rounded font-medium"
              >
                Approuver
              </button>
              <button
                @click="appStore.addToast('Chanson rejetée', 'error')"
                class="px-2.5 py-1 bg-[#151818] hover:bg-[#C62828] text-[#A0A0A0] hover:text-white rounded"
              >
                Rejeter
              </button>
            </div>
          </div>

          <div class="py-3 flex items-center justify-between gap-3">
            <div>
              <p class="font-bold text-white">Shimwa Rugira</p>
              <p class="text-[#A0A0A0]">Artiste : Dudu T. Niyukuri • Format : WAV</p>
            </div>
            <div class="flex gap-2">
              <button
                @click="appStore.addToast('Chanson validée et publiée', 'success')"
                class="px-2.5 py-1 bg-[#1F8A4C] hover:bg-[#18723e] text-white rounded font-medium"
              >
                Approuver
              </button>
              <button
                @click="appStore.addToast('Chanson rejetée', 'error')"
                class="px-2.5 py-1 bg-[#151818] hover:bg-[#C62828] text-[#A0A0A0] hover:text-white rounded"
              >
                Rejeter
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Registered Artists -->
      <div class="bg-[#101212] border border-[#151818] rounded-xl p-5 space-y-4">
        <h2 class="text-base font-bold text-white tracking-tight">
          Derniers Artistes Inscrits
        </h2>
        <div class="divide-y divide-[#151818] text-xs">
          <div v-for="artist in mockArtists.slice(0, 3)" :key="artist.id" class="py-2.5 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img :src="artist.photo_url" class="w-8 h-8 rounded-full object-cover" />
              <div>
                <p class="font-bold text-white">{{ artist.name }}</p>
                <p class="text-[#A0A0A0] text-[11px]">{{ artist.location }}</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded bg-[#1F8A4C]/20 text-[#1F8A4C] text-[10px] font-mono">
              VÉRIFIÉ
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mockArtists } from '@/data/mockData';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
</script>
