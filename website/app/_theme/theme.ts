import { extendTheme } from '@mui/joy';

export const theme = extendTheme({
  fontFamily: { body: 'Arial, Helvetica, sans-serif', display: 'Arial, Helvetica, sans-serif' },
  radius: { sm: '6px', md: '8px', lg: '12px' },
  typography: {
    'body-xs': {},
    'body-sm': {},
    'body-md': {},
    'body-lg': {},
    'title-sm': {},
    'title-md': {
      fontWeight: '600',
      lineHeight: '1.60',
    },
    'title-lg': {
      fontWeight: 'normal',
      lineHeight: '1.65',
    },
    h4: {},
    h3: {
      letterSpacing: '-.04em',
    },
    h2: {
      letterSpacing: '-.055em',
    },
    h1: {
      lineHeight: '.88',
      letterSpacing: '-.07em',
    },
  },
  fontSize: {
    xs: '',
    sm: '',
    md: 'clamp(1rem, 1vw, 2rem)',
    lg: 'clamp(1.5rem,2vw, 3em)',
    xl: '',
    xl2: 'clamp(2rem,4vw,4rem)',
    xl3: 'clamp(3rem,6vw,5.5rem)',
    xl4: 'clamp(4rem, 8vw, 7rem)',
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
