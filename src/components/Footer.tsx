'use client'

import Link from 'next/link'

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-sm mr-3">
                PS
              </div>
              <span className="text-xl font-semibold">PathSync</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Career infrastructure platform providing structured learning, mentor validation, 
              and evidence-based employment readiness.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/learners" className="text-slate-300 hover:text-white transition">Learners</Link></li>
              <li><Link href="/mentors" className="text-slate-300 hover:text-white transition">Mentors</Link></li>
              <li><Link href="/employers" className="text-slate-300 hover:text-white transition">Employers</Link></li>
              <li><Link href="/platform" className="text-slate-300 hover:text-white transition">Architecture</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impact" className="text-slate-300 hover:text-white transition">Impact Report</Link></li>
              <li><Link href="/learning-hub/dashboard" className="text-slate-300 hover:text-white transition">Learning Hub</Link></li>
              <li><Link href="/access" className="text-slate-300 hover:text-white transition">Platform Access</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-white transition">Documentation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-300 hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-white transition">Privacy</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-white transition">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © {currentYear} PathSync Career Infrastructure Platform. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Operated by Joro Services Ltd. Company number: 14979338
              </p>
            </div>
            
            <div className="text-slate-400 text-sm">
              <span>Built for measurable career outcomes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
