import { Stack } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import { PropsWithChildren } from 'react';

/**
 * A component that centers its children and limits the width to 1200px
 */
export function SizeAdapter({ children, sx }: PropsWithChildren<{ sx?: SxProps }>) {
  return (
    <Stack alignItems="center" sx={{ width: '100%', ...sx }}>
      <Stack sx={{ maxWidth: '1200px', width: '100%', gap: 12 }}>{children}</Stack>
    </Stack>
  );
}
