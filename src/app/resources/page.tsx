import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free guides, downloads, and resources for neurodivergent job seekers and employers committed to neuroinclusive hiring.',
};

// Downloadable resources
const downloads = [
  {
    title: 'Guide to Neurodivergent Recruitment',
    description: 'Comprehensive guide for employers on attracting, hiring, and retaining neurodivergent talent.',
    type: 'PDF',
    audience: 'Employers',
    icon: '📘',
  },
  {
    title: 'Workplace Accommodation Checklist',
    description: 'Practical checklist of common accommodations that support neurodivergent employees.',
    type: 'PDF',
    audience: 'Employers',
    icon: '✅',
  },
  {
    title: 'Interview Preparation for Neurodivergent Candidates',
    description: 'Tips and strategies for preparing for job interviews as a neurodivergent job seeker.',
    type: 'PDF',
    audience: 'Job Seekers',
    icon: '🎯',
  },
  {
    title: "Manager's Guide to Neuroinclusion",
    description: 'How to create an inclusive environment and support neurodivergent team members.',
    type: 'PDF',
    audience: 'Employers',
    icon: '👥',
  },
  {
    title: 'Self-Advocacy Toolkit',
    description: 'Resources for neurodivergent individuals to communicate their needs effectively.',
    type: 'PDF',
    audience: 'Job Seekers',
    icon: '💪',
  },
  {
    title: 'ROI of Neurodivergent Hiring',
    description: 'Data and case studies demonstrating the business value of neuroinclusive hiring.',
    type: 'PDF',
    audience: 'Employers',
    icon: '📊',
  },
];

// Blog articles
const articles = [
  {
    title: 'Understanding Neurodiversity in the Workplace',
    excerpt: 'An introduction to neurodiversity and why it matters for modern organisations.',
    category: 'Education',
    readTime: '5 min read',
  },
  {
    title: 'Common Interview Accommodations That Work',
    excerpt: 'Practical accommodations that help neurodivergent candidates show their true abilities.',
    category: 'Best Practices',
    readTime: '4 min read',
  },
  {
    title: 'The Business Case for Neurodivergent Hiring',
    excerpt: 'Research-backed evidence showing the productivity and innovation benefits.',
    category: 'Research',
    readTime: '7 min read',
  },
  {
    title: 'Creating Sensory-Friendly Workspaces',
    excerpt: 'How to design office environments that work for sensory-sensitive employees.',
    category: 'Best Practices',
    readTime: '6 min read',
  },
  {
    title: 'Disclosure: When and How to Share Your Neurodivergence',
    excerpt: 'Guidance for job seekers on navigating disclosure decisions.',
    category: 'Career Advice',
    readTime: '5 min read',
  },
  {
    title: 'Remote Work and Neurodiversity',
    excerpt: 'How flexible working arrangements benefit neurodivergent employees.',
    category: 'Trends',
    readTime: '4 min read',
  },
];

// External resources
const externalResources = [
  {
    title: 'Buckland Review of Autism Employment',
    description: 'UK Government commissioned review of autism employment.',
    url: 'https://www.gov.uk/government/publications/the-buckland-review-of-autism-employment-report-and-recommendations',
  },
  {
    title: 'Disability Confident Scheme',
    description: 'Government scheme helping employers recruit and retain disabled people.',
    url: 'https://www.gov.uk/government/collections/disability-confident-campaign',
  },
  {
    title: 'National Autistic Society Employment Resources',
    description: 'Resources for autistic job seekers and employers.',
    url: 'https://www.autism.org.uk/advice-and-guidance/topics/employment',
  },
  {
    title: 'ADHD Foundation',
    description: 'Support and resources for people with ADHD.',
    url: 'https://www.adhdfoundation.org.uk/',
  },
  {
    title: 'British Dyslexia Association',
    description: 'Workplace support and resources for dyslexic individuals.',
    url: 'https://www.bdadyslexia.org.uk/',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Resources & <span className="gradient-text">Guides</span>
            </h1>
            <p className="text-xl text-neutral-600">
              Free resources to support neurodivergent job seekers and employers on their journey to inclusive employment.
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="section bg-white" aria-labelledby="downloads-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="downloads-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Free Downloads
            </h2>
            <p className="text-lg text-neutral-600">
              Practical guides and toolkits to support your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {downloads.map((resource, index) => (
              <div key={index} className="card bg-neutral-50 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{resource.icon}</span>
                  <div className="flex gap-2">
                    <span className="badge badge-primary text-xs">{resource.type}</span>
                    <span className="badge badge-secondary text-xs">{resource.audience}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  {resource.description}
                </p>
                <button className="btn btn-secondary w-full text-sm">
                  Coming Soon
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-neutral-500 text-sm">
              Want to be notified when new resources are available?{' '}
              <Link href="/contact" className="text-primary">
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Blog/Articles */}
      <section className="section bg-neutral-50" aria-labelledby="articles-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="articles-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Articles & Insights
            </h2>
            <p className="text-lg text-neutral-600">
              Stay informed with the latest thinking on neurodivergent employment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <article key={index} className="card bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-primary text-xs">{article.category}</span>
                  <span className="text-xs text-neutral-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  {article.excerpt}
                </p>
                <span className="text-primary font-medium text-sm">
                  Coming Soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="section bg-white" aria-labelledby="external-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="external-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              External Resources
            </h2>
            <p className="text-lg text-neutral-600">
              Useful links to organisations and government resources
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {externalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-neutral-50 flex items-center gap-4 hover:shadow-lg transition-shadow no-underline group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <ExternalLinkIcon className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {resource.description}
                  </p>
                </div>
                <ArrowRightIcon className="text-neutral-400 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars & Events */}
      <section className="section bg-neutral-50" aria-labelledby="events-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="events-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Webinars & Events
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Join our upcoming webinars and workshops
            </p>

            <div className="card bg-white max-w-lg mx-auto">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarIcon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Coming Soon
                </h3>
                <p className="text-neutral-600 mb-6">
                  We are planning employer workshops and job seeker information sessions.
                  Register your interest to be notified.
                </p>
                <Link href="/contact" className="btn btn-primary no-underline">
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Need Personalised Support?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our team is here to help with your specific questions and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-4 no-underline"
              >
                Contact Us
              </Link>
              <Link
                href="/job-seekers"
                className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 no-underline"
              >
                Start Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon Components
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
