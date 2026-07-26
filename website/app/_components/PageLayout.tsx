import { Stack, Box, Typography } from '@mui/joy';
import { PropsWithChildren, ReactNode } from 'react';
import { NavBreadcrumbs } from './NavBreadcrumbs';
import { Route } from 'next';
import { SizeAdapter } from './SizeAdapter';

type PageLayoutProps =
  | {
      title: string;
      subtitle: ReactNode;
      banner?: ReactNode;
      breadcrumbs?: { startingPath: Route };
    }
  | {
      customHero: ReactNode;
    };

export function PageLayout({ children, ...props }: PropsWithChildren<PageLayoutProps>) {
  return (
    // Page container
    <Stack>
      {/* Header */}
      <SizeAdapter
        sx={{
          position: 'relative',
          py: { xs: 4, sm: 14 },
          px: { xs: 2, sm: 4 },
          background: {
            xs: 'radial-gradient(circle at 75% 70%, #08718e, #063750 42%, #061b2c 75%)',
            sm: 'radial-gradient(circle at 80% 50%, #08718e, #063750 42%, #061b2c 75%)',
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
        {'customHero' in props ? (
          props.customHero
        ) : (
          <Stack gap={1.5} sx={{ maxWidth: '900px' }}>
            {props.breadcrumbs && (
              <NavBreadcrumbs startingPath={props.breadcrumbs.startingPath} currentPageTitle={props.title} />
            )}
            <Stack gap={0.5}>
              <Typography level="h2" sx={{ color: 'white' }}>
                {props.title}
              </Typography>
              <Typography level="body-lg" sx={{ color: '#c7e0e7' }}>
                {props.subtitle}
              </Typography>
            </Stack>
            {props.banner && <Box mt={2}>{props.banner}</Box>}
          </Stack>
        )}
      </SizeAdapter>

      {/* Content */}
      <Stack alignItems="center" sx={{ width: '100%' }}>
        <Stack sx={{ width: '100%' }}>{children}</Stack>
      </Stack>
    </Stack>
  );
}
