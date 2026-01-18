// File: src/app/blog/[slug]/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  image: string
  content: {
    intro: string
    sections: { heading: string; content: string }[]
    conclusion: string
  }
}

const blogPosts: Record<string, BlogPost> = {
  'structured-learning-paths-career-success': {
    slug: 'structured-learning-paths-career-success',
    title: 'Why Structured Learning Paths Lead to Career Success',
    date: '2026-01-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    content: {
      intro: 'In an era where self-directed learning is celebrated, structured learning paths offer something fundamentally different: clear progression, measurable outcomes, and validated competency. Our platform demonstrates that organized, mentor-guided learning consistently outperforms ad-hoc skill acquisition.',
      sections: [
        {
          heading: 'The Problem with Ad-Hoc Learning',
          content: 'While motivation-driven learning has its place, it often leads to fragmented knowledge, skill gaps, and difficulty demonstrating competency to employers. Learners spend months accumulating certificates without developing job-ready capabilities.'
        },
        {
          heading: 'Structured Paths Provide Clear Progression',
          content: 'Our career paths break down complex roles into manageable steps. Each step builds on the previous one, ensuring foundational knowledge before advancing. Learners always know: "What do I learn next?" and "How does this connect to my goal?"'
        },
        {
          heading: 'Mentor Validation Creates Accountability',
          content: 'Unlike automated courses, our paths include mentor checkpoints. Experts review your work, validate your understanding, and provide actionable feedback. This creates both accountability and confidence in your capabilities.'
        },
        {
          heading: 'Employers Trust Structured Outcomes',
          content: 'Hiring managers value candidates who can demonstrate systematic skill development. A completed, mentor-validated learning path signals more than knowledge—it shows commitment, consistency, and proven capability.'
        }
      ],
      conclusion: 'Structured learning paths aren&apos;t about limiting freedom—they&apos;re about maximizing outcomes. By combining clear curriculum, hands-on practice, mentor validation, and employment alignment, we create career infrastructure that works.'
    }
  },
  'mentor-validation-employment-readiness': {
    slug: 'mentor-validation-employment-readiness',
    title: 'The Role of Mentor Validation in Employment Readiness',
    date: '2026-01-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=1200&q=80',
    content: {
      intro: 'Completing tutorials is one thing. Being job-ready is another. The gap between learning and employability is filled by validation—expert review that confirms you can apply skills in professional contexts.',
      sections: [
        {
          heading: 'Beyond Automated Feedback',
          content: 'Automated systems can check syntax, but they can\'t assess problem-solving approach, code quality, or professional communication. Mentor review provides the human judgment employers value.'
        },
        {
          heading: 'Building Professional Standards',
          content: 'Mentors don\'t just mark work correct or incorrect. They teach professional standards: readable code, clear documentation, appropriate tool selection, and effective communication. These skills separate junior from job-ready professionals.'
        },
        {
          heading: 'Creating Proof of Competency',
          content: 'When a mentor validates your work, it becomes evidence. Not self-reported skills on a resume, but documented, reviewed, expert-endorsed capability. This proof transforms job applications.'
        },
        {
          heading: 'Accelerating Career Growth',
          content: 'Direct feedback from experienced professionals helps learners avoid common pitfalls, adopt best practices early, and develop the judgment that typically comes only from years of experience.'
        }
      ],
      conclusion: 'Mentor validation is the bridge between learning and employment. It transforms potential into proven capability, giving both learners and employers confidence in readiness.'
    }
  },
  'neurodivergent-friendly-learning-design': {
    slug: 'neurodivergent-friendly-learning-design',
    title: 'Neurodivergent-Friendly Learning Design Principles',
    date: '2026-01-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80',
    content: {
      intro: 'Traditional learning platforms often create unnecessary barriers for neurodivergent learners. Our platform is built on principles that work for everyone—especially those who think differently.',
      sections: [
        {
          heading: 'Clear Structure Reduces Cognitive Load',
          content: 'Predictable layouts, consistent navigation, and explicit step-by-step progression reduce the mental energy needed to understand "how to learn here" so learners can focus on "what to learn."'
        },
        {
          heading: 'Multiple Input/Output Modalities',
          content: 'We provide learning content in multiple formats: written documentation, video explanations, visual diagrams, and hands-on labs. Learners choose the format that works best for their processing style.'
        },
        {
          heading: 'Explicit Success Criteria',
          content: 'Ambiguity creates anxiety. Every lesson and lab clearly states: "You\'ll know you\'ve succeeded when..." Learners don\'t guess if they\'re ready to progress—they have concrete evidence.'
        },
        {
          heading: 'Flexible Pacing Without Pressure',
          content: 'No arbitrary deadlines. Learners progress when ready, not when a calendar says they should. This reduces anxiety and allows for the deep processing many neurodivergent learners excel at.'
        },
        {
          heading: 'Direct Communication from Mentors',
          content: 'Our mentors are trained to provide clear, specific, actionable feedback. No vague praise or implied criticism—just direct guidance on what works and what to improve.'
        }
      ],
      conclusion: 'Neurodivergent-friendly design isn\'t special accommodation—it\'s good design. When we remove unnecessary barriers and provide clarity, structure, and flexibility, everyone learns better.'
    }
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Documentation
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
            <span>←</span>
            <span>Back to Documentation</span>
          </Link>
        </nav>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-8">
            <div className="text-sm text-slate-500 mb-4">
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} • {post.readTime}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {post.title}
            </h1>
          </header>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 object-cover rounded-xl mb-8 shadow-lg"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-12">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Key Takeaway</h2>
              <p className="text-slate-700 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/learning-hub/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Learning Path
              </Link>
              <Link
                href="/platform"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn About Our Platform →
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  )
}
