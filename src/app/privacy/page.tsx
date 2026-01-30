import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PathSync Recruitment',
  description: 'Learn how PathSync Recruitment protects your data and privacy as a neurodivergent job seeker or employer partner.',
}

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">
            How we protect your data and respect your privacy
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            At PathSync Recruitment, we understand that privacy is especially important to many neurodivergent
            individuals. We are committed to protecting your personal information and being transparent about
            how we collect, use, and safeguard your data. This policy explains our practices in clear,
            straightforward language.
          </p>

          {/* Quick Summary Box */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Quick Summary</h2>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>We only collect data necessary to help you find employment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Your assessment results are never shared without your explicit consent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>We never sell your data to third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>You can request deletion of your data at any time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>We are fully GDPR compliant</span>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Information We Collect</h2>
            <p className="text-neutral-700 mb-4">
              We collect information to provide our neurodivergent employment services:
            </p>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">For Job Seekers:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>Account Information:</strong> Name, email address, phone number, and communication preferences</li>
              <li><strong>Assessment Data:</strong> Responses to our cognitive assessment, including strengths, preferences, and optimal working conditions</li>
              <li><strong>Profile Information:</strong> Skills, work experience, education, and career interests</li>
              <li><strong>Accommodation Needs:</strong> Any workplace accommodations or support requirements you share with us</li>
              <li><strong>Communication Records:</strong> Messages and interactions with our team</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">For Employers:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>Company Information:</strong> Business name, industry, size, and contact details</li>
              <li><strong>Hiring Needs:</strong> Role requirements, team structure, and workplace environment details</li>
              <li><strong>Training Records:</strong> Completion status of neurodiversity awareness programs</li>
              <li><strong>Billing Information:</strong> Payment details processed securely through our payment provider</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Automatically Collected:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>Usage Data:</strong> How you interact with our platform to improve user experience</li>
              <li><strong>Device Information:</strong> Browser type, operating system for technical support</li>
              <li><strong>Accessibility Preferences:</strong> Font size, contrast, and motion settings you select</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. How We Use Your Data</h2>
            <p className="text-neutral-700 mb-4">
              Your data is used exclusively to provide and improve our employment services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Process and analyze cognitive assessments to identify your strengths</li>
              <li>Match you with suitable employment opportunities based on cognitive fit</li>
              <li>Provide personalized pre-employment training and support</li>
              <li>Facilitate communication between job seekers and employers</li>
              <li>Deliver post-placement support and check-ins</li>
              <li>Improve our AI matching algorithms and assessment tools</li>
              <li>Send relevant updates about opportunities (with your consent)</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p className="mt-4 text-neutral-700 font-semibold bg-secondary/10 p-4 rounded-lg">
              We never use your neurodivergent identity or assessment data for advertising purposes.
              We never sell your data to third parties. Ever.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Assessment Data Protection</h2>
            <p className="text-neutral-700 mb-4">
              We take extra care with your cognitive assessment data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>Anonymized Analysis:</strong> Assessment patterns are analyzed in aggregate for research, with all identifying information removed</li>
              <li><strong>Controlled Sharing:</strong> Your assessment results are only shared with potential employers after you give explicit consent for each specific opportunity</li>
              <li><strong>No Diagnostic Claims:</strong> We do not diagnose medical conditions; our assessments identify cognitive strengths and work preferences</li>
              <li><strong>Secure Storage:</strong> Assessment data is encrypted and stored separately from identifying information</li>
              <li><strong>Limited Access:</strong> Only authorized team members can access your full profile</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Data Sharing</h2>
            <p className="text-neutral-700 mb-4">
              We share data only when necessary for service delivery:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>Employer Partners:</strong> Profile and assessment summary shared only with your explicit consent for specific roles</li>
              <li><strong>Service Providers:</strong> Secure cloud hosting, email services, and analytics (all GDPR-compliant with data processing agreements)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
            </ul>
            <p className="mt-4 text-neutral-700">
              Before sharing your information with any employer, we will always:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-neutral-700 ml-4 mt-2">
              <li>Ask for your explicit consent</li>
              <li>Tell you exactly what will be shared</li>
              <li>Explain why this employer might be a good match</li>
              <li>Give you the option to review and edit what&apos;s shared</li>
            </ol>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Your Rights (GDPR)</h2>
            <p className="text-neutral-700 mb-4">
              Under UK GDPR, you have the following rights:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Access', desc: 'Request a copy of all data we hold about you' },
                { title: 'Correction', desc: 'Update or correct any inaccurate information' },
                { title: 'Deletion', desc: 'Request removal of your data ("right to be forgotten")' },
                { title: 'Portability', desc: 'Export your data in a machine-readable format' },
                { title: 'Objection', desc: 'Object to specific processing activities' },
                { title: 'Restriction', desc: 'Limit how we use your data' },
              ].map((right, idx) => (
                <div key={idx} className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-neutral-900">{right.title}</h4>
                  <p className="text-sm text-neutral-600">{right.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-neutral-700">
              To exercise these rights, email:{' '}
              <a href="mailto:privacy@pathsyncrecruitment.com" className="text-primary hover:underline font-semibold">
                privacy@pathsyncrecruitment.com
              </a>
            </p>
            <p className="text-neutral-700 mt-2">
              We will respond to all requests within 30 days.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Data Security</h2>
            <p className="text-neutral-700 mb-4">
              We implement robust security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>256-bit SSL/TLS encryption for all data transmission</li>
              <li>Encrypted database storage with access controls</li>
              <li>Regular security audits and penetration testing</li>
              <li>Multi-factor authentication for team access</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Cookies</h2>
            <p className="text-neutral-700 mb-4">
              We use minimal cookies to provide our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>Essential Cookies:</strong> Required for login, security, and basic functionality</li>
              <li><strong>Accessibility Cookies:</strong> Remember your font size, contrast, and motion preferences</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how to improve the platform (can be disabled)</li>
            </ul>
            <p className="mt-4 text-neutral-700">
              You can manage cookie preferences in your browser settings without affecting core platform functionality.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Data Retention</h2>
            <p className="text-neutral-700 mb-4">
              We retain your data as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
              <li><strong>Inactive Accounts:</strong> Data deleted after 2 years of inactivity</li>
              <li><strong>Deleted Accounts:</strong> Personal data removed within 30 days of account deletion request</li>
              <li><strong>Legal Requirements:</strong> Some data may be retained longer for legal compliance (e.g., financial records for 7 years)</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-neutral-700">
              Our services are intended for users aged 18 and over. We do not knowingly collect data from
              individuals under 18. If you believe we have inadvertently collected such data, please contact
              us immediately.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-neutral-700">
              We may update this policy to reflect changes in our practices or legal requirements.
              Material changes will be communicated via email at least 30 days before taking effect.
              The &quot;Last Updated&quot; date below indicates when the policy was last revised.
            </p>
          </section>

          {/* Contact Box */}
          <section className="bg-neutral-100 p-6 rounded-xl mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Contact Us</h2>
            <p className="text-neutral-700 mb-2">
              For privacy-related questions or to exercise your data rights:
            </p>
            <p className="text-neutral-700 mb-4">
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@pathsyncrecruitment.com" className="text-primary hover:underline">
                privacy@pathsyncrecruitment.com
              </a>
            </p>
            <p className="text-neutral-700 mb-4">
              <strong>Data Controller:</strong><br />
              Joro Services Ltd<br />
              Company Number: 14979338<br />
              Kemp House, 152-160 City Road<br />
              London EC1V 2NX, United Kingdom
            </p>
            <p className="text-neutral-700 mb-4">
              <strong>Supervisory Authority:</strong><br />
              You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
              if you believe your data protection rights have been violated.
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
