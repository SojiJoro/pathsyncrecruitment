export interface BlogPost {
  id: number
  title: string
  summary: string
  imageUrl: string
  link: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Effective Job Ad Writing',
    summary: 'Learn how to create job ads that attract top IT talent.',
    imageUrl: '/guide1.jpg',
    link: '/blog/post-1',
    content: `
## Effective Job Ad Writing: How to Attract Top IT Talent in the UK

Writing an effective job ad is crucial in attracting the best talent, especially in the competitive UK IT industry. Here’s how to craft compelling job ads that resonate with top-tier UK-based candidates:

### 1. Clear and Concise Job Title
Choose a straightforward, recognisable job title common within the UK market...

### 2. Engaging Job Summary
Start your job ad with a brief, appealing overview of the role...

*(Continue pasting the full content here...)*
`
  },
  // ...other posts
]
