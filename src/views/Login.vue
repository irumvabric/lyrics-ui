<template>
  <div class="max-w-md mx-auto py-10">
    <div class="bg-[#101212] border border-[#151818] p-8 rounded-2xl shadow-xl space-y-6">
      <div class="text-center space-y-2">
        <div class="w-12 h-12 rounded-xl bg-[#1F8A4C] mx-auto flex items-center justify-center text-white font-bold shadow-lg shadow-[#1F8A4C]/25 text-lg">
          GB
        </div>
        <h1 class="text-2xl font-bold text-white tracking-tight">Connexion</h1>
        <p class="text-xs text-[#A0A0A0]">Connectez-vous à votre compte Gospel Burundi</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4 text-xs">
        <div>
          <label class="block text-[#A0A0A0] mb-1 font-medium">Adresse email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full bg-[#151818] border border-[#151818] focus:border-[#1F8A4C] rounded-lg px-3 py-2.5 text-white outline-none"
            placeholder="jean@gospelburundi.bi"
          />
        </div>

        <div>
          <label class="block text-[#A0A0A0] mb-1 font-medium">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full bg-[#151818] border border-[#151818] focus:border-[#1F8A4C] rounded-lg px-3 py-2.5 text-white outline-none"
            placeholder="••••••••"
          />
        </div>

        <!-- Role Quick Switch for Demo/Testing in Phase 1 -->
        <div class="pt-2">
          <label class="block text-[#A0A0A0] mb-1.5 font-mono text-[11px]">
            Rôle (Laravel Sanctum Policy Testing) :
          </label>
          <div class="grid grid-cols-3 gap-2 text-center">
            <button
              type="button"
              @click="role = 'USER'"
              class="py-1.5 rounded border text-[11px] font-mono transition-colors"
              :class="role === 'USER' ? 'border-[#1F8A4C] text-[#1F8A4C] bg-[#1F8A4C]/10 font-bold' : 'border-[#151818] text-[#666666]'"
            >
              USER
            </button>
            <button
              type="button"
              @click="role = 'ARTIST'"
              class="py-1.5 rounded border text-[11px] font-mono transition-colors"
              :class="role === 'ARTIST' ? 'border-[#1E5AA8] text-[#1E5AA8] bg-[#1E5AA8]/10 font-bold' : 'border-[#151818] text-[#666666]'"
            >
              ARTIST
            </button>
            <button
              type="button"
              @click="role = 'ADMIN'"
              class="py-1.5 rounded border text-[11px] font-mono transition-colors"
              :class="role === 'ADMIN' ? 'border-[#C62828] text-[#C62828] bg-[#C62828]/10 font-bold' : 'border-[#151818] text-[#666666]'"
            >
              ADMIN
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-[#1F8A4C] hover:bg-[#18723e] text-white font-semibold shadow-lg shadow-[#1F8A4C]/30 transition-all text-sm mt-4"
        >
          Se connecter
        </button>
      </form>

      <div class="text-center text-xs text-[#A0A0A0]">
        Pas encore de compte ?
        <router-link to="/register" class="text-[#1F8A4C] hover:underline font-medium ml-1">
          Créer un compte
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useAppStore } from '@/stores/app';
import type { UserRole } from '@/types';

const router = useRouter();
const authStore = useAuthStore();
const appStore = useAppStore();

const email = ref('jean@gospelburundi.bi');
const password = ref('password123');
const role = ref<UserRole>('ADMIN');

async function handleLogin() {
  await authStore.login({ email: email.value, password: password.value });
  authStore.switchRole(role.value);
  appStore.addToast(`Connecté avec succès en tant que ${role.value}`, 'success');
  router.push('/');
}
</script>
