'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

type InquiryType = 'demo' | 'employer' | 'recruiter' | 'partnership' | 'other'

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType | ''>('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const fd = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd })

      if (res.ok) {
        setStatus('success')
        e.currentTarget.reset()
        setInquiryType('')
      } else {
        setStatus('error')
        setErrorMessage('There was a problem submitting your message. Please try again or email us directly.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  const inquiryTypes = [
    {
      value: 'demo' as InquiryType,
      label: 'Request Demo',
      description: 'See PathSync in action',
      icon: PlayIcon
    },
    {
      value: 'employer' as InquiryType,
      label: 'HR Team',
      description: 'Internal hiring needs',
      icon: BuildingIcon
    },
    {
      value: 'recruiter' as InquiryType,
      label: 'Recruitment Agency',
      description: 'Partnership inquiry',
      icon: UsersIcon
    },
    {
      value: 'partnership' as InquiryType,
      label: 'Partnership',
      description: 'Investment or collaboration',
      icon: HandshakeIcon
    }
  ]

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Request a demo, discuss your hiring needs, or explore partnership opportunities. Our team typically responds within one business day.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Information Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 sticky top-24">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EmailIcon className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Email</p>
                    <a
                      href="mailto:hello@pathsyncrecruitment.com"
                      className="text-primary hover:underline"
                    >
                      hello@pathsyncrecruitment.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Phone</p>
                    <a
                      href="tel:+447700183964"
                      className="text-primary hover:underline"
                    >
                      +44 7700 183964
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LocationIcon className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Address</p>
                    <p className="text-neutral-600 text-sm">
                      Kemp House, 152-160 City Road<br />
                      London EC1V 2NX<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/docs" className="text-primary hover:underline text-sm">
                      API Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-primary hover:underline text-sm">
                      Pricing Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/platform" className="text-primary hover:underline text-sm">
                      Platform Overview
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="text-green-600 w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Message Sent Successfully
                </h2>
                <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your inquiry and respond within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">How can we help?</h2>
                <p className="text-neutral-600 mb-8">
                  Select the option that best describes your inquiry.
                </p>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert">
                    <AlertIcon className="text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}

                {/* Inquiry Type Selection */}
                <fieldset className="mb-8">
                  <legend className="block text-sm font-semibold text-neutral-900 mb-4">
                    I&apos;m interested in... <span className="text-red-500">*</span>
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {inquiryTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <label
                          key={type.value}
                          className={`relative flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            inquiryType === type.value
                              ? 'border-primary bg-primary/5'
                              : 'border-neutral-200 hover:border-primary/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={inquiryType === type.value}
                            onChange={(e) => setInquiryType(e.target.value as InquiryType)}
                            className="sr-only"
                            required
                          />
                          <Icon
                            className={`w-6 h-6 ${
                              inquiryType === type.value ? 'text-primary' : 'text-neutral-400'
                            }`}
                          />
                          <div>
                            <span className="font-medium text-neutral-900">
                              {type.label}
                            </span>
                            <span className="block text-xs text-neutral-500">
                              {type.description}
                            </span>
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                {/* Basic Information */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Company Information */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="form-input"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      className="form-input"
                      placeholder="Your role"
                    />
                  </div>
                </div>

                {/* Company Size (for demo/employer inquiries) */}
                {(inquiryType === 'demo' || inquiryType === 'employer' || inquiryType === 'recruiter') && (
                  <div className="mb-6">
                    <label htmlFor="companySize" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Company Size
                    </label>
                    <select id="companySize" name="companySize" className="form-input">
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501-1000">501-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                )}

                {/* Hiring Volume (for demo/employer inquiries) */}
                {(inquiryType === 'demo' || inquiryType === 'employer') && (
                  <div className="mb-6">
                    <label htmlFor="hiringVolume" className="block text-sm font-semibold text-neutral-900 mb-2">
                      Annual Hiring Volume
                    </label>
                    <select id="hiringVolume" name="hiringVolume" className="form-input">
                      <option value="">Select approximate volume</option>
                      <option value="1-10">1-10 hires per year</option>
                      <option value="11-50">11-50 hires per year</option>
                      <option value="51-200">51-200 hires per year</option>
                      <option value="200+">200+ hires per year</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="form-input resize-y"
                    placeholder="Tell us about your hiring challenges or what you'd like to discuss..."
                  />
                </div>

                {/* Privacy Consent */}
                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      required
                      className="mt-1 w-5 h-5 rounded border-neutral-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-neutral-600">
                      I agree to the{' '}
                      <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      {' '}and consent to PathSync processing my data to respond to my inquiry.
                      <span className="text-red-500"> *</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending' || !inquiryType}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <LoadingSpinner />
                      Sending...
                    </span>
                  ) : inquiryType === 'demo' ? (
                    'Request Demo'
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-sm text-neutral-500 text-center mt-4">
                  We typically respond within one business day
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

// Icon Components
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function LoadingSpinner() {
  return (
    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  )
}
