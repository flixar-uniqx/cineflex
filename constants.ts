
import { MediaItem, WebsiteConfig } from './types';

export const DEFAULT_CONFIG: WebsiteConfig = {
  name: "CineCore",
  title: "Ultra-Fast Movie & Series Downloads",
  themeColor: "#0ea5e9",
  tmdbKey: "********",
  disclaimer: "Disclaimer: CineCore does not host any files on its servers. All files are provided by non-affiliated third parties. Content is provided for educational and review purposes only.",
  contactEmail: "admin@cinecore.io",
  footerContent: "© 2024 CineCore Architecture. Designed for global scale."
};

const generateMovie = (id: string, title: string, year: number, rating: number, runtime: string, genres: string[]): MediaItem => ({
  id,
  tmdbId: parseInt(id) + 1000,
  type: "Movie",
  title,
  year,
  rating,
  runtime,
  genres,
  actors: ["Actor A", "Actor B", "Actor C"],
  directors: ["Director X"],
  synopsis: `Experience the epic journey of ${title}. A cinematic masterpiece released in ${year} that redefined the ${genres[0]} genre. High stakes, breathtaking visuals, and a story that resonates.`,
  poster: `https://picsum.photos/id/${parseInt(id) + 10}/600/900`,
  trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  slug: title.toLowerCase().replace(/ /g, '-').replace(/:/g, ''),
  qualities: [
    { name: "1080p BluRay", size: "2.4 GB", links: [{ name: "Direct", url: "#", type: "direct" }, { name: "Telegram", url: "#", type: "telegram" }] },
    { name: "2160p 4K", size: "12.8 GB", links: [{ name: "Mirror 1", url: "#", type: "mirror" }] }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  status: 'approved'
});

const generateSeries = (id: string, title: string, year: number, rating: number, runtime: string, genres: string[]): MediaItem => ({
  id,
  tmdbId: parseInt(id) + 2000,
  type: "Series",
  title,
  year,
  rating,
  runtime,
  genres,
  actors: ["Lead Actor", "Supporting Actor"],
  directors: ["Showrunner Name"],
  synopsis: `${title} is a groundbreaking series that keeps viewers on the edge of their seats. Since its debut in ${year}, it has garnered critical acclaim for its writing and performance.`,
  poster: `https://picsum.photos/id/${parseInt(id) + 50}/600/900`,
  trailerUrl: "https://www.youtube.com/embed/aOC8E8z_ifw",
  slug: title.toLowerCase().replace(/ /g, '-').replace(/:/g, ''),
  seasons: [
    {
      number: 1,
      name: "Season 1",
      episodes: [
        { number: 1, name: "Pilot", qualities: [{ name: "1080p Web", size: "1.1 GB", links: [{ name: "Server A", url: "#", type: "direct" }] }] },
        { number: 2, name: "The Journey Begins", qualities: [{ name: "1080p Web", size: "1.0 GB", links: [{ name: "Server A", url: "#", type: "direct" }] }] }
      ]
    }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  status: 'approved'
});

export const MOCK_MEDIA: MediaItem[] = [
  // 10 MOVIES
  generateMovie("1", "Inception", 2010, 8.8, "148 min", ["Sci-Fi", "Action"]),
  generateMovie("2", "Interstellar", 2014, 8.7, "169 min", ["Sci-Fi", "Drama"]),
  generateMovie("3", "The Dark Knight", 2008, 9.0, "152 min", ["Action", "Crime"]),
  generateMovie("4", "Pulp Fiction", 1994, 8.9, "154 min", ["Crime", "Drama"]),
  generateMovie("5", "The Matrix", 1999, 8.7, "136 min", ["Sci-Fi", "Action"]),
  generateMovie("6", "Gladiator", 2000, 8.5, "155 min", ["Action", "Adventure"]),
  generateMovie("7", "Parasite", 2019, 8.5, "132 min", ["Thriller", "Drama"]),
  generateMovie("8", "Joker", 2019, 8.4, "122 min", ["Crime", "Drama"]),
  generateMovie("9", "Dune: Part Two", 2024, 8.9, "166 min", ["Sci-Fi", "Adventure"]),
  generateMovie("10", "Spider-Man: No Way Home", 2021, 8.2, "148 min", ["Action", "Adventure"]),

  // 10 SERIES
  generateSeries("11", "The Mandalorian", 2019, 8.7, "40 min", ["Action", "Sci-Fi"]),
  generateSeries("12", "Breaking Bad", 2008, 9.5, "49 min", ["Crime", "Drama"]),
  generateSeries("13", "Stranger Things", 2016, 8.7, "51 min", ["Drama", "Horror"]),
  generateSeries("14", "Game of Thrones", 2011, 9.2, "57 min", ["Fantasy", "Drama"]),
  generateSeries("15", "The Witcher", 2019, 8.1, "60 min", ["Fantasy", "Action"]),
  generateSeries("16", "Succession", 2018, 8.9, "60 min", ["Drama"]),
  generateSeries("17", "The Last of Us", 2023, 8.8, "50 min", ["Drama", "Sci-Fi"]),
  generateSeries("18", "Ted Lasso", 2020, 8.8, "30 min", ["Comedy", "Sports"]),
  generateSeries("19", "Beef", 2023, 8.0, "35 min", ["Comedy", "Drama"]),
  generateSeries("20", "Dark", 2017, 8.7, "60 min", ["Sci-Fi", "Mystery"]),
];
