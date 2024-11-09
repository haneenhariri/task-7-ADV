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
    <section className='py-[6.25%] flex justify-between items-center px-[13.021%]'>
        <Image
         src={img}
         alt='about'
         />
        <div className='w-[49.3%]'>
            <span className=' text-base font-semibold text-slate-500 mb-1.5'>{span}</span>
            <h2 className=' text-[32px] font-extrabold mb-8'>{titleA}</h2>
            <p className=' font-normal text-lg mb-8'>{p}</p>
            <Info
            data={infoData}
            />
        </div>
        
    </section>
  )
}
