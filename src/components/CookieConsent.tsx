import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consented = localStorage.getItem('upskills_cookie_consent')
    if (!consented) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('upskills_cookie_consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:max-w-md z-50 bg-navy-900/95 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-xl text-slate-300 text-xs flex flex-col space-y-3 animate-fadeIn">
      <div className="font-semibold text-white text-sm">Privacy & Cookie Notice</div>
      <p className="leading-relaxed">
        We use cookies and analytics to ensure you get the best experience on Upskills.in, analyze enterprise traffic, and secure our AI consulting services.
      </p>
      <div className="flex space-x-3 pt-1">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Accept All
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-navy-800 text-slate-300 rounded-xl font-medium hover:bg-navy-700 transition-colors"
        >
          Manage Preferences
        </button>
      </div>
    </div>
  )
}
