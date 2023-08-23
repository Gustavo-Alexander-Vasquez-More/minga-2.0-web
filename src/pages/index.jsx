import React from 'react';
import Navbar from '../components/navbar';
import Carrousel from '../components/carrousel';
import Footer from '../components/footer';
import { Link as Anchor } from 'react-router-dom';
export default function index() {
  return (
    <div className='bg-[url("/Background.png")] w-full h-[60vh]'>
    <Navbar/>
    <div className=' w-full h-[50vh] flex-col flex gap-2 px-[4rem]'>
      <h1 className=' text-[white] text-[4rem] font-bold mt-[1.2rem]'>For the love of manga</h1>
      <p className=' text-[white] text-[1.5rem]'>Explore our varieties</p>
      <p className=' text-[white] text-[1.2rem]'>#MingaLove❤</p>
      <Anchor to='/LogIn'><button  className='bg-[white] w-[12rem] h-[3rem] text-[#ffbb3d] text-[1.2rem] font-bold rounded-[5px]'>Sign in!</button></Anchor>
    </div>
    <Carrousel/>
    <Footer/>
    </div>
    
  );
}
