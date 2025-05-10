// File: src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

/** Handle preflight OPTIONS request */
export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  })
}

/** Handle form submission via POST */
export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const name = formData.get('name')?.toString() || 'No name'
    const email = formData.get('email')?.toString() || 'No email'
    const service = formData.get('service')?.toString() || 'No service'
    const role = formData.get('role')?.toString() || 'Not specified'
    const details = formData.get('details')?.toString() || ''
    const cvFile = formData.get('cv') as File | null

    // configure SMTP transport (Gmail App Password)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_PASS!
      }
    })

    // prepare email
    const attachments: any[] = []
    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer())
      attachments.push({ filename: cvFile.name, content: buffer })
    }

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'info@pathsyncrecruitment.com',
      subject: `New enquiry – ${service}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service}`,
        `Desired role: ${role}`,
        `Details: ${details}`
      ].join('\n'),
      attachments
    }

    // send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, {
      status: 200,
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
  } catch (err: any) {
    console.error('Mail error:', err)
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, {
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
  }
}
