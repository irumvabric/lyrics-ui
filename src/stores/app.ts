import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Language = 'fr' | 'rn' | 'en';

export interface ToastNotification {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

export const useAppStore = defineStore('app', () => {
  const currentLanguage = ref<Language>('fr');
  const isMobileDrawerOpen = ref(false);
  const toasts = ref<ToastNotification[]>([]);

  const translations = {
    fr: {
      appName: 'Gospel Burundi',
      tagline: 'Découvrez le Gospel Burundais',
      subtitle: 'Écoutez, découvrez et soutenez les artistes gospel du Burundi.',
      searchPlaceholder: 'Rechercher une chanson, un artiste, un album, un genre...',
      discoverSongs: 'Découvrir les chansons',
      exploreArtists: 'Explorer les artistes',
      popularArtists: 'Artistes Populaires',
      trendingSongs: 'Chansons Tendances',
      newReleases: 'Nouvelles Chansons',
      albums: 'Albums',
      genres: 'Genres',
      seeAll: 'Voir tout',
      home: 'Accueil',
      music: 'MUSIQUE',
      library: 'MA BIBLIOTHÈQUE',
      community: 'COMMUNAUTÉ',
      admin: 'ADMINISTRATION',
      favorites: 'Favoris',
      playlists: 'Playlists',
      history: 'Historique',
      churches: 'Églises',
      events: 'Événements',
      settings: 'Paramètres',
      help: 'Aide',
      logout: 'Déconnexion',
      login: 'Connexion',
      register: 'Inscription',
    },
    rn: {
      appName: 'Gospel Burundi',
      tagline: 'Menya Indirimbo z\'Imana mu Burundi',
      subtitle: 'Umviriza, menya kandi ushigikire abaririmvyi bo mu Burundi.',
      searchPlaceholder: 'Rondera ururirimbo, umuririmvyi, urukurikirane...',
      discoverSongs: 'Raba indirimbo',
      exploreArtists: 'Raba abaririmvyi',
      popularArtists: 'Abaririmvyi bakunzwe cane',
      trendingSongs: 'Indirimbo ziriko ziratembagazwa',
      newReleases: 'Indirimbo nshasha',
      albums: 'Imizingo',
      genres: 'Ubwoko',
      seeAll: 'Raba vyose',
      home: 'Ahabanza',
      music: 'UMUZIKI',
      library: 'UBUSHOPO BWANJE',
      community: 'UMURYANGO',
      admin: 'UBURONGOZI',
      favorites: 'Ivyo nkunda',
      playlists: 'Amalisiti yanje',
      history: 'Ivyo numvirije',
      churches: 'Amashengero',
      events: 'Ibirori',
      settings: 'Ibipimo',
      help: 'Ubufasha',
      logout: 'Sohoka',
      login: 'Injira',
      register: 'Iyandikishe',
    },
    en: {
      appName: 'Gospel Burundi',
      tagline: 'Discover Burundian Gospel Music',
      subtitle: 'Listen, discover, and support gospel artists of Burundi.',
      searchPlaceholder: 'Search songs, artists, albums, genres...',
      discoverSongs: 'Discover Songs',
      exploreArtists: 'Explore Artists',
      popularArtists: 'Popular Artists',
      trendingSongs: 'Trending Songs',
      newReleases: 'New Releases',
      albums: 'Albums',
      genres: 'Genres',
      seeAll: 'See all',
      home: 'Home',
      music: 'MUSIC',
      library: 'MY LIBRARY',
      community: 'COMMUNITY',
      admin: 'ADMINISTRATION',
      favorites: 'Favorites',
      playlists: 'Playlists',
      history: 'History',
      churches: 'Churches',
      events: 'Events',
      settings: 'Settings',
      help: 'Help',
      logout: 'Logout',
      login: 'Login',
      register: 'Sign Up',
    },
  };

  function setLanguage(lang: Language) {
    currentLanguage.value = lang;
  }

  function toggleMobileDrawer(open?: boolean) {
    if (typeof open === 'boolean') {
      isMobileDrawerOpen.value = open;
    } else {
      isMobileDrawerOpen.value = !isMobileDrawerOpen.value;
    }
  }

  function addToast(message: string, type: 'success' | 'info' | 'error' = 'info') {
    const id = 'toast_' + Math.random().toString(36).substring(2, 9);
    toasts.value.push({ id, message, type });
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }

  function removeToast(id: string) {
    toasts.value = toasts.value.filter(t => t.id !== id);
  }

  function t(key: keyof typeof translations['fr']): string {
    return translations[currentLanguage.value][key] || translations.fr[key] || key;
  }

  return {
    currentLanguage,
    isMobileDrawerOpen,
    toasts,
    setLanguage,
    toggleMobileDrawer,
    addToast,
    removeToast,
    t,
  };
});
