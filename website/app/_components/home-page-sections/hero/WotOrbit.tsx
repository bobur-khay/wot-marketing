import { Stack, Chip, Card, Typography } from '@mui/joy';
import { FileBracesCorner, PlugZap, Code, ShieldCheck, House, Building2, Zap, Factory, Globe2 } from 'lucide-react';
import { OrbitNode } from './OrbitNode';

export function WotOrbit() {
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
    { label: 'Scripting API', icon: <Code size={16} /> },
    {
      label: (
        <span>
          Security &<br /> Privacy
        </span>
      ),
      icon: <ShieldCheck size={16} />,
    },
  ];
  const outerOrbit = [
    { label: 'Home', icon: <House size={16} /> },
    { label: 'Cities', icon: <Building2 size={16} /> },
    { label: 'Energy', icon: <Zap size={16} /> },
    { label: 'Industry', icon: <Factory size={16} /> },
  ];
  const innerOrbitProgressionX = [50, 100, 50, 0];
  const innerOrbitProgressionY = [0, 50, 100, 50];

  const outerOrbitProgressionX = [90, 90, 10, 10];
  const outerOrbitProgressionY = [12, 88, 88, 12];

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
          zIndex: 1,
        }}
        startDecorator={<Globe2 size={12} />}
      >
        WEB OF THINGS
      </Chip>
      {/* Blurred Background */}
      <Card
        sx={{
          background: 'radial-gradient(circle at 50% 20%, #00c8ff 0%, #0B6C85 100%)',
          boxShadow: '0 -20px 500px 100px #0B6C85',
          borderRadius: '50%',
          p: 0,
        }}
      >
        {/* Outer Orbit */}
        <Card
          sx={{
            padding: {
              xs: '60px',
              sm: '60px',
            },
            background: '#0002036e',
            borderRadius: '50%',
            position: 'relative',
            display: 'grid',
            placeItems: 'center',
            border: '0.1px solid #9ce1e510',
            backdropFilter: 'blur(2px)',
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
              background: '#00d1ff17',
              borderRadius: '50%',
              border: '1px solid #82dce788',
              boxShadow: 'inset 0 0 45px #6edce51f,0 0 30px #00152144',
              display: 'grid',
              placeItems: 'center',
              padding: {
                xs: '95px',
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
                width: { xs: '70px', sm: '150px' },
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
                boxShadow: { xs: 'inset 0 0 3px 0 #003338', sm: 'inset 0 0 5px 0px #003338' },
                gap: 0.5,
              }}
            >
              <Typography level="title-md"> Protocols</Typography>
              <Typography level="body-xs" sx={{ display: { xs: 'none', sm: 'block' } }}>
                HTTP · MQTT · CoAP · OPC UA · WebSocket · Modbus · BACnet
              </Typography>
            </Card>
          </Card>
        </Card>
      </Card>
    </Stack>
  );
}
