import { Stack, Box, Typography } from '@mui/joy';
import { PropsWithChildren, ReactNode } from 'react';
import { NavBreadcrumbs } from './NavBreadcrumbs';
import { Route } from 'next';
import { SxProps } from '@mui/joy/styles/types/theme';
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
    <Stack pb={16}>
      {/* Header */}
      <SizeAdapter
        sx={{
          position: 'relative',
          py: { xs: 8, sm: 14 },
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
            <Typography level="title-lg" sx={{ color: '#c7e0e7' }}>
              {subtitle}
            </Typography>
          </Stack>
          {banner && <Box mt={2}>{banner}</Box>}
        </Stack>
      </SizeAdapter>

      {/* Content */}
      <SizeAdapter sx={{ pt: { xs: 5, sm: 10 } }}>{children}</SizeAdapter>
    </Stack>
  );
}

/**
 * A component that centers its children and limits the width to 1200px
 */
function SizeAdapter({ children, sx }: PropsWithChildren<{ sx?: SxProps }>) {
  return (
    <Stack alignItems="center" sx={{ width: '100%', px: 2, ...sx }}>
      <Stack sx={{ maxWidth: '1200px', width: '100%', gap: 12 }}>{children}</Stack>
    </Stack>
  );
}

/**
 * <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-shell">
          {breadcrumbs && <NavBreadcrumbs startingPath={breadcrumbs.startingPath} currentPageTitle={title} />}
          <div className="page-kicker">W3C WEB OF THINGS</div>
          <h1>{title}</h1>
          <div className="page-subtitle">{subtitle}</div>
          {banner && <Box className="page-banner">{banner}</Box>}
        </div>
      </section>
      <Stack component="div" className="page-shell page-content" gap={{ xs: 8, md: 12 }}>
        {children}
      </Stack>
    </div>
 */
