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
        <div className='w-[30%] h-[189.7vh] absolute py-[46rem] px-[1.7rem] bg-[#FF5722] z-10'>
          <button onClick={closeNavbar}>
            <svg
              className='w-6 h-6 text-[white] dark:text-white'
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
          <div className='h-[50vh] mt-[2rem] flex flex-col gap-[3rem] bg-[#FF5722]'>
            <Anchor to='/' className='hover:text-[#131313] text-[white]'>Home</Anchor>
            <Anchor to='footer' className='hover:text-[#131313]  text-[white]'>Mangas</Anchor>
            <Anchor to='/' className='hover:text-[#131313]  text-[white]'>My mangas</Anchor>
            <Anchor to='/LogIn' className='hover:text-[#131313]  text-[white]'>Sign In</Anchor>
            <Anchor to='/Register' className='hover:text-[#131313]  text-[white]'>Register</Anchor>
            <Anchor to='' className='hover:text-[#131313]  text-[white]'>Log out</Anchor>
          </div>
        </div>
      )}
      <Anchor to='/'><img src="./public/logoNav.png" alt="" className='w-[10rem] mr-[1rem]' /></Anchor>
    </div>
  );
}
