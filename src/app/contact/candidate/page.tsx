// File: app/contact/candidate/page.tsx
'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function CandidateContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    desiredPosition: '',
    currentLocation: '',
    locationPreference: '',
    salaryExpectation: '',
    availableStartDate: '',
    message: '',
    consent: false
  })
  const [status, setStatus] = useState<string>('')

  const locations = [
    "London", "Birmingham", "Leeds", "Glasgow", "Sheffield", "Bradford", "Liverpool",
    "Edinburgh", "Manchester", "Bristol", "Wakefield", "Coventry", "Kingston upon Hull",
    "Newcastle upon Tyne", "Sunderland", "Wolverhampton", "Nottingham", "Plymouth",
    "Derby", "Southampton", "Portsmouth", "Oxford", "Cambridge", "Cardiff", "Belfast",
    "Leicester", "Stoke-on-Trent", "Warrington", "Preston", "Milton Keynes", "Brighton",
    "Southend-on-Sea", "Blackpool", "Middlesbrough", "Bolton", "Stockport", "Wigan",
    "Rotherham", "Barnsley", "Huddersfield", "Swindon", "Gloucester", "Chester",
    "Cheltenham", "Newport", "Aberdeen", "Dundee", "Inverness", "Stirling", "Perth",
    "Paisley", "Swansea", "Crawley", "Colchester", "Basildon", "Eastbourne", "Luton",
    "Northampton", "Aldershot"
  ]

  const jobTypes = [
    "Software Engineer", "Frontend Developer", "Backend Developer", "Fullstack Developer",
    "DevOps Engineer", "Data Analyst", "Data Scientist", "Cloud Architect",
    "Cybersecurity Specialist", "QA Tester", "Site Reliability Engineer",
    "Product Manager", "UX/UI Designer", "Mobile App Developer", "Game Developer", "Other"
  ]

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData({ ...formData, [name]: newValue })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Sending…')

    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/contact', { method: 'POST', body: fd })

    if (res.ok) {
      setStatus('Thanks – we’ll be in touch soon.')
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', linkedIn: '',
        desiredPosition: '', currentLocation: '', locationPreference: '',
        salaryExpectation: '', availableStartDate: '', message: '', consent: false
      })
      e.currentTarget.reset()
    } else {
      setStatus('Sorry – something went wrong.')
    }
  }

  return (
    <section className="contact_section candidate_contact_section">
      <motion.div
        className="contact_container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact_title">Get in Touch</h2>
        <form className="contact_form" onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            name="firstName"
            placeholder="Your first name *"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Your last name *"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address *"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your phone number *"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="linkedIn"
            placeholder="LinkedIn Profile URL (optional)"
            value={formData.linkedIn}
            onChange={handleChange}
          />
          <select
            name="desiredPosition"
            required
            value={formData.desiredPosition}
            onChange={handleChange}
          >
            <option value="">Desired Position *</option>
            {jobTypes.map(job => (
              <option key={job} value={job}>{job}</option>
            ))}
          </select>
          <select
            name="currentLocation"
            required
            value={formData.currentLocation}
            onChange={handleChange}
          >
            <option value="">Current Location *</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <select
            name="locationPreference"
            required
            value={formData.locationPreference}
            onChange={handleChange}
          >
            <option value="">Preferred Work Location *</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <input
            type="text"
            name="salaryExpectation"
            placeholder="Salary Expectation (e.g. £40k-£50k) *"
            required
            value={formData.salaryExpectation}
            onChange={handleChange}
          />
          <input
            type="date"
            name="availableStartDate"
            placeholder="Available Start Date *"
            required
            value={formData.availableStartDate}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us more about yourself (optional)"
            value={formData.message}
            onChange={handleChange}
          />
          <label className="consent_label">
            <input
              type="checkbox"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
            />
            I confirm that I have read and accept the Terms and Conditions and Privacy Policy.
          </label>
          <button className="submit_button" type="submit">
            Submit <span className="button_arrow">&rarr;</span>
          </button>
          {status && <p className="mt-2 text-center">{status}</p>}
        </form>
      </motion.div>
    </section>
  )
}
