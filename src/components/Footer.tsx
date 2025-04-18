'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 footer_top">
        {/* Logo & Description */}
        <div className="footer_col space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span className="text-xl font-semibold text-white">Pathsync Recruitment</span>
          </Link>
          <p className="text-white">
            Pathsync Recruitment is your trusted partner for sourcing top tech and IT talent across the UK and beyond.
          </p>
        </div>

        {/* Resources */}
        <div className="footer_col">
          <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><Link href="/blog" className="hover:underline text-white">Blog</Link></li>
            <li><Link href="/guides" className="hover:underline text-white">Guides</Link></li>
            <li><Link href="/faq" className="hover:underline text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Jobs */}
        <div className="footer_col">
          <h3 className="text-lg font-semibold text-white mb-2">Jobs</h3>
          <ul className="space-y-1">
            <li><Link href="/jobs" className="hover:underline text-white">Find a Job</Link></li>
            <li><Link href="/jobs/post" className="hover:underline text-white">Post a Job</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer_col">
          <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:underline text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline text-white">Contact</Link></li>
            <li><Link href="/privacy" className="hover:underline text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/50 mt-10 pt-6 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-white">&copy; {currentYear} Pathsync Recruitment. All rights reserved.</p>
            <p className="text-white">
              Pathsync Recruitment is a brand of <span className="font-semibold text-white">Joro Services Ltd</span>,
              a registered company in England and Wales. Company number: <span className="font-semibold text-white">14979338</span>.
            </p>
            <p className="text-white">
              Read our <Link href="/terms" className="underline text-white">Terms and Conditions</Link> and{' '}
              <Link href="/privacy" className="underline text-white">Privacy Policy</Link>.
            </p>
          </div>

          <div className="flex gap-4 text-xl">
            <a href="https://linkedin.com/company/pathsyncrecruitment" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-gray-300 transition" />
            </a>
            <a href="https://twitter.com/pathsyncrec" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-gray-300 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
