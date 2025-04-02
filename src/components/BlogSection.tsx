// BlogSection.tsx
import { blogPosts } from '@/data/blogPosts'
import Link from 'next/link'
import Image from 'next/image'
import { 
  IconClock, 
  IconUser, 
  IconTag,
  IconArrowRight,
  IconBookmark 
} from '@tabler/icons-react'

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="blog_section">
      <div className="blog_header">
        <h2>Latest Blog Posts</h2>
        <p className="blog_intro">
          Check out our recent articles on recruitment strategies, hiring best practices.
        </p>
      </div>

      <div className="blog_grid">
        {latestPosts.map((post, index) => (
          <article key={post.id} className="blog_card">
            <div className="blog_image_wrapper">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="blog_category">
                <IconBookmark size={18} stroke={1.5} className="category_icon" />
                {post.category}
              </div>
            </div>
            <div className="blog_content">
              <div className="blog_meta">
                <span>
                  <IconClock size={18} stroke={1.5} className="meta_icon" />
                  5 min read
                </span>
                <span>
                  <IconUser size={18} stroke={1.5} className="meta_icon" />
                  {post.author}
                </span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link href={post.link} className="read_more">
                Read More
                <IconArrowRight size={18} stroke={1.5} className="arrow_icon" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="view_all_container">
        <Link href="/blog" className="view_all_button">
          View All Posts
          <IconArrowRight size={18} stroke={1.5} className="arrow_icon" />
        </Link>
      </div>
    </section>
  )
}
