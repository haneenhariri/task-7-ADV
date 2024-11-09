"use client";

import { useState } from "react";
import HeadSlider from "../HeadSlider/HeadSlider";
import Slider from "../Slider/Slider";
import CardSlider from "@/data/CardSlider";

export default function Destinations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CardSlider.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CardSlider.length) % CardSlider.length); 
  };

  return (
    <section className="pt-[6.25%] px-[13.021%]">
      <HeadSlider 
        title="Explore Our Popular Destinations"
        dataSlider={CardSlider}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
      />
      <Slider 
        dataSlider={CardSlider}
        currentIndex={currentIndex}
      />
    </section>
  );
}
