import type { Artist, Song, Album, Genre, SystemStats } from '../types';

export const mockGenres: Genre[] = [
  { id: 1, name: 'Worship / Adoration', slug: 'worship', color: '#1F8A4C', song_count: 320, description: 'Moments d\'intimité, de prière et d\'adoration profonde.' },
  { id: 2, name: 'Praise / Louange', slug: 'praise', color: '#C62828', song_count: 245, description: 'Rythmes festifs et chants d\'action de grâce éclatante.' },
  { id: 3, name: 'Contemporary Gospel', slug: 'contemporary-gospel', color: '#1E5AA8', song_count: 180, description: 'Fusions modernes afro-gospel, RnB et acoustique.' },
  { id: 4, name: 'Choir / Chorale', slug: 'choir', color: '#0F766E', song_count: 210, description: 'Puissance des chorales et ensembles vocaux d\'églises.' },
  { id: 5, name: 'Gospel traditionnel', slug: 'traditional', color: '#9333EA', song_count: 140, description: 'Harmonies traditionnelles burundaises en Kirundi.' },
  { id: 6, name: 'Gospel acoustique', slug: 'acoustic', color: '#D97706', song_count: 95, description: 'Guitares, pianos et voix pures et intimistes.' },
  { id: 7, name: 'Gospel instrumental', slug: 'instrumental', color: '#4F46E5', song_count: 60, description: 'Mélodies paisibles pour la méditation et la prière.' },
];

