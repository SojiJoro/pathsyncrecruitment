'use client';

import { useState } from 'react';
import Link from 'next/link';

// Process steps data
const processSteps = [
  {
    number: 1,
    title: 'Free Assessment',
    duration: '30-45 minutes',
    description: 'Complete our cognitive strengths profiling to discover your unique abilities and preferences.',
    details: [
      'Cognitive strengths profiling',
      'Work environment preferences',
      'Communication style analysis',
      'Sensory considerations',
    ],
  },
  {
    number: 2,
    title: 'Personalised Profile',
    duration: '1-2 days',
    description: 'Receive a comprehensive report highlighting your strengths and matching career paths.',
    details: [
      'Detailed strengths report',
      'Suitable role recommendations',
      'Accommodation suggestions',
      'Career pathway options',
    ],
  },
  {
    number: 3,
    title: 'Skills Incubation',
    duration: '2-4 weeks',
    description: 'Participate in our employment readiness programme tailored to your needs.',
    details: [
      'CV transformation workshop',
      'Interview preparation (multiple formats)',
      'Workplace communication training',
      'Self-advocacy skills',
    ],
  },
  {
    number: 4,
    title: 'Job Matching',
    duration: 'Ongoing',
    description: 'Get matched with employers who value neurodivergent talent and offer supportive environments.',
    details: [
      'AI-powered matching with neuroinclusive employers',
      'Sensory-friendly interview arrangements',
      'Accommodation discussion support',
      'Direct employer introductions',
    ],
  },
  {
    number: 5,
    title: 'Placement & Support',
    duration: '90+ days',
    description: 'Continue receiving support after you start your new role to ensure long-term success.',
    details: [
      'First 90 days coaching',
      'Employer liaison support',
      'Ongoing check-ins',
      'Career progression guidance',
    ],
  },
];

// Neurodivergent profiles
const neurodivergentProfiles = [
  { name: 'Autism', icon: '🧩', description: 'Unique perspectives and attention to detail' },
  { name: 'ADHD', icon: '⚡', description: 'Creative thinking and dynamic energy' },
  { name: 'Dyslexia', icon: '📖', description: 'Strong visual and spatial thinking' },
  { name: 'Dyspraxia', icon: '🎯', description: 'Strategic problem-solving abilities' },
  { name: 'Dyscalculia', icon: '🔢', description: 'Creative approaches to challenges' },
  { name: 'Tourette Syndrome', icon: '💪', description: 'Resilience and adaptability' },
];

// Success stories
const successStories = [
  {
    name: 'Sarah T.',
    role: 'Software Tester',
    company: 'Tech Startup',
    journey: 'After years of struggling with traditional interviews, Sarah found PathSync. Our assessment revealed her exceptional pattern recognition abilities, and through our incubation programme, she built confidence for interviews. Today, she is thriving in quality assurance.',
    quote: "I never thought I'd find an employer who understood my needs. Now I'm thriving.",
    outcome: 'Employed within 3 months, promoted within first year',
  },
  {
    name: 'Marcus L.',
    role: 'Data Analyst',
    company: 'Financial Services',
    journey: "Marcus's ADHD meant he struggled in conventional office environments. We matched him with an employer offering flexible working and helped negotiate accommodations. His hyperfocus and creative thinking are now valued assets.",
    quote: 'The assessment process made me feel understood, not judged.',
    outcome: 'Flexible working arrangement, 40% productivity increase',
  },
  {
    name: 'Emma R.',
    role: 'Graphic Designer',
    company: 'Creative Agency',
    journey: "Emma's dyslexia meant written applications were challenging. Our visual-first assessment revealed her exceptional design thinking. We helped her showcase her portfolio effectively and prepare for practical interviews.",
    quote: 'PathSync saw my abilities when others only saw my challenges.',
    outcome: 'Portfolio-based hiring, workplace adjustments in place',
  },
];

