'use client';
import { LinkCard } from '@/app/_components/LinkCard';
import { PageLayout } from '@/app/_components/PageLayout';
import { CONTACTS } from '@/lib/contacts';
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Typography,
} from '@mui/joy';
import { MastodonFeed } from '@/app/_components/home-page-sections/MastodonFeed';
import { FormEvent, useState } from 'react';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setStatusMessage('');

    const formData = new FormData(form);
    let response: Response;

    try {
      response = await fetch('/api/demo-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });
    } catch {
      setStatus('error');
      setStatusMessage('The demo email could not be sent. Please try again.');
      return;
    }

    const data = (await response.json().catch(() => ({}))) as { message?: string };

    if (!response.ok) {
      setStatus('error');
      setStatusMessage(data.message ?? 'Something went wrong. Please try again.');
      return;
    }

    form.reset();
    setStatus('success');
    setStatusMessage(data.message ?? 'Your demo email was sent.');
  }

  return (
    <PageLayout title="Contact" subtitle="Get in touch with us for any questions or inquiries">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr',
          },
          gap: 2,
          alignContent: 'start',
        }}
      >
        {CONTACTS.map((contact, index) => (
          <LinkCard
            key={index}
            label={contact.title}
            description={contact.description}
            icon={contact.icon}
            external_url={contact.href}
          />
        ))}
      </Box>

      <Stack component="form" onSubmit={handleSubmit} gap={2} maxWidth="720px">
        <Stack gap={0.5}>
          <Typography level="h3" color="primary">
            Send an email
          </Typography>
          <Typography level="body-md">
            Share a quick note with the WoT team. This demo form posts to a local API endpoint before it is sent.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 2,
          }}
        >
          <FormControl required>
            <FormLabel>Name</FormLabel>
            <Input name="name" autoComplete="name" placeholder="Your name" />
          </FormControl>

          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </FormControl>
        </Box>

        <FormControl required>
          <FormLabel>Subject</FormLabel>
          <Input name="subject" placeholder="How can we help?" />
        </FormControl>

        <FormControl required>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" minRows={5} placeholder="Tell us what you would like to discuss." />
          <FormHelperText>Demo submissions are handled by the site API endpoint.</FormHelperText>
        </FormControl>

        {statusMessage && (
          <Alert color={status === 'success' ? 'success' : 'danger'} variant="soft">
            {statusMessage}
          </Alert>
        )}

        <Button type="submit" loading={status === 'sending'} sx={{ alignSelf: 'flex-start' }}>
          Send demo email
        </Button>
      </Stack>

      <MastodonFeed />
    </PageLayout>
  );
}
