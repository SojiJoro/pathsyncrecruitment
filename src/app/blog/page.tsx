// src/app/blog/page.tsx
import { Metadata } from 'next'
import { blogPosts } from '@/data/blogPosts'
import Link from 'next/link'
import Image from 'next/image'
import { IconArrowRight, IconPlayCircle } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Blog - Pathsync Recruitment',
  description: 'IT & Tech Recruitment Guides'
}

export default function BlogPage() {
  return (
    <>
      {/* Hero/Banner Section */}
      <section className="blog_hero">
        <div className="blog_hero_content">
          <h1>CV Database Access with Every Job Posting</h1>
          <p>
            Explore our CV database for a cost-effective way to find the IT talent you need.
          </p>
          <div className="blog_hero_video">
            <div className="video_wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dummyVideoID"
                title="Video Player"
                allowFullScreen
                loading="lazy"
              />
              <div className="video_overlay">
                <IconPlayCircle 
                  size={64} 
                  className="play_icon"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="blog_section">
        <div className="section_header">
          <h2>IT &amp; Tech Recruitment Guides</h2>
          <p className="blog_intro">
            Explore our latest articles on recruitment strategies, hiring best practices, and industry trends.
          </p>
        </div>
        
        <div className="blog_grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog_card">
              <div className="blog_image_wrapper">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-blog.jpg';
                  }}
                />
                <div className="image_overlay" />
              </div>
              <div className="blog_content">
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
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
