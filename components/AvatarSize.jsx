import React from 'react';

const AvatarSize = () => {
  return (
    <div className='text-xl text-left'>
      <h2>Sizes</h2>
      <div className='my-5'>
        <img
          className='inline object-cover w-16 h-16 mr-2 rounded-full'
          src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
          alt='Profile image'
        />
        <img
          className='inline object-cover w-12 h-12 mr-2 rounded-full'
          src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
          alt='Profile image'
        />
        <img
          className='inline object-cover w-8 h-8 rounded-full'
          src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
          alt='Profile image'
        />
      </div>
    </div>
  );
};

export default AvatarSize;
