import { Stack, Typography } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import { PropsWithChildren, ReactNode } from 'react';
import { SizeAdapter } from './SizeAdapter';

export function PageSection({
  label,
  title,
  subtitle,
  children,
  backgroundColor = 'white',
  sx,
  id,
}: PropsWithChildren<{
  label?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  sx?: SxProps;
  id?: string;
  backgroundColor?: 'white' | 'gray';
}>) {
  const backgroundColorMap = {
    white: 'white',
    gray: '#f0f5f6',
  };
  return (
    <SizeAdapter sx={{ py: 12, px: { xs: 2, sm: 4 }, backgroundColor: backgroundColorMap[backgroundColor], ...sx }}>
      <Stack>
        <Stack pb={6} gap={2} sx={{ maxWidth: '850px' }}>
          {label && (
            <Typography
              level="title-sm"
              color="primary"
              sx={{ letterSpacing: '0.14rem', textTransform: 'uppercase', fontWeight: 800 }}
            >
              {label}
            </Typography>
          )}
          <Typography level="h3" id={id}>
            {title}
          </Typography>
          {subtitle && (
            <Typography level="body-lg" textColor="neutral.600">
              {subtitle}
            </Typography>
          )}
        </Stack>

        {children}
      </Stack>
    </SizeAdapter>
  );
}
