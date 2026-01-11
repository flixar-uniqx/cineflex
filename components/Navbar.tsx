
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center px-6 md:px-12 justify-between">
      <div className="flex items-center gap-8">
        <a href="#/" className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
          CINECORE
        </a>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#/" className="hover:text-sky-400 transition-colors">Home</a>
          <a href="#/" className="hover:text-sky-400 transition-colors">Movies</a>
          <a href="#/" className="hover:text-sky-400 transition-colors">Series</a>
          <a href="#/docs" className="hover:text-sky-400 transition-colors">Documentation</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="#/admin" className="text-xs font-semibold px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-all">
          ADMIN PORTAL
        </a>
      </div>
    </nav>
  );
};
