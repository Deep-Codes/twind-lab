import React from 'react';

const AvatarStatus = () => {
  return (
    <div className='text-xl text-left'>
      <h2>Status</h2>
      <div className='mt-4'>
        <div className='relative inline-block mr-2'>
          <img
            className='inline-block object-cover w-12 h-12 rounded-full'
            src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
            alt='Profile image'
          />
          <span className='absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full'></span>
        </div>
        <div className='relative inline-block mr-2'>
          <img
            className='inline-block object-cover w-12 h-12 rounded-full'
            src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
            alt='Profile image'
          />
          <span className='absolute bottom-0 right-0 inline-block w-3 h-3 bg-red-600 border-2 border-white rounded-full'></span>
        </div>
        <div className='relative inline-block mr-2'>
          <img
            className='inline-block object-cover w-12 h-12 rounded-full'
            src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
            alt='Profile image'
          />
          <span className='absolute bottom-0 right-0 inline-block w-3 h-3 bg-blue-600 border-2 border-white rounded-full'></span>
        </div>
      </div>
    </div>
  );
};

export default AvatarStatus;
