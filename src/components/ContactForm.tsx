// ContactForm.tsx
'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  company: string
  firstName: string
  lastName: string
  email: string
  phone: string
  referral: string
  enquiryType: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    referral: 'None',
    enquiryType: ''
  })

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('Form submitted:', formData)
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
      <motion.form 
        onSubmit={handleSubmit} 
        className="contact_form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="form_group">
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            required
            className="form_input"
          />
          <label htmlFor="company" className="form_label">Company</label>
          <div className="form_line"></div>
        </div>

        {/* Repeat for other fields with the same pattern */}
        
        <button type="submit" className="submit_button">
          Submit
          <span className="button_arrow">→</span>
        </button>
      </motion.form>
    </section>
  )
}
