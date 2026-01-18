import Link from 'next/link'

export const metadata = {
  title: 'Learners - PathSync Career Infrastructure',
  description: 'Structured learning paths with mentor validation and employment readiness tracking',
}

export default function LearnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Structured Career Development
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Progress through validated learning paths with clear milestones, mentor guidance, 
              and evidence-based skill tracking. Build employment readiness through structured progression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/access"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                Start Assessment
              </Link>
              <Link 
                href="/learning-hub/dashboard"
                className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                View Learning Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}