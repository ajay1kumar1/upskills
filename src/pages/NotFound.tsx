import { Link } from 'react-router-dom'
import { Home, Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 px-4">
      <div className="text-center space-y-6 max-w-lg mx-auto">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-cyan-400 mx-auto flex items-center justify-center shadow-xl shadow-blue-500/20">
          <Sparkles className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-6xl font-extrabold text-white">404</h1>
        <h2 className="text-2xl font-bold text-slate-200">Page Not Found</h2>

        <p className="text-slate-400 text-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Please check the URL or return to our homepage to explore our enterprise technology and AI consulting services.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-navy-900 border border-white/10 text-white font-semibold text-sm hover:bg-navy-800 transition-colors"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
