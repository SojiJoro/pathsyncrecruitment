// src/app/privacy/page.tsx

export const metadata = {
    title: 'Privacy Policy - Pathsync Recruitment',
    description: 'Read our privacy policy to understand how we handle your data.',
  }
  
  export default function PrivacyPage() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
  
        <p>
          At Pathsync Recruitment, we respect your privacy. This policy explains how we collect and use your data.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">1. What We Collect</h2>
        <p>
          We may collect your name, email address, phone number, and job-related information when you contact us through our forms or via email.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">2. How We Use Your Data</h2>
        <p>
          Your data is used to respond to enquiries, improve our services, and connect candidates with job opportunities. We do not sell your data.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">3. Cookies</h2>
        <p>
          Our site may use basic cookies for analytics and site performance. You can disable cookies in your browser.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">4. Data Sharing</h2>
        <p>
          We only share data with trusted third parties necessary for service delivery (e.g., email services). We never sell your information.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
        <p>
          You may request access to, correction, or deletion of your data by contacting us at enquiry@pathsyncrecruitment.com.
        </p>
  
        <p className="mt-6">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
      </div>
    )
  }
  