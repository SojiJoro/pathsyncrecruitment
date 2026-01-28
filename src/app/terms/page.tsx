import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PathSync Recruitment',
  description: 'Read the terms and conditions for using PathSync Recruitment services for neurodivergent employment.',
}

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">
            The rules and agreements for using PathSync services
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Welcome to PathSync Recruitment. By using our platform and services, you agree to these terms.
            We&apos;ve written them in clear language because we believe everyone deserves to understand
            the agreements they&apos;re entering into.
          </p>

          {/* Quick Summary */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Quick Summary</h2>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Our services help connect neurodivergent job seekers with inclusive employers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Job seekers use our services for free; employers pay for talent access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Be honest in your profile and assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>We don&apos;t guarantee employment but work hard to find the right matches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>You can delete your account at any time</span>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. About PathSync</h2>
            <p className="text-neutral-700 mb-4">
              PathSync Recruitment is operated by <strong>Joro Services Ltd</strong>, a company registered
              in England and Wales (Company Number: 14979338). Our mission is to transform employment
              outcomes for neurodivergent individuals through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>AI-powered cognitive assessments that identify strengths, not deficits</li>
              <li>Pre-employment training and job readiness programs</li>
              <li>Matching neurodivergent candidates with suitable employers</li>
              <li>Employer training on neurodiversity inclusion</li>
              <li>Ongoing post-placement support for sustainable employment</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Who Can Use Our Services</h2>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Job Seekers</h3>
            <p className="text-neutral-700 mb-4">
              Our job seeker services are available to individuals who:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Are aged 18 or over</li>
              <li>Identify as neurodivergent or believe they may be neurodivergent</li>
              <li>Are legally authorized to work in the United Kingdom</li>
              <li>Are genuinely seeking employment opportunities</li>
            </ul>
            <p className="text-neutral-700 mt-4 bg-secondary/10 p-4 rounded-lg">
              <strong>Note:</strong> You do not need a formal diagnosis to use our services.
              Our assessments focus on cognitive strengths and work preferences, not medical diagnoses.
            </p>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Employers</h3>
            <p className="text-neutral-700 mb-4">
              Our employer services are available to organizations that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Are legally registered businesses in the UK</li>
              <li>Commit to providing inclusive, neurodivergent-friendly workplaces</li>
              <li>Complete our neurodiversity awareness training</li>
              <li>Agree to provide reasonable workplace accommodations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Your Responsibilities</h2>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">For All Users</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Provide accurate and truthful information</li>
              <li>Keep your account credentials secure</li>
              <li>Use the platform only for lawful purposes</li>
              <li>Treat other users with respect and dignity</li>
              <li>Report any concerns or inappropriate behavior to our team</li>
              <li>Not attempt to manipulate, hack, or exploit the platform</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">For Job Seekers</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Complete assessments honestly &ndash; they&apos;re designed to help you, not judge you</li>
              <li>Keep your profile and availability status up to date</li>
              <li>Respond to employer inquiries in a reasonable timeframe</li>
              <li>Inform us if you secure employment (through PathSync or otherwise)</li>
              <li>Participate in post-placement support check-ins</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">For Employers</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Honor commitments made during the partnership agreement</li>
              <li>Provide accurate job descriptions and workplace information</li>
              <li>Complete required neurodiversity training before accessing candidates</li>
              <li>Implement recommended workplace accommodations</li>
              <li>Provide feedback on placements to help us improve</li>
              <li>Pay invoices within agreed payment terms</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Our Services &amp; Limitations</h2>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">What We Provide</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Cognitive assessments to identify your strengths and optimal work environment</li>
              <li>Pre-employment training to build job readiness</li>
              <li>AI-powered matching with suitable employers</li>
              <li>Support throughout the interview and hiring process</li>
              <li>90-day post-placement support (or longer, depending on program)</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">What We Don&apos;t Guarantee</h3>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <p className="text-neutral-700">
                While we work hard to create successful matches, we cannot guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4 mt-2">
                <li>That you will find employment through our platform</li>
                <li>Specific salary levels or job conditions</li>
                <li>That employment will be long-term or permanent</li>
                <li>That all workplaces will be perfectly suited to your needs</li>
              </ul>
              <p className="text-neutral-700 mt-4">
                Employment outcomes depend on many factors including market conditions, individual
                circumstances, and the effort both parties put into the process.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Fees &amp; Payment</h2>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">For Job Seekers</h3>
            <p className="text-neutral-700 mb-4 font-semibold text-secondary">
              Our core services for job seekers are completely free.
            </p>
            <p className="text-neutral-700">
              This includes cognitive assessments, pre-employment training, job matching, and
              post-placement support. We may offer optional premium services in the future, which
              would be clearly labeled with pricing.
            </p>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">For Employers</h3>
            <p className="text-neutral-700 mb-4">
              Employers pay for access to our talent pool and services. Fees are structured as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>Placement Fees:</strong> A percentage of first-year salary upon successful hire</li>
              <li><strong>Training Packages:</strong> Fixed fees for neurodiversity awareness programs</li>
              <li><strong>Subscription Plans:</strong> Monthly access for ongoing recruitment needs</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              All fees will be agreed in writing before services commence. Payment terms are
              typically 30 days from invoice date.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Assessment Data &amp; Intellectual Property</h2>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Your Data</h3>
            <p className="text-neutral-700 mb-4">
              You retain ownership of your personal information and work history. By using our
              services, you grant us a license to use this information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Create your candidate profile</li>
              <li>Match you with suitable opportunities</li>
              <li>Share with employers (with your explicit consent)</li>
              <li>Improve our services through anonymized analysis</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Our Content</h3>
            <p className="text-neutral-700">
              PathSync owns all intellectual property in our platform, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4 mt-2">
              <li>Assessment tools and methodologies</li>
              <li>AI matching algorithms</li>
              <li>Training materials and content</li>
              <li>Branding, logos, and design elements</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              You may not reproduce, distribute, or create derivative works from our content
              without written permission.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Account Termination</h2>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">By You</h3>
            <p className="text-neutral-700">
              You can close your account at any time by contacting us at{' '}
              <a href="mailto:support@pathsyncrecruitment.com" className="text-primary hover:underline">
                support@pathsyncrecruitment.com
              </a>
              . Your personal data will be deleted within 30 days (except where we&apos;re legally
              required to retain it).
            </p>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">By Us</h3>
            <p className="text-neutral-700 mb-4">
              We may suspend or terminate accounts that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Violate these terms or our policies</li>
              <li>Engage in fraudulent or deceptive behavior</li>
              <li>Misrepresent qualifications or intentions</li>
              <li>Harass other users or our staff</li>
              <li>Attempt to manipulate our systems</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              We will provide notice and an opportunity to appeal, except in cases of serious
              misconduct requiring immediate action.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-neutral-700 mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>PathSync is not liable for employment outcomes or workplace experiences</li>
              <li>We are not responsible for actions taken by employers or other users</li>
              <li>Our total liability is limited to fees paid in the 12 months prior to any claim</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              Nothing in these terms limits liability for death, personal injury caused by
              negligence, fraud, or any other liability that cannot be excluded by law.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Dispute Resolution</h2>
            <p className="text-neutral-700 mb-4">
              If you have a concern or complaint:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-neutral-700 ml-4">
              <li>Contact us first at{' '}
                <a href="mailto:support@pathsyncrecruitment.com" className="text-primary hover:underline">
                  support@pathsyncrecruitment.com
                </a> &ndash; we aim to resolve issues quickly
              </li>
              <li>If not resolved, you may request escalation to our management team</li>
              <li>As a last resort, disputes are subject to the exclusive jurisdiction of English courts</li>
            </ol>
            <p className="text-neutral-700 mt-4">
              These terms are governed by the laws of England and Wales.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Changes to These Terms</h2>
            <p className="text-neutral-700">
              We may update these terms to reflect changes in our services or legal requirements.
              For material changes, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4 mt-2">
              <li>Notify you by email at least 30 days before changes take effect</li>
              <li>Post a summary of changes on our platform</li>
              <li>Give you the option to close your account if you disagree</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              Continued use of our services after changes indicates acceptance of the updated terms.
            </p>
          </section>

          {/* Contact Box */}
          <section className="bg-neutral-100 p-6 rounded-xl mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Questions About These Terms?</h2>
            <p className="text-neutral-700 mb-4">
              If anything in these terms is unclear, please contact us. We&apos;re happy to explain.
            </p>
            <p className="text-neutral-700 mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:legal@pathsyncrecruitment.com" className="text-primary hover:underline">
                legal@pathsyncrecruitment.com
              </a>
            </p>
            <p className="text-neutral-700 mb-4">
              <strong>Registered Office:</strong><br />
              Joro Services Ltd<br />
              Company Number: 14979338<br />
              Kemp House, 152-160 City Road<br />
              London EC1V 2NX, United Kingdom
            </p>
            <p className="text-neutral-600 text-sm border-t border-neutral-200 pt-4 mt-4">
              Last Updated: January 2026
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
