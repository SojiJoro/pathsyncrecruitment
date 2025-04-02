// BlogSection.tsx
import { blogPosts } from '@/data/blogPosts'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconClock, IconUser, IconTag } from '@tabler/icons-react'

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="blog_section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="blog_header"
      >
        <h2>Latest Blog Posts</h2>
        <p className="blog_intro">
          Check out our recent articles on recruitment strategies, hiring best practices.
        </p>
      </motion.div>

      <div className="blog_grid">
        {latestPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="blog_card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="blog_image_wrapper">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="blog_category">{post.category}</div>
            </div>
            <div className="blog_content">
              <div className="blog_meta">
                <span><IconClock size={16} /> 5 min read</span>
                <span><IconUser size={16} /> {post.author}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link href={post.link} className="read_more">
                Read More
                <span className="button_arrow">→</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="view_all_container"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/blog" className="view_all_button">
          View All Posts
          <span className="button_arrow">→</span>
        </Link>
      </motion.div>
    </section>
  )
}
