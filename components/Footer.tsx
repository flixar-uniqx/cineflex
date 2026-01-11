
import React from 'react';
import { DEFAULT_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 pt-16 pb-8 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-sky-400">{DEFAULT_CONFIG.name}</h2>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Leading the next generation of content distribution. Low-latency, ultra-scalable architecture powered by CineCore Microservices.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#/" className="hover:text-sky-400">All Movies</a></li>
            <li><a href="#/" className="hover:text-sky-400">Latest Series</a></li>
            <li><a href="#/docs" className="hover:text-sky-400">API Documentation</a></li>
            <li><a href="#/admin" className="hover:text-sky-400">Admin Login</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-sky-400">Terms of Use</a></li>
            <li><a href="#" className="hover:text-sky-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-sky-400">DMCA Notice</a></li>
            <li><a href="#" className="hover:text-sky-400">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
        <span>{DEFAULT_CONFIG.footerContent}</span>
        <div className="flex gap-4">
          <span>Status: <span className="text-emerald-500">All Systems Operational</span></span>
          <span>Version: 3.4.0-Stable</span>
        </div>
      </div>
    </footer>
  );
};
