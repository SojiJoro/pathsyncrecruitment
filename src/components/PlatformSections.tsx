"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlatformSections() {
  const sections = [
    {
      title: "Learners",
      subtitle: "Structured Career Development",
      description: "Progress through validated learning paths with clear milestones, hands-on practice, and mentor guidance.",
      features: [
        "Modular skill-based curriculum",
        "Visual progress tracking",
        "Real-world project portfolio",
        "Mentor feedback integration",
        "Employment readiness metrics"
      ],
      cta: "Start Learning Path",
      href: "/learners",
      color: "blue",
      styles: {
        iconBg: "bg-blue-100",
        iconInner: "bg-blue-500",
        subtitle: "text-blue-600",
        bullet: "bg-blue-500",
        button: "bg-blue-600 hover:bg-blue-700"
      }
    },
    {
      title: "Mentors",
      subtitle: "Skill Validation Network",
      description: "Review learner work, validate competencies, and guide career progression through structured assessment protocols.",
      features: [
        "Standardized review frameworks",
        "Competency assessment tools",
        "Progress tracking dashboards",
        "Quality assurance metrics",
        "Professional development credits"
      ],
      cta: "Join Mentor Network",
      href: "/mentors",
      color: "green",
      styles: {
        iconBg: "bg-green-100",
        iconInner: "bg-green-500",
        subtitle: "text-green-600",
        bullet: "bg-green-500",
        button: "bg-green-600 hover:bg-green-700"
      }
    },
    {
      title: "Employers",
      subtitle: "Verified Talent Access",
      description: "Access pre-validated candidates with proven skills, mentor endorsements, and documented project experience.",
      features: [
        "Skills-verified candidate pools",
        "Mentor validation reports",
        "Portfolio-based assessment",
        "Competency matching algorithms",
        "Reduced hiring risk metrics"
      ],
      cta: "Access Talent Pool",
      href: "/employers",
      color: "purple",
      styles: {
        iconBg: "bg-purple-100",
        iconInner: "bg-purple-500",
        subtitle: "text-purple-600",
        bullet: "bg-purple-500",
        button: "bg-purple-600 hover:bg-purple-700"
      }
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Platform Architecture
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three interconnected systems that create a comprehensive career infrastructure platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-xl ${section.styles.iconBg} flex items-center justify-center mb-6`}>
                <div className={`w-8 h-8 rounded-lg ${section.styles.iconInner}`} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {section.title}
              </h3>

              <p className={`${section.styles.subtitle} font-semibold mb-4`}>
                {section.subtitle}
              </p>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {section.description}
              </p>

              <ul className="space-y-3 mb-8">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full ${section.styles.bullet} mt-2 mr-3 flex-shrink-0`} />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={section.href}
                className={`block w-full text-center ${section.styles.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
              >
                {section.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}