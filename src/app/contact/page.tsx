import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

export const metadata = {
  title: 'CV & Interview Help - Pathsync Recruitment',
  description: 'Book a free session to improve your CV or prepare for tech interviews.',
}

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Book CV or Interview Support</h1>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-teal-600 mt-1" />
            <p>
              Pathsync Recruitment<br />
              Kemp House, 152-160 City Road,<br />
              London, England, EC1V 2NX<br />
              United Kingdom
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-teal-600" />
            <a href="tel:+447700183964" className="hover:underline">+44 7700 183964</a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-teal-600" />
            <a href="mailto:enquiry@pathsyncrecruitment.com" className="hover:underline">
              enquiry@pathsyncrecruitment.com
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://linkedin.com/company/pathsyncrecruitment" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-teal-600 hover:text-teal-800 text-xl" />
            </a>
            <a href="https://twitter.com/pathsyncrecruitment" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-teal-600 hover:text-teal-800 text-xl" />
            </a>
          </div>
        </div>

        {/* CV/Interview Help Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Request Support</h2>
          <form
            action="https://formspree.io/f/xrbqbbgd"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <textarea
              name="Support_Needed"
              placeholder="Briefly describe your support need (CV review, interview prep, etc.)"
              className="w-full px-4 py-2 border rounded"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
