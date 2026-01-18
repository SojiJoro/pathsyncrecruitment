"use client"
import { motion } from 'framer-motion'

export default function SystemArchitecture() {
  const features = [
    {
      title: "Neurodivergent-Friendly Design",
      description: "Clear visual hierarchies, minimal cognitive load, and structured task breakdown",
      icon: "🧠"
    },
    {
      title: "Evidence-Based Tracking", 
      description: "Quantifiable skill progression with mentor validation and portfolio evidence",
      icon: "📊"
    },
    {
      title: "Modular Learning Paths",
      description: "Bite-sized components with clear prerequisites and completion criteria",
      icon: "🔗"
    },
    {
      title: "Mentor Validation Network",
      description: "Professional oversight with standardized assessment protocols",
      icon: "✓"
    },
    {
      title: "Employer Integration",
      description: "Direct access to verified talent pools with competency matching",
      icon: "🎯"
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture supporting thousands of concurrent learners",
      icon: "⚡"
    }
  ]

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical Infrastructure
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Built for scale, accessibility, and measurable outcomes. Our platform differentiates through structure and function.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* System Flow Diagram */}
        <motion.div
          className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Platform Data Flow</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Learning Data", desc: "Progress, completions, time tracking" },
              { label: "Validation Data", desc: "Mentor reviews, skill confirmations" },
              { label: "Portfolio Data", desc: "Project outputs, code repositories" },
              { label: "Employment Data", desc: "Readiness scores, placement outcomes" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 rounded-lg p-4 mb-3">
                  <div className="w-8 h-8 bg-white rounded mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">{item.label}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-slate-700 rounded-lg px-6 py-3">
              <span className="text-sm font-medium">Real-time Analytics & Matching Engine</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}