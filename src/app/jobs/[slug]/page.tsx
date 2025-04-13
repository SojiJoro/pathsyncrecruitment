import { notFound } from 'next/navigation';
import Link from 'next/link';

const jobMap: Record<string, { title: string; location: string; type: string }> = {
  'software-engineer': {
    title: 'Software Engineer',
    location: 'London',
    type: 'Full-time',
  },
  'frontend-developer': {
    title: 'Frontend Developer',
    location: 'Manchester',
    type: 'Part-time',
  },
  // Add more jobs here
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function JobDetailsPage({ params }: PageProps) {
  const job = jobMap[params.slug];

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-700 mb-2">Location: {job.location}</p>
      <p className="text-gray-700 mb-6">Type: {job.type}</p>

      <h2 className="text-xl font-semibold mb-2">Apply Now</h2>
      <p className="text-gray-600 mb-4">
        Interested in this position? Click below to send us your CV and cover letter.
      </p>

      <Link
        href={`mailto:enquiry@pathsyncrecruitment.com?subject=I'm interested in the ${job.title} role&body=Hi Pathsync Recruitment,%0D%0A%0D%0AI saw the ${job.title} role on your website and would like to apply.%0D%0A%0D%0AMy name is ________ and I have experience in ________.%0D%0A%0D%0A[Attach your CV and cover letter here]%0D%0A%0D%0ARegards,%0D%0A[Your Name]`}
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        I'm Interested
      </Link>
    </div>
  );
}
