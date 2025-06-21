// /src/lib/email.ts
import { Resend } from 'resend'

const resend = new Resend

type SendEmailOptions = {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  try {
    const data = await resend.emails.send({
      from: 'InstaLanding AI <noreply@instalanding.ai>',
      to,
      subject,
      html,
    })

    return { success: true, data }
  } catch (error) {
    console.error('❌ Email send failed:', error)
    return { success: false, error }
  }
}
