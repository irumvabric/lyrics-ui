import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

// ─── PUBLIC ROUTES ────────────────────────────────────────────────────────────
const publicRoutes = [
  {
    path: '/',
    component: () => import('@/layouts/PublicLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('@/views/PublicHome.vue') },
      { path: 'artists', name: 'artists', component: () => import('@/views/Artists.vue') },
      { path: 'artists/:slug', name: 'artist-details', component: () => import('@/views/ArtistDetails.vue') },
      { path: 'albums', name: 'albums', component: () => import('@/views/Albums.vue') },
      { path: 'albums/:slug', name: 'album-details', component: () => import('@/views/AlbumDetails.vue') },
      { path: 'lyrics/:slug', name: 'lyrics', component: () => import('@/views/LyricsPage.vue') },
      { path: 'search', name: 'search', component: () => import('@/views/Search.vue') },
      { path: 'genres', name: 'genres', component: () => import('@/views/Genres.vue') },
    ],
  },
];

// ─── ADMIN ROUTES ─────────────────────────────────────────────────────────────
const adminRoutes = [
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('@/views/admin/AdminLogin.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { requiresAdmin: true },
    children: [
      { path: '', redirect: '/admin/dashboard' },
      { path: 'dashboard', name: 'admin-dashboard', component: () => import('@/views/admin/Dashboard.vue') },
      { path: 'artists', name: 'admin-artists', component: () => import('@/views/admin/ArtistsAdmin.vue') },
      { path: 'albums', name: 'admin-albums', component: () => import('@/views/admin/AlbumsAdmin.vue') },
      { path: 'songs', name: 'admin-songs', component: () => import('@/views/admin/SongsAdmin.vue') },
      { path: 'genres', name: 'admin-genres', component: () => import('@/views/admin/GenresAdmin.vue') },
    ],
  },
];

// ─── ROUTER ──────────────────────────────────────────────────────────────────
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...publicRoutes,
    ...adminRoutes,
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

// ─── NAVIGATION GUARD ─────────────────────────────────────────────────────────
router.beforeEach((to) => {
  if (to.meta.requiresAdmin) {
    const auth = useAuthStore();
    if (!auth.isAuthenticated) {
      return { name: 'admin-login' };
    }
  }
});
