import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement - PathSync Recruitment',
  description: 'Learn about PathSync Recruitment\'s commitment to accessibility and how we make our platform inclusive for neurodivergent users.',
}

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-xl text-white/90">
            Our commitment to making PathSync accessible to everyone
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            PathSync Recruitment is committed to ensuring digital accessibility for people of all abilities.
            As a platform specifically designed to serve neurodivergent individuals, accessibility isn&apos;t
            just a legal requirement for us &mdash; it&apos;s central to our mission.
          </p>

          {/* Quick Access */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Quick Access: Accessibility Tools</h2>
            <p className="text-neutral-700 mb-4">
              Use our built-in accessibility toolbar (icon in the top navigation) to:
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Aa</span>
                <span><strong>Adjust text size</strong> &ndash; Choose from normal, large, or extra-large</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">◐</span>
                <span><strong>High contrast mode</strong> &ndash; Enhanced color contrast for better readability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Dy</span>
                <span><strong>Dyslexia-friendly font</strong> &ndash; OpenDyslexic font option</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">◷</span>
                <span><strong>Reduced motion</strong> &ndash; Minimize animations and transitions</span>
              </li>
            </ul>
            <p className="text-neutral-600 text-sm mt-4">
              Your preferences are saved automatically and persist across sessions.
            </p>
          </div>

          {/* Conformance Status */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Conformance Status</h2>
            <p className="text-neutral-700 mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and
              developers to improve accessibility for people with disabilities. PathSync strives to
              conform to <strong>WCAG 2.1 Level AA</strong>.
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg">
              <p className="text-neutral-700">
                <strong>Current status:</strong> We are actively working toward full WCAG 2.1 AA compliance.
                While we believe our platform meets most requirements, we continue to audit and improve
                our accessibility features.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Accessibility Features</h2>
            <p className="text-neutral-700 mb-4">
              We have implemented the following accessibility features:
            </p>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Visual Accessibility</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>High contrast color scheme option</li>
              <li>Adjustable text sizing (3 size options)</li>
              <li>OpenDyslexic font option for users with dyslexia</li>
              <li>Color contrast ratios meeting WCAG AA standards</li>
              <li>No content conveyed by color alone</li>
              <li>Clear visual focus indicators for keyboard navigation</li>
              <li>Consistent page layouts and navigation</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Motor &amp; Navigation Accessibility</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Full keyboard navigation support</li>
              <li>Skip-to-content link on every page</li>
              <li>Large click targets for buttons and links</li>
              <li>No time limits on form completion</li>
              <li>Reduced motion option for users sensitive to animation</li>
              <li>Logical tab order throughout the site</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Cognitive Accessibility</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Clear, simple language throughout</li>
              <li>Consistent navigation and layout</li>
              <li>Progress indicators for multi-step processes</li>
              <li>Clear error messages with guidance on how to fix issues</li>
              <li>Ability to save and resume assessments</li>
              <li>No sudden changes or unexpected behaviors</li>
              <li>Chunked content with clear headings</li>
            </ul>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Screen Reader Compatibility</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Semantic HTML structure</li>
              <li>ARIA labels where appropriate</li>
              <li>Alt text for images</li>
              <li>Descriptive link text</li>
              <li>Properly labeled form fields</li>
              <li>Heading hierarchy maintained</li>
            </ul>
          </section>

          {/* Assessment Accessibility */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Assessment Accessibility</h2>
            <p className="text-neutral-700 mb-4">
              Our cognitive assessments are specifically designed to be accessible:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li><strong>No time pressure:</strong> Complete at your own pace with no penalties</li>
              <li><strong>Save and resume:</strong> Take breaks whenever you need and continue later</li>
              <li><strong>Clear instructions:</strong> Each section includes plain-language explanations</li>
              <li><strong>Multiple formats:</strong> Questions presented in text, with visual aids where helpful</li>
              <li><strong>Progress tracking:</strong> Always know where you are and what&apos;s ahead</li>
              <li><strong>Accommodations available:</strong> Contact us for additional support needs</li>
            </ul>
          </section>

          {/* Known Limitations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Known Limitations</h2>
            <p className="text-neutral-700 mb-4">
              We are aware of the following accessibility limitations and are working to address them:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Area</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Limitation</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Planned Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-neutral-700">PDF Resources</td>
                    <td className="px-4 py-3 text-neutral-700">Some downloadable PDFs may not be fully accessible</td>
                    <td className="px-4 py-3 text-neutral-700">Q1 2026 &ndash; Creating accessible versions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-700">Video Content</td>
                    <td className="px-4 py-3 text-neutral-700">Not all videos have captions yet</td>
                    <td className="px-4 py-3 text-neutral-700">Q1 2026 &ndash; Adding captions to all videos</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-700">Third-party Tools</td>
                    <td className="px-4 py-3 text-neutral-700">Some embedded tools have limited accessibility</td>
                    <td className="px-4 py-3 text-neutral-700">Ongoing &ndash; Working with vendors</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-neutral-700 mt-4">
              If you encounter any accessibility barriers, please contact us and we will provide
              an accessible alternative.
            </p>
          </section>

          {/* Browser & Technology Support */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Browser &amp; Technology Support</h2>
            <p className="text-neutral-700 mb-4">
              PathSync is designed to work with:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Supported Browsers</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>Chrome (latest 2 versions)</li>
                  <li>Firefox (latest 2 versions)</li>
                  <li>Safari (latest 2 versions)</li>
                  <li>Edge (latest 2 versions)</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Assistive Technologies</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>NVDA (Windows)</li>
                  <li>VoiceOver (macOS, iOS)</li>
                  <li>JAWS (Windows)</li>
                  <li>TalkBack (Android)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Keyboard Shortcuts */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Keyboard Navigation</h2>
            <p className="text-neutral-700 mb-4">
              Our platform supports full keyboard navigation:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Key</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-neutral-700"><kbd className="px-2 py-1 bg-neutral-200 rounded text-sm">Tab</kbd></td>
                    <td className="px-4 py-3 text-neutral-700">Move forward through interactive elements</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-700"><kbd className="px-2 py-1 bg-neutral-200 rounded text-sm">Shift</kbd> + <kbd className="px-2 py-1 bg-neutral-200 rounded text-sm">Tab</kbd></td>
                    <td className="px-4 py-3 text-neutral-700">Move backward through interactive elements</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-700"><kbd className="px-2 py-1 bg-neutral-200 rounded text-sm">Enter</kbd></td>
                    <td className="px-4 py-3 text-neutral-700">Activate buttons and links</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-700"><kbd className="px-2 py-1 bg-neutral-200 rounded text-sm">Escape</kbd></td>
                    <td className="px-4 py-3 text-neutral-700">Close menus and dialogs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-700"><kbd className="px-2 py-1 bg-neutral-200 rounded text-sm">Space</kbd></td>
                    <td className="px-4 py-3 text-neutral-700">Toggle checkboxes and buttons</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-700"><kbd className="px-2 py-1 bg-neutral-200 rounded text-sm">↑</kbd> <kbd className="px-2 py-1 bg-neutral-200 rounded text-sm">↓</kbd></td>
                    <td className="px-4 py-3 text-neutral-700">Navigate within menus and dropdowns</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Requesting Accommodations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Requesting Accommodations</h2>
            <p className="text-neutral-700 mb-4">
              If you need accessibility accommodations that aren&apos;t currently available, we want to help.
              Contact us to discuss:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Alternative formats for content (audio, large print, etc.)</li>
              <li>Extended time or modified formats for assessments</li>
              <li>Communication preferences (email, phone, video)</li>
              <li>Any other accommodations that would help you use our services</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              We will work with you to find solutions that meet your needs.
            </p>
          </section>

          {/* Feedback & Contact */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Feedback &amp; Contact</h2>
            <p className="text-neutral-700 mb-4">
              We welcome your feedback on the accessibility of PathSync. Please let us know if you
              encounter any barriers or have suggestions for improvement.
            </p>

            <div className="bg-neutral-100 p-6 rounded-xl">
              <h3 className="font-semibold text-neutral-900 mb-3">Contact Us About Accessibility</h3>
              <p className="text-neutral-700 mb-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:accessibility@pathsyncrecruitment.com" className="text-primary hover:underline">
                  accessibility@pathsyncrecruitment.com
                </a>
              </p>
              <p className="text-neutral-700 mb-4">
                <strong>Phone:</strong>{' '}
                <a href="tel:+447700183964" className="text-primary hover:underline">
                  +44 7700 183964
                </a>
              </p>
              <p className="text-neutral-700 mb-4">
                <strong>Response time:</strong> We aim to respond to accessibility inquiries within 2 business days.
              </p>
              <p className="text-neutral-700">
                <strong>Alternative contact:</strong> If you cannot use our website, call us and we will
                assist you over the phone.
              </p>
            </div>
          </section>

          {/* Enforcement */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Enforcement</h2>
            <p className="text-neutral-700 mb-4">
              If you&apos;re not satisfied with our response to your accessibility concern, you may contact:
            </p>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <p className="text-neutral-700 mb-2">
                <strong>Equality Advisory Support Service (EASS)</strong>
              </p>
              <p className="text-neutral-700 mb-2">
                Website:{' '}
                <a
                  href="https://www.equalityadvisoryservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.equalityadvisoryservice.com
                </a>
              </p>
              <p className="text-neutral-700">
                Phone: 0808 800 0082 (Textphone: 0808 800 0084)
              </p>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Technical Information</h2>
            <p className="text-neutral-700 mb-4">
              PathSync relies on the following technologies for accessibility:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>HTML5</li>
              <li>WAI-ARIA</li>
              <li>CSS3</li>
              <li>JavaScript (with progressive enhancement)</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              These technologies are used in conjunction with the accessibility features built into
              modern browsers and assistive technologies.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-primary/5 p-8 rounded-xl text-center mt-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
              If you&apos;re having trouble using our platform or need assistance with accessibility features,
              we&apos;re here to help. Don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href="mailto:accessibility@pathsyncrecruitment.com"
                className="btn-secondary"
              >
                Email Accessibility Team
              </a>
            </div>
          </section>

          {/* Last Updated */}
          <p className="text-neutral-500 text-sm mt-10 text-center">
            This statement was last updated: January 2026
          </p>
        </div>
      </div>
    </main>
  )
}
