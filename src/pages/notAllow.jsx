import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotAllow() {
  const navigate=useNavigate()
function backHome(){
  navigate('/')
}
  return (
    <div className='w-full h-screen flex '>
    <div className='w-[50%] h-screen'>
      <img className='w-[40rem] h-[49rem]' src="https://cdn.donmai.us/sample/15/2a/__virginia_knights_saga_and_1_more_drawn_by_koyama_sao__sample-152a43cc4e5272b46632019b5578b297.jpg" alt="" />
    </div>
    <div className='w-[50%] h-screen py-[7rem] flex flex-col gap-5'>
      <p className='text-[5rem]'>Sorry :(</p>
      <p className='text-[3rem]'>You do not have permission to access this page.
      To access, change your user role to an author role</p>
      <button onClick={backHome} className=' rounded-[5px] p-[1rem] bg-[orange] text-[white] text-[1.5rem] w-[40%]'>Come back Home!</button>
    </div>
    </div>
  );
}