// FAQ data
const faqs = [
  {
    question: 'Is the assessment really free?',
    answer: 'Yes, our cognitive strengths assessment is completely free for job seekers. We believe everyone deserves the opportunity to discover their strengths without financial barriers. Our services are funded through partnerships with employers who want to access neurodivergent talent.',
  },
  {
    question: 'How long does the whole process take?',
    answer: 'The timeline varies based on your readiness and available opportunities. The assessment takes 30-45 minutes. Your personalised profile is ready within 1-2 days. The skills incubation programme runs 2-4 weeks. Job matching is ongoing until we find the right fit. On average, candidates are placed within 2-4 months.',
  },
  {
    question: 'What if I do not have a formal diagnosis?',
    answer: 'You do not need a formal diagnosis to use our services. Many neurodivergent individuals are self-diagnosed or undiagnosed. Our assessment focuses on your cognitive profile and working preferences, not diagnostic labels. We welcome anyone who identifies as neurodivergent or suspects they might be.',
  },
  {
    question: 'Will employers know I am neurodivergent?',
    answer: 'Disclosure is always your choice. We help you decide what, when, and how to share information about your neurodivergence. Our employer partners are committed to neuroinclusive practices, but you control your narrative. We can help facilitate accommodation discussions without requiring specific diagnoses.',
  },
  {
    question: 'What types of jobs do you place?',
    answer: 'We work across industries and role levels, from entry-level positions to senior roles. Common sectors include technology, finance, creative industries, healthcare administration, and manufacturing. Our matching focuses on finding roles that align with your strengths and provide supportive environments, regardless of sector.',
  },
  {
    question: 'What happens if a placement does not work out?',
    answer: 'We provide ongoing support and want you to succeed. If challenges arise, we work with you and the employer to resolve issues. If a role truly is not the right fit, we continue supporting you to find a better match. Our 90-day support period helps catch and address issues early.',
  },
  {
    question: 'Do I need to be based in the UK?',
    answer: 'Currently, our services are focused on the UK job market. However, many of our employer partners offer remote working options. We are planning to expand internationally in the future. If you are outside the UK but interested in UK-based remote roles, please get in touch.',
  },
];

