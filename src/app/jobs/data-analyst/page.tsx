export const metadata = {
    title: 'Data Analyst - Pathsync Recruitment',
    description: 'Help drive business decisions with actionable insights.',
  };
  
  export default function DataAnalystPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Analyst</h1>
        <p className="text-gray-600 mb-2"><strong>Location:</strong> Manchester, UK</p>
        <p className="text-gray-600 mb-6"><strong>Type:</strong> Part-time</p>
  
        <div className="text-gray-700 mb-8">
          <p>
            We're looking for a part-time data analyst to turn complex data into actionable insights. You’ll work closely with business teams to influence strategic decisions.
          </p>
        </div>
  
        <a
          href="mailto:enquiry@pathsyncrecruitment.com?subject=Interested in Data Analyst role"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          I'm Interested
        </a>
      </div>
    );
  }
  