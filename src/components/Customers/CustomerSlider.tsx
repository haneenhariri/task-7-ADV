"use client";

import Image, { StaticImageData } from "next/image";
import ass from '@/assets/Img/Asset-1.png';
import ass2 from '@/assets/Img/Asset-2.png';

interface Slider {
  img: StaticImageData;
  userName: string;
  say: string;
}

interface SliderProps {
  dataSlider: Slider[];
  currentIndex: number;
}

export default function CustomerSlider({ dataSlider, currentIndex }: SliderProps) {
  const cardWidth = 700;  
  const gap = 20;  
  const slideWidth = cardWidth + gap; 

  return (
    <div>
      <div className="relative w-full max-w-[100%] overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex % dataSlider.length) * slideWidth}px)`,
          }}
        >
          {[...dataSlider, ...dataSlider].map((slide, index) => (
            <div
              key={index}
              className="w-full sm:w-[49.296%] 2xl:p-[30px] p-5 border border-[#EFEFEF] rounded-3xl flex-shrink-0 transition-transform duration-500 ease-in-out"
            >
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={slide.img}
                  alt={slide.userName}
                  className="object-cover rounded-lg"
                />
                <h3 className="text-center mt-4 text-lg font-semibold">{slide.userName}</h3>
              </div>
              <div className="flex flex-col gap-2.5">
                <Image src={ass} alt="icon" />
                <p className="font-normal 2xl:text-lg text-sm">{slide.say}</p>
                <Image src={ass2} alt="icon" className="self-end" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
