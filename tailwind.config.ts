import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
      },

      colors: {
        Background: '#F8F7F3',
        Black: '#1C1C1C',
        White: '#FFF',
        AccentYellow: '#FDAC42',
        AccentBackground: '#E9E6E1',
        AccentRed: '#D0583F',
        Grey: '#BFBFBF',
      },

      fontSize: {
        xxxs: ['14px', '20px'],
        xxs: ['16px', '20px'],
        xsx: ['18px', '20px'],
        xs: ['16px', '24px'],
        s: ['18px', '24px'],
        sm: ['20px', '24px'],
        m: ['24px', '32px'],
        l: ['32px', '40px'],
        xl: ['96px', '104px'],
        cartL: ["20px", '30px'],
        titleHeroMob: ['48px', '64px'],
        supperSmall: ['12px', '20px'],
      },

      screens: {
        'mobile': '320px',
        'tablet': '744px',
        'desktop': '1440px',
      },
      boxShadow: {
        booksShadow: '15px 10px 12px 3px rgba(0,0,0,0.75)',
        custom: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;