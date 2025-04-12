import Image from 'next/image';
import Link from 'next/link';
import { IconClock, IconBookmark } from '@tabler/icons-react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {/* Image section */}
      <div className="relative h-48">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-blog.jpg';
          }}
        />
      </div>

      {/* Body section */}
      <div className="p-4">
        {/* Category & Read Time */}
        <div className="flex items-center text-gray-500 text-sm mb-2 space-x-4">
          <div className="flex items-center">
            <IconBookmark size={16} stroke={1.5} className="mr-1" />
            <span>{post.category || 'Recruitment'}</span>
          </div>
          <div className="flex items-center">
            <IconClock size={16} stroke={1.5} className="mr-1" />
            <span>{post.readTime || '5 min read'}</span>
          </div>
        </div>

        {/* Title & Summary */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.summary}</p>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="text-teal-600 font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
