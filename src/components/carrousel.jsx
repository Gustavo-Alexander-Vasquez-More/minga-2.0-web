import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionsCat from '../redux/actions/actionsCat';

export default function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const get_Categories = useSelector(store => store.categories.categories);
  const dispatch = useDispatch();
const categorias=get_Categories.map((category)=> category)
console.log(categorias);
  useEffect(() => {
    dispatch(actionsCat.read_categories());
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ?categorias.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === categorias.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='w-full h-[40vh] flex items-center justify-center'>
      <div className='bg-[#F97316] w-[95%] h-[32vh] flex justify-between items-center px-[2rem] rounded-[5px]'>
        <button className='bg-[#ffffff9a] p-[0.5rem] rounded-[50px]' onClick={handlePrevSlide}>
          <img className='w-[1rem]' src="./public/arrowI.svg" alt="" />
        </button>
        <div className=' flex justify-between w-full px-[3rem]'>
          <img
            className='w-[10rem] h-[15rem] mb-[4rem]'
            src={categorias[currentSlide].character_photo}
            
          />
          <img
            className='w-[10rem] mt-[0.5rem] h-[15rem]'
            src={categorias[currentSlide].cover_photo}
            
          />
          <div className=' w-[50%] px-[4rem] flex flex-col justify-center gap-5'>
            <p className='text-[white] font-bold text-[1.5rem]'>{categorias[currentSlide].name}</p>
            <p className='text-[white]'>{categorias[currentSlide].description}</p>
          </div>
        </div>
        <button className='bg-[#ffffff9a] p-[0.5rem] rounded-[50px]' onClick={handleNextSlide}>
          <img className='w-[1rem]' src="./public/arrowD.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
