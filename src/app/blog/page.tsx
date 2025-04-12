// src/app/blog/page.tsx
import { Metadata } from 'next'
import { blogPosts } from '@/data/blogPosts'
import BlogCard from '@/components/blog/BlogCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Pathsync Recruitment',
  description: 'IT & Tech Recruitment Guides'
}

interface BlogProps {
  searchParams: { page?: string }
}

export default function BlogPage({ searchParams }: BlogProps) {
  const postsPerPage = 6
  const currentPage = Number(searchParams.page || 1)
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const start = (currentPage - 1) * postsPerPage
  const end = start + postsPerPage
  const paginatedPosts = blogPosts.slice(start, end)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">CV Database Access with Every Job Posting</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our CV database for a cost-effective way to find the IT talent you need.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-16">
        {currentPage > 1 && (
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100"
          >
            ← Previous
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  )
}
