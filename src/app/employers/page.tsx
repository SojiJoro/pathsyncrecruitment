'use client';

import { useState } from 'react';
import Link from 'next/link';

// Services data
const services = [
  {
    title: 'Talent Matching',
    description: 'Access pre-screened neurodivergent candidates matched to your specific role requirements using our cognitive strengths profiling.',
    features: [
      'Skills-based candidate profiles',
      'Cognitive strengths matching',
      'Trial period support',
      'Replacement guarantee',
    ],
    pricing: 'Performance-based fee',
    icon: UsersIcon,
    highlight: true,
  },
  {
    title: 'Workplace Readiness Audit',
    description: 'Comprehensive assessment of your workplace environment, policies, and practices for neuroinclusion.',
    features: [
      'Physical environment evaluation',
      'Policy and process review',
      'Communication assessment',
      'Detailed recommendations report',
    ],
    pricing: '£2,500 - £5,000',
    icon: ClipboardIcon,
    highlight: false,
  },
  {
    title: 'Manager Training',
    description: 'Equip your managers with the knowledge and skills to support neurodivergent team members effectively.',
    features: [
      'Half-day or full-day workshops',
      'Neurodiversity awareness',
      'Communication strategies',
      'Accommodation planning',
    ],
    pricing: '£1,500 per day',
    icon: AcademicIcon,
    highlight: false,
  },
  {
    title: 'Certification Programme',
    description: 'Become a recognised Neurodiversity-Ready Employer with ongoing support and employer branding benefits.',
    features: [
      'Neurodiversity-Ready badge',
      'Annual consultancy support',
      'Job posting optimisation',
      'Employer branding materials',
    ],
    pricing: '£5,000 - £10,000/year',
    icon: BadgeIcon,
    highlight: false,
  },
];

// Business case stats
const businessStats = [
  { value: '90-140%', label: 'Higher productivity reported', source: 'JPMorgan Chase' },
  { value: '48%', label: 'Lower turnover rates', source: 'Autism at Work programs' },
  { value: '£1.5B', label: 'Economic opportunity in UK', source: 'Buckland Review' },
  { value: '30%', label: 'More innovative ideas', source: 'Harvard Business Review' },
];

// Case studies
const caseStudies = [
  {
    company: 'TechCorp Solutions',
    industry: 'Technology',
    size: '250 employees',
    challenge: 'Struggling to fill quality assurance roles and experiencing high turnover in technical positions.',
    solution: 'PathSync placed 5 neurodivergent candidates in QA and development roles, with comprehensive onboarding support and manager training.',
    results: [
      '100% retention after 12 months',
      '35% increase in bug detection rates',
      'Team satisfaction scores up 20%',
    ],
    quote: "Our neurodivergent hires have transformed our QA process. Their attention to detail is exceptional.",
    quoteName: 'Sarah Chen',
    quoteRole: 'VP of Engineering',
  },
  {
    company: 'Financial Services Ltd',
    industry: 'Finance',
    size: '1,000+ employees',
    challenge: 'Wanted to improve diversity and tap into new talent pools while meeting regulatory requirements.',
    solution: 'Implemented full Neurodiversity-Ready Certification programme with workplace audit, manager training, and ongoing recruitment partnership.',
    results: [
      '15 successful placements in Year 1',
      '28% reduction in recruitment costs',
      'Recognised as Disability Confident Leader',
    ],
    quote: "PathSync helped us see neurodivergent talent as a competitive advantage, not a compliance checkbox.",
    quoteName: 'Michael Thompson',
    quoteRole: 'Chief People Officer',
  },
  {
    company: 'Creative Agency Co',
    industry: 'Marketing & Design',
    size: '50 employees',
    challenge: 'Small team needed fresh creative perspectives but lacked resources for extensive recruitment.',
    solution: 'Used talent matching service to find candidates with strong visual thinking and pattern recognition abilities.',
    results: [
      '2 designers placed within 6 weeks',
      'Award-winning campaign developed',
      'Client satisfaction increased 25%',
    ],
    quote: "The creative insights from our neurodivergent team members have won us new business.",
    quoteName: 'Emma Rodriguez',
    quoteRole: 'Creative Director',
  },
];

