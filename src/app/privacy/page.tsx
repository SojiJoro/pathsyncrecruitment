// src/app/privacy/page.tsx

export const metadata = {
  title: 'Privacy Policy - PathSync Career Infrastructure Platform',
  description: 'Read our privacy policy to understand how we handle your data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>

        <p className="text-lg text-slate-700 leading-relaxed">
          At PathSync Career Infrastructure Platform, we respect your privacy. This policy explains
          how we collect, use, and protect your data when you use our learning platform, mentor
          services, and career development tools.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">1. What We Collect</h2>
          <p className="text-slate-700 leading-relaxed">
            We collect information necessary to provide our career infrastructure services:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-slate-700 ml-4">
            <li><strong>Account Information:</strong> Name, email address, and role (learner/mentor/employer)</li>
            <li><strong>Learning Progress:</strong> Completed steps, lessons, labs, and skill validations</li>
            <li><strong>Mentor Sessions:</strong> Session notes, feedback, and competency assessments</li>
            <li><strong>Portfolio Data:</strong> Project submissions and documented evidence of skills</li>
            <li><strong>Communication:</strong> Contact form submissions, support requests, and platform messages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">2. How We Use Your Data</h2>
          <p className="text-slate-700 leading-relaxed mb-3">
            Your data is used exclusively to provide and improve our career infrastructure platform:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Track your learning progression and skill development</li>
            <li>Enable mentor validation and feedback</li>
            <li>Connect validated learners with employment opportunities</li>
            <li>Improve platform features and learning content</li>
            <li>Respond to enquiries and provide support</li>
          </ul>
          <p className="mt-4 text-slate-700 font-semibold">
            We do not sell your data. Ever.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">3. Cookies and Analytics</h2>
          <p className="text-slate-700 leading-relaxed">
            Our platform uses essential cookies for authentication and progress tracking. We also use
            basic analytics to understand how users navigate the platform and identify areas for
            improvement. You can disable non-essential cookies in your browser settings without
            affecting core platform functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">4. Data Sharing</h2>
          <p className="text-slate-700 leading-relaxed mb-3">
            We share data only when necessary for service delivery:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li><strong>Mentors:</strong> See learner submissions and progress for validation purposes</li>
            <li><strong>Employers:</strong> Access validated skills and endorsements (with learner permission)</li>
            <li><strong>Service Providers:</strong> Email delivery, database hosting, and analytics (all GDPR-compliant)</li>
          </ul>
          <p className="mt-4 text-slate-700">
            We never sell your information to third parties or use it for advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">5. Your Rights (GDPR)</h2>
          <p className="text-slate-700 leading-relaxed mb-3">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li><strong>Access:</strong> Request a copy of your data</li>
            <li><strong>Correction:</strong> Update inaccurate information</li>
            <li><strong>Deletion:</strong> Request removal of your data (subject to legal obligations)</li>
            <li><strong>Portability:</strong> Export your learning progress and portfolio</li>
            <li><strong>Objection:</strong> Object to specific data processing activities</li>
          </ul>
          <p className="mt-4 text-slate-700">
            To exercise these rights, contact us at:{' '}
            <a href="mailto:privacy@pathsyncrecruitment.com" className="text-blue-600 hover:text-blue-700 font-semibold">
              privacy@pathsyncrecruitment.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">6. Data Security</h2>
          <p className="text-slate-700 leading-relaxed">
            We implement industry-standard security measures to protect your data, including
            encryption, secure authentication, and regular security audits. However, no system is
            100% secure. If you become aware of any security issues, please report them immediately
            to our security team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">7. Data Retention</h2>
          <p className="text-slate-700 leading-relaxed">
            We retain your learning progress and skill validations as long as your account is active.
            If you close your account, we will delete your personal data within 90 days, except where
            legal obligations require longer retention (e.g., financial records, mentor validation
            records for employment verification).
          </p>
        </section>

        <section className="bg-slate-50 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-900">Contact & Updates</h2>
          <p className="text-slate-700 mb-2">
            For privacy-related questions, contact:{' '}
            <a href="mailto:privacy@pathsyncrecruitment.com" className="text-blue-600 hover:text-blue-700 font-semibold">
              privacy@pathsyncrecruitment.com
            </a>
          </p>
          <p className="text-slate-700 mb-4">
            PathSync is operated by <strong>Joro Services Ltd</strong>, Company Number: 14979338
          </p>
          <p className="text-slate-600 text-sm">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </div>
  )
}
