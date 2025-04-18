// File: src/app/blog/[slug]/page.jsx
import React from 'react'
import Link from 'next/link'

export default function BlogPostPage({ params }) {
  const { slug } = params

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <nav className="mb-4">
          <Link href="/blog" className="text-teal-600 hover:underline">
            &larr; Back to blog
          </Link>
        </nav>

        <header className="bg-teal-800 dark:bg-teal-700 text-white rounded-lg p-6 mb-6">
          <time dateTime="2025-04-18" className="block text-sm opacity-75">
            18 April 2025 • 4 min read
          </time>
          <h1 className="mt-2 text-3xl lg:text-5xl font-bold">
            How AI Is Transforming Recruitment in 2025
          </h1>
        </header>

        <img
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full max-h-80 rounded-lg mb-6 shadow"
        />

        <article className="prose lg:prose-xl dark:prose-invert mx-auto space-y-6">
          <p>
            In today’s ultra competitive talent market forward thinking recruitment agencies are
            turning to artificial intelligence to streamline every step of the hiring journey. From
            intelligent resume parsing that extracts key skills in seconds to predictive analytics
            that forecast a candidate’s cultural fit AI tools are no longer “nice to have” but
            essential for staying ahead.
          </p>

          <h2>1. Smarter Sourcing and Screening</h2>
          <p>
            Traditional keyword searches miss up to 75 per cent of qualified candidates. AI driven
            platforms however analyse work history soft skill indicators and even social media
            signals to surface hidden gems faster and more accurately than any human could.
          </p>

          <h2>2. Bias Reduction Through Data</h2>
          <p>
            Unconscious bias often creeps into hiring decisions. By anonymising applications and
            scoring candidates strictly on role relevant metrics AI helps level the playing field
            ensuring you focus on ability not background.
          </p>

          <h2>3. Enhanced Candidate Experience</h2>
          <p>
            Chatbots powered by natural language processing can answer FAQs schedule interviews
            and provide personalised feedback 24 7 keeping candidates engaged and improving your
            employer brand.
          </p>

          <h2>4. Predictive Fit and Retention</h2>
          <p>
            Beyond hiring AI models now predict turnover risk by correlating candidate traits
            with long term performance data. Armed with these insights agencies can make stronger
            placements and build lasting client relationships.
          </p>

          <h2>Looking Ahead</h2>
          <p>
            As AI continues to evolve agencies that embrace it will deliver faster fairer and more
            scalable recruiting solutions. Ready to transform your process start small pilot one
            AI tool this quarter and measure the impact The future of recruitment is intelligent
            and it starts now.
          </p>
        </article>
      </div>
    </main>
  )
}
