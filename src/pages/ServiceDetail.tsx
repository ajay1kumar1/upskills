import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react'
import { getServiceBySlug } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

      {/* Back button */}
      <div>
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Section of Service */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-slate-300 text-base leading-relaxed">
            {service.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all flex items-center space-x-2"
            >
              <span>Discuss This Solution with Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-3 shadow-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Challenges & Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">

        {/* Business Challenges Addressed */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center space-x-3 text-red-400">
            <ShieldAlert className="w-6 h-6" />
            <h3 className="text-xl font-bold text-white">Business Challenges Addressed</h3>
          </div>
          <ul className="space-y-4">
            {service.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-slate-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                <span className="leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Measurable Business Benefits */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center space-x-3 text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
            <h3 className="text-xl font-bold text-white">Measurable Business Benefits</h3>
          </div>
          <ul className="space-y-4">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-slate-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Technical Rigor</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Core Technical Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-navy-900/60 border border-white/5 space-y-2">
              <div className="text-cyan-400 font-mono text-xs font-semibold">0{idx + 1}.</div>
              <h4 className="text-white font-semibold text-base">{cap}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-gradient-to-r from-navy-900 via-blue-950 to-navy-900 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to implement {service.title} in your organization?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Contact our enterprise consulting team to schedule an architectural assessment and explore custom implementation roadmaps.
        </p>
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-cyan-400 text-navy-950 font-bold hover:bg-cyan-300 transition-colors text-sm shadow-lg shadow-cyan-400/25"
          >
            <span>Talk to an Enterprise Architect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  )
}
