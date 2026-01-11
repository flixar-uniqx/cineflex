
import React from 'react';

export const Documentation: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-20">
      <header className="space-y-4">
        <h1 className="text-5xl font-black tracking-tight">System <span className="text-sky-400">Architecture</span></h1>
        <p className="text-xl text-slate-400">A blueprint for an ultra-scalable, million-user content delivery platform.</p>
      </header>

      {/* 1. Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-sky-400 border-l-4 border-sky-400 pl-4 uppercase tracking-wider">1. High-Level Architecture</h2>
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4 text-slate-300 font-mono text-sm leading-relaxed">
          <p>[Client Tier]: Next.js (SSR/ISR) -> Cloudflare Global Edge</p>
          <p>[API Gateway]: Kong / Nginx (Auth, Rate Limiting, CORS)</p>
          <p>[Microservices]:</p>
          <ul className="pl-6 list-disc space-y-2">
            <li>Auth Service: JWT + RBAC, OAuth2 integration.</li>
            <li>Content Service: TMDb syncing, Media metadata (PostgreSQL).</li>
            <li>Search Service: ElasticSearch for real-time full-text indexing.</li>
            <li>Media Service: CDN management, download link protection.</li>
            <li>Notification Service: Kafka-driven update broadcasting.</li>
          </ul>
          <p>[Data Tier]: Sharded PostgreSQL (Metadata) + Redis (Session/Caching)</p>
        </div>
      </section>

      {/* 2. Database Schema */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-sky-400 border-l-4 border-sky-400 pl-4 uppercase tracking-wider">2. Database Schema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="font-bold mb-4 text-emerald-400">Table: media_content</h3>
            <ul className="text-xs space-y-2 text-slate-400 font-mono">
              <li>id (UUID) - Primary Key</li>
              <li>tmdb_id (INT) - Unique Index</li>
              <li>type (ENUM: movie, series)</li>
              <li>title (VARCHAR 512)</li>
              <li>year (INT)</li>
              <li>rating (DECIMAL)</li>
              <li>metadata (JSONB) - Casting, Director, Tags</li>
              <li>slug (VARCHAR 255) - SEO Index</li>
              <li>status (VARCHAR 32) - Approval Workflow</li>
            </ul>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="font-bold mb-4 text-emerald-400">Table: download_links</h3>
            <ul className="text-xs space-y-2 text-slate-400 font-mono">
              <li>id (UUID)</li>
              <li>content_id (FK -> media_content)</li>
              <li>quality_name (VARCHAR)</li>
              <li>file_size (BIGINT)</li>
              <li>link_type (ENUM)</li>
              <li>url (TEXT) - Encrypted</li>
              <li>access_count (BIGINT)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. API Endpoints */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-sky-400 border-l-4 border-sky-400 pl-4 uppercase tracking-wider">3. Primary API Endpoints</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm bg-slate-900 rounded-2xl overflow-hidden">
            <thead className="bg-slate-800 font-bold uppercase text-[10px] tracking-widest">
              <tr>
                <th className="p-4">Method</th>
                <th className="p-4">Endpoint</th>
                <th className="p-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-400 font-mono">
              <tr>
                <td className="p-4 text-emerald-400 font-bold">GET</td>
                <td className="p-4">/api/v1/media/:slug</td>
                <td className="p-4 text-[11px]">Retrieve full content details.</td>
              </tr>
              <tr>
                <td className="p-4 text-emerald-400 font-bold">GET</td>
                <td className="p-4">/api/v1/search?q=...</td>
                <td className="p-4 text-[11px]">ElasticSearch powered live search.</td>
              </tr>
              <tr>
                <td className="p-4 text-sky-400 font-bold">POST</td>
                <td className="p-4">/api/v1/admin/import</td>
                <td className="p-4 text-[11px]">Trigger TMDb bulk sync.</td>
              </tr>
              <tr>
                <td className="p-4 text-amber-400 font-bold">PATCH</td>
                <td className="p-4">/api/v1/admin/approve</td>
                <td className="p-4 text-[11px]">Finalize content in approval queue.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Performance & Security */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Performance Strategy</h2>
          <ul className="space-y-3 text-sm text-slate-400 list-inside list-disc">
            <li><span className="text-slate-200">Incremental Static Regeneration (ISR):</span> Updates pages in background every 60s for zero-latency user experience.</li>
            <li><span className="text-slate-200">Edge Caching:</span> Cloudflare Workers to intercept requests and serve from closest PoP.</li>
            <li><span className="text-slate-200">Brotli Compression:</span> 20% smaller payload than Gzip.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Security Policies</h2>
          <ul className="space-y-3 text-sm text-slate-400 list-inside list-disc">
            <li><span className="text-slate-200">RBAC:</span> Strict Owner/Super Admin/Admin roles enforced at API level.</li>
            <li><span className="text-slate-200">Rate Limiting:</span> 100 req/min for public search; 10 req/min for login.</li>
            <li><span className="text-slate-200">WAF:</span> Automated SQLi and XSS protection via Cloudflare WAF.</li>
          </ul>
        </div>
      </section>

      {/* 5. Roadmap */}
      <section className="space-y-8 bg-gradient-to-br from-slate-900 to-indigo-950/20 p-12 rounded-3xl border border-sky-500/20">
        <h2 className="text-3xl font-black text-center">Future Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
             <div className="text-sky-400 text-2xl font-bold">Q2 2024</div>
             <p className="text-sm text-slate-400">Native Android/iOS apps with offline download support.</p>
          </div>
          <div className="space-y-2">
             <div className="text-sky-400 text-2xl font-bold">Q4 2024</div>
             <p className="text-sm text-slate-400">P2P decentralized storage integration for high-availability.</p>
          </div>
          <div className="space-y-2">
             <div className="text-sky-400 text-2xl font-bold">2025+</div>
             <p className="text-sm text-slate-400">AI-driven personalized recommendation engine (CineSense AI).</p>
          </div>
        </div>
      </section>
    </div>
  );
};
