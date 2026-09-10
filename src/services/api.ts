import axios, { AxiosInstance, AxiosResponse } from 'axios';
import type { Song, Artist, Album, Genre, SearchResults, User, Playlist, HistoryItem, SystemStats } from '../types';

// API client pointing to Laravel REST API
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  timeout: 15000,
});

// Request interceptor: attach Sanctum Bearer token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('gospel_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401 unauthenticated
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('gospel_token');
      localStorage.removeItem('gospel_user');
      // Could emit event or redirect if on protected route
    }
    return Promise.reject(error);
  }
);

export const api = {
  // Health check
  checkHealth: () => apiClient.get<{ status: string; service: string; timestamp: string }>('/health'),

  // Public Endpoints
  getSongs: (params?: { genre?: string; sort?: string; page?: number }) =>
    apiClient.get<{ data: Song[]; total: number }>('/songs', { params }),

  getSong: (slug: string | number) =>
    apiClient.get<{ data: Song }>(`/songs/${slug}`),

  getTrending: () =>
    apiClient.get<{ data: Song[] }>('/trending'),

  getNewReleases: () =>
    apiClient.get<{ data: Song[] }>('/new-releases'),

  getArtists: (params?: { letter?: string; sort?: string; page?: number }) =>
    apiClient.get<{ data: Artist[]; total: number }>('/artists', { params }),

  getArtist: (slug: string | number) =>
    apiClient.get<{ data: Artist; songs: Song[]; albums: Album[] }>(`/artists/${slug}`),

  getAlbums: (params?: { page?: number }) =>
    apiClient.get<{ data: Album[]; total: number }>('/albums', { params }),

  getAlbum: (slug: string | number) =>
    apiClient.get<{ data: Album; songs: Song[] }>(`/albums/${slug}`),

  getGenres: () =>
    apiClient.get<{ data: Genre[] }>('/genres'),

  search: (query: string) =>
    apiClient.get<{ data: SearchResults }>(`/search`, { params: { q: query } }),

  // Auth Endpoints (Laravel Sanctum)
  login: (credentials: { email: string; password: string }) =>
    apiClient.post<{ user: User; token: string }>('/login', credentials),

  register: (payload: { name: string; email: string; password: string; password_confirmation: string; role?: string }) =>
    apiClient.post<{ user: User; token: string }>('/register', payload),

  logout: () =>
    apiClient.post('/logout'),

  getMe: () =>
    apiClient.get<{ data: User }>('/me'),

  // User Library
  getFavorites: () =>
    apiClient.get<{ songs: Song[]; artists: Artist[]; albums: Album[] }>('/favorites'),

  toggleFavorite: (songId: number) =>
    apiClient.post<{ favorited: boolean }>(`/favorites/songs/${songId}`),

  getPlaylists: () =>
    apiClient.get<{ data: Playlist[] }>('/playlists'),

  createPlaylist: (data: { title: string; description?: string }) =>
    apiClient.post<{ data: Playlist }>('/playlists', data),

  getHistory: () =>
    apiClient.get<{ data: HistoryItem[] }>('/history'),

  recordPlay: (songId: number) =>
    apiClient.post(`/songs/${songId}/play`),

  // Admin & Artist Dashboard
  getStats: () =>
    apiClient.get<{ data: SystemStats }>('/admin/dashboard'),
};

export default apiClient;
