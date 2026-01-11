
import React, { useState } from 'react';
import { MOCK_MEDIA } from '../constants';
import { MediaItem } from '../types';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'All' | 'Movie' | 'Series'>('All');

  const filteredMedia = MOCK_MEDIA.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.actors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === 'All' || item.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto py-12">
      {/* Hero Header */}
      <section className="text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
          THE FUTURE OF <br />
          <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">ULTRA-FAST</span> DOWNLOADS
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Zero logs. Zero limits. Securely download high-fidelity movies and series at lightning speed.
        </p>
        
        {/* Real-time Search */}
        <div className="relative max-w-2xl mx-auto mt-10">
          <input 
            type="text" 
            placeholder="Search titles, actors, or genres..." 
            className="w-full bg-slate-900 border border-slate-700/50 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-sky-500/20 outline-none transition-all shadow-2xl text-lg placeholder:text-slate-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-6 top-6 text-sky-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800">
          {(['All', 'Movie', 'Series'] as const).map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${filter === f ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'text-slate-400 hover:text-white'}`}
            >
              {f}s
            </button>
          ))}
        </div>
        
        <div className="flex gap-2">
          {['Trending', 'IMDb 8+', 'Recently Added'].map((tag) => (
            <button key={tag} className="px-4 py-2 rounded-lg bg-slate-900/30 border border-slate-800 text-[10px] font-bold uppercase text-slate-500 hover:text-sky-400 transition-all">
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredMedia.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredMedia.map((item) => (
            <MediaCard key={item.id} media={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
          <p className="text-slate-500 font-medium">No titles matching "{searchTerm}" found.</p>
        </div>
      )}
    </div>
  );
};

const MediaCard: React.FC<{ media: MediaItem }> = ({ media }) => {
  return (
    <a 
      href={`#/${media.type}/${media.slug}`}
      className="group block relative overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/40 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] hover:shadow-sky-500/10 hover:border-sky-500/50"
    >
      <div className="aspect-[2/3] relative">
        <img 
          src={media.poster} 
          alt={media.title} 
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-lg px-2 py-1 rounded-lg border border-white/10 text-[10px] font-bold">
          <span className="text-yellow-500">★</span> {media.rating}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-bold text-sm leading-tight text-white group-hover:text-sky-400 transition-colors drop-shadow-md">{media.title}</h3>
          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">{media.year} • {media.genres[0]}</p>
        </div>
      </div>
    </a>
  );
};
