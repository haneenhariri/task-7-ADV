"use client";

import Image, { StaticImageData } from "next/image";

interface Info {
  icon: JSX.Element;
  text: string;
}

interface Slider {
  img: StaticImageData;
  titleCard: string;
  price: string;
  info: Info[];
  textCard: string;
}

interface SliderProps {
  dataSlider: Slider[];
  currentIndex: number;
}

export default function Slider({ dataSlider, currentIndex }: SliderProps) {
  const totalSlides = dataSlider.length;
  const itemsPerSlide = 4; 

  return (
    <div className="relative w-full max-w-[100%] overflow-hidden">
      <div
        className="flex gap-[33px] transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % totalSlides) * (100 / itemsPerSlide)}%)`,
        }}
      >
       
        {dataSlider.concat(dataSlider).map((slide, index) => (
          <div
            key={index}
            className="w-[330px] flex-shrink-0 transition-transform duration-500 ease-in-out"
          >
            <Image
              src={slide.img}
              alt={slide.titleCard}
              className="object-cover rounded-lg"
            />
            <div>
              <h3 className="mt-4 text-2xl font-bold ">{slide.titleCard}</h3>
              <p className=" font-semibold text-lg mt-4"> from <span className=" font-extrabold text-2xl text-[#FA8B02] ml-[10px]">{slide.price}</span></p>
              <div className=" flex justify-between">
                  {slide.info.map((e,i) => 
                  (
                    <div className="flex mt-[13px] text-base font-semibold text-[#FA8B02]">
                       {e.icon}
                       <span>{e.text}</span>
                    </div>
                  ))}
              </div>
              <p className="mt-3">{slide.textCard}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
