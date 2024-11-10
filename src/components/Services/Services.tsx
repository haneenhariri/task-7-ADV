import Image, { StaticImageData } from "next/image"

interface data 
{
    img : StaticImageData;
    title: string;
    text: string;
}
interface Servdata 
{
    servData : data[];
}
export default function Services({servData} : Servdata) {
  return (
    <section className="flex 2xl:gap-[33px] gap-y-9 gap-x-5 justify-center laptop:gap-x-2  laptop:flex-nowrap flex-wrap px-[13.021%] py-[6.25%]">
      {servData.map((e,i) => (
        <div key={i} className="2xl:w-[330px]  laptop:w-1/3 m-tablet:w-2/5  w-full">
            <Image
             src={e.img}
             alt={e.title}
             className=" mb-5 "
            />
            <h3 className=" 2xl:text-2xl m-tablet:text-xl text-lg font-bold mb-3">{e.title}</h3>
            <p className=" 2xl:text-lg m-tablet:text-base text-sm m-tablet:w-5/6 w-full">{e.text}</p>
        </div>
      ))}
    </section>
  )
}
