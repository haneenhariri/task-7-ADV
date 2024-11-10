import './Hero.css'
import HeroSearch from '../../components/HeroSearch/HeroSearch';
interface hero{
  title : string;
  text : string;
}

export default function Hero({title , text} : hero) {
  return (
    <section className="hero text-white h-dvh flex justify-center items-center flex-col" >
       <h1 className=' font-normal m-tablet:text-[72px] phone:text-[52px] text-3xl font-podcast mb-4 phone:mt-0 mt-7  md:leading-[73px]'>{title}</h1>
       <p className=' 2xl:font-bold font-medium 2xl:text-2xl  phon:text-lg text-sm'>{text}</p>
       <HeroSearch/>
    </section>
  )
}
