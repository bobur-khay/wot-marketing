import { ArrowRight, Building2, Check, Factory, Home, Layers3, Radio, Zap } from 'lucide-react';
import { PageSection } from '../../PageSection';
import Card from '@mui/joy/Card/Card';
import { Divider, Stack, Typography } from '@mui/joy';
import { ApplicationLayerCard } from './ApplicationLayerCard';

const things = [
  { name: 'Factory robot', protocol: 'OPC UA', icon: Factory },
  { name: 'Smart meter', protocol: 'CoAP', icon: Zap },
  { name: 'Building sensor', protocol: 'MQTT', icon: Building2 },
  { name: 'Home appliance', protocol: 'HTTP', icon: Home },
];

export function ApplicationLayerSection() {
  return (
    <PageSection
      label="THE MISSING APPLICATION LAYER"
      title={
        <>
          Stop rebuilding integrations.
          <br />
          Start composing experiences.
        </>
      }
      subtitle="WoT describes what a connected thing can do in a common, machine-readable format without replacing the technologies underneath it."
    >
      <Card
        variant="outlined"
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            md: 'minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr)',
          },
          alignItems: 'stretch',
          borderRadius: '18px',
          backgroundColor: 'background.level1',
          p: '10px',
        }}
      >
        <ApplicationLayerCard number="01" title="EXISTING THINGS" subtitle="Keep every protocol">
          <Stack gap={1}>
            {things.map(({ name, protocol, icon: Icon }) => (
              <Card
                key={name}
                sx={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  background: 'transparent',
                  px: 1.5,
                  py: 1,
                }}
              >
                <Stack direction="row" gap={1.5} alignItems="center">
                  <Icon size={18} color="rgba(var(--joy-palette-primary-mainChannel) / 1)" />
                  <Stack gap={0.5}>
                    <Typography level="title-sm">{name}</Typography>
                    <Typography level="body-xs">{protocol}</Typography>
                  </Stack>
                </Stack>
                <Check size={16} color="rgba(var(--joy-palette-primary-mainChannel) / 1)" />
              </Card>
            ))}
          </Stack>
        </ApplicationLayerCard>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ '& > svg': { transform: { xs: 'rotate(90deg)', md: 'none' } } }}
        >
          <ArrowRight color="rgba(var(--joy-palette-primary-mainChannel) / 1)" size={18} />
        </Stack>
        <ApplicationLayerCard
          number="02"
          title="WOT DESCRIPTION"
          subtitle="Describe capabilities once"
          colorScheme="dark"
        >
          <Card sx={{ p: 0, backgroundColor: 'background.surface' }}>
            <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between" sx={{ p: 1.5, pb: 0.5 }}>
              <Stack direction="row" gap={1.5} alignItems="center">
                <Radio size={18} color="rgba(var(--joy-palette-primary-mainChannel) / 1)" />
                <Stack gap={0.2}>
                  <Typography level="title-sm">SmartThermostat</Typography>
                  <Typography level="body-xs">Thing Description</Typography>
                </Stack>
              </Stack>
              <Typography level="title-xs" color="primary" sx={{ fontSize: '0.55rem' }}>
                JSON-LD
              </Typography>
            </Stack>
            <Divider />
            <Typography level="body-sm" sx={{ p: 1.5, pt: 0.5, fontFamily: 'monospace', color: 'white' }}>
              {'{'}
              <br />
              <span style={{ marginLeft: '0.5rem', color: 'rgba(var(--joy-palette-primary-mainChannel) / 1)' }}>
                &quot;properties&quot;
              </span>
              : temperature
              <br />
              <span style={{ marginLeft: '0.5rem', color: 'rgba(var(--joy-palette-primary-mainChannel) / 1)' }}>
                &quot;actions&quot;
              </span>
              : setTarget
              <br />
              <span style={{ marginLeft: '0.5rem', color: 'rgba(var(--joy-palette-primary-mainChannel) / 1)' }}>
                &quot;events&quot;
              </span>
              : overheating
              <br />
              {'}'}
            </Typography>
          </Card>
        </ApplicationLayerCard>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ '& > svg': { transform: { xs: 'rotate(90deg)', md: 'none' } } }}
        >
          <ArrowRight color="rgba(var(--joy-palette-primary-mainChannel) / 1)" size={18} />
        </Stack>
        <ApplicationLayerCard number="03" title="YOUR APPLICATION" subtitle="Build against one model">
          <Card sx={{ display: 'grid', placeItems: 'center', height: '100%' }}>
            <Stack alignItems="center" gap={1} sx={{ p: 2 }}>
              <Layers3 size={48} color="rgba(var(--joy-palette-primary-mainChannel) / 1)" />
              <Typography level="title-sm" sx={{ textAlign: 'center' }}>
                One application layer
              </Typography>
              <Typography level="body-sm" sx={{ textAlign: 'center' }}>
                Discover, read, write, and subscribe in the same way across every thing
              </Typography>
            </Stack>
          </Card>
        </ApplicationLayerCard>
      </Card>
    </PageSection>
  );
}
