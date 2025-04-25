import { roles } from '@/data/roles';
import { notFound } from 'next/navigation';
import LearningPathMap from '@/components/LearningPathMap';

export const metadata = {
  title: 'AI Prompt Engineer Career Path - Pathsync Recruitment',
  description: 'AI prompt engineer path for working with LLMs',
};

export default function RolePage() {
  const role = roles.find(r => r.slug === 'ai-prompt-engineer');

  if (!role) return notFound();

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10">
      <header className="bg-teal-700 text-white p-6 rounded-lg mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-1">{role.title}</h1>
        <p className="text-lg">Average Salary: {role.averageSalary}</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Key Skills</h2>
        <div className="flex flex-wrap gap-2">
          {role.skills.map(skill => (
            <span key={skill} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {role.certifications.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3">Recommended Certifications</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {role.certifications.map(cert => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Learning Path</h2>
        <LearningPathMap steps={role.learningPath} />
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Need Help With Your CV or Interview Prep?</h2>
        <p className="text-gray-700 mb-4">
          We offer free CV reviews, interview coaching, and mentorship to help you land your first tech role.
        </p>
        <div className="flex gap-4">
          <a
            href="/contact"
            className="inline-block bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700 transition"
          >
            Book a Free Session
          </a>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Book Training
          </a>
        </div>
      </section>
    </main>
  );
}