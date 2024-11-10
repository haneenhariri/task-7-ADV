import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Info from './Info';
import infoData from '@/data/InfoData';

interface bestData
{
    img: StaticImageData ;
    span : string;
    titleA : string;
    p : string


}

export default function BestCompany({img , span , titleA ,p} : bestData) {
  return (
    <section className='py-[6.25%]  tablet:flex-nowrap flex-wrap flex laptop:justify-between justify-center gap-5 items-center px-[13.021%]'>
      <div className='desktop:px-3 p-0'>
      <Image
         src={img}
         alt='about'
         className=' laptop:w-auto m-tablet:w-3/4'
         />
      </div>
        <div className='2xl:w-[49.296%] w-full tablet:w-3/4'>
            <span className=' text-base font-semibold text-slate-500 mb-1.5'>{span}</span>
            <h2 className=' 2xl:text-[32px] lg:text-3xl md:text-xl font-extrabold mb-8'>{titleA}</h2>
            <p className='w-auto font-normal 2xl:text-lg lg:text-base text-sm mb-8'>{p}</p>
            <Info
            data={infoData}
            />
        </div>
        
    </section>
  )
}
