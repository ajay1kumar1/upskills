import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesDropdown(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-950/90 backdrop-blur-md border-b border-white/10 shadow-xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-bold text-xl text-white group-hover:bg-transparent transition-colors">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:text-white">U</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                UPSKILLS<span className="text-cyan-400">.IN</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-1">
                Enterprise Tech & AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                location.pathname === '/' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                location.pathname === '/about' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                to="/services"
                className={`text-sm font-medium transition-colors hover:text-cyan-400 flex items-center space-x-1 py-2 ${
                  location.pathname.startsWith('/services') ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-navy-900 border border-white/10 rounded-xl shadow-2xl p-3 grid grid-cols-1 gap-1 z-50 backdrop-blur-xl animate-fadeIn">
                  <Link to="/services" className="p-2 rounded-lg hover:bg-white/5 text-xs text-slate-300 hover:text-white font-medium">
                    All Services & Architecture
                  </Link>
                  <div className="h-px bg-white/10 my-1"></div>
                  <Link to="/services/it-consulting" className="p-2 rounded-lg hover:bg-white/5 text-xs text-slate-300 hover:text-cyan-400">
                    IT Consulting & Architecture
                  </Link>
                  <Link to="/services/ai-generative" className="p-2 rounded-lg hover:bg-white/5 text-xs text-slate-300 hover:text-cyan-400">
                    AI & Generative AI Solutions
                  </Link>
                  <Link to="/services/agentic-ai" className="p-2 rounded-lg hover:bg-white/5 text-xs text-slate-300 hover:text-cyan-400">
                    Agentic AI & Automation
                  </Link>
                  <Link to="/services/cloud-architecture" className="p-2 rounded-lg hover:bg-white/5 text-xs text-slate-300 hover:text-cyan-400">
                    Cloud Architecture & Migration
                  </Link>
                  <Link to="/services/data-engineering" className="p-2 rounded-lg hover:bg-white/5 text-xs text-slate-300 hover:text-cyan-400">
                    Data Engineering & Analytics
                  </Link>
                </div>
              )}
            </div>

            {/* AI Spotlight Page */}
            <Link
              to="/ai"
              className={`text-sm font-medium transition-colors hover:text-cyan-400 flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 ${
                location.pathname === '/ai' ? 'ring-2 ring-cyan-400/50 bg-cyan-500/20' : ''
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>AI Solutions</span>
            </Link>

            <Link
              to="/industries"
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                location.pathname === '/industries' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
              }`}
            >
              Industries
            </Link>

            <Link
              to="/insights"
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                location.pathname === '/insights' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
              }`}
            >
              Insights
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 group-hover:from-blue-600 group-hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-navy-950 rounded-[10px] group-hover:bg-opacity-0 flex items-center space-x-2">
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-900 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <Link to="/" className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400">Home</Link>
          <Link to="/about" className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400">About Us</Link>
          <Link to="/services" className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400">Services</Link>
          <Link to="/ai" className="flex items-center space-x-2 py-2 text-base font-medium text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI Solutions</span>
          </Link>
          <Link to="/industries" className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400">Industries</Link>
          <Link to="/insights" className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400">Insights</Link>
          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
