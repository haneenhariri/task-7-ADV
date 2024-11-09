interface data 
{
    title : string;
    text: string;
    btn: string;
}

export default function HeroAbout({title,text,btn} : data) {
  return (
    <section className='h-dvh bg-about flex flex-col justify-center items-center'>
       <div className=" w-[49.115%] text-center">
        <h1 className=" text-[72px] font-podcast text-white font-normal mb-6">{title}</h1>
        <p className=" text-white text-2xl mb-6 mx-11">{text}</p>
        <button className=" w-[278.25px] text-white py-3.5 px-6 border border-white rounded-full text-xl">{btn}</button>
       </div>
    </section>
  )
}
