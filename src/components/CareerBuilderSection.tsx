'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function CareerBuilderSection() {
  const router = useRouter()

  return (
    <motion.section
      className="bg-off-white p-8 rounded-lg shadow-md text-center space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-800">
        How to Get Into Tech with No Experience
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Discover tailored learning paths, real salary insights, and free CV support to kickstart your journey into tech.
      </p>

      <button
        onClick={() => router.push('/career-builder')}
        className="btn"
      >
        Start Your Tech Journey
      </button>
    </motion.section>
  )
}
