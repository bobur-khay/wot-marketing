import ThemeRegistry from './_theme/ThemeRegistry';
import { Metadata } from 'next';
import './globals.css';
import { Navbar } from './_components/navigation/Navbar';
import Script from 'next/script';
import { Footer } from './_components/Footer';
import { Box, Stack } from '@mui/joy';

export const metadata: Metadata = {
  title: 'Web of Things',
  description: 'Official W3C Web of Things Website',
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* Mastodon integration */}
        <link rel="me" href="https://w3c.social/@wot" />
      </head>
      <body>
        <ThemeRegistry>
          <Stack minHeight="100vh">
            <Navbar />
            <Box component="main" flex={1}>
              {props.children}
            </Box>
            <Footer />
          </Stack>
        </ThemeRegistry>
        {/* Mastodon feed */}
        <Script type="module" src="https://esm.sh/emfed@1"></Script>
      </body>
    </html>
  );
}