export default function JobSeekersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Your Unique Strengths.{' '}
              <span className="gradient-text">Your Ideal Career.</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              A neurodivergent-friendly recruitment process that focuses on what you can do, not what you struggle with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#assessment"
                className="btn btn-primary text-lg px-8 py-4 no-underline"
              >
                Start Free Assessment
              </Link>
              <Link
                href="#process"
                className="btn btn-secondary text-lg px-8 py-4 no-underline"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="programs" className="section bg-white" aria-labelledby="process-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Your Journey With Us
            </h2>
            <p className="text-lg text-neutral-600">
              A step-by-step process designed around your needs, not traditional recruitment practices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-primary/20" />
                )}

                <div className="flex gap-6 mb-8">
                  {/* Step Number */}
                  <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 card bg-neutral-50">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {step.title}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-4">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckIcon className="text-secondary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="section bg-neutral-50" aria-labelledby="support-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="support-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Who We Support
            </h2>
            <p className="text-lg text-neutral-600">
              We welcome all neurodivergent individuals. Everyone&apos;s journey is unique, and so is our support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {neurodivergentProfiles.map((profile) => (
              <div key={profile.name} className="card bg-white text-center">
                <div className="text-4xl mb-3">{profile.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {profile.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-neutral-500 mt-8 max-w-2xl mx-auto">
            This is not an exhaustive list. If you identify as neurodivergent or think you might be, our services are for you. No formal diagnosis required.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="section bg-white" aria-labelledby="stories-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="stories-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-neutral-600">
              Real journeys from candidates who found their path through PathSync.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <div key={index} className="card bg-neutral-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{story.name}</h3>
                    <p className="text-sm text-neutral-500">{story.role} at {story.company}</p>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm mb-4">
                  {story.journey}
                </p>

                <blockquote className="italic text-primary border-l-2 border-primary pl-4 mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-sm font-medium text-secondary-dark flex items-center gap-2">
                    <CheckIcon className="text-secondary" />
                    {story.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Preview */}
      <section id="assessment" className="section bg-primary" aria-labelledby="assessment-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center text-white mb-12">
              <h2 id="assessment-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Free Assessment
              </h2>
              <p className="text-lg text-white/80">
                Our cognitive strengths assessment takes 30-45 minutes and helps us understand your unique abilities.
              </p>
            </div>

            <AssessmentPreview />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="section bg-neutral-50" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Everything you need to know about our services for job seekers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Ready to Find Your Ideal Role?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Take the first step towards a career that values your unique strengths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#assessment"
                className="btn btn-primary text-lg px-8 py-4 no-underline"
              >
                Start Free Assessment
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary text-lg px-8 py-4 no-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Assessment Preview Component
function AssessmentPreview() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const sampleQuestions = [
    {
      question: 'Which work environment helps you focus best?',
      options: [
        { value: 'quiet', label: 'Quiet, minimal distractions', icon: '🤫' },
        { value: 'moderate', label: 'Some background noise', icon: '🎵' },
        { value: 'busy', label: 'Busy, active environment', icon: '🏢' },
        { value: 'flexible', label: 'Varies depending on the task', icon: '🔄' },
      ],
    },
    {
      question: 'How do you prefer to receive instructions?',
      options: [
        { value: 'written', label: 'Written documentation', icon: '📝' },
        { value: 'visual', label: 'Visual diagrams or videos', icon: '🎬' },
        { value: 'verbal', label: 'Verbal explanation', icon: '🗣️' },
        { value: 'combination', label: 'A combination of methods', icon: '🔀' },
      ],
    },
    {
      question: 'What type of tasks do you find most engaging?',
      options: [
        { value: 'detailed', label: 'Detailed, focused work', icon: '🔍' },
        { value: 'creative', label: 'Creative problem-solving', icon: '💡' },
        { value: 'analytical', label: 'Data and analysis', icon: '📊' },
        { value: 'collaborative', label: 'Working with others', icon: '🤝' },
      ],
    },
  ];

  const currentQ = sampleQuestions[currentQuestion];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-neutral-500 mb-2">
          <span>Sample Question {currentQuestion + 1} of {sampleQuestions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / sampleQuestions.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-neutral-900 mb-6">
        {currentQ.question}
      </h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {currentQ.options.map((option) => (
          <button
            key={option.value}
            onClick={() => setAnswers({ ...answers, [currentQuestion]: option.value })}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              answers[currentQuestion] === option.value
                ? 'border-primary bg-primary/5'
                : 'border-neutral-200 hover:border-primary/50'
            }`}
          >
            <span className="text-2xl block mb-2">{option.icon}</span>
            <span className="font-medium text-neutral-900">{option.label}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className="btn btn-ghost disabled:opacity-50"
        >
          Previous
        </button>

        {currentQuestion < sampleQuestions.length - 1 ? (
          <button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={!answers[currentQuestion]}
            className="btn btn-primary disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <Link
            href="/contact?type=assessment"
            className="btn btn-primary no-underline"
          >
            Start Full Assessment
          </Link>
        )}
      </div>

      <p className="text-sm text-neutral-500 text-center mt-6">
        This is a sample. The full assessment includes more questions to build your complete profile.
      </p>
    </div>
  );
}

// FAQ Accordion Component
function FAQAccordion({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="card bg-white overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="accordion-trigger w-full"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-left font-semibold text-neutral-900">
              {faq.question}
            </span>
            <ChevronIcon isOpen={openIndex === index} />
          </button>

          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
            aria-hidden={openIndex !== index}
          >
            <div className="accordion-content">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Icon Components
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
