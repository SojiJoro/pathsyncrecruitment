// File: src/app/jobs/page.tsx
import Link from 'next/link';

const jobs = [
  { title: 'Software Engineer', location: 'London', type: 'Full-time', slug: 'software-engineer' },
  { title: 'DevOps Specialist', location: 'Remote', type: 'Contract', slug: 'devops-specialist' },
  { title: 'Data Analyst', location: 'Manchester', type: 'Part-time', slug: 'data-analyst' },
];

export default function JobsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Open Roles</h1>
      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Job Title</th>
            <th className="p-3">Location</th>
            <th className="p-3">Type</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.slug} className="border-t">
              <td className="p-3 font-medium">{job.title}</td>
              <td className="p-3">{job.location}</td>
              <td className="p-3">{job.type}</td>
              <td className="p-3">
                <Link href={`/jobs/${job.slug}`} className="text-blue-600 hover:underline">
                  I'm Interested
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// File: src/app/jobs/[slug]/page.tsx
'use client';

import { useRouter } from 'next/navigation';

const jobMap: Record<string, { title: string; location: string; type: string }> = {
  'software-engineer': { title: 'Software Engineer', location: 'London', type: 'Full-time' },
  'devops-specialist': { title: 'DevOps Specialist', location: 'Remote', type: 'Contract' },
  'data-analyst': { title: 'Data Analyst', location: 'Manchester', type: 'Part-time' },
};

export default function JobInterestPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const job = jobMap[params.slug];

  if (!job) {
    return <div className="text-center py-20">Job not found</div>;
  }

  const mailToLink = `mailto:youremail@example.com?subject=Interest in ${job.title}&body=Hi,%0D%0A%0D%0AI am interested in the ${job.title} role at Pathsync.%0D%0A%0D%0AMy details:%0D%0AFull Name: %0D%0AEmail: %0D%0ACover Note: %0D%0A%0D%0AThank you!`;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
      <p className="mb-2 text-gray-700">Location: {job.location}</p>
      <p className="mb-6 text-gray-700">Type: {job.type}</p>

      <a
        href={mailToLink}
        className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
      >
        Submit Interest
      </a>
    </div>
  );
}
