<template>
  <div class="min-h-screen bg-[#080A0A] flex items-center justify-center px-4">
    <div class="w-full max-w-sm">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1F8A4C] to-[#155e34] flex items-center justify-center shadow-2xl shadow-[#1F8A4C]/20 mx-auto mb-4">
          <svg class="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        <h1 class="text-2xl font-extrabold text-white">Gospel Burundi</h1>
        <p class="text-sm text-[#555555] mt-1">Administration / Ubutegetsi</p>
      </div>

      <!-- Card -->
      <div class="bg-[#0C0E0E] border border-white/5 rounded-2xl p-6 shadow-2xl">
        <h2 class="text-base font-bold text-white mb-6 text-center">Connexion Admin</h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Username -->
          <div>
            <label class="block text-xs font-semibold text-[#777777] uppercase tracking-wider mb-1.5">
              Nom d'utilisateur / Username
            </label>
            <input
              v-model="form.username"
              type="text"
              id="admin-username"
              autocomplete="username"
              placeholder="admin"
              class="w-full bg-[#111313] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#444444] outline-none transition-all"
              :class="error ? 'border-red-500/50' : 'border-white/8 focus:border-[#1F8A4C]/50'"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-xs font-semibold text-[#777777] uppercase tracking-wider mb-1.5">
              Mot de passe / Password
            </label>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                id="admin-password"
                autocomplete="current-password"
                placeholder="••••••"
                class="w-full bg-[#111313] border rounded-xl px-4 py-2.5 pr-10 text-sm text-white placeholder-[#444444] outline-none transition-all"
                :class="error ? 'border-red-500/50' : 'border-white/8 focus:border-[#1F8A4C]/50'"
              />
              <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] hover:text-white transition-colors">
                <svg v-if="!showPassword" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>
              </button>
            </div>
          </div>

          <!-- Error -->
          <div v-if="error" class="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <svg class="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
            <p class="text-xs text-red-400">{{ error }}</p>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3 rounded-xl bg-[#1F8A4C] hover:bg-[#18723e] disabled:opacity-50 text-white font-bold text-sm transition-all shadow-lg shadow-[#1F8A4C]/20 mt-2"
          >
            <span v-if="!loading">Se connecter / Injira</span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
              Connexion...
            </span>
          </button>
        </form>
      </div>

      <!-- Back link -->
      <p class="text-center mt-4">
        <router-link to="/" class="text-xs text-[#444444] hover:text-[#1F8A4C] transition-colors">← Retour au site public</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const form = ref({ username: '', password: '' });
const error = ref('');
const loading = ref(false);
const showPassword = ref(false);

async function handleLogin() {
  error.value = '';
  loading.value = true;
  await new Promise(r => setTimeout(r, 500));
  const ok = authStore.login(form.value.username, form.value.password);
  loading.value = false;
  if (ok) {
    router.push('/admin/dashboard');
  } else {
    error.value = 'Identifiants incorrects. / Amakuru si yo. (admin / admin)';
  }
}
</script>
