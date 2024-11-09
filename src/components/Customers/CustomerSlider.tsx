"use client";

import Image, { StaticImageData } from "next/image";
import ass from '@/assets/Img/Asset-1.png'
import ass2 from '@/assets/Img/Asset-2.png'
interface Slider {
  img: StaticImageData;
  userName: string;
  say: string;
}

interface SliderProps {
  dataSlider: Slider[];
  currentIndex: number;
}

export default function CustomerSlider({dataSlider,currentIndex} : SliderProps) {
  return (
    <div>
      <div className="relative w-full max-w-[100%] overflow-hidden">
      <div
        className="flex gap-[20px] transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % dataSlider.length) * (100 / 2)}%)`,
        }}
      >
        {dataSlider.map((slide, index) => (
          <div
            key={index}
            className="w-1/2 p-[30px] border border-[#EFEFEF] rounded-3xl flex-shrink-0 transition-transform duration-500 ease-in-out"
          >
            <div className=" flex flex-col justify-center items-center">
            <Image
              src={slide.img}
              alt={slide.userName}
              className="object-cover rounded-lg"
            />
            <h3 className="text-center mt-4 text-lg font-semibold">{slide.userName}</h3>
            </div>
            <div className=" flex flex-col gap-2.5">
              <Image src={ass}  alt=" icon"/>
              <p className=" font-normal  text-lg ">{slide.say}</p>
              <Image src={ass2}  alt=" icon" className=" self-end"/>
            </div>
            
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
