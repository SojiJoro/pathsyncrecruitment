"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-slate-900 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Career Infrastructure
                <span className="block text-blue-400">Platform</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Structured learning paths, mentor validation, and evidence-based skill tracking. 
                Transform potential into verified employment readiness.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/learners" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                Start Learning Path
              </Link>
              <Link 
                href="/platform" 
                className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                View Platform
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Progression Visualization */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-lg font-semibold mb-6 text-center">Progression Model</h3>
              <div className="space-y-4">
                {[
                  { stage: 'Learn', status: 'complete', desc: 'Structured curriculum' },
                  { stage: 'Practice', status: 'complete', desc: 'Real-world tasks' },
                  { stage: 'Validate', status: 'active', desc: 'Mentor review' },
                  { stage: 'Deploy', status: 'pending', desc: 'Employment ready' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      item.status === 'complete' ? 'bg-green-600' :
                      item.status === 'active' ? 'bg-blue-600' :
                      'bg-slate-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.stage}</div>
                      <div className="text-sm text-slate-400">{item.desc}</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'complete' ? 'bg-green-400' :
                      item.status === 'active' ? 'bg-blue-400 animate-pulse' :
                      'bg-slate-500'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}