<template>
  <div class="min-h-screen bg-[#F5F7F8] text-slate-900 flex flex-col antialiased">
    <div class="flex flex-1">
      <!-- Fixed Left Sidebar -->
      <Sidebar />

      <!-- Main Column: Topbar + Dynamic Route View -->
      <div class="flex-1 flex flex-col min-w-0">
        <Topbar />

        <!-- Scrollable Central Work Area -->
        <main class="flex-1 pb-28 px-4 sm:px-8 py-6 max-w-7xl w-full mx-auto">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
      </div>
    </div>

    <!-- Fixed Bottom Global Audio Player -->
    <GlobalPlayer />

    <!-- Global Toast Notifications -->
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue';
import Topbar from '@/components/layout/Topbar.vue';
import GlobalPlayer from '@/components/music/GlobalPlayer.vue';
import ToastContainer from '@/components/common/ToastContainer.vue';
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
