// src/app/career-builder/page.tsx
import Link from 'next/link';
import { roles } from '@/data/roles';

export const metadata = {
  title: 'Career Builder - Pathsync Recruitment',
  description: 'Explore tech career paths and learning journeys.',
};

export default function CareerBuilderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Explore Tech Career Paths</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {roles.map((role, index) => (
          <div key={index} className="p-6 border rounded-lg bg-white shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{role.title}</h2>
            <p className="text-sm text-gray-600 mb-2">Avg Salary: {role.averageSalary}</p>
            {role.summary && <p className="text-sm text-gray-500 mb-3">{role.summary}</p>}
            <Link
              href="/contact"
              className="text-teal-600 hover:underline font-medium"
            >
              Book Career Help →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
