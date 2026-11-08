import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react'
import { insights } from '../data/insights'

export default function Insights() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Thought Leadership</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Insights, Analysis & <span className="gradient-text">Industry Research</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Expert analysis on enterprise AI adoption, cloud modernization, and digital transformation. All editorial content is clearly marked as illustrative sample material until formally approved.
        </p>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((article) => (
          <div key={article.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-[11px] font-medium text-cyan-400 border border-white/10">
                {article.category}
              </span>
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <div className="flex items-center space-x-4 text-xs text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-slate-400 text-xs leading-relaxed flex-grow">
                {article.summary}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  <span className="text-cyan-400 font-medium">{article.author.name}</span>
                </div>
                <Link
                  to="#"
                  className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center space-x-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder Disclaimer */}
      <div className="glass-panel p-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-amber-200 text-xs leading-relaxed mb-8">
        <span className="font-semibold text-amber-300">Editorial Note:</span> All insights and articles displayed are sample editorial content created for demonstration purposes. No claims of real publications or verified industry analysis are made. Editorial approval required before publishing.
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-navy-900 p-12 sm:p-16 border border-cyan-500/30 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Stay Updated on Enterprise AI & Cloud Strategy</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Subscribe to receive insights on digital transformation, enterprise AI architecture, and technology consulting best practices.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-cyan-400 text-navy-950 font-bold hover:bg-cyan-300 transition-colors text-sm shadow-lg shadow-cyan-400/25"
          >
            <span>Request Insights Newsletter</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  )
}
