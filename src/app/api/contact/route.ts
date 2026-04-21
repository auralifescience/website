import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, company, message, type } = await request.json()

  try {
    await resend.emails.send({
      from: 'Aura Website <onboarding@resend.dev>',
      to: 'hello@auralifescience.com',
      replyTo: email,
      subject: `New ${type || 'Contact'} message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Type: ${type || 'General'}

Message:
${message}
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
