import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    // Expect either stepId or slug+stepIndex as query params
    const stepId = searchParams.get('stepId') || ''
    if (!stepId) {
      return NextResponse.json({ labs: [] })
    }

    // Fetch all labs for that step
    const labs = await prisma.lab.findMany({
      where: { stepId },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        title: true,
        instructions: true,
        embedUrl: true,
        starterRepo: true,
      },
    })

    return NextResponse.json({ labs })
  } catch (error) {
    console.error('GET /api/labs error:', error)
    return NextResponse.json(
      { error: 'Unable to fetch labs' },
      { status: 500 }
    )
  }
}
