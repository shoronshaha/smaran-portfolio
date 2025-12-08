import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "576px",
        xl: "1200px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light_bg: "#f3f9fc",
      },
      backgroundImage: {
        banner: "url('/display-dark.png')",
      },
    },
  },
  plugins: [],
};
export default config;
