interface data 
{
    title : string;
    text: string;
    btn: string;
}

export default function HeroAbout({title,text,btn} : data) {
  return (
    <section className='h-dvh 2xl:w-[49.115%] w-auto  text-center bg-about flex flex-col justify-center items-center'>
        <h1 className=" 2xl:text-[72px] md:text-[52px]  text-3xl font-podcast text-white font-normal mb-6">{title}</h1>
        <p className=" text-white 2xl:text-2xl laptop:text-lg text-sm w-3/4  laptop:w-[49.115%]  text-center mb-6 mx-11">{text}</p>
        <button className=" 2xl:w-[278.25px] w-auto text-white py-3.5 px-6 border border-white rounded-full md:text-base text-sm 2xl:text-xl">{btn}</button>
    </section>
  )
}
