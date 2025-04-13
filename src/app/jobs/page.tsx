// src/app/jobs/page.tsx
import Link from 'next/link';

const jobs = [
  {
    title: 'Software Engineer',
    location: 'London',
    type: 'Full-time',
    link: '/jobs/software-engineer',
  },
  {
    title: 'DevOps Specialist',
    location: 'Remote',
    type: 'Contract',
    link: '/jobs/devops-specialist',
  },
  {
    title: 'Data Analyst',
    location: 'Manchester',
    type: 'Part-time',
    link: '/jobs/data-analyst',
  },
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
          {jobs.map((job, index) => (
            <tr key={index} className="border-t">
              <td className="p-3 font-medium">{job.title}</td>
              <td className="p-3">{job.location}</td>
              <td className="p-3">{job.type}</td>
              <td className="p-3">
                <Link
                  href={job.link}
                  className="text-blue-600 hover:underline"
                >
                  I am Interested
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
