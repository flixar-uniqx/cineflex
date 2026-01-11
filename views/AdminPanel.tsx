
import React, { useState } from 'react';
import { DEFAULT_CONFIG } from '../constants';

export const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'content' | 'settings' | 'queue'>('content');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a secure API call.
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Unauthorized access. IP logged.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="w-full max-w-md glass p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-sky-400">Secure Access</h2>
            <p className="text-slate-500 text-sm">CineCore Internal Management System</p>
          </div>
          <div className="space-y-4">
            <input 
              type="password" 
              placeholder="Authorization Key" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all"
            />
            <button 
              type="submit" 
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-sky-500/20"
            >
              AUTHENTICATE
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-600 uppercase tracking-widest">
            Protected by CineCore RBAC Protocol
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-slate-800 p-6 space-y-8 glass">
        <h2 className="text-xl font-bold uppercase tracking-widest text-sky-400">Admin Panel</h2>
        <nav className="space-y-4">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all ${activeTab === 'content' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Manage Content
          </button>
          <button 
            onClick={() => setActiveTab('queue')}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all ${activeTab === 'queue' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Approval Queue (0)
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all ${activeTab === 'settings' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Site Settings
          </button>
          <div className="pt-8 border-t border-slate-800">
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="w-full text-left px-4 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-all text-xs font-bold"
            >
              LOGOUT
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto">
        {activeTab === 'content' && <ContentManager />}
        {activeTab === 'settings' && <SiteSettings />}
        {activeTab === 'queue' && <ApprovalQueue />}
      </main>
    </div>
  );
};

const ContentManager = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black">Content Manager</h1>
          <p className="text-slate-500">Import from TMDb or add manually.</p>
        </div>
        <button className="bg-sky-500 px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform">+ Add New Content</button>
      </header>

      <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
        <h3 className="font-bold mb-6 flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse"></span>
          TMDb Quick Import
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Search TMDb for Movie/Series title..." 
            className="flex-grow bg-slate-950 border border-slate-800 p-4 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
          />
          <button className="bg-slate-800 px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all">Search TMDb</button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Recent Entries</h3>
        <div className="border border-slate-800 rounded-2xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest font-bold">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Type</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-4 font-bold">Inception</td>
                <td className="p-4">Movie</td>
                <td className="p-4"><span className="text-emerald-400">Approved</span></td>
                <td className="p-4 text-slate-500">2024-01-01</td>
                <td className="p-4"><button className="text-sky-400 hover:underline">Edit</button></td>
              </tr>
              <tr>
                <td className="p-4 font-bold">The Mandalorian</td>
                <td className="p-4">Series</td>
                <td className="p-4"><span className="text-emerald-400">Approved</span></td>
                <td className="p-4 text-slate-500">2024-02-01</td>
                <td className="p-4"><button className="text-sky-400 hover:underline">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ApprovalQueue = () => (
  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
     <h1 className="text-3xl font-black">Approval Queue</h1>
     <p className="text-slate-500">Entries submitted by Admins waiting for review.</p>
     <div className="p-12 border-2 border-dashed border-slate-800 rounded-3xl text-center text-slate-600">
        All pending items have been cleared.
     </div>
  </div>
);

const SiteSettings = () => (
  <div className="space-y-12 animate-in fade-in duration-500">
    <h1 className="text-3xl font-black">Platform Configuration</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Website Name</label>
        <input defaultValue={DEFAULT_CONFIG.name} className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-sky-500" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Support Email</label>
        <input defaultValue={DEFAULT_CONFIG.contactEmail} className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-sky-500" />
      </div>
      <div className="col-span-1 md:col-span-2 space-y-2">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Disclaimer Text</label>
        <textarea rows={4} defaultValue={DEFAULT_CONFIG.disclaimer} className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-sky-500" />
      </div>
    </div>
    <button className="bg-sky-500 px-8 py-4 rounded-xl font-bold text-white shadow-xl hover:bg-sky-400 transition-all">Save Global Settings</button>
  </div>
);
