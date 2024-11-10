import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily : 
      {
        podcast: ['var(--font-podcast)', 'sans-serif'],
      },
      backgroundImage: 
      {
        "about" : "url(../../src/assets/Img/about-bg.png)",
        "about-serv" :  "url(../../src/assets/Img/bg.png)"
      },
      screens:
      {
        "lg-desktop" : '1920px',
        "desktop" : '1600px',
        "laptop" : '1200px',
        "tablet" : '992px',
        "m-tablet" : '768px',
        "phone" : '576px',

      }
    },
  },
  plugins: [],
};
export default config;
