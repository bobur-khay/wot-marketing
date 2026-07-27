import { Card, Typography } from '@mui/joy';

export function OrbitNode({
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
        p: { xs: 0.7, sm: 1 },
        color: 'rgb(156, 225, 229)',
        alignItems: 'center',
        gap: { xs: 0.5, sm: 0.7 },
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
