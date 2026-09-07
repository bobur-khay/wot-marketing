import { Card, Stack, Chip, Typography } from '@mui/joy';

export function ApplicationLayerCard({
  number,
  title,
  subtitle,
  children,
  colorScheme,
}: {
  number: string;
  title: string;
  subtitle: string;
  colorScheme?: 'light' | 'dark';
  children: React.ReactNode;
}) {
  return (
    <Card
      data-joy-color-scheme={colorScheme}
      sx={{
        p: 3,
        borderRadius: '12px',
        backgroundColor: colorScheme === 'dark' ? 'background.level1' : 'background.body',
        gap: 2,
      }}
      variant="soft"
    >
      <Stack direction="row" gap={2} alignItems="center">
        <Chip color="primary" sx={{ aspectRatio: '1 / 1', fontFamily: 'monospace', fontWeight: 'bold' }}>
          {number}
        </Chip>
        <Stack gap={0.2}>
          <Typography color="primary" level="title-sm" sx={{ letterSpacing: '0.14rem', fontWeight: 800 }}>
            {title}
          </Typography>
          <Typography level="title-md">{subtitle}</Typography>
        </Stack>
      </Stack>
      {children}
    </Card>
  );
}
