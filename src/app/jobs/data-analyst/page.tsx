export default function DataAnalystPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Analyst</h1>
        <p className="text-gray-600 mb-2"><strong>Location:</strong> Manchester</p>
        <p className="text-gray-600 mb-6"><strong>Type:</strong> Part-time</p>
        <div className="text-gray-700 mb-8">
          <p>
            Analyse business data trends to support strategic decision-making across departments.
          </p>
        </div>
        <a
          href="mailto:enquiry@pathsyncrecruitment.com?subject=I%20am%20interested%20in%20the%20Data%20Analyst%20position"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          I am Interested
        </a>
      </div>
    );
  }
  