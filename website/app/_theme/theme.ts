import { extendTheme } from '@mui/joy';

declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    'title-xs': true;
  }
}

export const theme = extendTheme({
  fontFamily: { body: 'Arial, Helvetica, sans-serif', display: 'Arial, Helvetica, sans-serif' },
  radius: { sm: '6px', md: '8px', lg: '18px' },
  typography: {
    'body-xs': {},
    'body-sm': {},
    'body-md': {},
    'body-lg': {
      lineHeight: '1.65',
    },
    'title-xs': {
      fontSize: 'var(--joy-fontSize-xs, 0.67rem)',
      fontWeight: '600',
    },
    'title-sm': {
      fontWeight: '700',
    },
    'title-md': {
      fontWeight: '600',
      lineHeight: '1.60',
    },
    'title-lg': {
      fontWeight: '600',
      lineHeight: '1.65',
    },
    h4: {},
    h3: {
      letterSpacing: '-.04em',
      lineHeight: '1.05',
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
    xs: '0.67rem',
    sm: '0.72rem',
    md: 'clamp(0.8rem, 1.5vw, 1rem)',
    lg: 'clamp(1rem,1.7vw,1.22rem)',
    xl2: 'clamp(2rem, 4vw, 4rem)',
    xl3: 'clamp(3rem, 6vw, 5.5rem)',
    xl4: 'clamp(4rem, 8vw, 7rem)',
  },
  colorSchemes: {
    light: {
      palette: {
        neutral: {
          solidBg: 'white',
          solidColor: '#07324a',
          solidHoverBg: 'rgb(220,220,220)',
          outlinedHoverBg: 'rgba(255,255,255,0.1)',
          outlinedBorder: '#dbe7e9',
          '800': '#071D2B',
        },
        primary: {
          500: '#005A9C',
          solidHoverBg: '#004578',
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: '#061B2C',
          surface: '#052A3E',
          level1: '#07354D',
        },
        neutral: {
          solidBg: 'black',
          solidColor: 'blue',
          solidHoverBg: 'lightblue',
          outlinedHoverBg: 'rgba(255,255,255,0.1)',
          outlinedBorder: '#ffffff2b',
        },
        primary: {
          400: 'rgb(158, 207, 255)',
          solidHoverBg: '#004578',
          softBg: '#1E485E',
          softColor: 'RGBA(164, 208, 255)',
        },
      },
    },
  },
});
