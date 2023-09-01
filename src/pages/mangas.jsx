import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import mangaActions from '../redux/actions/mangaAction.js';

export default function mangas() {
const [page , setPage]=useState()
const manga=useSelector((store)=>store.mangas)
const manguitas=manga.mangas
const mangas=manguitas.mangas

console.log(mangas);
const dispatch=useDispatch()
  useEffect(() => {
  dispatch(mangaActions.read_pag())
  }, []);

  return (
    <div className='w-full h-auto flex flex-col'>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
    <div className='bg-[url("/mangas.png")] w-full h-[60vh] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center gap-[5rem]'>
    <p className='text-white text-[4rem]'>Mangas</p>
    <input className=' w-[50%] px-[1rem] py-[0.5rem] rounded-[5px]'  type="text" placeholder=' Search mangas' />
    </div>
    <div className='bg-[#d8d6d6] w-full h-[170vh]'>
    </div>
    <div className='w-[95%] h-[180vh] absolute flex left-[2.5rem] py-[2rem] top-[50%] bg-[white] rounded-[20px] flex-col items-center'>
    <div className='w-full h-[10vh] flex items-center gap-5 px-[2.5rem]'>
   <button className='bg-[#999898] text-[white] p-[0.5rem] px-[1rem] rounded-[30px]'>All</button>
   <button className='bg-[#FFE0DF] text-[#EF8481] p-[0.5rem] px-[1rem] rounded-[30px]'>Shonen</button>
   <button className='bg-[#FFDFC8] text-[#FC9C57] p-[0.5rem] px-[1rem] rounded-[30px]'>Seinen</button>
   <button className='bg-[#D1FBF0] text-[#00BA88] p-[0.5rem] px-[1rem] rounded-[30px]'>Shojo</button>
   <button className='bg-[#E0DBFF] text-[#8883F0] p-[0.5rem] px-[1rem] rounded-[30px]'>Comics</button>
</div>
<div className='w-full h-[150vh] flex flex-wrap justify-center items-center  gap-x-[10rem]'>
{mangas.map((manga) => (
    <div key={manga._id} className='w-[30rem] h-auto rounded-[10px] flex border-solid border-[2px] border-[#b3b2b2]'>
      <div className=' rounded-[10px] w-[50%] h-[25vh] bg-[white] flex flex-col items-center justify-around py-[2rem]'>
        <p className='text-[1.2rem] font-semibold'>{manga.title}</p>
        <p className='font-semibold text-[1.2rem] text-[#F97316]'>{manga.category_id.name}</p>
        <button className='bg-[#D1FBF0] text-[#00BA88] w-[5rem] px-[1rem] py-[0.2rem] rounded-[10px]'>Read</button>
      </div>
      <div key={manga._id} className='w-[50%] h-[25vh] rounded-[10px]'>
        <img className='rounded-[10px] h-[25vh] w-full object-cover rounded-l-[8rem]' src={manga.cover_photo} alt="" />
      </div>
    </div>
  ))}
</div>
<div className='w-[40%] bg-[white] h-[10vh] flex justify-around items-center '>
<button className='w-[10rem] bg-[#F97316] h-[2rem] text-center rounded-[10px] text-[white]'>Prev</button>
<p>Page numer</p>
<button className='w-[10rem] bg-[#F97316] h-[2rem] text-center rounded-[10px] text-[white]'>Next</button>
</div>
    </div>
    </div>
  );
}
