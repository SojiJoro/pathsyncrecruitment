import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'PathSync is building the AI-powered cognitive strengths assessment platform for neuroinclusive hiring. Learn about our mission, team, and technology.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Building technology that makes neuroinclusive hiring{' '}
              <span className="text-primary">scalable</span>
            </h1>
            <p className="text-xl text-neutral-600">
              PathSync is the AI-powered cognitive strengths assessment platform that helps employers discover exceptional neurodivergent talent traditional recruitment misses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Our mission
                </h2>
                <p className="text-lg text-neutral-600 mb-4">
                  Traditional recruitment systematically disadvantages neurodivergent candidates—not because they lack ability, but because interviews and CV screening measure the wrong things.
                </p>
                <p className="text-lg text-neutral-600 mb-4">
                  We believe that with the right assessment technology, employers can identify exceptional talent based on actual cognitive strengths rather than social performance.
                </p>
                <p className="text-lg text-neutral-600">
                  PathSync exists to make this technology accessible to every employer committed to neuroinclusive hiring—from recruitment agencies to enterprise HR teams.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">The opportunity</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">15-20%</div>
                    <p className="text-neutral-600">of the workforce is neurodivergent</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">22%</div>
                    <p className="text-neutral-600">of autistic adults are in employment</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">90-140%</div>
                    <p className="text-neutral-600">productivity increase in matched roles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What we build
            </h2>
            <p className="text-lg text-neutral-300">
              A complete platform for neuroinclusive hiring at scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <BrainIcon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cognitive Assessment</h3>
              <p className="text-neutral-300 text-sm">
                AI-powered assessment that measures cognitive strengths through task-based exercises, not abstract questions or interview performance.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <ChartIcon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Employer Insights</h3>
              <p className="text-neutral-300 text-sm">
                Detailed candidate profiles with role-matching scores, structured interview guides, and accommodation recommendations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <IntegrationIcon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Platform Integration</h3>
              <p className="text-neutral-300 text-sm">
                REST API and ATS integrations that fit into existing hiring workflows—no need to change how your team works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-primary font-bold text-5xl">A</span>
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">Adesoji</h2>
                <p className="text-primary font-medium mb-4">Founder & Technical Lead</p>
                <p className="text-neutral-600 mb-4">
                  Site Reliability Engineer with extensive AWS expertise and a background spanning both technology and the care sector. This unique combination provides deep understanding of both the technical challenges of building scalable platforms and the human needs of neurodivergent individuals.
                </p>
                <p className="text-neutral-600 mb-4">
                  PathSync emerged from recognising that the same infrastructure engineering principles—observability, automation, scalable systems—could transform how organisations approach neuroinclusive hiring.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Infrastructure', 'Platform Architecture', 'Accessibility', 'Neurodiversity'].map((tag) => (
                    <span key={tag} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Company Information</h3>
                <div className="space-y-3 text-neutral-600">
                  <p><strong>PathSync Recruitment Ltd</strong></p>
                  <p>Registered in England and Wales</p>
                  <p>Company Number: 14979338</p>
                  <div className="pt-4 border-t border-neutral-200 mt-4">
                    <p>Kemp House, 152-160 City Road</p>
                    <p>London EC1V 2NX</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Innovation Visa Business</h3>
                <p className="text-white/80 mb-4">
                  PathSync is building an innovative, scalable technology platform that addresses a genuine market need—neuroinclusive hiring at scale.
                </p>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                  <BadgeIcon className="text-white" />
                  <span className="font-medium">Innovation Visa Endorsed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our principles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Strengths-first',
                description: 'We identify what people excel at, not what they struggle with. Deficit-focused assessment has failed neurodivergent candidates.',
              },
              {
                title: 'Evidence-based',
                description: 'Our methodology is validated against real hiring outcomes. We publish our research and continuously improve based on data.',
              },
              {
                title: 'Accessible by design',
                description: 'Built from the ground up for neurodivergent users. WCAG 2.1 AA compliant, with anxiety-reducing design principles.',
              },
              {
                title: 'Business outcome focused',
                description: 'We measure success by employer outcomes—better hires, higher retention, improved productivity—not just placements.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partner with PathSync
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Whether you&apos;re an employer, recruitment agency, or investor—we&apos;d love to discuss how PathSync can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?demo=true"
                className="btn bg-white text-primary hover:bg-neutral-100 no-underline"
              >
                Request Demo
              </Link>
              <Link
                href="/contact?type=partnership"
                className="btn border-2 border-white text-white hover:bg-white/10 no-underline"
              >
                Discuss Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
      <path d="M16 8V5c0-1.1.9-2 2-2" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M12 8h8" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function IntegrationIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H6c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
