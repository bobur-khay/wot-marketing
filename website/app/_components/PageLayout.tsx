import { Stack, Box, Typography } from '@mui/joy';
import { PropsWithChildren, ReactNode } from 'react';
import { NavBreadcrumbs } from './NavBreadcrumbs';
import { Route } from 'next';
import { SizeAdapter } from './SizeAdapter';

export function PageLayout({
  title,
  banner,
  subtitle,
  breadcrumbs,
  children,
}: PropsWithChildren<{
  title: string;
  subtitle: ReactNode;
  banner?: ReactNode;
  breadcrumbs?: { startingPath: Route };
}>) {
  return (
    // Page container
    <Stack>
      {/* Header */}
      <SizeAdapter
        sx={{
          position: 'relative',
          py: { xs: 8, sm: 14 },
          px: { xs: 2, sm: 4 },
          background: {
            xs: 'radial-gradient(circle at 75% 70%, #08718e, #063750 42%, #061b2c 75%)',
            sm: 'radial-gradient(circle at 85% 40%, #08718e, #063750 42%, #061b2c 75%)',
          },
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(#ffffff0c 1px, transparent 1px), linear-gradient(90deg, #ffffff0c 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'linear-gradient(90deg, transparent, #000)',
          }}
        />
        <Stack gap={1.5} sx={{ maxWidth: '900px' }}>
          {breadcrumbs && <NavBreadcrumbs startingPath={breadcrumbs.startingPath} currentPageTitle={title} />}
          <Stack gap={0.5}>
            <Typography level="h2" sx={{ color: 'white' }}>
              {title}
            </Typography>
            <Typography level="body-lg" sx={{ color: '#c7e0e7' }}>
              {subtitle}
            </Typography>
          </Stack>
          {banner && <Box mt={2}>{banner}</Box>}
        </Stack>
      </SizeAdapter>

      {/* Content */}
      <Stack alignItems="center" sx={{ width: '100%' }}>
        <Stack sx={{ width: '100%' }}>{children}</Stack>
      </Stack>
    </Stack>
  );
}
