import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        subText: "var(--subText)",
        textBasic: "var(--textBasic)",
        background: "var(--background)",
        hoverSubText: "rgba(var(--hover--subText))",
        navBackground: "var(--nav--background)",
        navBackdrop: "hsl(var(--nav--backdrop))",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), nextui()],
};
export default config;
