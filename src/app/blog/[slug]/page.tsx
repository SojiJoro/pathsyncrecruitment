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
    <div className="bg-white text-gray-800">
      {/* Hero/Header Section */}
      <header className="bg-teal-700 text-white py-8 mb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="mt-2 text-gray-100">{post.summary}</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 pb-12">
        <article className="prose prose-teal lg:prose-xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>
    </div>
  )
}
