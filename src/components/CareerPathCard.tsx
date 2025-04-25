import Link from 'next/link'

interface CareerPathCardProps {
  title: string
  slug: string
  averageSalary: string
  summary?: string
  badges?: string[]
}

export default function CareerPathCard({ title, slug, averageSalary, summary, badges }: CareerPathCardProps) {
  return (
    <div className="p-5 border rounded-lg bg-white shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">Avg Salary: {averageSalary}</p>
      {badges && (
        <div className="flex flex-wrap gap-2 mb-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      {summary && <p className="text-sm text-gray-500 mb-2">{summary}</p>}
      <Link href={`/career-builder/${slug}`} className="text-teal-600 font-medium hover:underline">
        View Learning Path →
      </Link>
    </div>
  )
}
