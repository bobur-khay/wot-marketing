import { ButtonGroup, Button } from '@mui/joy';
import Link from 'next/link';
import { NavbarElement, NavbarSubpages } from './Navbar';
import { ChevronDown } from 'lucide-react';

export function DesktopNavigation({
  pages,
  currentPage,
  activeSubnavigation,
  setActiveSubnavigation,
  isSubnavigationOpen,
  setIsSubnavigationOpen,
}: {
  pages: NavbarElement[];
  currentPage: string;
  activeSubnavigation: NavbarSubpages | null;
  setActiveSubnavigation: (subnavigation: NavbarSubpages | null) => void;
  isSubnavigationOpen: boolean;
  setIsSubnavigationOpen: (isOpen: boolean) => void;
}) {
  const toggleSubnavigation = (subnavigation: NavbarSubpages) => {
    if (subnavigation.label === activeSubnavigation?.label && isSubnavigationOpen) {
      setIsSubnavigationOpen(false);
    } else {
      setActiveSubnavigation(subnavigation);
      setIsSubnavigationOpen(true);
    }
  };

  return (
    <>
      <ButtonGroup variant="plain" spacing={0.1} size="lg">
        {pages.map((page) =>
          'subpages' in page ? (
            <Button
              key={page.label}
              color={currentPage === page.label ? 'primary' : 'neutral'}
              endDecorator={
                <ChevronDown
                  size={16}
                  style={{
                    transform: isSubnavigationOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.15s ease-out',
                  }}
                />
              }
              onClick={() => {
                toggleSubnavigation(page);
              }}
            >
              {page.label}
            </Button>
          ) : (
            <Button
              key={page.label}
              component={Link}
              href={page.href}
              color={currentPage === page.href ? 'primary' : 'neutral'}
              onClick={() => setIsSubnavigationOpen(false)}
            >
              {page.label}
            </Button>
          )
        )}
      </ButtonGroup>
    </>
  );
}
