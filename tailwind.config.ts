import { Config } from "tailwindcss/types/config";
import { colors } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        rubik: ["var(--font-rubik)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        myconsole: {
          theme: "#4fc3f7",
          accent: "#5DB6D6",
          accent2: "#C4F9FF",
          gray: "#4A7E92",
          sky: "#11BAE5",
          red: {
            "50": "#f0f9ff",
            "100": "#e0f2fe",
            "200": "#bbe6fc",
            "300": "#7ed3fb",
            "400": "#4fc3f7",
            "500": "#10a4e7",
            "600": "#0483c5",
            "700": "#05699f",
            "800": "#085984",
            "900": "#0d4a6d",
            "950": "#092f48",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
