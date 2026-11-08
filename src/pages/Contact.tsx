import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Business email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid business email'
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Enterprise Contact</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let's Discuss Your <span className="gradient-text">Technology Strategy</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Contact UPSkills.in today to schedule a consultation with our enterprise architects and AI consultants. We're here to help you navigate complex digital transformation challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Demo Message Submitted</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto">
                This is a demo form submission. Your message has not been sent. To connect this form to your email or CRM, integrate with a backend API endpoint (e.g., AWS Lambda, Node.js Express, or services like Formspree, Netlify Forms).
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' }) }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500 text-navy-950 font-semibold text-sm hover:bg-cyan-400 transition-colors"
              >
                Submit Another Message
              </button>
            </div>
          ) : (
            <>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Send Us a Message</h3>
                <p className="text-slate-400 text-xs">Required fields are marked with an asterisk (*).</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-400 text-xs flex items-center space-x-1"><AlertCircle className="w-3.5 h-3.5" /><span>{errors.name}</span></p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs flex items-center space-x-1"><AlertCircle className="w-3.5 h-3.5" /><span>{errors.email}</span></p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900 border ${errors.company ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm`}
                      placeholder="Your organization"
                    />
                    {errors.company && <p className="text-red-400 text-xs flex items-center space-x-1"><AlertCircle className="w-3.5 h-3.5" /><span>{errors.company}</span></p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm"
                      placeholder="+1 (XXX) XXX-XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Service of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="it-consulting">IT Consulting & Enterprise Architecture</option>
                    <option value="ai-generative">Artificial Intelligence & Generative AI</option>
                    <option value="agentic-ai">Agentic AI & Intelligent Automation</option>
                    <option value="cloud-architecture">Cloud Architecture & Migration</option>
                    <option value="digital-transformation">Digital Transformation Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm`}
                    placeholder="Describe your business challenge or project requirements..."
                  />
                  {errors.message && <p className="text-red-400 text-xs flex items-center space-x-1"><AlertCircle className="w-3.5 h-3.5" /><span>{errors.message}</span></p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-slate-500 text-center pt-2">
                  By submitting this form, you consent to Upskills.in contacting you regarding your inquiry. Privacy policy applies.
                </p>
              </form>
            </>
          )}
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Connect with Upskills.in</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our enterprise consulting team is ready to help you architect your next digital transformation initiative.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Email</div>
                  <div className="text-sm">contact@upskills.in (Placeholder)</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Phone</div>
                  <div className="text-sm">+1 (800) UPSKILLS (Placeholder)</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Location</div>
                  <div className="text-sm">Enterprise Technology Center, Global Operations (Placeholder Address)</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-300">
                <Clock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Business Hours</div>
                  <div className="text-sm">Mon–Fri, 9:00 AM – 6:00 PM (IST)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">Direct CEO Line</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              For strategic partnership inquiries, enterprise architecture assessments, or C-level engagements, contact the office of Sapna Singh, CEO.
            </p>
            <p className="text-cyan-400 font-mono text-xs">ceo@upskills.in (Placeholder)</p>
          </div>
        </div>

      </div>

    </div>
  )
}
