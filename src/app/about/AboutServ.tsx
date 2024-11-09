import { CardD } from "@/data/AboutCard"
import Card from "./Card"

export default function AboutServ() {
  return (
    <section className=" py-[83px] px-[13.021%] justify-between flex gap-[83px]  bg-about-serv">
      {CardD.map((e,i) => (
        <Card icon={e.icon} text={e.text}/>
      ))}
    </section>
  )
}
