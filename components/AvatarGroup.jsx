import React from 'react';

const AvatarGroup = () => {
  return (
    <div className='text-xl text-left'>
      <h2>Group</h2>
      <div class='-space-x-4 my-5'>
        <img
          class='relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full'
          src='https://vercel.com/api/www/avatar/?u=rauchg&s=60'
          alt='Profile image'
        />
        <img
          class='relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full'
          src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
          alt='Profile image'
        />
        <img
          class='relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full'
          src='https://vercel.com/api/www/avatar/?u=leo&s=60'
          alt='Profile image'
        />
      </div>
    </div>
  );
};

export default AvatarGroup;
