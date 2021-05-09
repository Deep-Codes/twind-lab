import React from 'react';
import { tw, style, apply } from 'twind/style';

const Typography = ({
  size = 'lg',
  color = 'gray',
  text = 'Hello From Twind!',
  className,
}) => {
  const rootClass = `hmsui-typography-root`;

  const userClass = className ? apply`${className}` : '';
  const typography = style({
    // base
    base: `font-bold my-4`,
    variants: {
      size: {
        sm: `text-sm`,
        md: `text-base`,
        lg: `text-lg`,
        xl: `text-xl`,
        '2xl': `text-2xl`,
        '3xl': `text-3xl`,
        '4xl': `text-4xl`,
        '5xl': `text-5xl`,
        '6xl': `text-6xl`,
      },
      color: {
        red: `text-red-500`,
        pink: `text-pink-500`,
        orange: `text-orange-500`,
        purple: `text-purple-500`,
        indigo: `text-indigo-500`,
        gray: `text-gray-500`,
        blue: `text-blue-500`,
        green: `text-green-500`,
      },
      weight: '',
    },
  });
  return (
    <h1 className={tw(rootClass, typography({ size, color }), userClass)}>
      {text}
    </h1>
  );
};

export default Typography;
