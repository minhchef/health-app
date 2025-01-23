import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      light: "#FFFFFF",
      "gray-400": "#777777",
      "dark-500": "#414141",
      "dark-600": "#2E2E2E",
      "primary-300": "#FFCC21",
      "primary-400": "#FF963C",
      "primary-500": "#EA6C00",
      "secondary-300": "#8FE9D0",
      "main": "#707070",
      "primary-300-400": {
        from: "#FFCC21",
        to: "#FF963C",
      },
    },
    extend: {
      borderWidth: {
        '20': '20px',
      },
      fontFamily: {
        sans: ["Inter"],
        'noto-san': ["Noto Sans JP"]
      },
    },
  },
  plugins: [],
} satisfies Config;
