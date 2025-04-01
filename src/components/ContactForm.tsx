'use client'
import { useState, ChangeEvent, FormEvent } from 'react'

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
    // Add your submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact_section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact_form">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="referral">How did you hear about us?</label>
        <select
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          required
        >
          <option value="None">None</option>
          <option value="Google Search">Google Search</option>
          <option value="Other Search Engine">Other Search Engine</option>
          <option value="Google Ads">Google Ads</option>
          <option value="Recommendation">Recommendation</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Social Media">Social Media</option>
          <option value="Contractor UK">Contractor UK</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="enquiryType">Online Enquiry Type</label>
        <input
          id="enquiryType"
          name="enquiryType"
          type="text"
          value={formData.enquiryType}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
