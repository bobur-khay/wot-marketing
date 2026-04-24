'use client';

import { Box, Card, Stack, Typography } from '@mui/joy';
import wotLogo from '@/public/logo-mini-blue.svg';
import Image from 'next/image';
import Link from 'next/link';
import { DesktopNavigation } from './DesktopNavigation';
import { DesktopSubnavigation } from './DesktopSubnavigation';
import { MobileNavigation } from './MobileNavigation';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

type NavbarPage = {
  label: string;
  href: string;
};

export type NavbarSubpages = {
  label: string;
  description: string;
  subpages: {
    label: string;
    href: string;
    description: string;
  }[];
};

export type NavbarElement = NavbarPage | NavbarSubpages;

export function Navbar() {
  const currentPage = usePathname();
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

  const pages: NavbarElement[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Developers',
      description: 'Discover useful resources for developers building WoT applications',
      subpages: [
        {
          label: 'Tools',
          description: 'List of applications, libraries, services and more for WoT development',
          href: '/developers/tools',
        },
        {
          label: 'Documentation',
          description: 'Tutorials, specifications, standardizations and other documentation for WoT',
          href: '/developers/documentation',
        },
      ],
    },
    {
      label: 'Videos',
      href: '/videos',
    },
    {
      label: 'Participate',
      href: '/participate',
    },
    {
      label: 'About',
      href: '/about',
    },
  ];

  return (
    <Box
      ref={navRef}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        mb: 2,
      }}
    >
      <DesktopSubnavigation
        subnavigation={activeSubnavigation}
        isOpen={isSubnavigationOpen}
        setOpen={setIsSubnavigationOpen}
      />
      <Card
        variant="plain"
        sx={{
          display: 'flex',
          alignItems: 'center',
          boxShadow: 'sm',
          px: 2,
          py: 1,
          position: 'relative',
          zIndex: 10, // Ensures the Card stays above the subnavigation
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          sx={{ width: '100%', maxWidth: '1800px' }}
        >
          <Link href="/" style={{ minWidth: '250px' }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Image src={wotLogo} width={80} alt="W3C WoT Logo" />
              <Typography level="h3" color="primary">
                Web of Things
              </Typography>
            </Stack>
          </Link>
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <DesktopNavigation
              pages={pages}
              currentPage={currentPage}
              setActiveSubnavigation={setActiveSubnavigation}
              activeSubnavigation={activeSubnavigation}
              isSubnavigationOpen={isSubnavigationOpen}
              setIsSubnavigationOpen={setIsSubnavigationOpen}
            />
          </Box>
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <MobileNavigation pages={pages} currentPage={currentPage} />
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Link
              href="https://www.w3.org/"
              style={{ transform: 'translateY(9px)', width: '250px', display: 'flex', justifyContent: 'flex-end' }}
            >
              <Image src="https://www.w3.org/assets/logos/w3c-2025/svg/w3c.svg" alt="W3C Logo" width={36} height={36} />
            </Link>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}
