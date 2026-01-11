
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { MoviePage } from './views/MoviePage';
import { SeriesPage } from './views/SeriesPage';
import { AdminPanel } from './views/AdminPanel';
import { Documentation } from './views/Documentation';
import { MediaItem } from './types';
import { MOCK_MEDIA } from './constants';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      
      // Improved Deep Routing
      if (hash.startsWith('#/Movie/')) {
        const slug = hash.split('/').pop();
        const movie = MOCK_MEDIA.find(m => m.slug === slug && m.type === 'Movie');
        setSelectedMedia(movie || null);
      } else if (hash.startsWith('#/Series/')) {
        const slug = hash.split('/').pop();
        const series = MOCK_MEDIA.find(m => m.slug === slug && m.type === 'Series');
        setSelectedMedia(series || null);
      } else {
        setSelectedMedia(null);
      }
      
      // Scroll to top on navigation
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    if (currentPath === '#/' || currentPath === '') {
      return <Home />;
    }
    if (currentPath === '#/admin') {
      return <AdminPanel />;
    }
    if (currentPath === '#/docs') {
      return <Documentation />;
    }
    
    // Detailed Views
    if (currentPath.startsWith('#/Movie/')) {
      return selectedMedia ? <MoviePage media={selectedMedia} /> : <NotFound />;
    }
    if (currentPath.startsWith('#/Series/')) {
      return selectedMedia ? <SeriesPage media={selectedMedia} /> : <NotFound />;
    }
    
    return <NotFound />;
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-sky-500/30 selection:text-sky-300">
      <Navbar />
      <div className="flex-grow pt-16 animate-in fade-in duration-700">
        {renderView()}
      </div>
      <Footer />
    </div>
  );
}

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6 text-center px-6">
    <div className="text-8xl font-black text-slate-800">404</div>
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Content Lost in Space</h2>
      <p className="text-slate-500">The link might be broken or the content was removed by a moderator.</p>
    </div>
    <a href="#/" className="px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20">
      RETURN HOME
    </a>
  </div>
);
