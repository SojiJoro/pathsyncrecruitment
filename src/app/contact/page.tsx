// File: src/app/contact/page.tsx
'use client'

import { useState, FormEvent } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

export default function ContactPage() {
  const [status, setStatus] = useState<string>('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Sending…')

    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/contact', { method: 'POST', body: fd })

    if (res.ok) {
      setStatus('Thanks – we’ll be in touch soon.')
      e.currentTarget.reset()
    } else {
      setStatus('Sorry – something went wrong.')
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact us</h1>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-teal-600 mt-1" />
            <p>
              Pathsync Recruitment<br/>
              Kemp House, 152-160 City Road,<br/>
              London EC1V 2NX<br/>
              United Kingdom
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-teal-600" />
            <a href="tel:+447700183964" className="hover:underline">+44 7700 183964</a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-teal-600" />
            <a href="mailto:info@pathsyncrecruitment.com" className="hover:underline">
              info@pathsyncrecruitment.com
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://linkedin.com/company/pathsyncrecruitment" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-teal-600 hover:text-teal-800 text-xl" />
            </a>
            <a href="https://twitter.com/pathsyncrecruitment" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-teal-600 hover:text-teal-800 text-xl" />
            </a>
          </div>
        </div>

        {/* Recruitment Support Form */}
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 border rounded"
            required
          />

          <div>
            <label className="block mb-1">Select needed service</label>
            <select
              name="service"
              className="w-full px-4 py-2 border rounded"
              required
            >
              <option value="">Choose an option</option>
              <option value="CV review">CV review</option>
              <option value="Interview prep">Interview prep</option>
              <option value="Tech training">Tech training</option>
              <option value="Job search assistance">Job search assistance</option>
            </select>
          </div>

          <input
            type="text"
            name="role"
            placeholder="Desired role or position"
            className="w-full px-4 py-2 border rounded"
          />

          <div>
            <label className="block mb-1">Attach your CV</label>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              className="w-full"
              required
            />
          </div>

          <textarea
            name="details"
            placeholder="Any additional details"
            className="w-full px-4 py-2 border rounded"
            rows={5}
          />

          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
          >
            Send request
          </button>

          {status && <p className="mt-2 text-center">{status}</p>}
        </form>
      </div>
    </div>
  )
}
