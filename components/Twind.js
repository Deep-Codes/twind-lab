import { tw, setup } from 'twind';

setup({
  theme: {
    extend: {
      colors: {
        brand: {
          tint: '#74AAFF',
          main: '#2F80FF',
          shade: '#0B326F',
        },
      },
    },
  },
});

export default tw;
