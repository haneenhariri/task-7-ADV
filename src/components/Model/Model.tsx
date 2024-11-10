import Image from "next/image";
import React from "react";
import { MdClose } from "react-icons/md";
import google from '@/assets/Img/icons_google.png'
interface FormField {
  label: string;
  type: string;
  placeholder: string;
}

interface ModelProps {
  title: string;
  formField: FormField[];
  handelShow: () => void;
  btn1: string;
  btn2: string;
  onSwitchForm: () => void;
}

export default function Model({
  title,
  formField,
  handelShow,
  btn1,
  btn2,
  onSwitchForm,
}: ModelProps) {
  return (
    <div
      onClick={handelShow}
      className="fixed inset-0 bg-[#333333]/80 flex justify-center items-center z-50"
    >
      <div
        className="bg-white 2xl:py-10 2xl:px-[59px] p-5 rounded-3xl max-w-lg w-full relative mx-4 sm:mx-6 md:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center 2xl:mb-6 mb-3">
          <h3 className="2xl:text-[32px] text-xl text-black   font-bold">{title}</h3>
          <button onClick={handelShow} className="text-gray-600">
            <MdClose size={24} />
          </button>
        </div>
        <form className="space-y-4">
          {formField.map((field, index) => (
            <div key={index} className="2xl:mb-5 mb-2.5">
              <label className="block 2xl:text-lg  text-base mb-2.5 font-semibold text-gray-600">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className=" py-2.5 px-6 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
          {title === "Login" ? (
            <p className="text-end text-[#333333]/60 text-sm mb-6 cursor-pointer">
              Forgot your password?
            </p>
          ) : (
            <div className="flex items-center text-sm mt-2">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree with <span className="text-slate-700 cursor-pointer"><span className=" text-[#FA8B02]">Terms</span> and <span className=" text-[#FA8B02]">  Privacy</span></span>
              </label>
            </div>
          )}
          <div className="flex flex-col  mt-6">
          <button
              type="submit"
              className="bg-[#FA8B02] text-white py-2.5 px-6 2xl:text-lg text-sm rounded-full"
            >
              {btn2}
            </button>
            <span className="text-[#333333]/60  text-center my-1.5">or</span>
            <button
              type="button"
              onClick={handelShow}
              className=" gap-2.5 border border-[[#333333]/60] text-center flex py-2.5 px-6 items-center text-[#333333]/60  rounded-full"
            >
              <Image src={google} alt="sign in "/>
              <div className="w-4/5 2xl:text-lg text-sm font-semibold">
              {btn1}
              </div>
              
            </button>
          </div>
          <p className="text-center 2xl:text-base text-sm text-black mt-4">
            {title === "Login" ? "Don't have an account? " : "Already have an account? "}
            <span onClick={onSwitchForm} className="text-[#FA8B02] font-semibold cursor-pointer">
              {title === "Login" ? "Sign Up" : "Log in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
