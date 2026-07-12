'use client';

import { LinkCard } from '@/app/_components/LinkCard';
import { PageLayout } from '@/app/_components/PageLayout';
import { PageSection } from '@/app/_components/PageSection';
import { WG_CARD_LINKS, TIMEZONES } from '@/lib/wgCardLinks';
import { Box, Link, Option, Select, Stack, Typography } from '@mui/joy';
import { Globe, Mail } from 'lucide-react';
import { useState } from 'react';

export default function WorkingGroupPage() {
  const [timezone, setTimezone] = useState('browser');

  return (
    <PageLayout
      title="Working Group"
      subtitle={
        <>
          The W3C WoT Working Group (WG) is tasked to create standards-track specifications and test suites. To ensure
          royalty-free Web standards, participants must be W3C and WoT WG Members and acknowledge the{' '}
          <Link href="https://www.w3.org/Consortium/Patent-Policy/">W3C Patent Policy.</Link>
        </>
      }
    >
      <PageSection title="Important Resources">
        <Typography sx={{ display: 'flex', alignItems: 'baseline', columnGap: 1, flexWrap: 'wrap' }}>
          <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
            Co-Chairs:
          </Box>{' '}
          <Link href="mailto:sebastian.kaebisch@siemens.com" startDecorator={<Mail size={15} />}>
            Sebastian Käbisch (Siemens AG)
          </Link>{' '}
          and{' '}
          <Link href="mailto:michaeljohnkoster@gmail.com" startDecorator={<Mail size={15} />}>
            Michael Koster
          </Link>
        </Typography>
        <Typography sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
            Team Contact:
          </Box>
          <Link href="https://www.w3.org/People#dsr" startDecorator={<Globe size={15} />}>
            Dave Raggett
          </Link>
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              sm: '1fr',
              md: '1fr 1fr',
            },
            mb: 4,
          }}
        >
          {WG_CARD_LINKS.map((link) => (
            <LinkCard key={link.label} size="lg" {...link} />
          ))}
        </Box>
      </PageSection>
      <PageSection title="Web Conference Meetings">
        <Meeting
      </PageSection>
    </PageLayout>
  );
}
