// src/app/blog/[slug]/page.tsx
import { blogPosts } from '@/data/blogPosts'
import { BlogPost } from '@/types/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export default async function Page({ params }: { params: { slug: string } }): Promise<JSX.Element> {
  const post: BlogPost | undefined = blogPosts.find((p: BlogPost) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {post.imageUrl && (
          <div className="mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <article className="prose prose-teal md:prose-lg">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>
          <aside className="col-span-1">
            {/* Optional sidebar content */}
          </aside>
        </div>
      </div>
    </div>
  )
}
