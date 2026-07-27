import { ArrowRight, Building2, Check, Factory, Home, Zap } from 'lucide-react';
import { PageSection } from '../PageSection';
import Card from '@mui/joy/Card/Card';
import { Chip, Stack, Typography } from '@mui/joy';

const things = [
  { name: 'Factory robot', protocol: 'OPC UA', icon: Factory },
  { name: 'Smart meter', protocol: 'CoAP', icon: Zap },
  { name: 'Building sensor', protocol: 'MQTT', icon: Building2 },
  { name: 'Home appliance', protocol: 'HTTP', icon: Home },
];

export function IntegrationSection() {
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
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            backgroundColor: 'white',
            p: 4,
          }}
        >
          <Stack direction="row" gap={2} alignItems="start">
            <Chip color="primary" sx={{ aspectRatio: '1 / 1' }}>
              01
            </Chip>
            <Stack gap={0.5}>
              <Typography color="primary" level="title-sm" sx={{ letterSpacing: '0.14rem' }}>
                EXISTING THINGS
              </Typography>
              <Typography level="title-md">Keep every protocol</Typography>
            </Stack>
          </Stack>
          <Stack gap={1}>
            {things.map(({ name, protocol, icon: Icon }) => (
              <Card
                key={name}
                sx={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  background: 'transparent',
                  p: 1,
                }}
              >
                <Stack direction="row" gap={2} alignItems="center">
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
        </Card>
        <ArrowRight color="rgba(var(--joy-palette-primary-mainChannel) / 1)" size={18} />
        <Card></Card>
        <ArrowRight color="rgba(var(--joy-palette-primary-mainChannel) / 1)" size={18} />
        <Card></Card>
      </Card>
    </PageSection>
    // <section className="shell section">
    //   <header>
    //     <label>THE MISSING APPLICATION LAYER</label>
    //     <h2>
    //
    //     </h2>
    //     <p>
    //       WoT describes what a connected thing can do in a common, machine-readable format without replacing the
    //       technologies underneath it.
    //     </p>
    //   </header>
    //   <div className="integration-flow">
    //     <div className="integration-things">
    //       <div className="flow-heading">
    //         <span>01</span>
    //         <div>
    //           <label>EXISTING THINGS</label>
    //           <h3>Keep every protocol</h3>
    //         </div>
    //       </div>
    //       <div className="thing-list">
    //         {things.map(({ name, protocol, icon: Icon }) => (
    //           <div className="thing" key={name}>
    //             <Icon />
    //             <span>
    //               <b>{name}</b>
    //               <small>{protocol}</small>
    //             </span>
    //             <Check className="thing-check" />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <ArrowRight className="flow-arrow" aria-hidden="true" />

    //     <div className="description-card">
    //       <div className="flow-heading">
    //         <span>02</span>
    //         <div>
    //           <label>WOT DESCRIPTION</label>
    //           <h3>Describe capabilities once</h3>
    //         </div>
    //       </div>
    //       <div className="td-preview">
    //         <div className="td-title">
    //           <Radio />
    //           <span>
    //             <b>SmartThermostat</b>
    //             <small>Thing Description</small>
    //           </span>
    //           <i>JSON-LD</i>
    //         </div>
    //         <code>
    //           <span>&quot;properties&quot;</span>: temperature
    //           <br />
    //           <span>&quot;actions&quot;</span>: setTarget
    //           <br />
    //           <span>&quot;events&quot;</span>: overheating
    //         </code>
    //       </div>
    //     </div>

    //     <ArrowRight className="flow-arrow" aria-hidden="true" />

    //     <div className="integration-result">
    //       <div className="flow-heading">
    //         <span>03</span>
    //         <div>
    //           <label>YOUR APPLICATION</label>
    //           <h3>Build against one model</h3>
    //         </div>
    //       </div>
    //       <div className="result-visual">
    //         <Layers3 />
    //         <strong>One application layer</strong>
    //         <p>Discover, read, write, and subscribe in the same way across every thing.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <p className="integration-note">
    //     <Check /> No rip-and-replace required <span /> WoT complements your existing devices, networks, and APIs.
    //   </p>
    // </section>
  );
}
