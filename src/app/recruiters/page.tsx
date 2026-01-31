import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Recruitment Agencies',
  description: 'Differentiate your recruitment agency with neuroinclusive assessment capability. Win more contracts, make better placements, reduce failed hires.',
};

export default function RecruitersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">For Recruitment Agencies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Win contracts with neuroinclusive assessment capability
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Differentiate your agency from competitors. Offer clients access to neurodivergent talent pools they can&apos;t reach with traditional methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=recruiter" className="btn btn-primary no-underline">
                Book a Demo
              </Link>
              <Link href="/platform" className="btn btn-secondary no-underline">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              The competitive advantage you need
            </h2>
            <p className="text-lg text-neutral-600">
              Employers are actively seeking neurodiverse talent—but struggle to assess candidates fairly. Position your agency as the solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Win More Contracts',
                description: 'Respond to RFPs with neuroinclusive hiring capability. Meet D&I requirements that competitors can\'t.',
                stat: '70%',
                statLabel: 'of enterprises prioritise neurodiversity',
              },
              {
                title: 'Better Placements',
                description: 'Match candidates to roles based on cognitive strengths, not just CV keywords. Reduce failed placements.',
                stat: '40%',
                statLabel: 'reduction in failed hires reported',
              },
              {
                title: 'Premium Positioning',
                description: 'Command higher margins with specialist neuroinclusive services. Build a reputation for quality placements.',
                stat: '25%',
                statLabel: 'higher fees for specialist services',
              },
            ].map((item, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <div className="text-4xl font-bold text-primary mb-1">{item.stat}</div>
                <div className="text-sm text-neutral-500 mb-4">{item.statLabel}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Recruiters */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How PathSync works for recruiters
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">For Your Candidates</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</span>
                    <div>
                      <p className="font-medium text-neutral-900">Send assessment invitations</p>
                      <p className="text-sm text-neutral-600">Branded with your agency or white-label options</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</span>
                    <div>
                      <p className="font-medium text-neutral-900">Candidates complete assessment</p>
                      <p className="text-sm text-neutral-600">45-60 minute cognitive strengths profiling</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</span>
                    <div>
                      <p className="font-medium text-neutral-900">Receive detailed profiles</p>
                      <p className="text-sm text-neutral-600">Cognitive strengths, role matching, interview guidance</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">For Your Clients</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</span>
                    <div>
                      <p className="font-medium text-neutral-900">Present assessed candidates</p>
                      <p className="text-sm text-neutral-600">Share reports showing objective role fit</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</span>
                    <div>
                      <p className="font-medium text-neutral-900">Provide interview support</p>
                      <p className="text-sm text-neutral-600">Structured questions and accommodation guidance</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</span>
                    <div>
                      <p className="font-medium text-neutral-900">Support successful onboarding</p>
                      <p className="text-sm text-neutral-600">Accommodation recommendations for lasting placements</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Label */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  White-label options available
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Present PathSync assessment as your own proprietary tool. Strengthen your brand and differentiate from competitors using off-the-shelf solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    'Your branding on all candidate communications',
                    'Custom domain for assessment portal',
                    'Reports branded with your logo',
                    'No PathSync branding visible to clients',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-700">
                      <CheckIcon className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-neutral-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <span className="text-neutral-400">White-label portal preview</span>
              </div>
            </div>
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
                &quot;PathSync helped us win our largest tech client contract&quot;
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                A mid-sized recruitment agency won a major tech company&apos;s neuroinclusive hiring contract after demonstrating PathSync&apos;s assessment capability in their pitch. The client specifically cited the structured interview guidance and accommodation recommendations as key differentiators.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
                <div>
                  <div className="text-3xl font-bold text-primary">3x</div>
                  <p className="text-sm text-neutral-600">increase in neurodivergent placements</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">92%</div>
                  <p className="text-sm text-neutral-600">placement retention at 6 months</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">£50k</div>
                  <p className="text-sm text-neutral-600">additional revenue in year one</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing for Recruiters */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Flexible pricing for agencies
            </h2>
            <p className="text-lg text-neutral-600">
              Pay per assessment or subscribe for volume discounts. Pass costs to clients or absorb as a value-add service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Pay Per Assessment</h3>
              <div className="text-4xl font-bold text-neutral-900 mb-2">£25<span className="text-lg font-normal text-neutral-600">/assessment</span></div>
              <p className="text-neutral-600 mb-6">Ideal for testing the service or occasional neuroinclusive roles.</p>
              <Link href="/contact?plan=starter&type=recruiter" className="btn btn-secondary w-full no-underline text-center">
                Get Started
              </Link>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Agency Partner</h3>
              <div className="text-4xl font-bold mb-2">Custom<span className="text-lg font-normal text-white/80"> pricing</span></div>
              <p className="text-white/80 mb-6">Volume discounts, white-label options, and dedicated support for agencies making neuroinclusion a core service.</p>
              <Link href="/contact?plan=partner&type=recruiter" className="btn bg-white text-primary hover:bg-neutral-100 w-full no-underline text-center">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to differentiate your agency?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Book a demo to see how PathSync can help you win more contracts and make better placements.
            </p>
            <Link href="/contact?type=recruiter&demo=true" className="btn bg-white text-primary hover:bg-neutral-100 no-underline">
              Book a Demo
            </Link>
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
