'use client';

import { useState } from 'react';

export default function ApplyPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('service', 'Career Incubator Application');

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
      <h1 className="text-3xl font-bold mb-6">Apply to the Career Incubator</h1>
      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input name="name" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input name="email" type="email" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Desired Role</label>
          <input name="role" placeholder="e.g. Frontend Developer" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Tell us why you want to join</label>
          <textarea name="details" rows={4} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Upload Your CV (optional)</label>
          <input name="cv" type="file" accept=".pdf,.doc,.docx" className="w-full" />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
        </button>

        {status === 'success' && <p className="text-green-600 mt-4">Application submitted successfully!</p>}
        {status === 'error' && <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}

