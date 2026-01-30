'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { UserGroupIcon, ClipboardDocumentCheckIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function MentorsPage() {
  const benefits = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'Standardized Review Frameworks',
      description: 'Clear competency criteria and assessment protocols. No guesswork—just structured evaluation standards.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Professional Development',
      description: 'Build your mentorship portfolio. Documented validation records demonstrate your expertise and impact.'
    },
    {
      icon: UserGroupIcon,
      title: 'Flexible Commitment',
      description: 'Review work on your schedule. Commit 2-10 hours monthly based on your availability.'
    },
    {
      icon: TrophyIcon,
      title: 'Industry Recognition',
      description: 'Your validations carry weight. Employers trust PathSync mentor endorsements as proof of competency.'
    }
  ]

  const mentorProcess = [
    {
      title: 'Apply as a Mentor',
      description: 'Share your expertise, LinkedIn/GitHub, and availability. We verify professional experience.',
      color: 'blue'
    },
    {
      title: 'Choose Your Focus Areas',
      description: 'Select technologies and roles you can validate (e.g., DevOps, Python, Cloud Architecture).',
      color: 'green'
    },
    {
      title: 'Review Learner Work',
      description: 'Assess submitted labs and projects using our competency frameworks.',
      color: 'purple'
    },
    {
      title: 'Provide Actionable Feedback',
      description: 'Validate competency or guide improvement. Your feedback shapes careers.',
      color: 'blue'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-green-600/10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Skill Validation Network
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Join experienced professionals shaping the next generation of talent. Review learner work,
                validate competencies, and guide career progression through structured mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/career-incubator/become-a-mentor"
                  className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  Become a Mentor
                </Link>
                <Link
                  href="/platform"
                  className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  How It Works
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
                <h3 className="text-xl font-bold mb-6">Your Mentor Dashboard</h3>
                <div className="space-y-4">
                  <div className="bg-green-600 p-4 rounded-lg">
                    <div className="text-3xl font-bold mb-1">24</div>
                    <div className="text-sm text-green-100">Learners Validated</div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="text-2xl font-bold mb-1">3 Pending Reviews</div>
                    <div className="text-sm text-slate-400">DevOps Path · Step 5</div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-semibold mb-1">This Month</div>
                      <div className="text-sm text-slate-400">6.5 hours contributed</div>
                    </div>
                    <div className="text-green-400 font-bold">↗ 15%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Become a Mentor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Become a PathSync Mentor?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              More than teaching—you&apos;re building career infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Mentorship Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Mentor Process
            </h2>
            <p className="text-xl text-slate-600">
              Four simple steps to start validating learner competency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-green-600 transition-colors"
              >
                <div className="text-6xl font-bold text-green-100 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Review */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                What You&apos;ll Review
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Learners submit hands-on work at each step of their career path. You assess competency
                using our structured frameworks—no vague &quot;looks good&quot; feedback.
              </p>
              <ul className="space-y-4">
                {[
                  { type: 'Lab Submissions', desc: 'Practical exercises demonstrating technical skills' },
                  { type: 'Project Work', desc: 'Real-world applications of concepts learned' },
                  { type: 'Code Reviews', desc: 'Quality, readability, and best practices assessment' },
                  { type: 'Documentation', desc: 'Technical writing and communication evaluation' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">{item.type}</div>
                      <div className="text-slate-600">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Example Focus Areas</h3>
              <div className="space-y-3">
                {[
                  'DevOps & CI/CD',
                  'Cloud Architecture (AWS, Azure, GCP)',
                  'Python/JavaScript Development',
                  'Data Engineering & Analytics',
                  'Security & Compliance',
                  'Frontend Frameworks (React, Vue)',
                  'Database Design & Optimization',
                  'System Design & Architecture'
                ].map((area, index) => (
                  <div key={index} className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Requirements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mentor Requirements
            </h2>
            <p className="text-xl text-slate-600">
              We look for professionals who can validate technical competency with authority
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
            <ul className="space-y-4">
              {[
                '3+ years professional experience in your technical domain',
                'Active LinkedIn or GitHub profile demonstrating expertise',
                'Ability to provide constructive, professional feedback',
                '2-10 hours monthly availability for reviewing submissions',
                'Commitment to PathSync competency assessment standards',
                'Strong communication skills (written feedback is critical)'
              ].map((req, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                  </div>
                  <span className="text-slate-700 text-lg">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Shape the Next Generation of Tech Talent?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our mentor network and help learners bridge the gap between learning and employment readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/career-incubator/become-a-mentor"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Apply to Become a Mentor
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
