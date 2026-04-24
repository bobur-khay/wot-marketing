import { Divider, List, MenuItem, MenuList, Stack, Typography } from '@mui/joy';
import { NavbarSubpages } from './Navbar';
import { useState } from 'react';
import Link from 'next/link';

export function DesktopSubnavigation({
  subnavigation,
  isOpen,
  setOpen,
}: {
  subnavigation: NavbarSubpages | null;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [activeSubpageDescription, setActiveSubpageDescription] = useState<string | null>(null);
  return (
    <MenuList
      size="lg"
      sx={{
        position: 'absolute',
        width: '90%',
        maxWidth: '1000px',
        left: '50%',
        transform: isOpen ? 'translate(-50%)' : 'translate(-50%, -100%)',
        opacity: isOpen ? 1 : 0,
        zIndex: -50,
        borderTop: 'none',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
        paddingTop: '80px',
        boxShadow: 'lg',
      }}
    >
      <Stack direction="row" justifyContent="space-between" gap={4} p={2}>
        <List>
          {subnavigation?.subpages.map((subpage) => (
            <MenuItem
              key={subpage.label}
              sx={{ fontWeight: 600 }}
              onMouseOver={() => {
                setActiveSubpageDescription(subpage.description);
              }}
              onMouseLeave={() => {
                setActiveSubpageDescription(null);
              }}
              onClick={() => {
                setOpen(false);
              }}
              component={Link}
              href={subpage.href}
            >
              {subpage.label}
            </MenuItem>
          ))}
        </List>
        <Divider orientation="vertical" />
        <Typography sx={{ width: '50%' }}>{activeSubpageDescription ?? subnavigation?.description}</Typography>
      </Stack>
    </MenuList>
  );
}
