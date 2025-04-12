export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  slug: string; // instead of "link"
  content: string;
  author?: string;
  category?: string;
  date?: string;
  readTime?: string;
}
