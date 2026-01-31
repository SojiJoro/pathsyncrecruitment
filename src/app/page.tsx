'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section - How It Works */}
      <SolutionSection />

      {/* For Whom Section */}
      <AudienceSection />

      {/* Differentiators */}
      <DifferentiatorsSection />

      {/* Social Proof */}
      <SocialProofSection />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-neutral-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Assessment Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
            Discover exceptional talent{' '}
            <span className="text-primary">traditional hiring misses</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            PathSync&apos;s cognitive strengths assessment helps employers hire neurodivergent candidates based on actual ability—not interview performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact?demo=true"
              className="btn btn-primary text-lg px-8 py-4 no-underline"
            >
              Request Demo
              <ArrowRightIcon />
            </Link>
            <Link
              href="/platform"
              className="btn btn-secondary text-lg px-8 py-4 no-underline"
            >
              How It Works
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <ShieldIcon />
              <span>WCAG 2.1 AA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldIcon />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldIcon />
              <span>SOC 2 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeIcon />
              <span>Innovation Visa Business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDownIcon />
      </div>
    </section>
  );
}

function ProblemSection() {
  const stats = [
    { value: '15-20%', label: 'of the UK workforce is neurodivergent' },
    { value: '22%', label: 'of autistic adults are in employment' },
    { value: '90-140%', label: 'higher productivity in matched roles' },
  ];

  return (
    <section className="section bg-white" aria-labelledby="problem-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Traditional recruitment is failing neurodivergent talent—and the employers who need them
          </h2>
          <p className="text-lg text-neutral-600">
            CV screening and interviews are designed for neurotypical candidates. They measure social performance, not actual ability—leaving exceptional talent undiscovered.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-neutral-50 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
              <XCircleIcon className="text-red-500" />
              What traditional assessment measures
            </h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Eye contact and social confidence
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Quick verbal responses under pressure
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                &quot;Culture fit&quot; based on neurotypical norms
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Linear career progression on a CV
              </li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
              <CheckCircleIcon className="text-green-600" />
              What actually predicts job success
            </h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Pattern recognition and analytical thinking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Deep focus and attention to detail
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Creative problem-solving approaches
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Systematic thinking and process adherence
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const steps = [
    {
      number: '01',
      title: 'Candidate completes assessment',
      description: 'A cognitive strengths assessment designed to reduce anxiety and measure true ability—not interview skills.',
      icon: ClipboardIcon,
    },
    {
      number: '02',
      title: 'Platform generates profile',
      description: 'AI analyses responses to create a detailed cognitive strengths profile with role-matching scores.',
      icon: BrainIcon,
    },
    {
      number: '03',
      title: 'Employer receives insights',
      description: 'Structured candidate report with interview guidance and workplace accommodation recommendations.',
      icon: ChartIcon,
    },
  ];

  return (
    <section className="section bg-neutral-50" aria-labelledby="solution-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="solution-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Assessment built for how neurodivergent minds actually work
          </h2>
          <p className="text-lg text-neutral-600">
            PathSync Assessment Engine replaces subjective screening with objective cognitive profiling—identifying what candidates excel at, not what they struggle with.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                )}

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <step.icon className="text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Preview Placeholder */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-900 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-neutral-400 text-sm ml-2">PathSync Assessment Dashboard</span>
            </div>
            <div className="p-8 bg-neutral-50">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="text-sm text-neutral-500 mb-1">Pattern Recognition</div>
                  <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '92%' }} />
                  </div>
                  <div className="text-right text-sm font-medium text-neutral-900 mt-1">92%</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="text-sm text-neutral-500 mb-1">Attention to Detail</div>
                  <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '88%' }} />
                  </div>
                  <div className="text-right text-sm font-medium text-neutral-900 mt-1">88%</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="text-sm text-neutral-500 mb-1">Systematic Thinking</div>
                  <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '95%' }} />
                  </div>
                  <div className="text-right text-sm font-medium text-neutral-900 mt-1">95%</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <CheckCircleIcon className="text-green-600" />
                  Strong match for: Software QA, Data Analysis, Technical Writing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audiences = [
    {
      title: 'For Recruitment Agencies',
      description: 'Differentiate your service with neuroinclusive assessment capability. Win more contracts, make better placements, reduce failed hires.',
      icon: UsersIcon,
      href: '/recruiters',
      features: ['White-label assessment', 'Candidate reports', 'ATS integration'],
    },
    {
      title: 'For HR Teams',
      description: 'Build a genuinely inclusive hiring process with structured, bias-reducing tools that identify hidden talent in your candidate pool.',
      icon: BuildingIcon,
      href: '/employers',
      features: ['Hiring workflow integration', 'Manager training', 'Analytics dashboard'],
    },
    {
      title: 'For Employment Services',
      description: 'Support neurodivergent jobseekers with evidence-based assessment. Demonstrate outcomes to commissioners and funders.',
      icon: HeartIcon,
      href: '/contact?type=employment-services',
      features: ['Outcome tracking', 'Access to Work ready', 'Bulk pricing'],
    },
  ];

  return (
    <section className="section bg-white" aria-labelledby="audience-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="audience-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Built for teams making hiring decisions
          </h2>
          <p className="text-lg text-neutral-600">
            PathSync provides the technology layer that makes neuroinclusive hiring scalable and measurable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Link
              key={index}
              href={audience.href}
              className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all no-underline"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                {audience.title}
              </h3>

              <p className="text-neutral-600 mb-6">
                {audience.description}
              </p>

              <ul className="space-y-2 mb-6">
                {audience.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckIcon className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRightIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  const differentiators = [
    {
      title: 'Built for neurodivergence, not adapted',
      description: 'Existing tools add accessibility features as an afterthought. PathSync is designed from the ground up for how neurodivergent minds work.',
      icon: TargetIcon,
    },
    {
      title: 'Strengths-based, not deficit-focused',
      description: 'Traditional psychometrics identify what candidates struggle with. We identify what they excel at—and which roles will benefit.',
      icon: TrendingUpIcon,
    },
    {
      title: 'Actionable employer outputs',
      description: 'Not just scores, but specific guidance: role fit recommendations, structured interview questions, and accommodation suggestions.',
      icon: FileTextIcon,
    },
  ];

  return (
    <section className="section bg-neutral-900 text-white" aria-labelledby="differentiators-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="differentiators-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Why PathSync is different
          </h2>
          <p className="text-lg text-neutral-300">
            We&apos;re not another assessment tool with accessibility bolted on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-neutral-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="section bg-white" aria-labelledby="social-proof-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="social-proof-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Trusted by forward-thinking employers
          </h2>
          <p className="text-lg text-neutral-600">
            Join the growing number of organisations transforming their approach to neurodivergent hiring.
          </p>
        </div>

        {/* Logo placeholder grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-16 bg-neutral-100 rounded-lg flex items-center justify-center"
            >
              <span className="text-neutral-400 text-sm">Logo</span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
            <QuoteIcon className="text-primary/20 mb-4" />
            <blockquote className="text-xl md:text-2xl text-neutral-700 mb-6 italic">
              &quot;PathSync helped us identify candidates we would have overlooked with traditional screening. Our neurodivergent hires are among our highest performers.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">JM</span>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">James Mitchell</p>
                <p className="text-neutral-600">Head of Talent Acquisition, Tech Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section bg-primary" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your hiring?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            See PathSync in action. Request a personalised demo and discover how cognitive strengths assessment can improve your hiring outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact?demo=true"
              className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-4 no-underline"
            >
              Request Demo
              <ArrowRightIcon />
            </Link>
            <Link
              href="/docs"
              className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 no-underline"
            >
              View Documentation
            </Link>
          </div>

          <p className="text-white/60 text-sm">
            No commitment required. Typical demo takes 30 minutes.
          </p>
        </div>
      </div>
    </section>
  );
}

// Icon Components
function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
    </svg>
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
      <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
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

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.006z" />
    </svg>
  );
}
