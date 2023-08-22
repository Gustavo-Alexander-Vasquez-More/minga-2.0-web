import React from 'react';

export default function carrousel() {
  return (
    <div className='w-full h-[40vh] flex items-center justify-center'>
      <div className='bg-[#F97316] w-[95%] h-[32vh] flex justify-between items-center px-[2rem] rounded-[5px]'>
      <button className='bg-[#ffffff9a] p-[0.5rem] rounded-[50px]'><img className='w-[1rem]' src="./public/arrowI.svg" alt="" /></button>
      <button className='bg-[#ffffff9a] p-[0.5rem] rounded-[50px]'><img className='w-[1rem]' src="./public/arrowD.svg" alt="" /></button>
      </div>
    </div>
  );
}
