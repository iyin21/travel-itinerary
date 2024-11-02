/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {white:{
        100:"#ffffff",
      },
      blue:{
        100:"#0D6EFD",
        90:"#0A369D",
        80:"#0054E4",
        70:"#E7F0FF",
        60:"#CFE9FF",
        50:"#000031",
      },
      black:{
        100:"#000000",
        90:"#1D2433"
      },
      gray:{
        100:"#676E7E"
      },
      neutral: {
        2: "rgba(19, 32, 19, 0.02)",
        5: "rgba(19, 32, 19, 0.05)",
        10: "rgba(19, 32, 19, 0.1)",
        20: "rgba(19, 32, 19, 0.2)",
        30: "rgba(19, 32, 19, 0.3)",
        40: "rgba(19, 32, 19, 0.4)",
        50: "rgba(19, 32, 19, 0.5)",
        60: "rgba(19, 32, 19, 0.6)",
        70: "rgba(19, 32, 19, 0.7)",
        80: "rgba(19, 32, 19, 0.8)",
        90: "rgba(19, 32, 19, 0.9)",
        100: "rgba(19, 32, 19, 1)",
        110: "rgba(23, 40, 24, 0.1)",
    },
    },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "2xl": ["28px", "36px"],
        "xl": ["24px", "32px"],
        "2lg": ["20px", "28px"],
        "lg": ["18px", "26px"],
        md: ["16px", "24px"],
        "2sm": ["14px", "22px"],
        "sm": ["12px", "22px"],
        
    },
    backgroundImage: {
      "banner": "url('/src/assets/images/banner.png')",
      "hero-background2": "url('/src/assets/images/Slider2.png')",
      "small-hero-background2": "url('/src/assets/images/Slider3.png')",
      
  },
    },
  },
  plugins: [],
}

