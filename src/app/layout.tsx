import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from 'next/font/google';
import localeFont from 'next/font/local'
import NavBar from "@/components/NavBar/NavBar";
import navData from "@/data/NavData";
import down from "@/assets/Img/chevron-down.png"
import logo from "@/assets/Img/logo (8).png"
import Footer from "@/components/Footer/Footer";
import { footerdata, Social } from "@/data/FooterData";

const openSans = Open_Sans({
  subsets: ['latin'], 
  weight: ['400', '600', '700'], 
});

const podcast = localeFont(
  {
    src: '/fonts/Podcast.ttf',
    variable: "--font-podcast"
  }
)

export const metadata: Metadata = {
  title: "best way",
  description: "Enjoy our services for your trip anytime ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${podcast.variable} ${openSans.className}`}>
        <NavBar
        span="Eng" 
        logIn="Login"
        up="Sign Up" 
        navData ={navData}
        down={down}
        logo={logo}
        />
        {children}
        <Footer
        logo={logo}
        dataF={footerdata}
        Social={Social}
        copy="Copyright © 2022.  All rights reserved."
        />
      </body>
    </html>
  );
}
