// src/app/api/mentor-sessions/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const mentorId = searchParams.get('mentorId') || ''

    const sessions = await prisma.mentorSession.findMany({
      where: { mentorId },
      include: {
        learner: { select: { name: true, email: true } },
      },
      orderBy: { sessionDate: 'asc' },
    })
    return NextResponse.json({ sessions })
  } catch (error) {
    console.error('GET /api/mentor-sessions error:', error)
    return NextResponse.json(
      { error: 'Unable to fetch sessions' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { mentorId, learnerId, topic, sessionDate } = await request.json()
    const newSession = await prisma.mentorSession.create({
      data: {
        mentorId,
        learnerId,
        topic,
        notes: '',
        sessionDate: new Date(sessionDate),
        backdated: false,
      },
    })
    return NextResponse.json({ success: true, session: newSession })
  } catch (error) {
    console.error('POST /api/mentor-sessions error:', error)
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 }
    )
  }
}
