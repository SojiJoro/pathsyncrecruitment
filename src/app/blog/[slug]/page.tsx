import { blogPosts } from '@/data/blogPosts'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export default async function BlogPostPage(
  props: { params: { slug: string } }
): Promise<JSX.Element> {
  const { params } = props
  
  const post = blogPosts.find(
    (p) => p.slug === params.slug
  )

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts
            .filter(relatedPost => relatedPost.id !== post.id)
            .slice(0, 2)
            .map(relatedPost => (
              <div key={relatedPost.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <Image
                  src={relatedPost.imageUrl}
                  alt={relatedPost.title}
                  width={600}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{relatedPost.title}</h4>
                  <p className="text-gray-600 text-sm">{relatedPost.summary}</p>
                  <a href={`/blog/${relatedPost.slug}`} className="mt-3 inline-block text-blue-600 font-medium">Read more →</a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}