import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email, website } = await request.json()

  // Honeypot check — bots fill hidden fields, real users don't
  if (website) {
    console.log('Honeypot triggered — bot newsletter submission blocked:', { email })
    return NextResponse.json({ success: true })
  }

  try {
    await resend.emails.send({
      from: 'Aura Website <hello@auralifescience.com>',
      to: 'hello@auralifescience.com',
      subject: 'New Newsletter Subscriber',
      text: `You have a new subscriber: ${email}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
