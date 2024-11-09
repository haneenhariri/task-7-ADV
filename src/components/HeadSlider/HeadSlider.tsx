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
    <div className="flex justify-between items-center mb-[57px]">
      <h2 className=" text-[32px] font-extrabold">{title}</h2>
      <div className="flex gap-5">
          <button
            className="bg-[#EFEFEF] text-[#333333]  w-[50px] h-[50px]  rounded-full"
            onClick={goToPrevious}
          >
            &#10094; 
          </button>
          <button
            className="bg-[#FA8B02] text-white p-2  w-[50px] h-[50px]  rounded-full"
            onClick={goToNext}
          >
            &#10095; 
          </button>
      </div>
    </div>
  )
}
