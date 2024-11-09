import React from "react";
import { MdClose } from "react-icons/md";

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
      className="fixed inset-0 bg-gray-800/70 flex justify-center items-center z-50"
    >
      <div
        className="bg-white py-10 px-[59px] rounded-3xl max-w-lg w-full relative mx-4 sm:mx-6 md:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl text-black text-[32px] mb-6 font-bold">{title}</h3>
          <button onClick={handelShow} className="text-gray-600">
            <MdClose size={24} />
          </button>
        </div>
        <form className="space-y-4">
          {formField.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-semibold text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
          {title === "Login" ? (
            <p className="text-end text-slate-700 text-sm  cursor-pointer">
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
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handelShow}
              className="bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              {btn1}
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded-md"
            >
              {btn2}
            </button>
          </div>
          <p className="text-center mt-4">
            {title === "Login" ? "Don't have an account? " : "Already have an account? "}
            <span onClick={onSwitchForm} className="text-orange-500 cursor-pointer">
              {title === "Login" ? "Sign Up" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
