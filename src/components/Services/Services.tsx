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
    <section className="flex gap-[33px] px-[13.021%] py-[6.25%]">
      {servData.map((e,i) => (
        <div key={i} className="w-[330px]">
            <Image
             src={e.img}
             alt={e.title}
             className=" mb-5 "
            />
            <h3 className=" text-2xl font-bold mb-3">{e.title}</h3>
            <p className=" text-lg">{e.text}</p>
        </div>
      ))}
    </section>
  )
}
