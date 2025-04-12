// src/data/blogPosts.tsx
import React from 'react'
import Image from 'next/image'
import { marked } from 'marked'

export interface BlogPost {
  id: number
  title: string
  summary: string
  imageUrl: string
  link: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Effective Job Ad Writing: Attracting Top IT Talent',
    summary:
      'Discover how to create compelling job ads that attract the best IT talent in the UK.',
    imageUrl: '/guide1.jpg',
    link: '/blog/post-1',
    content: `...` // Content unchanged for brevity
  },
  {
    id: 2,
    title: 'Top Tech Interview Questions in 2025',
    summary:
      'Prepare for your next tech interview with our curated list of questions and strategies.',
    imageUrl: '/guide2.jpg',
    link: '/blog/post-2',
    content: `...`
  },
  {
    id: 3,
    title: 'Modern Recruitment Strategies for IT Talent',
    summary:
      'Explore modern methods and digital strategies to attract high-calibre IT professionals.',
    imageUrl: '/guide3.jpg',
    link: '/blog/post-3',
    content: `...`
  }
]

export function BlogPostView({ postId }: { postId: number }) {
  const post = blogPosts.find((post: BlogPost) => post.id === postId)

  if (!post) {
    return <div className="text-center py-20 text-lg text-gray-500">Post not found</div>
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Image */}
      <div className="mb-10">
        <Image
          src={post.imageUrl}
          alt={`Cover image for ${post.title}`}
          width={1200}
          height={600}
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight text-center">
        {post.title}
      </h1>

      {/* Post Content */}
      <article className="prose prose-lg max-w-none mx-auto text-gray-800">
        <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
      </article>

      {/* Related Posts */}
      <section className="mt-20 pt-10 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogPosts
            .filter((relatedPost: BlogPost) => relatedPost.id !== post.id)
            .slice(0, 2)
            .map((relatedPost: BlogPost) => (
              <div
                key={relatedPost.id}
                className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={relatedPost.imageUrl}
                  alt={`Image for ${relatedPost.title}`}
                  width={600}
                  height={300}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {relatedPost.summary}
                  </p>
                  <a
                    href={relatedPost.link}
                    className="text-blue-600 font-medium hover:underline"
                    aria-label={`Read more about ${relatedPost.title}`}
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  )
}
