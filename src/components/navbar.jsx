import React from 'react';

export default function navbar() {
  return (
    <div className='w-full h-[10vh] flex items-center justify-between px-[2.5rem]'>
      <img className='w-[3.5rem]' src="./public/menu.png" alt=""/>
      <img src="./public/logoNav.png" alt="" className='w-[10rem]' />
    </div>
  );
}
