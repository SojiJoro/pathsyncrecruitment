'use client'
import { useState } from 'react'
import { roles } from '@/data/roles'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CareerBuilder() {
  const [query, setQuery] = useState('')
  const [badgeFilter, setBadgeFilter] = useState<string | 'All'>('All')
  const [page, setPage] = useState(1)
  const pageSize = 5

  // 1. Filter by search
  let filtered = roles.filter(r =>
    r.skills.some(s => s.toLowerCase().includes(query.toLowerCase()))
  )
  // 2. Filter by badge
  if (badgeFilter !== 'All') {
    filtered = filtered.filter(r => r.badges?.includes(badgeFilter))
  }
  // 3. Paginate
  const totalPages = Math.ceil(filtered.length / pageSize)
  const pageRoles = filtered.slice((page - 1) * pageSize, page * pageSize)

  return (
    <main className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-teal-700 text-white p-6 rounded-lg text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          Explore Tech Roles & Learning Paths
        </h1>
        <p className="max-w-2xl mx-auto">
          Search by skill, filter by badge, and browse page by page.
        </p>
      </motion.header>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="e.g. Python, Design, Linux…"
          className="p-3 border rounded w-full sm:w-2/3"
          value={query}
          onChange={e => { setQuery(e.target.value); setPage(1) }}
        />
        <select
          value={badgeFilter}
          onChange={e => { setBadgeFilter(e.target.value); setPage(1) }}
          className="p-3 border rounded"
        >
          <option>All</option>
          <option>Most Searched</option>
          <option>Beginner-Friendly</option>
          <option>Top Pay</option>
        </select>
        <button onClick={() => setPage(1)} className="btn">
          Match Roles
        </button>
      </div>

      {/* Role cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {pageRoles.map((role, i) => (
          <motion.div
            key={role.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="border p-5 rounded-lg shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold text-teal-700">{role.title}</h2>
            <p className="text-sm text-gray-600 mb-2">Avg Salary: {role.averageSalary}</p>
            {role.badges && (
              <div className="flex flex-wrap gap-2 mb-2">
                {role.badges.map(b => (
                  <span
                    key={b}
                    className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full"
                  >{b}</span>
                ))}
              </div>
            )}
            <p className="text-sm text-gray-500 mb-3">{role.summary}</p>
            <Link
              href={`/career-builder/${role.slug}`}
              className="text-teal-600 hover:underline font-medium"
            >
              View Learning Path →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="btn disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="btn disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  )
}
