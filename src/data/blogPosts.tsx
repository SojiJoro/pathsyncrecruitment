import React from 'react';
import Image from 'next/image';
import { marked } from 'marked';

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  link: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Effective Job Ad Writing: Attracting Top IT Talent',
    summary:
      'Discover how to create compelling job ads that attract the best IT talent in the UK.',
    imageUrl: '/guide1.jpg',
    link: '/blog/post-1',
    content: `
## Effective Job Ad Writing: Attracting Top IT Talent

In today’s competitive market, a well-crafted job ad is essential to attract the right IT professionals. This guide covers everything from the job title to the benefits you offer.

### 1. Start with a Clear Job Title
A concise and recognisable job title is crucial. Choose a title that accurately reflects the role and is common within the UK market. For example, "Senior Software Engineer" immediately conveys expertise.

### 2. Craft an Engaging Job Summary
Begin with a short paragraph that captures the essence of the role. Describe what makes your company unique and the key responsibilities. An engaging summary helps candidates decide if they fit the role.

### 3. Detail the Responsibilities and Requirements
Outline the day-to-day tasks and list essential skills. Use bullet points for clarity. For example:
- Develop and maintain software applications.
- Collaborate with cross-functional teams.
- Experience with modern programming languages like JavaScript or Python.

### 4. Highlight Attractive Benefits
Mention benefits such as flexible working hours, remote work options, and career development opportunities. Explain how your company supports professional growth.

### 5. Include a Clear Call to Action
Encourage interested candidates to apply by including clear instructions on how to submit their applications. A simple “Apply Now” button or link can increase engagement.

### Conclusion
By focusing on clarity, engagement, and detailed information, your job ad can attract top IT talent and give your company a competitive edge in the recruitment market.
`
  },
  {
    id: 2,
    title: 'Top Tech Interview Questions in 2025',
    summary:
      'Prepare for your next tech interview with our curated list of questions and strategies.',
    imageUrl: '/guide2.jpg',
    link: '/blog/post-2',
    content: `
## Top Tech Interview Questions in 2025

Preparing for tech interviews can be challenging, but knowing what to expect can give you a competitive edge. This guide outlines some of the most important questions and strategies to help you succeed.

### 1. System Design Fundamentals
System design questions test your ability to architect scalable solutions. Expect questions like:
- How would you design a scalable messaging system?
- What are the key components in designing a distributed database?

Discuss the trade-offs between different architectures and be prepared to sketch diagrams.

### 2. Behavioural Questions
Technical skills are important, but companies also assess cultural fit. You might be asked:
- Describe a time when you faced a challenging project.
- How do you handle tight deadlines and conflicting priorities?

Focus on your problem-solving skills and teamwork.

### 3. Deep-Dive Technical Challenges
Prepare for coding challenges or algorithmic problems. Practice questions on:
- Data structures and algorithms
- Optimisation techniques
- Debugging complex code issues

### 4. Preparation Tips
- **Practice regularly:** Use platforms like LeetCode or HackerRank.
- **Review past projects:** Be ready to discuss your contributions in detail.
- **Mock interviews:** Practice with peers to build confidence.

### Conclusion
Tech interviews in 2025 are set to be more holistic than ever. By preparing for system design, behavioural questions, and technical challenges, you can enter your next interview with confidence.
`
  },
  {
    id: 3,
    title: 'Modern Recruitment Strategies for IT Talent',
    summary:
      'Explore modern methods and digital strategies to attract high-calibre IT professionals.',
    imageUrl: '/guide3.jpg',
    link: '/blog/post-3',
    content: `
## Modern Recruitment Strategies for IT Talent

The recruitment landscape is rapidly evolving, and traditional methods are no longer enough to attract the best IT professionals. Here are some modern strategies that can give your recruitment efforts a significant boost.

### 1. Leverage Social Media Outreach
Social media platforms like LinkedIn, Twitter, and even Instagram can be powerful tools for recruitment. Share engaging content that highlights your company culture and career opportunities. Use targeted ads to reach professionals with the right skills.

### 2. Implement Employee Referral Programmes
Employee referrals are one of the most effective ways to find top talent. Encourage your current employees to refer their contacts by offering incentives or bonuses for successful hires. This approach often leads to higher quality candidates who fit the company culture.

### 3. Embrace Data-Driven Recruitment
Use analytics to monitor your recruitment channels and determine which sources yield the best candidates. Invest in recruitment software that helps you track metrics such as time-to-hire and candidate quality. Data-driven insights can refine your hiring strategy over time.

### 4. Enhance the Candidate Experience
A smooth and engaging recruitment process can make a big difference. Ensure that your job postings are clear, your application process is user-friendly, and communication is timely. A positive experience encourages candidates to choose your company over competitors.

### 5. Stay Updated on Future Trends
The IT industry is constantly evolving. Keep an eye on emerging trends such as remote work, flexible scheduling, and new digital tools. Adapting to these trends not only attracts talent but also positions your company as forward-thinking.

### Conclusion
Modern recruitment for IT talent is about more than just posting job ads. By leveraging social media, using data, and focusing on the candidate experience, you can build a recruitment strategy that not only attracts high-calibre professionals but also retains them for the long term.
`
  }
];

export function BlogPostView({ postId }: { postId: number }) {
  const post = blogPosts.find((post: BlogPost) => post.id === postId);

  if (!post) {
    return <div className="text-center py-12">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts
            .filter((relatedPost: BlogPost) => relatedPost.id !== post.id)
            .slice(0, 2)
            .map((relatedPost: BlogPost) => (
              <div key={relatedPost.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <Image
                  src={relatedPost.imageUrl}
                  alt={relatedPost.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{relatedPost.title}</h4>
                  <p className="text-gray-600 text-sm">{relatedPost.summary}</p>
                  <a href={relatedPost.link} className="mt-3 inline-block text-blue-600 font-medium">
                    Read more &rarr;
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
