import React, { useState } from 'react';
import { Link as Anchor } from 'react-router-dom';
export default function Navbar() {
  const [openDraw, setOpenDraw] = useState(false);

  function openNavbar() {
    setOpenDraw(true);
  }

  function closeNavbar() {
    setOpenDraw(false);
  }

  return (
    <div className='w-full h-[10vh] flex items-center justify-between '>
      <button onClick={openNavbar} className='ml-[1rem]'>
        <img className='w-[3.5rem]' src="./public/menu.png" alt="" />
      </button>
      {openDraw && (
        <div className='w-[30%] h-[185vh] bg-white absolute py-[45rem] px-[1.7rem]'>
          <button onClick={closeNavbar}>
            <svg
              className='w-6 h-6 text-[#FF5722] dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
          </button>
          <div className='h-[50vh] mt-[2rem] flex flex-col gap-[3rem]'>
            <Anchor to='/' className='hover:text-[#5353aa]'>Home</Anchor>
            <Anchor to='footer' className='hover:text-[#5353aa]'>Mangas</Anchor>
            <Anchor to='/' className='hover:text-[#5353aa]'>My mangas</Anchor>
            <Anchor to='/' className='hover:text-[#5353aa]'>Sign In</Anchor>
            <Anchor to='/' className='hover:text-[#5353aa]'>Register</Anchor>
            <Anchor to='/' className='hover:text-[#5353aa]'>Log out</Anchor>
          </div>
        </div>
      )}
      <Anchor to='/'><img src="./public/logoNav.png" alt="" className='w-[10rem] mr-[1rem]' /></Anchor>
    </div>
  );
}
