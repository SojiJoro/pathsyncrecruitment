// File: src/app/blog/page.jsx
import React from 'react'
import Link from 'next/link'

export default function BlogIndexPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          From the blog
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <Link
                href="/blog/how-ai-is-transforming-recruitment-in-2025"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                How AI Is Transforming Recruitment in 2025
              </Link>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 18 April 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
