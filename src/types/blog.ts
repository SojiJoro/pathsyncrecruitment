// src/types/blog.ts
export interface BlogPost {
    id: number;
    title: string;
    summary: string;
    imageUrl: string;
    slug: string;
    content: string;
    category?: string;
    readTime?: string;
    author?: string;
    date?: string;
  }
  