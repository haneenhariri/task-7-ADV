import PopularData from "@/data/PopularCard";
import PopularCard from "./PopularCard";

interface PopularData
{
    titleP : string;
}

export default function Popular({titleP} : PopularData) {
  return (
    <section className="pt-[6.25%] px-[13.021%]">
      <h2 className="text-[32px] font-extrabold mb-[60px]">
        {titleP}
      </h2>
      <div className="flex  justify-between">

      <PopularCard
       dataP={PopularData}
      />


      </div>

    </section>
  )
}
