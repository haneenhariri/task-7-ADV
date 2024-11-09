import aboutImg from "@/assets/Img/about-7.png"
import BestCompany from "@/components/BestCompany/BestCompany";
import HeroAbout from "./HeroAbout";
import AboutServ from "./AboutServ";
import Customers from "@/components/Customers/Customers";


export default function About() {
  return (
    <>
      <HeroAbout
       title="Our team cares about your full relax"
       text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
       btn="View our Tour Packages"
      />
      <BestCompany
      img={aboutImg}
      span= "WELCOME TO OUR SITE!"
      titleA="We Are The Center Of Lucca To Offer You The Best"
      p="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
      />
      <AboutServ />
      <Customers/>
    </>
  )
}
