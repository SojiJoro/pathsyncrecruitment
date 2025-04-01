import { blogPosts } from '@/data/blogPosts'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogSection() {
  // Show only the first three posts
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="blog_section">
      <h2>Latest Blog Posts</h2>
      <p className="blog_intro">
        Check out our recent articles on recruitment strategies, hiring best practices.
      </p>
      <div className="blog_grid">
        {latestPosts.map((post) => (
          <article key={post.id} className="blog_card">
            <div className="blog_image_wrapper">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <Link href={post.link} className="read_more">
              Read More
            </Link>
          </article>
        ))}
      </div>
      <div className="view_all_container">
        <Link href="/blog" className="read_more">
          View All Posts
        </Link>
      </div>
    </section>
  )
}
