// src/components/blog/BlogPreviewSection.tsx
import { blogPosts } from '@/data/blogPosts';
import BlogCard from './BlogCard';
import Link from 'next/link';

export default function BlogPreviewSection() {
  // Grab the first 3 posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Latest Blog Posts</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Check out our recent articles on recruitment strategies, hiring best practices.
          </p>
        </div>

        {/* Grid of 3 Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 rounded-md bg-teal-600 text-white
                       text-sm font-medium hover:bg-teal-700 transition"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
