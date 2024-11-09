import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export  const footerdata = 
[
    {
        title: 'Services',
        list : 
        [
            {
                icon: '',
                li: 'Bike and Rickshaw rental',
                path: '',
            },
            {
                icon: '',
                li: 'Guided Tours of Lucca',
                path: '',
            },
            {
                icon: '',
                li: 'Guided Bike Tour of Lucca',
                path: '',
            },
            {
                icon: '',
                li: 'Trip In The Tuscan Hills',
                path: '',
            },
            {
                icon: '',
                li: 'Transportation With Luxury Cars',
                path: '',
            },
            {
                icon: '',
                li: 'Wine Tours By Bus With Guide',
                path: '',
            },
        ]
    },
    {
        title: 'Home',
        list : 
        [
            {
                icon: '',
                li: 'Home',
                path: '/',
            },
            {
                icon: '',
                li: 'About Us',
                path: '/about',
            },
            {
                icon: '',
                li: 'Tour Packages',
                path: '',
            },
        ]
    },
    {
        title: 'Contacts',
        list : 
        [
            {
                icon: <FaLocationDot className=" w-6 h-6 text-[#FA8B02]" />,
                li: 'Piazza Napoleone, Lucca, Tuscany',
                path: '',
            },
            {
                icon: <FaPhoneAlt className=" w-6 h-6 text-[#FA8B02]" />,
                li: '+39 346 368 5708',
                path: '',
            },
            {
                icon: <MdEmail className=" w-6 h-6 text-[#FA8B02]"/>,
                li: 'italiainlimo@gmail.com',
                path: '',
            },
        ]
    },
];
export const Social = [
    {
        title: 'Social Media',
        socialIcon: [
            {
                icon: <FaTwitter />,  
                path: "#",            
            },
            {
                icon: <FaFacebookF />,
                path: "#",
            },
            {
                icon: <FaInstagram />,
                path: "#",
            },
        ],
    },
];



