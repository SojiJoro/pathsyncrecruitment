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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          company: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          referral: 'None',
          enquiryType: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="form_input"
          />
          <label htmlFor="firstName" className="form_label">First Name</label>
          <div className="form_line"></div>
        </div>

        <div className="form_group">
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="form_input"
          />
          <label htmlFor="lastName" className="form_label">Last Name</label>
          <div className="form_line"></div>
        </div>

        <div className="form_group">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form_input"
          />
          <label htmlFor="email" className="form_label">Email</label>
          <div className="form_line"></div>
        </div>

        <div className="form_group">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="form_input"
          />
          <label htmlFor="phone" className="form_label">Phone</label>
          <div className="form_line"></div>
        </div>

        <div className="form_group">
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="form_input"
          />
          <label htmlFor="company" className="form_label">Company</label>
          <div className="form_line"></div>
        </div>

        <div className="form_group">
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            required
            className="form_input"
          >
            <option value="">Select Enquiry Type</option>
            <option value="general">General Enquiry</option>
            <option value="candidate">Candidate</option>
            <option value="employer">Employer</option>
            <option value="mentor">Become a Mentor</option>
            <option value="partnership">Partnership</option>
          </select>
          <label htmlFor="enquiryType" className="form_label">Enquiry Type</label>
          <div className="form_line"></div>
        </div>

        <div className="form_group">
          <select
            id="referral"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className="form_input"
          >
            <option value="None">None</option>
            <option value="Search Engine">Search Engine</option>
            <option value="Social Media">Social Media</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="referral" className="form_label">How did you hear about us?</label>
          <div className="form_line"></div>
        </div>

        {submitStatus === 'success' && (
          <div className="text-green-600 mb-4">
            Message sent successfully! We&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-red-600 mb-4">
            Failed to send message. Please try again.
          </div>
        )}

        <button type="submit" className="submit_button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
          <span className="button_arrow">&rarr;</span>
        </button>
      </motion.form>
    </section>
  )
}
