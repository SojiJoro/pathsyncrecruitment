'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircleIcon, AcademicCapIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function LearnersPage() {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Structured Learning Paths',
      description: 'Step-by-step curricula designed by industry experts. Each path breaks down complex roles into manageable, ordered steps.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Mentor Validation',
      description: 'Expert mentors review your work, validate competency, and provide actionable feedback at every checkpoint.'
    },
    {
      icon: ChartBarIcon,
      title: 'Progress Tracking',
      description: 'Visual dashboards show your journey from beginner to job-ready. See exactly what you&apos;ve mastered and what&apos;s next.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Employment Readiness',
      description: 'Documented evidence of validated skills that employers trust. Not self-reported claims, but proven capability.'
    }
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Choose Your Career Path',
      description: 'Browse structured paths for roles like DevOps Engineer, Data Analyst, Full Stack Developer, and more.',
      color: 'blue'
    },
    {
      step: '02',
      title: 'Learn Step-by-Step',
      description: 'Complete lessons, watch videos, and work through hands-on labs. Each step builds on the previous one.',
      color: 'green'
    },
    {
      step: '03',
      title: 'Get Mentor Validation',
      description: 'Submit your work for expert review. Mentors validate your understanding and provide professional feedback.',
      color: 'purple'
    },
    {
      step: '04',
      title: 'Build Your Portfolio',
      description: 'Documented progress becomes proof of capability. Show employers validated skills, not just certificates.',
      color: 'blue'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-blue-600/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Structured Career Development
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Progress through validated learning paths with clear milestones, mentor guidance,
                and evidence-based skill tracking. Build employment readiness through systematic progression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/learning-hub/dashboard"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  Browse Learning Paths
                </Link>
                <Link
                  href="/access"
                  className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Step 1: Foundations</div>
                      <div className="text-sm text-slate-400">Completed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-blue-600 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center animate-pulse">
                      <div className="w-6 h-6 text-white font-bold">2</div>
                    </div>
                    <div>
                      <div className="font-semibold">Step 2: Core Skills</div>
                      <div className="text-sm text-blue-200">In Progress</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg opacity-50">
                    <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center">
                      <div className="w-6 h-6 text-slate-400 font-bold">3</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-400">Step 3: Advanced</div>
                      <div className="text-sm text-slate-500">Locked</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Learners Choose PathSync
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Not just another tutorial platform. A complete career development infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Four clear stages from beginner to employment-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors">
                  <div className={`text-6xl font-bold text-${item.color}-100 mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                No More Fragmented Learning
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Traditional self-learning leaves you with scattered knowledge, unclear progression,
                and no way to prove your capability to employers.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                PathSync provides the structure, validation, and evidence that transforms learning
                into employment readiness.
              </p>
              <ul className="space-y-4">
                {[
                  'Clear progression from fundamentals to advanced skills',
                  'Mentor checkpoints ensure you truly understand',
                  'Build a portfolio of validated work',
                  'Neurodivergent-friendly design with explicit criteria'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Sample Career Paths</h3>
              <div className="space-y-4">
                {[
                  { name: 'DevOps Engineer', steps: 12, time: '6-9 months' },
                  { name: 'Full Stack Developer', steps: 15, time: '8-12 months' },
                  { name: 'Data Analyst', steps: 10, time: '5-7 months' },
                  { name: 'Cloud Security Engineer', steps: 14, time: '7-10 months' }
                ].map((path, index) => (
                  <div key={index} className="bg-slate-800 p-4 rounded-lg">
                    <div className="font-semibold mb-1">{path.name}</div>
                    <div className="text-sm text-slate-400">
                      {path.steps} steps · {path.time} typical completion
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/learning-hub/dashboard"
                className="block mt-6 bg-blue-600 hover:bg-blue-700 text-center px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse All Paths
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Structured Career Development?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join learners building evidence-based career progression through validated skill development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learning-hub/dashboard"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Explore Learning Paths
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
