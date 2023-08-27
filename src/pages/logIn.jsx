import React, { useEffect, useRef, useState } from 'react';
import usersActions from '../redux/actions/usersActions';
import Navbar from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function logIn() {
const [emailValue, setEmailValue]=useState('')
const [passwordValue, setPasswordValue]=useState('')
const navigate=useNavigate()
let inputEmail=useRef()
let inputPassword=useRef()
const dispatch=useDispatch()
function captureEmail(){
  setEmailValue(inputEmail.current.value)
}
function capturePassword() {
  setPasswordValue(inputPassword.current.value);
}
function Submit(){
try {
  const datos = {
    email: emailValue,
    password: passwordValue,
};
  dispatch(usersActions.LogIn_users(datos))  
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Successful Loged in!',
    showConfirmButton: false,
    timer: 1500
  })
 
  navigate('/'); 
} catch (error) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
})
}

}


  return (
    <div className='w-full h-screen flex'>
<div className='absolute w-full'>
<Navbar/>
</div>
<div  className='w-[50%] h-screen' >
<img className='w-full h-screen object-fill' src="./public/logIn.png" alt="" />
</div>
<div className='w-[50%] h-screen flex flex-col items-center justify-center gap-4'>
<img className='w-[10rem]' src="./public/logoNav.png" alt="" />
<div className='flex'>
<p className='text-[2rem] mr-[1rem] font-medium'>welcome</p>
<p className='text-[#F97316] text-[2rem] font-medium'>Back!</p>
</div>
<p className='w-[20rem] text-[0.85rem] text-center'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>

<div className='w-[70%] flex flex-col h-[4rem] justify-center '>
<p  className='text-[#F97316] bg-[white] mb-[2.5rem] absolute ml-[0.8rem]'>Email</p>
<input ref={inputEmail} onChange={captureEmail} className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]' placeholder='Insert your email' type="text" />
</div>
<div className='w-[70%] flex flex-col  h-[4rem] justify-center '>
<p className='text-[#F97316] bg-[white] mb-[2.5rem] absolute ml-[0.8rem]'>Password</p>
<input ref={inputPassword} onChange={capturePassword} className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]' placeholder='Insert your password' type="password" />
</div>
<div className='flex w-[70%]'>
    <input type="checkbox" className='w-[2rem] h-[1rem]'/>
    <p>Send notification to my email</p>
</div>
<div className='w-[70%] h-[8rem] flex flex-col justify-around'>
<button onClick={Submit} className='bg-[#F97316] p-[0.5rem] w-full rounded-[5px] text-[white]'>Sign in</button>
<button className='w-full border-solid border-[1px] border-[gray] rounded-[5px] p-[0.5rem] flex justify-center items-center gap-2'><img className='w-[1rem]' src="./public/Google.png" alt="" /><p className='text-[gray]'>Sign in with Google</p></button>
</div>
</div>

</div>
  );
}
