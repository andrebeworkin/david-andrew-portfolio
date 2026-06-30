export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

/**
 * Contact form handler.
 *
 * By default this endpoint will simply log the submission to the server
 * console and return success, so the form works out of the box.
 *
 * To actually deliver emails, set these environment variables (e.g. in Vercel):
 *   RESEND_API_KEY   - your Resend API key (https://resend.com, free tier available)
 *   CONTACT_TO_EMAIL - the inbox that should receive submissions
 *   CONTACT_FROM_EMAIL (optional) - a verified sender address on your domain,
 *                      defaults to "onboarding@resend.dev" for quick testing.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = (data?.name ?? '').toString().trim();
    const email = (data?.email ?? '').toString().trim();
    const subject = (data?.subject ?? 'No Subject').toString().trim();
    const message = (data?.message ?? '').toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Portfolio Contact
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f1f5f9; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
          ${message.replace(/\n/g, '<br/>')}
        </div>
      </div>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    // If Resend is configured, send the email.
    if (resendApiKey && toEmail) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: `Portfolio Contact <${fromEmail}>`,
          to: [toEmail],
          reply_to: email,
          subject: `Portfolio Contact: ${subject} - from ${name}`,
          html: htmlBody,
        }),
      });

      if (!response.ok) {
        const errText = await response.text().catch(() => '');
        console.error('Resend error:', response.status, errText);
        throw new Error('Email provider returned an error.');
      }

      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    }

    // No email provider configured: log and succeed so the form still works.
    console.log('[Contact form submission]', { name, email, subject, message });
    return NextResponse.json({
      success: true,
      message: 'Message received! (Configure RESEND_API_KEY to enable email delivery.)',
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
