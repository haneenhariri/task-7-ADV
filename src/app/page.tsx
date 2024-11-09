import Hero from "@/components/Hero/Hero";
import Destinantions from "@/components/Destinantions/Destinantions";
import BestCompany from "@/components/BestCompany/BestCompany";
import aboutImg from "@/assets/Img/about picture.png"
import Offers from "@/components/Offers/Offers";
import imgOffer from "@/assets/Img/Offers/Offers-girl.png"
import Services from "@/components/Services/Services";
import ServicesCard from "@/data/ServicesData";
import SectionBike from "@/components/SectionBike/SectionBike";
import bike from "@/assets/Img/BikeImg/bike picture.png"
import Popular from "@/components/Popular/Popular";
import Customers from "@/components/Customers/Customers";


export default function Home() {
  return (
  <>
    <Hero
    title="Enjoy in the best way!"
    text="Enjoy our services for your trip anytime"
    />
    <Destinantions/>
    <BestCompany
    img={aboutImg}
    span="WELCOME TO OUR SITE!"
    titleA="We are the best company for your visit"
    p="After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
    />
    <Offers 
     imgOffer={imgOffer}
     titleO="Get Special Offers for Organizations"
     pO="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
     btnO="Contact Us"
    />
    <Services
     servData={ServicesCard}
    />
    <SectionBike
    bikeImg={bike}
    titleB="Book Now Bike"
    textB="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    />
    <Popular
     titleP="The Most Popular Packages"
    />
    <Customers/>

  </>
  );
}
