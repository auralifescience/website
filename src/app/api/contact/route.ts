import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, company, message, type } = await request.json()

  try {
    // Send notification to Aura
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

    // Send confirmation copy to submitter
    await resend.emails.send({
      from: 'Aura Life Science <onboarding@resend.dev>',
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

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
