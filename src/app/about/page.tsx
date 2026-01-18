export const metadata = {
  title: 'About Us - PathSync Career Infrastructure Platform',
  description:
    'Learn about PathSync - the career infrastructure platform connecting learners, mentors, and employers through structured learning and skill validation.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 text-center">About PathSync</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-center">
            Building career infrastructure through structured learning, mentor validation, and evidence-based progression.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Our Mission */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Mission</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            PathSync transforms career development from ad-hoc learning into systematic skill progression.
            We provide the infrastructure that connects structured learning paths, mentor validation, and
            employment readiness—creating measurable career outcomes.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Traditional learning platforms focus on content delivery. We focus on outcomes. Every step in
            our system is designed to move learners from &quot;I watched tutorials&quot; to &quot;I can demonstrate
            job-ready capability.&quot;
          </p>
        </section>

        {/* Our Approach */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Approach</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Structured Learning Paths</h3>
              <p className="text-slate-700">
                We break down complex career roles into ordered, cumulative steps. Each step builds
                on the previous, ensuring foundational knowledge before advancing.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Mentor Validation</h3>
              <p className="text-slate-700">
                Expert mentors review work, validate competency, and provide actionable feedback.
                This creates both accountability and proof of capability.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Evidence-Based Progression</h3>
              <p className="text-slate-700">
                Every completed step, validated lab, and mentor endorsement becomes documented
                evidence of skill development—not self-reported claims.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-slate-900">Measurable Outcomes:</span>
                <span className="text-slate-700"> We value evidence over credentials, capability over certificates.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-slate-900">Neurodivergent-Friendly Design:</span>
                <span className="text-slate-700"> Clear structure, explicit criteria, and flexible pacing work for everyone.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-slate-900">Systematic over Ad-Hoc:</span>
                <span className="text-slate-700"> Random learning leads to fragmented skills. Structured paths lead to careers.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-slate-900">Transparency and Trust:</span>
                <span className="text-slate-700"> Learners, mentors, and employers all see the same progression data.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Platform Operator */}
        <section className="bg-slate-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Platform Operator</h2>
          <p className="text-slate-700 mb-2">
            PathSync is operated by <strong>Joro Services Ltd</strong>, registered in the United Kingdom.
          </p>
          <p className="text-slate-600 text-sm">
            Company Number: 14979338
          </p>
        </section>
      </div>
    </div>
  );
}
