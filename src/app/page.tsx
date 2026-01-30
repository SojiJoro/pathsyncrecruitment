'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

// Statistics data
const stats = [
  { value: '15-20%', label: 'of UK workforce is neurodivergent' },
  { value: '90-140%', label: 'productivity increase reported' },
  { value: '£1.5B', label: 'economic opportunity' },
];

// Solution cards data
const solutions = [
  {
    icon: BrainIcon,
    title: 'Cognitive Strength Assessment',
    description: 'AI-powered assessment focusing on your unique abilities, not traditional interviews that often disadvantage neurodivergent candidates.',
    link: '/how-it-works#assessment',
  },
  {
    icon: RocketIcon,
    title: 'Employment Incubation',
    description: 'CV optimization, interview preparation, and workplace readiness training tailored to neurodivergent strengths and needs.',
    link: '/job-seekers#programs',
  },
  {
    icon: HandshakeIcon,
    title: 'Post-Placement Support',
    description: 'Ongoing coaching for candidates and employers to ensure long-term success and retention.',
    link: '/employers#services',
  },
];

// Comparison data
const comparison = [
  {
    aspect: 'Assessment Method',
    traditional: 'CV screening & interviews',
    pathsync: 'Cognitive strengths profiling',
  },
  {
    aspect: 'Focus',
    traditional: 'Past experience & social skills',
    pathsync: 'Abilities & potential',
  },
  {
    aspect: 'Candidate Prep',
    traditional: 'None or generic',
    pathsync: 'Personalised incubation program',
  },
  {
    aspect: 'Employer Training',
    traditional: 'Rarely included',
    pathsync: 'Comprehensive neuroinclusion training',
  },
  {
    aspect: 'Post-Placement',
    traditional: 'Limited or none',
    pathsync: '90-day support & ongoing coaching',
  },
  {
    aspect: 'Success Measurement',
    traditional: 'Placement only',
    pathsync: 'Retention, satisfaction & productivity',
  },
];

// Impact metrics
const impactMetrics = [
  { label: 'Year 1 Target Placements', value: 50, suffix: '' },
  { label: 'Year 3 Target Placements', value: 500, suffix: '' },
  { label: 'Target Retention Rate', value: 85, suffix: '%' },
  { label: 'Employer Satisfaction Goal', value: 95, suffix: '%' },
];

// Testimonials
const testimonials = [
  {
    quote: "I never thought I'd find an employer who understood my needs. PathSync helped me prepare for interviews without the anxiety, and now I'm thriving in a role that plays to my strengths.",
    name: 'Sarah T.',
    role: 'Software Tester',
    type: 'candidate',
  },
  {
    quote: "We were hesitant at first, but the training PathSync provided completely changed our perspective. Our neurodivergent hires are among our most productive and innovative team members.",
    name: 'James M.',
    role: 'Tech Startup CTO',
    type: 'employer',
  },
  {
    quote: "The assessment process was so different from anything I'd experienced before. Instead of feeling judged, I felt understood. That made all the difference.",
    name: 'Alex R.',
    role: 'Data Analyst',
    type: 'candidate',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Ticker */}
      <StatsTicker />

      {/* Problem Statement */}
      <ProblemSection />

      {/* Our Solution */}
      <SolutionSection />

      {/* How It's Different */}
      <ComparisonSection />

      {/* Impact Metrics */}
      <ImpactSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Partners */}
      <PartnersSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-neutral-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
            Transforming Employment for{' '}
            <span className="gradient-text">Neurodivergent Talent</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            AI-powered matching. Human-led support. Lasting careers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/job-seekers"
              className="btn btn-primary text-lg px-8 py-4 no-underline"
            >
              For Job Seekers
              <ArrowRightIcon />
            </Link>
            <Link
              href="/employers"
              className="btn btn-secondary text-lg px-8 py-4 no-underline"
            >
              For Employers
              <ArrowRightIcon />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <CheckCircleIcon />
              <span>WCAG 2.1 AA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon />
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

