// src/app/blog/page.tsx
import { Metadata } from 'next'
import { blogPosts } from '@/data/blogPosts'
import { IconPlayerPlay } from '@tabler/icons-react' // Remove unused imports
import BlogCard from '@/components/BlogCard'

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
                <IconPlayerPlay
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
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
