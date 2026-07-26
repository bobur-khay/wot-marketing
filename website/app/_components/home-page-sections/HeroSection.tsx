import {
  ArrowRight,
  Building2,
  Code2,
  Factory,
  FileJson2,
  Globe2,
  Home,
  PlugZap,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Box, ButtonGroup, Chip, Stack, Typography } from '@mui/joy';
import { LinkButton } from '../LinkButton';

export function HeroSection() {
  return (
    <Stack direction="row" gap={4} p={2} justifyContent="space-between" alignItems="center" sx={{ flexWrap: 'wrap' }}>
      <Stack width="50%" gap={3}>
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
        <ButtonGroup sx={{ alignItems: 'center' }} spacing={2} size="lg" color="neutral">
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
  return (
    <Stack>
      <Chip size="sm" startDecorator={<Globe2 size={14} />}>
        WEB OF THINGS
      </Chip>
    </Stack>
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
