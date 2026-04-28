import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, company, message, type, website } = await request.json()

  // Honeypot check — bots fill hidden fields, real users don't
  if (website) {
    console.log('Honeypot triggered — bot submission blocked:', { name, email, company })
    return NextResponse.json({ success: true })
  }

  // Send notification to Aura
  const { error: error1 } = await resend.emails.send({
    from: 'Aura Website <hello@auralifescience.com>',
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

  if (error1) {
    console.error('Resend error (notification):', error1)
    return NextResponse.json({ error: 'Failed to send message', details: error1 }, { status: 500 })
  }

  // Send confirmation copy to submitter
  const { error: error2 } = await resend.emails.send({
    from: 'Aura Life Science <hello@auralifescience.com>',
    to: email,
    subject: `We received your message, ${name}`,
    text: `
Hi ${name},

Thanks for reaching out to Aura Life Science. We've received your message and will get back to you shortly.

Here's a copy of what you sent:

---
${message}
---

Best,
The Aura Team
hello@auralifescience.com
    `.trim(),
  })

  if (error2) {
    console.error('Resend error (confirmation):', error2)
  }

  return NextResponse.json({ success: true })
}
