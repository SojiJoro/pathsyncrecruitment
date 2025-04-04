/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogPosts } from '@/data/blogPosts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Post - Pathsync Recruitment',
  description: 'Detailed view of a blog post',
}

export default async function PostPage({ params }: { params: any }) {
  const { slug } = await Promise.resolve(params)
  const post = blogPosts.find((p) => p.link === `/blog/${slug}`)
  if (!post) {
    notFound()
  }

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
    </div>
  )
}
