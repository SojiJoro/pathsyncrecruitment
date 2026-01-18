"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ImpactMetrics() {
  const metrics = [
    {
      value: "89%",
      label: "Skill Validation Accuracy",
      description: "Mentor assessments align with employer evaluations"
    },
    {
      value: "76%", 
      label: "Employment Placement Rate",
      description: "Learners achieving employment readiness within 6 months"
    },
    {
      value: "3.2x",
      label: "Faster Hiring Process",
      description: "Reduced time-to-hire through pre-validated candidates"
    },
    {
      value: "94%",
      label: "Learner Progression Rate", 
      description: "Completion rate for structured learning paths"
    }
  ]

  const outcomes = [
    {
      category: "Learning Effectiveness",
      metrics: [
        "Average skill acquisition: 12 weeks",
        "Mentor validation rate: 89%", 
        "Portfolio completion: 94%",
        "Peer collaboration: 78%"
      ]
    },
    {
      category: "Employment Outcomes",
      metrics: [
        "Job placement rate: 76%",
        "Salary improvement: 45%",
        "Role retention: 91%", 
        "Career progression: 68%"
      ]
    },
    {
      category: "Platform Efficiency",
      metrics: [
        "Hiring time reduction: 3.2x",
        "Assessment accuracy: 89%",
        "Employer satisfaction: 92%",
        "Mentor engagement: 85%"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Measurable Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Evidence-based outcomes demonstrating platform effectiveness and career progression success.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {metric.label}
                </h3>
                <p className="text-sm text-slate-600">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Outcomes */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                {outcome.category}
              </h3>
              <ul className="space-y-3">
                {outcome.metrics.map((metric, metricIndex) => (
                  <li key={metricIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    <span className="text-slate-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-slate-900 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Career Development?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join a platform that measures progress, validates skills, and delivers employment outcomes through structured career infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/learners"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Learning Path
            </Link>
            <Link 
              href="/impact"
              className="border border-slate-600 hover:border-slate-500 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Full Impact Report
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}