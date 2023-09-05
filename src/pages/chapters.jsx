import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import chapterActions from '../redux/actions/chapterActions.js'
import { Link as Anchor } from 'react-router-dom';

export default function chapters() {
const {manga_id}=useParams()
const dispatch=useDispatch()
const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('currentPageChapters')) || 1)
const pages=currentPage
useEffect(() => {
    localStorage.setItem('currentPageChapters', currentPage)
    dispatch(chapterActions.read_pag_chap(manga_id, pages ))
}, [manga_id, pages]);
const dato=useSelector((store)=>store.chapters)
const datos=dato.chapters
console.log(dato);



  return (
    <div>
      {datos.map((chapter) => (
    <Anchor to={`/chapters/${chapter._id}`}>
      <div key={chapter._id} className='w-[30rem] h-auto rounded-[10px] flex border-solid border-[2px] border-[#b3b2b2]'>
      <div className=' rounded-[10px] w-[50%] h-[25vh] bg-[white] flex flex-col items-center justify-around py-[2rem]'>
        <p className='text-[1.2rem] font-semibold'>{chapter.title}</p>
        
        <button className='bg-[#D1FBF0] text-[#00BA88] w-[5rem] px-[1rem] py-[0.2rem] rounded-[10px]'>Read</button>
      </div>
      <div key={chapter._id} className='w-[50%] h-[25vh] rounded-[10px]'>
        <img className='rounded-[10px] h-[25vh] w-full object-cover rounded-l-[8rem]' src={chapter.cover_photo} alt="" />
      </div>
    </div>
      </Anchor>
  ))}
    </div>
  );
}
