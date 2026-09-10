<template>
  <div class="fixed top-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
    <transition-group
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-for="toast in appStore.toasts"
        :key="toast.id"
        class="pointer-events-auto flex items-center gap-3 p-4 rounded-lg shadow-xl text-sm border font-medium"
        :class="[
          toast.type === 'success'
            ? 'bg-[#101212] border-[#1F8A4C]/60 text-white'
            : toast.type === 'error'
            ? 'bg-[#101212] border-[#C62828]/60 text-white'
            : 'bg-[#101212] border-[#1E5AA8]/60 text-white'
        ]"
      >
        <span
          class="w-2 h-2 rounded-full shrink-0"
          :class="[
            toast.type === 'success'
              ? 'bg-[#1F8A4C]'
              : toast.type === 'error'
              ? 'bg-[#C62828]'
              : 'bg-[#1E5AA8]'
          ]"
        ></span>
        <p class="flex-1">{{ toast.message }}</p>
        <button
          @click="appStore.removeToast(toast.id)"
          class="text-neutral-400 hover:text-white transition-colors text-xs"
        >
          ✕
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
</script>
