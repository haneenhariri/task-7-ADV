import Image, { StaticImageData } from 'next/image'
import './SectionBike.css'
import Form from './Form';
import form from '@/data/FormData';
interface bikeData
{
    bikeImg: StaticImageData;
    titleB: string;
    textB: string;
}

export default function SectionBike({bikeImg , titleB} : bikeData) {
  return (
    <section className=' relative tablet:flex  justify-between  bike px-[13.021%]'>
      <div className='self-start tablet:w-1/2 w-full tablet:mt-[60px] tablet:mb-0 my-5 '>
        <h2 className='text-center 2xl:text-[32px] tablet:mt-0 mt-5 text-2xl font-extrabold' >{titleB}</h2> 
        <Form data={form} btnF='Book Now'/>
      </div>
      <Image
       src={bikeImg}
       alt='bike'
       className=' self-end 2xl:h-[542px] 2xl:w-[50.985%] w-1/2 m-tablet:block  hidden'
      />
    </section>
  )
}
