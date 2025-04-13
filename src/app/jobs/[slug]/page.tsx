// src/app/jobs/[slug]/page.tsx

import { notFound } from 'next/navigation';

interface Job {
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobMap: Record<string, Job> = {
  'software-engineer': {
    title: 'Software Engineer',
    location: 'London, UK',
    type: 'Full-time',
    description:
      'Join our agile team to build scalable web applications for global clients.',
  },
  'project-manager': {
    title: 'IT Project Manager',
    location: 'Remote',
    type: 'Contract',
    description:
      'We are seeking an experienced project manager to oversee multiple software rollouts.',
  },
  'data-analyst': {
    title: 'Data Analyst',
    location: 'Manchester, UK',
    type: 'Part-time',
    description:
      'Analyse business data trends to support strategic decision-making.',
  },
};

interface PageProps {
  params: { slug: string };
}

export default function JobDetailsPage({ params }: PageProps) {
  const job = jobMap[params.slug];

  if (!job) {
    notFound();
  }

  const mailtoLink = `mailto:enquiry@pathsyncrecruitment.com?subject=${encodeURIComponent(
    `I am interested in the ${job.title} position`
  )}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-gray-600 mb-6">
        <strong>Type:</strong> {job.type}
      </p>
      <div className="text-gray-700 mb-8">
        <p>{job.description}</p>
      </div>

      <a
        href={mailtoLink}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        I'm Interested
      </a>
    </div>
  );
}
