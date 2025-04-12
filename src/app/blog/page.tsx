// src/app/blog/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Pathsync Recruitment',
  description: 'IT & Tech Recruitment Guides',
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({
  searchParams,
}: BlogPageProps): Promise<React.ReactElement> {
  const resolvedSearchParams = await searchParams;
  const postsPerPage = 6;
  const currentPage = Number(resolvedSearchParams.page || 1);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = blogPosts.slice(start, end);

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          CV Database Access with Every Job Posting
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our CV database for a cost-effective way to find the IT talent you need.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>

      <div className="flex justify-center gap-4 mt-16">
        {currentPage > 1 && (
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className="px-5 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition"
          >
            ← Previous
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="px-5 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
