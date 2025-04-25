import type { Metadata } from 'next'
import Link from 'next/link'
import { roles } from '@/data/roles'
import { notFound } from 'next/navigation'
import LearningPathMap from '@/components/LearningPathMap'

// Generate static paths for all roles
export async function generateStaticParams() {
  return roles.map(role => ({ role: role.slug }))
}

// Generate dynamic metadata for each role
export async function generateMetadata(
  { params }: { params: { role: string } }
): Promise<Metadata> {
  const role = roles.find(r => r.slug === params.role)
  if (!role) {
    return { title: 'Role Not Found' }
  }
  return {
    title: `${role.title} • Pathsync Career Builder`,
    description: role.summary,
    openGraph: {
      title: role.title,
      description: role.summary,
      url: `https://pathsyncrecruitment.com/career-builder/${role.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: role.title,
      description: role.summary,
    },
  }
}

// Page component for a single role
export default function RolePage(props: any) {
  const { params } = props
  const role = roles.find((r) => r.slug === params.role)
  if (!role) {
    notFound()
  }

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link>{' > '}
        <Link href="/career-builder" className="hover:underline">Career Builder</Link>{' > '}
        <span>{role.title}</span>
      </nav>

      {/* Header */}
      <header className="bg-teal-700 text-white p-6 rounded-lg text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">{role.title}</h1>
        <p className="text-lg">Average Salary: {role.averageSalary}</p>
      </header>

      {/* Key Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Key Skills</h2>
        <div className="flex flex-wrap gap-2">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      {role.certifications.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3">Recommended Certifications</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {role.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Learning Path */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Learning Path</h2>
        <LearningPathMap steps={role.learningPath} />
      </section>

      {/* Help Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-inner space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Need Help With Your CV or Interview Prep?</h2>
        <p className="text-gray-700">
          We offer free CV reviews, interview coaching, role-specific training, ebooks, and mentorship to help you land your first tech role.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact" className="btn">
            Book a Free Session
          </Link>
          <Link href="/contact" className="btn">
            Book Training & Ebooks
          </Link>
        </div>
      </section>
    </main>
  )
}
