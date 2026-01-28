'use client'

import { useState, FormEvent } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaBuilding,
  FaQuestionCircle,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa'

type InquiryType = 'job-seeker' | 'employer' | 'general'
type CommunicationPreference = 'email' | 'phone' | 'video' | 'text'

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType | ''>('')
  const [communicationPreference, setCommunicationPreference] = useState<CommunicationPreference>('email')
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
      value: 'job-seeker' as InquiryType,
      label: 'I\'m a Job Seeker',
      description: 'Looking for neurodivergent-friendly employment opportunities',
      icon: FaUser
    },
    {
      value: 'employer' as InquiryType,
      label: 'I\'m an Employer',
      description: 'Interested in hiring neurodivergent talent',
      icon: FaBuilding
    },
    {
      value: 'general' as InquiryType,
      label: 'General Inquiry',
      description: 'Partnership, press, investment, or other questions',
      icon: FaQuestionCircle
    }
  ]

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We&apos;re here to help. Whether you&apos;re a neurodivergent job seeker looking for
            the right opportunity, or an employer wanting to access untapped talent,
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Information Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-8 sticky top-24">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Address</p>
                    <p className="text-neutral-600 text-sm">
                      PathSync Recruitment<br />
                      Kemp House, 152-160 City Road<br />
                      London EC1V 2NX<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Phone</p>
                    <a
                      href="tel:+447700183964"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      +44 7700 183964
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Email</p>
                    <a
                      href="mailto:hello@pathsyncrecruitment.com"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      hello@pathsyncrecruitment.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-medium text-neutral-900 mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com/company/pathsyncrecruitment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="https://twitter.com/pathsyncrecruit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-all"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Accessibility Note */}
              <div className="mt-8 p-4 bg-secondary/10 rounded-lg">
                <h3 className="font-semibold text-neutral-900 text-sm mb-2">
                  Accessibility Support
                </h3>
                <p className="text-sm text-neutral-600">
                  Need accommodations for our communication? Let us know your preferences
                  and we&apos;ll adapt to your needs.
                </p>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-secondary text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Message Sent Successfully!
                </h2>
                <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                  Thank you for reaching out. We typically respond within 1-2 business days.
                  We&apos;ll contact you using your preferred communication method.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
                <p className="text-neutral-600 mb-8">
                  Please select the option that best describes you, and we&apos;ll tailor our response accordingly.
                </p>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert">
                    <FaExclamationTriangle className="text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}

                {/* Inquiry Type Selection */}
                <fieldset className="mb-8">
                  <legend className="block text-sm font-semibold text-neutral-900 mb-4">
                    I am... <span className="text-red-500">*</span>
                  </legend>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {inquiryTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <label
                          key={type.value}
                          className={`relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
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
                            className={`text-2xl mb-2 ${
                              inquiryType === type.value ? 'text-primary' : 'text-neutral-400'
                            }`}
                          />
                          <span className="font-medium text-neutral-900 text-sm text-center">
                            {type.label}
                          </span>
                          <span className="text-xs text-neutral-500 text-center mt-1">
                            {type.description}
                          </span>
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
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Communication Preference */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Preferred Communication Method
                  </label>
                  <p className="text-sm text-neutral-500 mb-3">
                    How would you like us to contact you? We&apos;ll do our best to accommodate your preference.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: 'email', label: 'Email' },
                      { value: 'phone', label: 'Phone Call' },
                      { value: 'video', label: 'Video Call' },
                      { value: 'text', label: 'Text/SMS' }
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`px-4 py-2 rounded-full border-2 cursor-pointer transition-all text-sm ${
                          communicationPreference === option.value
                            ? 'border-primary bg-primary text-white'
                            : 'border-neutral-200 text-neutral-700 hover:border-primary/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="communicationPreference"
                          value={option.value}
                          checked={communicationPreference === option.value}
                          onChange={(e) => setCommunicationPreference(e.target.value as CommunicationPreference)}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Conditional Fields Based on Inquiry Type */}
                {inquiryType === 'job-seeker' && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-xl space-y-4">
                    <h3 className="font-semibold text-neutral-900">Job Seeker Information</h3>
                    <div>
                      <label htmlFor="neurodivergence" className="block text-sm font-medium text-neutral-700 mb-2">
                        How do you identify? (Optional)
                      </label>
                      <p className="text-xs text-neutral-500 mb-2">
                        This helps us understand how to best support you. All information is kept confidential.
                      </p>
                      <select id="neurodivergence" name="neurodivergence" className="form-input">
                        <option value="">Prefer not to say</option>
                        <option value="autism">Autism/Asperger&apos;s</option>
                        <option value="adhd">ADHD</option>
                        <option value="dyslexia">Dyslexia</option>
                        <option value="dyspraxia">Dyspraxia</option>
                        <option value="dyscalculia">Dyscalculia</option>
                        <option value="multiple">Multiple conditions</option>
                        <option value="other">Other neurodivergent condition</option>
                        <option value="exploring">Still exploring/undiagnosed</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="currentStatus" className="block text-sm font-medium text-neutral-700 mb-2">
                        Current Employment Status
                      </label>
                      <select id="currentStatus" name="currentStatus" className="form-input">
                        <option value="">Select your status</option>
                        <option value="employed">Currently employed, looking to change</option>
                        <option value="unemployed">Currently unemployed</option>
                        <option value="student">Student/Recent graduate</option>
                        <option value="freelance">Self-employed/Freelance</option>
                        <option value="returning">Returning to work after a break</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="interests" className="block text-sm font-medium text-neutral-700 mb-2">
                        What types of roles interest you?
                      </label>
                      <input
                        type="text"
                        id="interests"
                        name="interests"
                        className="form-input"
                        placeholder="e.g., Software development, Data analysis, Creative roles"
                      />
                    </div>
                  </div>
                )}

                {inquiryType === 'employer' && (
                  <div className="mb-6 p-4 bg-secondary/5 rounded-xl space-y-4">
                    <h3 className="font-semibold text-neutral-900">Employer Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required={inquiryType === 'employer'}
                          className="form-input"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-neutral-700 mb-2">
                          Your Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          className="form-input"
                          placeholder="e.g., HR Director"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-neutral-700 mb-2">
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
                    <div>
                      <label htmlFor="hiringNeeds" className="block text-sm font-medium text-neutral-700 mb-2">
                        What roles are you looking to fill?
                      </label>
                      <input
                        type="text"
                        id="hiringNeeds"
                        name="hiringNeeds"
                        className="form-input"
                        placeholder="e.g., Software engineers, Data analysts, QA testers"
                      />
                    </div>
                  </div>
                )}

                {inquiryType === 'general' && (
                  <div className="mb-6 p-4 bg-neutral-100 rounded-xl">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select id="subject" name="subject" required={inquiryType === 'general'} className="form-input">
                      <option value="">Select a topic</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="press">Press/Media Inquiry</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="research">Research Collaboration</option>
                      <option value="feedback">Feedback/Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-neutral-500 mb-2">
                    Take your time - there&apos;s no rush. Tell us how we can help.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="form-input resize-y"
                    placeholder="Tell us more about your situation and how we can help..."
                  />
                </div>

                {/* Accommodations Request */}
                <div className="mb-6">
                  <label htmlFor="accommodations" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Any Accommodations Needed? (Optional)
                  </label>
                  <p className="text-sm text-neutral-500 mb-2">
                    Let us know if you need any specific accommodations for our communication
                    (e.g., written summaries after calls, extra processing time, specific communication tools).
                  </p>
                  <textarea
                    id="accommodations"
                    name="accommodations"
                    rows={3}
                    className="form-input resize-y"
                    placeholder="Any accommodations that would help our communication..."
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
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                      {' '}and consent to PathSync processing my data to respond to my inquiry.
                      I understand my information will be handled confidentially and in accordance with GDPR.
                      <span className="text-red-500"> *</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending' || !inquiryType}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5\" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-sm text-neutral-500 text-center mt-4">
                  We typically respond within 1-2 business days
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'Do I need a formal diagnosis to use PathSync?',
                a: 'No formal diagnosis is required. Our assessment process focuses on identifying your cognitive strengths and optimal working conditions, regardless of whether you have a clinical diagnosis.'
              },
              {
                q: 'Is there a cost for job seekers?',
                a: 'Our core services for job seekers are completely free. We\'re funded by employer partnerships who pay for access to our pre-qualified, job-ready candidates.'
              },
              {
                q: 'How long does the assessment process take?',
                a: 'Our cognitive assessment takes about 45-60 minutes and can be completed at your own pace. You can take breaks whenever needed and save your progress.'
              },
              {
                q: 'What industries do you work with?',
                a: 'We work with employers across technology, finance, healthcare, creative industries, and more. Neurodivergent talent excels in many different fields.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-neutral-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
