import { Divider, Stack, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

export function HomePageSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <Stack>
      <Typography level="h3" color="primary">
        {title}
      </Typography>
      <Divider color="primary" sx={{ mt: 1, mb: 2 }} />

      {children}
    </Stack>
  );
}
