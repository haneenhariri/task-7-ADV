"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import Model from "../Model/Model";
import { logForm } from "@/data/Login";
import { signForm } from "@/data/Sign";

interface navData {
  title: string;
  path: string;
}

interface Dataprops {
  logo: StaticImageData;
  navData: navData[];
  span: string;
  logIn: string;
  up: string;
  down: string | StaticImageData;
}

export default function NavBar({ navData, span, logIn, up, logo, down }: Dataprops) {
  const [showModel, setShowModel] = useState(false);
  const [formType, setFormType] = useState<"login" | "signup">("login");
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowModel = (type: "login" | "signup") => {
    setFormType(type);
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
  };

  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`z-10 fixed text-white top-0 w-full ${isScrolled ? 'bg-[#333333]' : 'bg-white/20'} transition-colors duration-300 lg-desktop:px-[13.021%] py-3 lg-desktop:py-5 px-[10%]`}>
      <div className="flex justify-between items-center">
        <Image src={logo} alt="logo" className="2xl:w-[133px] 2xl:h-[130px] phone:w-16 phone:h-16 w-8 h-8" />
        <div className="hidden 2xl:w-[71.06%] lg:w-[88%] laptop:flex justify-between items-center">
          <ul className="flex 2xl:gap-10 gap-5 2xl:text-xl text-base leading-[27px] font-semibold">
            {navData.map((i, e) => (
              <li key={e}>
                <Link href={i.path} className={`${pathname === i.path ? "border-b-2 border-orange-500" : ""}`}>
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-[10px] leading-[27px] 2xl:text-xl text-lg font-semibold">
            <div className="flex items-center 2xl:text-xl text-base font-semibold">
              <span>{span}</span>
              <Image className="max-h-max" width={20} height={20} src={down} alt="down-icon" />
            </div>
            <button className="px-3 py-[10px] 2xl:text-xl text-base" onClick={() => handleShowModel("login")}>
              {logIn}
            </button>
            <button className="2xl:px-6 2xl:text-xl text-base 2xl:py-[10px] px-5 py-2 2xl:w-[168px] lg:w-[130px] bg-[#FA8B02] rounded-full" onClick={() => handleShowModel("signup")}>
              {up}
            </button>
          </div>
        </div>
        <div className="laptop:hidden flex justify-center items-center">
          <button onClick={() => setShowSidebar(!showSidebar)} className="text-2xl">
            {showSidebar ? <MdClose /> : <RiMenu3Line />}
          </button>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800/70 transition-opacity duration-300 ease-in-out ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-40`}
        onClick={() => setShowSidebar(false)}
      />
      <div
        className={`fixed right-0 top-0 h-full bg-white w-[70%] max-w-sm p-4 transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        <button onClick={() => setShowSidebar(false)} className="text-gray-600">
          <MdClose size={24} />
        </button>
        <ul className="mt-4 space-y-4">
          {navData.map((i, e) => (
            <li key={e}>
              <Link href={i.path} className={`block ${pathname === i.path ? "text-orange-500" : "text-black"}`}>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {showModel && (
        <Model
          title={formType === "login" ? "Login" : "Create Account"}
          formField={formType === "login" ? logForm : signForm}
          handelShow={closeModel}
          btn1="Sign In with Google"
          btn2={formType === "login" ? "Sign In" : "Sign Up"}
          onSwitchForm={() => setFormType(formType === "login" ? "signup" : "login")}
        />
      )}
    </nav>
  );
}
