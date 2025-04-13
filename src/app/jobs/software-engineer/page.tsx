export const metadata = {
    title: 'Software Engineer - Pathsync Recruitment',
    description: 'Join our agile team to build scalable web applications for global clients.',
  };
  
  export default function SoftwareEngineerPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Software Engineer</h1>
        <p className="text-gray-600 mb-2"><strong>Location:</strong> London, UK</p>
        <p className="text-gray-600 mb-6"><strong>Type:</strong> Full-time</p>
  
        <div className="text-gray-700 mb-8">
          <p>
            Join our agile team to build scalable web applications for global clients. You’ll work with modern tech stacks and a passionate engineering team.
          </p>
        </div>
  
        <a
          href="mailto:enquiry@pathsyncrecruitment.com?subject=Interested in Software Engineer role"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          I'm Interested
        </a>
      </div>
    );
  }
  