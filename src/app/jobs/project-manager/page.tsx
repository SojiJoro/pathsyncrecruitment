export const metadata = {
    title: 'IT Project Manager - Pathsync Recruitment',
    description: 'Lead multiple software rollouts and manage cross-functional teams.',
  };
  
  export default function ProjectManagerPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">IT Project Manager</h1>
        <p className="text-gray-600 mb-2"><strong>Location:</strong> Remote</p>
        <p className="text-gray-600 mb-6"><strong>Type:</strong> Contract</p>
  
        <div className="text-gray-700 mb-8">
          <p>
            We’re seeking an experienced IT project manager to lead multiple software implementations. You will coordinate cross-functional teams, manage timelines, and ensure project goals are met.
          </p>
        </div>
  
        <a
          href="mailto:enquiry@pathsyncrecruitment.com?subject=Interested in IT Project Manager role"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          I'm Interested
        </a>
      </div>
    );
  }
  