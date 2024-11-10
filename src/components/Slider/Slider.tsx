"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

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
  const [cardWidth, setCardWidth] = useState(330);  
  const [cardGap, setCardGap] = useState(33.33);   
  const slideWidth = cardWidth + cardGap; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardWidth(330)
        setCardGap(33.33)
      } else if (window.innerWidth >= 1024) {
        setCardWidth(300); 
        setCardGap(15)
      } else if (window.innerWidth >= 768) {
        setCardWidth(250);
        setCardGap(10)
      } else {
        setCardWidth(200); 
        setCardGap(10)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full max-w-[100%] overflow-hidden">
      <div
        className="flex gap-[33.33px] transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % dataSlider.length) * slideWidth}px)`,
        }}
      >
        {dataSlider.concat(dataSlider).map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-transform duration-500 ease-in-out"
            style={{ width: `${cardWidth}px` }} 
          >
            <Image
              src={slide.img}
              alt={slide.titleCard}
              className="object-cover rounded-lg "
            />
            <div>
              <h3 className="mt-4 text-lg font-bold">{slide.titleCard}</h3>
              <p className="font-semibold text-base mt-4">
                from{" "}
                <span className="font-extrabold text-xl text-[#FA8B02] ml-[10px]">
                  {slide.price}
                </span>
              </p>
              <div className="flex justify-between">
                {slide.info.map((e, i) => (
                  <div
                    key={i}
                    className="flex mt-[13px] text-sm font-semibold text-[#FA8B02]"
                  >
                    {e.icon}
                    <span>{e.text}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm">{slide.textCard}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
