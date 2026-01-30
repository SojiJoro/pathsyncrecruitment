import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Discover how PathSync transforms neurodivergent employment through our AI-powered assessment, incubation programme, and ongoing support.',
};

// Process overview
const processSteps = [
  {
    step: 1,
    title: 'Assessment',
    description: 'Complete our cognitive strengths profiling to discover your unique abilities',
    duration: '30-45 minutes',
    forJobSeekers: true,
    forEmployers: false,
  },
  {
    step: 2,
    title: 'Profile & Matching',
    description: 'Receive personalised insights and get matched with suitable opportunities',
    duration: '1-2 days',
    forJobSeekers: true,
    forEmployers: true,
  },
  {
    step: 3,
    title: 'Incubation',
    description: 'Participate in our employment readiness programme',
    duration: '2-4 weeks',
    forJobSeekers: true,
    forEmployers: false,
  },
  {
    step: 4,
    title: 'Placement',
    description: 'Connect with employers and start your new role',
    duration: 'Ongoing',
    forJobSeekers: true,
    forEmployers: true,
  },
  {
    step: 5,
    title: 'Support',
    description: 'Receive ongoing coaching and workplace support',
    duration: '90+ days',
    forJobSeekers: true,
    forEmployers: true,
  },
];

// Assessment factors
const assessmentFactors = [
  {
    category: 'Cognitive Strengths',
    factors: ['Pattern recognition', 'Attention to detail', 'Creative thinking', 'Analytical abilities', 'Memory and recall'],
  },
  {
    category: 'Work Preferences',
    factors: ['Environment type', 'Noise tolerance', 'Social interaction level', 'Task variety', 'Structure needs'],
  },
  {
    category: 'Communication Style',
    factors: ['Written vs verbal', 'Direct vs indirect', 'Processing time', 'Meeting preferences', 'Feedback style'],
  },
  {
    category: 'Support Needs',
    factors: ['Sensory considerations', 'Routine importance', 'Instruction format', 'Deadline management', 'Change adaptation'],
  },
];

// Technology features
const techFeatures = [
  {
    title: 'AI-Powered Matching',
    description: 'Our algorithm considers over 50 factors to match candidates with roles where they will thrive, going far beyond keyword matching.',
    icon: BrainIcon,
  },
  {
    title: 'Cognitive Profiling',
    description: 'Assessment designed with neurodiversity researchers to identify strengths rather than test for deficits.',
    icon: ChartIcon,
  },
  {
    title: 'Privacy-First Design',
    description: 'GDPR compliant with candidate-controlled data. You decide what to share and when.',
    icon: ShieldIcon,
  },
  {
    title: 'Continuous Learning',
    description: 'Our platform improves with every placement, learning what combinations lead to successful outcomes.',
    icon: RefreshIcon,
  },
];

