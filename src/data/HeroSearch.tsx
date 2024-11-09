import { CiCalendarDate } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePublic, MdOutlineTour } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";

const tabs =
[
    {

        label: "Public Tours",
        icon : <MdOutlinePublic  className=" text-2xl"/>,
        content : 
        [
            {
                label : "Number of people",
                icon : <PiUsersThreeLight className=" text-2xl"/>,
                select: "Choose number"
            },
            {
                label : "Date",
                icon : <CiCalendarDate className=" text-2xl"/>,
                select: "Choose Date"
            },
            {
                label : "Time",
                icon : <IoMdTime className=" text-2xl"/>,
                select: "Choose Time"
            },
            {
                label : "Tour",
                icon : <MdOutlineTour className=" text-2xl" />,
                select: "Select Tour"
            },
            {
                label : "Transportation",
                icon : <FaCar className=" text-2xl"/>,
                select: "Select Transportation"
            },
        ]

    },
    {
        label: "Private Tours",
        icon : <PiUsersThreeLight className=" text-2xl"/>,
        content : 
        [
            {
                label : "Number of people",
                icon : <PiUsersThreeLight className=" text-2xl"/>,
                select: "Choose number"
            },
            {
                label : "Date",
                icon : <CiCalendarDate className=" text-2xl"/>,
                select: "Choose Date"
            },
            {
                label : "Time",
                icon : <MdOutlinePublic className=" text-2xl"/>,
                select: "Choose Time"
            },
            {
                label : "Tour",
                icon : <MdOutlinePublic className=" text-2xl" />,
                select: "Select Tour"
            },
            {
                label : "Transportation",
                icon : <MdOutlinePublic className=" text-2xl"/>,
                select: "Select Transportation"
            },
        ]

    },
]

export default tabs ;