// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        /* 	bg: '#161A2B', */
        bg: '#16182D',
        color: '#000000',
      },
      button: {
        cursor: 'pointer',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  colors: {
    accent: {
      blue: {
        100: 'rgba(33, 42, 62, 0.3)',
        200: '#16182D',
        300: '#212A3E',
        400: '#3C486B',
      },
      white: {
        800: '#D9D9D9',
        900: '#F1F6F9',
        1000: '#FFFFFF'
      },
      red: '#FF4D4D',
      black: '#000000',
      yellow: '#F4B700',
      green: '#BEF493',
      orange: '#F2A97F',
    },
  },
});
