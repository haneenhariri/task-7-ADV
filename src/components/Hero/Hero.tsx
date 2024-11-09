import './Hero.css'
import HeroSearch from '../../components/HeroSearch/HeroSearch';
interface hero{
  title : string;
  text : string;
}

export default function Hero({title , text} : hero) {
  return (
    <section className="hero text-white h-dvh flex justify-center items-center flex-col" >
       <h1 className='  font-normal text-[72px] font-podcast mb-4 leading-[73px]'>{title}</h1>
       <p className=' font-bold text-2xl '>{text}</p>
       <HeroSearch/>
    </section>
  )
}
