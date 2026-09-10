<template>
  <div class="max-w-md mx-auto py-10">
    <div class="bg-[#101212] border border-[#151818] p-8 rounded-2xl shadow-xl space-y-6">
      <div class="text-center space-y-2">
        <div class="w-12 h-12 rounded-xl bg-[#1F8A4C] mx-auto flex items-center justify-center text-white font-bold shadow-lg shadow-[#1F8A4C]/25 text-lg">
          GB
        </div>
        <h1 class="text-2xl font-bold text-white tracking-tight">Inscription</h1>
        <p class="text-xs text-[#A0A0A0]">Rejoignez la communauté Gospel Burundi</p>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-4 text-xs">
        <div>
          <label class="block text-[#A0A0A0] mb-1 font-medium">Nom complet</label>
          <input
            v-model="name"
            type="text"
            required
            class="w-full bg-[#151818] border border-[#151818] focus:border-[#1F8A4C] rounded-lg px-3 py-2.5 text-white outline-none"
            placeholder="Aline Ndayizeye"
          />
        </div>

        <div>
          <label class="block text-[#A0A0A0] mb-1 font-medium">Adresse email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full bg-[#151818] border border-[#151818] focus:border-[#1F8A4C] rounded-lg px-3 py-2.5 text-white outline-none"
            placeholder="aline@example.bi"
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

        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-[#1F8A4C] hover:bg-[#18723e] text-white font-semibold shadow-lg shadow-[#1F8A4C]/30 transition-all text-sm mt-4"
        >
          Créer mon compte
        </button>
      </form>

      <div class="text-center text-xs text-[#A0A0A0]">
        Vous avez déjà un compte ?
        <router-link to="/login" class="text-[#1F8A4C] hover:underline font-medium ml-1">
          Se connecter
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

const router = useRouter();
const authStore = useAuthStore();
const appStore = useAppStore();

const name = ref('');
const email = ref('');
const password = ref('');

async function handleRegister() {
  await authStore.register({
    name: name.value,
    email: email.value,
    password: password.value,
    password_confirmation: password.value,
  });
  appStore.addToast('Compte créé avec succès ! Bienvenue sur Gospel Burundi.', 'success');
  router.push('/');
}
</script>
