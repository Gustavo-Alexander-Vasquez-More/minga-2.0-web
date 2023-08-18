import React from 'react';
import Navbar from '../components/navbar';
import Carrousel from '../components/carrousel';
export default function index() {
  return (
    <div className='bg-[url("/Background.png")] w-full h-[60vh]'>
    <Navbar/>
    <div className=' w-full h-[45vh] bg-[#ff00002a] flex justify-center items-center ]'>
    </div>
    <Carrousel/>
    </div>
  );
}
