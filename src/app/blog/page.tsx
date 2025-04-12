import { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';

export const metadata: Metadata = {
  title: 'All Blog Posts - Pathsync Recruitment',
  description: 'A list of all our IT & Tech Recruitment Guides',
};

export default function AllPostsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">All Blog Posts</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Browse all of our articles on IT, Tech, and Recruitment.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
