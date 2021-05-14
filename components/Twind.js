import { create } from 'twind';

const useTw = () => {
  const { tw } = create({
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
  });
  return tw;
};

export default useTw;
