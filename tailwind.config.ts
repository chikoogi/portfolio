import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "noise": "url('/assets/images/noise-background.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": {
          "1": "#262526",
          "2": "#F2F2F0",
          "3": "#D9D8D7",
          "4":"#737272",
          "5":"#0D0D0D",
        },
        "ivory": {
          "1": "#fcfdf8",
          "2": "#e0e3e4",
          "3": "#46536d",
          "4":"#858c98",
          "5":"#b7bcc2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
