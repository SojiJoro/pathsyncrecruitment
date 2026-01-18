import Link from 'next/link'

export const metadata = {
  title: 'Mentors - PathSync Career Infrastructure',
  description: 'Professional skill validation network with standardized assessment protocols',
}

export default function MentorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Professional Skill Validation Network
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Review learner work, validate competencies, and guide career progression through 
              standardized assessment protocols. Shape the next generation of technical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/access"
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                Join Mentor Network
              </Link>
              <Link 
                href="/platform"
                className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                View Assessment Framework
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}