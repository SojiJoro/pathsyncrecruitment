// src/app/api/export/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId') || ''

    const progressLogs = await prisma.progressLog.findMany({
      where: { userId },
      include: { step: { select: { title: true } } },
      orderBy: { completedAt: 'asc' },
    })
    const sessions = await prisma.mentorSession.findMany({
      where: { OR: [{ mentorId: userId }, { learnerId: userId }] },
      include: {
        mentor: { select: { name: true, email: true } },
        learner: { select: { name: true, email: true } },
      },
      orderBy: { sessionDate: 'asc' },
    })

    return NextResponse.json({ progressLogs, sessions })
  } catch (error) {
    console.error('GET /api/export error:', error)
    return NextResponse.json({ error: 'Failed to export logs' }, { status: 500 })
  }
}
