import { blogPosts } from '@/data/blogPosts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'

export const metadata: Metadata = {
  title: 'Blog Post - Pathsync Recruitment',
  description: 'Detailed view of a blog post',
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.link === `/blog/${slug}`)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <header className="bg-teal-800 text-white py-10 mb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {post.title}
          </h1>
          {post.summary && (
            <p className="mt-3 text-gray-100 text-lg">
              {post.summary}
            </p>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <article className="prose prose-teal md:prose-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>
    </div>
  )
}
