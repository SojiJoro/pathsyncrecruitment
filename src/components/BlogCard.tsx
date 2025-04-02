// src/components/BlogCard.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IconClock, IconArrowRight, IconBookmark } from '@tabler/icons-react'

interface BlogCardProps {
  post: {
    id: number
    title: string
    summary: string
    imageUrl: string
    link: string
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog_card">
      <div className="blog_image_wrapper">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          priority
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
  )
}
