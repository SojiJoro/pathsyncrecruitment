// File: src/app/blog/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogIndexPage() {
  const posts = [
    {
      slug: 'structured-learning-paths-career-success',
      title: 'Why Structured Learning Paths Lead to Career Success',
      description: 'Discover how organized, mentor-validated learning outperforms ad-hoc skill acquisition',
      date: '2026-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
    },
    {
      slug: 'mentor-validation-employment-readiness',
      title: 'The Role of Mentor Validation in Employment Readiness',
      description: 'How expert feedback transforms learners into job-ready professionals',
      date: '2026-01-10',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80'
    },
    {
      slug: 'neurodivergent-friendly-learning-design',
      title: 'Neurodivergent-Friendly Learning Design Principles',
      description: 'Creating inclusive learning environments that work for everyone',
      date: '2026-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Documentation & Insights
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Learn about our platform&apos;s approach to structured learning, skill validation,
            and career development infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-48 object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-6">
                  <div className="text-sm text-slate-500 mb-3">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} • {post.readTime}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600">
                    {post.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/platform"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Platform Architecture
          </Link>
        </div>
      </div>
    </main>
  )
}
