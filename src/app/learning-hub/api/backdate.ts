import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // body will be { email, activity, dateTime }
  // Insert a backdated record into progress_logs or mentorship_sessions
  console.log('Backdate request:', body)
  return NextResponse.json({ success: true })
}
