export const metadata = {
  title: 'Impact - PathSync Career Infrastructure',
  description: 'Measurable outcomes and evidence-based results from structured career development',
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Measurable Impact
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Evidence-based outcomes demonstrating platform effectiveness, career progression success, 
              and quantifiable improvements in technical hiring and skill development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Skill Validation Accuracy</h3>
              <p className="text-sm text-slate-600">Mentor assessments align with employer evaluations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">76%</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Employment Placement Rate</h3>
              <p className="text-sm text-slate-600">Learners achieving employment within 6 months</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3.2x</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Faster Hiring Process</h3>
              <p className="text-sm text-slate-600">Reduced time-to-hire through pre-validation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">94%</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Learner Progression Rate</h3>
              <p className="text-sm text-slate-600">Completion rate for structured learning paths</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}