// Metrics tracked
const metricsTracked = [
  'Placement success rate',
  'Time to placement',
  '90-day retention rate',
  '12-month retention rate',
  'Candidate satisfaction',
  'Employer satisfaction',
  'Productivity improvements',
  'Accommodation effectiveness',
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              How PathSync{' '}
              <span className="gradient-text">Works</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              A technology-enabled, human-centered approach to neurodivergent employment that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/job-seekers#assessment"
                className="btn btn-primary text-lg px-8 py-4 no-underline"
              >
                Take Free Assessment
              </Link>
              <Link
                href="/employers"
                className="btn btn-secondary text-lg px-8 py-4 no-underline"
              >
                Employer Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section bg-white" aria-labelledby="process-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              End-to-End Process
            </h2>
            <p className="text-lg text-neutral-600">
              From assessment to ongoing support, we guide you through every step
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process flow line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-primary/20" />

              <div className="grid md:grid-cols-5 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative text-center">
                    {/* Step number */}
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10">
                      {step.step}
                    </div>

                    <h3 className="font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-600 mb-2">{step.description}</p>
                    <span className="text-xs text-primary font-medium">{step.duration}</span>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-3">
                      {step.forJobSeekers && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          Job Seekers
                        </span>
                      )}
                      {step.forEmployers && (
                        <span className="text-xs bg-secondary/10 text-secondary-dark px-2 py-1 rounded">
                          Employers
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Platform */}
      <section id="assessment" className="section bg-neutral-50" aria-labelledby="assessment-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="assessment-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              The Assessment Platform
            </h2>
            <p className="text-lg text-neutral-600">
              Our cognitive assessment focuses on your strengths, not traditional measures that disadvantage neurodivergent individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {assessmentFactors.map((category, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.factors.map((factor, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-700">
                      <CheckIcon className="text-secondary shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-neutral-600 mb-6">
              The assessment is designed to be accessible and neurodivergent-friendly. You can take breaks, save progress, and complete at your own pace.
            </p>
            <Link
              href="/job-seekers#assessment"
              className="btn btn-primary no-underline"
            >
              Start Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* AI Matching */}
      <section className="section bg-primary" aria-labelledby="ai-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="ai-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Matching
            </h2>
            <p className="text-lg text-white/80">
              Our technology goes beyond keywords to understand the full picture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-white/80 text-sm">
              Human oversight is maintained at every stage. Our AI suggests matches, but trained consultants review and refine recommendations based on nuanced understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Support Systems */}
      <section className="section bg-white" aria-labelledby="support-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="support-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Ongoing Support Systems
            </h2>
            <p className="text-lg text-neutral-600">
              Placement is just the beginning. We provide comprehensive support for lasting success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card bg-neutral-50 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Job Seeker Portal</h3>
              <p className="text-sm text-neutral-600">
                Track your progress, access resources, schedule coaching sessions, and communicate with your support team.
              </p>
            </div>

            <div className="card bg-neutral-50 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingIcon className="text-secondary-dark w-8 h-8" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Employer Dashboard</h3>
              <p className="text-sm text-neutral-600">
                Manage candidates, access training resources, track integration progress, and get support when needed.
              </p>
            </div>

            <div className="card bg-neutral-50 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatIcon className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Communication Hub</h3>
              <p className="text-sm text-neutral-600">
                Secure messaging between candidates, employers, and PathSync consultants for seamless coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Outcomes */}
      <section className="section bg-neutral-50" aria-labelledby="outcomes-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="outcomes-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Measuring Success
            </h2>
            <p className="text-lg text-neutral-600">
              We track meaningful metrics to ensure we are delivering real value
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card bg-white">
              <h3 className="font-semibold text-neutral-900 mb-4">Metrics We Track</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {metricsTracked.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                    <CheckIcon className="text-secondary shrink-0" />
                    <span className="text-neutral-700">{metric}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-6">
                Aggregated and anonymised outcome data helps us continuously improve our matching algorithms and support programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundation */}
      <section className="section bg-white" aria-labelledby="research-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="research-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Research Foundation
            </h2>
            <p className="text-lg text-neutral-600">
              Our methodology is grounded in evidence from neurodiversity employment research
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-neutral-50">
                <h3 className="font-semibold text-neutral-900 mb-3">Evidence Base</h3>
                <ul className="space-y-3 text-sm text-neutral-600">
                  <li>JPMorgan Chase Autism at Work program research</li>
                  <li>Microsoft Autism Hiring Program outcomes</li>
                  <li>SAP Autism at Work global data</li>
                  <li>Buckland Review of Autism Employment</li>
                  <li>Academic research on neurodivergent workplace success factors</li>
                </ul>
              </div>

              <div className="card bg-neutral-50">
                <h3 className="font-semibold text-neutral-900 mb-3">Continuous Improvement</h3>
                <ul className="space-y-3 text-sm text-neutral-600">
                  <li>Regular outcome analysis and methodology refinement</li>
                  <li>Feedback integration from candidates and employers</li>
                  <li>Collaboration with neurodiversity researchers</li>
                  <li>Assessment validation studies</li>
                  <li>Bias detection and mitigation in AI systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Take the first step towards a career that values your unique strengths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/job-seekers"
                className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-4 no-underline"
              >
                For Job Seekers
              </Link>
              <Link
                href="/employers"
                className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 no-underline"
              >
                For Employers
              </Link>
            </div>
          </div>
        </div>
      </section>
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
