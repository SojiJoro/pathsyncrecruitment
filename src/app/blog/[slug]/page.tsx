// src/app/blog/[slug]/page.tsx
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {post.imageUrl && (
          <div className="mb-8 h-64 relative">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        )}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
