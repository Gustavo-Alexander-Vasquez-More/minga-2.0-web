import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import actionsCat from '../redux/actions/actionsCat';
import mangaActions from '../redux/actions/mangaAction';
export default function createManga() {
const [titleValue, setTitleValue]=useState('')
const [photoValue, setPhotoValue]=useState('')
const [descriptionValue, setDescriptionValue]=useState('')
const [categoryValue, setCategoryValue]=useState('')
console.log(categoryValue);
const inputTitle=useRef()
const inputPhoto=useRef()
const inputDescription=useRef()
const selectCategory=useRef()
const cat=useSelector((store)=>store.categories.categories)
const dispatch=useDispatch()
useEffect(() => {
    dispatch(actionsCat.read_categories());
  }, []);
function captureTitle(){
setTitleValue(inputTitle.current.value)
}
function capturePhoto(){
setPhotoValue(inputPhoto.current.value)
}
function captureDescription(){
setDescriptionValue(inputDescription.current.value)
}
function captureSelect(){
setCategoryValue(selectCategory.current.value)
}
function Submit(){
    let datos={
        title:titleValue,
        cover_photo:photoValue,
        description:descriptionValue,
        category_id:categoryValue
    }
    dispatch(mangaActions.create_manga(datos))
}
return (
    <div className='w-full h-screen flex'>
<div className='absolute w-full'>
<Navbar/>
</div>
<div className='w-[50%] h-screen flex flex-col items-center justify-center gap-4'>
<img className='w-[10rem]' src="./public/logoNav.png" alt="" />
<p className='text-[2rem] mr-[1rem] font-medium'>Create your Manga!</p>
<div className='w-[70%] flex flex-col  h-[4rem] justify-center'>
<input ref={inputTitle} onChange={captureTitle} className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]' placeholder='Insert title' type="text" />
</div>
<div className='w-[70%] flex flex-col h-[4rem] justify-center '>
<input ref={inputPhoto} onChange={capturePhoto} className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]' placeholder='Insert Url cover photo' type="text" />
</div>
<div className='w-[70%] flex flex-col h-[4rem] justify-center '>
<input ref={inputDescription} onChange={captureDescription} className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]' placeholder='Insert Description' type="text" />
</div>
<div className='w-[70%] flex flex-col  h-[4rem] justify-center '>
<select ref={selectCategory} onChange={captureSelect} className='w-[100%] border-solid border-[1px] border-[gray] rounded-[5px] py-[0.5rem] placeholder:text-center px-[1rem]'><option className='text-center text-[gray]' value="">Select to category</option>
{cat.map((category) => (
    <option key={category._id} value={category.name}>
      {category.name}
    </option>
  ))}
</select>
</div>

<div className='w-[70%] h-[8rem] flex flex-col justify-around'>
<button onClick={Submit} className='bg-[#F97316] p-[0.2rem] w-full rounded-[5px] text-[white] text-[1.5rem]'>Create! </button>
</div>
</div>
<div  className='w-[50%] h-screen' >
<img className='w-full h-screen object-fill' src="https://w0.peakpx.com/wallpaper/757/117/HD-wallpaper-naruto-anime-high-limit-son.jpg" alt="" />
</div>
</div>
    
  );
}
