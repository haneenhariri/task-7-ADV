"use client";

interface InfoData{
    num: string;
    textInfo : string
}
interface props 
{
    data : InfoData[];
}
export default function Info({data} : props) {
  return (
    <div className="md:w-[68.428%] w-full phone:flex-nowrap flex-wrap  flex gap-[50px]">
      {data.map((e,i) => (
        <div key={i} className="w-max">
            <p className=" text-[#FA8B02] mb-1.5 font-bold xl:text-[32px] text-xl">{e.num}</p>
            <p className=" xl:text-base text-sm font-normal text-slate-400">{e.textInfo}</p>
        </div>
      ))}
    </div>
  )
}
