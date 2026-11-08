import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Cpu, ShieldCheck, Zap, Globe, CheckCircle2, Award, Users } from 'lucide-react'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { insights } from '../data/insights'
import AIArchitectureDiagram from '../components/AIArchitectureDiagram'

export default function Home() {
  return (
    <div className="space-y-24 pb-20">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Enterprise Technology & AI Consulting</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Engineering <span className="gradient-text">Intelligent Enterprises</span>. Accelerating Digital Transformation.
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Upskills.in partners with global enterprises to architect scalable cloud systems, deploy generative and agentic AI solutions, and modernize core software engineering for sustainable business growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-900 border border-white/10 text-slate-200 font-semibold hover:bg-navy-800 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  Explore Our Solutions
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 text-left">
                <div>
                  <div className="text-2xl font-bold text-white font-mono">100%</div>
                  <div className="text-xs text-slate-400 mt-1">Enterprise Focus</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-mono">GenAI & RAG</div>
                  <div className="text-xs text-slate-400 mt-1">Advanced AI Solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-mono">Global</div>
                  <div className="text-xs text-slate-400 mt-1">Delivery Excellence</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-400 opacity-30 blur-xl"></div>
                <div className="relative glass-panel rounded-3xl p-3 overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=900&fit=crop&crop=center"
                    alt="Enterprise Technology Team"
                    className="rounded-2xl object-cover w-full h-[450px]"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-950/80 backdrop-blur-md border border-white/10 flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">AI & Cloud Transformation</div>
                      <div className="text-slate-400 text-xs">Architecting resilient enterprise futures</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Why Upskills.in</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Engineering Excellence for Complex Enterprises
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We combine rigorous enterprise architecture with cutting-edge artificial intelligence to solve your most challenging technical and operational hurdles.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-navy-900/60 border border-white/5 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-base">Enterprise Security & Governance</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Rigorous data protection, secure RAG pipelines, and responsible AI guardrails built for regulated industries.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-navy-900/60 border border-white/5 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-base">Speed & Scalability</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Cloud-native architectures and autonomous agentic workflows designed to scale instantly with enterprise demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Our Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Enterprise Technology Services</h2>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <div key={service.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col">
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

              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm font-semibold text-cyan-400 hover:text-white flex items-center space-x-2"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI & GenAI Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 via-blue-950 to-navy-950 border border-cyan-500/30 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>AI & Generative AI Practice</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Transforming Enterprises with <span className="gradient-text">Agentic AI & RAG</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Move beyond static LLMs. Upskills.in builds secure, private enterprise AI systems, intelligent knowledge assistants, and autonomous multi-agent workflows that integrate directly with your core ERP and CRM platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs">Private Enterprise RAG Architecture</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs">Autonomous Agentic Workflows</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs">Enterprise Governance & Guardrails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs">LLM Orchestration & Fine-Tuning</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/ai"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 text-navy-950 font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25 text-sm"
                >
                  <span>Explore AI Solutions & Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-white font-bold text-lg">Key AI Capabilities</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-navy-900/80 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-200 text-xs font-medium">Enterprise Knowledge Assistants</span>
                    <span className="text-cyan-400 text-xs font-mono">Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-900/80 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-200 text-xs font-medium">Intelligent Document Processing</span>
                    <span className="text-cyan-400 text-xs font-mono">Automated</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-900/80 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-200 text-xs font-medium">Multi-Agent Task Orchestration</span>
                    <span className="text-cyan-400 text-xs font-mono">Scalable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Architecture Diagram Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIArchitectureDiagram />
      </section>

      {/* Industries Served */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Industry Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Sectors We Empower</h2>
          <p className="text-slate-400 text-sm mt-2">
            Tailored technology consulting and AI solutions designed for the unique regulatory and operational needs of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div key={ind.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="h-40 overflow-hidden relative">
                <img src={ind.image} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg">
                  {ind.title}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-slate-400 text-xs leading-relaxed">
                  {ind.description}
                </p>
                <div className="pt-2">
                  <Link to="/industries" className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center space-x-1">
                    <span>Learn more about {ind.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section: CEO Sapna Singh */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

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
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wide">
                <Users className="w-3.5 h-3.5" />
                <span>Executive Leadership</span>
              </div>

              <h2 className="text-3xl font-bold text-white">
                Led by Visionary Expertise & Enterprise Commitment
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Under the leadership of CEO **Sapna Singh**, Upskills.in is dedicated to empowering enterprises through strategic technology consulting, advanced artificial intelligence, and rigorous engineering standards. Our philosophy centers on long-term client partnerships, measurable business outcomes, and responsible innovation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-navy-900/60 border border-white/5 space-y-1">
                  <div className="text-white font-semibold text-sm">Strategic Vision</div>
                  <p className="text-slate-400 text-xs">Aligning advanced cloud and AI architectures with core executive business goals.</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/60 border border-white/5 space-y-1">
                  <div className="text-white font-semibold text-sm">Client Success</div>
                  <p className="text-slate-400 text-xs">Uncompromising focus on enterprise reliability, scalability, and ROI.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-white"
                >
                  <span>Read more about our leadership & philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Thought Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Latest Insights & Research</h2>
          </div>
          <Link
            to="/insights"
            className="mt-4 md:mt-0 text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((article) => (
            <div key={article.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-[11px] font-medium text-cyan-400 border border-white/10">
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <div className="text-xs text-slate-500 font-mono">{article.date} • {article.readTime}</div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 flex-grow">
                  {article.summary}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <Link to={`/insights`} className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center space-x-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-navy-900 p-8 sm:p-14 border border-cyan-500/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Start Your Transformation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Accelerate Your Enterprise Technology & AI Journey?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connect with our enterprise architects and AI consultants today. Let's discuss how Upskills.in can deliver scalable business value for your organization.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 text-navy-950 font-bold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/30 text-sm flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
