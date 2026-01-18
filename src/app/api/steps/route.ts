// src/app/api/steps/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug') || ''

    // 1) Find CareerPath ID by slug
    const careerPath = await prisma.careerPath.findUnique({
      where: { slug },
      select: { id: true },
    })
    if (!careerPath) {
      return NextResponse.json({ steps: [] })
    }

    // 2) Fetch steps (without lessons)
    const steps = await prisma.step.findMany({
      where: { pathId: careerPath.id },
      orderBy: { orderIndex: 'asc' },
      select: {
        id: true,
        title: true,
        orderIndex: true,
      },
    })

    if (steps.length === 0) {
      return NextResponse.json({ steps: [] })
    }

    // 3) Fetch lessons for those steps (using prisma.lesson)
    const stepIds = steps.map((step: { id: string; title: string; orderIndex: number }) => step.id)
    const lessons = await prisma.lesson.findMany({
      where: { stepId: { in: stepIds } },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        title: true,
        body: true,
        videoUrl: true,
        resource: true,
        stepId: true,
      },
    })

    // 4) Group lessons by stepId
    const lessonsByStep: Record<
      string,
      Array<{
        id: string
        title: string
        body: string
        videoUrl: string | null
        resource: string | null
      }>
    > = {}
    for (const lesson of lessons) {
      if (!lessonsByStep[lesson.stepId]) {
        lessonsByStep[lesson.stepId] = []
      }
      lessonsByStep[lesson.stepId].push({
        id: lesson.id,
        title: lesson.title,
        body: lesson.body,
        videoUrl: lesson.videoUrl,
        resource: lesson.resource,
      })
    }

    // 5) Merge lessons into each step object
    const stepsWithLessons = steps.map((step: { id: string; title: string; orderIndex: number }) => ({
      id: step.id,
      title: step.title,
      orderIndex: step.orderIndex,
      lessons: lessonsByStep[step.id] || [],
    }))

    return NextResponse.json({ steps: stepsWithLessons })
  } catch (error) {
    console.error('GET /api/steps error:', error)
    return NextResponse.json(
      { error: 'Unable to fetch steps' },
      { status: 500 }
    )
  }
}
