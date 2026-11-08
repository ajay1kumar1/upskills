import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-white">
                  <span className="text-cyan-400">U</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                UPSKILLS<span className="text-cyan-400">.IN</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Engineering Intelligent Enterprises. Upskills.in provides high-impact IT consulting, AI solutions, data engineering, and enterprise cloud architecture under the leadership of CEO Sapna Singh.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services/it-consulting" className="hover:text-cyan-400 transition-colors">IT Consulting & Architecture</Link></li>
              <li><Link to="/services/ai-generative" className="hover:text-cyan-400 transition-colors">Generative AI & LLMs</Link></li>
              <li><Link to="/services/agentic-ai" className="hover:text-cyan-400 transition-colors">Agentic AI & Automation</Link></li>
              <li><Link to="/services/cloud-architecture" className="hover:text-cyan-400 transition-colors">Cloud Architecture</Link></li>
              <li><Link to="/services/data-engineering" className="hover:text-cyan-400 transition-colors">Data Engineering</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors font-medium text-cyan-400 flex items-center space-x-1"><span>View All Services</span> <ArrowUpRight className="w-3.5 h-3.5" /></Link></li>
            </ul>
          </div>

          {/* Col 3: Company & AI */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Company & AI</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Upskills.in</Link></li>
              <li><Link to="/about#leadership" className="hover:text-cyan-400 transition-colors">Leadership (Sapna Singh, CEO)</Link></li>
              <li><Link to="/ai" className="hover:text-cyan-400 transition-colors text-cyan-300">Enterprise AI Spotlight</Link></li>
              <li><Link to="/industries" className="hover:text-cyan-400 transition-colors">Industries Served</Link></li>
              <li><Link to="/insights" className="hover:text-cyan-400 transition-colors">Insights & Research</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Information Placeholders */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Enterprise Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>contact@upskills.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>+1 (800) UPSKILLS (Placeholder)</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Enterprise Technology Center, Global Operations Placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Upskills.in. Led by Sapna Singh, CEO. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security & Responsible AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
