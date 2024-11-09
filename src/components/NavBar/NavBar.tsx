"use client";

import React, { useState } from "react";
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

  const handleShowModel = (type: "login" | "signup") => {
    setFormType(type);
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
  };

  const pathname = usePathname();

  return (
    <nav className="z-10 fixed text-white top-0 w-full bg-white/20 transition-colors duration-300 lg-desktop:px-[13.021%] py-3 lg-desktop:py-5 px-[10%]">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="logo" className="2xl:w-[133px] 2xl:h-[130px] w-16 h-16" />
        <div className="hidden 2xl:w-[71.06%] lg:w-[88%] laptop:flex justify-between items-center">
          <ul className="flex 2xl:gap-10 gap-5 2xl:text-xl text-base leading-[27px] font-semibold">
            {navData.map((i, e) => (
              <li key={e}>
                <Link
                  href={i.path}
                  className={`pb-2 ${pathname === i.path ? "border-b-2 border-orange-500" : ""}`}
                >
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
            <button className="px-3 py-[10px] text-base" onClick={() => handleShowModel("login")}>
              {logIn}
            </button>
            <button
              className="2xl:px-6 text-base 2xl:py-[10px] px-5 py-2 2xl:w-[168px] lg:w-[130px] bg-[#FA8B02] rounded-full"
              onClick={() => handleShowModel("signup")}
            >
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
      {showSidebar && (
        <div className="fixed inset-0 bg-gray-800/70 flex justify-end z-50">
          <div className="bg-white w-[70%] max-w-sm p-4">
            <button onClick={() => setShowSidebar(false)} className="text-gray-600">
              <MdClose size={24} />
            </button>
            <ul className="mt-4 space-y-4">
              {navData.map((i, e) => (
                <li key={e}>
                  <Link
                    href={i.path}
                    className={`block ${pathname === i.path ? "text-orange-500" : "text-black"}`}
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {showModel && (
        <Model
          title={formType === "login" ? "Login" : "Create Account"}
          formField={formType === "login" ? logForm : signForm}
          handelShow={closeModel}
          btn1="Cancel"
          btn2={formType === "login" ? "Login" : "Sign Up"}
          onSwitchForm={() => setFormType(formType === "login" ? "signup" : "login")}
        />
      )}
    </nav>
  );
}
