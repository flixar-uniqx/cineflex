
export type MediaType = 'Movie' | 'Series';

export interface Genre {
  id: number;
  name: string;
}

export interface Actor {
  id: number;
  name: string;
  role?: string;
}

export interface Director {
  id: number;
  name: string;
}

export interface Quality {
  name: string;
  size: string;
  links: DownloadLink[];
}

export interface DownloadLink {
  name: string;
  url: string;
  type: 'direct' | 'telegram' | 'mirror';
}

export interface Episode {
  number: number;
  name: string;
  qualities: Quality[];
}

export interface Season {
  number: number;
  name: string;
  episodes: Episode[];
}

export interface MediaItem {
  id: string;
  tmdbId: number;
  type: MediaType;
  title: string;
  year: number;
  rating: number;
  runtime: string;
  genres: string[];
  actors: string[];
  directors: string[];
  synopsis: string;
  poster: string;
  trailerUrl: string;
  qualities?: Quality[]; // For Movies
  seasons?: Season[]; // For Series
  slug: string;
  createdAt: string;
  updatedAt: string;
  status: 'pending' | 'approved' | 'draft';
}

export interface WebsiteConfig {
  name: string;
  title: string;
  themeColor: string;
  tmdbKey: string;
  disclaimer: string;
  contactEmail: string;
  footerContent: string;
}
