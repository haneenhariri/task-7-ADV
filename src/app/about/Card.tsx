import Image, { StaticImageData } from "next/image";


interface CardData
{
    icon: StaticImageData;
    text: string;
}


export default function Card({icon,text} : CardData) {
  return (
    <div className="w-1/4 text-center bg-white/30 rounded-3xl p-[30px] flex flex-col justify-center items-center gap-3.5">
        <Image src={icon} alt={text}/>
        <h3 className=" text-xl font-semibold">{text}</h3>
    </div>
  )
}
