import { extendTheme } from '@mui/joy';

export const theme = extendTheme({
  fontFamily: { body: 'Arial, Helvetica, sans-serif', display: 'Arial, Helvetica, sans-serif' },
  radius: { sm: '6px', md: '8px', lg: '12px' },
  typography: {
    'title-lg': {
      fontWeight: 'normal',
      lineHeight: '1.65',
    },
    h1: {
      letterSpacing: '-.07em',
    },
    h2: {
      letterSpacing: '-.055em',
    },
  },
  fontSize: {
    lg: 'clamp(1rem,1.7vw,1.22rem)',
    xl4: 'clamp(4rem, 8vw, 7rem)',
    xl3: 'clamp(3rem,6vw,5.5rem)',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          mainChannel: '0 90 156',
          plainColor: '#005A9C',
          solidBg: '#005A9C',
          solidHoverBg: '#004578',
        },
      },
    },
  },
});
