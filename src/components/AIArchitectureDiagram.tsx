import { Database, Server, Cpu, Bot, Layers, ShieldCheck, ArrowRight } from 'lucide-react'

export default function AIArchitectureDiagram() {
  const steps = [
    {
      title: "Data Sources",
      desc: "CRMs, ERPs, Documents, Databases & APIs",
      icon: Database,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Data Ingestion & ETL",
      desc: "Secure pipelines & automated document parsing",
      icon: Server,
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Embeddings & Vector DB",
      desc: "High-performance semantic vector index",
      icon: Layers,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "RAG & Knowledge Layer",
      desc: "Contextual grounding & secure ACL filtering",
      icon: ShieldCheck,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Foundation LLMs",
      desc: "Private & public LLM orchestration",
      icon: Cpu,
      color: "from-blue-600 to-cyan-400"
    },
    {
      title: "AI Agents & Tools",
      desc: "Autonomous multi-step execution loops",
      icon: Bot,
      color: "from-cyan-400 to-emerald-400"
    }
  ]

  return (
    <div className="py-12 bg-navy-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Enterprise Blueprint</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Enterprise AI Architecture</h3>
        <p className="text-slate-400 text-sm mt-2">
          End-to-end secure pipeline from raw enterprise data sources to autonomous agentic execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon
          return (
            <div key={idx} className="glass-panel p-6 rounded-2xl relative group hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${step.color} p-3 flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
              </div>
              <h4 className="text-white font-semibold text-base mb-1 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                {step.desc}
              </p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 text-cyan-400 opacity-60">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
