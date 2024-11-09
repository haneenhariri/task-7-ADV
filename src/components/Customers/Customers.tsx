"use client";
import { useState } from "react";
import customer from "@/data/CustomersData";
import HeadSlider from "../HeadSlider/HeadSlider";
import CustomerSlider from "./CustomerSlider";

export default function Customers() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customer.length);
    };
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + customer.length) % customer.length); 
    };
  return (
    <section className="py-[6.25%] px-[13.021%]">
        <HeadSlider
        title="Happy Customers Says"
        dataSlider={customer}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
       />
        <CustomerSlider
        dataSlider={customer}
        currentIndex={currentIndex}
      />
    </section>
  )
}
