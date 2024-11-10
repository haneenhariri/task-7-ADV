import Image, { StaticImageData } from "next/image";


interface CardData
{
    icon: StaticImageData;
    text: string;
}


export default function Card({icon,text} : CardData) {
  return (
    <div className=" laptop:w-1/4 md:w-2/5 w-full text-center bg-white/30 rounded-3xl p-[30px] flex flex-col justify-center items-center gap-3.5">
        <Image src={icon} alt={text}/>
        <h3 className=" 2xl:text-xl text-base font-semibold">{text}</h3>
    </div>
  )
}
