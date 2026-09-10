export type UserRole = 'USER' | 'ARTIST' | 'ADMIN';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  avatar_url?: string;
  artist_id?: number;
  created_at?: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
}

export interface Artist {
  id: number;
  name: string;
  slug: string;
  bio: string;
  photo_url: string;
  location: string;
  song_count: number;
  album_count: number;
  plays_count: number;
  followers_count: number;
  social_links?: SocialLinks;
  is_following?: boolean;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  image_url?: string;
  song_count?: number;
}

export interface Lyric {
  id: number;
  song_id: number;
  content: string;
  language?: string;
}

export interface Album {
  id: number;
  title: string;
  slug: string;
  cover_url: string;
  release_year: number;
  song_count: number;
  artist_id: number;
  artist?: Artist;
  songs?: Song[];
}

export type SongStatus = 'pending' | 'approved' | 'rejected';

export interface Song {
  id: number;
  title: string;
  slug: string;
  cover_url: string;
  audio_url: string;
  duration: string; // e.g. "04:21"
  duration_seconds: number;
  release_year: number;
  plays_count: number;
  status: SongStatus;
  artist_id: number;
  artist?: Artist;
  album_id?: number;
  album?: Album;
  genres?: Genre[];
  lyrics?: Lyric;
  is_favorite?: boolean;
}

export interface Playlist {
  id: number;
  title: string;
  slug: string;
  description?: string;
  cover_url?: string;
  user_id: number;
  is_public: boolean;
  songs_count: number;
  songs?: Song[];
}

export interface HistoryItem {
  id: number;
  song: Song;
  played_at: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  role: UserRole | null;
}

export interface SearchResults {
  songs: Song[];
  artists: Artist[];
  albums: Album[];
  genres: Genre[];
}

export interface SystemStats {
  artists_count: number;
  songs_count: number;
  albums_count: number;
  users_count: number;
  total_plays: string;
}
