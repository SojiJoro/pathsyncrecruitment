'use client'
import { useState } from 'react'
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

  // A list of major UK cities for current location and preferred work location
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

  // List of common tech job types for candidates
  const jobTypes = [
    "Software Engineer", "Frontend Developer", "Backend Developer", "Fullstack Developer",
    "DevOps Engineer", "Data Analyst", "Data Scientist", "Cloud Architect",
    "Cybersecurity Specialist", "QA Tester", "Site Reliability Engineer",
    "Product Manager", "UX/UI Designer", "Mobile App Developer", "Game Developer", "Other"
  ]

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Candidate contact form submitted:', formData)
    // TODO: Process the form data via your backend or email service
  }

  return (
    <section className="contact_section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.form
        className="contact_form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
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
          placeholder="Your LinkedIn Profile URL (optional)"
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

        <label>
          <input
            type="checkbox"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
          />
          {' '}I confirm that I have read and accept the Terms and Conditions and Privacy Policy.
        </label>

        <button className="submit_button" type="submit">
          Submit <span className="button_arrow">→</span>
        </button>
      </motion.form>
    </section>
  )
}
