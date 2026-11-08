import { Link } from 'react-router-dom'
import { Sparkles, CheckCircle2, ArrowRight, Bot, Layers, ShieldCheck, Database, Cpu } from 'lucide-react'
import AIArchitectureDiagram from '../components/AIArchitectureDiagram'

export default function AI() {
  const aiCapabilities = [
    {
      title: "Enterprise Generative AI",
      icon: Sparkles,
      description: "Secure, private LLM deployments with domain-specific fine-tuning for enterprise knowledge."
    },
    {
      title: "AI Agents & Agentic Workflows",
      icon: Bot,
      description: "Goal-oriented autonomous agents that execute multi-step business tasks with API integration."
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      icon: Layers,
      description: "High-performance vector search pipelines with secure ACL filtering for real-time knowledge grounding."
    },
    {
      title: "Enterprise Knowledge Assistants",
      icon: Database,
      description: "Context-aware assistants that process internal documents, emails, and enterprise data securely."
    },
    {
      title: "LLM Orchestration & Integration",
      icon: Cpu,
      description: "Multi-model routing, prompt engineering frameworks, and enterprise API orchestration layers."
    },
    {
      title: "AI Governance & Responsible AI",
      icon: ShieldCheck,
      description: "Comprehensive guardrails, data loss prevention, model evaluation, and compliance frameworks."
    }
  ]

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-900 via-blue-950 to-navy-950 border border-cyan-500/30 p-12 sm:p-20 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Upskills.in AI Practice</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Enterprise Generative AI & <span className="gradient-text">Agentic Solutions</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            Secure, scalable, and governed AI platforms designed for complex enterprise environments. From private knowledge assistants to autonomous multi-agent workflows, we architect AI solutions that integrate seamlessly with your core business systems.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-navy-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
            >
              Schedule AI Strategy Session
            </Link>
            <Link
              to="/services/ai-generative"
              className="px-8 py-4 rounded-xl bg-navy-900 border border-white/10 text-white font-semibold text-sm hover:bg-navy-800 transition-all"
            >
              Explore Generative AI Services
            </Link>
          </div>
        </div>
      </div>

      {/* Architecture Diagram */}
      <section>
        <AIArchitectureDiagram />
      </section>

      {/* AI Capabilities Grid */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Full-Stack AI</span>
          <h2 className="text-3xl font-bold text-white mt-2">Comprehensive Enterprise AI Capabilities</h2>
          <p className="text-slate-400 text-sm mt-2">
            End-to-end AI platforms encompassing strategy, architecture, development, governance, and continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {aiCapabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div key={idx} className="glass-panel p-7 rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-3 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Integration Section */}
      <section className="glass-panel p-10 sm:p-12 rounded-3xl border border-white/10 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-white">Integrating AI with Your Enterprise Systems</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our AI solutions seamlessly integrate with your existing enterprise infrastructure — ERP, CRM, data warehouses, and custom enterprise applications. We employ secure API gateways, event-driven architectures, and robust data isolation to ensure AI runs natively within your operational environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {[
            { label: "ERP & Finance Systems", icon: "🏦" },
            { label: "CRM & Marketing Stack", icon: "🎯" },
            { label: "Data Warehouse & BI", icon: "📊" },
            { label: "Custom Enterprise Apps", icon: "⚙️" }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-navy-900/80 border border-white/5 text-center space-y-2">
              <div className="text-3xl">{item.icon}</div>
              <div className="text-white font-semibold text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-navy-900 p-12 sm:p-16 border border-cyan-500/30 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Build Responsible AI That Drives Real Business Outcomes
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Don't just experiment with AI. Architect production-grade enterprise AI systems that scale securely, govern responsibly, and deliver measurable ROI.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-cyan-400 text-navy-950 font-bold hover:bg-cyan-300 transition-colors text-sm shadow-lg shadow-cyan-400/25"
            >
              <span>Talk to Our AI Architects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
