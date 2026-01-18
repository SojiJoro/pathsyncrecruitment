// src/app/learning-hub/career-paths/[slug]/page.tsx

// Note: 💡 this file is a *Server Component* by default.
// We use `params.slug` here, which Next.js provides server-side.

import CareerStepTracker from '@/components/CareerStepTracker'

interface CareerPathPageProps {
  params: { slug: string }
}

export default async function CareerPathPage({ params }: CareerPathPageProps) {
  const { slug } = params

  // Optionally, you can fetch the human‐friendly title/description server-side
  // by calling Prisma directly (in a Server Component) rather than fetching from /api.
  // That avoids an extra network request and prevents flicker.
  //
  // Below is an example. If you prefer to do it client-side, you can skip it.

  let title = slug
  let description: string | null = null

  try {
    // Dynamically import Prisma (only runs on the server)
    const { prisma } = await import('@/lib/prisma')
    const careerPath = await prisma.careerPath.findUnique({
      where: { slug },
      select: { title: true, description: true },
    })

    if (careerPath) {
      title = careerPath.title
      description = careerPath.description
    }
  } catch (error) {
    console.error('Error fetching careerPath server-side:', error)
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Career Path: {title}</h2>
      {description && <p className="text-gray-700">{description}</p>}
      {/* Pass slug down into the client component */}
      <CareerStepTracker slug={slug} />
    </div>
  )
}
