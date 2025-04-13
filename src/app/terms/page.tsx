// src/app/terms/page.tsx

export const metadata = {
    title: 'Terms and Conditions - Pathsync Recruitment',
    description: 'Please review the terms and conditions for using Pathsync Recruitment services.',
  }
  
  export default function TermsPage() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
  
        <p>
          Welcome to Pathsync Recruitment. By using our website and services, you agree to the following terms.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">1. Services We Provide</h2>
        <p>
          Pathsync Recruitment is a recruitment service operated under Joro Services Ltd, registered in the United Kingdom. 
          We provide job listings and connect employers with candidates. We do not guarantee job placement.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">2. User Responsibilities</h2>
        <p>
          You agree to use this website only for lawful purposes. You must not provide false information or use our platform to mislead others.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">3. Intellectual Property</h2>
        <p>
          All content on this website, including the logo, text, and visuals, are the property of Pathsync Recruitment or licensed third parties. 
          You may not reuse content without our written permission.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">4. Limitation of Liability</h2>
        <p>
          We strive to provide accurate information, but we do not take responsibility for any errors or damages that may occur from using our site.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">5. Governing Law</h2>
        <p>
          These terms are governed by the laws of England and Wales.
        </p>
  
        <p className="mt-6">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
      </div>
    )
  }
  