import React, { useState } from 'react'

export default function AdminBackdateForm() {
  const [email, setEmail] = useState('')
  const [activity, setActivity] = useState('')
  const [dateTime, setDateTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Call your API endpoint to save a backdated log
    // Example:
    // fetch('/learning-hub/api/backdate', { method: 'POST', body: JSON.stringify({ email, activity, dateTime }) })
    alert(`Backdated activity for ${email} at ${dateTime}`)
    setEmail('')
    setActivity('')
    setDateTime('')
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
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  )
}
