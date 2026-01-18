// src/app/terms/page.tsx

export const metadata = {
  title: 'Terms and Conditions - PathSync Career Infrastructure Platform',
  description: 'Please review the terms and conditions for using PathSync platform services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">Terms and Conditions</h1>

        <p className="text-lg text-slate-700 leading-relaxed">
          Welcome to PathSync Career Infrastructure Platform. By using our platform services,
          you agree to the following terms. Please read them carefully.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">1. Services We Provide</h2>
          <p className="text-slate-700 leading-relaxed mb-3">
            PathSync is a career infrastructure platform operated by <strong>Joro Services Ltd</strong>,
            registered in the United Kingdom (Company Number: 14979338). We provide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Structured learning paths for career skill development</li>
            <li>Mentor validation services and competency assessment</li>
            <li>Progress tracking and portfolio documentation</li>
            <li>Employment readiness verification for validated learners</li>
            <li>Platform access for learners, mentors, and employers</li>
          </ul>
          <p className="mt-4 text-slate-700">
            We do not guarantee employment outcomes, but we provide the infrastructure and
            validation systems that support career development and job readiness.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">2. User Responsibilities</h2>
          <p className="text-slate-700 leading-relaxed mb-3">
            As a platform user, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Provide accurate and truthful information when creating an account</li>
            <li>Use the platform only for lawful purposes and legitimate career development</li>
            <li>Not misrepresent your skills, experience, or completed learning paths</li>
            <li>Respect intellectual property rights of learning materials and other users&apos; work</li>
            <li>Maintain confidentiality of your account credentials</li>
            <li>Not attempt to disrupt, hack, or gain unauthorized access to platform systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">3. Learning Content and Progress</h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>For Learners:</strong> Your learning progress, submitted work, and mentor
            validations are documented and may be shared with potential employers (with your
            permission). You retain ownership of original work you create, but grant PathSync
            a license to use it for portfolio and validation purposes.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            <strong>For Mentors:</strong> By providing feedback and validations, you certify that
            your assessments are honest, professional, and based on the learner&apos;s demonstrated
            capability. False or misleading validations may result in mentor status removal.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            <strong>For Employers:</strong> Validated skill records and mentor endorsements reflect
            the learner&apos;s demonstrated competency at the time of validation. We do not guarantee
            ongoing skill maintenance or future performance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">4. Intellectual Property</h2>
          <p className="text-slate-700 leading-relaxed">
            All platform content including logos, learning curricula, assessment frameworks,
            system architecture, and documentation are the property of PathSync (Joro Services Ltd)
            or our licensed partners. You may not reproduce, distribute, or create derivative
            works without written permission.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Learning materials and labs may reference or use third-party technologies. Users are
            responsible for complying with those technologies&apos; licenses and terms when using them
            in projects.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">5. Platform Access and Accounts</h2>
          <p className="text-slate-700 leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate these terms,
            engage in fraudulent activity, or misuse platform services. Account termination
            decisions may be appealed by contacting support@pathsyncrecruitment.com.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Platform availability is provided &quot;as is&quot; without guarantees of uptime. We will
            make reasonable efforts to maintain service availability and provide notice of
            planned maintenance when possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">6. Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed">
            We strive to provide accurate learning content and reliable platform services, but
            we do not guarantee specific employment outcomes or career advancement. To the extent
            permitted by law, PathSync (Joro Services Ltd) is not liable for indirect, incidental,
            or consequential damages arising from platform use.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Our total liability for any claim related to platform services is limited to the
            amount paid by the user for those services in the 12 months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">7. Payments and Refunds</h2>
          <p className="text-slate-700 leading-relaxed">
            Payment terms for platform access, mentor sessions, or premium features will be
            clearly communicated before purchase. Refund policies vary by service type and will
            be specified at the time of purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">8. Changes to Terms</h2>
          <p className="text-slate-700 leading-relaxed">
            We may update these terms to reflect changes in our services or legal requirements.
            Material changes will be communicated via email or platform notification at least
            30 days before taking effect. Continued use of the platform after changes indicates
            acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">9. Governing Law and Disputes</h2>
          <p className="text-slate-700 leading-relaxed">
            These terms are governed by the laws of England and Wales. Any disputes will be
            resolved through good-faith negotiation first, with legal proceedings subject to
            the exclusive jurisdiction of English courts.
          </p>
        </section>

        <section className="bg-slate-50 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-900">Contact Information</h2>
          <p className="text-slate-700 mb-2">
            For questions about these terms, contact:{' '}
            <a href="mailto:legal@pathsyncrecruitment.com" className="text-blue-600 hover:text-blue-700 font-semibold">
              legal@pathsyncrecruitment.com
            </a>
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Joro Services Ltd</strong><br />
            Company Number: 14979338<br />
            Registered in England and Wales
          </p>
          <p className="text-slate-600 text-sm">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </div>
  )
}
