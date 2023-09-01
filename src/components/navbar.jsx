import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as Anchor, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
export default function Navbar() {
  const [openDraw, setOpenDraw] = useState(false);
  const navigate = useNavigate();
const dispatch=useDispatch()
  function openNavbar() {
    setOpenDraw(true);
  }

  function closeNavbar() {
    setOpenDraw(false);
  }
const token = localStorage.getItem('token');

  const photoUser = localStorage.getItem('photo');
console.log(photoUser);
  const emailUser = localStorage.getItem('user');
 
  async function LogOut() {
    try {
      await axios.post('http://localhost:8083/api/users/LogOut', null, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('photo');
  
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logout successful!',
        showConfirmButton: false,
        timer: 1500,
      });
  
      // Esperar un momento para que los datos se eliminen
      await new Promise(resolve => setTimeout(resolve, 1000)); // Puedes ajustar el tiempo según sea necesario
  navigate('/LogIn');

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to sign out!',
        timer: 1500,
      });
    }
  };
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
            {token ? (
              <>
                <div className=' rounded-[5px] py-[1.3rem] px-[1rem] w-full h-[15vh] flex gap-5 items-center bg-[url("https://img.pikbest.com/backgrounds/20190725/color-gradient-speed-line-banner-background_2758552.jpg!sw800")]'>
                  <img className=' rounded-[5px] w-[4rem] h-[4rem]' src={photoUser} alt="none" />
                  <p className='text-[white]'>{emailUser}</p>
                </div>
                <Anchor to='/' className='hover:text-[#131313] text-[white] flex gap-3'><svg class="w-6 h-6 text-[white] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
  </svg>Home</Anchor>
                <Anchor to='/mangas' className='hover:text-[#131313]  text-[white] flex  gap-3'><svg class="w-6 h-6 text-[white] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg>View Mangas</Anchor>
                <Anchor to='/' className='hover:text-[#131313]  text-[white] flex gap-3'><svg class="w-6 h-6 text-[white] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
  </svg>My mangas</Anchor>
                <Anchor  to={'/createManga'} className='hover:text-[#131313]  text-[white] flex gap-3'><svg class="w-6 h-6 text-[white] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg> Create Manga</Anchor>
                <Anchor onClick={LogOut} to='' className='hover:text-[#131313]  text-[white] flex gap-3'><svg class="w-6 h-6 text-[white] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 8h6m-9-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
  </svg>Log out</Anchor>
              </>
            ) : (
              <>
                <Anchor to='/' className='hover:text-[#131313] text-[white]'>Home</Anchor>
                <Anchor to='footer' className='hover:text-[#131313]  text-[white]'>View Mangas</Anchor>
                
                <Anchor to='/LogIn' className='hover:text-[#131313]  text-[white]'>Sign In</Anchor>
                <Anchor to='/Register' className='hover:text-[#131313]  text-[white]'>Register</Anchor>
              </>
            )}
          </div>
        </div>
      )}
      <Anchor to='/'><img src="./public/logoNav.png" alt="" className='w-[10rem] mr-[1rem]' /></Anchor>
    </div>
  );
}
