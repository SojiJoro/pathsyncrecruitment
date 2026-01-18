import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Parse JSON body
  const body = await request.json()
  // body might contain { userId, stepId, status, completedAt, backdated }
  // Insert into your database here
  console.log('Log activity:', body)
  return NextResponse.json({ success: true })
}
