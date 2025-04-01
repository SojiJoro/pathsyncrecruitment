export interface BlogPost {
    id: number
    title: string
    summary: string
    imageUrl: string
    link: string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Effective Job Ad Writing',
      summary: 'Learn how to create job ads that attract top IT talent.',
      imageUrl: '/guide1.jpg',
      link: '/blog/post-1'
    },
    {
      id: 2,
      title: 'Interview Tips for Success',
      summary: 'Discover strategies to help candidates excel in interviews.',
      imageUrl: '/guide2.jpg',
      link: '/blog/post-2'
    },
    {
      id: 3,
      title: 'Hiring Remotely in 2025',
      summary: 'How to build and manage a remote IT team successfully.',
      imageUrl: '/guide3.jpg',
      link: '/blog/post-3'
    }
  ]
  