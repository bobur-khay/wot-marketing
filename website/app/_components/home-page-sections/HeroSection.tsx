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
import { LinkButton } from '../LinkButton';

export function HeroSection() {
  return (
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
          sx={{ alignItems: { xs: 'center', sm: 'flex-start' }, flexDirection: { xs: 'column', sm: 'row' } }}
          spacing={2}
          size="lg"
          color="neutral"
        >
          <LinkButton path="/participate/working-group" variant="solid" endDecorator={<ArrowRight size={18} />}>
            Participate
          </LinkButton>
          <LinkButton path="/developers/documentation" variant="outlined" sx={{ whiteSpace: 'nowrap', color: 'white' }}>
            Discover how it works
          </LinkButton>
        </ButtonGroup>
      </Stack>
      <WotOrbit />
    </Stack>
  );
}

function WotOrbit() {
  const innerOrbit = [
    { label: 'Thing Description', icon: <FileBracesCorner size={16} />, top: 0, left: 50 },
    {
      label: (
        <span>
          Binding <br /> Templates
        </span>
      ),
      icon: <PlugZap size={16} />,
    },
    { label: 'Security & Privacy', icon: <ShieldCheck size={16} /> },
    { label: 'Scripting API', icon: <Code size={16} /> },
  ];
  const outerOrbit = [
    { label: 'Home', icon: <House size={16} /> },
    { label: 'Cities', icon: <Building2 size={16} /> },
    { label: 'Energy', icon: <Zap size={16} /> },
    { label: 'Industry', icon: <Factory size={16} /> },
  ];
  const innerOrbitProgressionX = [50, 100, 50, 0];
  const innerOrbitProgressionY = [0, 50, 100, 50];

  const outerOrbitProgressionX = [85, 85, 12, 12];
  const outerOrbitProgressionY = [15, 85, 85, 15];

  return (
    <Stack alignItems="center" gap={3} sx={{ width: '40%' }}>
      <Chip
        size="sm"
        sx={{
          fontWeight: 800,
          letterSpacing: '1px',
          py: '5px',
          px: '10px',
          fontSize: '0.55rem',
          gap: '5px',
          color: '#06384c',
          background: '#91e1e3',
        }}
        startDecorator={<Globe2 size={12} />}
      >
        WEB OF THINGS
      </Chip>
      {/* Outer Orbit */}
      <Card
        sx={{
          padding: {
            xs: '60px',
            sm: '80px',
          },
          background: 'rgba(50 56 62 / 0.25)',
          borderRadius: '50%',
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid color(srgb 0.611765 0.882353 0.898039 / 0.33)',
          boxShadow: ' 0 0 80px #36b7c333',
        }}
      >
        {outerOrbit.map((node, index) => (
          <OrbitNode
            key={index}
            icon={node.icon}
            label={node.label}
            top={outerOrbitProgressionY[index]}
            left={outerOrbitProgressionX[index]}
          />
        ))}
        {/* Inner Orbit */}
        <Card
          sx={{
            background: '#0a61743d',
            borderRadius: '50%',
            border: '1px solid #82dce788',
            boxShadow: 'inset 0 0 45px #6edce51f,0 0 30px #00152144',
            display: 'grid',
            placeItems: 'center',
            padding: {
              xs: '110px',
              sm: '150px',
            },
            position: 'relative',
          }}
        >
          {innerOrbit.map((node, index) => (
            <OrbitNode
              key={index}
              icon={node.icon}
              label={node.label}
              top={innerOrbitProgressionY[index]}
              left={innerOrbitProgressionX[index]}
            />
          ))}
          <Card
            sx={{
              aspectRatio: '1/1',
              width: { xs: '90px', sm: '150px' },
              position: 'absolute',
              boxSizing: 'border-box',
              color: '#075271',
              textAlign: 'center',
              background: '#d9f5f4',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 5px 0px #003338',
              gap: 0.5,
            }}
          >
            <Typography level="title-md">Protocols</Typography>
            <Typography level="body-xs" sx={{ display: { xs: 'none', sm: 'block' } }}>
              HTTP · MQTT · CoAP · OPC UA · WebSocket · Modbus · BACnet
            </Typography>
          </Card>
        </Card>
      </Card>
    </Stack>
  );
}

function OrbitNode({
  icon,
  label,
  top,
  left,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
  top: number;
  left: number;
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        position: 'absolute',
        flexDirection: 'row',
        top: `${top}%`,
        left: `${left}%`,
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap',
        p: 1,
        color: 'rgb(156, 225, 229)',
        alignItems: 'center',
        gap: 0.7,
        background: 'color(srgb 0.123922 0.351373 0.42902)',
        border: '1px solid color(srgb 0.509804 0.862745 0.905882 / 0.58)',
      }}
    >
      {icon}
      <Typography level="title-xs" sx={{ color: 'white', textAlign: 'center', lineHeight: 1 }}>
        {label}
      </Typography>
    </Card>
  );
}
// <div className="visual">
//   <div className="domain-orbit" aria-label="Domains where Web of Things is applied">
//     <span className="layer-label wot-label">
//       <Globe2 /> Web of Things
//     </span>
//     <div className="visual-node node-industry">
//       <Factory />
//       Industry
//     </div>
//     <div className="visual-node node-home">
//       <Home />
//       Home
//     </div>
//     <div className="visual-node node-energy">
//       <Zap />
//       Energy
//     </div>
//     <div className="visual-node node-cities">
//       <Building2 />
//       Cities
//     </div>
//   </div>
//   <div className="wot-layer" aria-label="Web of Things building blocks">
//     <div className="capability capability-td">
//       <FileJson2 />
//       <b>
//         Thing
//         <br />
//         Description
//       </b>
//     </div>
//     <div className="capability capability-bindings">
//       <PlugZap />
//       <b>
//         Binding
//         <br />
//         Templates
//       </b>
//     </div>
//     <div className="capability capability-scripting">
//       <Code2 />
//       <b>
//         Scripting
//         <br />
//         API
//       </b>
//     </div>
//     <div className="capability capability-security">
//       <ShieldCheck />
//       <b>Security &amp; Privacy</b>
//     </div>
//   </div>
//   <div className="core">
//     <b>Protocols</b>
//     <small>HTTP · MQTT · CoAP · OPC UA · WebSocket · Modbus · BACnet</small>
//   </div>
// </div>
