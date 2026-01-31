import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for PathSync cognitive strengths assessment. Pay per assessment or subscribe for unlimited access.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'For small recruiters and occasional hiring',
      price: '£25',
      period: 'per assessment',
      features: [
        'Pay-as-you-go pricing',
        'Full cognitive strengths profile',
        'Candidate report (PDF)',
        'Interview guidance',
        'Accommodation recommendations',
        'Email support',
      ],
      cta: 'Get Started',
      ctaLink: '/contact?plan=starter',
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For HR teams with regular hiring needs',
      price: '£299',
      period: 'per month',
      features: [
        'Up to 50 assessments/month',
        'Everything in Starter, plus:',
        'Analytics dashboard',
        'Candidate comparison tools',
        'Team collaboration',
        'Priority support',
        'Custom branding',
      ],
      cta: 'Start Free Trial',
      ctaLink: '/contact?plan=professional',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organisations with custom needs',
      price: 'Custom',
      period: 'tailored pricing',
      features: [
        'Unlimited assessments',
        'Everything in Professional, plus:',
        'API access',
        'ATS integration',
        'SSO/SAML',
        'Dedicated account manager',
        'Custom role profiling',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact?plan=enterprise',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-neutral-600 mb-4">
              Start with pay-per-assessment or subscribe for volume discounts. All plans include our full cognitive strengths assessment and employer reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-primary text-white ring-4 ring-primary/20 scale-105'
                    : 'bg-white border border-neutral-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-neutral-600'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${plan.highlighted ? 'text-white/80' : 'text-neutral-600'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm ${plan.highlighted ? 'text-white' : 'text-neutral-700'}`}>
                      <CheckIcon className={plan.highlighted ? 'text-white' : 'text-primary'} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`btn w-full no-underline text-center ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-neutral-100'
                      : 'btn-primary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Every plan includes
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Full Assessment',
                description: 'Complete cognitive strengths profiling with all modules',
              },
              {
                title: 'Candidate Reports',
                description: 'Detailed PDF reports for each assessed candidate',
              },
              {
                title: 'Interview Guidance',
                description: 'Structured questions and approach recommendations',
              },
              {
                title: 'Accommodations',
                description: 'Workplace and communication recommendations',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="text-primary" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Frequently asked questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How long does the assessment take?',
                  a: 'Most candidates complete the assessment in 45-60 minutes. There\'s no strict time limit, and candidates can pause and resume if needed.',
                },
                {
                  q: 'Can I try before I commit?',
                  a: 'Yes. Professional plan includes a 14-day free trial with full access to all features. For Starter, you can request a demo to see the platform before your first assessment.',
                },
                {
                  q: 'What ATS integrations do you support?',
                  a: 'Enterprise plans include integrations with major ATS platforms including Workday, Greenhouse, Lever, and more. We also offer a REST API for custom integrations.',
                },
                {
                  q: 'Is the assessment scientifically validated?',
                  a: 'Yes. Our methodology is developed in collaboration with occupational psychologists and validated against job success data. We publish our validation studies in our documentation.',
                },
                {
                  q: 'How is candidate data handled?',
                  a: 'We\'re GDPR compliant and take data protection seriously. Candidate data is encrypted, stored in EU data centres, and deleted according to your retention policies.',
                },
                {
                  q: 'Can candidates access their own results?',
                  a: 'Yes. Candidates can optionally receive a summary of their cognitive strengths profile. This is configurable per assessment.',
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-neutral-200 pb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.q}</h3>
                  <p className="text-neutral-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volume Pricing */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              High-volume pricing
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Disability employment services, Access to Work providers, and organisations with high-volume hiring needs—contact us for custom pricing packages.
            </p>
            <Link href="/contact?type=volume-pricing" className="btn btn-primary no-underline">
              Discuss Volume Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              See PathSync in action with a personalised demo, or start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?demo=true" className="btn bg-white text-primary hover:bg-neutral-100 no-underline">
                Request Demo
              </Link>
              <Link href="/contact?plan=professional" className="btn border-2 border-white text-white hover:bg-white/10 no-underline">
                Start Free Trial
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
