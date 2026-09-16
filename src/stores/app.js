import { defineStore } from 'pinia';
import { ref } from 'vue';

let nextId = 1;

export const useAppStore = defineStore('app', () => {
  const toasts = ref([]);

  function addToast(message, type = 'info', duration = 3500) {
    const id = nextId++;
    toasts.value.push({ id, message, type });
    setTimeout(() => removeToast(id), duration);
  }

  function removeToast(id) {
    const idx = toasts.value.findIndex((t) => t.id === id);
    if (idx !== -1) toasts.value.splice(idx, 1);
  }

  return { toasts, addToast, removeToast };
});
