'use client';

import { Box, Card, Stack, Typography } from '@mui/joy';
import wotLogo from '@/public/wot-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { DesktopNavbar } from './DesktopNavbar';
import { DesktopSubnavigation } from './DesktopSubnavigation';
import { MobileNavbar } from './MobileNavbar';
import { useState, useRef, useEffect } from 'react';
import { TabletNavbar } from './TabletNavbar';
import { Route } from 'next';
import { useTypedPathname } from '@/lib/utils/path';

export type NavbarPage = {
  label: string;
  path: Route;
};

export type NavbarSubpages = {
  label: string;
  description: string;
  subpages: {
    label: string;
    path: Route;
    description: string;
  }[];
};

export type NavbarElement = NavbarPage | NavbarSubpages;

export function Navbar() {
  const pathName = useTypedPathname();
  const [isSubnavigationOpen, setIsSubnavigationOpen] = useState(false);
  const [activeSubnavigation, setActiveSubnavigation] = useState<NavbarSubpages | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsSubnavigationOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box
      ref={navRef}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Desktop subnavigation - hidden below lg */}
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <DesktopSubnavigation
          subnavigation={activeSubnavigation}
          isOpen={isSubnavigationOpen}
          setOpen={setIsSubnavigationOpen}
          pathName={pathName}
        />
      </Box>
      <Card
        variant="plain"
        sx={{
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: isSubnavigationOpen ? 'none' : '0 8px 30px rgba(7, 29, 43, .08)',
          borderRadius: 0,
          borderBottom: '1px solid #dbe7ea',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          px: { xs: 2, sm: 4, xl: 12 },
          py: 1.25,
          position: 'relative',
          zIndex: 10, // Ensures the Card stays above the subnavigation
          minHeight: '67.5px',
          transition: 'box-shadow 0.3s ease-out',
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ width: '100%' }}>
          <Link
            href="/"
            style={{ minWidth: '250px', textDecoration: 'none' }}
            onClick={() => setIsSubnavigationOpen(false)}
          >
            <Stack direction="row" alignItems="baseline" gap={{ xs: 1, xl: 2 }}>
              <Image src={wotLogo} width={80} style={{ alignSelf: 'center' }} alt="W3C WoT Logo" />
              <Typography
                level="h3"
                color="primary"
                sx={{
                  display: { xs: 'none', sm: 'block', whiteSpace: 'nowrap' },
                  fontSize: { xs: '1.25rem', xl: '1.5rem' },
                }}
              >
                Web of Things
              </Typography>
            </Stack>
          </Link>

          {/* Desktop navigation - hidden below lg */}
          <Box sx={{ display: { xs: 'none', lg: 'contents' } }}>
            <DesktopNavbar
              pathName={pathName}
              setActiveSubnavigation={setActiveSubnavigation}
              activeSubnavigation={activeSubnavigation}
              isSubnavigationOpen={isSubnavigationOpen}
              setIsSubnavigationOpen={setIsSubnavigationOpen}
            />
          </Box>

          {/* Tablet navigation - visible only at sm and md */}
          <Box sx={{ display: { xs: 'none', sm: 'flex', lg: 'none' } }}>
            <TabletNavbar currentPage={pathName} />
          </Box>

          {/* Mobile navigation - visible only at xs */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <MobileNavbar currentPage={pathName} />
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}
