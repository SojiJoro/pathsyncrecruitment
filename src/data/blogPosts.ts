// src/data/blogPosts.ts

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
      summary: 'Learn how to create job ads that attract top talent.',
      imageUrl: '/guide1.jpg',
      link: '/blog/post-1'
    },
    {
      id: 2,
      title: 'Interview Tips for Success',
      summary: 'Discover strategies to help candidates succeed in interviews.',
      imageUrl: '/guide2.jpg',
      link: '/blog/post-2'
    },
    {
      id: 3,
      title: 'Hiring Remotely in 2025',
      summary: 'How to build and manage a remote team successfully.',
      imageUrl: '/guide3.jpg',
      link: '/blog/post-3'
    },
    {
      id: 4,
      title: 'Optimising Your Recruitment Process',
      summary: 'Streamline your recruitment process to save time and money.',
      imageUrl: '/guide4.jpg',
      link: '/blog/post-4'
    },
    {
      id: 5,
      title: 'The Future of IT Recruitment',
      summary: 'Trends and predictions for IT recruitment in the coming years.',
      imageUrl: '/guide5.jpg',
      link: '/blog/post-5'
    },
    {
      id: 6,
      title: 'Understanding Candidate Behaviour',
      summary: 'Insights into what drives top candidates in today’s market.',
      imageUrl: '/guide6.jpg',
      link: '/blog/post-6'
    }
    // Add more posts as needed
  ]
  