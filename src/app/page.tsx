'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import BlogSection from '@/components/BlogSection'
import JobsSection from '@/components/JobsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions'
}

// New component for the contact buttons that link to the Company and Candidate pages
function ContactButtons() {
  const router = useRouter()
  return (
    <motion.section
      className="contact_buttons_section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', margin: '2rem 0' }}
    >
      <button
        className="contact_button"
        onClick={() => router.push('/contact/company')}
        style={{ marginRight: '1rem', padding: '1rem 2rem', fontSize: '1rem' }}
      >
        I&apos;m a Company
      </button>
      <button
        className="contact_button"
        onClick={() => router.push('/contact/candidate')}
        style={{ padding: '1rem 2rem', fontSize: '1rem' }}
      >
        I&apos;m a Candidate
      </button>
    </motion.section>
  )
}

export default function Home() {
  // Optional: Remove these logs once everything is stable
  console.log({
    Navbar: !!Navbar,
    HeroSection: !!HeroSection,
    Features: !!Features,
    BlogSection: !!BlogSection,
    JobsSection: !!JobsSection,
    TestimonialsSection: !!TestimonialsSection,
    Footer: !!Footer
  })

  return (
    <main>
      {Navbar && <Navbar />}
      {HeroSection && <HeroSection />}
      {Features && <Features />}
      {/* Display the new contact buttons instead of the old contact form */}
      <ContactButtons />
      {BlogSection && <BlogSection />}
      {JobsSection && <JobsSection />}
      {TestimonialsSection && <TestimonialsSection />}
      {Footer && <Footer />}
    </main>
  )
}
