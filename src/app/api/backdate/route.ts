// src/app/api/backdate/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email, activity, dateTime, userType, stepId, mentorEmail, learnerEmail } =
      await request.json()

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (userType === 'progress') {
      await prisma.progressLog.create({
        data: {
          userId: user.id,
          stepId,
          status: 'completed',
          completedAt: new Date(dateTime),
          backdated: true,
        },
      })
    } else if (userType === 'session') {
      const mentor = await prisma.user.findUnique({ where: { email: mentorEmail } })
      const learner = await prisma.user.findUnique({ where: { email: learnerEmail } })
      if (!mentor || !learner) {
        return NextResponse.json({ error: 'Mentor or learner not found' }, { status: 404 })
      }
      await prisma.mentorSession.create({
        data: {
          mentorId: mentor.id,
          learnerId: learner.id,
          topic: activity,
          notes: '',
          sessionDate: new Date(dateTime),
          backdated: true,
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('POST /api/backdate error:', error)
    return NextResponse.json({ error: 'Failed to backdate activity' }, { status: 500 })
  }
}
