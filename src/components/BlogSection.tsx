"use client";

import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import BlogCard from './BlogCard';

// Define the BlogPost interface
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  featuredImage: string;
}

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  if (latestPosts.length === 0) {
    return null;
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
        {latestPosts.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
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
  );
}
