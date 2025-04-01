// app/blog/[slug]/page.tsx
import { blogPosts } from '@/data/blogPosts'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PageProps) {
  // Find the post by matching the slug (here we assume the slug is like 'post-1', 'post-2', etc.)
  const post = blogPosts.find(p => p.link === `/blog/${params.slug}`)

  if (!post) {
    notFound()
  }

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      {/* More details here */}
    </div>
  )
}
