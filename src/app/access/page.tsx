import Link from 'next/link'

export const metadata = {
  title: 'Access Platform - PathSync Career Infrastructure',
  description: 'Access structured learning paths, mentor validation, and employment readiness tracking',
}

export default function AccessPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Access Career Infrastructure Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Enter the structured career development ecosystem. Choose your role in the evidence-based 
              progression model that connects learning, validation, and employment readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/learning-hub/dashboard"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Access Learning Platform
              </Link>
              <Link 
                href="/contact"
                className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact for Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}