function StatsTicker() {
  return (
    <section className="bg-primary py-6" aria-label="Key statistics">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
              <span className="block text-sm text-white/80 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section bg-white" aria-labelledby="problem-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            The Employment Gap We&apos;re Closing
          </h2>
          <p className="text-lg text-neutral-600">
            Traditional recruitment creates barriers that prevent talented neurodivergent individuals from finding meaningful employment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Candidate Challenges */}
          <div className="card bg-red-50 border border-red-100">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <span className="text-red-500">
                <UserIcon />
              </span>
              Challenges for Candidates
            </h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <XIcon className="text-red-500 shrink-0 mt-1" />
                <span>Traditional interviews favour neurotypical communication styles</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-red-500 shrink-0 mt-1" />
                <span>CV screening misses non-linear career paths and hidden talents</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-red-500 shrink-0 mt-1" />
                <span>Lack of understanding about workplace accommodations</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-red-500 shrink-0 mt-1" />
                <span>High anxiety around disclosure and stigma concerns</span>
              </li>
            </ul>
          </div>

          {/* Employer Challenges */}
          <div className="card bg-amber-50 border border-amber-100">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <span className="text-amber-500">
                <BuildingIcon />
              </span>
              Challenges for Employers
            </h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <XIcon className="text-amber-500 shrink-0 mt-1" />
                <span>Missing out on high-potential neurodivergent talent pool</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-amber-500 shrink-0 mt-1" />
                <span>Uncertainty about effective accommodations and support</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-amber-500 shrink-0 mt-1" />
                <span>Manager training gaps in neuroinclusive practices</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-amber-500 shrink-0 mt-1" />
                <span>Retention issues due to lack of ongoing support systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="section bg-neutral-50" aria-labelledby="solution-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="solution-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Innovative Approach
          </h2>
          <p className="text-lg text-neutral-600">
            A technology-enabled, human-centered model that transforms outcomes for both candidates and employers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.link}
              className="card hover:shadow-card-hover transition-all group no-underline"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-neutral-600">
                {solution.description}
              </p>
              <div className="mt-4 text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRightIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="section bg-white" aria-labelledby="comparison-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            How PathSync is Different
          </h2>
          <p className="text-lg text-neutral-600">
            We&apos;ve reimagined recruitment from the ground up to work for neurodivergent talent.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse" role="table">
            <caption className="sr-only">
              Comparison between traditional recruitment and PathSync approach
            </caption>
            <thead>
              <tr>
                <th className="text-left p-4 bg-neutral-100 font-semibold text-neutral-900 rounded-tl-lg">
                  Aspect
                </th>
                <th className="text-left p-4 bg-red-50 font-semibold text-red-700">
                  Traditional Recruitment
                </th>
                <th className="text-left p-4 bg-green-50 font-semibold text-green-700 rounded-tr-lg">
                  PathSync Model
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr key={index} className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">
                    {row.aspect}
                  </td>
                  <td className="p-4 text-neutral-600">
                    {row.traditional}
                  </td>
                  <td className="p-4 text-neutral-900 bg-green-50/50">
                    <span className="flex items-center gap-2">
                      <CheckIcon className="text-green-600 shrink-0" />
                      {row.pathsync}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="section bg-primary" aria-labelledby="impact-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="impact-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact Goals
          </h2>
          <p className="text-lg text-white/80">
            Building a scalable platform for measurable, lasting change in neurodivergent employment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="text-white/80 text-sm mt-2">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="section bg-neutral-50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-neutral-600">
            Real experiences from candidates and employers who&apos;ve transformed their approach to neurodivergent employment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-white"
            >
              <div className="mb-4">
                <QuoteIcon className="text-primary/30" />
              </div>
              <blockquote className="text-neutral-700 mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="section bg-white" aria-labelledby="partners-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Working Towards Recognition
          </h2>
          <p className="text-lg text-neutral-600">
            Building partnerships with employers, government bodies, and advocacy organisations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {/* Placeholder partner logos */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-20 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400"
            >
              <span className="text-sm">Partner Logo</span>
            </div>
          ))}
        </div>

        {/* Innovation Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/5 border border-primary/20 rounded-full">
            <InnovationIcon className="text-primary" />
            <span className="font-medium text-neutral-900">
              Innovation Visa Endorsed Business (Pending)
            </span>
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
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Job Seekers CTA */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 mb-6">
                Take our free cognitive assessment and discover roles that match your unique strengths.
              </p>
              <Link
                href="/job-seekers"
                className="btn bg-white text-primary hover:bg-neutral-100 px-8 py-3 no-underline"
              >
                Start Free Assessment
              </Link>
            </div>

            {/* Employers CTA */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Transform Your Workplace
              </h2>
              <p className="text-white/80 mb-6">
                Unlock the potential of neurodivergent talent with our comprehensive employer services.
              </p>
              <Link
                href="/employers"
                className="btn bg-white text-primary hover:bg-neutral-100 px-8 py-3 no-underline"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon Components
function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
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

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
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

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M11 17a4 4 0 0 1-4-4V5a2 2 0 0 1 4 0v12Z" />
      <path d="M7 13V5a2 2 0 0 0-4 0v8a10 10 0 0 0 10 10h1" />
      <path d="M17 17a4 4 0 0 0 4-4V5a2 2 0 0 0-4 0v12Z" />
      <path d="M21 13V5a2 2 0 0 1 4 0v8a10 10 0 0 1-10 10h-1" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
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

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.006z" />
    </svg>
  );
}

function InnovationIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}
