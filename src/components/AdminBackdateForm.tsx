import React, { useState } from 'react'

export default function AdminBackdateForm() {
  const [email, setEmail] = useState('')
  const [activity, setActivity] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/learning-hub/api/backdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, activity, dateTime })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
        setActivity('')
        setDateTime('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Backdate submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold">Backdate Activity</h3>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="User Email"
        className="border rounded p-2 w-full"
        required
      />
      <input
        type="text"
        value={activity}
        onChange={e => setActivity(e.target.value)}
        placeholder="Activity Description"
        className="border rounded p-2 w-full"
        required
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={e => setDateTime(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />

      {submitStatus === 'success' && (
        <div className="text-green-600 p-3 bg-green-50 rounded">
          Activity backdated successfully!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-red-600 p-3 bg-red-50 rounded">
          Failed to backdate activity. Please try again.
        </div>
      )}

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}
