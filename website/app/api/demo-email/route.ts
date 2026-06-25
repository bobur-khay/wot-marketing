import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type DemoEmailPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function readRequiredString(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  console.log(apiKey);

  if (!apiKey) {
    return NextResponse.json({ message: 'Email sending is not configured.' }, { status: 500 });
  }

  let payload: DemoEmailPayload;

  try {
    payload = (await request.json()) as DemoEmailPayload;
  } catch {
    return NextResponse.json({ message: 'Please send the form as JSON.' }, { status: 400 });
  }

  const name = readRequiredString(payload.name);
  const email = readRequiredString(payload.email);
  const subject = readRequiredString(payload.subject);
  const message = readRequiredString(payload.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: 'Please fill in every field.' }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (message.length > 4000) {
    return NextResponse.json({ message: 'Please keep the message under 4000 characters.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    to: process.env.DEMO_EMAIL_TO ?? email,
    from: process.env.DEMO_EMAIL_FROM ?? 'WoT Demo <onboarding@resend.dev>',
    replyTo: email,
    subject: `[WoT demo contact] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 502 });
  }

  return NextResponse.json({ message: 'Your demo email was sent.' });
}
