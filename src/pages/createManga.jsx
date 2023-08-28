import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';

import actionsCat from '../redux/actions/actionsCat';
export default function createManga() {
const cat=useSelector((store)=>store.categories.categories)
const dispatch=useDispatch()
useEffect(() => {
    dispatch(actionsCat.read_categories());
  }, []);

console.log(cat);
  return (
    <div className='w-full h-screen flex'>
<div className='absolute w-full'>
<Navbar/>
</div>
<div className='w-[50%] h-screen flex flex-col items-center justify-center gap-4'>
<img className='w-[10rem]' src="./public/logoNav.png" alt="" />
<p className='text-[2rem] mr-[1rem] font-medium'>Create your Manga!</p>
<div className='w-[70%] flex flex-col  h-[4rem] justify-center'>
<input className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]' placeholder='Insert title' type="text" />
</div>
<div className='w-[70%] flex flex-col h-[4rem] justify-center '>
<input className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]' placeholder='Insert Url cover photo' type="text" />
</div>
<div className='w-[70%] flex flex-col h-[4rem] justify-center '>
<input className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]' placeholder='Insert Description' type="text" />
</div>
<div className='w-[70%] flex flex-col  h-[4rem] justify-center '>
<select className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]'><option className='text-center text-[gray]' value="">Select to category</option>
{cat.map((category) => (
    <option key={category._id} value={category._id}>
      {category.name}
    </option>
  ))}
</select>
</div>

<div className='w-[70%] h-[8rem] flex flex-col justify-around'>
<button className='bg-[#F97316] p-[0.2rem] w-full rounded-[5px] text-[white] text-[1.5rem]'>Create! </button>
</div>
</div>
<div  className='w-[50%] h-screen' >
<img className='w-full h-screen object-fill' src="https://w0.peakpx.com/wallpaper/757/117/HD-wallpaper-naruto-anime-high-limit-son.jpg" alt="" />
</div>
</div>
    
  );
}
