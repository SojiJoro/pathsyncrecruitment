// src/components/BlogSection.tsx
import { blogPosts, BlogPost } from '@/data/blogPosts'  // Import both the data and type
import Link from 'next/link'
import Image from 'next/image'
import { 
  IconClock, 
  IconArrowRight,
  IconBookmark 
} from '@tabler/icons-react'

export default function BlogSection() {
  const latestPosts: BlogPost[] = blogPosts.slice(0, 3)

  if (latestPosts.length === 0) {
    return null
  }

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
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-blog.jpg';
                }}
              />
              <div className="blog_category">
                <IconBookmark 
                  size={18} 
                  stroke={1.5} 
                  className="category_icon"
                  aria-hidden="true"
                />
                <span>Recruitment Guide</span>
              </div>
            </div>
            <div className="blog_content">
              <div className="blog_meta">
                <span className="meta_item">
                  <IconClock 
                    size={18} 
                    stroke={1.5} 
                    className="meta_icon"
                    aria-hidden="true"
                  />
                  <span>5 min read</span>
                </span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link 
                href={post.link} 
                className="read_more"
                aria-label={`Read more about ${post.title}`}
              >
                <span>Read More</span>
                <IconArrowRight 
                  size={18} 
                  stroke={1.5} 
                  className="arrow_icon"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="view_all_container">
        <Link 
          href="/blog" 
          className="view_all_button"
          aria-label="View all blog posts"
        >
          <span>View All Posts</span>
          <IconArrowRight 
            size={18} 
            stroke={1.5} 
            className="arrow_icon"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  )
}
