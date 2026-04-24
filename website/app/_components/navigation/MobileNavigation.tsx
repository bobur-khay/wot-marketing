import { Button, Drawer, IconButton, Stack, Typography } from '@mui/joy';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NavbarElement } from './Navbar';

export function MobileNavigation({ pages, currentPage }: { pages: NavbarElement[]; currentPage: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton aria-label="Menu" variant="plain" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right" size="md">
        <Stack justifyContent="space-between" height="100%" p={4}>
          <Stack gap={4}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography level="h3">Navigation</Typography>
              <IconButton onClick={() => setOpen(false)}>
                <X />
              </IconButton>
            </Stack>
            <Stack gap={0.5}>
              {pages.map((page) =>
                'subpages' in page ? (
                  <div key={page.label}>test</div>
                ) : (
                  <Link href={page.href} key={page.href} style={{ width: '100%' }}>
                    <Button
                      variant={currentPage === page.href ? 'soft' : 'plain'}
                      size="lg"
                      color="neutral"
                      fullWidth
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      {page.label}
                    </Button>
                  </Link>
                )
              )}
            </Stack>
          </Stack>
          <Link href="https://www.w3.org/">
            <Image src="https://www.w3.org/assets/logos/w3c-2025/svg/w3c.svg" alt="W3C Logo" width={36} height={36} />
          </Link>
        </Stack>
      </Drawer>
    </>
  );
}
