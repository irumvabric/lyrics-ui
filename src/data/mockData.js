export const mockGenres = [
  { id: 1, name: 'Adoration / Worship', slug: 'worship', color: '#1F8A4C', song_count: 320, description: "Moments d'intimité, de prière et d'adoration profonde." },
  { id: 2, name: 'Louange / Praise', slug: 'praise', color: '#C62828', song_count: 245, description: 'Rythmes festifs et chants de louange éclatante.' },
  { id: 3, name: 'Gospel Contemporain', slug: 'contemporary-gospel', color: '#1E5AA8', song_count: 180, description: 'Fusions modernes afro-gospel, RnB et acoustique.' },
  { id: 4, name: 'Chorale / Choir', slug: 'choir', color: '#0F766E', song_count: 210, description: "Puissance des chorales et ensembles vocaux d'églises." },
  { id: 5, name: 'Gospel Traditionnel', slug: 'traditional', color: '#9333EA', song_count: 140, description: 'Harmonies traditionnelles burundaises.' },
  { id: 6, name: 'Gospel Acoustique', slug: 'acoustic', color: '#D97706', song_count: 95, description: 'Guitares, pianos et voix pures et intimistes.' },
  { id: 7, name: 'Gospel Instrumental', slug: 'instrumental', color: '#4F46E5', song_count: 60, description: 'Mélodies paisibles pour la méditation et la prière.' },
];

export const mockArtists = [
  {
    id: 1,
    name: 'Patient Bizimana',
    slug: 'patient-bizimana',
    bio: "Figure emblématique de la musique chrétienne du Burundi, reconnu pour ses hymnes d'adoration sincères qui touchent les cœurs. Auteur-compositeur prolifique basé à Bujumbura.",
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    location: 'Bujumbura, Burundi',
    song_count: 125,
    album_count: 8,
    plays_count: 1250000,
    followers_count: 340000,
    social_links: { youtube: 'https://youtube.com', instagram: 'https://instagram.com', facebook: 'https://facebook.com' }
  },
  {
    id: 2,
    name: 'Dudu T. Niyukuri',
    slug: 'dudu-t-niyukuri',
    bio: "Chantre et conducteur de louange passionné, auteur de cantiques bien connus dans les églises burundaises. Sa voix chaleureuse et son sens de la mélodie le distinguent.",
    photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    location: 'Bujumbura, Burundi',
    song_count: 82,
    album_count: 5,
    plays_count: 850000,
    followers_count: 220000,
    social_links: { youtube: 'https://youtube.com', facebook: 'https://facebook.com' }
  },
  {
    id: 3,
    name: 'Apollinaire Habonimana',
    slug: 'apollinaire-habonimana',
    bio: "Pionnier et père spirituel du gospel burundais moderne. Pasteur et compositeur, il a marqué des générations avec ses cantiques et hymnes de foi.",
    photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    location: 'Gitega, Burundi',
    song_count: 110,
    album_count: 7,
    plays_count: 980000,
    followers_count: 290000,
    social_links: { youtube: 'https://youtube.com', facebook: 'https://facebook.com' }
  },
  {
    id: 4,
    name: 'Fortran Bigirimana',
    slug: 'fortran-bigirimana',
    bio: "Auteur-compositeur-interprète burundais renommé, il combine des sonorités acoustiques avec une proclamation évangélique vibrante et sincère.",
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
    bio: "Directeur musical et chantre de la grâce divine, artisan de louanges dynamiques. Sa créativité musicale est au service du message de l'Évangile.",
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
    bio: "Groupe vocal emblématique de Bujumbura, réputé pour ses harmonies polyphoniques riches et son message de salut. Un pilier de la scène gospel burundaise.",
    photo_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80',
    location: 'Bujumbura, Burundi',
    song_count: 55,
    album_count: 3,
    plays_count: 540000,
    followers_count: 142000
  }
];

