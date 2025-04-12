// src/app/blog/[slug]/page.tsx
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get up to 3 related posts (excluding the current one)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Post Content */}
          <main className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-800">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            <div className="mt-8">
              <a href="/blog" className="text-blue-600 hover:underline">
                &larr; Back to Blog
              </a>
            </div>
          </main>

          {/* Sidebar with Related Posts */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <a
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded transition"
                  >
                    <div className="relative w-20 h-20">
                      <Image
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {relatedPost.summary}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
