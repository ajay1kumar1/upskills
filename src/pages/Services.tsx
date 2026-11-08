import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, CheckCircle2, ShieldAlert } from 'lucide-react'
import { services } from '../data/services'

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Artificial Intelligence', 'Strategic Consulting', 'Cloud & Infrastructure', 'Software Engineering', 'Data & Analytics']

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory)

  return (
    <div className="pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Enterprise Services</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive Technology & <span className="gradient-text">AI Solutions</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          From strategic IT architecture and private generative AI solutions to cloud modernization and specialized staffing, Upskills.in delivers enterprise value across the full digital lifecycle.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 font-semibold'
                : 'bg-navy-900 border border-white/10 text-slate-300 hover:text-white hover:bg-navy-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="glass-panel rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-[11px] font-medium text-cyan-400 border border-white/10">
                {service.category}
              </span>
            </div>

            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Key Capabilities</div>
                {service.capabilities.slice(0, 2).map((cap, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs font-bold text-cyan-400 hover:text-white flex items-center justify-between group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Capability Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
