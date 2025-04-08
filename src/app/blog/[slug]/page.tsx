import { blogPosts } from '@/data/blogPosts'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

interface PageProps {
  params: { slug: string }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = params
  const post = blogPosts.find((p: any) => p.link === `/blog/${slug}`)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Hero Image using next/image */}
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

        {/* Main Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Blog Content */}
          <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <article className="prose prose-teal md:prose-lg">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="col-span-1 space-y-8">
            {/* Career Guides & News */}
            <section>
              <h2 className="text-lg font-semibold mb-3">
                Career Guides &amp; News
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    Why executive coaching is a 'must-have' for technology professionals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    How to advance your IT career in 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    The future of cloud computing
                  </a>
                </li>
              </ul>
            </section>

            {/* Featured Employers */}
            <section>
              <h2 className="text-lg font-semibold mb-3">Featured Employers</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    PwC
                  </a>
                </li>
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    Google
                  </a>
                </li>
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    Amazon
                  </a>
                </li>
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    Apple
                  </a>
                </li>
              </ul>
            </section>

            {/* Partners */}
            <section>
              <h2 className="text-lg font-semibold mb-3">Partners</h2>
              <p className="text-sm text-gray-700">
                Partner 1, Partner 2, Partner 3...
              </p>
            </section>

            {/* Top Articles */}
            <section>
              <h2 className="text-lg font-semibold mb-3">Top Articles</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    Article 1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    Article 2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-teal-600 hover:underline">
                    Article 3
                  </a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
