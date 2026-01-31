import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'PathSync API documentation, integration guides, and assessment methodology. Everything you need to integrate cognitive strengths assessment into your hiring workflow.',
};

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Everything you need to integrate PathSync into your hiring workflow. API reference, integration guides, and methodology deep-dives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#api-reference" className="btn bg-white text-neutral-900 hover:bg-neutral-100 no-underline">
                API Reference
              </Link>
              <Link href="#integrations" className="btn border-2 border-white text-white hover:bg-white/10 no-underline">
                Integration Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="#getting-started" className="group bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all no-underline">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <RocketIcon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">Getting Started</h3>
              <p className="text-neutral-600">Quick start guide to running your first assessment</p>
            </Link>

            <Link href="#api-reference" className="group bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all no-underline">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <CodeIcon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">API Reference</h3>
              <p className="text-neutral-600">Complete REST API documentation</p>
            </Link>

            <Link href="#methodology" className="group bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all no-underline">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookIcon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">Methodology</h3>
              <p className="text-neutral-600">Scientific basis for our assessment approach</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">Getting Started</h2>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">1. Create an account</h3>
              <p className="text-neutral-600 mb-4">
                Sign up for PathSync and complete your organisation profile. You&apos;ll receive API credentials for integration.
              </p>
              <Link href="/contact?plan=starter" className="text-primary font-medium hover:underline">
                Request access →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">2. Configure your assessment</h3>
              <p className="text-neutral-600 mb-4">
                Set up role profiles, customise branding, and configure candidate communication templates in your dashboard.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">3. Send your first assessment</h3>
              <p className="text-neutral-600 mb-4">
                Use the dashboard or API to invite candidates. They&apos;ll receive an email with a secure assessment link.
              </p>
              <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>{`curl -X POST https://api.pathsync.io/v1/assessments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "candidate_email": "candidate@example.com",
    "candidate_name": "Jane Smith",
    "role_id": "software-engineer"
  }'`}</pre>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">4. Receive results</h3>
              <p className="text-neutral-600 mb-4">
                Once the candidate completes their assessment, you&apos;ll receive the cognitive profile via webhook or can retrieve it via API.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="api-reference" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">API Reference</h2>
            <p className="text-lg text-neutral-600 mb-8">
              The PathSync API is organised around REST. Our API accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes.
            </p>

            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-neutral-900 mb-2">Base URL</h3>
              <code className="text-primary bg-white px-3 py-1 rounded border border-neutral-200">
                https://api.pathsync.io/v1
              </code>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 bg-neutral-50 border-b border-neutral-200">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-mono font-bold rounded">POST</span>
                  <code className="text-neutral-900">/assessments</code>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">Create a new assessment invitation for a candidate.</p>
                  <h4 className="font-semibold text-neutral-900 mb-2">Request Body</h4>
                  <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm text-neutral-300">
                    <pre>{`{
  "candidate_email": "string",
  "candidate_name": "string",
  "role_id": "string",
  "custom_fields": {}
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 bg-neutral-50 border-b border-neutral-200">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono font-bold rounded">GET</span>
                  <code className="text-neutral-900">/assessments/:id</code>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">Retrieve assessment results and candidate cognitive profile.</p>
                  <h4 className="font-semibold text-neutral-900 mb-2">Response</h4>
                  <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm text-neutral-300">
                    <pre>{`{
  "id": "asmt_123",
  "status": "completed",
  "candidate": {...},
  "cognitive_profile": {...},
  "role_matches": [...],
  "interview_guide": {...},
  "accommodations": [...]
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 bg-neutral-50 border-b border-neutral-200">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono font-bold rounded">GET</span>
                  <code className="text-neutral-900">/roles</code>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600">List all configured role profiles for your organisation.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-neutral-700">
                <strong>Full API documentation coming soon.</strong> Enterprise customers receive complete API access and dedicated integration support.{' '}
                <Link href="/contact?plan=enterprise" className="text-primary hover:underline">Contact us</Link> for early access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Integrations</h2>
            <p className="text-lg text-neutral-600 mb-8">
              PathSync integrates with your existing hiring tools. Send assessments, receive results, and manage candidates without leaving your workflow.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Workday', status: 'Available', description: 'Native integration with Workday Recruiting' },
                { name: 'Greenhouse', status: 'Available', description: 'Seamless candidate flow with Greenhouse' },
                { name: 'Lever', status: 'Available', description: 'Integrated assessment tracking in Lever' },
                { name: 'BambooHR', status: 'Coming Soon', description: 'BambooHR integration in development' },
                { name: 'Webhooks', status: 'Available', description: 'Real-time notifications for any platform' },
                { name: 'Custom API', status: 'Available', description: 'Build your own integration with our REST API' },
              ].map((integration, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-neutral-900">{integration.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      integration.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Assessment Methodology</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Our assessment is developed in collaboration with occupational psychologists and validated against real-world job performance data.
            </p>

            <div className="space-y-8">
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Strengths-based approach</h3>
                <p className="text-neutral-600 mb-4">
                  Unlike traditional psychometric tests that identify deficits, PathSync assessment is designed to identify what candidates excel at. This approach is particularly effective for neurodivergent individuals whose strengths are often overlooked by conventional assessments.
                </p>
                <p className="text-neutral-600">
                  We measure six core cognitive dimensions: pattern recognition, attention to detail, deep focus, systematic thinking, creative problem-solving, and memory/recall.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Anxiety-reduced design</h3>
                <p className="text-neutral-600 mb-4">
                  Traditional assessments create artificial pressure that disadvantages candidates who experience anxiety—particularly common among neurodivergent individuals. PathSync assessment is designed to minimise anxiety through:
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li>• No strict time limits</li>
                  <li>• Clear, unambiguous instructions</li>
                  <li>• Ability to pause and resume</li>
                  <li>• Multiple accessibility options</li>
                  <li>• Task-based exercises rather than abstract questions</li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Validation & accuracy</h3>
                <p className="text-neutral-600 mb-4">
                  Our assessment methodology is continuously validated against hiring outcomes. We track:
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Correlation between predicted and actual job performance</li>
                  <li>• Retention rates for candidates hired through PathSync</li>
                  <li>• Feedback from both employers and candidates</li>
                  <li>• Adverse impact analysis to ensure fairness</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-neutral-700">
                <strong>Full methodology whitepaper available on request.</strong>{' '}
                <Link href="/contact?type=methodology" className="text-primary hover:underline">Contact us</Link> for access to our validation studies and research papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to integrate?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Get started with PathSync API or speak to our team about enterprise integration options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?plan=enterprise" className="btn bg-white text-neutral-900 hover:bg-neutral-100 no-underline">
                Contact Sales
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

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
