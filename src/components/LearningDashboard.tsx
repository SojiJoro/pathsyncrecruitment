// src/components/LearningDashboard.tsx

'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface CareerPath {
  id: string
  title: string
  slug: string
  description: string | null
}

export default function LearningDashboard() {
  const [paths, setPaths] = useState<CareerPath[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPaths() {
      try {
        const res = await fetch('/api/career-paths')
        if (!res.ok) throw new Error(`Failed to fetch paths (${res.status})`)
        const data = await res.json()
        setPaths(data.paths)
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchPaths()
  }, [])

  if (loading) {
    return <p>Loading career paths…</p>
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>
  }

  if (paths.length === 0) {
    return <p>No career paths are available right now.</p>
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Welcome to the Learning Hub</h2>
      <p>Select a career path to begin or continue learning.</p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paths.map((path) => (
          <li key={path.id} className="border rounded-lg p-4 hover:shadow">
            {/* ✅ Move className onto Link directly; remove the extra <a> */}
            <Link
              href={`/learning-hub/career-paths/${path.slug}`}
              className="block"
            >
              <h3 className="text-lg font-medium text-green-700">
                {path.title}
              </h3>
              {path.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {path.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
