import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email } = await request.json()

  try {
    await resend.emails.send({
      from: 'Aura Website <onboarding@resend.dev>',
      to: 'hello@auralifescience.com',
      subject: 'New Newsletter Subscriber',
      text: `You have a new subscriber: ${email}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
