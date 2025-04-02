// types/blog.ts (or wherever you keep your types)
export interface BlogPost {
  id: string | number;
  title: string;
  summary: string;
  imageUrl: string;
  link: string;
  author: string;
  category: string;  // Added this
  date?: string;     // Optional
  readTime?: string; // Optional
}
