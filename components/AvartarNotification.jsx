import React from 'react';

const AvatarNotification = () => {
  return (
    <div className='text-xl text-left'>
      <h2>Notification</h2>
      <div className='mt-4'>
        <div class='relative inline-block mr-2'>
          <img
            class='inline-block object-cover w-12 h-12 rounded-full'
            src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
            alt='Profile image'
          />
          <span class='text-sm text-center items-center text-white absolute bottom-0 right-0 inline-block w-5 h-5 bg-green-600 rounded-full'>
            3
          </span>
        </div>
        <div class='relative inline-block mr-2'>
          <img
            class='inline-block object-cover w-12 h-12 rounded-full'
            src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
            alt='Profile image'
          />
          <span class='text-sm text-center items-center text-white absolute bottom-0 right-0 inline-block w-5 h-5 bg-red-600 rounded-full'>
            1
          </span>
        </div>
      </div>
    </div>
  );
};

export default AvatarNotification;
