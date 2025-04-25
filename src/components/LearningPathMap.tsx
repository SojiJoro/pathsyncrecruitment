'use client'

import { motion } from 'framer-motion'

interface LearningPathMapProps {
  steps: string[]
}

export default function LearningPathMap({ steps }: LearningPathMapProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="relative pl-8 border-l-4 border-teal-500"
        >
          <div className="absolute left-[-0.75rem] top-1 w-4 h-4 bg-teal-500 rounded-full"></div>
          <p className="text-gray-800 font-medium">Step {i + 1}</p>
          <p className="text-gray-600">{step}</p>
        </motion.div>
      ))}
    </div>
  )
}
