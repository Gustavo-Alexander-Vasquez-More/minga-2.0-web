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
                <div className='w-full h-[10vh] flex flex-col'>
                  <img className='w-[2rem] h-[2rem]' src={photoUser} alt="none" />
                  <p className='text-[white]'>{emailUser}</p>
                </div>
                <Anchor to='/' className='hover:text-[#131313] text-[white]'>Home</Anchor>
                <Anchor to='footer' className='hover:text-[#131313]  text-[white]'>Mangas</Anchor>
                <Anchor to='/' className='hover:text-[#131313]  text-[white]'>My mangas</Anchor>
                <Anchor onClick={LogOut} to='' className='hover:text-[#131313]  text-[white]'>Log out</Anchor>
              </>
            ) : (
              <>
                <Anchor to='/' className='hover:text-[#131313] text-[white]'>Home</Anchor>
                <Anchor to='footer' className='hover:text-[#131313]  text-[white]'>Mangas</Anchor>
                <Anchor to='/' className='hover:text-[#131313]  text-[white]'>My mangas</Anchor>
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
