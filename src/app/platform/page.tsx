import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Discover how PathSync Assessment Engine works. AI-powered cognitive strengths profiling designed for neurodivergent candidates.',
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">PathSync Assessment Engine</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Assessment technology built for how neurodivergent minds work
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              A proprietary cognitive strengths profiling tool that replaces CV screening and interviews with objective, ability-based assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?demo=true" className="btn btn-primary no-underline">
                Request Demo
              </Link>
              <Link href="/docs" className="btn btn-secondary no-underline">
                View API Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What PathSync measures
            </h2>
            <p className="text-lg text-neutral-600">
              Our assessment identifies cognitive strengths that predict job success—not the social skills that traditional interviews reward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Pattern Recognition',
                description: 'Ability to identify relationships, anomalies, and trends in complex data or systems.',
                roles: 'QA, Data Analysis, Security',
              },
              {
                title: 'Attention to Detail',
                description: 'Precision in spotting errors, inconsistencies, and quality issues others miss.',
                roles: 'Accounting, Editing, Compliance',
              },
              {
                title: 'Deep Focus',
                description: 'Capacity for sustained concentration on complex, demanding tasks.',
                roles: 'Development, Research, Writing',
              },
              {
                title: 'Systematic Thinking',
                description: 'Preference for structured approaches, processes, and logical frameworks.',
                roles: 'Operations, Engineering, Process Design',
              },
              {
                title: 'Creative Problem-Solving',
                description: 'Novel approaches to challenges, thinking beyond conventional solutions.',
                roles: 'Design, Strategy, Innovation',
              },
              {
                title: 'Memory & Recall',
                description: 'Strong retention of facts, procedures, and detailed information.',
                roles: 'Technical Support, Training, Documentation',
              },
            ].map((capability, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{capability.title}</h3>
                <p className="text-neutral-600 mb-4">{capability.description}</p>
                <div className="text-sm text-primary font-medium">
                  Best for: {capability.roles}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Flow */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How the assessment works
            </h2>
            <p className="text-lg text-neutral-600">
              A candidate-friendly experience designed to reduce anxiety and measure true ability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Candidate receives invitation',
                  description: 'Employer sends assessment link via email or ATS. Candidate can complete on any device, at any time.',
                  detail: 'No time pressure. Clear instructions. Accessibility options available.',
                },
                {
                  step: '2',
                  title: 'Interactive assessment modules',
                  description: 'Series of task-based modules measuring cognitive strengths through practical exercises, not abstract questions.',
                  detail: '45-60 minutes typical. Can pause and resume. No trick questions.',
                },
                {
                  step: '3',
                  title: 'AI generates cognitive profile',
                  description: 'Machine learning analyses performance patterns to build comprehensive strengths profile.',
                  detail: 'Validated against role success data. Continuously improving accuracy.',
                },
                {
                  step: '4',
                  title: 'Employer receives actionable report',
                  description: 'Detailed candidate insights with role-matching scores, interview guidance, and accommodation recommendations.',
                  detail: 'PDF report + dashboard access. API available for ATS integration.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 border border-neutral-200">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-neutral-600 mb-3">{item.description}</p>
                    <p className="text-sm text-neutral-500 italic">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Employers Receive */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What employers receive
            </h2>
            <p className="text-lg text-neutral-600">
              Not just scores—actionable guidance for every stage of the hiring process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Candidate Report</h3>
              <ul className="space-y-3">
                {[
                  'Cognitive strengths profile with percentile scores',
                  'Role-matching scores for your open positions',
                  'Working style preferences and communication needs',
                  'Potential areas for development',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckIcon className="text-primary flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Interview Guide</h3>
              <ul className="space-y-3">
                {[
                  'Structured questions tailored to candidate profile',
                  'Communication approach recommendations',
                  'What to avoid (common interview pitfalls)',
                  'Suggested environment and format adjustments',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckIcon className="text-primary flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Accommodation Recommendations</h3>
              <ul className="space-y-3">
                {[
                  'Workplace environment suggestions',
                  'Communication and management approaches',
                  'Tools and technology that may help',
                  'Onboarding considerations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckIcon className="text-primary flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Analytics Dashboard</h3>
              <ul className="space-y-3">
                {[
                  'Candidate comparison and ranking',
                  'Team composition insights',
                  'Hiring outcome tracking',
                  'Diversity and inclusion metrics',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckIcon className="text-primary flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical specifications
            </h2>
            <p className="text-lg text-neutral-300">
              Enterprise-ready platform with flexible integration options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Integrations</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>REST API access</li>
                <li>Webhook notifications</li>
                <li>Major ATS platforms</li>
                <li>SSO/SAML support</li>
                <li>Custom integrations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Security & Compliance</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>GDPR compliant</li>
                <li>SOC 2 Type II ready</li>
                <li>Data encryption at rest</li>
                <li>EU data residency</li>
                <li>Regular security audits</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Accessibility</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>WCAG 2.1 AA compliant</li>
                <li>Screen reader compatible</li>
                <li>Keyboard navigation</li>
                <li>High contrast mode</li>
                <li>Dyslexia-friendly fonts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See PathSync in action
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Request a personalised demo and discover how cognitive strengths assessment can transform your hiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?demo=true" className="btn bg-white text-primary hover:bg-neutral-100 no-underline">
                Request Demo
              </Link>
              <Link href="/pricing" className="btn border-2 border-white text-white hover:bg-white/10 no-underline">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
