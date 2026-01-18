export const metadata = {
  title: 'Platform - PathSync Career Infrastructure',
  description: 'Technical architecture and system design for scalable career development infrastructure',
}

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Platform Architecture
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Scalable, accessible, and evidence-based career infrastructure built for measurable outcomes. 
              Technical excellence supporting structured learning and validated skill development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technical Infrastructure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built for scale, accessibility, and measurable outcomes. Our platform differentiates through structure and function.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-3">Neurodivergent-Friendly Design</h3>
              <p className="text-slate-600 text-sm">Clear visual hierarchies, minimal cognitive load, and structured task breakdown</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-3">Evidence-Based Tracking</h3>
              <p className="text-slate-600 text-sm">Quantifiable skill progression with mentor validation and portfolio evidence</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-3">Scalable Infrastructure</h3>
              <p className="text-slate-600 text-sm">Cloud-native architecture supporting thousands of concurrent learners</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}