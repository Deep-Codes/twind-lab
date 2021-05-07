import React from 'react';

const SoundOffIcon = ({ props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={18}
      height={18}
      viewBox='0 0 24 24'
      fill='red'
      {...props}
    >
      <path d='M22 1.269L3.545 24 2 22.731 5.841 18H4.014V8H9v6.091l2.014-2.463V8l5.365-2.981L20.455 0 22 1.269zM11.014 17.195V18L20 23V6.127l-8.986 11.068z' />
    </svg>
  );
};

export default SoundOffIcon;
