// File: src/app/career-incubator/become-a-mentor/page.tsx
'use client';

import { useState } from 'react';

export default function BecomeMentorPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('service', 'Mentorship Offer');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Become a Mentor</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input name="name" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">LinkedIn or GitHub</label>
          <input
            name="role"
            placeholder="Paste your profile URL"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Area of Expertise</label>
          <input
            name="details"
            placeholder="e.g. DevOps, Security, Frontend"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Monthly Availability (in hours)</label>
          <input
            name="cv"
            type="text"
            placeholder="e.g. 2–4 hours"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Interest'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-4">
            Thank you! We&apos;ll be in touch shortly.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
