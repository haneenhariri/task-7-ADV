import Popular1 from '@/assets/Img/PopularImg/Popular-1.png'
import Popular2 from '@/assets/Img/PopularImg/Popular-2.png'
import Popular3 from '@/assets/Img/PopularImg/Popular-3.png'
import Popular4 from '@/assets/Img/PopularImg/Popular-4.png'
import icon1 from '@/assets/icon/icon_one day.png'
import icon2 from '@/assets/icon/icon_map.png'
import icon3 from '@/assets/icon/icon_city map.png'
import icon4 from '@/assets/icon/icon_support.png'
import icon5 from '@/assets/icon/icon_mountain bike.png'
import icon6 from '@/assets/icon/icon_guide.png'
import icon7 from '@/assets/icon/icon_water.png'
import icon8 from '@/assets/icon/icon_ticket.png'
import icon9 from '@/assets/icon/icon_bus.png'
import icon10 from '@/assets/icon/icon_companion.png'
import icon11 from '@/assets/icon/icon_driver.png'
import icon12 from '@/assets/icon/icon_location.png'
import icon13 from '@/assets/icon/icon_best price.png'

const PopularData = 
[
    {
        img: Popular1,
        title: 'BIKE / RICKSHAW',
        price: '10',
        serv: 
        [
            {
                icon: icon1,
                text: 'Your bike for a day',
            },
            {
                icon: icon2,
                text: 'City App',
            },
            {
                icon: icon3,
                text: 'Discount on Rickshaw',
            },
            {
                icon: icon4,
                text: 'Guaranteed Support',
            },
        ],
        btn: 'Book Now',
    },
    {
        img: Popular2,
        title: 'BIKE TOURS',
        price: '30',
        serv: 
        [
            {
                icon:icon5,
                text: 'A Mountain Bike Included',
            },
            {
                icon: icon6,
                text: 'A Guide For You',
            },
            {
                icon: icon7,
                text: 'Bottle of water',
            },
            {
                icon: icon4,
                text: 'Guaranteed Support',
            },
        ],
        btn: 'Book Now',
    },
    {
        img: Popular3,
        title: 'BUS TRIPS',
        price: '45',
        serv: 
        [
            {
                icon:icon8,
                text: 'A Mountain Bike Included',
            },
            {
                icon: icon9,
                text: 'Return bus',
            },
            {
                icon: icon10,
                text: 'Companion',
            },
            {
                icon: icon4,
                text: 'Guaranteed Support',
            },
        ],
        btn: 'Book Now',
    },
    {
        img: Popular4,
        title: 'TRANSFER',
        price: '10',
        serv: 
        [
            {
                icon:icon11,
                text: 'Personal Driver',
            },
            {
                icon: icon12,
                text: 'Wherever You Want',
            },
            {
                icon: icon13,
                text: 'At the best price',
            },
            {
                icon: icon4,
                text: 'Guaranteed Support',
            },
        ],
        btn: 'Book Now',
    },
]

export default PopularData;