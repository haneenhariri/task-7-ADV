import slider1 from '@/assets/Img/slider/slider-1-img.png'
import slider2 from '@/assets/Img/slider/slider-2-img.png'
import slider3 from '@/assets/Img/slider/slider-3-img.png'
import slider4 from '@/assets/Img/slider/slider-4-img.png'
import slider5 from '@/assets/Img/slider/slider-1-img.png'
import slider6 from '@/assets/Img/slider/slider-3-img.png'
import { CiCalendarDate } from 'react-icons/ci'
import { PiUsersThreeLight } from 'react-icons/pi'


const CardSlider = 
[
    {
        img : slider1,
        titleCard: 'Lucca Bike Tour',
        price : '34 €',
        info : [
            {
                icon:  <CiCalendarDate className=" text-2xl"/>,
                text: 'EVERY DAY',
            },
            {
                icon: <PiUsersThreeLight className=" text-2xl"/>,
                text: '3-10 PP',
            },
        ],
        textCard: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        img : slider2,
        titleCard: 'Wine tasting In Tuscany',
        price : '34 €',
        info : [
            {
                icon:  <CiCalendarDate className=" text-2xl"/>,
                text: 'MONDAY',
            },
            {
                icon: <PiUsersThreeLight className=" text-2xl"/>,
                text: '3-10 PP',
            },
        ],
        textCard: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...',
    },
    {
        img : slider3,
        titleCard: 'Cinque Terre Tour',
        price : '34 €',
        info : [
            {
                icon:  <CiCalendarDate className=" text-2xl"/>,
                text: 'TO BE DECIDED',
            },
            {
                icon: <PiUsersThreeLight className=" text-2xl"/>,
                text: '3-10 PP',
            },
        ],
        textCard: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    },
    {
        img : slider4,
        titleCard: 'Siena and Surroundings',
        price : '34 €',
        info : [
            {
                icon:  <CiCalendarDate className=" text-2xl"/>,
                text: 'TO BE DECIDED',
            },
            {
                icon: <PiUsersThreeLight className=" text-2xl"/>,
                text: '5-10 PP',
            },
        ],
        textCard: 'Visit the beautiful Siena and the cities that surround it to experience ...',
    },
    {
        img : slider5,
        titleCard: 'Lucca Bike Tour',
        price : '34 €',
        info : [
            {
                icon:  <CiCalendarDate className=" text-2xl"/>,
                text: 'EVERY DAY',
            },
            {
                icon: <PiUsersThreeLight className=" text-2xl"/>,
                text: '3-10 PP',
            },
        ],
        textCard: 'A tour of the city and its surroundings led by a professional guide ...',
    },
    {
        img : slider6,
        titleCard: 'Wine tasting In Tuscany',
        price : '34 €',
        info : [
            {
                icon:  <CiCalendarDate className=" text-2xl"/>,
                text: 'MONDAY',
            },
            {
                icon: <PiUsersThreeLight className=" text-2xl"/>,
                text: '3-10 PP',
            },
        ],
        textCard: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...',
    },
]

export default CardSlider ;