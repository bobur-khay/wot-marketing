'use client';

import { Button } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export function LinkButton({ children, href, sx }: PropsWithChildren<{ href?: string | null; sx?: SxProps }>) {
  return (
    <Button
      variant="outlined"
      color="neutral"
      component={Link}
      href={href || ''}
      sx={{
        pointerEvents: href ? 'auto' : 'none',
        height: '100%',
        whiteSpace: 'normal',
        textAlign: 'center',
        minHeight: '54px',
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
