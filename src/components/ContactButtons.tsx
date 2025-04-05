'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ContactButtons() {
  const router = useRouter()
  return (
    <motion.section
      className="contact_buttons_section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', margin: '2rem 0' }}
    >
      <h2>Contact Us</h2>
      <p>Please select your option:</p>
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
