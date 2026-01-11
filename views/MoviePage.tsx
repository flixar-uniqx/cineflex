
import React from 'react';
import { MediaItem } from '../types';
import { DEFAULT_CONFIG } from '../constants';

export const MoviePage: React.FC<{ media: MediaItem }> = ({ media }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Poster */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <img src={media.poster} alt={media.title} className="w-full rounded-2xl border border-slate-800 shadow-2xl" />
            <div className="mt-6 flex flex-wrap gap-2">
              <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-sky-500/20">
                SHARE
              </button>
              <button className="flex-1 bg-slate-800 hover:bg-slate-700 font-bold py-3 rounded-xl transition-all border border-slate-700">
                WHATSAPP
              </button>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">{media.title} ({media.year})</h1>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-6">
              <span>IMDb: <span className="text-yellow-500">★ {media.rating}</span></span>
              <span>{media.runtime}</span>
              <span>{media.type}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-slate-500 uppercase font-bold text-xs mb-2 tracking-widest">Genres</p>
              <p className="text-sky-400 font-medium">{media.genres.join(', ')}</p>
            </div>
            <div>
              <p className="text-slate-500 uppercase font-bold text-xs mb-2 tracking-widest">Directors</p>
              <p className="font-medium">{media.directors.join(', ')}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-slate-500 uppercase font-bold text-xs mb-2 tracking-widest">Cast</p>
              <p className="font-medium text-slate-300">{media.actors.join(' • ')}</p>
            </div>
          </div>

          <div>
            <p className="text-slate-500 uppercase font-bold text-xs mb-2 tracking-widest">Synopsis</p>
            <p className="leading-relaxed text-slate-300">{media.synopsis}</p>
          </div>

          {/* Trailer */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800">
             <iframe 
                width="100%" 
                height="100%" 
                src={media.trailerUrl} 
                title="Trailer" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
          </div>

          {/* Downloads */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="w-2 h-8 bg-sky-500 rounded-full"></div>
              Download Options
            </h2>
            <div className="space-y-4">
              {media.qualities?.map((q, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-sky-400">{q.name}</h3>
                    <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase">File Size: {q.size}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full md:w-auto">
                    {q.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.url} 
                        className="px-6 py-2 rounded-lg bg-slate-800 hover:bg-sky-500 transition-all font-bold text-xs uppercase"
                      >
                        {link.name} ({link.type})
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl italic text-slate-500 text-xs leading-relaxed">
            {DEFAULT_CONFIG.disclaimer}
          </div>
        </div>
      </div>
    </div>
  );
};
