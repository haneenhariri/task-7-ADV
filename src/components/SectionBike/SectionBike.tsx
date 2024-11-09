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
    <section className='flex  justify-between  bike px-[13.021%]'>
      <div className='self-start w-1/2 mt-[60px]'>
        <h2 className='text-center text-[32px] font-extrabold' >{titleB}</h2> 
        <Form data={form} btnF='Book Now'/>
      </div>
      <Image
       src={bikeImg}
       alt='bike'
       className=' self-end h-[542px] w-[50.985%]'
      />
    </section>
  )
}
