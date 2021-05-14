import '../styles/globals.css';
import React from 'react';
import ThemeProvider from '../components/ThemeProvider';

const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          tint: '#74AAFF',
          main: '#2F80FF',
          shade: '#0B326F',
        },
        danger: {
          tint: '#E66977',
          main: '#D74451',
          shade: '#6F2229',
        },
      },
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider value={config}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
