import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const metadata = {
  title: 'Contact Us - Pathsync Recruitment',
  description: 'Reach out to Pathsync Recruitment by phone, email, or our contact form.',
}

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <p>
              Pathsync Recruitment<br />
              Kemp House, 152-160 City Road,<br />
              London, England, EC1V 2NX<br />
              United Kingdom
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            <a href="tel:+447700183964" className="hover:underline">+44 7700 183964</a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:enquiry@pathsyncrecruitment.com" className="hover:underline">
              enquiry@pathsyncrecruitment.com
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://linkedin.com/company/pathsyncrecruitment" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 hover:text-blue-800 text-xl" />
            </a>
            <a href="https://twitter.com/pathsyncrecruitment" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-600 hover:text-blue-800 text-xl" />
            </a>
          </div>
        </div>

        {/* Short Mailto Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form
            action="mailto:enquiry@pathsyncrecruitment.com"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
