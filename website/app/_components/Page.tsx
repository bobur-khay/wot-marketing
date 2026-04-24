import { Stack, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

export function Page({ title, subtitle, children }: PropsWithChildren<{ title: string; subtitle: string }>) {
  return (
    <Stack alignItems="center" p={4}>
      <Stack sx={{ gap: 2, maxWidth: '1200px', width: '100%' }}>
        <Typography level="h2">{title}</Typography>
        <Typography level="title-md" mb={4}>
          {subtitle}
        </Typography>
        <Stack gap={8}>{children}</Stack>
      </Stack>
    </Stack>
  );
}
