// src/components/CareerStepTracker.tsx

'use client'

import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface Lesson {
  id: string
  title: string
  body: string
  videoUrl: string | null
  resource: string | null
}

interface Lab {
  id: string
  title: string
  instructions: string
  embedUrl: string | null
  starterRepo: string | null
}

interface StepWithLessonsAndLabs {
  id: string
  title: string
  orderIndex: number
  lessons: Lesson[]
  labs: Lab[]
}

interface CareerStepTrackerProps {
  slug: string
}

export default function CareerStepTracker({ slug }: CareerStepTrackerProps) {
  const [steps, setSteps] = useState<StepWithLessonsAndLabs[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStepsAndLabs() {
      setLoading(true)
      setError(null)

      try {
        // 1) Fetch steps (which already include lessons)
        const resSteps = await fetch(`/api/steps?slug=${encodeURIComponent(slug)}`)
        if (!resSteps.ok) {
          throw new Error(`Failed to fetch steps (${resSteps.status})`)
        }
        const { steps: fetchedSteps } = await resSteps.json()

        // 2) For each step, fetch labs
        const stepsWithLabs: StepWithLessonsAndLabs[] = await Promise.all(
          fetchedSteps.map(async (step: any) => {
            const resLabs = await fetch(`/api/labs?stepId=${step.id}`)
            if (!resLabs.ok) {
              console.warn(`No labs found for step ${step.id}`)
              return { ...step, labs: [] }
            }
            const { labs } = await resLabs.json()
            return { ...step, labs }
          })
        )

        setSteps(stepsWithLabs)
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchStepsAndLabs()
  }, [slug])

  if (loading) {
    return <p>Loading steps and labs…</p>
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>
  }

  if (steps.length === 0) {
    return <p className="text-gray-700">No steps have been defined for this career path yet.</p>
  }

  return (
    <div className="space-y-8">
      {steps.map((step) => (
        <section key={step.id} className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            Step {step.orderIndex}: {step.title}
          </h3>

          {/* LESSONS */}
          {step.lessons.length === 0 ? (
            <p className="text-gray-600">No lesson content yet for this step.</p>
          ) : (
            step.lessons.map((lesson) => (
              <div key={lesson.id} className="mb-6">
                <h4 className="text-lg font-medium mb-1">{lesson.title}</h4>
                <div className="prose max-w-none mb-2">
                  <ReactMarkdown>{lesson.body}</ReactMarkdown>
                </div>
                {lesson.videoUrl && (
                  <div className="aspect-w-16 aspect-h-9 mb-2">
                    <iframe
                      src={lesson.videoUrl}
                      title={lesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
                {lesson.resource && (
                  <p>
                    Resource:{' '}
                    <a
                      href={lesson.resource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {lesson.resource}
                    </a>
                  </p>
                )}
              </div>
            ))
          )}

          {/* LABS */}
          {step.labs.length === 0 ? (
            <p className="text-gray-600">No labs available for this step yet.</p>
          ) : (
            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-semibold">Labs & Exercises</h4>
              {step.labs.map((lab) => (
                <div key={lab.id} className="p-4 border rounded-lg bg-gray-50">
                  <h5 className="text-md font-medium mb-1">{lab.title}</h5>
                  <div className="prose max-w-none mb-2">
                    <ReactMarkdown>{lab.instructions}</ReactMarkdown>
                  </div>
                  {lab.embedUrl && (
                    <div className="mb-2">
                      <a
                        href={lab.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Launch Interactive Lab
                      </a>
                    </div>
                  )}
                  {lab.starterRepo && (
                    <p>
                      Starter Code:{' '}
                      <a
                        href={lab.starterRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {lab.starterRepo}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
