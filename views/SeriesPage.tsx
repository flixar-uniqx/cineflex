
import React, { useState } from 'react';
import { MediaItem } from '../types';
import { DEFAULT_CONFIG } from '../constants';

export const SeriesPage: React.FC<{ media: MediaItem }> = ({ media }) => {
  const [openSeason, setOpenSeason] = useState<number | null>(1);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Poster */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <img src={media.poster} alt={media.title} className="w-full rounded-2xl border border-slate-800 shadow-2xl" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">{media.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-6">
              <span>IMDb: <span className="text-yellow-500">★ {media.rating}</span></span>
              <span>{media.runtime} / ep</span>
              <span>TV Series</span>
              <span>Started: {media.year}</span>
            </div>
          </div>

          <div>
            <p className="text-slate-500 uppercase font-bold text-xs mb-2 tracking-widest">Synopsis</p>
            <p className="leading-relaxed text-slate-300">{media.synopsis}</p>
          </div>

          {/* Collapsible Seasons */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="w-2 h-8 bg-sky-500 rounded-full"></div>
              Seasons & Episodes
            </h2>
            <div className="space-y-4">
              {media.seasons?.map((season) => (
                <div key={season.number} className="border border-slate-800 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenSeason(openSeason === season.number ? null : season.number)}
                    className="w-full flex justify-between items-center p-6 bg-slate-900 hover:bg-slate-800 transition-all"
                  >
                    <span className="text-lg font-bold">{season.name}</span>
                    <span className="text-slate-500">{openSeason === season.number ? '−' : '+'}</span>
                  </button>
                  
                  {openSeason === season.number && (
                    <div className="p-6 space-y-6 bg-slate-950">
                      {season.episodes.map((ep) => (
                        <div key={ep.number} className="space-y-4 border-l-2 border-slate-800 pl-6 ml-2">
                          <h4 className="font-bold">Episode {ep.number}: {ep.name}</h4>
                          <div className="flex flex-wrap gap-3">
                            {ep.qualities.map((q, qidx) => (
                              <div key={qidx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-6">
                                <div>
                                  <p className="text-xs font-bold text-sky-400">{q.name}</p>
                                  <p className="text-[10px] text-slate-500">{q.size}</p>
                                </div>
                                <div className="flex gap-2">
                                  {q.links.map((l, lidx) => (
                                    <a key={lidx} href={l.url} className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-500 text-[10px] font-bold uppercase transition-all">
                                      {l.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
