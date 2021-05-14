import React from 'react';
import { style } from 'twind/style';
import useTw from './Twind';

const Button = ({ variant = 'primary', children }) => {
  const tw = useTw();
  const button = style({
    // base
    base: `h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 rounded-lg  block my-5`,
    variants: {
      variant: {
        brand: `bg-brand-main hover:bg-brand-tint`,
        danger: `bg-danger-main hover:bg-danger-tint`,
        purple: `bg-purple-500 hover:bg-purple-600`,
        green: `bg-green-500 hover:bg-green-600`,
      },
    },
  });
  return (
    <button className={tw(button({ variant }))}>{children || 'Button'}</button>
  );
};

export default Button;
