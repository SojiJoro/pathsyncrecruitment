import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="site_footer">
      {/* Top Section: Logo/Brand and Column Links */}
      <div className="footer_top">
        <div className="footer_col">
          <Link href="/" className="footer_logo">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span>Pathsync Recruitment</span>
          </Link>
          <p className="footer_brand_text">
            Your tagline or short description goes here. Helping you find the best IT &amp; tech talent.
          </p>
        </div>

        <div className="footer_col">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/guides">Guides</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer_col">
          <h3>Jobs</h3>
          <ul>
            <li>
              <Link href="/jobs">Find a Job</Link>
            </li>
            <li>
              <Link href="/jobs/post">Post a Job</Link>
            </li>
          </ul>
        </div>

        <div className="footer_col">
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Disclaimer & Social Links */}
      <div className="footer_bottom">
        <div className="footer_disclaimer">
          <p>&copy; {new Date().getFullYear()} Pathsync Recruitment. All rights reserved.</p>
          <p>
            Disclaimer text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <Link href="/terms"> Terms &amp; Conditions</Link>
          </p>
        </div>
        <div className="footer_social">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
