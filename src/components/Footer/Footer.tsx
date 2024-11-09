import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { JsxElement } from "typescript";

interface data 
{
    logo : StaticImageData;
    dataF : footerData[];
    Social : SocialData[];
    copy : string;
}
interface footerData
{
    title: string;
    list: list[];
}
interface SocialData
{
    title: string;
    socialIcon: SocialIcon[];
}
interface list{
    icon: string |JSX.Element;
    li: string;
    path:string;
}

interface SocialIcon {
    icon: JSX.Element;
    path: string;
}

export default function Footer({logo, dataF , Social , copy} : data) {
  return (
    <footer className="px-[13.021%] py-10 bg-[#333333]">
      <div>
        <Image
        src={logo}
        alt="logo"
        className="mb-[33px]"
        />
      </div>
      <div className="py-[33px] text-white flex justify-between gap-[93.7px] border-y 	">
            {dataF.map((e,i) => (
                <div key={i}>
                    <h3 className=" text-xl font-extrabold mb-5">{e.title}</h3>
                    <ul >
                        {e.list.map((e,i)=>(
                            <li key={i} className="flex text-lg mb-2.5 items-center font-semibold gap-2.5">
                                {e.icon}
                                <Link href={e.path}>{e.li}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {Social.map((e,i) => (
                <div key={i}>
                    <h3 className=" text-center text-xl font-extrabold mb-5">{e.title}</h3>
                    <ul className="flex gap-5">
                        {e.socialIcon.map((e,i) => (
                            <li className="w-[50px] h-[50px] rounded-full bg-[#FA8B02] flex justify-center items-center text-[#333333]">
                                <a href={e.path}>{e.icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
      </div>
      <div className=" text-white text-center py-10">
        <h3 className=" text-base font-normal">{copy}</h3>
      </div>
      
    </footer>
  )
}
