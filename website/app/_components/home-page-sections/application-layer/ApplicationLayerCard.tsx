import { Card, Stack, Chip, Typography } from '@mui/joy';

export function ApplicationLayerCard({
  number,
  title,
  subtitle,
  children,
  backgroundColor = 'white',
}: {
  number: string;
  title: string;
  subtitle: string;
  backgroundColor?: string;
  children: React.ReactNode;
}) {
  return (
    <Card
      sx={{
        backgroundColor,
        p: 3,
        borderRadius: '12px',
      }}
      variant="soft"
    >
      <Stack direction="row" gap={2} alignItems="start">
        <Chip color="primary" sx={{ aspectRatio: '1 / 1' }}>
          {number}
        </Chip>
        <Stack gap={0.5}>
          <Typography color="primary" level="title-sm" sx={{ letterSpacing: '0.14rem' }}>
            {title}
          </Typography>
          <Typography level="title-md">{subtitle}</Typography>
        </Stack>
      </Stack>
      {children}
    </Card>
  );
}
