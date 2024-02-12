import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
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
        //[fontSize, lineHeight]
        xxxs: ['14px', '20px'],
        xxs: ['16px', '20px'],
        xsx: ['18px', '20px'],
        xs: ['16px', '24px'],
        s: ['18px', '24px'],
        sm: ['20px', '24px'],
        m: ['24px', '32px'],
        l: ['32px', '40px'],
        xl: ['96px', '104px'],
      },

      screens: {
        'mobile': '320px',
        'tablet': '744px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
