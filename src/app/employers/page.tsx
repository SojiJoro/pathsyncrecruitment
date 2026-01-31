import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For HR Teams',
  description: 'Build a genuinely inclusive hiring process with PathSync. Structured, bias-reducing assessment tools that identify hidden talent in your candidate pool.',
};

export default function EmployersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">For HR Teams & Internal Hiring</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Build a genuinely neuroinclusive hiring process
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Structured, bias-reducing assessment tools that identify exceptional candidates your current process is missing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=employer&demo=true" className="btn btn-primary no-underline">
                Request Demo
              </Link>
              <Link href="/platform" className="btn btn-secondary no-underline">
                See the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Business Case */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The business case for neuroinclusive hiring
            </h2>
            <p className="text-lg text-white/80">
              Research consistently shows that neurodivergent employees deliver exceptional value—when properly matched and supported.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: '90-140%', label: 'Higher productivity in matched roles', source: 'JPMorgan Chase' },
              { value: '48%', label: 'Lower turnover rates', source: 'Autism at Work programs' },
              { value: '30%', label: 'More innovative ideas', source: 'Harvard Business Review' },
              { value: '15-20%', label: 'Of workforce is neurodivergent', source: 'ACAS' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white/80 text-sm mb-2">{stat.label}</p>
                <p className="text-white/60 text-xs">Source: {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Your current process is filtering out top performers
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Traditional hiring screens for interview skills, not job skills. Neurodivergent candidates often struggle with:
                </p>
                <ul className="space-y-3">
                  {[
                    'CV formats that penalise non-linear career paths',
                    'Interview questions that reward quick verbal responses',
                    'Group assessments designed for extroverts',
                    'Vague job descriptions with hidden requirements',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                      <XIcon className="text-red-500 flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">The hidden talent pool</h3>
                <p className="text-neutral-600 mb-4">
                  Only 22% of autistic adults are in employment—compared to 80% of the general population. That&apos;s not a reflection of ability, it&apos;s a failure of recruitment.
                </p>
                <p className="text-neutral-600">
                  PathSync helps you access candidates with exceptional pattern recognition, attention to detail, and systematic thinking—strengths traditional interviews fail to identify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How PathSync Helps */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How PathSync integrates with your hiring workflow
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Add to your process',
                  description: 'Integrate PathSync assessment as a replacement for, or addition to, CV screening. Send assessment invitations directly from your ATS.',
                },
                {
                  step: '2',
                  title: 'Receive structured insights',
                  description: 'Get detailed cognitive profiles, role-matching scores, and interview guidance for every candidate—not just a pass/fail.',
                },
                {
                  step: '3',
                  title: 'Make better hiring decisions',
                  description: 'Compare candidates objectively, conduct bias-reduced interviews, and set new hires up for success with accommodation recommendations.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-neutral-200">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features for HR */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Built for HR teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'ATS Integration',
                description: 'Works with your existing Applicant Tracking System. Send assessments, receive results, and track candidates without leaving your workflow.',
                features: ['Workday', 'Greenhouse', 'Lever', 'Custom API'],
              },
              {
                title: 'Analytics Dashboard',
                description: 'Track hiring outcomes, compare candidate pools, and demonstrate ROI of neuroinclusive hiring to stakeholders.',
                features: ['Hiring funnel analytics', 'Diversity metrics', 'Outcome tracking', 'Custom reports'],
              },
              {
                title: 'Manager Training',
                description: 'Equip hiring managers with the knowledge to conduct effective, bias-reduced interviews and support neurodivergent team members.',
                features: ['Interview guidance', 'Accommodation planning', 'Communication strategies', 'Onboarding support'],
              },
              {
                title: 'Compliance & Security',
                description: 'Enterprise-grade security and compliance, designed for organisations with strict data governance requirements.',
                features: ['GDPR compliant', 'SOC 2 ready', 'EU data residency', 'SSO/SAML'],
              },
            ].map((feature, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 mb-4">{feature.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {feature.features.map((f, i) => (
                    <li key={i} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-neutral-200">
              <div className="text-sm font-medium text-primary mb-4">CASE STUDY</div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                &quot;PathSync transformed how we think about technical hiring&quot;
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                A fintech company implemented PathSync for their QA and engineering roles after struggling with high turnover in technical positions. Within 12 months, they had made 8 successful neurodivergent hires—all still in role, outperforming traditional hires on key metrics.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <p className="text-sm text-neutral-600">12-month retention</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">35%</div>
                  <p className="text-sm text-neutral-600">higher bug detection rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">£45k</div>
                  <p className="text-sm text-neutral-600">saved in recruitment costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Calculate your potential ROI
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Based on research from JPMorgan Chase, SAP, and Microsoft Autism at Work programs, organisations typically see:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <p className="text-neutral-600">productivity increase in matched roles</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">48%</div>
                <p className="text-neutral-600">reduction in turnover costs</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <p className="text-neutral-600">decrease in recruitment spend</p>
              </div>
            </div>

            <Link href="/contact?type=employer&source=roi" className="btn btn-primary no-underline">
              Get a Custom ROI Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your hiring?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              See PathSync in action with a personalised demo tailored to your organisation&apos;s needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=employer&demo=true" className="btn bg-white text-primary hover:bg-neutral-100 no-underline">
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

function XIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
