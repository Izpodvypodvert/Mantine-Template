import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'my-green',
  primaryShade: 9,
  colors: {
    'my-green': [
      '#f0faf3',
      '#e0f3e6',
      '#bae5ca',
      '#93d8aa',
      '#72cd90',
      '#5ec580',
      '#52c277',
      '#43ab65',
      '#389859',
      '#2a844a',
    ],
    'main-bg-dark': [
      '#645b85',
      '#5a5078',
      '#50456b',
      '#463b5e',
      '#3c3161',
      '#352d51', // Исходный цвет №5
      '#2f2848',
      '#29223f',
      '#231c36',
      '#1d162d',
    ],
  },
});
