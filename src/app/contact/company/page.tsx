'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CompanyContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    companyName: '',
    phone: '',
    seniority: '',
    location: '',
    expertise: '',
    customExpertise: '',
    expectedHires: '',
    enquiryType: '',
    message: '',
    consent: false
  })

  // Expanded list of major UK cities including additional 20 locations
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
    "Northampton", "Aldershot",
    // Additional 20 locations:
    "Basingstoke", "Guildford", "Reading", "Slough", "Woking", "High Wycombe",
    "Chelmsford", "Maidstone", "Bedford", "Rugby", "Doncaster", "Salisbury",
    "Hereford", "Lancaster", "Grimsby", "Gillingham", "Worthing", "Banbury", "Cannock"
  ]

  // Expanded list of tech roles with 15 additional roles
  const techRoles = [
    "Software Engineer", "Frontend Developer", "Backend Developer", "Fullstack Developer",
    "DevOps Engineer", "Data Analyst", "Data Scientist", "Cloud Architect",
    "Cybersecurity Specialist", "QA Tester", "Site Reliability Engineer",
    "Product Manager", "Scrum Master", "IT Support", "UX/UI Designer",
    "AI/ML Engineer", "Technical Project Manager",
    // Additional 15 tech roles:
    "Mobile App Developer", "Blockchain Developer", "Game Developer",
    "Database Administrator", "Network Engineer", "Systems Administrator",
    "Security Analyst", "Data Engineer", "Machine Learning Engineer",
    "DevSecOps Engineer", "Front-end Architect", "Back-end Architect",
    "Cloud Engineer", "Infrastructure Engineer", "IoT Developer",
    "Other"
  ]

  const enquiryTypes = [
    "Tech Recruitment Partnership",
    "Hiring for a Contract Role",
    "Hiring for a Permanent Role",
    "Need Bulk Hiring Support",
    "Exploring Talent Pipelines or On-Demand Hiring",
    "Discussing Tech Recruitment Process Outsourcing (RPO)",
    "Looking for Market Insight / Salary Benchmarking",
    "Other"
  ]

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData({ ...formData, [name]: newValue })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Company contact form submitted:', formData)
    // TODO: send formData to your backend or email service
  }

  return (
    <section className="contact_section company_contact_section">
      <motion.div
        className="contact_container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact_title">Let&apos;s Talk About Your Hiring Needs</h2>
        <form className="contact_form" onSubmit={handleSubmit}>
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
            type="text"
            name="jobTitle"
            placeholder="Your job title *"
            required
            value={formData.jobTitle}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your company email address *"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="companyName"
            placeholder="Your company name *"
            required
            value={formData.companyName}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your company telephone *"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="seniority"
            required
            value={formData.seniority}
            onChange={handleChange}
          >
            <option value="">Your job seniority *</option>
            <option value="C-Level">C-Level (CEO/CFO)</option>
            <option value="Senior Director">Senior Director / SVP</option>
            <option value="Director">Director / VP</option>
            <option value="Manager">Senior Manager / Manager</option>
            <option value="Associate">Associate</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
          >
            <option value="">Select nearest location *</option>
            {locations.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <select
            name="expertise"
            required
            value={formData.expertise}
            onChange={handleChange}
          >
            <option value="">Area of expertise hiring for *</option>
            {techRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>

          {formData.expertise === 'Other' && (
            <input
              type="text"
              name="customExpertise"
              placeholder="Type your job role"
              value={formData.customExpertise}
              onChange={handleChange}
            />
          )}

          <select
            name="expectedHires"
            required
            value={formData.expectedHires}
            onChange={handleChange}
          >
            <option value="">Number of hires expected in the next 12 months *</option>
            <option value="1-20">1-20</option>
            <option value="20-50">20-50</option>
            <option value="50-100">50-100</option>
          </select>

          <select
            name="enquiryType"
            required
            value={formData.enquiryType}
            onChange={handleChange}
          >
            <option value="">Your enquiry type *</option>
            {enquiryTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Please provide further information about your enquiry (optional)"
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
        </form>
      </motion.div>
    </section>
  )
}
