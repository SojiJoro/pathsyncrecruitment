import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'

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
              27 High Street,<br />
              Aldershot, Hampshire, GU11 1BH<br />
              United Kingdom
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            <a href="tel:+441234567890" className="hover:underline">+44 1234 567 890</a>
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
            <a href="https://twitter.com/pathsyncrec" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-600 hover:text-blue-800 text-xl" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
