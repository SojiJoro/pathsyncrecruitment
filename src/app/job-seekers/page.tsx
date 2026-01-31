import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Job Seekers',
  description: 'PathSync helps neurodivergent candidates find roles that match their cognitive strengths. Access our assessment through partner employers and recruitment agencies.',
};

export default function JobSeekersPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <UserIcon className="text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              For Neurodivergent Job Seekers
            </h1>

            <p className="text-xl text-neutral-600 mb-8">
              PathSync&apos;s cognitive strengths assessment helps you showcase your true abilities—not just your interview skills.
            </p>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                How to access PathSync assessment
              </h2>
              <p className="text-neutral-600 mb-6">
                PathSync assessment is provided through our partner employers and recruitment agencies. If you&apos;re interested in taking the assessment:
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">Through an employer</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    If you&apos;re applying for a role at a company that uses PathSync, they&apos;ll invite you to complete the assessment as part of their hiring process.
                  </p>
                  <Link href="/employers" className="text-primary font-medium text-sm hover:underline">
                    See employers using PathSync →
                  </Link>
                </div>

                <div className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">Through a recruitment agency</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Many recruitment agencies partner with PathSync to better assess and place neurodivergent candidates.
                  </p>
                  <Link href="/recruiters" className="text-primary font-medium text-sm hover:underline">
                    Find partner agencies →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-neutral-900 mb-2">Are you an employer or recruiter?</h3>
              <p className="text-neutral-600 mb-4">
                Interested in using PathSync to assess candidates? We&apos;d love to show you how our cognitive strengths assessment can improve your hiring outcomes.
              </p>
              <Link href="/contact?demo=true" className="btn btn-primary no-underline">
                Request a Demo
              </Link>
            </div>

            <div className="text-left bg-white rounded-2xl p-8 border border-neutral-200">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                What to expect from PathSync assessment
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ClockIcon className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">45-60 minutes, at your pace</h3>
                    <p className="text-neutral-600 text-sm">
                      No strict time limits. Take breaks whenever you need. Save your progress and come back later.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BrainIcon className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Designed for how you think</h3>
                    <p className="text-neutral-600 text-sm">
                      Task-based exercises that measure your actual cognitive strengths—not how well you perform in interviews.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <AccessibilityIcon className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Fully accessible</h3>
                    <p className="text-neutral-600 text-sm">
                      Screen reader compatible, keyboard navigation, high contrast mode, and dyslexia-friendly fonts available.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ShieldIcon className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Your data is protected</h3>
                    <p className="text-neutral-600 text-sm">
                      GDPR compliant. You control what employers see. Results are never shared without your consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-neutral-500 text-sm">
                Questions about PathSync?{' '}
                <Link href="/contact" className="text-primary hover:underline">
                  Get in touch
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
      <path d="M16 8V5c0-1.1.9-2 2-2" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M12 8h8" />
    </svg>
  );
}

function AccessibilityIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="7" r="1" />
      <path d="M12 10v6" />
      <path d="M9 13h6" />
      <path d="m9 17 3-3 3 3" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
