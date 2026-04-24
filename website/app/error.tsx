'use client';

import { Page } from './_components/Page';
import Link from 'next/link';
import { Button } from '@mui/joy';

export default function Error() {
  return (
    <Page title="Error" subtitle="Something went wrong while loading the page. Please try again later.">
      <Link href="/">
        <Button variant="soft" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </Link>
    </Page>
  );
}
