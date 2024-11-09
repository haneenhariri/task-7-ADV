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
    <div className="w-[68.428%] flex gap-[50]">
      {data.map((e,i) => (
        <div key={i} className="w-max">
            <p className=" text-[#FA8B02] mb-1.5 font-bold text-[32px]">{e.num}</p>
            <p className=" text-base font-normal text-slate-400">{e.textInfo}</p>
        </div>
      ))}
    </div>
  )
}
