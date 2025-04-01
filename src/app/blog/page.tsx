import { Metadata } from 'next'
import { blogPosts } from '@/data/blogPosts'
import Link from 'next/link'
import Image from 'next/image'

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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dummyVideoID"
              title="Video Player"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="blog_section">
        <h2>IT &amp; Tech Recruitment Guides</h2>
        <p className="blog_intro">
          Explore our latest articles on recruitment strategies, hiring best practices, and industry trends.
        </p>
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
      </section>
    </>
  )
}
