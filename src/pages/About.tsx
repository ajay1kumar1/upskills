import { Link } from 'react-router-dom'
import { CheckCircle2, ShieldCheck, Users, Target, Compass, Award, ArrowRight } from 'lucide-react'

export default function About() {
  const values = [
    {
      title: "Innovation",
      desc: "Constantly pushing the boundaries of generative AI, cloud architecture, and digital engineering to keep our clients ahead of the curve."
    },
    {
      title: "Integrity",
      desc: "Uncompromising commitment to transparent consulting, rigorous security standards, and ethical AI practices."
    },
    {
      title: "Excellence",
      desc: "Delivering enterprise-grade solutions with meticulous attention to performance, resilience, and maintainability."
    },
    {
      title: "Collaboration",
      desc: "Working hand-in-hand with internal client teams to transfer knowledge and foster long-term organizational capability."
    },
    {
      title: "Customer Success",
      desc: "Measuring our performance strictly by the tangible business outcomes and ROI delivered to our enterprise partners."
    }
  ]

  return (
    <div className="pt-32 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>About Upskills.in</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Intelligent Enterprises for a <span className="gradient-text">Digital Future</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Upskills.in is a premier technology consulting firm specializing in enterprise architecture, artificial intelligence, cloud modernization, and end-to-end digital transformation.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            To empower global enterprises with resilient technology infrastructure, secure artificial intelligence solutions, and world-class engineering capabilities that drive measurable competitive advantage and operational excellence.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            To be the most trusted strategic technology partner for forward-thinking organizations, renowned for our technical rigor, ethical AI leadership, and unwavering commitment to client success.
          </p>
        </div>
      </div>

      {/* Leadership Profile: Sapna Singh */}
      <section id="leadership" className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-30 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-900 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=center"
                  alt="Sapna Singh, CEO of Upskills.in"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent">
                  <div className="text-white font-bold text-base">Sapna Singh</div>
                  <div className="text-cyan-400 text-xs font-medium">Chief Executive Officer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wide">
              <Users className="w-3.5 h-3.5" />
              <span>Leadership Profile</span>
            </div>

            <h2 className="text-3xl font-bold text-white">
              Sapna Singh, Chief Executive Officer
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              As the CEO and founder of Upskills.in, Sapna Singh leads the firm's strategic direction, enterprise consulting practices, and artificial intelligence initiatives. With extensive experience in enterprise technology transformation and digital architecture, she is dedicated to helping organizations navigate complex technology shifts with confidence.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Under her leadership, Upskills.in emphasizes a collaborative consulting model that bridges executive business strategy with deep technical implementation. Her focus areas include responsible AI governance, cloud modernization, and fostering high-performance engineering cultures.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:opacity-90 transition-opacity"
              >
                <span>Connect with CEO's Office</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Guiding Principles</span>
          <h2 className="text-3xl font-bold text-white mt-2">Our Core Values</h2>
          <p className="text-slate-400 text-sm mt-2">
            The fundamental beliefs and standards that guide every client engagement and architectural decision at Upskills.in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3 hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold font-mono">
                0{idx + 1}
              </div>
              <h3 className="text-white font-semibold text-lg">{val.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
