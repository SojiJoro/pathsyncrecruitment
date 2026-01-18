"use client"
import { motion } from 'framer-motion'

export default function ProgressionModel() {
  const stages = [
    {
      title: "Learn",
      description: "Structured curriculum with clear milestones",
      features: ["Modular learning paths", "Progress tracking", "Skill checkpoints"],
      color: "blue"
    },
    {
      title: "Practice", 
      description: "Real-world tasks and project work",
      features: ["Hands-on labs", "Portfolio building", "Technical challenges"],
      color: "purple"
    },
    {
      title: "Validate",
      description: "Mentor review and skill verification",
      features: ["Expert assessment", "Feedback loops", "Competency sign-off"],
      color: "green"
    },
    {
      title: "Deploy",
      description: "Employment readiness and opportunity access",
      features: ["Verified profiles", "Employer matching", "Career placement"],
      color: "orange"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Evidence-Based Progression Model
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Clear pathways from learning to employment readiness through structured validation and mentor oversight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 rounded-xl p-6 h-full border border-slate-200 hover:border-slate-300 transition-colors">
                <div className={`w-12 h-12 rounded-lg bg-${stage.color}-100 flex items-center justify-center mb-4`}>
                  <span className={`text-${stage.color}-600 font-bold text-lg`}>
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {stage.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {stage.description}
                </p>
                
                <ul className="space-y-2">
                  {stage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${stage.color}-500 mr-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connection Arrow */}
              {index < stages.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}