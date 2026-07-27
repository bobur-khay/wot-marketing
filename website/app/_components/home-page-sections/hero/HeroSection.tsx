import {
  ArrowRight,
  Building2,
  Code,
  Factory,
  FileBracesCorner,
  Globe2,
  House,
  PlugZap,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { ButtonGroup, Card, Chip, Stack, Typography } from '@mui/joy';
import { LinkButton } from '../../LinkButton';
import { SizeAdapter } from '../../SizeAdapter';
import { WotOrbit } from './WotOrbit';

export function HeroSection() {
  return (
    <SizeAdapter
      sx={{
        position: 'relative',
        py: { xs: 4, sm: 14 },
        px: { xs: 2, sm: 4 },
        background: {
          xs: 'radial-gradient(circle at 45% 10%, #063750 22%, #061b2c 75%)',
          sm: 'radial-gradient(circle at 85% 35%, #063750 42%, #061b2c 75%)',
        },
      }}
    >
      <Stack
        direction={{ xs: 'column-reverse', lg: 'row' }}
        px={{ xs: 1, sm: 2 }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ rowGap: 6 }}
      >
        <Stack width={{ xs: '100%', lg: '50%' }} gap={3} sx={{ alignSelf: { xs: 'flex-start', lg: 'center' } }}>
          <Typography level="title-sm" sx={{ color: '#8FD6DF' }}>
            AN OPEN STANDARD FOR AN INTEROPERABLE IOT
          </Typography>
          <Stack>
            <Typography level="h1" sx={{ color: 'white' }}>
              One web
            </Typography>
            <Typography level="h1" sx={{ color: '#77D2DE' }}>
              Every thing
            </Typography>
          </Stack>
          <Typography level="body-lg" sx={{ color: '#c7e0e7' }}>
            W3C Web of Things makes connected products discoverable, understandable, and usable across platforms,
            protocols, and industries.
          </Typography>
          <ButtonGroup
            sx={{ alignItems: { xs: 'stretch', sm: 'flex-start' }, flexDirection: { xs: 'column', sm: 'row' } }}
            spacing={2}
            size="lg"
            color="neutral"
          >
            <LinkButton path="/participate/working-group" variant="solid" endDecorator={<ArrowRight size={18} />}>
              Participate
            </LinkButton>
            <LinkButton
              path="/developers/documentation"
              variant="outlined"
              sx={{ whiteSpace: 'nowrap', color: 'white' }}
            >
              Discover how it works
            </LinkButton>
          </ButtonGroup>
        </Stack>
        <WotOrbit />
      </Stack>
    </SizeAdapter>
  );
}
