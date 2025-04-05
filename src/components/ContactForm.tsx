'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const router = useRouter()

  function handleCompanyClick() {
    router.push('/contact/company')
  }

  function handleCandidateClick() {
    router.push('/contact/candidate')
  }

  return (
    <section className="contact_section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      <motion.div 
        className="contact_form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button className="submit_button" onClick={handleCompanyClick}>
          I'm a Company
          <span className="button_arrow">→</span>
        </button>

        <button className="submit_button" onClick={handleCandidateClick}>
          I'm a Candidate
          <span className="button_arrow">→</span>
        </button>
      </motion.div>
    </section>
  )
}
