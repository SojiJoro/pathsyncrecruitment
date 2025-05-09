import { roles } from '@/data/roles'
import { notFound } from 'next/navigation'
import { FaGraduationCap, FaStar, FaMedal } from 'react-icons/fa'

export default function RolePage({ params }: { params: { role: string } }) {
  const role = roles.find(r => r.slug === params.role)

  if (!role) return notFound()

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-12">

      {/* Header */}
      <header className="bg-teal-700 text-white p-8 rounded-lg text-center shadow-md">
        <h1 className="text-4xl font-bold mb-2">{role.title}</h1>
        <p className="text-lg">{role.averageSalary}</p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {role.badges.map((badge, index) => (
            <span key={index} className="bg-white text-teal-700 px-3 py-1 text-xs rounded-full font-semibold shadow">
              {badge}
            </span>
          ))}
        </div>
      </header>

      {/* Key Skills */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Skills</h2>
        <div className="flex flex-wrap gap-3">
          {role.skills.map(skill => (
            <span key={skill} className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      {role.certifications.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Certifications</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {role.certifications.map(cert => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Learning Path */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Step-by-Step Learning Path</h2>
        <ol className="space-y-6">
          {role.learningPath.map((step, index) => (
            <li key={index} className="flex items-start gap-4">
              <FaGraduationCap className="text-teal-600 mt-1 text-lg" />
              <span className="text-gray-700 text-lg">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Support section */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-inner text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help Landing Your Role?</h2>
        <p className="text-gray-700 mb-6">
          We offer free CV reviews, interview coaching, training, ebooks, and mentorship.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="bg-teal-600 text-white px-6 py-3 rounded font-semibold hover:bg-teal-700 transition">
            Book a Free Session
          </a>
          <a href="/contact" className="bg-white text-teal-600 border border-teal-600 px-6 py-3 rounded font-semibold hover:bg-teal-50 transition">
            Book Training
          </a>
        </div>
      </section>

    </main>
  )
}