export default function EmployersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Unlock High-Performance{' '}
              <span className="gradient-text">Neurodivergent Talent</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-4">
              90-140% productivity gains. Proven results. Comprehensive support.
            </p>
            <p className="text-lg text-neutral-500 mb-8">
              Partner with PathSync to access exceptional talent and create a truly inclusive workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=employer"
                className="btn btn-primary text-lg px-8 py-4 no-underline"
              >
                Book a Consultation
              </Link>
              <Link
                href="#roi-calculator"
                className="btn btn-secondary text-lg px-8 py-4 no-underline"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Business Case */}
      <section className="section bg-primary" aria-labelledby="business-case-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="business-case-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Business Case for Neurodiversity
            </h2>
            <p className="text-lg text-white/80">
              Research consistently shows that neurodivergent employees deliver exceptional value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {businessStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-white/80 text-sm mb-2">{stat.label}</p>
                <p className="text-white/60 text-xs">Source: {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="section bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Employer Services
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive support from recruitment to retention, tailored to your organisation's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card ${
                  service.highlight
                    ? 'bg-primary/5 border-2 border-primary'
                    : 'bg-neutral-50'
                }`}
              >
                {service.highlight && (
                  <div className="badge badge-primary mb-4">Most Popular</div>
                )}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <service.icon className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckIcon className="text-secondary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-neutral-200">
                      <span className="font-semibold text-primary">
                        {service.pricing}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact?type=employer"
              className="btn btn-primary text-lg px-8 py-4 no-underline"
            >
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="section bg-neutral-50" aria-labelledby="roi-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="roi-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Calculate Your Return on Investment
            </h2>
            <p className="text-lg text-neutral-600">
              See the potential financial impact of hiring neurodivergent talent.
            </p>
          </div>

          <ROICalculator />
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section bg-white" aria-labelledby="case-studies-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="case-studies-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Employer Success Stories
            </h2>
            <p className="text-lg text-neutral-600">
              See how organisations across industries are benefiting from neurodivergent talent.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="card bg-neutral-50">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Company Info */}
                  <div className="lg:w-1/3">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <BuildingIcon className="text-primary w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">
                        {study.company}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {study.industry} | {study.size}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:w-2/3">
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-1">Challenge</h4>
                      <p className="text-neutral-600 text-sm">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-1">Solution</h4>
                      <p className="text-neutral-600 text-sm">{study.solution}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckIcon className="text-secondary shrink-0" />
                            <span className="text-neutral-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="italic text-primary border-l-2 border-primary pl-4 mt-4">
                      "{study.quote}"
                      <footer className="text-sm text-neutral-500 mt-2 not-italic">
                        — {study.quoteName}, {study.quoteRole}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Partners */}
      <section className="section bg-neutral-50" aria-labelledby="partners-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-neutral-600">
              We work across sectors to connect neurodivergent talent with inclusive employers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Creative', 'Retail', 'Professional Services', 'Public Sector'].map((industry) => (
              <div key={industry} className="card bg-white text-center py-6">
                <p className="font-medium text-neutral-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Book a free consultation to discuss how PathSync can help you access exceptional neurodivergent talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=employer"
                className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-4 no-underline"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/resources"
                className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 no-underline"
              >
                Download Employer Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ROI Calculator Component
function ROICalculator() {
  const [numberOfHires, setNumberOfHires] = useState(5);
  const [averageSalary, setAverageSalary] = useState(40000);
  const [currentTurnoverCost, setCurrentTurnoverCost] = useState(15000);

  // Calculations based on research
  const productivityGain = 0.3; // 30% productivity increase
  const turnoverReduction = 0.48; // 48% lower turnover

  const annualProductivityValue = numberOfHires * averageSalary * productivityGain;
  const turnoverSavings = numberOfHires * currentTurnoverCost * turnoverReduction;
  const totalAnnualBenefit = annualProductivityValue + turnoverSavings;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="card bg-white">
          <h3 className="text-lg font-semibold text-neutral-900 mb-6">
            Your Organisation
          </h3>

          <div className="space-y-6">
            <div>
              <label htmlFor="hires" className="form-label">
                Number of hires per year
              </label>
              <input
                id="hires"
                type="range"
                min="1"
                max="50"
                value={numberOfHires}
                onChange={(e) => setNumberOfHires(parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-neutral-500 mt-1">
                <span>1</span>
                <span className="font-semibold text-primary">{numberOfHires}</span>
                <span>50</span>
              </div>
            </div>

            <div>
              <label htmlFor="salary" className="form-label">
                Average salary (£)
              </label>
              <input
                id="salary"
                type="number"
                value={averageSalary}
                onChange={(e) => setAverageSalary(parseInt(e.target.value) || 0)}
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="turnover" className="form-label">
                Current cost per bad hire (£)
              </label>
              <input
                id="turnover"
                type="number"
                value={currentTurnoverCost}
                onChange={(e) => setCurrentTurnoverCost(parseInt(e.target.value) || 0)}
                className="form-input"
              />
              <p className="form-help">
                Include recruitment, training, and lost productivity costs
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="card bg-primary text-white">
          <h3 className="text-lg font-semibold mb-6">
            Projected Annual Benefits
          </h3>

          <div className="space-y-6">
            <div>
              <p className="text-white/70 text-sm">Productivity Value Increase</p>
              <p className="text-3xl font-bold">
                £{annualProductivityValue.toLocaleString()}
              </p>
              <p className="text-white/60 text-xs">
                Based on 30% average productivity improvement
              </p>
            </div>

            <div>
              <p className="text-white/70 text-sm">Turnover Cost Savings</p>
              <p className="text-3xl font-bold">
                £{turnoverSavings.toLocaleString()}
              </p>
              <p className="text-white/60 text-xs">
                Based on 48% reduction in turnover
              </p>
            </div>

            <hr className="border-white/20" />

            <div>
              <p className="text-white/70 text-sm">Total Annual Benefit</p>
              <p className="text-4xl font-bold text-secondary-light">
                £{totalAnnualBenefit.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <Link
              href="/contact?type=employer&source=roi-calculator"
              className="btn bg-white text-primary hover:bg-neutral-100 w-full no-underline"
            >
              Get Detailed Analysis
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-neutral-500 mt-6">
        Calculations based on industry research from JPMorgan Chase, SAP, and Microsoft Autism at Work programs.
        Actual results may vary. Contact us for a detailed ROI analysis for your organisation.
      </p>
    </div>
  );
}

// Icon Components
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function AcademicIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
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

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
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
