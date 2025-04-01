import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header>
      <div className="nav_container">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          Pathsync
        </Link>
        <ul className="nav_links">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
