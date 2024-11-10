interface formData
{
    label: string;
    place: string;
    type: string;
    labe2: string;
    place2:string;
    type2:string;
}
interface dtatForm 
{
    data: formData[];
    btnF: string;
}
export default function Form({data , btnF} : dtatForm) {
  return (
    <form className="2xl:p-[30px] p-4 rounded-3xl bg-white/30 2xl:mt-9 mt-5">
      {data.map((e,i) => (
        <div className="m-tablet:flex w-full justify-between 2xl:gap-[30px] m-tablet:gap-2">
            <div className=" m-tablet:w-1/2 m-tablet:mb-[30px] mb-2">
                <label className=" 2xl:text-lg text-sm font-semibold mb-2 block" htmlFor="">{e.label}</label>
                <input className="2xl:py-3.5 p-2  rounded-lg 2xl:px-6 w-full 2xl:placeholder:text-lg placeholder:text-sm" placeholder={e.place} type={e.type} />
            </div>
            <div className=" m-tablet:w-1/2 m-tablet:mb-[30px] mb-2" >
                <label className="2xl:text-lg text-sm  font-semibold mb-2 block" htmlFor="">{e.labe2}</label>
                <input  className="2xl:py-3.5 p-2 rounded-lg  2xl:px-6 w-full 2xl:placeholder:text-lg placeholder:text-sm"  placeholder={e.place2} type={e.type2} />
            </div>
        </div>
      ))}
      <div  className=" text-center">
      <button className="w-[212px] bg-[#FA8B02] 2xl:text-xl text-base font-semibold text-white rounded-full py-2.5 bx-[24px] ">{btnF}</button>
      </div>
      
    </form>
  )
}
