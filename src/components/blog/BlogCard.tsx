// src/components/blog/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { IconClock, IconArrowRight, IconBookmark } from '@tabler/icons-react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <div className="relative h-48">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-blog.jpg';
          }}
        />
        <div className="absolute top-0 left-0 bg-white bg-opacity-75 px-2 py-1 rounded-br">
          <IconBookmark size={18} stroke={1.5} className="inline-block mr-1" />
          <span className="text-sm font-medium">{post.category || 'Recruitment Guide'}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <IconClock size={18} stroke={1.5} className="mr-1" />
          <span>{post.readTime || '5 min read'}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.summary}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center text-blue-600 font-medium hover:underline"
        >
          <span>Read More</span>
          <IconArrowRight size={18} stroke={1.5} className="ml-1" />
        </Link>
      </div>
    </article>
  );
}
