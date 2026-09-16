import type { Artist, Song, Album, Genre, SystemStats } from '../types';

export const mockGenres: Genre[] = [
  { id: 1, name: 'Adoration / Worship', slug: 'worship', color: '#1F8A4C', song_count: 320, description: "Moments d'intimité, de prière et d'adoration profonde." },
  { id: 2, name: 'Louange / Praise', slug: 'praise', color: '#C62828', song_count: 245, description: 'Rythmes festifs et chants de louange éclatante.' },
  { id: 3, name: 'Gospel Contemporain', slug: 'contemporary-gospel', color: '#1E5AA8', song_count: 180, description: 'Fusions modernes afro-gospel, RnB et acoustique.' },
  { id: 4, name: 'Chorale / Choir', slug: 'choir', color: '#0F766E', song_count: 210, description: "Puissance des chorales et ensembles vocaux d'églises." },
  { id: 5, name: 'Gospel Traditionnel', slug: 'traditional', color: '#9333EA', song_count: 140, description: 'Harmonies traditionnelles burundaises en Kirundi.' },
  { id: 6, name: 'Gospel Acoustique', slug: 'acoustic', color: '#D97706', song_count: 95, description: 'Guitares, pianos et voix pures et intimistes.' },
  { id: 7, name: 'Gospel Instrumental', slug: 'instrumental', color: '#4F46E5', song_count: 60, description: 'Mélodies paisibles pour la méditation et la prière.' },
];

