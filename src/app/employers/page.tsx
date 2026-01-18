import Link from 'next/link'

export const metadata = {
  title: 'Employers - PathSync Career Infrastructure',
  description: 'Access pre-validated candidates with proven skills and mentor endorsements',
}

export default function EmployersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Verified Talent Access
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Access pre-validated candidates with proven skills, mentor endorsements, and documented 
              project experience. Reduce hiring risk through evidence-based talent assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/access"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                Access Talent Pool
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