import Image, { StaticImageData } from "next/image"

interface dataCard 
{
    img : StaticImageData;
    title: string;
    price: string;
    serv : serv[];
    btn: string
}
interface serv{
    icon: StaticImageData;
    text: string;
}
interface Populardata 
{
    dataP : dataCard[];
}

export default function PopularCard({dataP} : Populardata) {
  return (
    <>
        {dataP.map((e,i) => (
            <div key={i} className="rounded-3xl border border-[#EFEFEF]">
                <Image 
                src={e.img}
                alt={e.title}
                className=""
                />
                <div className=" p-[25px]   mb-4">
                    <h3 className="text-xl mb-4 font-extrabold">{e.title}</h3>
                    <div><sup className="text-slate-500 mb-5 text-xl">€</sup>
                    <span className="text-[#FA8B02] text-[48px] font-bold">{e.price}</span> <span className=" text-slate-500 text-lg">/day</span> </div>
                    {e.serv.map((e,i) => (
                        <div className="flex mb-4  gap-[16px]">
                            <Image src={e.icon} alt="icon" />
                            <p>{e.text}</p>
                        </div>
                    ))}
                    <div className="w-full text-center">
                    <button className=" w-full py-3 px-6 text-xl font-semibold text-[#FA8B02] border border-[#FA8B02] rounded-full">{e.btn}</button>
                    </div>
                    
                </div>
            </div>
        ))}
    </>
  )
}