export const mockAlbums = [
  {
    id: 1,
    title: "La Beauté de Dieu",
    slug: 'ubwiza-bw-imana',
    cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80',
    release_year: 2026,
    song_count: 12,
    artist_id: 1,
    artist: mockArtists[0],
    description: "Un album de louange pure dédié à la gloire de Dieu, mêlant harmonies acoustiques et rythmes afro-gospel contemporains."
  },
  {
    id: 2,
    title: 'Me Voici Devant Toi',
    slug: 'ndi-hano-mbere-yawe',
    cover_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80',
    release_year: 2025,
    song_count: 10,
    artist_id: 2,
    artist: mockArtists[1],
    description: "Un projet intime qui célèbre la présence de Dieu dans chaque moment de la vie quotidienne."
  },
  {
    id: 3,
    title: "La Victoire Appartient à Dieu",
    slug: 'intsinzi-ni-iy-imana',
    cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=80',
    release_year: 2024,
    song_count: 14,
    artist_id: 3,
    artist: mockArtists[2],
    description: "Un album qui proclame la victoire de Dieu dans tous les domaines de la vie."
  },
  {
    id: 4,
    title: 'Rien Ne Vient Sans Toi',
    slug: 'ntacyo-mfite',
    cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80',
    release_year: 2025,
    song_count: 8,
    artist_id: 4,
    artist: mockArtists[3],
    description: "Un témoignage musical de gratitude totale envers Dieu, source de toutes choses."
  },
  {
    id: 5,
    title: 'Ciel de Bonté',
    slug: 'ijuru-ry-ineza',
    cover_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80',
    release_year: 2023,
    song_count: 11,
    artist_id: 5,
    artist: mockArtists[4],
    description: "Exploration des harmonies gospel entre ciel et terre, inspirée par la beauté de la création divine."
  },
  {
    id: 6,
    title: 'Le Chemin du Salut',
    slug: 'inzira-y-agakiza',
    cover_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80',
    release_year: 2026,
    song_count: 9,
    artist_id: 6,
    artist: mockArtists[5],
    description: "Le chemin du salut décrit en harmonies vocales puissantes par Redemption Voice."
  }
];

