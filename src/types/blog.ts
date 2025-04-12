export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  slug: string;
  content: string;
  link?: string; // if you still want to include it
  category?: string;
  author?: string;
  date?: string;
  readTime?: string;
}
export interface BlogPostPageProps {
  params: {
    slug: string;
  };
}
export interface BlogPostListProps {
    posts: BlogPost[];
  }