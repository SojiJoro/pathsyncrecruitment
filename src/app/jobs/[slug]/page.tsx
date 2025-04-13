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
    return <div className="text-center py-20 text-red-600 font-medium">Job not found</div>;
  }

  const mailToLink = `mailto:enquiry@pathsyncrecruitment.com?subject=Interest in ${job.title}&body=Hi,%0D%0A%0D%0AI am interested in the ${job.title} role at Pathsync Recruitment.%0D%0A%0D%0AMy details:%0D%0AFull Name: %0D%0AEmail: %0D%0ACover Note: %0D%0A%0D%0AThank you!`;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{job.title}</h1>
      <p className="mb-2 text-gray-700"><strong>Location:</strong> {job.location}</p>
      <p className="mb-6 text-gray-700"><strong>Type:</strong> {job.type}</p>

      <a
        href={mailToLink}
        className="inline-block bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
      >
        Submit Interest
      </a>
    </div>
  );
}