export const mockArtists: Artist[] = [
  {
    id: 1,
    name: 'Patient Bizimana',
    slug: 'patient-bizimana',
    bio: 'Figure emblématique de la musique chrétienne d\'Afrique de l\'Est et du Burundi, connu pour ses hymnes d\'adoration inspirés qui transcendent les frontières.',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    location: 'Bujumbura, Burundi',
    song_count: 125,
    album_count: 8,
    plays_count: 1250000,
    followers_count: 340000,
    social_links: {
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 2,
    name: 'Dudu T. Niyukuri',
    slug: 'dudu-t-niyukuri',
    bio: 'Chantre et conducteur de louange passionné, auteur de cantiques célèbres entonnés dans toutes les églises burundaises.',
    photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    location: 'Bujumbura, Burundi',
    song_count: 82,
    album_count: 5,
    plays_count: 850000,
    followers_count: 220000,
    social_links: {
      youtube: 'https://youtube.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 3,
    name: 'Apollinaire Habonimana',
    slug: 'apollinaire-habonimana',
    bio: 'Pionnier et père spirituel du gospel burundais moderne. Pasteur et compositeur de cantiques inoubliables.',
    photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    location: 'Gitega, Burundi',
    song_count: 110,
    album_count: 7,
    plays_count: 980000,
    followers_count: 290000,
    social_links: {
      youtube: 'https://youtube.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 4,
    name: 'Fortran Bigirimana',
    slug: 'fortran-bigirimana',
    bio: 'Auteur-compositeur-interprète burundais renommé, combinant sonorités acoustiques et proclamation évangélique vibrante.',
    photo_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    location: 'Bujumbura, Burundi',
    song_count: 64,
    album_count: 4,
    plays_count: 720000,
    followers_count: 195000
  },
  {
    id: 5,
    name: 'Fabrice Nzeyimana',
    slug: 'fabrice-nzeyimana',
    bio: 'Directeur musical et chantre de la grâce divine, artisan de louanges dynamiques en Kirundi et en Français.',
    photo_url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    location: 'Bujumbura, Burundi',
    song_count: 73,
    album_count: 4,
    plays_count: 610000,
    followers_count: 165000
  },
  {
    id: 6,
    name: 'Redemption Voice',
    slug: 'redemption-voice',
    bio: 'Groupe vocal emblématique de Bujumbura, réputé pour ses harmonies polyphoniques riches et ses messages de salut.',
    photo_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80',
    location: 'Bujumbura, Burundi',
    song_count: 55,
    album_count: 3,
    plays_count: 540000,
    followers_count: 142000
  }
];

export const mockAlbums: Album[] = [
  {
    id: 1,
    title: 'Ubwiza Bw\'Imana',
    slug: 'ubwiza-bw-imana',
    cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80',
    release_year: 2026,
    song_count: 12,
    artist_id: 1,
    artist: mockArtists[0]
  },
  {
    id: 2,
    title: 'Ndi Hano Mbere Yawe',
    slug: 'ndi-hano-mbere-yawe',
    cover_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80',
    release_year: 2025,
    song_count: 10,
    artist_id: 2,
    artist: mockArtists[1]
  },
  {
    id: 3,
    title: 'Intsinzi Ni Iy\'Imana',
    slug: 'intsinzi-ni-iy-imana',
    cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=80',
    release_year: 2024,
    song_count: 14,
    artist_id: 3,
    artist: mockArtists[2]
  },
  {
    id: 4,
    title: 'Ntacyo Mfite Kidaturuka Kuri Wowe',
    slug: 'ntacyo-mfite',
    cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80',
    release_year: 2025,
    song_count: 8,
    artist_id: 4,
    artist: mockArtists[3]
  }
];

export const mockSongs: Song[] = [
  {
    id: 1,
    title: 'Yesu Ni We',
    slug: 'yesu-ni-we',
    cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80',
    audio_url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=inspirational-uplifting-acoustic-guitar-114408.mp3',
    duration: '04:21',
    duration_seconds: 261,
    release_year: 2026,
    plays_count: 1420500,
    status: 'approved',
    artist_id: 1,
    artist: mockArtists[0],
    album_id: 1,
    album: mockAlbums[0],
    genres: [mockGenres[0], mockGenres[1]],
    lyrics: {
      id: 1,
      song_id: 1,
      language: 'Kirundi & Français',
      content: `[Refrain]
Yesu ni we mugenga w'ubugingo bwanje
Muri we ni ho nkesha amahoro nyakuri
Ntacyo nzotinya kuko ari kumwe nanje
Yesu ni we nkingi y'ukuri.

[Couplet 1]
Mu bihe by'umwijima n'imvura y'umuyaga
Ijwi ryiwe riraza rikanzanira ituze
Yambwiye ngo: "Humura mwana wanje,
Narakumenye kuva kera mu nda ya nyoko."

[Refrain]
Yesu ni we mugenga w'ubugingo bwanje
Muri we ni ho nkesha amahoro nyakuri
Ntacyo nzotinya kuko ari kumwe nanje
Yesu ni we nkingi y'ukuri.

[Couplet 2]
Haleluya! Mwami w'icyubahiro
Urukundo rwawe ntirugira urugero
Umutima wanje urashimira
Urukundo ruhoraho iteka ryose.`
    },
    is_favorite: true
  },
  {
    id: 2,
    title: 'Imana Ni Nziza',
    slug: 'imana-ni-nziza',
    cover_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80',
    audio_url: 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3?filename=worship-ambient-piano-123019.mp3',
    duration: '05:02',
    duration_seconds: 302,
    release_year: 2025,
    plays_count: 1120000,
    status: 'approved',
    artist_id: 2,
    artist: mockArtists[1],
    album_id: 2,
    album: mockAlbums[1],
    genres: [mockGenres[0]],
    lyrics: {
      id: 2,
      song_id: 2,
      language: 'Kirundi',
      content: `[Refrain]
Imana ni nziza, imbabazi zayo zihoraho
Kuva mu gisekuru gushika mu bindi
Shimwa Mana y'amahoro!

[Couplet 1]
Iyo nitegereje imirimo y'amaboko yawe
Ijuru n'isi birakuramya
Mbese umuntu ni iki ko wamwitayeho?
Warankunze unyambika ubwiza.`
    },
    is_favorite: false
  },
  {
    id: 3,
    title: 'Yesu Arakora',
    slug: 'yesu-arakora',
    cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=80',
    audio_url: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_c9769db00a.mp3?filename=spiritual-prayer-acoustic-guitar-111162.mp3',
    duration: '03:48',
    duration_seconds: 228,
    release_year: 2026,
    plays_count: 890000,
    status: 'approved',
    artist_id: 2,
    artist: mockArtists[1],
    genres: [mockGenres[1]],
    is_favorite: true
  },
  {
    id: 4,
    title: 'Yesu Mwiza',
    slug: 'yesu-mwiza',
    cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80',
    audio_url: 'https://cdn.pixabay.com/download/audio/2022/11/06/audio_c3639833f4.mp3?filename=ambient-worship-peaceful-126294.mp3',
    duration: '06:14',
    duration_seconds: 374,
    release_year: 2024,
    plays_count: 940000,
    status: 'approved',
    artist_id: 3,
    artist: mockArtists[2],
    album_id: 3,
    album: mockAlbums[2],
    genres: [mockGenres[0], mockGenres[4]],
    is_favorite: false
  },
  {
    id: 5,
    title: 'Ndi Hano',
    slug: 'ndi-hano',
    cover_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80',
    audio_url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=inspirational-uplifting-acoustic-guitar-114408.mp3',
    duration: '04:45',
    duration_seconds: 285,
    release_year: 2025,
    plays_count: 760000,
    status: 'approved',
    artist_id: 4,
    artist: mockArtists[3],
    album_id: 4,
    album: mockAlbums[3],
    genres: [mockGenres[2]],
    is_favorite: true
  },
  {
    id: 6,
    title: 'Yambaye Icyubahiro',
    slug: 'yambaye-icyubahiro',
    cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80',
    audio_url: 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3?filename=worship-ambient-piano-123019.mp3',
    duration: '05:30',
    duration_seconds: 330,
    release_year: 2025,
    plays_count: 670000,
    status: 'approved',
    artist_id: 6,
    artist: mockArtists[5],
    genres: [mockGenres[3]],
    is_favorite: false
  }
];

export const mockStats: SystemStats = {
  artists_count: 1245,
  songs_count: 8542,
  albums_count: 1230,
  users_count: 15420,
  total_plays: '2.4M'
};
