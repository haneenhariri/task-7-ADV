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
    <section className="flex justify-between items-end img-bg px-[13.021%] ">
      <div className="bg-white/30 mb-[60px] rounded-3xl text-center p-[30px] w-[40.075%]">
        <h2 className=" text-[32px] mb-8  font-extrabold ">{titleO}</h2>
        <p className=" text-lg  mb-8 font-normal">{pO}</p>
        <button className=" w-[212px] bg-[#FA8B02] text-xl font-semibold text-white rounded-full py-2.5 bx-[24px] ">{btnO}</button>
      </div>
      <Image
        src={imgOffer}
        alt="img"
      />
    </section>
  )
}
