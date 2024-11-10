import PopularData from "@/data/PopularCard";
import PopularCard from "./PopularCard";

interface PopularData
{
    titleP : string;
}

export default function Popular({titleP} : PopularData) {
  return (
    <section className="pt-[6.25%] px-[13.021%]">
      <h2 className="2xl:text-[32px] text-2xl font-extrabold mb-[60px]">
        {titleP}
      </h2>
      <div className="flex 2xl:gap-5 laptop:flex-nowrap flex-wrap laptop:gap-2.5 gap-3 justify-between">
      <PopularCard
       dataP={PopularData}
      />
      </div>

    </section>
  )
}