export const mockArtists: Artist[] = [
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
    bio: "Pionnier et père spirituel du gospel burundais moderne. Pasteur et compositeur, il a marqué des générations avec ses cantiques en Kirundi et en Français.",
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
    bio: "Directeur musical et chantre de la grâce divine, artisan de louanges dynamiques en Kirundi et en Français. Sa créativité musicale est au service du message de l'Évangile.",
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

export const mockAlbums: Album[] = [
  {
    id: 1,
    title: "Ubwiza Bw'Imana",
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
    title: 'Ndi Hano Mbere Yawe',
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
    title: "Intsinzi Ni Iy'Imana",
    slug: 'intsinzi-ni-iy-imana',
    cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=80',
    release_year: 2024,
    song_count: 14,
    artist_id: 3,
    artist: mockArtists[2],
    description: "Un album qui proclame la victoire de Dieu dans tous les domaines de la vie, avec des chants en Kirundi et en Français."
  },
  {
    id: 4,
    title: 'Ntacyo Mfite Kidaturuka Kuri Wowe',
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
    title: 'Ijuru Ry\'Ineza',
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
    title: 'Inzira Y\'Agakiza',
    slug: 'inzira-y-agakiza',
    cover_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80',
    release_year: 2026,
    song_count: 9,
    artist_id: 6,
    artist: mockArtists[5],
    description: "Le chemin du salut décrit en harmonies vocales puissantes par Redemption Voice."
  }
];

export const mockSongs: Song[] = [
  {
    id: 1,
    title: 'Yesu Ni We',
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
      language: 'Kirundi & Français',
      content: `[Agace / Refrain]
Yesu ni we nzira y'ukuri n'ubugingo
Muri we nkesha amahoro n'icyizere
Ntacyo nzotinya kuko ari kumwe nanje
Yesu ni we mugenga w'umutima wanje

[Igice ca mbere / Couplet 1]
Mu bihe by'imvura no mu kirere gihisi
Ijwi ryiwe riraza nkanzanira amahoro
Yambwiye ati: humura mwana wanje mwiza
Narakumenye n'imbabazi zanje zose

[Agace / Refrain]
Yesu ni we nzira y'ukuri n'ubugingo
Muri we nkesha amahoro n'icyizere
Ntacyo nzotinya kuko ari kumwe nanje
Yesu ni we mugenga w'umutima wanje

[Igice ca kabiri / Couplet 2]
Haleluya! Mwami w'icyubahiro kinini
Urukundo rwawe ntirugira urugero
Umutima wanje ushimira ineza yawe
Ijambo ryawe risigura inzira yanje

[Indirimbo yo gusozera / Pont]
Ubuziranenge bwawe buhagaze imbere yanje
Imbabazi zawe ziransunika imbere
Sinzakureka kuko uri Data wanje
Icyubahiro n'ubwiza ni ibyawe iteka`
    },
    is_favorite: true
  },
  {
    id: 2,
    title: 'Imana Ni Nziza',
    slug: 'imana-ni-nziza',
    cover_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=imana+ni+nziza+burundi+gospel',
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
      content: `[Agace / Refrain]
Imana ni nziza, imbabazi zayo zihoraho
Kuva mu gisekuru gushika mu bindi
Shimwa Mana y'amahoro nyamara!
Icyubahiro n'ubwiza ni ibyawe

[Igice ca mbere / Couplet 1]
Nitegereje imirimo y'amaboko yawe
Ijuru n'isi birakuramya inema yawe
Mbese umuntu ni iki ko wamwitayeho
Warankunze unyambika ubwiza bwawe

[Agace / Refrain]
Imana ni nziza, imbabazi zayo zihoraho
Kuva mu gisekuru gushika mu bindi
Shimwa Mana y'amahoro nyamara!
Icyubahiro n'ubwiza ni ibyawe

[Igice ca kabiri / Couplet 2]
Utwigoro twawe turansanga buri munsi
Amahoro yawe aragongera umutima wanje
Sinshobora gutura ikindi kitagukwiye
Ubuziranenge bwawe ni inzoga y'umunezero

[Indirimbo yo gusozera / Pont]
Ndashimira, ndakuramya Mana yanje
Icyiza n'imbabazi birandindira buri munsi
Nzabaho nkirimbura mbifurije no mu nyuguti
Imana ni nziza maze imbabazi zayo zihoraho`
    },
    is_favorite: false
  },
  {
    id: 3,
    title: 'Yesu Arakora',
    slug: 'yesu-arakora',
    cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=yesu+arakora+gospel+kirundi',
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
      language: 'Kirundi',
      content: `[Agace / Refrain]
Yesu arakora ibitangaza
Mu buzima bwanje ubugingo bwanje
Aravura amenyo ananiye akiza
Ibitangaza bivuye mu ntoki ziwe

[Igice ca mbere / Couplet 1]
Nahamagawe ngo nze kugira ubwenge
Ndamwinginga make ataha inyishu yanje
Aransubiza mu buryo butangaje cane
Ubushobozi bwe ntiburangira n'ubwo buze

[Igice ca kabiri / Couplet 2]
Mwami wacu aricaye ku ntebe y'ubwami
Atunga amaboko yiwe ku binyabuzima byose
Akesha ubuzima abafite agahinda
Yesu arakora ubwo abirutsa abagwaye`
    },
    is_favorite: true
  },
  {
    id: 4,
    title: 'Yesu Mwiza',
    slug: 'yesu-mwiza',
    cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=yesu+mwiza+gospel+burundi',
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
      language: 'Kirundi & Français',
      content: `[Agace / Refrain]
Yesu mwiza, Yesu mwiza
Urukundo rwawe ruhagaze iteka
Yesu mwiza, Yesu mwiza
Icyubahiro kiwe kibangamira ijuru

[Igice ca mbere / Couplet 1]
Ntawushoboye gutangaza ubwiza bwawe
Nta ndimi yo mu isi ishobora kubisobanura
Ugendana amagambo make ariko akomeye
Mwami w'amahoro, mubyeyi w'icyubahiro

[Français]
Jésus si beau, digne de toute louange
Ton amour traverse les siècles et les âges
Devant ta majesté les genoux fléchissent
Et toute langue confesse que tu es Seigneur

[Igice ca kabiri / Couplet 2]
Mu gisekuru cose ukomeza gutuyobora
Inzira zawe ni iz'amahoro n'ubuzima
Amatwi yawe yumva akagambu gacu gose
Urugendo rwacu rugendana n'inema yawe`
    },
    is_favorite: false
  },
  {
    id: 5,
    title: 'Ndi Hano',
    slug: 'ndi-hano',
    cover_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=ndi+hano+gospel+burundi',
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
      language: 'Kirundi',
      content: `[Agace / Refrain]
Ndi hano mbere yawe Data w'amagara
Umutima wanje ushimira inema yawe
Ndi hano kubera inkaba zawe z'urukundo
Ubugingo bwanje burangaza icyubahiro

[Igice ca mbere / Couplet 1]
Natakamiye mu nzira z'ubusa n'imyanya
Ariko wampindiye inzira ukanyerekeza
Ubu ndi hano mbere yawe nshaje nkuramya
Amahoro yawe aranga mu mutima wanje

[Igice ca kabiri / Couplet 2]
Simvuga gusa ariko nkuramya n'ibikorwa
Imisi yanje yose ibe ikimenyetso
Ndi hano kugira ngo mbashe kubona ubwenge
Ubuzima bwanje bube iry'icyubahiro cyawe`
    },
    is_favorite: true
  },
  {
    id: 6,
    title: 'Yambaye Icyubahiro',
    slug: 'yambaye-icyubahiro',
    cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=yambaye+icyubahiro+gospel',
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
      language: 'Kirundi',
      content: `[Agace / Refrain]
Yambaye icyubahiro, yambaye ubwiza
Mwami wacu aganza ijuru n'isi
Yambaye icyubahiro, yambaye ubushobozi
Izina ryiwe ryitwa umunyacyubahiro

[Igice ca mbere / Couplet 1]
Turamutsa Mwami wacu mu ruririmbo
Dukuramya n'iz'ijuru imbere yiwe
Itorero rye rigishimira inema yiwe
Amajwi yacu azakiriwe mu majuru

[Igice ca kabiri / Couplet 2]
Ubwami bwiwe burakomeza buhoraho
Imbaraga ziwe ntizirangirira n'amahoro
Turira rurimbura twuzuye impi n'icyago
Mwami wacu akomeza gutwicara bugufi`
    },
    is_favorite: false
  },
  {
    id: 7,
    title: "Inema Y'Imana",
    slug: 'inema-y-imana',
    cover_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=inema+imana+gospel+kirundi',
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
      language: 'Kirundi & Français',
      content: `[Agace / Refrain]
Inema y'Imana yansuye ubuhere
Yansuye kandi ikanteerera aho ngana
Inema y'Imana ni yo nsangire yanje yose
Mbona ntabwo nshobora kurangwaho

[Français – Refrain]
La grâce de Dieu m'a trouvé perdu
Elle m'a relevé et guidé vers la lumière
La grâce de Dieu est mon seul trésor
Je ne peux pas vivre sans elle

[Igice ca mbere / Couplet 1]
Naratakaye mu nzira ntazi aho ngiye
Ariko inema yansuye ikanyerekeza
Ubu ndi hengeshejwe n'urukundo rwe
Inema y'Imana ihoraho iteka

[Igice ca kabiri / Couplet 2]
Iyo ntekereje amakosa yanje yose
Sinzigera nsanga impuhwe zo kubona inema
Ariko Imana yangiriye neza mu mutima
Yansinzeye maze ikansobanurira`
    },
    is_favorite: false
  },
  {
    id: 8,
    title: 'Twebwe Tugira Amahoro',
    slug: 'twebwe-tugira-amahoro',
    cover_url: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=amahoro+gospel+burundi',
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
      language: 'Kirundi',
      content: `[Agace / Refrain]
Twebwe tugira amahoro ava kuri Yesu
Amahoro yerengeje ivyiyumviro vyose
Twebwe tugira amahoro mu bihe bitoroshe
Kuko Mwami wacu aratwicara bugufi

[Igice ca mbere / Couplet 1]
Mu bihe byo kwigora no gushiha umutima
Amahoro ya Yesu aratuyobora
Ntitworoherwa ariko tuzima n'imbabazi
Kuko ari kumwe natwe mu nzira zose

[Igice ca kabiri / Couplet 2]
Tuzashira amahoro kuri bamwe benshi
Tuzatangaza ubutumwa bwiza mu si
Itorero riye rizakomeza gutera imbere
Gushika Mwami wacu azoka mu icyubahiro`
    },
    is_favorite: false
  },
  {
    id: 9,
    title: 'Inzira Y\'Ukuri',
    slug: 'inzira-y-ukuri',
    cover_url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=80',
    youtube_url: 'https://www.youtube.com/results?search_query=inzira+ukuri+gospel+kirundi',
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
      language: 'Kirundi',
      content: `[Agace / Refrain]
Inzira y'ukuri ni Yesu Kristo
Ubugingo n'amahoro mu mana kandi
Inzira y'ukuri ni yo nsangire yanje
Nzakurikira iteka ryose

[Igice ca mbere / Couplet 1]
Isi irashaka inzira nyinshi z'imbaho
Ariko ndi muri Yesu sinohaka ntitahuka
Inzira y'ukuri iransanganisha na Data
Ubuzima burangwa n'ubuziranenge no kujubika

[Igice ca kabiri / Couplet 2]
Yesu yabwiye ababwibuka bose ati
"Ndi nzira, ukuri, n'ubugingo bwose"
Ntawujisha Data keretse adutuwe na we
Inzira y'ukuri nayo ni yo mpagaze kuri yo`
    },
    is_favorite: true
  }
];

export const mockStats: SystemStats = {
  artists_count: 1245,
  songs_count: 8542,
  albums_count: 1230,
  genres_count: 7,
  total_views: '2.4M',
};