export const mockSongs = [
  {
    id: 1,
    title: 'Jésus Est Le Chemin',
    slug: 'yesu-ni-we',
    cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=gospel+burundi+worship',
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
      language: 'Français',
      content: `[Refrain]
Jésus est le chemin, la vérité et la vie
En lui seul j'ai la paix et l'espérance infini
Je ne craindrai aucun mal car il est avec moi
Jésus est le rocher et le guide de ma foi

[Couplet 1]
Dans les moments d'orage et au cœur de la nuit
Sa voix douce vient apaiser tous mes soucis
Il m'a dit : sois sans crainte mon enfant bien-aimé
Je te connais par ton nom, ma grâce t'est donnée

[Refrain]
Jésus est le chemin, la vérité et la vie
En lui seul j'ai la paix et l'espérance infini
Je ne craindrai aucun mal car il est avec moi
Jésus est le rocher et le guide de ma foi

[Couplet 2]
Alléluia au Roi de gloire et de bonté
Ton amour infini ne peut se mesurer
Mon cœur te rend grâce pour tes bienfaits chaque jour
Ta fidélité dure à toujours`
    },
    is_favorite: true
  },
  {
    id: 2,
    title: 'Dieu Est Bon',
    slug: 'imana-ni-nziza',
    cover_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=gospel+burundi+dieu+est+bon',
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
      language: 'Français',
      content: `[Refrain]
Dieu est si bon, ses bontés durent à jamais
De génération en génération il règne en paix
Gloire au Dieu de salut et de justice
Son amour pour nous est sans artifice

[Couplet 1]
Quand je contemple l'ouvrage de tes mains divines
Le ciel et la terre célèbrent ta grâce sublime
Qu'est-ce que l'homme pour que tu penses à lui ?
Tu l'as couronné de gloire au cœur de la nuit

[Refrain]
Dieu est si bon, ses bontés durent à jamais
De génération en génération il règne en paix
Gloire au Dieu de salut et de justice
Son amour pour nous est sans artifice`
    },
    is_favorite: false
  },
  {
    id: 3,
    title: 'Jésus Agit Encore',
    slug: 'yesu-arakora',
    cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=jesus+agit+encore+gospel',
    duration: '03:48',
    duration_seconds: 228,
    release_year: 2026,
    plays_count: 890000,
    status: 'approved',
    artist_id: 2,
    artist: mockArtists[1],
    genres: [mockGenres[1]],
    lyrics: {
      id: 3,
      song_id: 3,
      language: 'Français',
      content: `[Refrain]
Jésus agit encore, il accomplit des miracles
Dans ma vie et dans mon âme il brise les obstacles
Il guérit les malades, il délivre les captifs
Son pouvoir merveilleux est toujours actif

[Couplet 1]
J'ai crié vers le Seigneur au jour de ma détresse
Il a exaucé ma prière et éloigné la tristesse
Sa main n'est pas trop courte pour nous secourir
Sa parole est vivante et nous fait fleurir`
    },
    is_favorite: true
  },
  {
    id: 4,
    title: 'Doux Jésus',
    slug: 'yesu-mwiza',
    cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=doux+jesus+gospel+burundi',
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
    lyrics: {
      id: 4,
      song_id: 4,
      language: 'Français',
      content: `[Refrain]
Jésus si beau, Jésus si doux
Ton amour infini s'étend sur nous tous
Devant ta majesté les cieux s'inclinent
Tes œuvres sont parfaites et divines

[Couplet 1]
Rien ne peut égaler la grandeur de ton nom
Nulle langue humaine ne peut décrire ta passion
Tu es le Prince de paix et le Bon Berger
En toi nos cœurs trouvent la liberté`
    },
    is_favorite: false
  },
  {
    id: 5,
    title: 'Me Voici',
    slug: 'ndi-hano',
    cover_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=me+voici+gospel+burundi',
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
    lyrics: {
      id: 5,
      song_id: 5,
      language: 'Français',
      content: `[Refrain]
Me voici devant toi Père de lumière
Mon âme te loue pour tes grâces nombreuses
Je me tiens en ta présence glorieuse
Pour t'adorer et chanter ma prière

[Couplet 1]
Autrefois j'étais perdu dans les ténèbres
Mais ta voix sacrée m'a appelé à la vie
Maintenant je marche sous ton ombre bienveillante
Et ma bouche proclame ta vérité céleste`
    },
    is_favorite: true
  },
  {
    id: 6,
    title: 'Vêtu de Gloire',
    slug: 'yambaye-icyubahiro',
    cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=vetu+de+gloire+gospel',
    duration: '05:30',
    duration_seconds: 330,
    release_year: 2025,
    plays_count: 670000,
    status: 'approved',
    artist_id: 6,
    artist: mockArtists[5],
    genres: [mockGenres[3]],
    lyrics: {
      id: 6,
      song_id: 6,
      language: 'Français',
      content: `[Refrain]
Vêtu de gloire et de sainteté
Notre Seigneur règne sur l'éternité
Vêtu de puissance et de majesté
Son nom est au-dessus de toute réalité

[Couplet 1]
Nous nous assemblons pour célébrer son nom
Avec les anges et toute la création
Que notre louange s'élève jusqu'aux cieux
Car il est digne, le Seigneur notre Dieu`
    },
    is_favorite: false
  },
  {
    id: 7,
    title: "La Grâce de Dieu",
    slug: 'inema-y-imana',
    cover_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=la+grace+de+dieu+gospel',
    duration: '04:10',
    duration_seconds: 250,
    release_year: 2026,
    plays_count: 540000,
    status: 'approved',
    artist_id: 5,
    artist: mockArtists[4],
    album_id: 5,
    album: mockAlbums[4],
    genres: [mockGenres[0], mockGenres[5]],
    lyrics: {
      id: 7,
      song_id: 7,
      language: 'Français',
      content: `[Refrain]
La grâce de Dieu m'a trouvé sans défense
Elle m'a relevé et redonné l'espérance
La grâce de Dieu est mon trésor inestimable
Son amour pour moi est inébranlable

[Couplet 1]
J'étais sans repère au milieu du désert
Mais sa main tendue a brisé mes chaînes
Aujourd'hui je vis par sa bonté infinie
Et je chanterai ses louanges toute ma vie`
    },
    is_favorite: false
  },
  {
    id: 8,
    title: 'Nous Avons la Paix',
    slug: 'twebwe-tugira-amahoro',
    cover_url: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=nous+avons+la+paix+gospel',
    duration: '05:55',
    duration_seconds: 355,
    release_year: 2023,
    plays_count: 410000,
    status: 'approved',
    artist_id: 1,
    artist: mockArtists[0],
    album_id: 1,
    album: mockAlbums[0],
    genres: [mockGenres[4]],
    lyrics: {
      id: 8,
      song_id: 8,
      language: 'Français',
      content: `[Refrain]
Nous avons la paix qui surpasse toute pensée
La paix de Jésus-Christ qui guérit nos cœurs brisés
Même au cœur des épreuves et des tempêtes de la vie
Son amour fidèle nous assure un abri

[Couplet 1]
Dans les moments d'incertitude et de crainte
Le Prince de paix nous enveloppe de sa présence
Rien ne peut nous séparer de son amour céleste
Il reste fidèle quand tout le reste s'efface`
    },
    is_favorite: false
  },
  {
    id: 9,
    title: 'Le Chemin de Vérité',
    slug: 'inzira-y-ukuri',
    cover_url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=le+chemin+de+verite+gospel',
    duration: '03:30',
    duration_seconds: 210,
    release_year: 2024,
    plays_count: 320000,
    status: 'approved',
    artist_id: 3,
    artist: mockArtists[2],
    album_id: 3,
    album: mockAlbums[2],
    genres: [mockGenres[1], mockGenres[2]],
    lyrics: {
      id: 9,
      song_id: 9,
      language: 'Français',
      content: `[Refrain]
Le chemin de vérité c'est Jésus-Christ
La vie et la lumière promises pour nos esprits
Je marcherai avec lui chaque jour de ma vie
Dans la joie, la foi et sous son Esprit

[Couplet 1]
Le monde propose des routes incertaines
Mais la parole de Dieu est ma lanterne
Elle me guide vers les pâturages paisibles
Où les promesses de Dieu deviennent visibles`
    },
    is_favorite: true
  }
];

export const mockStats = {
  artists_count: 1245,
  songs_count: 8542,
  albums_count: 1230,
  genres_count: 7,
  total_views: '2.4M',
};
