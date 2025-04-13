// src/app/jobs/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface JobDetailsPageProps {
  params: {
    slug: string;
  };
}

const jobMap: Record<
  string,
  { title: string; location: string; type: string; description: string }
> = {
  'software-engineer': {
    title: 'Software Engineer',
    location: 'London',
    type: 'Full-time',
    description:
      'We are looking for a skilled Software Engineer to join our dynamic development team.',
  },
  'devops-specialist': {
    title: 'DevOps Specialist',
    location: 'Remote',
    type: 'Contract',
    description:
      'Seeking a DevOps expert to maintain and improve our cloud infrastructure and CI/CD pipelines.',
  },
  'it-support-analyst': {
    title: 'IT Support Analyst',
    location: 'Manchester',
    type: 'Part-time',
    description:
      'Join our IT support team to help end-users with hardware and software issues.',
  },
};

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  const job = jobMap[params.slug];

  if (!job) {
    notFound();
  }

  const mailtoLink = `mailto:enquiry@pathsyncrecruitment.com?subject=I%27m%20interested%20in%20the%20${encodeURIComponent(
    job.title
  )}%20role`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-gray-600 mb-6">
        <strong>Type:</strong> {job.type}
      </p>
      <p className="text-gray-700 mb-8">{job.description}</p>

      <a
        href={mailtoLink}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        I&apos;m Interested
      </a>
    </div>
  );
}
