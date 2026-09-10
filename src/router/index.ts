import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },

  {
    path: '/songs',
    name: 'songs',
    component: () => import('@/views/Songs.vue'),
  },
  {
    path: '/songs/:slug',
    name: 'song-details',
    component: () => import('@/views/SongDetails.vue'),
  },
  {
    path: '/artists',
    name: 'artists',
    component: () => import('@/views/Artists.vue'),
  },
  {
    path: '/artists/:slug',
    name: 'artist-details',
    component: () => import('@/views/ArtistDetails.vue'),
  },
  {
    path: '/albums',
    name: 'albums',
    component: () => import('@/views/Albums.vue'),
  },
  {
    path: '/albums/:slug',
    name: 'album-details',
    component: () => import('@/views/AlbumDetails.vue'),
  },
  {
    path: '/genres',
    name: 'genres',
    component: () => import('@/views/Genres.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('@/views/Favorites.vue'),
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: () => import('@/views/Playlists.vue'),
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/History.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('@/views/admin/Dashboard.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
