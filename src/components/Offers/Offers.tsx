import Image, { StaticImageData } from "next/image"
import './Offers.css'
interface propsData
{
  imgOffer : StaticImageData;
  titleO : string;
  pO: string;
  btnO : string;

}

export default function Offers({imgOffer , titleO , pO , btnO}  : propsData) {
  return (
    <section className=" relative flex md:flex-row flex-col justify-between items-end   img-bg px-[13.021%] ">
      <div className="bg-white/30 2xl:mb-[60px] md:mb-11 my-5 rounded-3xl text-center md:p-[30px] p-4  laptop:w-[40.075%]">
        <h2 className=" 2xl:text-[32px] laptop:text-2xl text-lg 2xl:mb-8 mb-4  font-extrabold ">{titleO}</h2>
        <p className=" 2xl:text-lg laptop:text-base text-sm 2xl:mb-8 mb-4 font-normal">{pO}</p>
        <button className=" laptop:w-[212px] w-auto px-7 bg-[#FA8B02] 2xl:text-xl laptop:text-base text-sm font-semibold text-white rounded-full py-2.5 bx-[24px] ">{btnO}</button>
      </div>
      <Image
        src={imgOffer}
        alt="img"
        className=" laptop:w-auto md:w-2/5 w-28 md:static absolute bottom-0  right-0"
      />
    </section>
  )
}
