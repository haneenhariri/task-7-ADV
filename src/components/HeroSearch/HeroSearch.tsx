"use client";

import React, { useState } from 'react'
import tabs from '@/data/HeroSearch';
import './HeroSearch.css'
import Image from 'next/image';
import search from '@/assets/Img/search-i.png'
export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=' laptop:w-auto w-4/5  2xl:mt-[60px] m-tablet:mt-10 mt-5 bg-white/20 2xl:p-5 p-2.5 rounded-xl'>
      <div className='flex w-max bg-white/20 rounded-tl-xl rounded-tr-xl overflow-hidden'>
        {tabs.map((tab , index) => (
          <button key={index}
          onClick={()=> setActiveTab(index)}
          className={`2xl:p-4 p-3 flex items-center gap-2.5 justify-between transition-all duration-200
            ${ activeTab === index ? "text-[#FA8B02] bg-white" : "text-white bg-transparent"} `}
          >
            {tab.icon}
            <span className='md:block hidden 2xl:text-lg text-base font-semibold'>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className=' 2xl:p-3 p-1 flex laptop:flex-nowrap flex-wrap items-center justify-center lg:w-auto  bg-white text-black   2xl:gap-3 gap-1 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
        {tabs[activeTab].content.map((item, index) => (
        <div 
          key={index} 
          className=' tab-content-item  2xl:py-4 py-2   flex gap-[7px] 2xl:px-4 px-2 '
        >
          {item.icon}
          <div className='flex  flex-col font-semibold 2xl:text-lg md:text-base text-sm 2xl:gap-1.5 mb-1.5'>
            <span>{item.label}</span>
            <select className='2xl:pr-5 pr-1 font-normal 2xl:text-lg md:text-base text-sm text-start text-[#333333]'>
              <option value="" className=''>{item.select}</option>
            </select>
          </div>
        </div>
        ))}
        <div className='search 2xl:w-20 w-12 h-12 flex justify-center items-center rounded-xl 2xl:h-20 bg-[#FA8B02]'>
          <Image src={search} alt='search'/>
        </div>
      </div>
    </div>
  )
}
