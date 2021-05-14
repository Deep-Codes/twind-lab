import React from 'react';
import { tw } from 'twind';
import { style } from 'twind/style';

const Button = ({ variant = 'primary', children }) => {
  const button = style({
    // base
    base: `h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 block`,
    variants: {
      variant: {
        red: `bg-red-500`,
        pink: `bg-pink-500`,
        orange: `bg-orange-500`,
        purple: `bg-purple-500`,
        indigo: `bg-indigo-500`,
        gray: `bg-gray-500`,
        blue: `bg-blue-500`,
        green: `bg-green-500`,
      },
    },
  });
  return (
    <button className={tw(button({ variant }))}>{children || 'Button'}</button>
  );
};

export default Button;
