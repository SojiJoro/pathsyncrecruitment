// components/BlogSection.jsx
import React from 'react';

export default function BlogSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          From the blog
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {/* Copy each of your blog items here */}
          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?…"
              alt=""
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                How to use sticky note for problem solving
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>
          {/* …and so on for the other items */}
        </div>
      </div>
    </section>
  );
}
