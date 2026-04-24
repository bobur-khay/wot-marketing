'use client';

import { ButtonGroup, Button } from '@mui/joy';
import { HandHeart, UserCheck2 } from 'lucide-react';
import Link from 'next/link';

export function JoinButtons() {
  return (
    <ButtonGroup size="lg" spacing={1.5}>
      <Button endDecorator={<UserCheck2 />} color="primary" variant="solid">
        <Link href="/participate">Participate in W3C WoT</Link>
      </Button>
      <Button endDecorator={<HandHeart />} component={Link} href="https://www.w3.org/support-us/">
        Support Us
      </Button>
    </ButtonGroup>
  );
}
