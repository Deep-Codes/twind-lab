import React from 'react';
import MicrophoneIcon from './icons/MicrophoneIcon';
import SoundOffIcon from './icons/SoundOffIcon';
const AvatarIcons = () => {
  return (
    <div className='text-xl text-left mt-4'>
      <h2>Icons</h2>
      <div class='my-5'>
        <div className='relative inline-block mr-2'>
          <img
            className='inline object-cover w-12 h-12 mr-2 rounded-full'
            src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
            alt='Profile image'
          />
          <span class='absolute bottom-0 right-0 rounded-full p-0-1 '>
            <MicrophoneIcon />
          </span>
        </div>
        <div className='relative inline-block mr-2'>
          <img
            className='inline object-cover w-12 h-12 mr-2 rounded-full'
            src='https://vercel.com/api/www/avatar/?u=evilrabbit&s=180'
            alt='Profile image'
          />
          <span class='absolute bottom-0 right-0 rounded-full p-0-1 '>
            <SoundOffIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AvatarIcons;
