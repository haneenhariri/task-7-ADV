"use client";


import { useState } from "react";
interface HeadSliderProps {
    title: string;
    dataSlider: any[];
    goToNext: () => void; 
    goToPrevious: () => void; 
  }

export default function HeadSlider({  
    title,
    dataSlider,
    goToNext,
    goToPrevious,}: HeadSliderProps) 
{
  return (
    <div className="flex justify-between md:flex-nowrap flex-wrap gap-y-2 items-center mb-[57px]">
      <h2 className=" 2xl:text-[32px] md:text-2xl text-lg font-extrabold">{title}</h2>
      <div className="flex md:gap-5 gap-1 ">
          <button
            className="bg-[#EFEFEF] text-[#333333] p-2 flex justify-center items-center  md:w-[50px] md:h-[50px] w-[30px] h-[30px]  rounded-full"
            onClick={goToPrevious}
          >
            &#10094; 
          </button>
          <button
            className="bg-[#FA8B02] text-white p-2 flex justify-center items-center  md:w-[50px] md:h-[50px] w-[30px] h-[30px]  rounded-full"
            onClick={goToNext}
          >
            &#10095; 
          </button>
      </div>
    </div>
  )
}
