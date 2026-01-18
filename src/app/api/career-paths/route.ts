// src/app/api/career-paths/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const paths = await prisma.careerPath.findMany({
      select: { id: true, title: true, slug: true, description: true },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ paths })
  } catch (error) {
    console.error('GET /api/career-paths error:', error)
    return NextResponse.json(
      { error: 'Unable to fetch career paths' },
      { status: 500 }
    )
  }
}
