import { Link } from 'react-router-dom'
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react'
import { industries } from '../data/industries'

export default function Industries() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5" />
          <span>Industry Specialization</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technology Solutions for <span className="gradient-text">Diverse Sectors</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          We understand the unique regulatory, operational, and technological requirements of different industries. Our solutions are tailored to deliver measurable value within sector-specific constraints.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((ind) => (
          <div key={ind.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col">
            <div className="h-52 overflow-hidden relative">
              <img src={ind.image} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 right-6 text-white font-bold text-xl">
                {ind.title}
              </h3>
            </div>

            <div className="p-7 space-y-5 flex-grow flex flex-col">
              <p className="text-slate-400 text-sm leading-relaxed">
                {ind.description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Typical Solutions Deployed</div>
                <div className="space-y-2">
                  {ind.solutions.map((sol, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder Disclaimer */}
      <div className="glass-panel p-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-amber-200 text-xs leading-relaxed">
        <span className="font-semibold text-amber-300">Placeholder Notice:</span> Industry-specific project experience and client examples are clearly marked as illustrative. Verified customer information and sector-specific case studies will be added once approved.
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-navy-900 p-12 sm:p-16 border border-cyan-500/30 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Is Your Industry Not Listed?</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Our enterprise architecture and AI consulting practices address complex technology needs across all sectors. Reach out to discuss how we can tailor our solutions to your specific industry requirements.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-cyan-400 text-navy-950 font-bold hover:bg-cyan-300 transition-colors text-sm shadow-lg shadow-cyan-400/25"
          >
            <span>Request Industry Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  )
}
