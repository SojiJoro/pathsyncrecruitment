"use client"
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="site_footer">
      <div className="footer_top">
        <div className="footer_col">
          <Link href="/" className="footer_logo">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span>Pathsync Recruitment</span>
          </Link>
          <p className="footer_brand_text">
            Pathsync Recruitment is your trusted partner for sourcing top tech and IT talent across the UK and beyond.
          </p>
        </div>

        <div className="footer_col">
          <h3>Resources</h3>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer_col">
          <h3>Jobs</h3>
          <ul>
            <li><Link href="/jobs">Find a Job</Link></li>
            <li><Link href="/jobs/post">Post a Job</Link></li>
          </ul>
        </div>

        <div className="footer_col">
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_disclaimer text-sm text-gray-500 space-y-2">
          <p>&copy; {new Date().getFullYear()} Pathsync Recruitment. All rights reserved.</p>
          <p>
            Pathsync Recruitment is a brand of <strong>Joro Services Ltd</strong>, a registered company in England and Wales. Company number: <strong>14979338</strong>.
          </p>
          <p>
            Read our <Link href="/terms" className="underline">Terms and Conditions</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>
        </div>

        <div className="footer_social flex gap-4 pt-4 text-xl">
          <a href="https://linkedin.com/company/pathsyncrecruitment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/pathsyncrec" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}
