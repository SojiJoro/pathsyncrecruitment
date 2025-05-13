'use client';

import { useState } from 'react';

export default function PartnerWithUsPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('service', 'Partnership Enquiry');

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
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Partner With PathSync</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold">Company Name</label>
          <input name="name" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Contact Person Email</label>
          <input name="email" type="email" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Type of Partnership</label>
          <select name="role" required className="w-full border p-2 rounded">
            <option value="">Select</option>
            <option value="Hiring">Hiring</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Donation">Donation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Message</label>
          <textarea name="details" rows={4} required className="w-full border p-2 rounded" />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
        </button>

        {status === 'success' && <p className="text-green-600 mt-4">Thank you! We’ll get back to you shortly.</p>}
        {status === 'error' && <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}

