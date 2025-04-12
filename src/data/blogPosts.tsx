// src/data/blogPosts.tsx
import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Effective Job Ad Writing: Attracting Top IT Talent',
    summary: 'Discover how to create compelling job ads that attract the best IT talent in the UK.',
    imageUrl: '/guide1.jpg',
    slug: 'effective-job-ad-writing',
    content: `
## Effective Job Ad Writing: Attracting Top IT Talent

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
    `,
    category: 'Recruitment',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Top Tech Interview Questions in 2025',
    summary: 'Prepare for your next tech interview with our curated list of questions and strategies.',
    imageUrl: '/guide2.jpg',
    slug: 'top-tech-interview-questions-2025',
    content: `
## Top Tech Interview Questions in 2025

Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    `,
    category: 'Interviews',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'Modern Recruitment Strategies for IT Talent',
    summary: 'Explore modern methods and digital strategies to attract high-calibre IT professionals.',
    imageUrl: '/guide3.jpg',
    slug: 'modern-recruitment-strategies',
    content: `
## Modern Recruitment Strategies for IT Talent

Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
    `,
    category: 'Recruitment',
    readTime: '5 min read',
  }
];
