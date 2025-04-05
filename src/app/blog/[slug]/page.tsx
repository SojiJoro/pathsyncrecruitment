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
    <div style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  )
}
