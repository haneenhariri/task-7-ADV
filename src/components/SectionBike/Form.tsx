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
    <form className="p-[30px] rounded-3xl bg-white/30 mt-9">
      {data.map((e,i) => (
        <div className="flex w-full justify-between gap-[30px]">
            <div className=" w-1/2 mb-[30px]">
                <label className=" text-lg font-semibold mb-2 block" htmlFor="">{e.label}</label>
                <input className="py-3.5 rounded-lg px-6 w-full" placeholder={e.place} type={e.type} />
            </div>
            <div className=" w-1/2 mb-[30px]" >
                <label className="text-lg font-semibold mb-2 block" htmlFor="">{e.labe2}</label>
                <input  className="py-3.5 rounded-lg  px-6 w-full"  placeholder={e.place2} type={e.type2} />
            </div>
        </div>
      ))}
      <div  className=" text-center">
      <button className="w-[212px] bg-[#FA8B02] text-xl font-semibold text-white rounded-full py-2.5 bx-[24px] ">{btnF}</button>
      </div>
      
    </form>
  )
}
